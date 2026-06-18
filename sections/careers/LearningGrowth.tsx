"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function LearningGrowth() {
  const steps = [
    {
      step: "01",
      title: "Register online",
      desc: "Fill the application form with your background and area of interest",
    },
    {
      step: "02",
      title: "Screening",
      desc: "Our team reviews and shortlists based on aptitude, interest, and fit",
    },
    {
      step: "03",
      title: "Onboarding & Mentorship",
      desc: "Work on structured assignments with weekly mentor guidance and reviews",
    },
    {
      step: "04",
      title: "Certify & Grow",
      desc: "Complete, receive your LOR + certificate, unlock career opportunities",
    },
  ];

  const domains = [
    {
      title: "Cloud Engineering",
      desc: "Master AWS, Azure, and Google Cloud Infrastructure.",
    },
    {
      title: "AI on Security",
      desc: "Learn AI Security, Cyber Security and Data Security.",
    },
    {
      title: "AI on Digital Transformation",
      desc: "Learn Digital Transformation, and Cloud Engineering.",
    },
    {
      title: "AI on Automation",
      desc: "Learn AI, Machine Learning, Deep Learning and NLP.",
    },
  ];

  const leftEarnings = [
    { text: "Letter of Recommendation (LOR)" },
    { text: "Skill & performance evaluation report" },
    { text: "Pre-placement offer" },
    { text: "Access to Devopstrio global alumni network" },
  ];

  const rightEarnings = [
    { text: "LinkedIn-shareable digital credential" },
    { text: "Portfolio of real, provable work" },
    { text: "Global job network access" },
    { text: "Expert Mentorship" },
  ];

  return (
    <section className="py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[20%] left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[10%] right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* ── BLOCK 1: How It Works ───────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              HOW IT WORKS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              From application to certification
            </h2>
            <p className="text-white text-sm leading-relaxed font-semibold max-w-xl mx-auto">
              Five simple steps. Get started in days, not months.
            </p>
          </Reveal>
        </div>

        {/* Steps Grid */}
        <div className="relative mb-32">
          {/* Horizontal line for desktop connecting the numbers */}
          <div className="hidden md:block absolute top-8 left-10 right-10 h-[1px] border-t border-dashed border-zinc-800 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="flex flex-col items-center text-center px-4">
                  {/* Step bubble */}
                  <div className="w-16 h-16 rounded-full bg-zinc-950 border border-white/[0.08] flex items-center justify-center text-white mb-6 font-mono font-bold text-lg shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-white leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── BLOCK 2: Choose Your Domain ─────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              YOUR PATH
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white">
              Choose your domain
            </h2>
          </Reveal>
        </div>

        {/* Domain Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-32">
          {domains.map((domain, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="group flex flex-col justify-between h-full bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-6 hover:border-rose-500/35 hover:-translate-y-1.5 transition-all duration-300 min-h-[160px] text-left">
                <div>
                  <h3 className="text-[13px] font-bold text-rose-500 mb-2 leading-snug">
                    {domain.title}
                  </h3>
                  <p className="text-[11px] text-white leading-relaxed font-semibold mb-6">
                    {domain.desc}
                  </p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white group-hover:text-rose-400 transition-colors flex items-center gap-1 cursor-pointer">
                  View Track &rsaquo;
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── BLOCK 3: What You Earn ──────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              RECOGNITION
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-rose-500 mb-5">
              What you earn when you complete
            </h2>
            <p className="text-white text-sm leading-relaxed font-semibold max-w-2xl mx-auto">
              Devopstrio is a UK-registered company trusted by Microsoft, Airbnb, BP, GoDaddy, and Heathrow. Your certificate carries real global weight.
            </p>
          </Reveal>
        </div>

        {/* Earning Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-12 lg:gap-20">
          
          {/* Left Earning List */}
          <div className="flex flex-col gap-6 lg:text-right lg:items-end order-2 lg:order-1">
            {leftEarnings.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="flex lg:flex-row-reverse items-center gap-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0 shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
                <span className="text-xs font-bold text-white leading-snug">
                  {item.text}
                </span>
              </Reveal>
            ))}
          </div>

          {/* Center visual circular image */}
          <Reveal className="flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-zinc-950">
              <img
                src="/assets/About-page/careers_girl.png"
                alt="Devopstrio Certified Candidate"
                className="w-full h-full object-cover object-top brightness-85"
              />
              {/* Overlay glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000_100%)] pointer-events-none" />
            </div>
          </Reveal>

          {/* Right Earning List */}
          <div className="flex flex-col gap-6 text-left lg:items-start order-3">
            {rightEarnings.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="flex items-center gap-3.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0 shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
                <span className="text-xs font-bold text-white leading-snug">
                  {item.text}
                </span>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
