"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CapabilitiesSection() {
  return (
    <section className="py-12 bg-[#030303] relative overflow-hidden pt-14">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.01),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-left">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-8 gap-3 text-center">
          <Reveal className="max-w-xl flex flex-col items-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-2 block">
              WHAT WE DO
            </span>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold tracking-tight leading-tight text-white">
              Solutions that Drive <span className="text-rose-500">Real Impact</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium mt-2 max-w-lg mx-auto">
              From strategy formulation to architectural execution, we provide end-to-end cloud and AI engineering co-development tailored to your specific organizational targets.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="shrink-0 mt-1">
            <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 hover:text-rose-400 transition-colors">
              <span>Explore All Services</span>
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>

        {/* 5-Row Bento Grid */}
        <div className="flex flex-col gap-6">
          
          {/* Row 1: AI & Data Innovation (Large) + Cloud Services (Small) */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Large Card: AI & Data Innovation */}
            <Reveal delay={0.05} className="w-full lg:w-2/3 h-full flex">
              <div className="bg-gradient-to-br from-rose-950/20 via-[#0C0C0E] to-zinc-950/90 border border-zinc-800/80 hover:border-rose-500/30 rounded-[1.75rem] p-3 flex flex-col md:flex-row gap-5 h-full min-h-[300px] w-full items-stretch transition-all duration-500 hover:shadow-[0_20px_50px_rgba(225,29,72,0.1)] group relative overflow-hidden">
                
                {/* Expanding Image Layer (Bottom-Right to cover full box) */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none rounded-[1.75rem] overflow-hidden">
                  <img src="/assets/Home-page/core-services/1.png" alt="AI & Data Innovation background" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5" />
                </div>

                {/* Left Image (fades out on hover) */}
                <div className="w-full md:w-[48%] relative rounded-[1.25rem] overflow-hidden min-h-[180px] md:min-h-full transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 z-10">
                  <img src="/assets/Home-page/core-services/1.png" alt="AI & Data Innovation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                {/* Right Text Content */}
                <div className="w-full md:w-[52%] p-4 md:p-6 md:pl-2 flex flex-col justify-center text-left relative z-10">
                  <span className="text-[#E11D48] text-[10px] font-bold uppercase tracking-widest mb-2 block font-mono font-bold">Innovate</span>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-rose-400 transition-colors duration-500">AI & Data Innovation</h3>
                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6 group-hover:text-zinc-200 transition-colors duration-500">
                    Leverage Generative AI, machine learning, and intelligent automation to modernise business processes and unlock measurable value at scale.
                  </p>
                  <Link href="/services/ai-data-innovation" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 hover:border-rose-500 text-white transition-all w-fit">
                    Learn More
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Small Card: Cloud Services */}
            <Reveal delay={0.1} className="w-full lg:w-1/3 h-full flex">
              <div className="bg-[#0A0A0C] border border-zinc-900 hover:border-rose-500/20 rounded-[1.75rem] p-6 md:p-8 flex flex-col justify-center items-center text-center h-full min-h-[300px] w-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] group relative overflow-hidden">
                
                {/* Expanding Image Layer (Bottom-Right to cover full box) */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none rounded-[1.75rem] overflow-hidden">
                  <img src="/assets/Home-page/core-services/2.png" alt="Cloud Services background" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="text-[#E11D48] text-[10px] font-bold uppercase tracking-widest mb-3 block font-mono font-bold">Migrate</span>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-rose-400 transition-colors duration-500">Cloud Services</h3>
                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6 max-w-[280px] group-hover:text-zinc-200 transition-colors duration-500">
                    Design and manage resilient cloud environments across AWS, Azure, and Google Cloud — built for performance, compliance, and cost efficiency.
                  </p>
                  <Link href="/services/cloud-services" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider border border-zinc-900 hover:border-rose-500 text-white transition-all group-hover:bg-zinc-900">
                    Explore
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Row 2: DevOps & Automation (Small) + Cybersecurity (Large) */}
          <div className="flex flex-col-reverse lg:flex-row gap-6 items-stretch">
            {/* Small Card: DevOps & Automation */}
            <Reveal delay={0.1} className="w-full lg:w-1/3 h-full flex">
              <div className="bg-[#0A0A0C] border border-zinc-900 hover:border-rose-500/20 rounded-[1.75rem] p-6 md:p-8 flex flex-col justify-center items-center text-center h-full min-h-[300px] w-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] group relative overflow-hidden">
                
                {/* Expanding Image Layer (Bottom-Right to cover full box) */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none rounded-[1.75rem] overflow-hidden">
                  <img src="/assets/Home-page/core-services/3.png" alt="DevOps & Automation background" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="text-[#E11D48] text-[10px] font-bold uppercase tracking-widest mb-3 block font-mono font-bold">Accelerate</span>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-rose-400 transition-colors duration-500">DevOps & Automation</h3>
                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6 max-w-[280px] group-hover:text-zinc-200 transition-colors duration-500">
                    CI/CD automation, Kubernetes orchestration, Terraform, and platform engineering practices that eliminate friction and accelerate delivery.
                  </p>
                  <Link href="/services/devops-automation" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider border border-zinc-900 hover:border-rose-500 text-white transition-all group-hover:bg-zinc-900">
                    Explore
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Large Card: Cybersecurity */}
            <Reveal delay={0.15} className="w-full lg:w-2/3 h-full flex">
              <div className="bg-gradient-to-br from-blue-950/20 via-[#0C0C0E] to-zinc-950/90 border border-zinc-800/80 hover:border-blue-500/30 rounded-[1.75rem] p-3 flex flex-col md:flex-row gap-5 h-full min-h-[300px] w-full items-stretch transition-all duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] group relative overflow-hidden">
                
                {/* Expanding Image Layer (Bottom-Right to cover full box) */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none rounded-[1.75rem] overflow-hidden">
                  <img src="/assets/Home-page/core-services/4.png" alt="Cybersecurity background" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5" />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-[52%] p-4 md:p-6 flex flex-col justify-center text-left order-2 md:order-1 relative z-10">
                  <span className="text-[#E11D48] text-[10px] font-bold uppercase tracking-widest mb-2 block font-mono font-bold">Protect</span>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-500">Cybersecurity</h3>
                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6 group-hover:text-zinc-200 transition-colors duration-500">
                    Embed security and compliance into every layer of your stack. Proactive threat management, SOC services, and zero-trust security frameworks.
                  </p>
                  <Link href="/services/cybersecurity" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 hover:border-blue-500 text-white transition-all w-fit">
                    Learn More
                  </Link>
                </div>

                {/* Right Image (fades out on hover) */}
                <div className="w-full md:w-[48%] relative rounded-[1.25rem] overflow-hidden min-h-[180px] md:min-h-full order-1 md:order-2 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 z-10">
                  <img src="/assets/Home-page/core-services/4.png" alt="Cybersecurity" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Row 3: Software Development (Large) + Digital Transformation (Small) */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Large Card: Software Development */}
            <Reveal delay={0.15} className="w-full lg:w-2/3 h-full flex">
              <div className="bg-gradient-to-br from-violet-950/20 via-[#0C0C0E] to-zinc-950/90 border border-zinc-800/80 hover:border-purple-500/30 rounded-[1.75rem] p-3 flex flex-col md:flex-row gap-5 h-full min-h-[300px] w-full items-stretch transition-all duration-500 hover:shadow-[0_20px_50px_rgba(168,85,247,0.1)] group relative overflow-hidden">
                
                {/* Expanding Image Layer (Bottom-Right to cover full box) */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none rounded-[1.75rem] overflow-hidden">
                  <img src="/assets/Home-page/core-services/5.png" alt="Software Development background" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5" />
                </div>

                {/* Left Image (fades out on hover) */}
                <div className="w-full md:w-[48%] relative rounded-[1.25rem] overflow-hidden min-h-[180px] md:min-h-full transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 z-10">
                  <img src="/assets/Home-page/core-services/5.png" alt="Software Development" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                {/* Right Text Content */}
                <div className="w-full md:w-[52%] p-4 md:p-6 md:pl-2 flex flex-col justify-center text-left relative z-10">
                  <span className="text-[#E11D48] text-[10px] font-bold uppercase tracking-widest mb-2 block font-mono font-bold">Build</span>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-purple-400 transition-colors duration-500">Software Development</h3>
                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6 group-hover:text-zinc-200 transition-colors duration-500">
                    Create enterprise-grade software, apps, and SaaS platforms. Engineered for reliability, API ecosystems, and business impact.
                  </p>
                  <Link href="/services/software-development" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 hover:border-purple-500 text-white transition-all w-fit">
                    Learn More
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Small Card: Digital Transformation */}
            <Reveal delay={0.2} className="w-full lg:w-1/3 h-full flex">
              <div className="bg-[#0A0A0C] border border-zinc-900 hover:border-rose-500/20 rounded-[1.75rem] p-6 md:p-8 flex flex-col justify-center items-center text-center h-full min-h-[300px] w-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] group relative overflow-hidden">
                
                {/* Expanding Image Layer (Bottom-Right to cover full box) */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none rounded-[1.75rem] overflow-hidden">
                  <img src="/assets/Home-page/core-services/6.png" alt="Digital Transformation background" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="text-[#E11D48] text-[10px] font-bold uppercase tracking-widest mb-3 block font-mono font-bold">Transform</span>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-rose-400 transition-colors duration-500">Digital Transformation</h3>
                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6 max-w-[280px] group-hover:text-zinc-200 transition-colors duration-500">
                    Modernise business models and legacy systems. IT roadmaps, cloud readiness audits, process automation, and intelligent workflows.
                  </p>
                  <Link href="/services/digital-transformation" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider border border-zinc-900 hover:border-rose-500 text-white transition-all group-hover:bg-zinc-900">
                    Explore
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Row 4: Data Engineering (Small) + Managed Services (Large) */}
          <div className="flex flex-col-reverse lg:flex-row gap-6 items-stretch">
            {/* Small Card: Data Engineering */}
            <Reveal delay={0.2} className="w-full lg:w-1/3 h-full flex">
              <div className="bg-[#0A0A0C] border border-zinc-900 hover:border-rose-500/20 rounded-[1.75rem] p-6 md:p-8 flex flex-col justify-center items-center text-center h-full min-h-[300px] w-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] group relative overflow-hidden">
                
                {/* Expanding Image Layer (Bottom-Right to cover full box) */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none rounded-[1.75rem] overflow-hidden">
                  <img src="/assets/Home-page/core-services/7.png" alt="Data Engineering background" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="text-[#E11D48] text-[10px] font-bold uppercase tracking-widest mb-3 block font-mono font-bold">Analyze</span>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-rose-400 transition-colors duration-500">Data Engineering</h3>
                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6 max-w-[280px] group-hover:text-zinc-200 transition-colors duration-500">
                    Unlock actionable insights with robust data platforms. Design columnar databases, unified lakehouses, and real-time streaming pipelines.
                  </p>
                  <Link href="/services/data-engineering" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider border border-zinc-900 hover:border-rose-500 text-white transition-all group-hover:bg-zinc-900">
                    Explore
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Large Card: Managed Services */}
            <Reveal delay={0.25} className="w-full lg:w-2/3 h-full flex">
              <div className="bg-gradient-to-br from-teal-950/20 via-[#0C0C0E] to-zinc-950/90 border border-zinc-800/80 hover:border-teal-500/30 rounded-[1.75rem] p-3 flex flex-col md:flex-row gap-5 h-full min-h-[300px] w-full items-stretch transition-all duration-500 hover:shadow-[0_20px_50px_rgba(20,184,166,0.1)] group relative overflow-hidden">
                
                {/* Expanding Image Layer (Bottom-Right to cover full box) */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none rounded-[1.75rem] overflow-hidden">
                  <img src="/assets/Home-page/core-services/8.png" alt="Managed Services background" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5" />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-[52%] p-4 md:p-6 flex flex-col justify-center text-left order-2 md:order-1 relative z-10">
                  <span className="text-[#E11D48] text-[10px] font-bold uppercase tracking-widest mb-2 block font-mono font-bold">Manage</span>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-teal-400 transition-colors duration-500">Managed Services</h3>
                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6 group-hover:text-zinc-200 transition-colors duration-500">
                    Ensure uninterrupted operations with 24/7 proactive monitoring. Multi-account cloud administration, SLA bug resolutions, and incident containment.
                  </p>
                  <Link href="/services/managed-services" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 hover:border-teal-500 text-white transition-all w-fit">
                    Learn More
                  </Link>
                </div>

                {/* Right Image (fades out on hover) */}
                <div className="w-full md:w-[48%] relative rounded-[1.25rem] overflow-hidden min-h-[180px] md:min-h-full order-1 md:order-2 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 z-10">
                  <img src="/assets/Home-page/core-services/8.png" alt="Managed Services" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Row 5: QA & Testing (Large) + IT Consulting (Small) */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Large Card: QA & Testing */}
            <Reveal delay={0.25} className="w-full lg:w-2/3 h-full flex">
              <div className="bg-gradient-to-br from-rose-950/20 via-[#0C0C0E] to-zinc-950/90 border border-zinc-800/80 hover:border-rose-500/30 rounded-[1.75rem] p-3 flex flex-col md:flex-row gap-5 h-full min-h-[300px] w-full items-stretch transition-all duration-500 hover:shadow-[0_20px_50px_rgba(225,29,72,0.1)] group relative overflow-hidden">
                
                {/* Expanding Image Layer (Bottom-Right to cover full box) */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none rounded-[1.75rem] overflow-hidden">
                  <img src="/assets/Home-page/core-services/9.png" alt="QA & Testing background" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5" />
                </div>

                {/* Left Image (fades out on hover) */}
                <div className="w-full md:w-[48%] relative rounded-[1.25rem] overflow-hidden min-h-[180px] md:min-h-full transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 z-10">
                  <img src="/assets/Home-page/core-services/9.png" alt="QA & Testing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                {/* Right Text Content */}
                <div className="w-full md:w-[52%] p-4 md:p-6 md:pl-2 flex flex-col justify-center text-left relative z-10">
                  <span className="text-[#E11D48] text-[10px] font-bold uppercase tracking-widest mb-2 block font-mono font-bold">Ensure</span>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-rose-400 transition-colors duration-500">QA & Testing</h3>
                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6 group-hover:text-zinc-200 transition-colors duration-500">
                    Deliver flawless digital experiences with quality engineering. Automated end-to-end client scripts, load testing, and shift-left methodologies.
                  </p>
                  <Link href="/services/qa-testing" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 hover:border-rose-500 text-white transition-all w-fit">
                    Learn More
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Small Card: IT Consulting */}
            <Reveal delay={0.3} className="w-full lg:w-1/3 h-full flex">
              <div className="bg-[#0A0A0C] border border-zinc-900 hover:border-rose-500/20 rounded-[1.75rem] p-6 md:p-8 flex flex-col justify-center items-center text-center h-full min-h-[300px] w-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] group relative overflow-hidden">
                
                {/* Expanding Image Layer (Bottom-Right to cover full box) */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none rounded-[1.75rem] overflow-hidden">
                  <img src="/assets/Home-page/core-services/10.png" alt="IT Consulting background" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[6px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-white/5" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="text-[#E11D48] text-[10px] font-bold uppercase tracking-widest mb-3 block font-mono font-bold">Consult</span>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-rose-400 transition-colors duration-500">IT Consulting</h3>
                  <p className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6 max-w-[280px] group-hover:text-zinc-200 transition-colors duration-500">
                    Align technology investments with strategic business objectives. Cost-benefit analyses, compliance alignment, and digital roadmaps.
                  </p>
                  <Link href="/services/it-consulting" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider border border-zinc-900 hover:border-rose-500 text-white transition-all group-hover:bg-zinc-900">
                    Explore
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
