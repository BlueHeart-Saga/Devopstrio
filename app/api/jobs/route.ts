import { NextResponse } from "next/server";
import { getStoredJobs, createStoredJob } from "@/lib/jobsStore";
import { requireAdmin, AdminAuthError } from "@/lib/admin/require-admin";
import { recordAuditLog } from "@/lib/admin/audit-log";

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
    const admin = await requireAdmin("jobs", req);
    const body = await req.json();
    const newJob = await createStoredJob(body);

    await recordAuditLog({
      actorId: admin.id,
      username: admin.username,
      action: "job.create",
      resource: "jobs",
      resourceId: newJob.id,
      result: "success",
      details: { title: newJob.title, category: newJob.category },
    });

    return NextResponse.json(newJob, { status: 201 });
  } catch (error: any) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Failed to create job:", error);
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 });
  }
}
