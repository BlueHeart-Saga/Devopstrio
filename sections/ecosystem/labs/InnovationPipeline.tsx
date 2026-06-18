"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { BookOpen, Terminal, Shield, Zap, Milestone } from "lucide-react";

interface PipelineStage {
  id: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
}

export function InnovationPipeline() {
  const stages: PipelineStage[] = [
    { id: "01", name: "Research", desc: "Evaluating emerging architectural shifts, cloud limits, and AI safety benchmarks.", icon: <BookOpen size={16} /> },
    { id: "02", name: "Prototype", desc: "Drafting minimal executable packages, scripts, or core framework wrappers.", icon: <Terminal size={16} /> },
    { id: "03", name: "Validation", desc: "Executing sandbox vulnerability checks and high-load performance benchmarking.", icon: <Shield size={16} /> },
    { id: "04", name: "Pilot Deployment", desc: "Testing integrations on staging namespaces and target client test environments.", icon: <Zap size={16} /> },
    { id: "05", name: "Enterprise Product", desc: "Exporting blueprints to general consulting catalog templates or partner stacks.", icon: <Milestone size={16} /> }
  ];

  return (
    <section id="pipeline" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D INGESTION PIPELINE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            The Innovation <span className="text-rose-500">Pipeline</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            How breakthrough ideas are systematically researched, validated, piloted, and delivered as enterprise-ready solutions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {stages.map((stage, idx) => (
            <div
              key={stage.id}
              className="relative bg-zinc-950/40 border border-zinc-900/80 hover:border-rose-500/20 p-6 rounded-2xl flex flex-col justify-between min-h-[200px] transition-all duration-300 group"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300 mb-4">
                  {stage.icon}
                </div>
                <h4 className="text-xs font-bold text-white mb-2">{stage.id}. {stage.name}</h4>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {stage.desc}
                </p>
              </div>
              {idx < 4 && (
                <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 text-rose-500/40 font-bold font-mono">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
