"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface AcceleratorCard {
  title: string;
  desc: string;
}

export function AcceleratorsShowcase() {
  const assets: AcceleratorCard[] = [
    { title: "Cloud Foundation Accelerator", desc: "Deploy enterprise cloud environments in days using audited IaC blueprints." },
    { title: "DevOps Launchpad", desc: "Pre-configured CI/CD pipelines, GitOps setups, and containerization scripts." },
    { title: "AI Intelligence Framework", desc: "Rapid AI solution deployment including secure LLM proxies and RAG layers." },
    { title: "Secure Enterprise Framework", desc: "Security controls, identity templates, and automated compliance gates." },
    { title: "SaaS Starter Platform", desc: "Launch subscription-based platforms using pre-built billing and user management dashboards." },
    { title: "Data Intelligence Framework", desc: "Modern analytics, real-time logging networks, and warehouse integrations." }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            FEATURED BLUEPRINTS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Accelerators <span className="text-rose-500">Showcase</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Our most popular pre-configured engineering blocks used to speed up enterprise application delivery.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset) => (
            <div
              key={asset.title}
              className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/10 transition-all duration-300 min-h-[160px] flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{asset.title}</h4>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {asset.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
