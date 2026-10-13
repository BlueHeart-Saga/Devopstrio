import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Strict allowlist: Only approved Azure Blob storage hosts and approved Devopstrio domains
const ALLOWED_HOST_PATTERNS = [
  /\.blob\.core\.windows\.net$/i,
  /^devopstrio\.co\.uk$/i,
  /^devopstrio-global-qa.*\.azurewebsites\.net$/i,
  ...(process.env.NODE_ENV !== "production" ? [/^127\.0\.0\.1:3005$/i, /^localhost:3005$/i] : []),
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const targetUrl = searchParams.get("url");

    if (!targetUrl) {
      return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
    }

    let parsed: URL;
    try {
      parsed = new URL(targetUrl);
    } catch {
      return NextResponse.json({ error: "Invalid URL parameter" }, { status: 400 });
    }

    // Protocol validation
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return NextResponse.json({ error: "Unsupported protocol" }, { status: 400 });
    }

    // Host allowlist validation (Prevents SSRF, private IP, localhost traversal)
    const hostname = parsed.hostname.toLowerCase();
    const hostWithPort = parsed.host.toLowerCase();
    const isAllowedHost = ALLOWED_HOST_PATTERNS.some((pattern) => pattern.test(hostname) || pattern.test(hostWithPort));
    if (!isAllowedHost) {
      return NextResponse.json({ error: "Host not permitted" }, { status: 403 });
    }

    // Forward Range header if present for efficient progressive chunk loading
    const forwardHeaders: HeadersInit = {
      "User-Agent": "Devopstrio-PDF-Proxy/1.0",
    };
    const incomingRange = req.headers.get("range");
    if (incomingRange) {
      forwardHeaders["Range"] = incomingRange;
    }

    let currentUrl = targetUrl;
    let currentParsed = parsed;
    let upstreamRes: Response | null = null;
    const MAX_REDIRECTS = 3;

    for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
      upstreamRes = await fetch(currentUrl, {
        headers: forwardHeaders,
        redirect: "manual",
      });

      if (upstreamRes.status >= 300 && upstreamRes.status < 400) {
        if (hop === MAX_REDIRECTS) {
          return NextResponse.json({ error: "Too many redirects" }, { status: 508 });
        }
        const location = upstreamRes.headers.get("location");
        if (!location) {
          return NextResponse.json({ error: "Redirect missing Location header" }, { status: 502 });
        }
        try {
          const nextUrl = new URL(location, currentParsed);
          if (nextUrl.protocol !== "https:" && nextUrl.protocol !== "http:") {
            return NextResponse.json({ error: "Disallowed redirect protocol" }, { status: 403 });
          }
          const nextHost = nextUrl.hostname.toLowerCase();
          const nextHostWithPort = nextUrl.host.toLowerCase();
          const isAllowed = ALLOWED_HOST_PATTERNS.some((p) => p.test(nextHost) || p.test(nextHostWithPort));
          if (!isAllowed) {
            return NextResponse.json({ error: "Redirect target host not permitted" }, { status: 403 });
          }
          currentUrl = nextUrl.toString();
          currentParsed = nextUrl;
          continue;
        } catch {
          return NextResponse.json({ error: "Invalid redirect Location" }, { status: 502 });
        }
      }
      break;
    }

    if (!upstreamRes) {
      return NextResponse.json({ error: "No response from upstream" }, { status: 502 });
    }

    if (!upstreamRes.ok && upstreamRes.status !== 206) {
      return NextResponse.json(
        { error: `Upstream storage returned ${upstreamRes.status}: ${upstreamRes.statusText}` },
        { status: upstreamRes.status }
      );
    }

    // Prepare response headers, forwarding range, content-type and content-length
    const responseHeaders = new Headers();
    responseHeaders.set("Content-Type", upstreamRes.headers.get("content-type") || "application/pdf");
    responseHeaders.set("Access-Control-Allow-Origin", "*");
    responseHeaders.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
    responseHeaders.set("Access-Control-Allow-Headers", "Range, Content-Type");
    responseHeaders.set("Access-Control-Expose-Headers", "Content-Range, Content-Length, Accept-Ranges");
    responseHeaders.set("Cache-Control", "public, max-age=86400, s-maxage=86400");
    responseHeaders.set("Accept-Ranges", "bytes");

    const contentLength = upstreamRes.headers.get("content-length");
    if (contentLength) responseHeaders.set("Content-Length", contentLength);

    const contentRange = upstreamRes.headers.get("content-range");
    if (contentRange) responseHeaders.set("Content-Range", contentRange);

    // Stream directly via upstreamRes.body without buffering 150MB into server RAM
    return new NextResponse(upstreamRes.body, {
      status: upstreamRes.status,
      headers: responseHeaders,
    });
  } catch (error: any) {
    console.error("PDF Proxy error:", error);
    return NextResponse.json({ error: error.message || "Failed to proxy document" }, { status: 500 });
  }
}
