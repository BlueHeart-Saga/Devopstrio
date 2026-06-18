"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Cpu, Cloud, ShieldCheck, Database, Check } from "lucide-react";

interface DomainCard {
  title: string;
  icon: React.ReactNode;
  topics: string[];
}

export function ResearchDomains() {
  const domains: DomainCard[] = [
    {
      title: "Artificial Intelligence",
      icon: <Cpu size={20} className="text-rose-500" />,
      topics: [
        "LLM Engineering & PEFT Tuning",
        "Autonomous Multi-Agent Systems",
        "Advanced Semantic RAG Architectures",
        "Cognitive Workflow Automation",
        "Enterprise AI Safety & Governance"
      ]
    },
    {
      title: "Cloud Native Systems",
      icon: <Cloud size={20} className="text-rose-500" />,
      topics: [
        "Kubernetes Carpenter Optimization",
        "Internal Developer Portals (IDPs)",
        "Serverless GPU Scaling Models",
        "Infrastructure FinOps Dashboards",
        "Wasm Edge Runtime Sandboxing"
      ]
    },
    {
      title: "Cybersecurity & trust",
      icon: <ShieldCheck size={20} className="text-rose-500" />,
      topics: [
        "Zero Trust Microsegmentation",
        "Generative AI Prompt Firewalls",
        "Autonomous SRE Threat Hunting",
        "Declarative Compliance Auditing",
        "Post-Quantum TLS Encryption"
      ]
    },
    {
      title: "Modern Data Platform",
      icon: <Database size={20} className="text-rose-500" />,
      topics: [
        "Enterprise Data Mesh Architectures",
        "Unified Lakehouse Storage Engines",
        "Real-Time Stream Processing (Kafka)",
        "Continuous MLOps Pipelines",
        "Distributed Database Sharding"
      ]
    }
  ];

  return (
    <section id="research-domains" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            R&D MATRICES
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Core Research <span className="text-rose-500">Domains</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Broad architectural categories defining our SRE investigations, compliance frameworks, and intelligence products.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domains.map((dom) => (
            <div
              key={dom.title}
              className="bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/20 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-rose-600/[0.01] blur-[60px] rounded-full pointer-events-none" />
              
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-850 flex items-center justify-center mb-6 group-hover:bg-rose-950/20 transition-all duration-300">
                {dom.icon}
              </div>
              
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6 border-b border-zinc-900 pb-3">
                {dom.title}
              </h3>

              <ul className="space-y-3">
                {dom.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5 text-[11px] text-zinc-400 font-semibold leading-normal">
                    <Check size={12} className="text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
