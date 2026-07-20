"use client";

import React from "react";
import { PlatformHeroOverview } from "@/sections/ecosystem/excellence/platform/PlatformHeroOverview";
import { PlatformCoreCapabilities } from "@/sections/ecosystem/excellence/platform/PlatformCoreCapabilities";
import { PlatformExperienceOps } from "@/sections/ecosystem/excellence/platform/PlatformExperienceOps";
import { PlatformOutcomesFooter } from "@/sections/ecosystem/excellence/platform/PlatformOutcomesFooter";

export default function PlatformEngineeringPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <PlatformHeroOverview />
      <PlatformCoreCapabilities />
      <PlatformExperienceOps />
      <PlatformOutcomesFooter />
    </main>
  );
}
