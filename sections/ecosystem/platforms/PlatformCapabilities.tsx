"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hammer, Cloud, ShieldCheck, Brain, Layout } from "lucide-react";

interface CapabilityItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export function PlatformCapabilities() {
  const capabilities: CapabilityItem[] = [
    {
      title: "Product Engineering",
      desc: "Comprehensive product design, robust system architectures, modern development, testing, and continuous scaling parameters.",
      icon: <Hammer size={20} className="text-rose-500" />
    },
    {
      title: "SaaS Engineering",
      desc: "Designing multi-tenant subscriptions, tenant provisioning loops, isolated data schemas, and transactional billing engines.",
      icon: <Layout size={20} className="text-rose-500" />
    },
    {
      title: "AI Engineering",
      desc: "Integrating large language models (LLMs), orchestrating autonomous AI agents, recommendation algorithms, and business automations.",
      icon: <Brain size={20} className="text-rose-500" />
    },
    {
      title: "Cloud Engineering",
      desc: "Scale infrastructure across Azure, AWS, and OCI, container orchestrations, and automated deployment pipelines.",
      icon: <Cloud size={20} className="text-rose-500" />
    },
    {
      title: "Security Engineering",
      desc: "Enforcing modern Identity Access Management (IAM), Zero Trust communication boundaries, and compliance audit postures.",
      icon: <ShieldCheck size={20} className="text-rose-500" />
    }
  ];

  return (
    <section id="capabilities" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            TECHNICAL CAPABILITY
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Platform <span className="text-rose-500">Capabilities</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Our engineering standards across product, SaaS, AI, cloud, and security verticals.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between min-h-[250px]"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 mb-6">
                  {cap.icon}
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 leading-normal">{cap.title}</h3>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {cap.desc}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                <span className="text-[8px] font-mono text-zinc-555 font-bold uppercase tracking-wider">
                  VERIFIED STACK
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
