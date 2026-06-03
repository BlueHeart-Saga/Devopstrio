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

export async function GET() {
  const posters = await getPosters();
  return NextResponse.json(posters);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const posters = await getPosters();
    
    const newPoster = {
      id: Date.now(),
      ...body
    };
    
    posters.push(newPoster);
    await fs.writeFile(dataFilePath, JSON.stringify(posters, null, 2));
    
    return NextResponse.json(newPoster, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add poster" }, { status: 500 });
  }
}
