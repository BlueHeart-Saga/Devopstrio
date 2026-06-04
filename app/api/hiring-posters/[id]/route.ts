import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "hiringPosters.json");

async function getPosters() {
  try {
    const file = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(file);
  } catch (err) {
    return [];
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    const body = await req.json();
    const posters = await getPosters();
    
    const index = posters.findIndex((p: any) => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Poster not found" }, { status: 404 });
    }
    
    posters[index] = { ...posters[index], ...body };
    await fs.writeFile(dataFilePath, JSON.stringify(posters, null, 2));
    
    return NextResponse.json(posters[index]);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update poster" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    let posters = await getPosters();
    
    posters = posters.filter((p: any) => p.id !== id);
    await fs.writeFile(dataFilePath, JSON.stringify(posters, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete poster" }, { status: 500 });
  }
}
