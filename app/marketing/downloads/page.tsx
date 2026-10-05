import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { MarketingCategoryPageClient } from "@/components/marketing/MarketingCategoryPageClient";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/downloads");
  return generatePageMetadata({
    title: seo.title || "Downloads Library | DevOpsTrio Marketing Hub",
    description: seo.description || "Browse and download all enterprise marketing assets, capability brochures, and technical blueprints.",
    path: "/marketing/downloads",
    keywords: seo.keywords
  });
}

export default function DownloadsMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Downloads", url: "https://devopstrio.co.uk/marketing/downloads" }
        ]}
      />
      <MarketingCategoryPageClient
        category="Downloads Library"
        title="Complete Downloads Library"
        subtitle="Every published document, brochure, blueprint, and datasheet in one comprehensive repository."
        badge="Downloads Archive"
        iconName="download"
      />
    </>
  );
}
