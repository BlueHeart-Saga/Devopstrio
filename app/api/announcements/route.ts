import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "announcements.json");

async function getAnnouncements() {
  try {
    const file = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(file);
  } catch (err) {
    return [];
  }
}

export async function GET() {
  const items = await getAnnouncements();
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items = await getAnnouncements();
    
    const newItem = {
      id: Date.now(),
      ...body
    };
    
    items.push(newItem);
    await fs.writeFile(dataFilePath, JSON.stringify(items, null, 2));
    
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add announcement" }, { status: 500 });
  }
}
