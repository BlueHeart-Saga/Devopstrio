"use client";

import React from "react";
import { Hero } from "@/components/services/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, ShieldCheck, Zap, Bot, Repeat, Cpu, CheckCircle2, Layers, LineChart } from "lucide-react";
import Link from "next/link";

export function QualityHeroOverview() {
  const qualityPrinciples = [
    { title: "Shift-Left Testing", icon: Zap, desc: "Injecting continuous testing early in developer IDEs and PR builds." },
    { title: "Automation First", icon: Bot, desc: "Building resilient test automation frameworks that run on every commit." },
    { title: "Quality at Scale", icon: Layers, desc: "Simulating millions of user interactions across global environments." },
    { title: "Defect Prevention", icon: ShieldCheck, desc: "Focusing on preventing bugs before they reach staging or production." },
    { title: "Continuous Feedback", icon: Repeat, desc: "Instant telemetry and test reports delivered into developer channels." },
    { title: "AI-Powered QA", icon: Cpu, desc: "Self-healing test scripts and automated test case generation using LLMs." },
    { title: "Performance Integrity", icon: LineChart, desc: "Ensuring zero performance degradation across releases." },
    { title: "Zero Defect Mindset", icon: CheckCircle2, desc: "Setting high quality bars with 100% automated regression gates." }
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero
        badge="ENGINEERING EXCELLENCE"
        lightfall={true}
        lightfallColors={["#f59e0b", "#d97706", "#b45309"]}
        title={
          <>
            Quality <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500">
              Engineering
            </span>
          </>
        }
        subtitle="Transforming traditional software testing into an automated, continuous, and AI-powered quality discipline integrated throughout the SDLC."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ENGINEERING EXCELLENCE", href: "/ecosystem/engineering-excellence" },
          { label: "QUALITY ENGINEERING" }
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-4 py-3.5 bg-white text-black font-semibold text-sm md:text-base tracking-wide rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore QE Playbook
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-4 py-3.5 bg-transparent border border-white/20 text-white font-semibold text-sm md:text-base tracking-wide rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Talk to a QE Architect
            <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </Hero>

      {/* 2. OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <Reveal>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-4 block">OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Continuous Quality Built into Every Stage of Delivery
            </h2>
            
          </Reveal>
        </div>
      </section>

      {/* 3. OUR QUALITY PHILOSOPHY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-3 block">PHILOSOPHY</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Our Quality Philosophy
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPrinciples.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-amber-500/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed font-medium">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
