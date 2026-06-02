"use client";

import React from "react";
import { AIDataHero } from "@/sections/services/ai-data/AIDataHero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { AIDataIntro } from "@/sections/services/ai-data/AIDataIntro";
import { AIDataSubServices } from "@/sections/services/ai-data/AIDataSubServices";
import { AITechStack } from "@/sections/services/ai-data/AITechStack";
import { AISecurity } from "@/sections/services/ai-data/AISecurity";
import { AILifecycle } from "@/sections/services/ai-data/AILifecycle";
import { AICaseStudies } from "@/sections/services/ai-data/AICaseStudies";
import { AIDataCTA } from "@/sections/services/ai-data/AIDataCTA";

const pageSections = [
  { id: "overview", label: "Overview" },
  { id: "subservices", label: "Capabilities" },
  { id: "techstack", label: "Tech Stack" },
  { id: "governance", label: "Governance" },
  { id: "lifecycle", label: "Pipeline lifecycle" },
  { id: "casestudies", label: "Case Studies" },
  { id: "engage", label: "Engage" }
];

export default function AIDataCategoryPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <AIDataHero />
      <SectionNavbar sections={pageSections} />
      
      <div id="overview">
        <AIDataIntro />
      </div>
      
      <div id="subservices">
        <AIDataSubServices />
      </div>
      
      <div id="techstack">
        <AITechStack />
      </div>
      
      <div id="governance">
        <AISecurity />
      </div>
      
      <div id="lifecycle">
        <AILifecycle />
      </div>
      
      <div id="casestudies">
        <AICaseStudies />
      </div>
      
      <div id="engage">
        <AIDataCTA />
      </div>
    </main>
  );
}
