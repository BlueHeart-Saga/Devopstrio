"use client";

import React from "react";
import { Hero } from "@/components/services/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, ShieldCheck, Repeat, Users, Zap, Bot, BarChart3, LineChart, Heart } from "lucide-react";
import Link from "next/link";

export function OpsHeroOverview() {
  const operatingPrinciples = [
    { title: "Standardized SDLC", icon: Repeat, desc: "Consistent engineering processes across all squad and domain teams." },
    { title: "Automated Governance", icon: ShieldCheck, desc: "Policy-as-code and compliance guardrails integrated in build pipelines." },
    { title: "Data-Driven Delivery", icon: BarChart3, desc: "DORA metrics and productivity analytics guiding process optimization." },
    { title: "Developer Experience", icon: Heart, desc: "Eliminating friction and cognitive load to maximize engineering flow." },
    { title: "Autonomous Squads", icon: Users, desc: "Self-sufficient engineering pods aligned with clear domain goals." },
    { title: "Predictive Capacity", icon: LineChart, desc: "Forecasting engineering throughput and resource utilization." },
    { title: "Continuous Delivery", icon: Zap, desc: "Automating release management for zero-downtime deployments." },
    { title: "Ruthless Automation", icon: Bot, desc: "Automating repetitive operational tasks across teams." }
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero
        badge="ENGINEERING EXCELLENCE"
        lightfall={true}
        lightfallColors={["#8b5cf6", "#6366f1", "#a855f7"]}
        title={
          <>
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Operations
            </span>
          </>
        }
        subtitle="Driving operational excellence, delivery velocity, developer productivity, and continuous improvement across enterprise engineering organizations."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ENGINEERING EXCELLENCE", href: "/ecosystem/engineering-excellence" },
          { label: "ENGINEERING OPERATIONS" }
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore Ops Playbook
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Talk to an Operations Expert
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
              Predictable, High-Quality Software Delivery at Scale
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
              Engineering Operations bridges the gap between strategic vision and execution. At Devopstrio, we build operating models, delivery governance, and DORA-driven analytics that enable engineering teams to ship faster, reduce friction, and maintain high standards.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. OPERATING MODEL */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">OPERATING MODEL</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Our Operating Philosophy
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {operatingPrinciples.map((p, idx) => {
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
