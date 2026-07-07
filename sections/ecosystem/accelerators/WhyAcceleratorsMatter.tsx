"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { History, Zap } from "lucide-react";

export function WhyAcceleratorsMatter() {
  const traditional = [
    { label: "Requirements", desc: "Heavy scoping sessions and lengthy consensus meetings." },
    { label: "Architecture", desc: "Designing complex systems, environments, and databases from scratch." },
    { label: "Development", desc: "Manual coding, repetitive boilerplate setup, and manual API integrations." },
    { label: "Testing", desc: "Setting up test frameworks, writing mock data, and manual testing cycles." },
    { label: "Deployment", desc: "Manual server configurations and error-prone environment provisioning." }
  ];

  const accelerated = [
    { label: "Requirements", desc: "Target scoping setups with pre-defined business outcome models." },
    { label: "Pre-Built Frameworks", desc: "Reusing active platform templates, microservices code, and automation loops." },
    { label: "Configuration", desc: "Customizing environment parameters via declarative config files." },
    { label: "Deployment", desc: "Automated GitOps pipeline loops releasing verified builds instantly." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            SPEED COMPARISON
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Why Accelerators <span className="text-rose-500">Matter</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-semibold leading-relaxed">
            Comparing the traditional development lifecycle against our pre-built, configuration-driven engineering pipeline.
          </p>
        </Reveal>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">

          {/* Traditional Delivery Card */}
          <Reveal className="h-full">
            <div className="bg-zinc-950/45 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between h-full min-h-[480px]">
              <div>
                <div className="flex items-center gap-3 mb-8 border-b border-zinc-900 pb-4">
                  <History className="text-zinc-500 shrink-0" size={20} />
                  <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider">Traditional Delivery</h3>
                </div>

                <div className="flex flex-col gap-6 relative pl-6">
                  <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-zinc-900" />
                  {traditional.map((step) => (
                    <div key={step.label} className="relative">
                      {/* Timeline Bullet */}
                      <div className="absolute -left-[23px] top-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 shadow-[0_0_4px_rgba(255,255,255,0.15)]" />
                      <h5 className="text-xs md:text-sm font-bold text-zinc-300 uppercase tracking-wider mb-1">{step.label}</h5>
                      <p className="text-xs md:text-sm text-zinc-500 font-semibold leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer timeline */}
              <div className="border-t border-zinc-900 pt-6 mt-8 flex justify-between items-center">
                <span className="text-[11px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest font-bold">
                  TIMELINE RANGE
                </span>
                <span className="text-sm md:text-base font-black text-zinc-500">6–12 Months</span>
              </div>
            </div>
          </Reveal>

          {/* Accelerated Delivery Card */}
          <Reveal className="h-full">
            <div className="bg-zinc-950/40 border border-rose-500/10 rounded-3xl p-8 flex flex-col justify-between h-full min-h-[480px] shadow-[0_0_30px_rgba(244,63,94,0.02)]">
              <div>
                <div className="flex items-center justify-between mb-8 border-b border-zinc-900/60 pb-4">
                  <div className="flex items-center gap-3">
                    <Zap className="text-rose-500 shrink-0" size={20} />
                    <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider">Accelerated Delivery</h3>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-[9px] md:text-[10px] font-mono font-bold tracking-widest uppercase bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                    RECOMMENDED
                  </span>
                </div>

                <div className="flex flex-col gap-6 relative pl-6">
                  <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-rose-950/30" />
                  {accelerated.map((step) => (
                    <div key={step.label} className="relative">
                      {/* Timeline Bullet */}
                      <div className="absolute -left-[23px] top-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.6)]" />
                      <h5 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-1">{step.label}</h5>
                      <p className="text-xs md:text-sm text-zinc-350 font-semibold leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer timeline */}
              <div className="border-t border-zinc-900/60 pt-6 mt-8 flex justify-between items-center">
                <span className="text-[11px] md:text-xs font-mono text-rose-500 uppercase tracking-widest font-bold">
                  TIMELINE RANGE
                </span>
                <span className="text-sm md:text-base font-black text-rose-500">2–6 Months</span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
