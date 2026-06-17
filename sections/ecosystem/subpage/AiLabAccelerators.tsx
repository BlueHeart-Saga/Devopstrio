"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function AiLabAccelerators() {
  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 text-left">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            BOILERPLATES & ACCELERATORS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Ready-to-deploy <span className="text-rose-500">AI accelerators</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            Pre-engineered microservices and cognitive blueprints to rapidly bootstrap production-grade agentic platforms.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
              <h4 className="text-xs font-bold text-zinc-200 mb-2">AI Knowledge Assistant</h4>
              <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Private secure documentation search using hybrid sparse/dense vector queries.</p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Document Intelligence Engine</h4>
              <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Extracting table structures, properties, and values from millions of PDF pages.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Customer Support Copilot</h4>
              <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Suggesting context-aware customer email replies to support desks.</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Recruitment AI</h4>
              <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Filtering candidate profiles based on corporate job requirements.</p>
            </div>
          </Reveal>

          <Reveal className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Sales Intelligence Platform</h4>
              <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Analyzing pipeline interactions, call notes, and predicting conversion targets.</p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Contract Review Assistant</h4>
              <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Highlighting liability thresholds, termination clauses, and custom exceptions.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
              <h4 className="text-xs font-bold text-zinc-200 mb-2">Enterprise Search Engine</h4>
              <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Unified hybrid query search accessing Google Drive, Slack, and local databases.</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/25 transition-all">
              <h4 className="text-xs font-bold text-zinc-200 mb-2">AI Operations Assistant</h4>
              <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">Predicting server CPU exhaustion alerts using time-series sensor logs.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
