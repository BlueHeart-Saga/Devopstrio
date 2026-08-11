"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2, Globe2, Users2, TrendingUp, Zap, ShieldCheck, Server, BrainCircuit, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "7+", label: "Years of Excellence" },
  { value: "4+", label: "Global Regions" },
  { value: "525+", label: "Technical Experts" },
  { value: "2,500+", label: "Projects Delivered" },
];

const whatWeDo = [
  { prefix: "We conduct ", highlight: "AI-centric digital transformation", suffix: " from strategy to scalable execution" },
  { prefix: "We engineer secure, ", highlight: "cloud-native, data-driven solutions", suffix: " for complex enterprise landscapes" },
  { prefix: "We modernize ", highlight: "core systems", suffix: " to optimize performance, enable innovation and unlock long-term value" },
  { prefix: "We apply our deep expertise from highly regulated environments to deliver security by design across ", highlight: "industries", suffix: "" },
  { prefix: "We partner with ", highlight: "leading technology providers", suffix: " to create resilient, future-ready platforms" },
];

const howWeWork = [
  { icon: <Globe2 className="w-5 h-5 text-rose-500" />, title: "Global", desc: "Technical experts across 4+ regions, speaking your industry language with deep local context." },
  { icon: <ShieldCheck className="w-5 h-5 text-rose-500" />, title: "Trusted", desc: "Rooted in trust, responsibility, and full transparency at every phase of every project." },
  { icon: <BrainCircuit className="w-5 h-5 text-rose-500" />, title: "AI-Centric", desc: "AI is at the core of every solution we design, architect, and deliver at scale." },
];

const milestones = [
  "Deployed a real-time fraud detection pipeline processing 100K financial events per second with sub-10ms evaluation accuracy.",
  "Built a HIPAA-compliant AI telehealth platform with WebRTC video integration adopted across enterprise healthcare networks.",
  "Migrated 250+ microservices to cloud-native Kubernetes with zero downtime using GitOps and ArgoCD automation pipelines.",
  "Engineered a multi-region Active-Active database architecture maintaining 100% availability during a major cloud provider outage.",
  "Delivered an AI recommendation engine upgrade that reduced response latency from 400ms to 25ms for a global e-commerce platform.",
];

const services = [
  { icon: <BrainCircuit className="w-4 h-4" />, label: "AI Modernization" },
  { icon: <Server className="w-4 h-4" />, label: "Cloud Services" },
  { icon: <TrendingUp className="w-4 h-4" />, label: "AI Consulting" },
  { icon: <Zap className="w-4 h-4" />, label: "DevOps & SRE" },
  { icon: <ShieldCheck className="w-4 h-4" />, label: "Security by Design" },
  { icon: <Users2 className="w-4 h-4" />, label: "Software Engineering" },
];

