"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface CaseStudy {
  title: string;
  metric: string;
  desc: string;
}

export function ExcellenceSuccessStories() {
  const caseStudies: CaseStudy[] = [
    { title: "Cloud Modernization", metric: "70% faster deployments", desc: "Reconfigured a legacy monolithic API system into decoupled serverless container services, optimizing database latency." },
    { title: "SaaS Platform Scaling", metric: "100K+ active users supported", desc: "Deployed row-level data isolation schemes and unified Stripe billing models, supporting rapid tenant onboarding." },
    { title: "DevOps Transformation", metric: "10x faster release cycles", desc: "Configured self-service developer templates, automated release check gates, and GitOps loops to decrease ticket wait times." },
    { title: "Security Modernization", metric: "Compliance-ready infrastructure", desc: "Integrated automated SAST scanning and credentials rotation policies into CI steps to pass audits cleanly." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CASE STUDIES
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Success <span className="text-rose-500">Stories</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Real-world outcomes demonstrating the reliability and scaling benefits of our engineering practices.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="bg-zinc-950/40 border border-zinc-900/85 rounded-3xl p-6 hover:border-rose-500/10 transition-all duration-300 min-h-[220px] flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{study.title}</h4>
                <div className="text-lg font-black text-rose-500 tracking-tight mb-4">
                  {study.metric}
                </div>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {study.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900/60">
                <span className="text-[8px] font-mono text-zinc-555 font-bold uppercase tracking-wider">
                  VERIFIED OUTCOME
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
