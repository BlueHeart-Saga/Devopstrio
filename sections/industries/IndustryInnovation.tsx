"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function IndustryInnovation() {
  return (
    <section id="innovation" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              R&D TRANSLATION
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Applying laboratory R&D <span className="font-semibold text-rose-500">directly to operations</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6">
              <span className="text-[9px] font-mono text-rose-500 uppercase block mb-3">AI LAB APPLICATION</span>
              <h4 className="text-xs font-semibold text-zinc-200 mb-2">Dynamic Triage Graphs</h4>
              <p className="text-[10px] text-zinc-500 leading-relaxed font-light">Deploying LangGraph email sorting blocks to automate logistics routing tickets.</p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6">
              <span className="text-[9px] font-mono text-rose-500 uppercase block mb-3">CLOUD LAB APPLICATION</span>
              <h4 className="text-xs font-semibold text-zinc-200 mb-2">Scale-to-Zero Compute</h4>
              <p className="text-[10px] text-zinc-500 leading-relaxed font-light">Integrating event-driven KEDA schedulers to drop standby test environments automatically.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-full bg-zinc-950/20 border border-zinc-900 rounded-2xl p-6">
              <span className="text-[9px] font-mono text-rose-500 uppercase block mb-3">DEVOPS LAB APPLICATION</span>
              <h4 className="text-xs font-semibold text-zinc-200 mb-2">Canary Auto-Rollbacks</h4>
              <p className="text-[10px] text-zinc-500 leading-relaxed font-light">Wiring telemetry alert policies directly to ArgoCD triggers to undo unstable application updates.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
