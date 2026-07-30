"use client";

import React from "react";
import { Hero } from "@/components/services/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Compass, ShieldCheck, Maximize2, Repeat, Network, Lock, Sliders, Layers } from "lucide-react";
import Link from "next/link";

export function SolutionHeroOverview() {
  const architecturePrinciples = [
    { title: "Business & Tech Alignment", icon: Compass, desc: "Designing architectures directly tied to strategic business goals and KPIs." },
    { title: "Cloud-Native & Elasticity", icon: Maximize2, desc: "Building scalable, resilient infrastructure leveraging multi-cloud capabilities." },
    { title: "Zero Trust Security", icon: Lock, desc: "Embedding identity, encryption, and governance into every architectural layer." },
    { title: "API-First & Interoperability", icon: Network, desc: "Standardizing REST, GraphQL, and gRPC interfaces for enterprise integration." },
    { title: "Decoupled Microservices", icon: Layers, desc: "Creating modular domain boundaries for independent team deployment velocity." },
    { title: "Event-Driven Resilience", icon: Repeat, desc: "Utilizing asynchronous messaging for fault-tolerant system behavior." },
    { title: "Technology Standardisation", icon: Sliders, desc: "Eliminating tech debt through standardized decision frameworks and ADRs." },
    { title: "Continuous Governance", icon: ShieldCheck, desc: "Reviewing system health, security compliance, and cost optimization continuously." }
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero
        badge="ENGINEERING EXCELLENCE"
        lightfall={true}
        lightfallColors={["#818cf8", "#6366f1", "#4f46e5"]}
        title={
          <>
            Solution <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Architecture
            </span>
          </>
        }
        subtitle="Designing scalable, secure, and cloud-native enterprise architectures that bridge business vision with robust technology foundations."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ENGINEERING EXCELLENCE", href: "/ecosystem/engineering-excellence" },
          { label: "SOLUTION ARCHITECTURE" }
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore Architecture Strategy
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Talk to a Chief Architect
            <div className="w-7 h-7 rounded-full bg-rose-500 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </Hero>

      {/* 2. OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-4xl mx-auto px-12 xl:px-8 text-center">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Designing Future-Ready Enterprise Foundations
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
              Architecture is the blueprint of enterprise transformation. At Devopstrio, our Solution Architecture practice establishes robust, adaptable, and cost-efficient system designs before a single line of code is committed. We align legacy infrastructure with modern cloud-native standards to guarantee scalability, security, and speed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. ARCHITECTURE PRINCIPLES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PRINCIPLES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Core Architecture Principles</h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturePrinciples.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
