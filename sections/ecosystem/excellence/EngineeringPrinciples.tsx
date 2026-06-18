"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Layers, ShieldCheck, Cpu, Cloud, Sparkles, User } from "lucide-react";

interface PrincipleItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export function EngineeringPrinciples() {
  const principles: PrincipleItem[] = [
    { title: "Build Once, Scale Everywhere", desc: "Using containerization templates and modular service frameworks to ensure quick adaptations on AWS, Azure, or private hardware.", icon: <Layers size={18} /> },
    { title: "Security By Design", desc: "Validating inputs, encrypting database records, and scanning container images before code gets merged into mainline branches.", icon: <ShieldCheck size={18} /> },
    { title: "Automation First", desc: "Replacing manual dashboard configurations with GitOps declarative files and script templates to prevent human setup errors.", icon: <Cpu size={18} /> },
    { title: "Cloud Native Thinking", desc: "Constructing microservices to run on auto-scalable serverless nodes or dynamic Kubernetes namespaces.", icon: <Cloud size={18} /> },
    { title: "Continuous Improvement", desc: "Conducting post-incident write-ups and technology audits to continuously optimize load speeds and uptime parameters.", icon: <Sparkles size={18} /> },
    { title: "Customer-Centric Engineering", desc: "Measuring application success against real-world user latency, availability, and onboarding satisfaction levels.", icon: <User size={18} /> }
  ];

  return (
    <section id="principles" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CORE MANDATES
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Engineering <span className="text-rose-500">Principles</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Six architectural rules guiding the development, deployment, and security of every digital product we engineer.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {principles.map((pr) => (
            <div
              key={pr.title}
              className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/20 transition-all duration-300 min-h-[180px] flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 mb-4">
                  {pr.icon}
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{pr.title}</h4>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {pr.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
