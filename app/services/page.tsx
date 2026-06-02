"use client";

import React from "react";
import { ServicesHero } from "@/sections/services/ServicesHero";
import { ServicesIntro } from "@/sections/services/ServicesIntro";
import { CategoriesGrid } from "@/sections/services/CategoriesGrid";
import { TechStackSection } from "@/sections/services/TechStackSection";
import { LifecycleSection } from "@/sections/services/LifecycleSection";
import { CaseStudyHighlight } from "@/sections/services/CaseStudyHighlight";
import { FaqSection } from "@/sections/services/FaqSection";
import { ServicesCTA } from "@/sections/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <ServicesHero />
      <ServicesIntro />
      <CategoriesGrid />
      <TechStackSection />
      <LifecycleSection />
      <CaseStudyHighlight />
      <FaqSection />
      <ServicesCTA />
    </main>
  );
}
