"use client";

import React from "react";
import { Lightbulb, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface SolutionItem {
  title: string;
  desc: string;
}

interface IndustrySolutionsProps {
  solutions: SolutionItem[];
}

export function IndustrySolutions({ solutions }: IndustrySolutionsProps) {
  return (
    <section id="solutions" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-left">
        
        {/* Section Header */}
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Solutions We Deliver
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
            Customized <span className="text-[#E11D48]">technology strategies</span>
          </h2>
        </Reveal>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((sol, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] overflow-hidden flex flex-col justify-between min-h-[380px] hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative">
                
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Padded Graphic Container */}
                <div className="p-3 pb-0">
                  <div className="relative w-full aspect-[16/6] overflow-hidden bg-zinc-950 rounded-[16px] border border-white/5 flex items-center justify-center text-[#E11D48] group-hover:text-white transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#E11D48]/5 via-transparent to-transparent pointer-events-none" />
                    <Lightbulb size={22} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#E11D48] transition-colors">
                    {sol.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold mb-6">
                    {sol.desc}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-3 mt-auto border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-[#E11D48] font-bold uppercase tracking-wider group-hover:text-rose-455 transition-colors inline-flex items-center gap-1.5">
                    Engineering Architecture <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
