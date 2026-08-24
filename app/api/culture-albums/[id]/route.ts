import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic";

const COLLECTION = "culture_albums";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid album ID" }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    const item = await db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });

    if (!item) {
      return NextResponse.json({ error: "Culture album not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: item._id.toString(),
      titlePrefix: item.titlePrefix || "",
      titleHighlight: item.titleHighlight || "",
      titleSuffix: item.titleSuffix || "",
      description: item.description || "",
      formTitle: item.formTitle || "",
      reportType: item.reportType || "CULTURE ALBUM",
      coverTitleLine1: item.coverTitleLine1 || "",
      coverTitleLine2: item.coverTitleLine2 || "",
      coverEdition: item.coverEdition || "",
      coverBrand: item.coverBrand || "Devopstrio",
      status: item.status || "active",
      pdfUrl: item.pdfUrl || "",
      pdfName: item.pdfName || "",
      pdfSize: item.pdfSize || undefined,
      created_at: item.created_at,
      updated_at: item.updated_at
    });
  } catch (error) {
    console.error("Failed to fetch culture album:", error);
    return NextResponse.json({ error: "Failed to fetch culture album" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid album ID" }, { status: 400 });
    }

    const body = await req.json();
    const { db } = await connectToDatabase();

    const updateFields: any = {
      updated_at: new Date()
    };

    if (body.titlePrefix !== undefined) updateFields.titlePrefix = String(body.titlePrefix).trim();
    if (body.titleHighlight !== undefined) updateFields.titleHighlight = String(body.titleHighlight).trim();
    if (body.titleSuffix !== undefined) updateFields.titleSuffix = String(body.titleSuffix).trim();
    if (body.description !== undefined) updateFields.description = String(body.description).trim();
    if (body.formTitle !== undefined) updateFields.formTitle = String(body.formTitle).trim();
    if (body.reportType !== undefined) updateFields.reportType = String(body.reportType).trim();
    if (body.coverTitleLine1 !== undefined) updateFields.coverTitleLine1 = String(body.coverTitleLine1).trim();
    if (body.coverTitleLine2 !== undefined) updateFields.coverTitleLine2 = String(body.coverTitleLine2).trim();
    if (body.coverEdition !== undefined) updateFields.coverEdition = String(body.coverEdition).trim();
    if (body.coverBrand !== undefined) updateFields.coverBrand = String(body.coverBrand).trim();
    if (body.status !== undefined) updateFields.status = body.status === "inactive" ? "inactive" : "active";
    if (body.pdfUrl !== undefined) updateFields.pdfUrl = body.pdfUrl;
    if (body.pdfName !== undefined) updateFields.pdfName = body.pdfName;
    if (body.pdfSize !== undefined) updateFields.pdfSize = body.pdfSize;

    const result = await db.collection(COLLECTION).findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateFields },
      { returnDocument: "after" }
    );

    if (!result) {
      return NextResponse.json({ error: "Culture album not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: result._id.toString(),
      titlePrefix: result.titlePrefix || "",
      titleHighlight: result.titleHighlight || "",
      titleSuffix: result.titleSuffix || "",
      description: result.description || "",
      formTitle: result.formTitle || "",
      reportType: result.reportType || "CULTURE ALBUM",
      coverTitleLine1: result.coverTitleLine1 || "",
      coverTitleLine2: result.coverTitleLine2 || "",
      coverEdition: result.coverEdition || "",
      coverBrand: result.coverBrand || "Devopstrio",
      status: result.status || "active",
      pdfUrl: result.pdfUrl || "",
      pdfName: result.pdfName || "",
      pdfSize: result.pdfSize || undefined,
      created_at: result.created_at,
      updated_at: result.updated_at
    });
  } catch (error) {
    console.error("Failed to update culture album:", error);
    return NextResponse.json({ error: "Failed to update culture album" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid album ID" }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    const result = await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Culture album not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Culture album deleted successfully" });
  } catch (error) {
    console.error("Failed to delete culture album:", error);
    return NextResponse.json({ error: "Failed to delete culture album" }, { status: 500 });
  }
}
