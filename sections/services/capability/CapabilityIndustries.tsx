"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CapabilityIndustriesProps {
  industries: string[];
}

export function CapabilityIndustries({ industries }: CapabilityIndustriesProps) {
  return (
    <section id="industries" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Sectors Served
            </span>
          </div>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-6 text-white">
            Target sector <span className="text-rose-500">applications</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((item, idx) => {
            const parts = item.split(":");
            const title = parts[0] || "Sector Specialization";
            const desc = parts.slice(1).join(":") || "";
            return (
              <Reveal key={idx} delay={idx * 0.03} className="h-full">
                <div className="h-full bg-zinc-950/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-rose-500/30 hover:bg-zinc-950/60 transition-all duration-300 relative overflow-hidden group backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div>
                    <h3 className="text-xs font-bold text-white mb-3 group-hover:text-rose-500 transition-colors">
                      {title}
                    </h3>
                    {desc && (
                      <p className="text-xs text-zinc-200 leading-relaxed font-semibold group-hover:text-white transition-colors">
                        {desc.trim()}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
