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
    { id: "01", name: "Research", desc: "Evaluating emerging architectural shifts, cloud limits, and AI safety benchmarks.", icon: <BookOpen size={20} /> },
    { id: "02", name: "Prototype", desc: "Drafting minimal executable packages, scripts, or core framework wrappers.", icon: <Terminal size={20} /> },
    { id: "03", name: "Validation", desc: "Executing sandbox vulnerability checks and high-load performance benchmarking.", icon: <Shield size={20} /> },
    { id: "04", name: "Pilot Deployment", desc: "Testing integrations on staging namespaces and target client test environments.", icon: <Zap size={20} /> },
    { id: "05", name: "Enterprise Product", desc: "Exporting blueprints to general consulting catalog templates or partner stacks.", icon: <Milestone size={20} /> },
    { id: "06", name: "Continuous Optimization", desc: "Iteratively refining deployed architectures based on real-time observability and AI telemetry.", icon: <Activity size={20} /> }
  ];

  return (
    <section id="pipeline" className="w-full pt-24 pb-28 bg-[#030303] border-b border-zinc-900 relative overflow-hidden">
      {/* Background glow mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white uppercase">
              The Innovation <span className="text-rose-500">Pipeline</span>
            </h2>
            {/* <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-normal mt-3">
              How breakthrough ideas are systematically researched, validated, piloted, and delivered as enterprise-ready solutions.
            </p> */}
          </div>
        </Reveal>

        {/* Pipeline 6-Stage Grid (Clean 3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stages.map((stage, idx) => (
            <Reveal key={stage.id} delay={idx * 0.05} className="h-full">
              <div
                className="relative overflow-hidden bg-zinc-950/40 border border-white/10 rounded-3xl p-8 h-full flex flex-col justify-between backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:bg-zinc-900/40 hover:border-rose-500/30 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Large step number + icon row */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl md:text-6xl font-mono font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-rose-500/40 via-rose-500/20 to-transparent select-none drop-shadow-[0_4px_16px_rgba(225,29,72,0.25)]">
                      {stage.id}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-rose-600/10 border border-rose-500/20 text-rose-500 flex items-center justify-center group-hover:border-rose-500/40 transition-colors">
                      {stage.icon}
                    </div>
                  </div>

                  {/* Stage title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 hover:text-rose-400 transition-colors duration-300">
                    {stage.name}
                  </h3>

                  {/* Stage description */}
                  {/* <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal">
                    {stage.desc}
                  </p> */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
