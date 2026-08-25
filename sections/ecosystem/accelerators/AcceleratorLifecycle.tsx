"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface LifecycleStage {
  step: string;
  title: string;
  desc: string;
}

export function AcceleratorLifecycle() {
  const stages: LifecycleStage[] = [
    { step: "01", title: "Research", desc: "Identifying recurring bottlenecks and technological frameworks across client projects." },
    { step: "02", title: "Build", desc: "Constructing modular IaC blueprints, backend templates, and interface cards." },
    { step: "03", title: "Validate", desc: "Executing automated scans, test coverages, and security audits." },
    { step: "04", title: "Standardize", desc: "Documenting parameters, package versions, and golden paths." },
    { step: "05", title: "Reuse", desc: "Importing validated components into new project environments." },
    { step: "06", title: "Scale", desc: "Iterating on code elements based on real-world runtime metrics." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background glow mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            ASSET EVOLUTION
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Accelerator <span className="text-rose-500">Lifecycle</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold">
            How we identify, build, and distribute reusable engineering code assets across our teams.
          </p> */}
        </Reveal>

        {/* Stack flow visualizer */}
        <div className="max-w-3xl mx-auto flex flex-col gap-6 relative">
          
          {/* Vertical connecting line */}
          <div className="absolute left-11 top-0 bottom-0 w-0.5 bg-zinc-900 z-0" />

          {stages.map((stage, idx) => (
            <Reveal key={stage.step} delay={idx * 0.05} className="w-full">
              <div
                className="relative flex items-center gap-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/25 hover:bg-zinc-900/10 hover:translate-x-1 rounded-3xl p-6 z-10 transition-all duration-300 group shadow-lg"
              >
                {/* Level index bullet */}
                <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 group-hover:border-rose-500/30 group-hover:text-rose-500 transition-all duration-300 font-mono font-bold text-sm flex-shrink-0 z-10">
                  {stage.step}
                </div>

                {/* Content details */}
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-white uppercase tracking-wider mb-1">
                    {stage.title}
                  </h4>
                  {/* <p className="text-xs md:text-sm text-zinc-300 font-semibold leading-relaxed">
                    {stage.desc}
                  </p> */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
