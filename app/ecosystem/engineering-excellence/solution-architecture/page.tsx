"use client";

import React from "react";
import { SolutionHeroOverview } from "@/sections/ecosystem/excellence/solution-architecture/SolutionHeroOverview";
import { SolutionDomainsBlueprint } from "@/sections/ecosystem/excellence/solution-architecture/SolutionDomainsBlueprint";
import { SolutionPatternsFramework } from "@/sections/ecosystem/excellence/solution-architecture/SolutionPatternsFramework";
import { SolutionOutcomesFooter } from "@/sections/ecosystem/excellence/solution-architecture/SolutionOutcomesFooter";

export default function SolutionArchitecturePage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <SolutionHeroOverview />
      <SolutionDomainsBlueprint />
      <SolutionPatternsFramework />
      <SolutionOutcomesFooter />
    </main>
  );
}
