"use client";

import React from "react";
import { OpsHeroOverview } from "@/sections/ecosystem/excellence/operations/OpsHeroOverview";
import { OpsLifecycleManagement } from "@/sections/ecosystem/excellence/operations/OpsLifecycleManagement";
import { OpsProductivityReleaseMetrics } from "@/sections/ecosystem/excellence/operations/OpsProductivityReleaseMetrics";
import { OpsOutcomesFooter } from "@/sections/ecosystem/excellence/operations/OpsOutcomesFooter";

export default function EngineeringOperationsPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-violet-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <OpsHeroOverview />
      <OpsLifecycleManagement />
      <OpsProductivityReleaseMetrics />
      <OpsOutcomesFooter />
    </main>
  );
}
