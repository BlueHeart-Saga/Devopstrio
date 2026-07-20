"use client";

import React from "react";
import { SoftwareHeroOverview } from "@/sections/ecosystem/excellence/software/SoftwareHeroOverview";
import { SoftwareCore } from "@/sections/ecosystem/excellence/software/SoftwareCore";
import { SoftwareDelivery } from "@/sections/ecosystem/excellence/software/SoftwareDelivery";
import { SoftwareFooter } from "@/sections/ecosystem/excellence/software/SoftwareFooter";

export default function SoftwareEngineeringPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Background ambient mesh grid */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      <SoftwareHeroOverview />
      <SoftwareCore />
      <SoftwareDelivery />
      <SoftwareFooter />
    </main>
  );
}
