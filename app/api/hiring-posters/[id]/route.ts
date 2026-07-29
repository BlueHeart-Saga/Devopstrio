import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { db } = await connectToDatabase();

    // Validate ObjectId
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid poster ID" }, { status: 400 });
    }

    const { id: _ignored, _id, created_at, ...updateFields } = body;

    const result = await db.collection("hiring_posters").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { ...updateFields, updated_at: new Date() } },
      { returnDocument: "after" }
    );

    if (!result) {
      return NextResponse.json({ error: "Poster not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: result._id.toString(),
      role: result.role,
      location: result.location,
      type: result.type,
      status: result.status,
      req: result.req,
      accent: result.accent,
      date: result.date,
      image: result.image || "",
    });
  } catch (error) {
    console.error("Failed to update hiring poster:", error);
    return NextResponse.json({ error: "Failed to update hiring poster" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { db } = await connectToDatabase();

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid poster ID" }, { status: 400 });
    }

    const result = await db
      .collection("hiring_posters")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Poster not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete hiring poster:", error);
    return NextResponse.json({ error: "Failed to delete hiring poster" }, { status: 500 });
  }
}
