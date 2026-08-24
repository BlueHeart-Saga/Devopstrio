import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const COLLECTION = "culture_albums";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const items = await db.collection(COLLECTION).find().sort({ created_at: -1 }).toArray();

    const formatted = items.map((item: any) => ({
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
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Failed to fetch culture albums from database:", error);
    return NextResponse.json({ error: "Failed to fetch culture albums" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { db } = await connectToDatabase();

    const now = new Date();
    const newItem = {
      titlePrefix: String(body.titlePrefix || "").trim(),
      titleHighlight: String(body.titleHighlight || "").trim(),
      titleSuffix: String(body.titleSuffix || "").trim(),
      description: String(body.description || "").trim(),
      formTitle: String(body.formTitle || "Stay updated with Devopstrio Culture & Career news").trim(),
      reportType: String(body.reportType || "CULTURE ALBUM").trim(),
      coverTitleLine1: String(body.coverTitleLine1 || "CULTURE").trim(),
      coverTitleLine2: String(body.coverTitleLine2 || "ALBUM").trim(),
      coverEdition: String(body.coverEdition || "2026 EDITION").trim(),
      coverBrand: String(body.coverBrand || "Devopstrio").trim(),
      status: body.status === "inactive" ? "inactive" : "active",
      pdfUrl: body.pdfUrl || "",
      pdfName: body.pdfName || "",
      pdfSize: body.pdfSize || undefined,
      created_at: now,
      updated_at: now
    };

    const result = await db.collection(COLLECTION).insertOne(newItem);

    return NextResponse.json(
      { id: result.insertedId.toString(), ...newItem },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to add culture album to database:", error);
    return NextResponse.json({ error: "Failed to add culture album" }, { status: 500 });
  }
}
