"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface OutcomeItem {
  value: string;
  label: string;
  desc: string;
}

interface IndustryOutcomesProps {
  outcomes: OutcomeItem[];
}

export function IndustryOutcomes({ outcomes }: IndustryOutcomesProps) {
  return (
    <section id="outcomes" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">

            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Business Outcomes
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Quantifiable <span className="font-semibold text-rose-500">operational value</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((out, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/20 transition-all">
                <span className="block text-4xl font-bold font-mono text-rose-500 mb-2">{out.value}</span>
                <h4 className="text-xs font-semibold text-zinc-200 mb-1">{out.label}</h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">{out.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
