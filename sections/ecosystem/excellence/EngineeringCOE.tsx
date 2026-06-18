"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Cloud, Brain, Workflow, ShieldAlert, Database } from "lucide-react";

interface CoeItem {
  name: string;
  focus: string;
  icon: React.ReactNode;
  desc: string;
}

export function EngineeringCOE() {
  const centers: CoeItem[] = [
    { name: "Cloud Excellence", focus: "Azure, AWS, OCI", icon: <Cloud size={18} />, desc: "Deploying multi-region systems, load balancers, and cost optimization structures." },
    { name: "AI Excellence", focus: "LLMs, Agents, Automation", icon: <Brain size={18} />, desc: "Connecting secure inference loops, agent routers, and vector pipelines." },
    { name: "DevOps Excellence", focus: "CI/CD, IaC, GitOps", icon: <Workflow size={18} />, desc: "Configuring Kubernetes clusters, Terraform scripts, and git workflow steps." },
    { name: "Security Excellence", focus: "DevSecOps, Compliance", icon: <ShieldAlert size={18} />, desc: "Setting up SAST scanning gates, compliance reviews, and least-privilege policies." },
    { name: "Data Excellence", focus: "Analytics, Warehousing", icon: <Database size={18} />, desc: "Designing lakehouse database grids, stream processing, and SQL views." }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            VERIFIED PILLARS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Centers of <span className="text-rose-500">Excellence</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Specialized engineering capability practices designed to accelerate execution and secure software integrations.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {centers.map((center) => (
            <div
              key={center.name}
              className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 hover:border-rose-500/10 transition-all duration-300 flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 mb-4">
                  {center.icon}
                </div>
                <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-1">{center.name}</h4>
                <span className="block text-[8px] font-mono text-rose-500 uppercase tracking-widest font-bold mb-3">
                  {center.focus}
                </span>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {center.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
