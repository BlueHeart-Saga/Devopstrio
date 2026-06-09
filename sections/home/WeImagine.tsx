"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function WeImagine() {
  return (
    <section className="relative w-full pt-4 md:pt-8 bg-[#030303] text-white overflow-hidden">
      
      {/* Centered Content Wrapper for Header, Banner, and Intro */}
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10 mb-16">

        {/* Main Section Header */}
        <div className="mb-12">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-4 block">
              OUR INNOVATIONS
            </span>
          </Reveal>
          <Reveal>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              How We Engineer <span className="text-rose-500">Innovation</span>
            </h2>
          </Reveal>
        </div>

        {/* ── 1. Top Innovation Lab Banner ── */}
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden mb-16 h-[260px] md:h-[380px] w-full border border-zinc-800/40">
            {/* Banner image */}
            <img
              src="/assets/Home-page/innovation/image.png"
              alt="Devopstrio Innovation Lab"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark glassmorphic card overlay */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-black/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-xl max-w-sm md:max-w-md shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                Devopstrio Innovation Lab
              </h3>
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">
                The lab for enterprise innovation and next-generation cloud architecture.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── 2. Microsoft-Style Capabilities Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          
          {/* Card 1: We Imagine */}
          <Reveal delay={0.05}>
            <div className="relative rounded-xl border border-zinc-800/60 bg-zinc-950/20 hover:bg-zinc-950/40 hover:border-zinc-700/80 p-6 md:p-8 transition-all duration-300 flex flex-col justify-between group h-full shadow-lg">
              <div>
               
                <h3 className="text-base md:text-lg font-bold text-white mb-3 tracking-tight group-hover:text-rose-400 transition-colors duration-300">
                  We Design Intelligent Digital Solutions
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-semibold">
                  We architect AI-powered systems, automation frameworks, and data platforms that unlock new revenue streams and drive measurable operational efficiency from day one.
                </p>
              </div>
              <div className="border-t border-zinc-900 pt-4 mt-auto">
                <ul className="space-y-2">
                  {["Multi-Cloud Architecture", "AI-First Design", "Secure Data Platforms"].map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-[11px] font-bold text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Card 2: We Develop */}
          <Reveal delay={0.1}>
            <div className="relative rounded-xl border border-zinc-800/60 bg-zinc-950/20 hover:bg-zinc-950/40 hover:border-zinc-700/80 p-6 md:p-8 transition-all duration-300 flex flex-col justify-between group h-full shadow-lg">
              <div>
               
                <h3 className="text-base md:text-lg font-bold text-white mb-3 tracking-tight group-hover:text-rose-400 transition-colors duration-300">
                  We Build Software That Performs at Scale
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-semibold">
                  We engineer high-performance, enterprise-grade software — accelerating release velocity, hardening security posture, and guaranteeing the scalability your business demands.
                </p>
              </div>
              <div className="border-t border-zinc-900 pt-4 mt-auto">
                <ul className="space-y-2">
                  {["Enterprise Scalability", "Secure Compliant Architecture", "Full Observability"].map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-[11px] font-bold text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Card 3: We Modernise */}
          <Reveal delay={0.15}>
            <div className="relative rounded-xl border border-zinc-800/60 bg-zinc-950/20 hover:bg-zinc-950/40 hover:border-zinc-700/80 p-6 md:p-8 transition-all duration-300 flex flex-col justify-between group h-full shadow-lg">
              <div>
                
                <h3 className="text-base md:text-lg font-bold text-white mb-3 tracking-tight group-hover:text-rose-400 transition-colors duration-300">
                  We Transform Legacy Into Cloud-Native Power
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-semibold">
                  We convert brittle legacy systems into agile, cloud-native environments using AI-driven workflows, DevOps automation, and modern architecture — without disrupting your operations.
                </p>
              </div>
              <div className="border-t border-zinc-900 pt-4 mt-auto">
                <ul className="space-y-2">
                  {["AI-Driven Automation", "Cloud-Native Migration", "Legacy Re-Architecture"].map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-[11px] font-bold text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Card 4: We Manage */}
          <Reveal delay={0.2}>
            <div className="relative rounded-xl border border-zinc-800/60 bg-zinc-950/20 hover:bg-zinc-950/40 hover:border-zinc-700/80 p-6 md:p-8 transition-all duration-300 flex flex-col justify-between group h-full shadow-lg">
              <div>
                
                <h3 className="text-base md:text-lg font-bold text-white mb-3 tracking-tight group-hover:text-rose-400 transition-colors duration-300">
                  We Keep Your Operations Running Flawlessly
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-semibold">
                  We take full ownership of your platform operations — reducing costs, eliminating downtime, and enabling sustainable growth through proactive monitoring and intelligent optimisation.
                </p>
              </div>
              <div className="border-t border-zinc-900 pt-4 mt-auto">
                <ul className="space-y-2">
                  {["24/7 Proactive Monitoring", "Predictive Maintenance", "Cloud Cost Optimisation"].map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-[11px] font-bold text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

        </div>

      </div>

      {/* ── 3. High-Level Innovation Idea Banner (Immersive Artwork Style, Full-Width BG) ── */}
      {/* 
      <div className="relative w-full min-h-[600px] md:min-h-[750px] flex items-start justify-center pt-20 md:pt-28 pb-48 md:pb-64 overflow-hidden border-t border-b border-zinc-900/40 my-16 md:my-24 group">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/Home-page/innovation-bg.jpg"
            alt="Where Innovation Meets Execution"
            className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-102"
          />
        </div>

        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030303] via-[#030303]/70 to-transparent z-1 pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-transparent z-1 pointer-events-none" />

        <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10 text-center flex flex-col items-center justify-start drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-4 block">
              INNOVATION LAB
            </span>
          </Reveal>
          <Reveal>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white mb-6">
              Where Innovation Meets <span className="text-rose-500 block sm:inline">Execution</span>
            </h3>
          </Reveal>
          <Reveal>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-semibold max-w-2xl mb-8">
              For leaders who want more than strategy — engineering that builds with you. Harness the power of enterprise AI and cloud automation to transform your vision into scalable digital products.
            </p>
          </Reveal>

          <Reveal>
            <a
              href="/services"
              className="inline-flex items-center gap-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg px-6 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md group/btn"
            >
              Meet Our Innovation Team
              <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
          </Reveal>

         
        </div>
      </div>
      */}

    </section>
  );
}
