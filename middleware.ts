import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Comprehensive list of supported service slugs for redirect resolution
const ALL_SUPPORTED_SERVICES = new Set([
  "cloud-services",
  "cloud-managed-services",
  "cloud-migration",
  "azure-consulting",
  "aws-consulting",
  "gcp-consulting",
  "devops-consulting",
  "devsecops-consulting",
  "platform-engineering",
  "kubernetes-services",
  "ai-consulting",
  "ai-agents-automation",
  "generative-ai-solutions",
  "cybersecurity-services",
  "zero-trust-architecture",
  "penetration-testing",
  "it-support-services",
  "data-engineering-consulting",
  "data-warehousing",
  "data-lakes-lakehouse-architecture",
  "software-development",
  "saas-product-development",
  "cicd-implementation",
  "cloud-architecture"
]);

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const lowerPath = pathname.toLowerCase();

  // Handle Location URL Normalization and 301 Permanent Redirects
  if (lowerPath.startsWith("/locations/")) {
    let targetPath: string | null = null;

    // 1. Flat concatenated patterns: e.g. /locations/indiabengaluru-cloud-managed-services
    const flatMatch = lowerPath.match(/^\/locations\/(india|uk|us)(?![\/-])([a-z0-9-]+)$/);
    if (flatMatch) {
      const country = flatMatch[1];
      const rest = flatMatch[2];
      targetPath = `/locations/${country}/${rest}`;
    }

    // 1b. Dash concatenated with country: e.g. /locations/india-bengaluru-cloud-managed-services
    if (!targetPath) {
      const flatDashMatch = lowerPath.match(/^\/locations\/(india|uk|us)-([a-z0-9-]+)$/);
      if (flatDashMatch) {
        const country = flatDashMatch[1];
        const rest = flatDashMatch[2];
        targetPath = `/locations/${country}/${rest}`;
      }
    }

    // 2. 4-part legacy service paths:
    // e.g. /locations/india/karnataka/bengaluru/cloud-managed-services -> /locations/india/bengaluru-cloud-managed-services
    // e.g. /locations/uk/england/cambridge/cloud-services -> /locations/uk/cambridge-cloud-services
    // e.g. /locations/us/tennessee/nashville/cloud-managed-services -> /locations/us/nashville-cloud-managed-services
    if (!targetPath) {
      const legacy4Match = lowerPath.match(/^\/locations\/(india|uk|us)\/([^/]+)\/([^/]+)\/([^/]+)$/);
      if (legacy4Match) {
        const country = legacy4Match[1];
        const city = legacy4Match[3];
        const lastSeg = legacy4Match[4];
        if (ALL_SUPPORTED_SERVICES.has(lastSeg)) {
          targetPath = `/locations/${country}/${city}-${lastSeg}`;
        }
      }
    }

    // 3. 5-part legacy UK paths:
    // e.g. /locations/uk/england/greater-london/london/cloud-services -> /locations/uk/london-cloud-services
    if (!targetPath) {
      const legacy5Match = lowerPath.match(/^\/locations\/uk\/([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)$/);
      if (legacy5Match) {
        const city = legacy5Match[3];
        const lastSeg = legacy5Match[4];
        if (ALL_SUPPORTED_SERVICES.has(lastSeg)) {
          targetPath = `/locations/uk/${city}-${lastSeg}`;
        }
      }
    }

    // Execute 301 Permanent Redirect if matched, preserving query parameters
    if (targetPath && targetPath !== lowerPath) {
      const redirectUrl = new URL(`${targetPath}${search}`, request.url);
      return NextResponse.redirect(redirectUrl, { status: 301 });
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    // Match all paths except static files, api routes, next image optimization, etc.
    "/((?!_next/static|_next/image|favicon.ico|assets|.*\\..*).*)",
  ],
};
