"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Layout, Cpu, Database, Server, HardDrive } from "lucide-react";

interface ArchLevel {
  levelName: string;
  desc: string;
  icon: React.ReactNode;
  nodes: string[];
}

export function TechArchitectureFramework() {
  const levels: ArchLevel[] = [
    {
      levelName: "Experience Layer",
      desc: "Client interfaces providing responsive visual interactions.",
      icon: <Layout size={16} />,
      nodes: ["Web Applications", "Mobile Applications", "Customer Portals"]
    },
    {
      levelName: "Application Layer",
      desc: "API gateways and microservice orchestration loops.",
      icon: <Cpu size={16} />,
      nodes: ["APIs", "Microservices", "Business Services"]
    },
    {
      levelName: "AI & Data Layer",
      desc: "Model inference runs and centralized telemetry storage.",
      icon: <Database size={16} />,
      nodes: ["AI Models", "Analytics Pipelines", "Data Platforms"]
    },
    {
      levelName: "Cloud Platform Layer",
      desc: "Cloud service hosts executing serverless compute tasks.",
      icon: <Server size={16} />,
      nodes: ["Microsoft Azure", "Amazon AWS", "Google GCP", "Oracle OCI"]
    },
    {
      levelName: "Infrastructure Layer",
      desc: "Bare-metal container nodes and virtual private networks.",
      icon: <HardDrive size={16} />,
      nodes: ["Kubernetes", "Container Runtimes", "Network Services"]
    }
  ];

  return (
    <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            LOGICAL SCHEMATICS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Technology Architecture <span className="text-rose-500">Framework</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Our multi-tier logical model ensuring decouple execution, high security, and low operational latency across digital spaces.
          </p>
        </Reveal>

        {/* Stack block layout */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6 relative">
          {levels.map((lvl) => (
            <div
              key={lvl.levelName}
              className="bg-zinc-950/45 border border-zinc-900 hover:border-rose-500/20 p-6 rounded-3xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Level Left Title */}
              <div className="md:col-span-4 flex items-center gap-4 border-b md:border-b-0 md:border-r border-zinc-900 pb-4 md:pb-0 md:pr-6">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 flex-shrink-0">
                  {lvl.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{lvl.levelName}</h4>
                  <p className="text-[9px] text-zinc-550 font-semibold leading-relaxed mt-0.5">{lvl.desc}</p>
                </div>
              </div>

              {/* Level Right Nodes */}
              <div className="md:col-span-8 flex flex-wrap gap-2.5">
                {lvl.nodes.map((node) => (
                  <span
                    key={node}
                    className="px-3.5 py-2 rounded-xl bg-zinc-900/40 border border-zinc-900 text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider"
                  >
                    {node}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
