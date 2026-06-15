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
    <section id="metrics" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <Reveal className="mb-16 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Performance Metrics
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Quantifiable engineering <span className="font-semibold text-rose-500">efficiency</span>
          </h2>
          <p className="text-zinc-250 text-xs md:text-sm font-semibold leading-relaxed mt-2 max-w-xl">
            Our deployments are measured against rigid operational SLAs and performance benchmarks.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="bg-zinc-950/40 border border-white/5 rounded-3xl p-8 hover:border-rose-500/30 hover:bg-zinc-950/60 transition-all duration-300 relative overflow-hidden group text-left backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="block text-4xl font-extrabold font-mono text-rose-500 mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.value}
                </span>
                <span className="block text-[10px] font-mono tracking-wider text-zinc-400 uppercase font-semibold">
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
