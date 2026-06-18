"use client";

import React from "react";
import { notFound } from "next/navigation";
import { getEcosystemDomain } from "@/data/ecosystem";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { FAQ } from "@/components/ecosystem/FAQ";

// Custom Engineering Excellence Sections
import { ExcellenceHero } from "@/sections/ecosystem/excellence/ExcellenceHero";
import { ExcellenceFramework } from "@/sections/ecosystem/excellence/ExcellenceFramework";
import { ExcellenceMetricsDashboard } from "@/sections/ecosystem/excellence/ExcellenceMetricsDashboard";
import { EngineeringCOE } from "@/sections/ecosystem/excellence/EngineeringCOE";
import { InnovationThroughEngineering } from "@/sections/ecosystem/excellence/InnovationThroughEngineering";
import { EngineeringLifecycle } from "@/sections/ecosystem/excellence/EngineeringLifecycle";
import { ExcellenceSuccessStories } from "@/sections/ecosystem/excellence/ExcellenceSuccessStories";
import { EngineeringPrinciples } from "@/sections/ecosystem/excellence/EngineeringPrinciples";
import { ExcellenceCTA } from "@/sections/ecosystem/excellence/ExcellenceCTA";

export default function EngineeringExcellencePage() {
  const domain = "engineering-excellence";
  const data = getEcosystemDomain(domain);

  if (!data) {
    notFound();
  }

  const subSections = [
    { id: "overview", label: "Ecosystem" },
    { id: "framework", label: "Framework" },
    { id: "metrics", label: "Metrics Dashboard" },
    { id: "coe", label: "Centers of Excellence" },
    { id: "innovation", label: "Innovation Programs" },
    { id: "lifecycle", label: "Lifecycle" },
    { id: "success-stories", label: "Success Stories" },
    { id: "principles", label: "Principles" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 01. Hero Section */}
      <ExcellenceHero />

      {/* Sticky Section Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 02. Engineering Excellence Framework */}
      <ExcellenceFramework />

      {/* 03. Engineering Metrics Dashboard */}
      <ExcellenceMetricsDashboard />

      {/* 04. Centers of Excellence */}
      <div id="coe">
        <EngineeringCOE />
      </div>

      {/* 05. Innovation Through Engineering */}
      <div id="innovation">
        <InnovationThroughEngineering />
      </div>

      {/* 06. Engineering Lifecycle */}
      <div id="lifecycle">
        <EngineeringLifecycle />
      </div>

      {/* 07. Success Stories */}
      <div id="success-stories">
        <ExcellenceSuccessStories />
      </div>

      {/* 08. Engineering Principles */}
      <EngineeringPrinciples />

      {/* FAQ */}
      <FAQ faqs={data.faqs} />

      {/* 09. CTA Section */}
      <ExcellenceCTA />

    </main>
  );
}
