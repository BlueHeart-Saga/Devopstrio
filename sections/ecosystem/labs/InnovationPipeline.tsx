"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { BookOpen, Terminal, Shield, Zap, Milestone, Activity } from "lucide-react";

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
    { id: "05", name: "Enterprise Product", desc: "Exporting blueprints to general consulting catalog templates or partner stacks.", icon: <Milestone size={16} /> },
    { id: "06", name: "Continuous Optimization", desc: "Iteratively refining deployed architectures based on real-time observability and AI telemetry.", icon: <Activity size={16} /> }
  ];

  const staggerClasses = [
    "translate-y-0",
    "md:translate-y-8 lg:translate-y-8",
    "lg:translate-y-16",
    "md:translate-y-8 lg:translate-y-0",
    "lg:translate-y-8",
  ];

  return (
    <section id="pipeline" className="w-full pt-24 pb-36 bg-[#030303] border-b border-zinc-900 relative overflow-hidden">
      {/* Background glow mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              R&D INGESTION PIPELINE
            </span> */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white uppercase">
              The Innovation <span className="text-rose-500">Pipeline</span>
            </h2>
            {/* <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              How breakthrough ideas are systematically researched, validated, piloted, and delivered as enterprise-ready solutions.
            </p> */}
          </div>
        </Reveal>

        {/* Pipeline 5-Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:justify-center">
          {stages.map((stage, idx) => {
            return (
              <Reveal key={stage.id} delay={idx * 0.05}>
                <div
                  className={`relative overflow-hidden bg-zinc-950/35 border border-white/10 rounded-3xl p-8 min-h-[160px] h-full flex flex-col justify-between backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:bg-zinc-900/10 hover:border-rose-500/25 hover:-translate-y-1.5 transition-all duration-300 ${staggerClasses[idx] || ""}`}
                >
                  <div>
                    {/* Large step number + icon row */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-6xl font-mono font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-rose-500/30 via-rose-500/15 to-transparent select-none drop-shadow-[0_4px_16px_rgba(225,29,72,0.25)]">
                        {stage.id}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-rose-600/10 border border-rose-500/15 text-rose-500 flex items-center justify-center group-hover:border-rose-500/35 transition-colors">
                        {stage.icon}
                      </div>
                    </div>

                    {/* Value title */}
                    <h3 className="text-base md:text-lg font-semibold text-white mb-3 hover:text-rose-400 transition-colors duration-300">
                      {stage.name}
                    </h3>

                    {/* Value description */}
                    {/* <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      {stage.desc}
                    </p> */}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
