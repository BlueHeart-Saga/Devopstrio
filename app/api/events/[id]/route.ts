import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "events.json");

async function getEvents() {
  try {
    const file = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(file);
  } catch (err) {
    return [];
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: rawId } = await params;
    const id = parseInt(rawId);
    const body = await req.json();
    const items = await getEvents();
    
    const index = items.findIndex((p: any) => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    items[index] = { ...items[index], ...body, id };
    
    await fs.writeFile(dataFilePath, JSON.stringify(items, null, 2));
    return NextResponse.json(items[index]);
  } catch (error) {
    console.error("Failed to update event:", error);
    return NextResponse.json({ error: "Failed to update event" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: rawId } = await params;
    const id = parseInt(rawId);
    let items = await getEvents();
    
    items = items.filter((p: any) => p.id !== id);
    
    await fs.writeFile(dataFilePath, JSON.stringify(items, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete event:", error);
    return NextResponse.json({ error: "Failed to delete event" }, { status: 500 });
  }
}
