"use client";

import React from "react";
import { notFound } from "next/navigation";
import { getEcosystemDomain } from "@/data/ecosystem";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { FAQ } from "@/components/ecosystem/FAQ";

// Custom Partnership Sections
import { PartnershipHero } from "@/sections/ecosystem/partnerships/PartnershipHero";
import { PartnerCategories } from "@/sections/ecosystem/partnerships/PartnerCategories";
import { StrategicAlliances } from "@/sections/ecosystem/partnerships/StrategicAlliances";
import { JointSolutions } from "@/sections/ecosystem/partnerships/JointSolutions";
import { PartnershipBenefits } from "@/sections/ecosystem/partnerships/PartnershipBenefits";
import { Certifications } from "@/sections/ecosystem/partnerships/Certifications";
import { EcosystemNetworkMap } from "@/sections/ecosystem/partnerships/EcosystemNetworkMap";
import { SuccessStories } from "@/sections/ecosystem/partnerships/SuccessStories";
import { PartnerLabs } from "@/sections/ecosystem/partnerships/PartnerLabs";
import { BecomePartnerProgram } from "@/sections/ecosystem/partnerships/BecomePartnerProgram";
import { PartnershipCTA } from "@/sections/ecosystem/partnerships/PartnershipCTA";

export default function PartnershipsPage() {
  const domain = "partnerships";
  const data = getEcosystemDomain(domain);

  if (!data) {
    notFound();
  }

  const subSections = [
    { id: "categories", label: "Categories" },
    { id: "alliances", label: "Alliances" },
    { id: "solutions", label: "Joint Solutions" },
    { id: "benefits", label: "Benefits" },
    { id: "certifications", label: "Certifications" },
    { id: "network-map", label: "Network Map" },
    { id: "success-stories", label: "Success Stories" },
    { id: "innovation-labs", label: "Labs Integration" },
    { id: "partner-program", label: "Partner Program" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 01. Hero */}
      <PartnershipHero />

      {/* Sticky Section Sub-Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 02. Partner Categories */}
      <PartnerCategories />

      {/* 03. Strategic Alliances Showcase */}
      <StrategicAlliances />

      {/* 04. Joint Solutions Accelerators */}
      <JointSolutions />

      {/* 05. Benefits of Partnership */}
      <PartnershipBenefits />

      {/* 06. Certifications & Accreditations */}
      <Certifications />

      {/* 07. Interactive Ecosystem Network Map */}
      <EcosystemNetworkMap />

      {/* 08. Success Stories */}
      <SuccessStories />

      {/* 09. Innovation Labs + Partners Linkage */}
      <PartnerLabs />

      {/* 10. Partner Program Tracks */}
      <BecomePartnerProgram />

      {/* 11. FAQ */}
      <FAQ faqs={data.faqs} />

      {/* 12. Final CTA */}
      <PartnershipCTA />

    </main>
  );
}
