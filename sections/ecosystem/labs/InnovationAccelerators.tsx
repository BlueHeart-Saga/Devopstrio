"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { FolderGit, Workflow, ShieldCheck, Database, Zap } from "lucide-react";

interface Accelerator {
  title: string;
  category: string;
  desc: string;
  ipCode: string;
  icon: React.ReactNode;
}

export function InnovationAccelerators() {
  const assets: Accelerator[] = [
    {
      title: "Cloud Landing Zone Accelerator",
      category: "Infrastructure IaC",
      desc: "Modular Terraform configurations establishing enterprise account boundaries, standard IAM guidelines, and transit hubs.",
      ipCode: "IP-ACC-001",
      icon: <Zap size={20} className="text-rose-500" />
    },
    {
      title: "DevOps Pipeline Accelerator",
      category: "CI/CD & Delivery",
      desc: "Standardized GitHub Actions and ArgoCD hook runners executing automated dependency sweeps and image rollouts.",
      ipCode: "IP-ACC-023",
      icon: <Workflow size={20} className="text-rose-500" />
    },
    {
      title: "AI Agent Framework",
      category: "Cognitive Software",
      desc: "Python class abstractions organizing multi-agent task structures, loop routines, and semantic memory indexers.",
      ipCode: "IP-ACC-047",
      icon: <FolderGit size={20} className="text-rose-500" />
    },
    {
      title: "Security Compliance Framework",
      category: "Audit & SecOps",
      desc: "Kubernetes daemon checks verifying compliance posture against CIS benchmarks and automated secret rotations.",
      ipCode: "IP-ACC-062",
      icon: <ShieldCheck size={20} className="text-rose-500" />
    },
    {
      title: "Data Lakehouse Framework",
      category: "Analytics Pipelines",
      desc: "Scaffolding blueprints configuring real-time telemetry ingestion pipelines and unified Databricks Lakehouse targets.",
      ipCode: "IP-ACC-089",
      icon: <Database size={20} className="text-rose-500" />
    }
  ];

  return (
    <section id="accelerators" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            PROPRIETARY INTELLECTUAL PROPERTY
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Innovation <span className="text-rose-500">Accelerators</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Pre-packaged frameworks and codebase templates engineered by our labs to speed up delivery schedules.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assets.map((asset) => (
            <div
              key={asset.title}
              className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/20 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between min-h-[260px]"
            >
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-rose-600/[0.01] blur-[60px] rounded-full pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-900/60">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300">
                    {asset.icon}
                  </div>
                  <span className="text-[8px] bg-zinc-900 text-zinc-550 border border-zinc-850 px-2 py-1 rounded font-mono font-bold">
                    {asset.ipCode}
                  </span>
                </div>

                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{asset.title}</h3>
                <span className="block text-[9px] font-mono text-rose-500 uppercase tracking-widest mb-3">
                  {asset.category}
                </span>
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                  {asset.desc}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                <span className="text-[9px] font-mono text-zinc-555 font-bold uppercase tracking-wider">
                  DEPLOYABLE ASSET
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
