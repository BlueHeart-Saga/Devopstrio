import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { MarketingCategoryPageClient } from "@/components/marketing/MarketingCategoryPageClient";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/services");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/marketing/services",
    keywords: seo.keywords
  });
}

export default function ServicesMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Services", url: "https://devopstrio.co.uk/marketing/services" }
        ]}
      />
      <MarketingCategoryPageClient
        category="Service Brochures"
        title="Service Practice Brochures"
        subtitle="Detailed service brochures, practice capabilities, and technical solutions across AI, Cloud, DevOps, and Security."
        badge="Practice Offerings"
        iconName="briefcase"
      />
    </>
  );
}
