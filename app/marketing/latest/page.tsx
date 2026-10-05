import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { MarketingCategoryPageClient } from "@/components/marketing/MarketingCategoryPageClient";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/latest");
  return generatePageMetadata({
    title: seo.title || "Latest Releases | DevOpsTrio Marketing Hub",
    description: seo.description || "Explore the most recently published marketing collateral, research whitepapers, and presentation decks.",
    path: "/marketing/latest",
    keywords: seo.keywords
  });
}

export default function LatestReleasesMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Latest", url: "https://devopstrio.co.uk/marketing/latest" }
        ]}
      />
      <MarketingCategoryPageClient
        category="Latest Releases"
        title="Latest Collateral Releases"
        subtitle="Recently published enterprise documentation, blueprints, case studies, and corporate presentations."
        badge="Recent Releases"
        iconName="sparkles"
      />
    </>
  );
}
