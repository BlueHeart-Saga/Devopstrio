"use client";

import React from "react";
import { notFound } from "next/navigation";
import { getEcosystemDomain } from "@/data/ecosystem";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { FAQ } from "@/components/ecosystem/FAQ";

// Custom Innovation Labs Sections
import { LabsHero } from "@/sections/ecosystem/labs/LabsHero";
import { LabsEcosystem } from "@/sections/ecosystem/labs/LabsEcosystem";
import { ResearchDomains } from "@/sections/ecosystem/labs/ResearchDomains";
import { LabsShowcase } from "@/sections/ecosystem/labs/LabsShowcase";
import { InnovationPipeline } from "@/sections/ecosystem/labs/InnovationPipeline";
import { LabsTechStack } from "@/sections/ecosystem/labs/LabsTechStack";
import { InnovationAccelerators } from "@/sections/ecosystem/labs/InnovationAccelerators";
import { ResearchPublications } from "@/sections/ecosystem/labs/ResearchPublications";
import { InnovationMetrics } from "@/sections/ecosystem/labs/InnovationMetrics";
import { FutureTechnologies } from "@/sections/ecosystem/labs/FutureTechnologies";
import { CollaborationProgram } from "@/sections/ecosystem/labs/CollaborationProgram";
import { LabsCTA } from "@/sections/ecosystem/labs/LabsCTA";

export default function InnovationLabsPage() {
  const domain = "innovation-labs";
  const data = getEcosystemDomain(domain);

  if (!data) {
    notFound();
  }

  const subSections = [
    { id: "ecosystem", label: "Ecosystem" },
    { id: "research-domains", label: "Research" },
    { id: "showcase", label: "Showcase" },
    { id: "pipeline", label: "Pipeline" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "accelerators", label: "Accelerators" },
    { id: "publications", label: "Publications" },
    { id: "metrics", label: "Metrics" },
    { id: "future-tech", label: "Roadmap" },
    { id: "collaboration", label: "Collaboration" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 01. Hero */}
      <LabsHero />

      {/* Sticky Section Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 02. Innovation Ecosystem */}
      <LabsEcosystem />

      {/* 03. Research Domains */}
      <ResearchDomains />

      {/* 04. Labs Showcase */}
      <LabsShowcase />

      {/* 05. Innovation Pipeline */}
      <InnovationPipeline />

      {/* 06. Technology Stack */}
      <LabsTechStack />

      {/* 07. Innovation Accelerators */}
      <InnovationAccelerators />

      {/* 08. Research Publications */}
      <ResearchPublications />

      {/* 09. Innovation Metrics */}
      <InnovationMetrics />

      {/* 10. Future Technologies & Timeline */}
      <FutureTechnologies />

      {/* 11. Collaboration Programs */}
      <CollaborationProgram />

      {/* FAQ */}
      <FAQ faqs={data.faqs} />

      {/* 12. CTA */}
      <LabsCTA />

    </main>
  );
}
