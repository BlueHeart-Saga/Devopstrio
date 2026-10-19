"use client";

import React from "react";
import { Hero } from "@/components/services/Hero";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Target,
  Shield,
  Bot,
  BookOpen,
  Eye,
  HeartHandshake,
  Globe,
  Award
} from "lucide-react";
import Link from "next/link";

export function CultureHeroOverview() {
  const principles = [
    { title: "Ownership Mindset", icon: Target, desc: "Engineers own their code from local development through to production monitoring." },
    { title: "Psychological Safety", icon: Shield, desc: "Blameless post-mortems and open experimentation where failure is treated as a learning opportunity." },
    { title: "Ruthless Automation", icon: Bot, desc: "If a task is executed manually more than twice, we automate it with code." },
    { title: "Continuous Learning", icon: BookOpen, desc: "10% innovation time, funded cloud certifications, and weekly engineering guilds." },
    { title: "Extreme Transparency", icon: Eye, desc: "Open architecture RFCs, public design docs, and cross-functional decision logs." },
    { title: "Customer First", icon: HeartHandshake, desc: "Every technical refactor and design choice starts with the impact on the end-user experience." },
    { title: "Async-First Culture", icon: Globe, desc: "High-context written documentation, minimizing meetings and maximizing deep work flow." },
    { title: "Technical Mastery", icon: Award, desc: "High code bars, mandatory peer reviews, and dedication to modern language ecosystems." }
  ];

  const waysOfWorking = [
    "Discover",
    "RFC & Design",
    "Pair & Code",
    "Automated Gate",
    "Peer Review",
    "Continuous Deploy",
    "Observe & Own",
    "Learn & Iterate"
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero
        badge="ENGINEERING EXCELLENCE"
        lightfall={true}
        lightfallColors={["#a855f7", "#ec4899", "#f43f5e"]}
        title={
          <>
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600">
              Culture
            </span>
          </>
        }
        subtitle="Creating an environment where innovation, ownership, psychological safety, and continuous learning thrive. We empower autonomous engineering squads to build with technical mastery and measurable impact."
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "ENGINEERING EXCELLENCE", href: "/ecosystem/engineering-excellence" },
          { label: "ENGINEERING CULTURE" }
        ]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#overview"
            className="inline-flex items-center gap-3 pl-6 pr-4 py-3.5 bg-white text-black font-semibold text-sm md:text-base tracking-wide rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore Culture Playbook
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link
            href="/careers"
            className="inline-flex items-center gap-3 pl-6 pr-4 py-3.5 bg-transparent border border-white/20 text-white font-semibold text-sm md:text-base tracking-wide rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Join Our Engineering Team
            <div className="w-7 h-7 rounded-full bg-rose-600 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </div>
      </Hero>

      {/* 2. OVERVIEW */}
      <section id="overview" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <Reveal>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-rose-500 mb-4 block">OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Built by Engineers, for Engineers
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
              Our engineering culture is the foundation of everything we build. We eliminate corporate bureaucracy, foster ruthless automation, and grant engineers true end-to-end ownership—from local prototyping through to global multi-region production telemetry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. OUR CULTURE PHILOSOPHY */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-16 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-rose-500 mb-3 block">CORE TENETS</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
              Our Engineering Philosophy
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-zinc-950/60 border border-zinc-800/80 rounded-2xl hover:border-rose-500/40 hover:bg-zinc-900/60 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-rose-500" />
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm md:text-[15px] text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WAYS OF WORKING LIFECYCLE */}
      <section className="w-full py-20 bg-[#030303] border-b border-zinc-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Reveal className="mb-12 text-center">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-rose-500 mb-2 block">CADENCE</span>
            <h3 className="text-xl md:text-2xl font-bold text-white">How Devopstrio Squads Deliver Software</h3>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5">
            {waysOfWorking.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-950 border border-zinc-900 text-center group hover:border-rose-500/30 transition-all">
                <span className="text-xs md:text-sm font-mono font-bold text-rose-500 mb-1">0{idx + 1}</span>
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
