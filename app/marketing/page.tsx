import React from "react";
import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { MarketingPageClient } from "@/components/marketing/MarketingPageClient";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/marketing",
    keywords: seo.keywords
  });
}

export default function MarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" }
        ]}
      />
      <MarketingPageClient />
    </>
  );
}
