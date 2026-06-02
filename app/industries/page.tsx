"use client";

import React from "react";
import { IndustriesHero } from "@/sections/industries/IndustriesHero";
import { IndustriesIntro } from "@/sections/industries/IndustriesIntro";
import { IndustriesGrid } from "@/sections/industries/IndustriesGrid";
import { IndustrialCapabilities } from "@/sections/industries/IndustrialCapabilities";
import { EngagementSLA } from "@/sections/industries/EngagementSLA";
import { GlobalNetworks } from "@/sections/industries/GlobalNetworks";
import { IndustrialFaq } from "@/sections/industries/IndustrialFaq";
import { IndustriesCTA } from "@/sections/industries/IndustriesCTA";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <IndustriesHero />
      <IndustriesIntro />
      <IndustriesGrid />
      <IndustrialCapabilities />
      <EngagementSLA />
      <GlobalNetworks />
      <IndustrialFaq />
      <IndustriesCTA />
    </main>
  );
}
