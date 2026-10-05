import { NextRequest, NextResponse } from "next/server";
import { BlobServiceClient } from "@azure/storage-blob";
import { ObjectId } from "mongodb";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic";
export const maxDuration = 120;

const AZURE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING || "";
const AZURE_CONTAINER = process.env.AZURE_STORAGE_CONTAINER || "devopstrio";

async function getDatabase() {
  try {
    const { db } = await connectToDatabase();
    return db;
  } catch (err) {
    console.warn("MongoDB connection unavailable for upload route:", err);
    return null;
  }
}

// Process a single file buffer upload to Azure Blob Storage (with Local Filesystem Fallback) & MongoDB
async function processSingleFileBuffer(
  fileBuffer: Buffer,
  fileName: string,
  mimeType: string,
  companyId: string,
  userId: string | null
) {
  let collectionName = "documents";
  let fileType = "document";
  let subDir = "documents";

  if (mimeType.startsWith("image/")) {
    collectionName = "images";
    fileType = "image";
    subDir = "images";
  } else if (mimeType.startsWith("audio/")) {
    collectionName = "audios";
    fileType = "audio";
    subDir = "audios";
  } else if (mimeType.startsWith("video/")) {
    collectionName = "videos";
    fileType = "video";
    subDir = "videos";
  } else if (mimeType.includes("pdf") || fileName.endsWith(".pdf")) {
    subDir = "pdf";
  } else if (fileName.endsWith(".ppt") || fileName.endsWith(".pptx")) {
    subDir = "presentations";
  } else if (fileName.endsWith(".doc") || fileName.endsWith(".docx")) {
    subDir = "documents";
  }

  // Calculate MD5 Hash for deduplication
  const hash = crypto.createHash("md5").update(fileBuffer).digest("hex");

  const fileExtension = fileName.split(".").pop()?.toLowerCase() || "";
  const sanitizedBaseName = (fileName || "file").replace(/[^a-zA-Z0-9_.-]/g, "_");
  const uniqueBlobName = `uploads/${uuidv4()}${fileExtension ? `.${fileExtension}` : ""}`;
  const uniqueLocalFileName = `${Date.now()}_${sanitizedBaseName}`;

  let publicUrl = "";
  let uploadMethod = "local";

  // 1. Try Azure Blob Storage if connection string is configured
  if (AZURE_CONNECTION_STRING && AZURE_CONNECTION_STRING.trim().length > 10) {
    try {
      const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_CONNECTION_STRING);
      const containerClient = blobServiceClient.getContainerClient(AZURE_CONTAINER);

      await containerClient.createIfNotExists();

      const blockBlobClient = containerClient.getBlockBlobClient(uniqueBlobName);
      await blockBlobClient.uploadData(fileBuffer, {
        blobHTTPHeaders: {
          blobContentType: mimeType || "application/octet-stream",
          blobCacheControl: "public, max-age=31536000",
        },
      });

      publicUrl = process.env.AZURE_CDN_URL
        ? `${process.env.AZURE_CDN_URL.replace(/\/$/, "")}/${uniqueBlobName}`
        : blockBlobClient.url;
      uploadMethod = "azure";
    } catch (azureErr) {
      console.warn("Azure Blob upload failed, falling back to local storage:", azureErr);
    }
  }

  // 2. Fallback to Local Filesystem Storage (public/uploads/...)
  if (!publicUrl) {
    try {
      const uploadDir = path.join(process.cwd(), "public", "uploads", subDir);
      await mkdir(uploadDir, { recursive: true });
      const targetFilePath = path.join(uploadDir, uniqueLocalFileName);
      await writeFile(targetFilePath, fileBuffer);
      publicUrl = `/uploads/${subDir}/${uniqueLocalFileName}`;
      uploadMethod = "local";
    } catch (fsErr) {
      console.error("Local filesystem write failed:", fsErr);
      throw new Error(`Failed to save file locally: ${fsErr instanceof Error ? fsErr.message : String(fsErr)}`);
    }
  }

  // 3. Record Metadata in MongoDB if available
  const newDocId = new ObjectId();
  try {
    const db = await getDatabase();
    if (db) {
      const collection = db.collection(collectionName);
      const metadataDoc: Record<string, any> = {
        _id: newDocId,
        blob_name: uploadMethod === "azure" ? uniqueBlobName : uniqueLocalFileName,
        url: publicUrl,
        company_id: companyId,
        original_filename: fileName,
        filename: `${newDocId.toString()}.${fileExtension || "bin"}`,
        size: fileBuffer.length,
        hash: hash,
        uploaded_by: userId,
        storage_type: uploadMethod,
        created_at: new Date(),
        usage_count: 0,
        used_in: [],
        is_deleted: false,
      };

      if (fileType === "image") {
        metadataDoc.type = "content";
        metadataDoc.updated_at = new Date();
      }

      await collection.insertOne(metadataDoc);
    }
  } catch (dbErr) {
    console.warn("MongoDB recording skipped for upload:", dbErr);
  }

  return {
    success: true,
    file_id: newDocId.toString(),
    url: publicUrl,
    filename: fileName,
    size: fileBuffer.length,
    exists: false,
    storage: uploadMethod,
  };
}

