"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

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
      img: "/assets/Home-page/we-imagine/gen/we-transform-legacy.png",
      bullets: ["AWS Architecting", "Azure Solutions", "GCP Fundamentals"]
    },
    {
      title: "AI on Security",
      desc: "Learn AI Security, Cyber Security and Data Security.",
      img: "/assets/Home-page/we-imagine/gen/we-manage-operations.png",
      bullets: ["Threat Intelligence", "Zero Trust Architecture", "Data Encryption"]
    },
    {
      title: "AI on Digital Transformation",
      desc: "Learn Digital Transformation, and Cloud Engineering.",
      img: "/assets/Home-page/we-imagine/gen/we-design-intelligent.png",
      bullets: ["Process Automation", "Agile Transformation", "Cloud Migration"]
    },
    {
      title: "AI on Automation",
      desc: "Learn AI, Machine Learning, Deep Learning and NLP.",
      img: "/assets/Home-page/we-imagine/gen/we-build-software.png",
      bullets: ["Machine Learning", "Deep Learning Models", "NLP Pipelines"]
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
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight leading-tight mb-5 text-white">
              From application to certification
            </h2>
            <p className="text-zinc-400 text-sm md:text-lg leading-relaxed font-medium max-w-xl mx-auto">
              Four simple steps to kickstart your career. Get started in days, not months. Discover our <Link href="/services" className="text-rose-500 hover:underline font-bold">digital services</Link> catalog.
            </p>
          </Reveal>
        </div>

        {/* Premium Infographic Steps Grid */}
        <div className="relative max-w-5xl mx-auto mb-32 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-20 md:gap-y-24">
            {steps.map((item, idx) => {
              const styles = [
                {
                  borderColor: "border-rose-500",
                  textColor: "text-rose-500",
                  numPos: "-top-8 -right-4 md:-top-10 md:-right-6",
                  borderRadius: "rounded-[2.5rem] rounded-tr-2xl",
                  textAlign: "text-left",
                  alignItems: "items-start"
                },
                {
                  borderColor: "border-rose-500",
                  textColor: "text-rose-500",
                  numPos: "-bottom-8 -left-4 md:-bottom-10 md:-left-6",
                  borderRadius: "rounded-[2.5rem] rounded-bl-2xl",
                  textAlign: "text-left md:text-right",
                  alignItems: "items-start md:items-end"
                },
                {
                  borderColor: "border-rose-500",
                  textColor: "text-rose-500",
                  numPos: "-top-8 -right-4 md:-top-10 md:-right-6",
                  borderRadius: "rounded-[2.5rem] rounded-tr-2xl",
                  textAlign: "text-left",
                  alignItems: "items-start"
                },
                {
                  borderColor: "border-rose-500",
                  textColor: "text-rose-500",
                  numPos: "-bottom-8 -left-4 md:-bottom-10 md:-left-6",
                  borderRadius: "rounded-[2.5rem] rounded-bl-2xl",
                  textAlign: "text-left md:text-right",
                  alignItems: "items-start md:items-end"
                },
              ];

              const style = styles[idx];

              return (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className={`relative p-8 md:p-10 border-[2px] ${style.borderColor} ${style.borderRadius} bg-black group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]`}>

                    {/* The Giant Cut-out Number */}
                    <div className={`absolute ${style.numPos} bg-black px-4 z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                      <span
                        className={`text-[3.5rem] md:text-[4.5rem] font-black leading-none ${style.textColor}`}
                        style={{
                          WebkitTextStroke: `2px currentColor`,
                          WebkitTextFillColor: "transparent",
                          textShadow: `0 0 20px currentColor`
                        }}
                      >
                        {idx + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`flex flex-col gap-4 relative z-0 ${style.alignItems} ${style.textAlign}`}>

                      {/* Decorative Inner Graphic */}
                      <div className={`w-10 h-10 rounded-full border-2 ${style.borderColor} flex items-center justify-center mb-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                        <div className={`w-1.5 h-1.5 rounded-full bg-current ${style.textColor} animate-pulse`} />
                      </div>

                      <h3 className={`text-lg md:text-xl font-bold uppercase tracking-wide ${style.textColor}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed max-w-[90%]">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </Reveal>
              );
            })}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {domains.map((domain, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="relative rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] p-6 md:p-8 flex flex-col justify-between group h-full shadow-lg overflow-hidden transition-all duration-500 hover:border-zinc-700 min-h-[380px]">

                {/* Expanding Image Layer with Glassmorphism */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                  <img src={domain.img} alt={domain.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-80" />

                  {/* Frosted Glass Blur Overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

                  {/* Vignette Gradient for depth and text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5 border border-white/5 rounded-[24px]" />
                </div>

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col h-full text-left">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                      {domain.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium group-hover:text-zinc-300 transition-colors duration-500">
                      {domain.desc}
                    </p>
                  </div>
                  <div className="border-t border-zinc-800/60 group-hover:border-white/20 pt-5 mt-auto transition-colors duration-500 flex flex-col">
                    <ul className="space-y-3 mb-8">
                      {domain.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-3 text-xs font-bold text-zinc-300 group-hover:text-white transition-colors duration-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)] shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-500 group-hover:text-rose-400 transition-colors flex items-center gap-1 cursor-pointer mt-auto w-fit">
                      View Track &rsaquo;
                    </span>
                  </div>
                </div>
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
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
              Devopstrio is a UK-registered company trusted by Microsoft, Airbnb, BP, GoDaddy, and Heathrow. Your certificate carries real global weight. Check out our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link> and <Link href="/about/partnerships-certifications" className="text-rose-500 hover:underline font-bold">certifications</Link>.
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
                <span className="text-sm text-zinc-200 font-medium leading-snug">
                  {item.text}
                </span>
              </Reveal>
            ))}
          </div>

          {/* Center visual circular image */}
          <Reveal className="flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-zinc-950">
              <img
                src="/assets/careers/RECOGNITION.png"
                alt="Devopstrio Certified Candidate"
                className="w-full h-full object-cover object-center brightness-90"
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
                <span className="text-sm text-zinc-200 font-medium leading-snug">
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
