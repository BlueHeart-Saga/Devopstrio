"use client";

import React from "react";
import { notFound } from "next/navigation";
import { getEcosystemDomain } from "@/data/ecosystem";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { FAQ } from "@/components/ecosystem/FAQ";

// Custom Accelerators Sections
import { AcceleratorsHero } from "@/sections/ecosystem/accelerators/AcceleratorsHero";
import { WhyAcceleratorsMatter } from "@/sections/ecosystem/accelerators/WhyAcceleratorsMatter";
import { AcceleratorsEcosystem } from "@/sections/ecosystem/accelerators/AcceleratorsEcosystem";
import { AcceleratorsShowcase } from "@/sections/ecosystem/accelerators/AcceleratorsShowcase";
import { DeliveryImpact } from "@/sections/ecosystem/accelerators/DeliveryImpact";
import { AcceleratorSuccessStories } from "@/sections/ecosystem/accelerators/AcceleratorSuccessStories";
import { AcceleratorLifecycle } from "@/sections/ecosystem/accelerators/AcceleratorLifecycle";
import { EcosystemIntegration } from "@/sections/ecosystem/accelerators/EcosystemIntegration";
import { AcceleratorsCTA } from "@/sections/ecosystem/accelerators/AcceleratorsCTA";

export default function AcceleratorsFrameworksPage() {
  const domain = "accelerators-frameworks";
  const data = getEcosystemDomain(domain);

  if (!data) {
    notFound();
  }

  const subSections = [
    { id: "overview", label: "Ecosystem" },
    { id: "why-accelerators", label: "Value Model" },
    { id: "framework", label: "Framework Ecosystem" },
    { id: "showcase", label: "Showcase" },
    { id: "metrics", label: "Delivery Impact" },
    { id: "success-stories", label: "Success Stories" },
    { id: "lifecycle", label: "Lifecycle" },
    { id: "integration", label: "Ecosystem Integration" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 01. Hero Section */}
      <AcceleratorsHero />

      {/* Sticky Section Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 02. Why Accelerators Matter */}
      <div id="why-accelerators">
        <WhyAcceleratorsMatter />
      </div>

      {/* 03. Accelerators Ecosystem (Cloud, DevOps, AI, Security, Data, SaaS, Platform, Enterprise, Delivery) */}
      <AcceleratorsEcosystem />

      {/* 04. Accelerators Showcase */}
      <div id="showcase">
        <AcceleratorsShowcase />
      </div>

      {/* 05. Delivery Impact statistics */}
      <DeliveryImpact />

      {/* 06. Success Stories */}
      <div id="success-stories">
        <AcceleratorSuccessStories />
      </div>

      {/* 07. Accelerator Lifecycle */}
      <div id="lifecycle">
        <AcceleratorLifecycle />
      </div>

      {/* 08. Integration Across Ecosystem */}
      <div id="integration">
        <EcosystemIntegration />
      </div>

      {/* FAQ */}
      <FAQ faqs={data.faqs} />

      {/* 09. CTA Section */}
      <AcceleratorsCTA />

    </main>
  );
}
