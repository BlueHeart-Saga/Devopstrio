"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface MetricItem {
  value: string;
  label: string;
}

export function InnovationMetrics() {
  const metrics: MetricItem[] = [
    { value: "50+", label: "Research Initiatives" },
    { value: "25+", label: "Frameworks Built" },
    { value: "100+", label: "Prototype Deployments" },
    { value: "95%", label: "Production Adoption" },
    { value: "20+", label: "Enterprise Accelerators" }
  ];

  return (
    <section id="metrics" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D PERFORMANCE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Innovation <span className="text-rose-500">Metrics</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Track key indicators measuring the business adoption and real-world execution of our laboratory developments.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 text-center flex flex-col justify-center items-center min-h-[140px] hover:border-rose-500/10 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-black text-rose-500 tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="text-[9px] font-mono text-zinc-550 uppercase tracking-widest leading-normal">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
