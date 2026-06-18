"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Brain, Cloud, Terminal, Database, Workflow, Shield, Layout, CheckSquare, Sparkles } from "lucide-react";

interface EcosystemDomain {
  name: string;
  desc: string;
  icon: React.ReactNode;
}

export function TechEcosystemOverview() {
  const domains: EcosystemDomain[] = [
    { name: "Artificial Intelligence", desc: "Building intelligent systems using neural networks, agents, and predictive engines.", icon: <Brain size={18} /> },
    { name: "Cloud Native", desc: "Constructing modern infrastructure at scale with serverless and Kubernetes.", icon: <Cloud size={18} /> },
    { name: "Software Engineering", desc: "Developing highly responsive frontend and enterprise-grade backend systems.", icon: <Terminal size={18} /> },
    { name: "Data Engineering", desc: "Setting up real-time telemetry streams, data lakehouses, and governance grids.", icon: <Database size={18} /> },
    { name: "DevOps Toolchain", desc: "Continuous delivery configurations using GitOps pipelines and declarative IaC.", icon: <Workflow size={18} /> },
    { name: "Cybersecurity", desc: "Zero-trust identity routing, security validation pipelines, and scanning services.", icon: <Shield size={18} /> },
    { name: "Platform Engineering", desc: "Boosting developer onboarding speeds through unified self-service portal dashboards.", icon: <Layout size={18} /> },
    { name: "Quality Engineering", desc: "Continuous quality verification using Playwright, Cypress, and performance load scripts.", icon: <CheckSquare size={18} /> },
    { name: "Emerging Technologies", desc: "Researching post-quantum cryptography algorithms, digital twins, and edge networks.", icon: <Sparkles size={18} /> }
  ];

  return (
    <section id="overview" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CORE MATRICES
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Technology Ecosystem <span className="text-rose-500">Overview</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Our technology stack is structured into nine major pillars, supporting full lifecycle agility from discovery to operations.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {domains.map((dom) => (
            <div
              key={dom.name}
              className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/10 rounded-2xl transition-all duration-300 min-h-[170px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300">
                    {dom.icon}
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{dom.name}</h4>
                </div>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {dom.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900/60 flex items-center justify-between">
                <span className="text-[8px] font-mono text-zinc-555 font-bold uppercase tracking-wider">
                  ACTIVE PILLAR
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
