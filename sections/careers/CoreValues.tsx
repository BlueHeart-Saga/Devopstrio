"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cultureValues } from "./careersData";

export function CoreValues() {
  return (
    <section className="py-24 bg-[#030303] border-b border-zinc-900/60">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl text-left mb-16">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Core Values</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              The values that guide our <span className="font-semibold text-rose-500">co-engineering decisions</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cultureValues.map((val, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-6 md:p-8 hover:border-rose-500/25 transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div>
                  <span className="text-2xl block mb-6">{val.icon}</span>
                  <h3 className="text-sm font-semibold text-zinc-150 mb-3 group-hover:text-white transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-[11px] text-zinc-450 leading-relaxed font-light">
                    {val.desc}
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
