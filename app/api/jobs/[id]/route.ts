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

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    const body = await req.json();
    const jobs = await getJobs();
    
    const index = jobs.findIndex((j: any) => j.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }
    
    jobs[index] = { ...jobs[index], ...body };
    await fs.writeFile(dataFilePath, JSON.stringify(jobs, null, 2));
    
    return NextResponse.json(jobs[index]);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update job" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    let jobs = await getJobs();
    
    jobs = jobs.filter((j: any) => j.id !== id);
    await fs.writeFile(dataFilePath, JSON.stringify(jobs, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
  }
}
