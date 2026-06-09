"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export interface TechItem {
  name: string;
  desc: string;
}

export interface TechnologyStackProps {
  techs: TechItem[];
}

export function TechnologyStack({ techs }: TechnologyStackProps) {
  return (
    <section id="tech-stack" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Block */}
          <div className="lg:col-span-5 text-left">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  Integration Stack
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Target tech <span className="font-semibold text-rose-500">frameworks</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mt-4 max-w-sm">
                We integrate with high-performance tools, libraries, and microservice hosts optimized to handle large transaction volume and zero-latency workloads.
              </p>
            </Reveal>
          </div>

          {/* Right Block: Technical Frameworks Cards */}
          <div className="lg:col-span-7 bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {techs.map((tech, idx) => (
              <Reveal key={tech.name} delay={idx * 0.05}>
                <div className="flex flex-col border-b border-zinc-900 pb-4 last:border-b-0 md:border-b md:pb-4 group">
                  <strong className="text-xs font-semibold text-zinc-200 mb-1.5 group-hover:text-rose-500 transition-colors">
                    {tech.name}
                  </strong>
                  <span className="text-[10px] text-zinc-550 font-light leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {tech.desc}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
