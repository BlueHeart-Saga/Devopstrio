import { NextResponse } from "next/server";
import { getStoredJobs, createStoredJob } from "@/lib/jobsStore";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const jobs = await getStoredJobs();
    return NextResponse.json(jobs);
  } catch (error) {
    console.warn("Error fetching jobs in /api/jobs GET:", error);
    return NextResponse.json([]);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newJob = await createStoredJob(body);
    return NextResponse.json(newJob, { status: 201 });
  } catch (error) {
    console.error("Failed to create job:", error);
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 });
  }
}
