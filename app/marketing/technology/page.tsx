import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { MarketingCategoryPageClient } from "@/components/marketing/MarketingCategoryPageClient";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/technology");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/marketing/technology",
    keywords: seo.keywords
  });
}

export default function TechnologyMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Technology", url: "https://devopstrio.co.uk/marketing/technology" }
        ]}
      />
      <MarketingCategoryPageClient
        category="Technology Blueprints"
        title="Technology Blueprints & Stack Specs"
        subtitle="Engineering reference architectures for multi-agent AI, zero-trust landing zones, Kafka streaming, and Kubernetes platforms."
        badge="Stack & Architecture"
        iconName="cpu"
      />
    </>
  );
}
