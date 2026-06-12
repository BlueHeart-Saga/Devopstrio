"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface FocusArea {
  title: string;
  desc: string;
}

interface IndustryFocusAreasProps {
  focusAreas: FocusArea[];
}

export function IndustryFocusAreas({ focusAreas }: IndustryFocusAreasProps) {
  return (
    <section id="focus-areas" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Section Header */}
        <Reveal className="mb-16 text-left">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Core Focus
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Specialized <span className="font-semibold text-rose-500">capability groups</span>
          </h2>
        </Reveal>

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, idx) => (
            <Reveal key={area.title} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-8 flex flex-col justify-between hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 hover:scale-[1.02] group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <span className="block text-[9px] font-mono text-zinc-500 mb-4 uppercase tracking-widest">
                    Focus Area {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors mb-3 text-left">
                    {area.title}
                  </h3>
                  <p className="text-[11px] text-zinc-450 leading-relaxed font-light text-left group-hover:text-zinc-350 transition-colors">
                    {area.desc}
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
