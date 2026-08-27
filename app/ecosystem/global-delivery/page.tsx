import React from "react";
import { notFound } from "next/navigation";
import { getEcosystemDomain } from "@/data/ecosystem";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { FAQ } from "@/components/ecosystem/FAQ";

// Custom Global Delivery Sections
import { DeliveryHero } from "@/sections/ecosystem/delivery/DeliveryHero";
import { GlobalNetworkOverview } from "@/sections/ecosystem/delivery/GlobalNetworkOverview";
import { DeliveryFootprint } from "@/sections/ecosystem/delivery/DeliveryFootprint";
import { FollowTheSunModel } from "@/sections/ecosystem/delivery/FollowTheSunModel";
import { CapabilityMatrix } from "@/sections/ecosystem/delivery/CapabilityMatrix";
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
    // { id: "network", label: "Network Overview" },
    { id: "footprint", label: "Global Footprint" },
    { id: "operating-model", label: "Follow the Sun" },
    { id: "matrix", label: "Capability Matrix" },
    { id: "coe", label: "Centers of Excellence" },
    { id: "lifecycle", label: "Lifecycle" },
    { id: "metrics", label: "Metrics" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-12 md:pt-14 font-sans">
      
      {/* 01. Hero Section */}
      <DeliveryHero />

      {/* Sticky Section Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 02. Global Network Overview */}
      <div id="network">
        <GlobalNetworkOverview />
      </div>

      {/* 03. Delivery Footprint */}
      <div id="footprint">
        <DeliveryFootprint />
      </div>

      {/* 04. Follow The Sun Model */}
      <div id="operating-model">
        <FollowTheSunModel />
      </div>

      {/* 05. Capability Matrix */}
      <div id="matrix">
        <CapabilityMatrix />
      </div>

      {/* 06. Centers Of Excellence */}
      <div id="coe">
        <CentersOfExcellence />
      </div>

      {/* 07. Delivery Lifecycle */}
      <div id="lifecycle">
        <DeliveryLifecycle />
      </div>

      {/* 08. Delivery Metrics */}
      <div id="metrics">
        <DeliveryMetrics />
      </div>

      {/* FAQ */}
      <FAQ faqs={data.faqs} />

      {/* 09. CTA Section */}
      <DeliveryCTA />

    </main>
  );
}
