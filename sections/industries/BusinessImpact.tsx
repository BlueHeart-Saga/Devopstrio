"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function BusinessImpact() {
  return (
    <section id="impact" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              QUANTIFIABLE RESULTS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Quantifiable <span className="font-semibold text-rose-500">business impact</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Reveal className="h-full">
            <div className="h-full bg-zinc-955/20 border border-zinc-900 rounded-2xl p-6 text-left hover:border-rose-500/20 transition-all">
              <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">-45%</span>
              <h4 className="text-xs font-semibold text-zinc-200 mb-1">Infrastructure Spend</h4>
              <p className="text-[9px] text-zinc-550 font-light leading-relaxed">Cut idle virtualization billing using auto-scaling grids.</p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="h-full">
            <div className="h-full bg-zinc-955/20 border border-zinc-900 rounded-2xl p-6 text-left hover:border-rose-500/20 transition-all">
              <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">4.8x</span>
              <h4 className="text-xs font-semibold text-zinc-200 mb-1">Release Frequency</h4>
              <p className="text-[9px] text-zinc-550 font-light leading-relaxed">Boosted weekly deployments through automated test pipelines.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-zinc-955/20 border border-zinc-900 rounded-2xl p-6 text-left hover:border-rose-500/20 transition-all">
              <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">Zero</span>
              <h4 className="text-xs font-semibold text-zinc-200 mb-1">Configuration Drift</h4>
              <p className="text-[9px] text-zinc-550 font-light leading-relaxed">Enforced 100% git-tracked state synchronization metrics.</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="h-full">
            <div className="h-full bg-zinc-955/20 border border-zinc-900 rounded-2xl p-6 text-left hover:border-rose-500/20 transition-all">
              <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">95%</span>
              <h4 className="text-xs font-semibold text-zinc-200 mb-1">Token Bill Savings</h4>
              <p className="text-[9px] text-zinc-550 font-light leading-relaxed">Optimized LLM queries via semantic output caching.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
