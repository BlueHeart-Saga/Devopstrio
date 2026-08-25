"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

interface StepItem {
  id: string;
  name: string;
  desc: string;
}

export function EcosystemIntegration() {
  const steps: StepItem[] = [
    { id: "01", name: "Innovation Labs", desc: "R&D research, future testing, and prototype creation." },
    { id: "02", name: "Accelerators", desc: "Converting prototypes into pre-built, reusable blueprints." },
    { id: "03", name: "Tech Stack", desc: "Validating blueprints against modern engineering stacks." },
    { id: "04", name: "Platforms & Solutions", desc: "Launching enterprise SaaS and digital products." },
    { id: "05", name: "Global Delivery", desc: "Operating, scaling, and managing workloads round-the-clock." }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            ECOSYSTEM PIPELINE
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Integration Across <span className="text-rose-500">Ecosystem</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold leading-relaxed">
            How innovation research converts into reusable assets, standard stacks, products, and global delivery.
          </p> */}
        </Reveal>

        {/* Pipeline Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto relative">
          {steps.map((step, idx) => (
            <Reveal key={step.name} delay={idx * 0.05} className="h-full relative">
              <div
                className="bg-zinc-950/45 border border-zinc-900 rounded-3xl p-6 hover:border-rose-500/20 hover:bg-zinc-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[140px] h-full relative group shadow-lg"
              >
                <div>
                  {/* Step Watermark */}
                  <span className="text-xl md:text-2xl font-bold font-mono text-rose-500/80 mb-5 block transition-colors group-hover:text-rose-455">
                    {step.id}
                  </span>

                  {/* Title */}
                  <h4 className="text-base md:text-lg font-semibold text-white uppercase tracking-wider mb-2 group-hover:text-rose-400 transition-colors duration-300">
                    {step.name}
                  </h4>

                  {/* Description */}
                  {/* <p className="text-xs text-zinc-400 font-semibold leading-relaxed">
                    {step.desc}
                  </p> */}
                </div>

                {/* Premium Horizontal Link Indicator (Only on desktop lg screens) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4.5 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-zinc-950 border border-zinc-900/80 items-center justify-center text-zinc-500 group-hover:border-rose-500/30 group-hover:text-rose-500 group-hover:translate-x-1 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