// Fallback multipart parser for handling large payloads of any size (up to 150MB+)
async function parseMultipartBuffer(rawBuffer: Buffer) {
  const firstLineEnd = rawBuffer.indexOf(Buffer.from("\r\n"));
  if (firstLineEnd === -1) return { files: [], fields: {} };

  const delimiter = rawBuffer.subarray(0, firstLineEnd);
  const files: { name: string; filename: string; mimeType: string; data: Buffer }[] = [];
  const fields: Record<string, string> = {};

  let pos = 0;
  while (pos < rawBuffer.length) {
    const idx = rawBuffer.indexOf(delimiter, pos);
    if (idx === -1) break;

    const nextIdx = rawBuffer.indexOf(delimiter, idx + delimiter.length);
    if (nextIdx === -1) break;

    const part = rawBuffer.subarray(idx + delimiter.length, nextIdx);
    const hEnd = part.indexOf(Buffer.from("\r\n\r\n"));

    if (hEnd !== -1) {
      const headerStr = part.subarray(0, hEnd).toString("utf-8");
      // slice after \r\n\r\n and trim trailing \r\n
      let body = part.subarray(hEnd + 4);
      if (body[body.length - 2] === 13 && body[body.length - 1] === 10) {
        body = body.subarray(0, body.length - 2);
      }

      const nameMatch = headerStr.match(/name="([^"]+)"/);
      const filenameMatch = headerStr.match(/filename="([^"]+)"/);
      const mimeMatch = headerStr.match(/Content-Type:\s*([^\r\n]+)/i);

      const fieldName = nameMatch ? nameMatch[1] : "";
      const filename = filenameMatch ? filenameMatch[1] : "";
      const mimeType = mimeMatch ? mimeMatch[1].trim() : "application/octet-stream";

      if (filename) {
        files.push({ name: fieldName, filename, mimeType, data: body });
      } else if (fieldName) {
        fields[fieldName] = body.toString("utf-8").trim();
      }
    }

    pos = nextIdx;
  }

  return { files, fields };
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    // Parse multipart body directly from raw buffer to support 20MB - 150MB+ uploads
    if (contentType.includes("multipart/form-data")) {
      const arrayBuf = await req.arrayBuffer();
      const rawBuf = Buffer.from(arrayBuf);
      console.log("Upload received buffer size:", rawBuf.length, "bytes, content-type:", contentType);
      const { files, fields } = await parseMultipartBuffer(rawBuf);
      console.log("Parsed files count:", files.length);

      const companyId = fields.company_id || process.env.NEXT_PUBLIC_COMPANY_ID || "default";
      const userId = fields.user_id || null;

      if (files.length > 0) {
        const uploadResults = await Promise.all(
          files.map((file) => processSingleFileBuffer(file.data, file.filename, file.mimeType, companyId, userId))
        );

        if (files.length === 1) {
          return NextResponse.json(uploadResults[0]);
        }

        return NextResponse.json({
          ...uploadResults[0],
          count: uploadResults.length,
          files: uploadResults,
        });
      }
    }

    return NextResponse.json({ success: false, error: "No valid files received" }, { status: 400 });
  } catch (error: any) {
    console.error("File upload failed:", error);
    return NextResponse.json(
      { success: false, error: "File upload failed", details: error?.message || String(error) },
      { status: 500 }
    );
  }
}
