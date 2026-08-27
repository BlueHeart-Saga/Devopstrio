import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEcosystemDomain } from "@/data/ecosystem";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { FAQ } from "@/components/ecosystem/FAQ";

export const metadata: Metadata = {
  title: "Enterprise Platforms & SaaS Solution Ecosystem | Devopstrio",
  description: "Deploy enterprise-grade platforms for cloud management, customer experience, data analytics, and SaaS solutions.",
  alternates: {
    canonical: "https://devopstrio.co.uk/ecosystem/platforms-solutions",
  },
};

// Custom Platforms & Solutions Sections
import { PlatformsHero } from "@/sections/ecosystem/platforms/PlatformsHero";
import { PlatformCategories } from "@/sections/ecosystem/platforms/PlatformCategories";
import { FeaturedProducts } from "@/sections/ecosystem/platforms/FeaturedProducts";
import { PlatformCapabilities } from "@/sections/ecosystem/platforms/PlatformCapabilities";
import { PlatformArchitecture } from "@/sections/ecosystem/platforms/PlatformArchitecture";
import { SuccessMetrics } from "@/sections/ecosystem/platforms/SuccessMetrics";
import { IndustriesServed } from "@/sections/ecosystem/platforms/IndustriesServed";
import { ProductLifecycle } from "@/sections/ecosystem/platforms/ProductLifecycle";
import { TechEcosystem } from "@/sections/ecosystem/platforms/TechEcosystem";
import { PlatformMarketplace } from "@/sections/ecosystem/platforms/PlatformMarketplace";
import { PlatformsCTA } from "@/sections/ecosystem/platforms/PlatformsCTA";

export default function PlatformsSolutionsPage() {
  const domain = "platforms-solutions";
  const data = getEcosystemDomain(domain);

  if (!data) {
    notFound();
  }

  const subSections = [
    { id: "categories", label: "Categories" },
    { id: "showcase", label: "Featured Products" },
    { id: "capabilities", label: "Capabilities" },
    { id: "architecture", label: "Architecture" },
    { id: "metrics", label: "Success Metrics" },
    { id: "industries", label: "Industries" },
    { id: "lifecycle", label: "Lifecycle" },
    // { id: "tech-ecosystem", label: "Tech Ecosystem" },
    // { id: "marketplace", label: "Marketplace Map" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 01. Hero */}
      <PlatformsHero />

      {/* Sticky Section Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 02. Platform Categories */}
      <PlatformCategories />

      {/* 03. Featured Products Showcase */}
      <FeaturedProducts />

      {/* 04. Platform Capabilities */}
      <PlatformCapabilities />

      {/* 05. Platform Architecture */}
      <PlatformArchitecture />

      {/* 06. Success Metrics */}
      <SuccessMetrics />

      {/* 07. Industries Served */}
      <IndustriesServed />

      {/* 08. Product Lifecycle */}
      <ProductLifecycle />

      {/* 09. Tech Ecosystem */}
      {/* <TechEcosystem /> */}

      {/* 10. Platform Marketplace Map */}
      {/* <PlatformMarketplace /> */}

      {/* FAQ */}
      <FAQ faqs={data.faqs} />

      {/* 11. CTA */}
      <PlatformsCTA />

    </main>
  );
}
