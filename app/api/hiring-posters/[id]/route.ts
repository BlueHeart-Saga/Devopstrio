import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";
import { requireAdmin, AdminAuthError } from "@/lib/admin/require-admin";
import { recordAuditLog } from "@/lib/admin/audit-log";

export const dynamic = "force-dynamic";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdmin("hiringPosters", req);
    const { id } = await params;
    const { db } = await connectToDatabase();

    const query = ObjectId.isValid(id) ? { _id: new ObjectId(id) } : { id: id };
    const result = await db.collection("hiring_posters").deleteOne(query);

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Poster not found" }, { status: 404 });
    }

    await recordAuditLog({
      actorId: admin.id,
      username: admin.username,
      action: "hiring_poster.delete",
      resource: "hiringPosters",
      resourceId: id,
      result: "success",
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Failed to delete hiring poster:", error);
    return NextResponse.json({ error: "Failed to delete hiring poster" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdmin("hiringPosters", req);
    const { id } = await params;
    const body = await req.json();
    const { db } = await connectToDatabase();

    const updateDoc: Record<string, any> = {
      updated_at: new Date(),
    };
    if (body.role !== undefined) updateDoc.role = body.role;
    if (body.location !== undefined) updateDoc.location = body.location;
    if (body.type !== undefined) updateDoc.type = body.type;
    if (body.status !== undefined) updateDoc.status = body.status;
    if (body.req !== undefined) updateDoc.req = body.req;
    if (body.accent !== undefined) updateDoc.accent = body.accent;
    if (body.date !== undefined) updateDoc.date = body.date;
    if (body.image !== undefined) updateDoc.image = body.image;

    const query = ObjectId.isValid(id) ? { _id: new ObjectId(id) } : { id: id };
    const result = await db.collection("hiring_posters").updateOne(query, { $set: updateDoc });

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Poster not found" }, { status: 404 });
    }

    await recordAuditLog({
      actorId: admin.id,
      username: admin.username,
      action: "hiring_poster.update",
      resource: "hiringPosters",
      resourceId: id,
      result: "success",
      details: { role: body.role },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Failed to update hiring poster:", error);
    return NextResponse.json({ error: "Failed to update hiring poster" }, { status: 500 });
  }
}

