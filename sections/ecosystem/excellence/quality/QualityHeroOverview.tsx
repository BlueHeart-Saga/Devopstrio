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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
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
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore QE Playbook
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Talk to a QE Architect
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
              Continuous Quality Built into Every Stage of Delivery
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
              Quality Engineering is not a final checkpoint—it is an ongoing engineering discipline. At Devopstrio, we embed automated test coverage, performance benchmarking, and AI self-healing test suites into CI/CD pipelines to guarantee bug-free, enterprise-grade releases.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. OUR QUALITY PHILOSOPHY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PHILOSOPHY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Our Quality Philosophy
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPrinciples.map((p, idx) => {
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
