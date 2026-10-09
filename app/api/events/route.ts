import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { requireAdmin, AdminAuthError } from "@/lib/admin/require-admin";
import { recordAuditLog } from "@/lib/admin/audit-log";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    // Sort by year / date descending, then created_at descending
    const items = await db.collection("events")
      .find()
      .sort({ year: -1, created_at: -1 })
      .toArray();
    
    const formattedItems = items.map(item => ({
      id: item._id.toString(),
      eventName: item.eventName,
      year: item.year,
      images: Array.isArray(item.images) ? item.images : []
    }));
    
    return NextResponse.json(formattedItems);
  } catch (error) {
    console.warn("Failed to fetch events from database:", error);
    return NextResponse.json([]);
  }
}

export async function POST(req: Request) {
  try {
    const admin = await requireAdmin("events", req);
    const body = await req.json();
    const { db } = await connectToDatabase();
    
    // Sanitize and validate incoming payload
    const images = Array.isArray(body.images) ? body.images.map((img: any) => ({
      src: String(img.src || ""),
      tagname: String(img.tagname || "")
    })).filter((img: any) => img.src) : [];

    const newItem = {
      eventName: String(body.eventName || "Untitled Event").trim(),
      year: String(body.year || new Date().getFullYear().toString()),
      images: images,
      created_at: new Date(),
      updated_at: new Date()
    };
    
    const result = await db.collection("events").insertOne(newItem);
    
    const createdItem = {
      id: result.insertedId.toString(),
      ...newItem
    };

    await recordAuditLog({
      actorId: admin.id,
      username: admin.username,
      action: "event.create",
      resource: "events",
      resourceId: result.insertedId.toString(),
      result: "success",
      details: { eventName: newItem.eventName, year: newItem.year },
    });
    
    return NextResponse.json(createdItem, { status: 201 });
  } catch (error: any) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Failed to add event to database:", error);
    return NextResponse.json({ error: "Failed to add event" }, { status: 500 });
  }
}
