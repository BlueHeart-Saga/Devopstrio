"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, History, Zap, CheckCircle2 } from "lucide-react";

export function WhyAcceleratorsMatter() {
  const traditional = [
    { label: "Requirements", desc: "Heavy scoping sessions." },
    { label: "Architecture", desc: "Designing systems from scratch." },
    { label: "Development", desc: "Manual coding & API integration." },
    { label: "Testing", desc: "Setting up test frameworks manually." },
    { label: "Deployment", desc: "Manual server configurations." }
  ];

  const accelerated = [
    { label: "Requirements", desc: "Target scoping setups." },
    { label: "Pre-Built Frameworks", desc: "Reusing active platform templates." },
    { label: "Configuration", desc: "Customizing parameters." },
    { label: "Deployment", desc: "GitOps deployment loops." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            SPEED COMPARISON
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Why Accelerators <span className="text-rose-500">Matter</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Comparing the traditional development lifecycle against our pre-built, configuration-driven engineering pipeline.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Traditional Delivery */}
          <div className="bg-zinc-950/45 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-zinc-900 pb-4">
                <History className="text-zinc-500" size={18} />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Traditional Delivery</h3>
              </div>

              <div className="flex flex-col gap-4 relative pl-6">
                <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-zinc-900" />
                {traditional.map((step, idx) => (
                  <div key={step.label} className="relative">
                    <div className="absolute -left-[23px] top-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    <h5 className="text-[11px] font-bold text-zinc-350 uppercase tracking-wider">{step.label}</h5>
                    <p className="text-[9px] text-zinc-550 mt-0.5">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-6 mt-8 flex justify-between items-center">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                TIMELINE RANGE
              </span>
              <span className="text-sm font-black text-zinc-500">6–12 Months</span>
            </div>
          </div>

          {/* Accelerated Delivery */}
          <div className="bg-zinc-950/40 border border-rose-500/10 rounded-3xl p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(244,63,94,0.02)]">
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-zinc-900 pb-4">
                <div className="flex items-center gap-3">
                  <Zap className="text-rose-500" size={18} />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Accelerated Delivery</h3>
                </div>
                <span className="text-[8px] bg-rose-500/10 text-rose-500 border border-rose-500/20 px-2 py-0.5 rounded-full font-mono font-bold">
                  RECOMMENDED
                </span>
              </div>

              <div className="flex flex-col gap-4 relative pl-6">
                <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-rose-950/45" />
                {accelerated.map((step, idx) => (
                  <div key={step.label} className="relative">
                    <div className="absolute -left-[23px] top-1.5 w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <h5 className="text-[11px] font-bold text-white uppercase tracking-wider">{step.label}</h5>
                    <p className="text-[9px] text-zinc-450 mt-0.5 font-semibold leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-6 mt-8 flex justify-between items-center">
              <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold">
                TIMELINE RANGE
              </span>
              <span className="text-sm font-black text-rose-500">2–6 Months</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
