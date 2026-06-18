"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyDetails {
  title: string;
  desc: string;
  metrics?: Metric[];
}

interface SubpageCaseStudyProps {
  caseStudy: CaseStudyDetails;
}

export function SubpageCaseStudy({ caseStudy }: SubpageCaseStudyProps) {
  return (
    <section id="case-study" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CASE STUDY
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Real-world <span className="text-rose-500">implementation</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            A deep-dive look into how a global partner deployed Devopstrio landing zones to solve scaling bottlenecks.
          </p>
        </Reveal>

        <div className="bg-zinc-950/20 border border-zinc-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
          <h4 className="text-sm font-bold text-zinc-200 mb-4">{caseStudy.title}</h4>
          <p className="text-xs text-zinc-400 leading-relaxed font-semibold mb-8 max-w-3xl">{caseStudy.desc}</p>

          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-900">
              {caseStudy.metrics.map((metric, idx) => (
                <div key={idx}>
                  <span className="block text-3xl font-bold font-mono text-rose-500 mb-1">{metric.value}</span>
                  <span className="block text-[10px] font-mono tracking-wider text-zinc-500 uppercase">{metric.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
