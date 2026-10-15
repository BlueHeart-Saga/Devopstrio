import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const DEFAULT_COMPANY_PROFILE = "a961afad-6cee-4dbe-b2b0-8ef765b6f6fe.pdf";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;
    const { searchParams } = new URL(req.url);
    const fileParam = searchParams.get("file");
    const isDownload = searchParams.get("download") === "true";

    // Determine target blob file
    let blobFilename = fileParam;
    if (!blobFilename) {
      if (/company[\s_-]*profile/i.test(filename)) {
        blobFilename = DEFAULT_COMPANY_PROFILE;
      } else {
        blobFilename = filename;
      }
    }

    const sanitizedFile = blobFilename.replace(/^\/+/, "").replace(/\.\./g, "");
    const cleanDisplayName = filename.replace(/[^a-zA-Z0-9._-]/g, "_");

    // Delegate to internal pdf-proxy logic
    const proxyUrl = new URL("/api/pdf-proxy", req.url);
    proxyUrl.searchParams.set("file", sanitizedFile);
    proxyUrl.searchParams.set("filename", cleanDisplayName);
    if (isDownload) {
      proxyUrl.searchParams.set("download", "true");
    }

    const upstreamRes = await fetch(proxyUrl.toString(), {
      headers: {
        ...(req.headers.get("range") ? { Range: req.headers.get("range")! } : {}),
      },
    });

    if (!upstreamRes.ok && upstreamRes.status !== 206) {
      return NextResponse.json(
        { error: `Document returned ${upstreamRes.status}` },
        { status: upstreamRes.status }
      );
    }

    const responseHeaders = new Headers();
    responseHeaders.set("Content-Type", upstreamRes.headers.get("content-type") || "application/pdf");
    responseHeaders.set("Access-Control-Allow-Origin", "*");
    responseHeaders.set("Cache-Control", "public, max-age=86400, s-maxage=86400");
    responseHeaders.set("Accept-Ranges", "bytes");
    responseHeaders.set(
      "Content-Disposition",
      `${isDownload ? "attachment" : "inline"}; filename="${cleanDisplayName}"`
    );

    const contentLength = upstreamRes.headers.get("content-length");
    if (contentLength) responseHeaders.set("Content-Length", contentLength);
    const contentRange = upstreamRes.headers.get("content-range");
    if (contentRange) responseHeaders.set("Content-Range", contentRange);

    return new NextResponse(upstreamRes.body, {
      status: upstreamRes.status,
      headers: responseHeaders,
    });
  } catch (error: any) {
    console.error("Document route error:", error);
    return NextResponse.json({ error: error.message || "Failed to load document" }, { status: 500 });
  }
}
