import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import fs from "fs";

export const dynamic = "force-dynamic";

const COLLECTION = "marketing_resources";
const LOCAL_DB_FILE = path.join(process.cwd(), "data", "local-marketing-db.json");

// Helper to read local JSON database
async function getLocalResources(): Promise<any[]> {
  try {
    if (!fs.existsSync(LOCAL_DB_FILE)) {
      return [];
    }
    const content = await readFile(LOCAL_DB_FILE, "utf-8");
    return JSON.parse(content || "[]");
  } catch (err) {
    console.warn("Failed to read local marketing DB:", err);
    return [];
  }
}

// Helper to save local JSON database
async function saveLocalResources(items: any[]): Promise<void> {
  try {
    const dir = path.dirname(LOCAL_DB_FILE);
    await mkdir(dir, { recursive: true });
    await writeFile(LOCAL_DB_FILE, JSON.stringify(items, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to save local marketing DB:", err);
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const type = searchParams.get("type");
    const search = searchParams.get("search");

    let formatted: any[] = [];

    // 1. Try MongoDB
    try {
      const { db } = await connectToDatabase();
      const query: Record<string, any> = {};
      if (category && category !== "All") query.category = category;
      if (type && type !== "All") query.type = type;
      if (search) {
        query.$or = [
          { title: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
          { tags: { $elemMatch: { $regex: search, $options: "i" } } },
        ];
      }

      const resources = await db
        .collection(COLLECTION)
        .find(query)
        .sort({ created_at: -1 })
        .toArray();

      formatted = resources.map((r) => ({
        id: r._id.toString(),
        title: r.title,
        category: r.category,
        type: r.type,
        description: r.description,
        fileUrl: r.fileUrl || "",
        thumbnailUrl: r.thumbnailUrl || "",
        fileSize: r.fileSize || "",
        fileName: r.fileName || "",
        tags: r.tags || [],
        badge: r.badge || "",
        featured: r.featured || false,
        downloads: r.downloads || 0,
        status: r.status || "published",
        created_at: r.created_at,
        updated_at: r.updated_at,
      }));
    } catch (mongoErr) {
      // 2. Fallback to Local JSON DB
      const localItems = await getLocalResources();
      let filtered = localItems;

      if (category && category !== "All") {
        filtered = filtered.filter((r) => r.category === category);
      }
      if (type && type !== "All") {
        filtered = filtered.filter((r) => r.type === type);
      }
      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(
          (r) =>
            r.title?.toLowerCase().includes(s) ||
            r.description?.toLowerCase().includes(s) ||
            r.tags?.some((t: string) => t.toLowerCase().includes(s))
        );
      }

      formatted = filtered.sort(
        (a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime()
      );
    }

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Failed to fetch marketing resources:", error);
    return NextResponse.json({ error: "Failed to fetch resources" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const now = new Date();

    const newResource = {
      title: body.title || "",
      category: body.category || "Company Documents",
      type: body.type || "PDF",
      description: body.description || "",
      fileUrl: body.fileUrl || "",
      thumbnailUrl: body.thumbnailUrl || "",
      fileSize: body.fileSize || "",
      fileName: body.fileName || "",
      tags: body.tags || [],
      badge: body.badge || "",
      featured: body.featured || false,
      downloads: 0,
      status: body.status || "published",
      created_at: now,
      updated_at: now,
    };

    // 1. Try MongoDB
    try {
      const { db } = await connectToDatabase();
      const result = await db.collection(COLLECTION).insertOne(newResource);
      return NextResponse.json(
        { id: result.insertedId.toString(), ...newResource },
        { status: 201 }
      );
    } catch (mongoErr) {
      // 2. Fallback to Local JSON DB
      const localItems = await getLocalResources();
      const localId = `local_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      const savedItem = { id: localId, ...newResource };
      localItems.unshift(savedItem);
      await saveLocalResources(localItems);

      return NextResponse.json(savedItem, { status: 201 });
    }
  } catch (error: any) {
    console.error("Failed to create marketing resource:", error);
    return NextResponse.json(
      { error: "Failed to create resource", details: error?.message || String(error) },
      { status: 500 }
    );
  }
}