export function CompanyOverviewSection() {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(225,29,72,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(225,29,72,0.04),transparent_70%)] pointer-events-none" />

      {/* ── 1: Hero Story Intro ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-20 relative z-10">

        {/* Large standalone main heading — matching GFT reference */}
        <Reveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-10">
            The Story of{" "}
            <span className="relative inline-block">
              <span className="text-rose-500">Devopstrio</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-2.5 text-rose-500/45 pointer-events-none"
                viewBox="0 0 300 10"
                fill="none"
              >
                <path
                  d="M 2 6 Q 75 2, 150 6 T 298 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </Reveal>

        {/* Body paragraphs — indented like GFT reference, max-width constrained */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <Reveal delay={0.08} className="lg:col-start-5 lg:col-span-8">
            <div className="space-y-5">
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                Devopstrio was founded with a single purpose: to empower businesses by turning complex technology into simple, scalable, and high-impact digital solutions. Today, we partner with enterprise leaders worldwide to accelerate innovation across AI, Cloud, DevOps, and modern software engineering.
              </p>
            </div>
          </Reveal>
        </div>

        {/* CompanyIntro Mockup Card — team photo with editorial heading + philosophy card */}
        <Reveal delay={0.3}>
          <div className="relative w-full rounded-[2rem] border border-zinc-800 bg-[#09090b] overflow-hidden min-h-[480px] flex items-center mb-8">

            {/* Background team photo */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/assets/About-page/team/image.png"
                alt="Devopstrio Engineering Team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay grid: Left editorial + Right floating card */}
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 lg:p-16">

              {/* Left: Editorial heading */}
              <div className="lg:col-span-6 flex flex-col items-start gap-4 bg-black/60 p-6 border border-zinc-800/50">
                {/* <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500 border border-rose-500/30 rounded-none bg-black/40">
                  WHO WE ARE
                </span> */}
                 <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500 block">
                    OUR PHILOSOPHY
                  </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white max-w-[420px]">
                  Powering Digital Evolution Through Precision Engineering
                </h3>
              </div>

              {/* Right: Floating philosophy card */}
              <div className="lg:col-span-6 flex justify-end">
                <div className="w-full max-w-[460px] bg-black border-2 border-white/90 p-8 md:p-10 flex flex-col gap-6 text-left shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                  {/* <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500 block">
                    OUR PHILOSOPHY
                  </span> */}
                  <blockquote className="text-sm md:text-base italic font-semibold text-white border-l-2 border-rose-500 pl-4 leading-relaxed">
                    &ldquo;We don&apos;t just build systems; we architect the digital engines that power tomorrow&apos;s enterprises.&rdquo;
                  </blockquote>
                  <p className="text-xs md:text-sm leading-relaxed text-zinc-300 font-medium">
                    Devopstrio is an elite engineering partner. We combine advanced cloud design, automated{" "}
                    <Link href="/ecosystem/global-delivery" className="text-rose-500 hover:underline">delivery pipelines</Link>,
                    and secure scale to accelerate business transformation at global scale.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/services"
                      className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                    >
                      Explore Our Services <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* CTA link below card */}
        <Reveal delay={0.4}>
          <div className="flex justify-center">
            <a
              href="/contact#contact-form"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-rose-500 font-bold text-sm tracking-wider uppercase transition-colors group"
            >
              Connect with our architects
              <span className="h-8 w-8 rounded-full border border-zinc-800 group-hover:border-rose-500/50 flex items-center justify-center text-zinc-400 group-hover:text-rose-500 transition-colors">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </Reveal>

      </div>

      {/* ── 2: Who We Are + What We Do ── */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 py-16 lg:py-24 space-y-16 lg:space-y-20">

          {/* Top: Who We Are */}
          <Reveal>
            <div className="max-w-3xl space-y-6">
              <h3 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
                Who We Are
              </h3>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
                We have been called the industry&apos;s &lsquo;best-kept secret&rsquo;. But to those in the know we have delivered complex, high-stakes, business critical digital services for over 7 years. What began as a focused engineering startup has grown into a global force, carrying out responsible AI-enabled digital transformation projects around the world.
              </p>
            </div>
          </Reveal>

          {/* Horizontal Divider */}
          <div className="border-t border-zinc-800/80 w-full" />

          {/* Bottom: What We Do (Indented to the right) */}
          <Reveal delay={0.08}>
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-start-3 lg:col-span-10 space-y-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  What We Do
                </h3>
                <ul className="space-y-5">
                  {whatWeDo.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      {/* Filled square bullet matching reference */}
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-none bg-rose-500 shrink-0" />
                      <span className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                        {item.prefix}
                        {item.highlight && (
                          <span className="text-white font-medium underline underline-offset-4 decoration-rose-500/70 hover:text-rose-400 transition-colors">
                            {item.highlight}
                          </span>
                        )}
                        {item.suffix}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* ── 3: Global Stats Bar ── */}
      <div className="border-t border-b border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 relative z-10">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black  font-bold text-rose-500 tracking-tight leading-none mb-2">{s.value}</div>
                <div className="text-[19px] sm:text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] font-mono">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>



    </section>
  );
}

