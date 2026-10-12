import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import fs from "fs";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const resolvedParams = await params;
    const filePathSegments = resolvedParams.path || [];
    const fileName = filePathSegments.join("/");

    // Check public/workers first
    let targetPath = path.join(process.cwd(), "public", "workers", fileName);
    if (!fs.existsSync(targetPath)) {
      // Fallback to node_modules/pdfjs-dist/build
      targetPath = path.join(process.cwd(), "node_modules", "pdfjs-dist", "build", fileName);
    }

    if (!fs.existsSync(targetPath)) {
      return new NextResponse("Worker not found", { status: 404 });
    }

    const fileBuffer = await readFile(targetPath);
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
        "Cache-Control": "public, max-age=31536000, immutable",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err: any) {
    return new NextResponse(`Worker error: ${err.message}`, { status: 500 });
  }
}
