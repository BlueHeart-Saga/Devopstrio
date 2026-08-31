import React from "react";
import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { SitemapClient } from "@/components/sitemap/SitemapClient";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/sitemap");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/sitemap",
    keywords: seo.keywords
  });
}

export default function SitemapPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Sitemap", url: "https://devopstrio.co.uk/sitemap" }
        ]}
      />
      <SitemapClient />
    </>
  );
}
