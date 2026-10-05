import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { MarketingCategoryPageClient } from "@/components/marketing/MarketingCategoryPageClient";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/industries");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/marketing/industries",
    keywords: seo.keywords
  });
}

export default function IndustriesMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Industries", url: "https://devopstrio.co.uk/marketing/industries" }
        ]}
      />
      <MarketingCategoryPageClient
        category="Industry Solutions"
        title="Industry Solution Papers"
        subtitle="Domain-specific solution papers tailored for Banking, Healthcare, Retail, Manufacturing, and Government."
        badge="Sector Blueprints"
        iconName="factory"
      />
    </>
  );
}
