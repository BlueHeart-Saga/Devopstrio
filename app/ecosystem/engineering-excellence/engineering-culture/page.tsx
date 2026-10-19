"use client";

import React from "react";
import { CultureHeroOverview } from "@/sections/ecosystem/excellence/culture/CultureHeroOverview";
import { CulturePracticesCapabilities } from "@/sections/ecosystem/excellence/culture/CulturePracticesCapabilities";
import { CultureTalentGrowth } from "@/sections/ecosystem/excellence/culture/CultureTalentGrowth";
import { CultureOutcomesFooter } from "@/sections/ecosystem/excellence/culture/CultureOutcomesFooter";

export default function EngineeringCulturePage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <CultureHeroOverview />
      <CulturePracticesCapabilities />
      <CultureTalentGrowth />
      <CultureOutcomesFooter />
    </main>
  );
}
