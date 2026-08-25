"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface EcosystemDomain {
  name: string;
  desc: string;
  image: string;
}

export function TechEcosystemOverview() {
  const domains: EcosystemDomain[] = [
    {
      name: "Artificial Intelligence",
      desc: "Building intelligent systems using neural networks, agents, and predictive engines.",
      image: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design.webp"
    },
    {
      name: "Cloud Native",
      desc: "Constructing modern infrastructure at scale with serverless and Kubernetes.",
      image: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-1.webp"
    },
    {
      name: "Software Engineering",
      desc: "Developing highly responsive frontend and enterprise-grade backend systems.",
      image: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-2.webp"
    },
    {
      name: "Data Engineering",
      desc: "Setting up real-time telemetry streams, data lakehouses, and governance grids.",
      image: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-3.webp"
    },
    {
      name: "DevOps Toolchain",
      desc: "Continuous delivery configurations using GitOps pipelines and declarative IaC.",
      image: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-4.webp"
    },
    {
      name: "Cybersecurity",
      desc: "Zero-trust identity routing, security validation pipelines, and scanning services.",
      image: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-5.webp"
    },
    {
      name: "Platform Engineering",
      desc: "Boosting developer onboarding speeds through unified self-service portal dashboards.",
      image: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-6.webp"
    },
    {
      name: "Quality Engineering",
      desc: "Continuous quality verification using Playwright, Cypress, and performance load scripts.",
      image: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-7.webp"
    },
    {
      name: "Emerging Technologies",
      desc: "Researching post-quantum cryptography algorithms, digital twins, and edge networks.",
      image: "/webp/assets/ecosystem/grid/technology-stack-page_categories-Grid/Generated-Design-8.webp"
    }
  ];

  return (
    <section id="overview" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">

        {/* Header Section */}
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CORE MATRICES
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Technology Ecosystem <span className="text-rose-500">Overview</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold">
            Our technology stack is structured into nine major pillars, supporting full lifecycle agility from discovery to operations.
          </p> */}
        </Reveal>

        {/* 3x3 Grid of Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {domains.map((dom, idx) => (
            <Reveal key={dom.name} delay={idx * 0.04}>
              <div className="group relative rounded-[20px] border border-white/5 bg-zinc-950/30 p-6 flex flex-col justify-between h-full min-h-[190px] overflow-hidden transition-all duration-300 hover:border-rose-500/20 hover:bg-zinc-950/60 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">

                {/* Subtle color highlight glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Background image reveal with mix-blend-screen */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none overflow-hidden mix-blend-screen">
                  <img src={dom.image} alt="" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" loading="lazy" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* <span className="text-[9px] font-mono text-rose-500 tracking-wider uppercase font-bold block mb-3">
                      PILLAR {(idx + 1).toString().padStart(2, "0")}
                    </span> */}
                    <h3 className="text-base md:text-lg font-semibold text-white mb-3 group-hover:text-rose-400 transition-colors">
                      {dom.name}
                    </h3>
                    {/* <p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed">
                      {dom.desc}
                    </p> */}
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                    <span className="text-[10px] md:text-xs font-mono text-zinc-500 font-bold uppercase tracking-widest">
                      VERIFIED PILLAR
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
