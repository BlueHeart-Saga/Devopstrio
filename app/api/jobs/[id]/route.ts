import { NextResponse } from "next/server";
import { updateStoredJob, deleteStoredJob } from "@/lib/jobsStore";
import { requireAdmin, AdminAuthError } from "@/lib/admin/require-admin";
import { recordAuditLog } from "@/lib/admin/audit-log";

export const dynamic = "force-dynamic";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdmin("jobs", req);
    const { id } = await params;
    const body = await req.json();

    const updated = await updateStoredJob(id, body);
    if (!updated) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    await recordAuditLog({
      actorId: admin.id,
      username: admin.username,
      action: "job.update",
      resource: "jobs",
      resourceId: id,
      result: "success",
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Failed to update job:", error);
    return NextResponse.json({ error: "Failed to update job" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdmin("jobs", req);
    const { id } = await params;
    await deleteStoredJob(id);

    await recordAuditLog({
      actorId: admin.id,
      username: admin.username,
      action: "job.delete",
      resource: "jobs",
      resourceId: id,
      result: "success",
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Failed to delete job:", error);
    return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
  }
}
