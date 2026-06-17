"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface SubpageOutcomesProps {
  benefits: string[];
}

export function SubpageOutcomes({ benefits }: SubpageOutcomesProps) {
  return (
    <section id="benefits" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 text-left">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            OUTCOMES & BENEFITS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Key outcomes and <span className="text-rose-500">benefits</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            Realized system improvements, developer speed multipliers, and overall cost reductions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 md:p-8 hover:border-zinc-800 transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-4 text-xs font-bold text-zinc-200">
                  <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                  <span>Benefit {(idx + 1).toString().padStart(2, "0")}</span>
                </div>
                <p className="text-[11px] text-zinc-450 leading-relaxed font-semibold">
                  {benefit}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
