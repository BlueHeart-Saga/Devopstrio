import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  let host = "";
  try {
    const headersList = await headers();
    host = headersList.get("host") || "";
  } catch (e) {
    // Fallback if headers() is not available (e.g. during static build)
  }

  const prodDomain = process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN || "devopstrio.co.uk";
  const cleanHost = host.split(":")[0].toLowerCase();
  const isProduction = !cleanHost || cleanHost === prodDomain || cleanHost === `www.${prodDomain}`;

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/"
      }
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/"
    },
    sitemap: `https://${prodDomain}/sitemap.xml`
  };
}
