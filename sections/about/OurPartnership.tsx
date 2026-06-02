"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const partners = [
  { name: "AWS Partner Network", details: "Certified Cloud Consulting" },
  { name: "Microsoft Gold Partner", details: "Enterprise Cloud Platforms" },
  { name: "Google Cloud Partner", details: "Infra & Architecture Build" },
  { name: "CNCF Kubernetes Group", details: "Certified Service Provider" }
];

export function OurPartnership() {
  return (
    <section className="w-full py-20 bg-[#050505] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              08 / ALLIANCES & AUDITS
            </span>
          </div>
          <h2 className="text-3xl font-light tracking-tight leading-tight">
            Cloud, AI, and security ecosystems aligned to <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">procurement standards</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((item) => (
            <div 
              key={item.name} 
              className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-xl hover:border-zinc-800 transition-colors group"
            >
              <span className="block text-[9px] font-mono text-rose-500 mb-2">OFFICIAL_MEMBER</span>
              <h3 className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors mb-1">
                {item.name}
              </h3>
              <p className="text-[10px] text-zinc-500 font-light">
                {item.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
