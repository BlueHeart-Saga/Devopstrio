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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            ASSET EVOLUTION
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Accelerator <span className="text-rose-500">Lifecycle</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            How we identify, build, and distribute reusable engineering code assets across our teams.
          </p>
        </Reveal>

        {/* Stack flow visualizer */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-zinc-900 z-0" />

          {stages.map((stage) => (
            <div
              key={stage.step}
              className="relative flex items-center gap-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl p-5 z-10 transition-all duration-300 group"
            >
              {/* Level index bullet */}
              <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-550 group-hover:border-rose-500/30 group-hover:text-rose-500 transition-all duration-300 font-mono font-bold text-xs flex-shrink-0 z-10">
                {stage.step}
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">{stage.title}</h4>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed mt-0.5">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
