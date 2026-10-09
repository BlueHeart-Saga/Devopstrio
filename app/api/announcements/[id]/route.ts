import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";
import { BlobServiceClient } from "@azure/storage-blob";
import { requireAdmin, AdminAuthError } from "@/lib/admin/require-admin";
import { recordAuditLog } from "@/lib/admin/audit-log";

export const dynamic = 'force-dynamic';

const COLLECTION = "announcements";
const AZURE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING || "";
const AZURE_CONTAINER = process.env.AZURE_STORAGE_CONTAINER || "devopstrio";

async function cleanupBlob(db: any, url: string) {
  if (!url || !url.startsWith("http")) return;
  try {
    await db.collection("documents").deleteOne({ url });
    await db.collection("images").deleteOne({ url });

    if (!AZURE_CONNECTION_STRING) return;

    const parsedUrl = new URL(url);
    const pathname = decodeURIComponent(parsedUrl.pathname);
    const containerPrefix = `/${AZURE_CONTAINER}/`;
    let blobName = "";
    
    if (pathname.startsWith(containerPrefix)) {
      blobName = pathname.substring(containerPrefix.length);
    } else {
      const parts = pathname.split("/");
      const containerIndex = parts.indexOf(AZURE_CONTAINER);
      if (containerIndex !== -1 && containerIndex < parts.length - 1) {
        blobName = parts.slice(containerIndex + 1).join("/");
      }
    }

    if (blobName) {
      const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_CONNECTION_STRING);
      const containerClient = blobServiceClient.getContainerClient(AZURE_CONTAINER);
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      await blockBlobClient.deleteIfExists();
    }
  } catch (error) {
    console.error(`Failed to clean up blob for URL ${url}:`, error);
  }
}

function getQueryId(id: string): { query: Record<string, any>; parsedId: ObjectId | number | string } {
  if (ObjectId.isValid(id)) {
    const objId = new ObjectId(id);
    return { query: { _id: objId }, parsedId: objId };
  }
  
  const numericId = parseInt(id);
  if (!isNaN(numericId)) {
    return { query: { $or: [{ id: numericId }, { _id: numericId as any }] }, parsedId: numericId };
  }
  
  return { query: { id: id }, parsedId: id };
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const admin = await requireAdmin("announcements", req);
    const { id } = await params;
    const body = await req.json();
    const { db } = await connectToDatabase();
    
    const { query } = getQueryId(id);
    const existing = await db.collection(COLLECTION).findOne(query);
    if (!existing) {
      return NextResponse.json({ error: "Announcement not found" }, { status: 404 });
    }

    // If PDF was changed/removed, clean up old blob
    if (existing.pdfUrl && existing.pdfUrl !== body.pdfUrl) {
      await cleanupBlob(db, existing.pdfUrl);
    }

    const updateData = {
      titlePrefix: String(body.titlePrefix ?? existing.titlePrefix ?? "").trim(),
      titleHighlight: String(body.titleHighlight ?? existing.titleHighlight ?? "").trim(),
      titleSuffix: String(body.titleSuffix ?? existing.titleSuffix ?? "").trim(),
      description: String(body.description ?? existing.description ?? "").trim(),
      formTitle: String(body.formTitle ?? existing.formTitle ?? "").trim(),
      reportType: String(body.reportType ?? existing.reportType ?? "").trim(),
      coverTitleLine1: String(body.coverTitleLine1 ?? existing.coverTitleLine1 ?? "").trim(),
      coverTitleLine2: String(body.coverTitleLine2 ?? existing.coverTitleLine2 ?? "").trim(),
      coverEdition: String(body.coverEdition ?? existing.coverEdition ?? "").trim(),
      coverBrand: String(body.coverBrand ?? existing.coverBrand ?? "").trim(),
      status: body.status === "inactive" ? "inactive" : "active",
      pdfUrl: body.pdfUrl !== undefined ? body.pdfUrl : (existing.pdfUrl || ""),
      pdfName: body.pdfName !== undefined ? body.pdfName : (existing.pdfName || ""),
      pdfSize: body.pdfSize !== undefined ? body.pdfSize : existing.pdfSize,
      updated_at: new Date()
    };

    await db.collection(COLLECTION).updateOne(query, { $set: updateData });

    await recordAuditLog({
      actorId: admin.id,
      username: admin.username,
      action: "announcement.update",
      resource: "announcements",
      resourceId: id,
      result: "success",
    });

    return NextResponse.json({
      id: existing._id.toString(),
      ...updateData
    });
  } catch (error: any) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Failed to update announcement in database:", error);
    return NextResponse.json({ error: "Failed to update announcement" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const admin = await requireAdmin("announcements", req);
    const { id } = await params;
    const { db } = await connectToDatabase();
    
    const { query } = getQueryId(id);
    const existing = await db.collection(COLLECTION).findOne(query);
    if (!existing) {
      return NextResponse.json({ error: "Announcement not found" }, { status: 404 });
    }

    if (existing.pdfUrl) {
      await cleanupBlob(db, existing.pdfUrl);
    }

    await db.collection(COLLECTION).deleteOne(query);

    await recordAuditLog({
      actorId: admin.id,
      username: admin.username,
      action: "announcement.delete",
      resource: "announcements",
      resourceId: id,
      result: "success",
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Failed to delete announcement from database:", error);
    return NextResponse.json({ error: "Failed to delete announcement" }, { status: 500 });
  }
}
