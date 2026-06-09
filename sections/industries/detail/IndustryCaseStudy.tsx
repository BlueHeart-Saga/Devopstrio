"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface Metric {
  value: string;
  label: string;
}

interface IndustryCaseStudyProps {
  caseStudyTitle: string;
  caseStudyDesc: string;
  metrics: Metric[];
  caseStudyHighlights: string[];
}

export function IndustryCaseStudy({
  caseStudyTitle,
  caseStudyDesc,
  metrics,
  caseStudyHighlights
}: IndustryCaseStudyProps) {
  return (
    <section id="case-study" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-zinc-950/20 border border-zinc-900 rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative overflow-hidden text-left">
          
          {/* Decorative ambient glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Panel: Narrative & Metrics */}
          <div className="relative z-10">
            <Reveal>
              <span className="text-[9px] font-mono tracking-widest text-rose-500 uppercase block mb-3">
                Case Study / Project Validation
              </span>
            </Reveal>
            
            <Reveal delay={0.05}>
              <h3 className="text-xl md:text-2xl font-light text-white mb-6 leading-snug max-w-xl">
                {caseStudyTitle}
              </h3>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-8 max-w-xl">
                {caseStudyDesc}
              </p>
            </Reveal>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-900/80">
              {metrics.map((m, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div>
                    <span className="block text-xl md:text-2xl font-semibold text-white font-mono mb-1">
                      {m.value}
                    </span>
                    <span className="text-[10px] text-zinc-550 block leading-tight font-light uppercase tracking-wider">
                      {m.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Panel: Highlights card */}
          <Reveal className="h-full">
            <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative z-10 flex flex-col justify-center">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                Milestone Highlights
              </span>
              <ul className="flex flex-col gap-4 text-xs text-zinc-300 font-light">
                {caseStudyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 flex-shrink-0" />
                    <span className="leading-relaxed">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
