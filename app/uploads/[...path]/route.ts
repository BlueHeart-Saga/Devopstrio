import { NextRequest, NextResponse } from "next/server";
import { readFile, stat } from "fs/promises";
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
    const relativePath = filePathSegments.join("/");

    // Target file path inside public/uploads
    const targetPath = path.join(process.cwd(), "public", "uploads", relativePath);

    if (!fs.existsSync(targetPath)) {
      return new NextResponse("File not found", { status: 404 });
    }

    const fileStat = await stat(targetPath);
    const fileBuffer = await readFile(targetPath);

    // Determine content type based on extension
    const ext = path.extname(targetPath).toLowerCase();
    let contentType = "application/octet-stream";
    if (ext === ".pdf") contentType = "application/pdf";
    else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
    else if (ext === ".png") contentType = "image/png";
    else if (ext === ".webp") contentType = "image/webp";
    else if (ext === ".mp4") contentType = "video/mp4";

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Length": fileStat.size.toString(),
        "Content-Disposition": ext === ".pdf" ? "inline" : `attachment; filename="${path.basename(targetPath)}"`,
        "Cache-Control": "public, max-age=86400",
        "Access-Control-Allow-Origin": "*",
        "Accept-Ranges": "bytes",
      },
    });
  } catch (err: any) {
    return new NextResponse(`File error: ${err.message}`, { status: 500 });
  }
}
