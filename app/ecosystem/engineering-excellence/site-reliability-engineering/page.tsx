"use client";

import React from "react";
import { SREHeroOverview } from "@/sections/ecosystem/excellence/sre/SREHeroOverview";
import { SRECapabilitiesArchitecture } from "@/sections/ecosystem/excellence/sre/SRECapabilitiesArchitecture";
import { SREIncidentPerformance } from "@/sections/ecosystem/excellence/sre/SREIncidentPerformance";
import { SREOutcomesFooter } from "@/sections/ecosystem/excellence/sre/SREOutcomesFooter";

export default function SiteReliabilityEngineeringPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <SREHeroOverview />
      <SRECapabilitiesArchitecture />
      <SREIncidentPerformance />
      <SREOutcomesFooter />
    </main>
  );
}
