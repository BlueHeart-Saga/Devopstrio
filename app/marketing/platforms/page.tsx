import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { MarketingCategoryPageClient } from "@/components/marketing/MarketingCategoryPageClient";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/platforms");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/marketing/platforms",
    keywords: seo.keywords
  });
}

export default function PlatformsMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Platforms", url: "https://devopstrio.co.uk/marketing/platforms" }
        ]}
      />
      <MarketingCategoryPageClient
        category="Platform Datasheets"
        title="Proprietary SaaS Platform Datasheets"
        subtitle="Explore product collateral, architectural datasheets, and feature blueprints for Devopstrio SaaS platforms."
        badge="Proprietary SaaS Platforms"
        iconName="rocket"
      />
    </>
  );
}
