"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Layers, Workflow, GitMerge, Cpu, ArrowRight } from "lucide-react";

interface JointCard {
  title: string;
  combination: string;
  desc: string;
  highlights: string[];
  icon: React.ReactNode;
  diagram: React.ReactNode;
}

export function JointSolutions() {
  const cards: JointCard[] = [
    {
      title: "Enterprise Copilot Platform",
      combination: "Azure + OpenAI",
      desc: "Deploy proprietary Generative AI assistants integrated securely with corporate data lakes without data leaks.",
      highlights: ["Isolated Vector Search", "Private LLM Endpoints", "Semantic Authorization Layers"],
      icon: <Cpu size={20} className="text-rose-500" />,
      diagram: (
        <svg className="w-full h-20 opacity-30 mt-4" viewBox="0 0 100 40" fill="none">
          <circle cx="20" cy="20" r="5" fill="#f43f5e" />
          <circle cx="80" cy="20" r="5" fill="#3b82f6" />
          <path d="M25 20 H75" stroke="#27272a" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M50 10 L80 20 L50 30" stroke="#f43f5e" strokeWidth="0.5" />
          <circle cx="50" cy="20" r="3" fill="#27272a" stroke="#f43f5e" strokeWidth="1" />
        </svg>
      )
    },
    {
      title: "Cloud Native Transformation",
      combination: "AWS + Kubernetes",
      desc: "Transform monolith business apps into globally scaled microservice fleets auto-deployed via SRE GitOps engines.",
      highlights: ["Multi-Region Active EKS", "GitOps ArgoCD Pipelines", "DynamoDB global tables"],
      icon: <Workflow size={20} className="text-rose-500" />,
      diagram: (
        <svg className="w-full h-20 opacity-30 mt-4" viewBox="0 0 100 40" fill="none">
          <rect x="15" y="10" width="10" height="20" rx="2" stroke="#27272a" strokeWidth="1" />
          <rect x="45" y="10" width="10" height="20" rx="2" stroke="#f43f5e" strokeWidth="1" />
          <rect x="75" y="10" width="10" height="20" rx="2" stroke="#27272a" strokeWidth="1" />
          <path d="M25 20 H45" stroke="#f43f5e" strokeWidth="1" />
          <path d="M55 20 H75" stroke="#f43f5e" strokeWidth="1" />
        </svg>
      )
    },
    {
      title: "Modern Data Intelligence Platform",
      combination: "GCP + BigQuery",
      desc: "Consolidate telemetry streams, customer events, and ERP logs into a sub-second analytical data pipeline.",
      highlights: ["Real-time Kafka Streams", "BigQuery ML Modeling", "Looker dashboards orchestration"],
      icon: <Layers size={20} className="text-rose-500" />,
      diagram: (
        <svg className="w-full h-20 opacity-30 mt-4" viewBox="0 0 100 40" fill="none">
          <path d="M10 30 L50 10 L90 30 Z" stroke="#27272a" strokeWidth="1" />
          <line x1="50" y1="10" x2="50" y2="30" stroke="#f43f5e" strokeWidth="1" />
          <circle cx="50" cy="30" r="4" fill="#f43f5e" />
        </svg>
      )
    },
    {
      title: "Enterprise Process Modernization",
      combination: "Oracle + SAP",
      desc: "Unify back-office supply chain systems and high-throughput transactional database tables via automated event buses.",
      highlights: ["Autonomous DB Tuning", "Fusion Cloud connectors", "Kafka transactional pipelines"],
      icon: <GitMerge size={20} className="text-rose-500" />,
      diagram: (
        <svg className="w-full h-20 opacity-30 mt-4" viewBox="0 0 100 40" fill="none">
          <circle cx="25" cy="15" r="6" stroke="#27272a" strokeWidth="1" />
          <circle cx="25" cy="25" r="6" stroke="#27272a" strokeWidth="1" />
          <circle cx="75" cy="20" r="8" stroke="#f43f5e" strokeWidth="1" />
          <path d="M31 20 Q50 10 67 20" stroke="#f43f5e" strokeWidth="1" />
          <path d="M31 20 Q50 30 67 20" stroke="#f43f5e" strokeWidth="1" />
        </svg>
      )
    }
  ];

  return (
    <section id="solutions" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            INTEGRATED VALUE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Joint Solution <span className="text-rose-500">Accelerators</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Pre-engineered multi-technology architectural blueprints deployed to accelerate enterprise implementation schedules.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div
              key={card.title}
              className="group flex flex-col justify-between p-8 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-3xl transition-all duration-300 min-h-[320px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-zinc-900/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300">
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">{card.title}</h4>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                        {card.combination}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed mb-6">
                  {card.desc}
                </p>

                {/* Bullets */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-zinc-900 text-zinc-450 border border-zinc-850 text-[9px] px-2.5 py-1 rounded-md font-mono"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-900/60 pt-4 flex flex-col items-center">
                {card.diagram}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
