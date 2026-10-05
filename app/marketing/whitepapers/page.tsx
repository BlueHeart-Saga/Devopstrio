import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { MarketingCategoryPageClient } from "@/components/marketing/MarketingCategoryPageClient";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/whitepapers");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/marketing/whitepapers",
    keywords: seo.keywords
  });
}

export default function WhitepapersMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Whitepapers", url: "https://devopstrio.co.uk/marketing/whitepapers" }
        ]}
      />
      <MarketingCategoryPageClient
        category="Whitepapers"
        title="Whitepapers & Industry Reports"
        subtitle="In-depth engineering research papers, security benchmarks, and cloud modernization playbooks."
        badge="Research & Thought Leadership"
        iconName="file"
      />
    </>
  );
}
