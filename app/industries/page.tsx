import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { IndustriesHero } from "@/sections/industries/IndustriesHero";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

// Dynamic Imports for Heavy Below-The-Fold Sections to Reduce Initial JS Payload
const IndustriesGrid = dynamic(() => import("@/sections/industries/IndustriesGrid").then((mod) => mod.IndustriesGrid));
const IndustriesPillars = dynamic(() => import("@/sections/industries/IndustriesPillars").then((mod) => mod.IndustriesPillars));
const ExpertiseBanner = dynamic(() => import("@/sections/industries/ExpertiseBanner").then((mod) => mod.ExpertiseBanner));
const FeaturedIndustries = dynamic(() => import("@/sections/industries/FeaturedIndustries").then((mod) => mod.FeaturedIndustries));
const ChallengesWeSolve = dynamic(() => import("@/sections/industries/ChallengesWeSolve").then((mod) => mod.ChallengesWeSolve));
const TechnologySolutions = dynamic(() => import("@/sections/industries/TechnologySolutions").then((mod) => mod.TechnologySolutions));
const IndustryUseCases = dynamic(() => import("@/sections/industries/IndustryUseCases").then((mod) => mod.IndustryUseCases));
const BusinessImpact = dynamic(() => import("@/sections/industries/BusinessImpact").then((mod) => mod.BusinessImpact));
const SuccessStories = dynamic(() => import("@/sections/industries/SuccessStories").then((mod) => mod.SuccessStories));
const IndustryInnovation = dynamic(() => import("@/sections/industries/IndustryInnovation").then((mod) => mod.IndustryInnovation));
const WhyChooseDevopstrio = dynamic(() => import("@/sections/industries/WhyChooseDevopstrio").then((mod) => mod.WhyChooseDevopstrio));
const GlobalNetworks = dynamic(() => import("@/sections/industries/GlobalNetworks").then((mod) => mod.GlobalNetworks));
const RelatedServices = dynamic(() => import("@/sections/industries/RelatedServices").then((mod) => mod.RelatedServices));
const IndustriesCTA = dynamic(() => import("@/sections/industries/IndustriesCTA").then((mod) => mod.IndustriesCTA));

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Explore our specialized industrial solutions: Banking & Finance, Healthcare, Retail & E-commerce, Manufacturing, and Government.",
  alternates: {
    canonical: "/industries"
  }
};

const navSections = [
  { id: "pillars", label: "Pillars" },
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
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Industries", item: "/industries" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 font-sans">
      <BreadcrumbSchema items={breadcrumbs} />

      
      {/* 1. Hero */}
      <IndustriesHero 
        breadcrumbCurrent="Industries"
        titlePrefix="Transforming Industries with"
        titleHighlight="Intelligence & Automation"
        subtitle="We design, build and scale industrial-grade digital architectures that automate field logistics, optimize resource planning, and enforce extreme telemetry safety standards."
        bgImage="/webp/assets/industries_hero_bg.webp"
      />

      {/* 1.5 Industries 3 Pillars */}
      <IndustriesPillars />

      {/* Sticky Secondary Navigation */}
      {/* <SectionNavbar sections={navSections} /> */}

      {/* 2. Industries Overview Grid */}
      <IndustriesGrid />

      {/* 3. Industry Expertise Banner */}
      <ExpertiseBanner />

      {/* 4. Featured Industries */}
      <FeaturedIndustries />

      {/* 5. Challenges We Solve */}
      {/* <ChallengesWeSolve /> */}

      {/* 6. Technology Solutions */}
      {/* <TechnologySolutions /> */}

      {/* 7. Industry Use Cases */}
      <IndustryUseCases />

      {/* 8. Business Impact */}
      <BusinessImpact />

      {/* 9. Success Stories */}
      <SuccessStories />

      {/* 10. Industry Innovation */}
      {/* <IndustryInnovation /> */}

      {/* 11. Why Choose Devopstrio */}
      {/* <WhyChooseDevopstrio /> */}

      {/* 12. Global Coverage */}
      {/* <GlobalNetworks /> */}

      {/* 13. Related Services */}
      {/* <RelatedServices /> */}

      {/* 14. CTA */}
      <IndustriesCTA />

    </main>
  );
}
