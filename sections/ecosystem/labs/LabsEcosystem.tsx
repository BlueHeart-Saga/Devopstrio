"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Brain, Cloud, Terminal, Shield, Database, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

interface LabCard {
  name: string;
  projectsCount: string;
  icon: React.ReactNode;
  focus: string;
  desc: string;
  href: string;
}

export function LabsEcosystem() {
  const labs: LabCard[] = [
    {
      name: "AI Innovation Lab",
      projectsCount: "20 Active Projects",
      icon: <Brain size={20} className="text-rose-500" />,
      focus: "LLM Systems & Agents",
      desc: "Fine-tuning localized models, multi-agent orchestrations, and semantic vector routing databases.",
      href: "#showcase"
    },
    {
      name: "Cloud Innovation Lab",
      projectsCount: "15 Active Projects",
      icon: <Cloud size={20} className="text-rose-500" />,
      focus: "Green Cloud & Serverless",
      desc: "Optimizing serverless workloads execution speeds, green cloud carbon auditing, and multicloud frameworks.",
      href: "#showcase"
    },
    {
      name: "DevOps Innovation Lab",
      projectsCount: "18 Active Projects",
      icon: <Terminal size={20} className="text-rose-500" />,
      focus: "Platform SRE & GitOps",
      desc: "Pre-building developer portal dashboards, Kubernetes Karpenter scaling, and SRE tracing pipelines.",
      href: "#showcase"
    },
    {
      name: "Cybersecurity Lab",
      projectsCount: "12 Active Projects",
      icon: <Shield size={20} className="text-rose-500" />,
      focus: "Zero-Trust Systems",
      desc: "Developing dynamic HashiCorp Vault secrets rotators and scanning packages for prompt injections.",
      href: "#showcase"
    },
    {
      name: "Data & Analytics Lab",
      projectsCount: "14 Active Projects",
      icon: <Database size={20} className="text-rose-500" />,
      focus: "Data Mesh & Lakehouses",
      desc: "Constructing high-throughput event buses, streaming telemetry parsers, and data mesh schemas.",
      href: "#showcase"
    },
    {
      name: "Future Technologies Lab",
      projectsCount: "8 Active Projects",
      icon: <Cpu size={20} className="text-rose-500" />,
      focus: "Quantum & Edge AI",
      desc: "Researching post-quantum security algorithms and running cognitive models at localized Edge targets.",
      href: "#showcase"
    }
  ];

  return (
    <section id="ecosystem" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D CONSTELLATION
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Innovation Labs <span className="text-rose-500">Ecosystem</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Six highly specialized research centers testing next-generation architectural paradigms to future-proof global enterprises.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labs.map((lab) => (
            <div
              key={lab.name}
              className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 min-h-[260px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-zinc-900/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300">
                      {lab.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">{lab.name}</h4>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-semibold block">
                        {lab.projectsCount}
                      </span>
                    </div>
                  </div>
                </div>

                <span className="block text-[10px] font-mono font-bold text-rose-500 uppercase tracking-wider mb-2">
                  {lab.focus}
                </span>
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                  {lab.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                <Link
                  href={lab.href}
                  className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-rose-500 group-hover:text-rose-400 transition-colors"
                >
                  Explore Lab
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
