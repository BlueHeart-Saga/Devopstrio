"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface UseCaseItem {
  title: string;
  result: string;
}

interface IndustryUseCasesProps {
  useCases: UseCaseItem[];
}

export function IndustryUseCases({ useCases }: IndustryUseCasesProps) {
  return (
    <section id="use-cases" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Use Cases
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Proven <span className="font-semibold text-rose-500">use case portfolio</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((uc, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-zinc-955/15 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-colors">
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">{uc.title}</h4>
                <p className="text-[10px] text-zinc-550 leading-relaxed font-light">{uc.result}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
