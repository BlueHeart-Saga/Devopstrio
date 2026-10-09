import { NextResponse } from "next/server";
import { getStoredApplications, createStoredApplication } from "@/lib/applicationsStore";
import { requireAdmin, AdminAuthError } from "@/lib/admin/require-admin";
import { recordAuditLog } from "@/lib/admin/audit-log";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const admin = await requireAdmin("applications", req);

    await recordAuditLog({
      actorId: admin.id,
      username: admin.username,
      action: "applications.list_viewed",
      resource: "applications",
      result: "success",
    });

    const applications = await getStoredApplications();
    return NextResponse.json(applications);
  } catch (error: any) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Failed to fetch applications:", error);
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newApp = await createStoredApplication(body);
    return NextResponse.json(newApp, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create application:", error);
    return NextResponse.json({ error: "Failed to store application" }, { status: 500 });
  }
}
