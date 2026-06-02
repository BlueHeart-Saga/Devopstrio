"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2 } from "lucide-react";

const advantages = [
  {
    title: "End-to-end Ownership",
    desc: "From initial architecture blueprints through production code delivery and ongoing operational optimization."
  },
  {
    title: "Security-First DNA",
    desc: "We build secure identity, data routing, and postures directly into core codebases, avoiding secondary patches."
  },
  {
    title: "Cloud Native Principles",
    desc: "Strict adherence to modular, containerized, and declarative infrastructure configurations."
  },
  {
    title: "Elite Senior Talent",
    desc: "Engineers selected from leading tech companies, specializing in high-concurrency architecture."
  },
  {
    title: "SRE-Led Operations",
    desc: "We enforce concrete error budgets, telemetry mapping, and robust auto-healing system designs."
  },
  {
    title: "Continuous Transfer",
    desc: "We don't keep our processes secret. We train your teams and handover complete system ownership."
  }
];

export function OurAdvantage() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#050505] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
              THE ADVANTAGE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            High-integrity engineering for <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">modern enterprise platforms</span>.
          </h2>
        </Reveal>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <div 
              key={adv.title}
              className="p-6 md:p-8 rounded-xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 hover:bg-zinc-950/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-zinc-655 text-rose-500">0{index + 1}</span>
                  <div className="text-zinc-550 group-hover:text-rose-500 transition-colors">
                    <CheckCircle2 size={16} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-base font-semibold tracking-wide text-zinc-200 mb-2 group-hover:text-white transition-colors">
                  {adv.title}
                </h3>
                <p className="text-sm text-zinc-455 leading-relaxed font-bold">
                  {adv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
