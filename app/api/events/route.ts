import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const items = await db.collection("events").find().toArray();
    
    const formattedItems = items.map(item => ({
      id: item._id.toString(),
      eventName: item.eventName,
      year: item.year,
      images: item.images || []
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
    
    const newItem = {
      eventName: body.eventName,
      year: body.year,
      images: body.images || [],
      created_at: new Date()
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
