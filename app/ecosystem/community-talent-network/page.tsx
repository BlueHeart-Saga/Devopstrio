import React from "react";
import { notFound } from "next/navigation";
import { getEcosystemDomain } from "@/data/ecosystem";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { FAQ } from "@/components/ecosystem/FAQ";

// Custom Community Sections
import { CommunityHero } from "@/sections/ecosystem/community/CommunityHero";
import { CommunityEcosystem } from "@/sections/ecosystem/community/CommunityEcosystem";
import { CommunityGrowthFramework } from "@/sections/ecosystem/community/CommunityGrowthFramework";
import { CommunitySuccessStories } from "@/sections/ecosystem/community/CommunitySuccessStories";
import { GlobalTalentReach } from "@/sections/ecosystem/community/GlobalTalentReach";
import { GlobalCommunityImpact } from "@/sections/ecosystem/community/GlobalCommunityImpact";
import { EcosystemIntegrationLoop } from "@/sections/ecosystem/community/EcosystemIntegrationLoop";
import { CommunityCTA } from "@/sections/ecosystem/community/CommunityCTA";

export default function CommunityTalentNetworkPage() {
  const domain = "community-talent-network";
  const data = getEcosystemDomain(domain);

  if (!data) {
    notFound();
  }

  const subSections = [
    { id: "overview", label: "Ecosystem" },
    { id: "framework", label: "Talent Framework" },
    { id: "guilds", label: "Engineering Guilds" },
    { id: "success-stories", label: "Success Stories" },
    { id: "reach", label: "Talent Reach" },
    { id: "initiatives", label: "Global Initiatives" },
    { id: "integration", label: "Ecosystem Loop" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-12 md:pt-14 font-sans">
      
      {/* 01. Hero Section */}
      <CommunityHero />

      {/* Sticky Section Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 02. Community Ecosystem (Engineering, University, Talent, Open Source, Certs, Events, Mentorship, Advocacy, Future, Research) */}
      <CommunityEcosystem />

      {/* 03. Engineering Guilds & Growth Framework */}
      <div id="guilds" className="scroll-mt-20">
        <CommunityGrowthFramework />
      </div>

      {/* 04. Success Stories */}
      <div id="success-stories" className="scroll-mt-20">
        <CommunitySuccessStories />
      </div>

      {/* 05. Global Talent Reach */}
      <div id="reach" className="scroll-mt-20">
        <GlobalTalentReach />
      </div>

      {/* 06. Global Community Impact & Initiatives */}
      <div id="initiatives" className="scroll-mt-20">
        <GlobalCommunityImpact />
      </div>

      {/* 07. Ecosystem Integration Loop */}
      <div id="integration" className="scroll-mt-20">
        <EcosystemIntegrationLoop />
      </div>

      {/* FAQ */}
      <div id="faq" className="scroll-mt-20">
        <FAQ faqs={data.faqs} />
      </div>

      {/* 08. CTA Section */}
      <CommunityCTA />

    </main>
  );
}
