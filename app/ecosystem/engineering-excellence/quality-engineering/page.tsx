import React from "react";
import { Metadata } from "next";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { QualityHeroOverview } from "@/sections/ecosystem/excellence/quality/QualityHeroOverview";
import { QualityStrategyCapabilities } from "@/sections/ecosystem/excellence/quality/QualityStrategyCapabilities";
import { QualityPerformanceAI } from "@/sections/ecosystem/excellence/quality/QualityPerformanceAI";
import { QualityOutcomesFooter } from "@/sections/ecosystem/excellence/quality/QualityOutcomesFooter";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/ecosystem/engineering-excellence/quality-engineering");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/ecosystem/engineering-excellence/quality-engineering",
    keywords: seo.keywords
  });
}

export default function QualityEngineeringPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://devopstrio.co.uk" },
          { name: "Ecosystem", url: "https://devopstrio.co.uk/ecosystem" },
          { name: "Engineering Excellence", url: "https://devopstrio.co.uk/ecosystem/engineering-excellence" },
          { name: "Quality Engineering", url: "https://devopstrio.co.uk/ecosystem/engineering-excellence/quality-engineering" }
        ]}
      />
      <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-amber-500 selection:text-white">
        <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        
        <QualityHeroOverview />
        <QualityStrategyCapabilities />
        <QualityPerformanceAI />
        <QualityOutcomesFooter />
      </main>
    </>
  );
}
