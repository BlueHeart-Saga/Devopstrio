import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = 'force-dynamic';

const COLLECTION = "announcements";

function createInitialAnnouncement() {
  return {
    titlePrefix: "The ",
    titleHighlight: "AI Impact",
    titleSuffix: " Imperatives, 2026",
    description: "Explore how organizations are turning AI potential into measurable business impact.",
    formTitle: "Stay ahead with our latest Updates",
    reportType: "RESEARCH REPORT",
    coverTitleLine1: "AI IMPACT",
    coverTitleLine2: "IMPERATIVES",
    coverEdition: "2026 EDITION",
    coverBrand: "Devopstrio",
    status: "active",
    pdfUrl: "",
    pdfName: "",
    created_at: new Date(),
    updated_at: new Date()
  };
}

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    let items = await db.collection(COLLECTION).find().sort({ created_at: -1 }).toArray();

    // If MongoDB collection is empty, seed it with the default active announcement
    if (items.length === 0) {
      const initial = createInitialAnnouncement();
      const result = await db.collection(COLLECTION).insertOne(initial);
      items = [{ _id: result.insertedId, ...initial }];
    }

    const formatted = items.map((item: any) => ({
      id: item._id.toString(),
      titlePrefix: item.titlePrefix || "",
      titleHighlight: item.titleHighlight || "",
      titleSuffix: item.titleSuffix || "",
      description: item.description || "",
      formTitle: item.formTitle || "",
      reportType: item.reportType || "RESEARCH REPORT",
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
    console.error("Failed to fetch announcements from database:", error);
    return NextResponse.json({ error: "Failed to fetch announcements" }, { status: 500 });
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
      formTitle: String(body.formTitle || "Stay ahead with our latest Updates").trim(),
      reportType: String(body.reportType || "RESEARCH REPORT").trim(),
      coverTitleLine1: String(body.coverTitleLine1 || "AI IMPACT").trim(),
      coverTitleLine2: String(body.coverTitleLine2 || "IMPERATIVES").trim(),
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
    console.error("Failed to add announcement to database:", error);
    return NextResponse.json({ error: "Failed to add announcement" }, { status: 500 });
  }
}
