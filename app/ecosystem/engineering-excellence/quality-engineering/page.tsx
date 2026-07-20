"use client";

import React from "react";
import { QualityHeroOverview } from "@/sections/ecosystem/excellence/quality/QualityHeroOverview";
import { QualityStrategyCapabilities } from "@/sections/ecosystem/excellence/quality/QualityStrategyCapabilities";
import { QualityPerformanceAI } from "@/sections/ecosystem/excellence/quality/QualityPerformanceAI";
import { QualityOutcomesFooter } from "@/sections/ecosystem/excellence/quality/QualityOutcomesFooter";

export default function QualityEngineeringPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-amber-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <QualityHeroOverview />
      <QualityStrategyCapabilities />
      <QualityPerformanceAI />
      <QualityOutcomesFooter />
    </main>
  );
}
