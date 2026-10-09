import { NextResponse } from "next/server";
import { deleteStoredApplication } from "@/lib/applicationsStore";
import { requireAdmin, AdminAuthError } from "@/lib/admin/require-admin";
import { recordAuditLog } from "@/lib/admin/audit-log";

export const dynamic = "force-dynamic";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdmin("applications", req);
    const { id } = await params;
    await deleteStoredApplication(id);

    await recordAuditLog({
      actorId: admin.id,
      username: admin.username,
      action: "applications.delete",
      resource: "applications",
      resourceId: id,
      result: "success",
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Failed to delete application:", error);
    return NextResponse.json({ error: "Failed to delete application" }, { status: 500 });
  }
}
