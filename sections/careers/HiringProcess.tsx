"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { hiringSteps } from "./careersData";

export function HiringProcess() {
  return (
    <section className="py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl text-left mb-16">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Recruitment Pathway</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Our collaborative <span className="font-semibold text-rose-500">hiring process</span>
            </h2>
          </Reveal>
        </div>

        {/* Timeline Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          <div className="absolute top-[40px] left-[30px] right-[30px] h-[1px] bg-zinc-900 hidden lg:block z-0 pointer-events-none" />
          
          {hiringSteps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full relative z-10">
              <div className="group h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-6 hover:border-zinc-800 transition-all duration-300 text-left">
                <div className="w-10 h-10 rounded-full bg-zinc-900 group-hover:bg-rose-950/20 border border-zinc-850 group-hover:border-rose-500/20 flex items-center justify-center mb-6 text-xs font-bold text-zinc-400 group-hover:text-rose-500 transition-colors">
                  {step.num}
                </div>
                <h4 className="text-xs font-bold text-zinc-200 mb-2 leading-tight group-hover:text-white transition-colors">
                  {step.name}
                </h4>
                <p className="text-[10px] text-zinc-450 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
