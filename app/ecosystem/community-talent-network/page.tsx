"use client";

import React from "react";
import { notFound } from "next/navigation";
import { getEcosystemDomain } from "@/data/ecosystem";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { FAQ } from "@/components/ecosystem/FAQ";

// Custom Community Sections
import { CommunityHero } from "@/sections/ecosystem/community/CommunityHero";
import { CommunityEcosystem } from "@/sections/ecosystem/community/CommunityEcosystem";
import { CommunitySuccessStories } from "@/sections/ecosystem/community/CommunitySuccessStories";
import { GlobalTalentReach } from "@/sections/ecosystem/community/GlobalTalentReach";
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
    { id: "success-stories", label: "Success Stories" },
    { id: "reach", label: "Talent Reach" },
    { id: "integration", label: "Ecosystem Loop" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 01. Hero Section */}
      <CommunityHero />

      {/* Sticky Section Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 02. Community Ecosystem (Engineering, University, Talent, Open Source, Certs, Events, Mentorship, Advocacy, Future, Research) */}
      <CommunityEcosystem />

      {/* 03. Success Stories */}
      <div id="success-stories">
        <CommunitySuccessStories />
      </div>

      {/* 04. Global Talent Reach */}
      <div id="reach">
        <GlobalTalentReach />
      </div>

      {/* 05. Ecosystem Integration Loop */}
      <div id="integration">
        <EcosystemIntegrationLoop />
      </div>

      {/* FAQ */}
      <FAQ faqs={data.faqs} />

      {/* 06. CTA Section */}
      <CommunityCTA />

    </main>
  );
}
