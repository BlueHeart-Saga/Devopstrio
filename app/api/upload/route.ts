import { NextRequest, NextResponse } from "next/server";
import { BlobServiceClient } from "@azure/storage-blob";
import { ObjectId } from "mongodb";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const AZURE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING || "";
const AZURE_CONTAINER = process.env.AZURE_STORAGE_CONTAINER || "devopstrio";

async function getDatabase() {
  const { db } = await connectToDatabase();
  return db;
}

// Process a single file upload to Azure Blob Storage & MongoDB
async function processSingleFile(file: File, companyId: string, userId: string | null) {
  // Determine collection based on MIME type
  let collectionName = "documents";
  let fileType = "document";
  if (file.type.startsWith("image/")) {
    collectionName = "images";
    fileType = "image";
  } else if (file.type.startsWith("audio/")) {
    collectionName = "audios";
    fileType = "audio";
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Calculate MD5 Hash for deduplication
  const hash = crypto.createHash("md5").update(buffer).digest("hex");

  let db;
  let collection;
  try {
    db = await getDatabase();
    collection = db.collection(collectionName);

    // Check if the exact same file is already uploaded for this company
    const existingFile = await collection.findOne({
      company_id: companyId,
      hash: hash,
      is_deleted: { $ne: true }
    });

    if (existingFile) {
      return {
        success: true,
        file_id: existingFile._id.toString(),
        url: existingFile.url,
        filename: existingFile.original_filename,
        size: existingFile.size,
        exists: true
      };
    }
  } catch (dbError) {
    console.warn("MongoDB check failed, skipping deduplication:", dbError);
  }

  // Generate unique blob name: uploads/uuid.extension
  const fileExtension = file.name.split(".").pop()?.toLowerCase() || "";
  const uniqueBlobName = `uploads/${uuidv4()}${fileExtension ? `.${fileExtension}` : ""}`;

  // Initialize Blob Service & Container Clients
  const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_CONNECTION_STRING);
  const containerClient = blobServiceClient.getContainerClient(AZURE_CONTAINER);

  // Get Blob Client
  const blockBlobClient = containerClient.getBlockBlobClient(uniqueBlobName);

  // Upload buffer to Azure with Content-Type & Cache-Control headers
  await blockBlobClient.uploadData(buffer, {
    blobHTTPHeaders: {
      blobContentType: file.type || "application/octet-stream",
      blobCacheControl: "public, max-age=31536000" // Cache for 1 year
    }
  });

  // Resolve public URL (or CDN URL if configured)
  const publicUrl = process.env.AZURE_CDN_URL 
    ? `${process.env.AZURE_CDN_URL}/${uniqueBlobName}`
    : blockBlobClient.url;

  // Create database metadata record matching the existing schema
  const newDocId = new ObjectId();
  const metadataDoc: Record<string, any> = {
    _id: newDocId,
    blob_name: uniqueBlobName,
    url: publicUrl,
    company_id: companyId,
    original_filename: file.name,
    filename: `${newDocId.toString()}.${fileExtension || "bin"}`,
    size: file.size,
    hash: hash,
    uploaded_by: userId,
    created_at: new Date(),
    usage_count: 0,
    used_in: [],
    is_deleted: false
  };

  if (fileType === "image") {
    metadataDoc.type = "content";
    metadataDoc.updated_at = new Date();
  }

  if (collection) {
    try {
      await collection.insertOne(metadataDoc);
    } catch (insertError) {
      console.warn("Failed to insert metadata into MongoDB:", insertError);
    }
  }

  return {
    success: true,
    file_id: newDocId.toString(),
    url: publicUrl,
    filename: file.name,
    size: file.size,
    exists: false
  };
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const companyId = (formData.get("company_id") as string) || process.env.NEXT_PUBLIC_COMPANY_ID || "default";
    const userId = (formData.get("user_id") as string) || null;

    // Collect all uploaded files (supports "files" array or single "file")
    const filesList: File[] = [];
    const multiFiles = formData.getAll("files") as File[];
    const singleFiles = formData.getAll("file") as File[];

    if (multiFiles && multiFiles.length > 0) {
      filesList.push(...multiFiles.filter(f => f instanceof File && f.size > 0));
    }
    if (singleFiles && singleFiles.length > 0) {
      filesList.push(...singleFiles.filter(f => f instanceof File && f.size > 0));
    }

    if (filesList.length === 0) {
      return NextResponse.json({ success: false, error: "No files provided" }, { status: 400 });
    }

    // Process all files in parallel for maximum upload speed
    const uploadResults = await Promise.all(
      filesList.map(file => processSingleFile(file, companyId, userId))
    );

    // If single file was requested, return standard single file response
    if (filesList.length === 1 && !formData.has("files")) {
      return NextResponse.json(uploadResults[0]);
    }

    // Otherwise return batch response
    const primaryResult = uploadResults[0] || { success: true };
    return NextResponse.json({
      ...primaryResult,
      count: uploadResults.length,
      files: uploadResults,
    });

  } catch (error: any) {
    console.error("File upload failed:", error);
    return NextResponse.json({ success: false, error: "File upload failed", details: error.message }, { status: 500 });
  }
}
