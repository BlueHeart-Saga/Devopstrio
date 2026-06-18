"use client";

import React from "react";
import { notFound } from "next/navigation";
import { getEcosystemDomain } from "@/data/ecosystem";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { FAQ } from "@/components/ecosystem/FAQ";

// Custom Global Delivery Sections
import { DeliveryHero } from "@/sections/ecosystem/delivery/DeliveryHero";
import { GlobalNetworkOverview } from "@/sections/ecosystem/delivery/GlobalNetworkOverview";
import { DeliveryFootprint } from "@/sections/ecosystem/delivery/DeliveryFootprint";
import { CapabilityMatrix } from "@/sections/ecosystem/delivery/CapabilityMatrix";
import { FollowTheSunModel } from "@/sections/ecosystem/delivery/FollowTheSunModel";
import { CentersOfExcellence } from "@/sections/ecosystem/delivery/CentersOfExcellence";
import { DeliveryLifecycle } from "@/sections/ecosystem/delivery/DeliveryLifecycle";
import { DeliveryMetrics } from "@/sections/ecosystem/delivery/DeliveryMetrics";
import { DeliveryCTA } from "@/sections/ecosystem/delivery/DeliveryCTA";

export default function GlobalDeliveryPage() {
  const domain = "global-delivery";
  const data = getEcosystemDomain(domain);

  if (!data) {
    notFound();
  }

  const subSections = [
    { id: "overview", label: "Ecosystem" },
    { id: "centers", label: "Global Footprint" },
    { id: "matrix", label: "Capability Matrix" },
    { id: "operating-model", label: "Follow-The-Sun" },
    { id: "coe", label: "Centers of Excellence" },
    { id: "lifecycle", label: "Delivery Lifecycle" },
    { id: "metrics", label: "Metrics" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 01. Hero Section */}
      <DeliveryHero />

      {/* Sticky Section Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 02. Global Network Overview */}
      <GlobalNetworkOverview />

      {/* 03. Global Delivery Footprint (London HQ, W1, Tennessee, Bengaluru, Chennai, Thoothukudi) */}
      <DeliveryFootprint />

      {/* 04. Delivery Capability Matrix */}
      <div id="matrix">
        <CapabilityMatrix />
      </div>

      {/* 05. Follow-The-Sun Delivery Model */}
      <FollowTheSunModel />

      {/* 06. Global Centers of Excellence */}
      <div id="coe">
        <CentersOfExcellence />
      </div>

      {/* 07. Global Delivery Lifecycle */}
      <div id="lifecycle">
        <DeliveryLifecycle />
      </div>

      {/* 08. Global Delivery Statistics */}
      <DeliveryMetrics />

      {/* FAQ */}
      <FAQ faqs={data.faqs} />

      {/* 09. CTA Section */}
      <DeliveryCTA />

    </main>
  );
}
