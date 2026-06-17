"use client";

import React from "react";
import { Globe, Layers, Cpu, Activity } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function DomainTopology() {
  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 text-left">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            ECOSYSTEM TOPOLOGY
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Connected alliance <span className="text-rose-500">dataflow & layers</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            How our technology partners, accelerators, and R&D labs collaborate to deploy workloads.
          </p>
        </Reveal>

        {/* Interactive Topology Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-rose-500/5 via-rose-500/25 to-rose-500/5 hidden md:block z-0 -translate-y-6" />

          <Reveal className="h-full z-10">
            <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/30 transition-all duration-300">
              <span className="block text-[9px] font-mono tracking-widest text-rose-500/70 mb-4 uppercase font-bold">
                LAYER 01
              </span>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 group-hover:bg-rose-950/20 group-hover:border-rose-500/30 transition-all duration-300">
                <Globe size={16} />
              </div>
              <h4 className="text-sm font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors">
                Cloud Infrastructure
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                Raw public cloud partitions, IAM roles, and storage components hosted on AWS, Azure, and Google Cloud.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="h-full z-10">
            <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/30 transition-all duration-300">
              <span className="block text-[9px] font-mono tracking-widest text-rose-500/70 mb-4 uppercase font-bold">
                LAYER 02
              </span>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 group-hover:bg-rose-950/20 group-hover:border-rose-500/30 transition-all duration-300">
                <Layers size={16} />
              </div>
              <h4 className="text-sm font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors">
                Devopstrio Accelerators
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                Pre-compiled landing zones, Terraform boilerplates, and deployment blueprints configured for SOC-2 compliance.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full z-10">
            <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/30 transition-all duration-300">
              <span className="block text-[9px] font-mono tracking-widest text-rose-500/70 mb-4 uppercase font-bold">
                LAYER 03
              </span>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 group-hover:bg-rose-950/20 group-hover:border-rose-500/30 transition-all duration-300">
                <Cpu size={16} />
              </div>
              <h4 className="text-sm font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors">
                Cognitive Engines
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                Private RAG configurations, semantic LLM routers, agentic workflows, and low-latency databases.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="h-full z-10">
            <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/30 transition-all duration-300">
              <span className="block text-[9px] font-mono tracking-widest text-rose-500/70 mb-4 uppercase font-bold">
                LAYER 04
              </span>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 group-hover:bg-rose-950/20 group-hover:border-rose-500/30 transition-all duration-300">
                <Activity size={16} />
              </div>
              <h4 className="text-sm font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors">
                Client Environments
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                Production-ready business endpoints, automated retries, and active OpenTelemetry performance trackers.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
