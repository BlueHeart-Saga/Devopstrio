"use client";

import React from "react";
import { DevSecOpsHeroOverview } from "@/sections/ecosystem/excellence/devsecops/DevSecOpsHeroOverview";
import { DevSecOpsPipelineCapabilities } from "@/sections/ecosystem/excellence/devsecops/DevSecOpsPipelineCapabilities";
import { DevSecOpsAppSecGovernance } from "@/sections/ecosystem/excellence/devsecops/DevSecOpsAppSecGovernance";
import { DevSecOpsOutcomesFooter } from "@/sections/ecosystem/excellence/devsecops/DevSecOpsOutcomesFooter";

export default function DevSecOpsPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-red-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <DevSecOpsHeroOverview />
      <DevSecOpsPipelineCapabilities />
      <DevSecOpsAppSecGovernance />
      <DevSecOpsOutcomesFooter />
    </main>
  );
}
