"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function AiLabRoadmap() {
  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 text-left">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D ROADMAP
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Exploring <span className="text-rose-500">what is next</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            Prototyping future cognitive structures, multi-model consensus swarms, and self-healing cloud orchestration gates.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/10 transition-colors">
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Agentic AI & Swarms</h4>
              <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Modeling multiple collaborating agents that split complex operations and audit their decisions.</p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/10 transition-colors">
              <h4 className="text-xs font-bold text-zinc-200 mb-2">AI Governance & Auditing</h4>
              <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Codifying automated compliance checks to detect output drift, model bias, and token validation hazards.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6 hover:border-rose-500/10 transition-colors">
              <h4 className="text-xs font-bold text-zinc-200 mb-2">AI for Cloud Operations</h4>
              <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Connecting agentic diagnostic prompts directly to cluster runtimes to repair SRE incidents automatically.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
