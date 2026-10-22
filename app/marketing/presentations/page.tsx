import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { MarketingCategoryPageClient } from "@/components/marketing/MarketingCategoryPageClient";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/presentations");
  return generatePageMetadata({
    title: seo?.title || "Presentations & Slide Decks | Devopstrio",
    description: seo?.description || "Keynote decks, webinar slides and architecture workshops.",
    path: "/marketing/presentations",
    keywords: seo?.keywords || ["presentations", "slide decks", "devopstrio"]
  });
}

export default function PresentationsMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Presentations", url: "https://devopstrio.co.uk/marketing/presentations" }
        ]}
      />
      <MarketingCategoryPageClient
        category="Presentations"
        title="Presentations & Slide Decks"
        subtitle="Keynote decks, webinar slides, and architecture workshops."
        badge="Keynotes & Decks"
        iconName="file"
      />
    </>
  );
}
