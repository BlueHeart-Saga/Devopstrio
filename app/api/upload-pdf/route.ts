import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = (formData.get("file") || formData.get("pdf")) as File;

    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "No PDF file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const sanitizedFileName = (file.name || "document.pdf").replace(/[^a-zA-Z0-9_.-]/g, "_");
    const uniqueFileName = `${Date.now()}_${sanitizedFileName}`;

    // Target directory: public/uploads/pdf
    const uploadDir = path.join(process.cwd(), "public", "uploads", "pdf");
    await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, uniqueFileName);
    await writeFile(filePath, buffer);

    const publicUrl = `/uploads/pdf/${uniqueFileName}`;

    // Record upload in MongoDB uploaded_pdfs collection if available
    try {
      const { db } = await connectToDatabase();
      await db.collection("uploaded_pdfs").insertOne({
        fileName: file.name,
        storedName: uniqueFileName,
        url: publicUrl,
        size: file.size,
        type: file.type || "application/pdf",
        created_at: new Date()
      });
    } catch (dbErr) {
      console.warn("MongoDB recording skipped (continuing with local file):", dbErr);
    }

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: file.name,
      size: file.size
    });
  } catch (error: any) {
    console.error("PDF Upload error:", error);
    return NextResponse.json({ error: error?.message || "Failed to save PDF file" }, { status: 500 });
  }
}
