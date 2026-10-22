import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { MarketingCategoryPageClient } from "@/components/marketing/MarketingCategoryPageClient";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/marketing/videos");
  return generatePageMetadata({
    title: seo?.title || "Videos & Technical Webinars | Devopstrio",
    description: seo?.description || "Engineering demos, architecture walkthroughs and leadership keynotes.",
    path: "/marketing/videos",
    keywords: seo?.keywords || ["videos", "webinars", "tech demos", "devopstrio"]
  });
}

export default function VideosMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Marketing", url: "https://devopstrio.co.uk/marketing" },
          { name: "Videos", url: "https://devopstrio.co.uk/marketing/videos" }
        ]}
      />
      <MarketingCategoryPageClient
        category="Videos"
        title="Videos & Technical Webinars"
        subtitle="Engineering demos, architecture walkthroughs, and leadership keynotes."
        badge="Technical Media"
        iconName="file"
      />
    </>
  );
}
