import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { MarketingCategoryPageClient } from "@/components/marketing/MarketingCategoryPageClient";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/company");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/marketing/company",
    keywords: seo.keywords
  });
}

export default function CompanyMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Company", url: "https://devopstrio.co.uk/marketing/company" }
        ]}
      />
      <MarketingCategoryPageClient
        category="Company Documents"
        title="Company Decks & Brand Guidelines"
        subtitle="Access official corporate profiles, investor decks, executive capability statements, and brand identity kits."
        badge="Corporate Resources"
        iconName="building"
      />
    </>
  );
}
