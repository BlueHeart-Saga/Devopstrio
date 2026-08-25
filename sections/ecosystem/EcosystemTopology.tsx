"use client";

import React from "react";
import { Globe, Layers, Cpu, Activity } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Cloud Infrastructure",
    desc: "Raw public cloud partitions, IAM roles, and storage components hosted on AWS, Azure, and Google Cloud.",
    icon: Globe,
    translateClass: "md:-translate-y-6"
  },
  {
    num: "02",
    title: "Devopstrio Accelerators",
    desc: "Pre-compiled landing zones, Terraform boilerplates, and deployment blueprints configured for SOC-2 compliance.",
    icon: Layers,
    translateClass: "md:translate-y-6"
  },
  {
    num: "03",
    title: "Cognitive Engines",
    desc: "Private RAG configurations, semantic LLM routers, agentic workflows, and low-latency databases.",
    icon: Cpu,
    translateClass: "md:-translate-y-6"
  },
  {
    num: "04",
    title: "Client Environments",
    desc: "Production-ready business endpoints, automated retries, and active OpenTelemetry performance trackers.",
    icon: Activity,
    translateClass: "md:translate-y-6"
  }
];

import Link from "next/link";

export function EcosystemTopology() {
  return (
    <section id="topology" className="w-full py-32 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Ambient BG Glow */}
      <div className="absolute top-[30%] left-[20%] w-[40%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.025),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left relative z-10">

        <Reveal className="mb-24">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            ECOSYSTEM TOPOLOGY
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Connected alliance <span className="text-rose-500">dataflow & layers</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            How our technology partners, accelerators, and R&D labs collaborate to deploy workloads. Explore our <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud services</Link> and read our <Link href="/about/company-overview" className="text-rose-500 hover:underline font-bold">company overview</Link>.
          </p>
        </Reveal>

        {/* Interactive Topology Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-12 mb-12">

          {/* Zigzag Connector Line (Calculated matching column centers) */}
          <div className="absolute top-1/2 left-0 right-0 h-24 pointer-events-none hidden md:block z-0 -translate-y-12">
            <svg className="w-full h-full text-rose-500/10" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
              <path
                d="M 0 50 L 125 20 L 375 80 L 625 20 L 875 80 L 1000 50"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05} className={`h-full z-10 ${step.translateClass}`}>
                <div className="h-full bg-gradient-to-b from-zinc-900/40 to-zinc-950/80 border border-zinc-900 rounded-2xl p-6 relative group hover:border-rose-500/30 hover:bg-zinc-950 transition-all duration-500 flex flex-col justify-between overflow-hidden">

                  {/* Subtle hover gradient glow overlay */}
                  <div className="absolute -inset-px bg-gradient-to-r from-rose-500 to-rose-700 rounded-2xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 blur-sm pointer-events-none" />

                  {/* Ghost numbers in background */}
                  <span className="absolute right-4 bottom-2 text-7xl font-bold font-mono text-zinc-900/15 group-hover:text-rose-500/5 select-none pointer-events-none transition-colors duration-500">
                    {step.num}
                  </span>

                  <div>
                    <span className="block text-[9px] font-mono tracking-widest text-rose-500/60 mb-4 uppercase font-bold">
                      LAYER {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-rose-500 mb-5 group-hover:scale-105 group-hover:bg-rose-950/20 group-hover:border-rose-500/30 transition-all duration-300">
                      <Icon size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold pr-4">
                      {step.desc}
                    </p>
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
