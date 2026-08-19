import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

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
    console.error("Failed to fetch events from database:", error);
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
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
    
    return NextResponse.json(createdItem, { status: 201 });
  } catch (error) {
    console.error("Failed to add event to database:", error);
    return NextResponse.json({ error: "Failed to add event" }, { status: 500 });
  }
}
