import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "jobs.json");

async function getJobs() {
  try {
    const file = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(file);
  } catch (err) {
    return [];
  }
}

export async function GET() {
  const jobs = await getJobs();
  return NextResponse.json(jobs);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const jobs = await getJobs();
    
    // Ensure the data directory exists
    try {
      await fs.access(path.join(process.cwd(), "data"));
    } catch {
      await fs.mkdir(path.join(process.cwd(), "data"), { recursive: true });
    }
    
    const newJob = {
      id: Date.now(),
      ...body
    };
    
    jobs.push(newJob);
    await fs.writeFile(dataFilePath, JSON.stringify(jobs, null, 2));
    
    return NextResponse.json(newJob, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add job" }, { status: 500 });
  }
}
