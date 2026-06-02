"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const phases = [
  {
    step: "01",
    name: "Architectural Audit",
    desc: "We analyze your existing workflows, database bottlenecks, security compliance gaps, and current hosting footprints."
  },
  {
    step: "02",
    name: "Strategic Design",
    desc: "We draft complete cloud landing zones, infrastructure architecture specs, and microservices decoupling schemas."
  },
  {
    step: "03",
    name: "Agile Prototyping",
    desc: "We build functioning sandboxes containing container runtimes, foundational CI/CD setups, and sample endpoints."
  },
  {
    step: "04",
    name: "Scaling & Production",
    desc: "We scale up containers, set up automated failovers, hook up zero-trust policies, and finalize production load runs."
  },
  {
    step: "05",
    name: "SRE & Performance Optimization",
    desc: "We establish 24/7 logging dashboards, alert schedules, resource usage reviews, and continuous updates."
  }
];

export function LifecycleSection() {
  return (
    <section className="w-full py-24 bg-[#050505] text-white border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              ENGAGEMENT MODEL
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Our structured <span className="font-semibold text-rose-500">delivery lifecycle</span>
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl mx-auto">
            From initial consultation to operational maintenance, we ensure full clarity, security alignment, and milestone checkins.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {phases.map((phase, idx) => (
            <Reveal key={phase.step} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-[#080808] border border-zinc-900 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <span className="block text-2xl font-light text-rose-600 mb-6 font-mono">
                    {phase.step}
                  </span>
                  <h3 className="text-xs font-semibold text-zinc-100 mb-3 tracking-wide">
                    {phase.name}
                  </h3>
                  <p className="text-[10px] text-zinc-450 leading-relaxed font-light">
                    {phase.desc}
                  </p>
                </div>

                <div className="w-full h-[2px] bg-gradient-to-r from-rose-950/20 to-rose-600/40 mt-8" />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
