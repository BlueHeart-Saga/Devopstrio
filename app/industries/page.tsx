"use client";

import React from "react";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

// Component imports
import { IndustriesHero } from "@/sections/industries/IndustriesHero";
import { IndustriesGrid } from "@/sections/industries/IndustriesGrid";
import { ExpertiseBanner } from "@/sections/industries/ExpertiseBanner";
import { FeaturedIndustries } from "@/sections/industries/FeaturedIndustries";
import { ChallengesWeSolve } from "@/sections/industries/ChallengesWeSolve";
import { TechnologySolutions } from "@/sections/industries/TechnologySolutions";
import { IndustryUseCases } from "@/sections/industries/IndustryUseCases";
import { BusinessImpact } from "@/sections/industries/BusinessImpact";
import { SuccessStories } from "@/sections/industries/SuccessStories";
import { IndustryInnovation } from "@/sections/industries/IndustryInnovation";
import { WhyChooseDevopstrio } from "@/sections/industries/WhyChooseDevopstrio";
import { GlobalNetworks } from "@/sections/industries/GlobalNetworks";
import { RelatedServices } from "@/sections/industries/RelatedServices";
import { IndustriesCTA } from "@/sections/industries/IndustriesCTA";

const navSections = [
  { id: "overview", label: "Overview Grid" },
  { id: "expertise", label: "Expertise Banner" },
  { id: "featured", label: "Featured Industries" },
  { id: "challenges", label: "Challenges" },
  { id: "solutions", label: "Solutions" },
  { id: "use-cases", label: "Use Cases" },
  { id: "impact", label: "Business Impact" },
  { id: "success", label: "Success Stories" },
  { id: "innovation", label: "Lab Innovation" },
  { id: "why-choose", label: "Why Choose Us" }
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 font-sans">
      
      {/* 1. Hero */}
      <IndustriesHero 
        breadcrumbCurrent="Industries"
        titlePrefix="Transforming Industries with"
        titleHighlight="Intelligence & Automation"
        subtitle="We design, build and scale industrial-grade digital architectures that automate field logistics, optimize resource planning, and enforce extreme telemetry safety standards."
        bgImage="/assets/industries_hero_bg.png"
      />

      {/* Sticky Secondary Navigation */}
      <SectionNavbar sections={navSections} />

      {/* 2. Industries Overview Grid */}
      <IndustriesGrid />

      {/* 3. Industry Expertise Banner */}
      <ExpertiseBanner />

      {/* 4. Featured Industries */}
      <FeaturedIndustries />

      {/* 5. Challenges We Solve */}
      <ChallengesWeSolve />

      {/* 6. Technology Solutions */}
      <TechnologySolutions />

      {/* 7. Industry Use Cases */}
      <IndustryUseCases />

      {/* 8. Business Impact */}
      <BusinessImpact />

      {/* 9. Success Stories */}
      <SuccessStories />

      {/* 10. Industry Innovation */}
      <IndustryInnovation />

      {/* 11. Why Choose Devopstrio */}
      <WhyChooseDevopstrio />

      {/* 12. Global Coverage */}
      <GlobalNetworks />

      {/* 13. Related Services */}
      <RelatedServices />

      {/* 14. CTA */}
      <IndustriesCTA />

    </main>
  );
}
