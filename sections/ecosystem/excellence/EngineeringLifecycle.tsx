"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Eye, Layout, Code2, ShieldCheck, CheckSquare, Send, RefreshCw, Gauge } from "lucide-react";

interface LifecycleStage {
  step: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export function EngineeringLifecycle() {
  const stages: LifecycleStage[] = [
    { step: "01", title: "Discover", desc: "Evaluating architecture bottlenecks and auditing existing workspaces.", icon: Eye },
    { step: "02", title: "Design", desc: "Drafting cloud topologies, databases, and API schemas.", icon: Layout },
    { step: "03", title: "Develop", desc: "Writing application backends, responsive UIs, and tests.", icon: Code2 },
    { step: "04", title: "Secure", desc: "Setting up static security checks and verifying packages.", icon: ShieldCheck },
    { step: "05", title: "Test", desc: "Executing automated unit, integration, and load checks.", icon: CheckSquare },
    { step: "06", title: "Deploy", desc: "Releasing verified builds behind gateway proxies via GitOps.", icon: Send },
    { step: "07", title: "Operate", desc: "Monitoring traffic, resolving incidents, and gathering logs.", icon: RefreshCw },
    { step: "08", title: "Optimize", desc: "Refining compute scaling rules and resizing data structures.", icon: Gauge }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background glow mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            WORKFLOW PIPELINE
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Engineering <span className="text-rose-500">Lifecycle</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold">
            The standard pipeline used by our engineering boards to build, secure, and operate enterprise cloud solutions.
          </p> */}
        </Reveal>

        {/* 8-Stage Lifecycle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <Reveal key={stage.step} delay={idx * 0.05}>
                <div
                  className="relative overflow-hidden bg-zinc-950/35 border border-white/10 rounded-3xl p-8 min-h-[160px] h-full flex flex-col justify-between backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:bg-zinc-900/10 hover:border-rose-500/25 hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div>
                    {/* Large watermark number + icon row */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-6xl font-mono font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-rose-500/30 via-rose-500/15 to-transparent select-none drop-shadow-[0_4px_16px_rgba(225,29,72,0.25)] transition-all duration-300 group-hover:from-rose-500/40">
                        {stage.step}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-rose-600/10 border border-rose-500/15 text-rose-500 flex items-center justify-center transition-colors duration-300 group-hover:border-rose-500/35 group-hover:bg-rose-600/20">
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Stage title */}
                    <h3 className="text-base md:text-lg font-semibold text-white mb-3 hover:text-rose-400 transition-colors duration-300 uppercase tracking-wider">
                      {stage.title}
                    </h3>

                    {/* Stage description */}
                    {/* <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-semibold">
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
