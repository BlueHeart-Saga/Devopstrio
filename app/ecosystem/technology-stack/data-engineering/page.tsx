import React from "react";
import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { DataEngineeringTechStackClient } from "@/components/ecosystem/DataEngineeringTechStackClient";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/ecosystem/technology-stack/data-engineering");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/ecosystem/technology-stack/data-engineering",
    keywords: seo.keywords
  });
}

export default function DataEngineeringTechStackPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Ecosystem", url: "https://devopstrio.co.uk/ecosystem" },
          { name: "Technology Stack", url: "https://devopstrio.co.uk/ecosystem/technology-stack" },
          { name: "Data Engineering", url: "https://devopstrio.co.uk/ecosystem/technology-stack/data-engineering" }
        ]}
      />
      <DataEngineeringTechStackClient />
    </>
  );
}
