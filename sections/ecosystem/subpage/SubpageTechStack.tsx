"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface TechItem {
  name: string;
  desc: string;
}

interface SubpageTechStackProps {
  techStack: TechItem[];
}

export function SubpageTechStack({ techStack }: SubpageTechStackProps) {
  return (
    <section id="tech-stack" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Co-engineered <span className="text-rose-500">technology stack</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            Selected cloud-native developer libraries, testing suites, infrastructure providers, and orchestration nodes.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((tech, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 hover:border-zinc-800 transition-all duration-300">
                <h4 className="text-xs font-bold text-zinc-200 mb-2">{tech.name}</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-semibold">{tech.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
