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
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              GEOGRAPHIC CAPABILITY
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Distributed delivery <span className="font-semibold text-rose-500">networks</span>
          </h2>
          <p className="text-zinc-550 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl mx-auto">
            We operate engineering hubs across global timezones to guarantee synchronous collaboration and fast project handoffs.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region, idx) => (
            <Reveal key={region.name} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-[#050505] border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-800 transition-colors text-left">
                <div>
                  <span className="text-[10px] font-mono text-rose-600 block mb-4 uppercase tracking-widest">
                    Region {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-xs font-semibold text-zinc-100 mb-3 tracking-wide">
                    {region.name}
                  </h3>
                  <p className="text-[10px] text-zinc-450 leading-relaxed font-light">
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
