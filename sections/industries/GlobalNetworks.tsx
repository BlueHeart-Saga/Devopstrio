"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const regions = [
  {
    name: "North America Hub",
    details: "Architectural design, compliance validation checks, and customer success management."
  },
  {
    name: "European Delivery Clusters",
    details: "Advanced software engineering, MLOps, database creation, and SRE rotations."
  },
  {
    name: "LatAm Talent Nodes",
    details: "Mobile front-end development, API integrations, and validation testing."
  }
];

export function GlobalNetworks() {
  return (
    <section className="w-full py-24 bg-black text-white border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Section Header */}
        <Reveal className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Geographic Capability
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Distributed delivery <span className="font-semibold text-rose-500">networks</span>
          </h2>
          <p className="text-zinc-550 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl mx-auto">
            We operate engineering hubs across global timezones to guarantee synchronous collaboration and fast project handoffs.
          </p>
        </Reveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region, idx) => (
            <Reveal key={region.name} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-8 flex flex-col justify-between hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 hover:scale-[1.02] group text-left relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div>
                  <span className="block text-[9px] font-mono text-zinc-550 mb-4 uppercase tracking-widest">
                    Region {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold text-zinc-100 mb-3 tracking-wide group-hover:text-white transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-[11px] text-zinc-450 leading-relaxed font-light group-hover:text-zinc-350 transition-colors">
                    {region.details}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
