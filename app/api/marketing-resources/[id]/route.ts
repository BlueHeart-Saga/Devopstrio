import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import fs from "fs";
import { requireAdmin, AdminAuthError } from "@/lib/admin/require-admin";
import { recordAuditLog } from "@/lib/admin/audit-log";

export const dynamic = "force-dynamic";

const COLLECTION = "marketing_resources";
const LOCAL_DB_FILE = path.join(process.cwd(), "data", "local-marketing-db.json");

async function getLocalResources(): Promise<any[]> {
  try {
    if (!fs.existsSync(LOCAL_DB_FILE)) return [];
    const content = await readFile(LOCAL_DB_FILE, "utf-8");
    return JSON.parse(content || "[]");
  } catch (err) {
    console.warn("Failed to read local marketing DB:", err);
    return [];
  }
}

async function saveLocalResources(items: any[]): Promise<void> {
  try {
    const dir = path.dirname(LOCAL_DB_FILE);
    await mkdir(dir, { recursive: true });
    await writeFile(LOCAL_DB_FILE, JSON.stringify(items, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to save local marketing DB:", err);
  }
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 1. Try MongoDB
    try {
      if (ObjectId.isValid(id)) {
        const { db } = await connectToDatabase();
        const resource = await db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
        if (resource) {
          return NextResponse.json({ id: resource._id.toString(), ...resource, _id: undefined });
        }
      }
    } catch (mongoErr) {
      // Ignore and fallback
    }

    // 2. Fallback to Local JSON DB
    const localItems = await getLocalResources();
    const item = localItems.find((r) => r.id === id);
    if (item) {
      return NextResponse.json(item);
    }

    return NextResponse.json({ error: "Resource not found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch resource" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdmin("marketingResources", req);
    const { id } = await params;
    const body = await req.json();

    // 1. Try MongoDB
    try {
      if (ObjectId.isValid(id)) {
        const { db } = await connectToDatabase();
        const { id: _id_str, _id, created_at, downloads, ...updateFields } = body;

        const result = await db.collection(COLLECTION).findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $set: { ...updateFields, updated_at: new Date() } },
          { returnDocument: "after" }
        );

        if (result) {
          await recordAuditLog({
            actorId: admin.id,
            username: admin.username,
            action: "marketing_resource.update",
            resource: "marketingResources",
            resourceId: id,
            result: "success",
          });
          return NextResponse.json({ id: result._id.toString(), ...result, _id: undefined });
        }
      }
    } catch (mongoErr) {
      // Ignore and fallback
    }

    // 2. Fallback to Local JSON DB
    const localItems = await getLocalResources();
    const index = localItems.findIndex((r) => r.id === id);
    if (index !== -1) {
      const updated = {
        ...localItems[index],
        ...body,
        id,
        updated_at: new Date(),
      };
      localItems[index] = updated;
      await saveLocalResources(localItems);

      await recordAuditLog({
        actorId: admin.id,
        username: admin.username,
        action: "marketing_resource.update",
        resource: "marketingResources",
        resourceId: id,
        result: "success",
      });

      return NextResponse.json(updated);
    }

    return NextResponse.json({ error: "Resource not found" }, { status: 404 });
  } catch (error: any) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Failed to update resource:", error);
    return NextResponse.json({ error: "Failed to update resource" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdmin("marketingResources", req);
    const { id } = await params;

    // 1. Try MongoDB
    try {
      if (ObjectId.isValid(id)) {
        const { db } = await connectToDatabase();
        const result = await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount > 0) {
          await recordAuditLog({
            actorId: admin.id,
            username: admin.username,
            action: "marketing_resource.delete",
            resource: "marketingResources",
            resourceId: id,
            result: "success",
          });
          return NextResponse.json({ success: true });
        }
      }
    } catch (mongoErr) {
      // Ignore and fallback
    }

    // 2. Fallback to Local JSON DB
    const localItems = await getLocalResources();
    const filtered = localItems.filter((r) => r.id !== id);
    if (filtered.length !== localItems.length) {
      await saveLocalResources(filtered);
      await recordAuditLog({
        actorId: admin.id,
        username: admin.username,
        action: "marketing_resource.delete",
        resource: "marketingResources",
        resourceId: id,
        result: "success",
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Resource not found" }, { status: 404 });
  } catch (error: any) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Failed to delete resource:", error);
    return NextResponse.json({ error: "Failed to delete resource" }, { status: 500 });
  }
}

// PATCH: increment download count
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 1. Try MongoDB
    try {
      if (ObjectId.isValid(id)) {
        const { db } = await connectToDatabase();
        await db.collection(COLLECTION).updateOne(
          { _id: new ObjectId(id) },
          { $inc: { downloads: 1 } }
        );
        return NextResponse.json({ success: true });
      }
    } catch (mongoErr) {
      // Ignore and fallback
    }

    // 2. Fallback to Local JSON DB
    const localItems = await getLocalResources();
    const item = localItems.find((r) => r.id === id);
    if (item) {
      item.downloads = (item.downloads || 0) + 1;
      await saveLocalResources(localItems);
      return NextResponse.json({ success: true, downloads: item.downloads });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update download count:", error);
    return NextResponse.json({ error: "Failed to update download count" }, { status: 500 });
  }
}
