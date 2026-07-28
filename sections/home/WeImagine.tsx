import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function WeImagine() {
  return (
    <section className="relative w-full pt-4 md:pt-8 bg-[#030303] text-white overflow-hidden">

      {/* Centered Content Wrapper for Header, Banner, and Intro */}
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 mb-16">

        {/* Main Section Header */}
        <div className="mb-12">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-rose-500 mb-4 block">
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
            <Image
              src="/assets/Home-page/innovation/image2.png"
              alt="Devopstrio Innovation Lab"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            {/* Dark glassmorphic card overlay */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-black/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-xl max-w-sm md:max-w-md shadow-2xl z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                Devopstrio Innovation Lab
              </h3>
              <p className="text-zinc-200 text-sm md:text-base font-normal leading-relaxed">
                The lab for <Link href="/ecosystem/innovation-labs" className="text-rose-500 hover:underline font-medium">enterprise innovation</Link> and next-generation cloud architecture.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── 2. Microsoft-Style Capabilities Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {/* Card 1: We Imagine */}
          <Reveal delay={0.05}>
            <div className="relative rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] p-6 md:p-8 flex flex-col justify-between group h-full shadow-lg overflow-hidden transition-all duration-500 hover:border-zinc-700 min-h-[380px]">
              
              {/* Expanding Image Layer with Glassmorphism */}
              <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                <Image src="/assets/Home-page/we-imagine/gen/we-design-intelligent.png" alt="Design Intelligent Solutions" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-80" />
                
                {/* Frosted Glass Blur Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
                
                {/* Vignette Gradient for depth and text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5 border border-white/5 rounded-[24px]" />
              </div>

              {/* Content Layer */}
              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                    We Design Intelligent Digital Solutions
                  </h3>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-normal group-hover:text-zinc-200 transition-colors duration-500">
                    We architect <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline font-medium">AI-powered systems</Link>, automation frameworks, and data platforms that unlock new revenue streams and drive measurable operational efficiency from day one.
                  </p>
                </div>
                <div className="border-t border-zinc-800/60 group-hover:border-white/20 pt-5 mt-auto transition-colors duration-500">
                  <ul className="space-y-3">
                    {["Multi-Cloud Architecture", "AI-First Design", "Secure Data Platforms"].map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: We Develop */}
          <Reveal delay={0.1}>
            <div className="relative rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] p-6 md:p-8 flex flex-col justify-between group h-full shadow-lg overflow-hidden transition-all duration-500 hover:border-zinc-700 min-h-[380px]">
              
              {/* Expanding Image Layer with Glassmorphism */}
              <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                <Image src="/assets/Home-page/we-imagine/gen/we-build-software.png" alt="Build Scalable Software" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-80" />
                
                {/* Frosted Glass Blur Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
                
                {/* Vignette Gradient for depth and text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5 border border-white/5 rounded-[24px]" />
              </div>

              {/* Content Layer */}
              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                    We Build Software That Performs at Scale
                  </h3>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-normal group-hover:text-zinc-200 transition-colors duration-500">
                    We engineer high-performance, <Link href="/services/software-development" className="text-rose-500 hover:underline font-medium">enterprise-grade software</Link> — accelerating release velocity, hardening security posture, and guaranteeing the scalability your business demands.
                  </p>
                </div>
                <div className="border-t border-zinc-800/60 group-hover:border-white/20 pt-5 mt-auto transition-colors duration-500">
                  <ul className="space-y-3">
                    {["Enterprise Scalability", "Secure Architecture", "Full Observability"].map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3: We Modernise */}
          <Reveal delay={0.15}>
            <div className="relative rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] p-6 md:p-8 flex flex-col justify-between group h-full shadow-lg overflow-hidden transition-all duration-500 hover:border-zinc-700 min-h-[380px]">
              
              {/* Expanding Image Layer with Glassmorphism */}
              <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                <Image src="/assets/Home-page/we-imagine/gen/we-transform-legacy.png" alt="Transform Legacy to Cloud" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-80" />
                
                {/* Frosted Glass Blur Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
                
                {/* Vignette Gradient for depth and text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5 border border-white/5 rounded-[24px]" />
              </div>

              {/* Content Layer */}
              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                    We Transform Legacy Into Cloud-Native Power
                  </h3>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-normal group-hover:text-zinc-200 transition-colors duration-500">
                    We convert brittle legacy systems into agile, <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-medium">cloud-native environments</Link> using AI-driven workflows and modern architecture — without disrupting operations.
                  </p>
                </div>
                <div className="border-t border-zinc-800/60 group-hover:border-white/20 pt-5 mt-auto transition-colors duration-500">
                  <ul className="space-y-3">
                    {["AI-Driven Automation", "Cloud-Native Migration", "Legacy Re-Architecture"].map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 4: We Manage */}
          <Reveal delay={0.2}>
            <div className="relative rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] p-6 md:p-8 flex flex-col justify-between group h-full shadow-lg overflow-hidden transition-all duration-500 hover:border-zinc-700 min-h-[380px]">
              
              {/* Expanding Image Layer with Glassmorphism */}
              <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                <Image src="/assets/Home-page/we-imagine/gen/we-manage-operations.png" alt="Manage Operations" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-80" />
                
                {/* Frosted Glass Blur Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
                
                {/* Vignette Gradient for depth and text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5 border border-white/5 rounded-[24px]" />
              </div>

              {/* Content Layer */}
              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                    We Keep Your Operations Running Flawlessly
                  </h3>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-normal group-hover:text-zinc-200 transition-colors duration-500">
                    We take full ownership of your <Link href="/services/managed-services" className="text-rose-500 hover:underline font-medium">platform operations</Link> — reducing costs, eliminating downtime, and enabling sustainable growth through proactive monitoring.
                  </p>
                </div>
                <div className="border-t border-zinc-800/60 group-hover:border-white/20 pt-5 mt-auto transition-colors duration-500">
                  <ul className="space-y-3">
                    {["24/7 Proactive Monitoring", "Predictive Maintenance", "Cost Optimisation"].map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
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

        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-center flex flex-col items-center justify-start drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
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
              className="gap-2.5 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
            >
              Meet Our Innovation Team
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
          </Reveal>

         
        </div>
      </div>
      */}

    </section>
  );
}
