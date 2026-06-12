"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export interface TimelineProcessProps {
  steps: string[];
}

export function TimelineProcess({ steps }: TimelineProcessProps) {
  return (
    <section id="process" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Section Header */}
        <Reveal className="mb-16 text-left">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Methodology
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Our delivery <span className="font-semibold text-rose-500">framework</span>
          </h2>
        </Reveal>

        {/* Timeline Line */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 flex flex-col gap-12 text-left">
          {steps.map((step, idx) => {
            const parts = step.split(":");
            const label = parts[0] || `Phase ${idx + 1}`;
            const detail = parts.slice(1).join(":") || "";
            return (
              <Reveal key={idx} delay={idx * 0.05} className="relative pl-8 md:pl-10">
                {/* Timeline dot */}
                <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-rose-600 border-2 border-black ring-4 ring-rose-950/20" />

                <h3 className="text-xs font-semibold text-zinc-150 uppercase tracking-widest mb-2">
                  {label}
                </h3>
                {detail && (
                  <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-xl">
                    {detail.trim()}
                  </p>
                )}
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
