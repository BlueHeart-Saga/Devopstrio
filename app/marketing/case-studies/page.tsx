import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { MarketingCategoryPageClient } from "@/components/marketing/MarketingCategoryPageClient";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/case-studies");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/marketing/case-studies",
    keywords: seo.keywords
  });
}

export default function CaseStudiesMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Case Studies", url: "https://devopstrio.co.uk/marketing/case-studies" }
        ]}
      />
      <MarketingCategoryPageClient
        category="Case Studies"
        title="Enterprise Case Studies"
        subtitle="Real-world enterprise case studies documenting ROI metrics, client transformation, and architectural solutions."
        badge="Client Success Stories"
        iconName="book"
      />
    </>
  );
}
