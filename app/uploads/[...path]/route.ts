import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { Readable } from "stream";
import path from "path";

export const dynamic = "force-dynamic";

const UPLOADS_ROOT = path.resolve(process.cwd(), "public", "uploads");

const TYPES: Record<string, string> = {
  ".pdf": "application/pdf",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: segments = [] } = await params;
  const target = path.resolve(UPLOADS_ROOT, ...segments);

  // Containment: resolved path must stay inside public/uploads.
  if (target !== UPLOADS_ROOT && !target.startsWith(UPLOADS_ROOT + path.sep)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  let stat: fs.Stats;
  try {
    stat = await fs.promises.stat(target);
  } catch {
    return new NextResponse("File not found", { status: 404 });
  }
  if (!stat.isFile()) {
    return new NextResponse("File not found", { status: 404 });
  }

  const ext = path.extname(target).toLowerCase();
  const headers = new Headers({
    "Content-Type": TYPES[ext] ?? "application/octet-stream",
    "Accept-Ranges": "bytes",
    "Cache-Control": "public, max-age=86400",
    "Access-Control-Allow-Origin": "*",
    "Content-Disposition":
      ext === ".pdf" ? "inline" : `attachment; filename="${path.basename(target)}"`,
  });

  const range = req.headers.get("range");
  const size = stat.size;

  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!match) {
      return new NextResponse(null, {
        status: 416,
        headers: { "Content-Range": `bytes */${size}` },
      });
    }
    let start: number;
    let end: number;
    if (match[1] === "") {
      // Suffix range: last N bytes
      const suffix = Number(match[2]);
      start = Math.max(0, size - suffix);
      end = size - 1;
    } else {
      start = Number(match[1]);
      end = match[2] === "" ? size - 1 : Math.min(Number(match[2]), size - 1);
    }
    if (start > end || start >= size) {
      return new NextResponse(null, {
        status: 416,
        headers: { "Content-Range": `bytes */${size}` },
      });
    }
    headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
    headers.set("Content-Length", String(end - start + 1));
    const nodeStream = fs.createReadStream(target, { start, end });
    const webStream = Readable.toWeb(nodeStream) as ReadableStream;
    return new NextResponse(webStream, { status: 206, headers });
  }

  headers.set("Content-Length", String(size));
  const nodeStream = fs.createReadStream(target);
  const webStream = Readable.toWeb(nodeStream) as ReadableStream;
  return new NextResponse(webStream, { status: 200, headers });
}
