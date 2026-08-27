import React from "react";
import { notFound } from "next/navigation";
import { getEcosystemDomain } from "@/data/ecosystem";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { FAQ } from "@/components/ecosystem/FAQ";

// Custom Tech Stack Sections
import { TechHero } from "@/sections/ecosystem/technology/TechHero";
import { TechEcosystemOverview } from "@/sections/ecosystem/technology/TechEcosystemOverview";
import { TechCapabilities } from "@/sections/ecosystem/technology/TechCapabilities";
import { TechPartnerEcosystem } from "@/sections/ecosystem/technology/TechPartnerEcosystem";
import { TechArchitectureFramework } from "@/sections/ecosystem/technology/TechArchitectureFramework";
import { EngineeringCertifications } from "@/sections/ecosystem/technology/EngineeringCertifications";
import { TechSuccessMetrics } from "@/sections/ecosystem/technology/TechSuccessMetrics";
import { TechCTA } from "@/sections/ecosystem/technology/TechCTA";

export default function TechnologyStackPage() {
  const domain = "technology-stack";
  const data = getEcosystemDomain(domain);

  if (!data) {
    notFound();
  }

  const subSections = [
    { id: "overview", label: "Ecosystem" },
    { id: "capabilities", label: "Capabilities" },
    { id: "partners", label: "Partners" },
    { id: "architecture", label: "Architecture Framework" },
    { id: "certifications", label: "Certifications" },
    { id: "metrics", label: "Success Metrics" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-12 md:pt-14 font-sans">

      {/* 01. Hero Section */}
      <TechHero />

      {/* Sticky Section Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 02. Technology Ecosystem Overview */}
      <TechEcosystemOverview />

      {/* 03. Technology Capabilities (AI, Cloud, Software, Data, DevOps, Cybersecurity, Platform, Quality, Emerging) */}
      <TechCapabilities />

      {/* 04. Technology Partner Ecosystem */}
      <TechPartnerEcosystem />

      {/* 05. Technology Architecture Framework */}
      <TechArchitectureFramework />

      {/* 06. Engineering Certifications */}
      <EngineeringCertifications />

      {/* 07. Success Metrics */}
      <TechSuccessMetrics />

      {/* FAQ */}
      <FAQ faqs={data.faqs} />

      {/* 08. CTA Section */}
      <TechCTA />

    </main>
  );
}
