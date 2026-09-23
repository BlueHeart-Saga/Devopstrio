import { NextResponse } from "next/server";
import { deleteStoredApplication } from "@/lib/applicationsStore";

export const dynamic = "force-dynamic";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deleteStoredApplication(id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Failed to delete application:", error);
    return NextResponse.json({ error: "Failed to delete application" }, { status: 500 });
  }
}
