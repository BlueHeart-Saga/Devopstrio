"use client";

import React from "react";
import { Hero } from "@/components/services/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Users, Blocks, Cloud, Shield, Zap, Network, Bot, Repeat } from "lucide-react";
import Link from "next/link";

export function SoftwareHeroOverview() {
  const principles = [
    { title: "Customer First", icon: Users, desc: "Building software that solves real user problems." },
    { title: "Clean Architecture", icon: Blocks, desc: "Modular, maintainable, and decoupled codebases." },
    { title: "Cloud Native", icon: Cloud, desc: "Designed for elasticity, resilience, and scale." },
    { title: "Security by Design", icon: Shield, desc: "Security embedded at every layer of the stack." },
    { title: "Performance Driven", icon: Zap, desc: "Optimized for speed and minimal resource usage." },
    { title: "API First", icon: Network, desc: "Treating APIs as first-class digital products." },
    { title: "Automation Everywhere", icon: Bot, desc: "Eliminating toil through CI/CD and script automation." },
    { title: "Continuous Improvement", icon: Repeat, desc: "Iterative enhancements and tech debt reduction." }
  ];

  const lifecycle = [
    "Business Discovery",
    "Solution Design",
    "Architecture",
    "Development",
    "Testing",
    "Security Review",
    "Deployment",
    "Continuous Improvement"
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero
        badge="ENGINEERING EXCELLENCE"
        lightfall={true}
        lightfallColors={["#f43f5e", "#a855f7", "#3b82f6"]}
        title={
          <>
            Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Engineering
            </span>
          </>
        }
        subtitle="Building secure, scalable, and cloud-native software through modern engineering practices, agile delivery, and continuous innovation."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ENGINEERING EXCELLENCE", href: "/ecosystem/engineering-excellence" },
          { label: "SOFTWARE ENGINEERING" }
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#overview"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore Engineering
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-transparent border border-white/20 text-white font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Talk to an Architect
            <div className="w-7 h-7 rounded-full bg-rose-500 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </Hero>

      {/* 2. SOFTWARE ENGINEERING OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-4xl mx-auto px-12 xl:px-8 text-center">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Engineering Software That Solves Business Problems
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
              At Devopstrio, software engineering is more than writing code. We combine business understanding, modern architecture, cloud technologies, automation, and engineering best practices to deliver digital products that scale, perform, and evolve with changing business needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. ENGINEERING PRINCIPLES */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PHILOSOPHY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Our Engineering Philosophy</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-2xl hover:border-rose-500/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 border border-rose-500/20">
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

      {/* 4. SOFTWARE DEVELOPMENT LIFECYCLE */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 xl:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">PROCESS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">Software Development Lifecycle</h2>
          </Reveal>
          
          {/* Horizontal Timeline */}
          <div className="relative mt-20 mb-10 px-4">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-900 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-600 via-rose-500 to-transparent -translate-y-1/2 w-3/4 opacity-50 blur-sm"></div>
            
            <div className="flex justify-between items-center relative z-10 overflow-x-auto pb-8 hide-scrollbar">
              {lifecycle.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[140px]">
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.5)] mb-4"></div>
                  <span className="text-[10px] font-bold text-rose-500 tracking-wider mb-2">PHASE 0{idx + 1}</span>
                  <span className="text-xs md:text-sm font-semibold text-zinc-300 text-center">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
