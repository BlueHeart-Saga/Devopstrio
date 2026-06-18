"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function AiLabWorkflow() {
  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            PROCESS ROADMAP
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            From idea to <span className="text-rose-500">production rollout</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            A battle-tested methodology to guide enterprises through discovery, prototyping, validation, and cloud deployment.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-rose-500/5 via-rose-500/20 to-rose-500/5 hidden md:block z-0 -translate-y-6" />

          <Reveal className="h-full z-10">
            <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative">
              <span className="block text-[9px] font-mono tracking-widest text-rose-500 mb-3 font-bold">STAGE 01</span>
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Discover</h4>
              <p className="text-[9px] text-zinc-400 leading-relaxed font-semibold">Audit workflows and map candidate dataset parameters.</p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="h-full z-10">
            <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative">
              <span className="block text-[9px] font-mono tracking-widest text-rose-500 mb-3 font-bold">STAGE 02</span>
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Assess</h4>
              <p className="text-[9px] text-zinc-400 leading-relaxed font-semibold">Determine API token costs and select optimal LLM foundation models.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full z-10">
            <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative">
              <span className="block text-[9px] font-mono tracking-widest text-rose-500 mb-3 font-bold">STAGE 03</span>
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Prototype</h4>
              <p className="text-[9px] text-zinc-400 leading-relaxed font-semibold">Configure vector index maps and build functional prompt pipelines.</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="h-full z-10">
            <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative">
              <span className="block text-[9px] font-mono tracking-widest text-rose-500 mb-3 font-bold">STAGE 04</span>
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Validate</h4>
              <p className="text-[9px] text-zinc-400 leading-relaxed font-semibold">Rigorous verification loops testing outputs and hallucination triggers.</p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="h-full z-10">
            <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative">
              <span className="block text-[9px] font-mono tracking-widest text-rose-500 mb-3 font-bold">STAGE 05</span>
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Deploy</h4>
              <p className="text-[9px] text-zinc-400 leading-relaxed font-semibold">Promote orchestrations to single-tenant VPC server instances.</p>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="h-full z-10">
            <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative">
              <span className="block text-[9px] font-mono tracking-widest text-rose-500 mb-3 font-bold">STAGE 06</span>
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Optimize</h4>
              <p className="text-[9px] text-zinc-400 leading-relaxed font-semibold">Monitor API budgets, tune caching levels, and retrain models.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
