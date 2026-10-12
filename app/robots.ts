import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  let host = "";
  try {
    const headersList = await headers();
    host = (headersList.get("host") || "").split(":")[0].toLowerCase();
  } catch {
    // Fallback if headers() is unavailable during static build phases
  }

  const prodDomain = (
    process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN ||
    "devopstrio.co.uk"
  ).toLowerCase();

  const isProduction =
    host === prodDomain ||
    host === `www.${prodDomain}`;

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/api/",
      ],
    },
    sitemap: `https://${prodDomain}/sitemap.xml`,
  };
}
