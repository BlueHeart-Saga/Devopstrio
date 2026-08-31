import React from "react";
import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { PlatformHeroOverview } from "@/sections/ecosystem/excellence/platform/PlatformHeroOverview";
import { PlatformCoreCapabilities } from "@/sections/ecosystem/excellence/platform/PlatformCoreCapabilities";
import { PlatformExperienceOps } from "@/sections/ecosystem/excellence/platform/PlatformExperienceOps";
import { PlatformOutcomesFooter } from "@/sections/ecosystem/excellence/platform/PlatformOutcomesFooter";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/ecosystem/engineering-excellence/platform-engineering");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/ecosystem/engineering-excellence/platform-engineering",
    keywords: seo.keywords
  });
}

export default function PlatformEngineeringPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Ecosystem", url: "https://devopstrio.co.uk/ecosystem" },
          { name: "Engineering Excellence", url: "https://devopstrio.co.uk/ecosystem/engineering-excellence" },
          { name: "Platform Engineering", url: "https://devopstrio.co.uk/ecosystem/engineering-excellence/platform-engineering" }
        ]}
      />
      <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-500 selection:text-white">
        <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        
        <PlatformHeroOverview />
        <PlatformCoreCapabilities />
        <PlatformExperienceOps />
        <PlatformOutcomesFooter />
      </main>
    </>
  );
}
