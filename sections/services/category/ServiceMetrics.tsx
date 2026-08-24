"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface StatItem {
  value: string;
  label: string;
}

interface ServiceMetricsProps {
  stats: StatItem[];
}

export function ServiceMetrics({ stats }: ServiceMetricsProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <section id="metrics" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.01),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-center">

        {/* Header Section */}
        <Reveal className="mb-16 w-full flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans text-center mx-auto">
            Quantifiable engineering <span className="text-rose-500 font-semibold">efficiency</span>
          </h2>
        </Reveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group relative flex flex-col justify-center h-full bg-zinc-950/20 border border-zinc-900 hover:border-rose-500/35 hover:bg-zinc-900/10 rounded-[24px] p-6 transition-all duration-300 overflow-hidden text-center cursor-pointer hover:scale-[1.01] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                {/* Subtle hover background accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <span className="block text-4xl md:text-5xl font-bold font-mono text-rose-500 mb-3 group-hover:scale-[1.03] transition-transform duration-300 origin-center">
                  {stat.value}
                </span>
                <span className="block text-xs sm:text-sm font-semibold tracking-widest text-zinc-300 uppercase">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
