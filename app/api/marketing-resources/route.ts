import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const COLLECTION = "marketing_resources";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const type = searchParams.get("type");
    const search = searchParams.get("search");

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

    const formatted = resources.map((r) => ({
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

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Failed to fetch marketing resources:", error);
    return NextResponse.json({ error: "Failed to fetch resources" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { db } = await connectToDatabase();

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

    const result = await db.collection(COLLECTION).insertOne(newResource);

    return NextResponse.json(
      { id: result.insertedId.toString(), ...newResource },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create marketing resource:", error);
    return NextResponse.json({ error: "Failed to create resource" }, { status: 500 });
  }
}
