"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Cloud, Cog, Brain, Workflow, Lock, Settings } from "lucide-react";

export function WhatEcosystemEnables() {
  const cards = [
    {
      icon: <Cloud className="w-6 h-6 text-rose-500" />,
      title: "Cloud Migration & Modernization",
      desc: "Using cloud partner ecosystems, Devopstrio helps organizations migrate legacy systems and modernize workloads."
    },
    {
      icon: <Cog className="w-6 h-6 text-rose-500" />,
      title: "DevOps & Platform Engineering",
      desc: "Leveraging native tooling to build automated CI/CD pipelines, robust infrastructure-as-code, and continuous delivery systems."
    },
    {
      icon: <Brain className="w-6 h-6 text-rose-500" />,
      title: "AI & Data Transformation",
      desc: "Integrating intelligent data platforms and AI services to unlock analytics and predictive models."
    },
    {
      icon: <Workflow className="w-6 h-6 text-rose-500" />,
      title: "Enterprise Workflow Automation",
      desc: "Optimizing internal operations and service delivery through integrated enterprise applications and platform engineering."
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "Cybersecurity & Governance",
      desc: "Implementing zero-trust architectures and compliance-driven security controls native to top-tier cloud providers."
    },
    {
      icon: <Settings className="w-6 h-6 text-rose-500" />,
      title: "Managed Services & Continuous Ops",
      desc: "Providing 24/7 observability, proactive maintenance, and iterative optimizations."
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-black text-white relative overflow-hidden z-10 font-sans">
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              What Our Ecosystem <span className="text-rose-600">Enables</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/40 transition-colors h-full">
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 flex items-center justify-center mb-6 border border-zinc-800">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-sans">{card.title}</h3>
                <p className="text-zinc-300 text-base leading-relaxed font-normal font-sans">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
