"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function WhoWeAreWhatWeDoSection() {
  const [activeTab, setActiveTab] = useState<"who" | "what">("who");

  return (
    <section id="who-we-are-what-we-do" className="w-full py-20 bg-black text-white relative overflow-hidden">
      {/* Background Graphic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-8 relative z-10 text-left">

        {/* Section Navigation Tabs */}
        <Reveal className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("who")}
              className={`px-8 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "who"
                  ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Who We Are
            </button>
            <button
              onClick={() => setActiveTab("what")}
              className={`px-8 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "what"
                  ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              What We Do
            </button>
          </div>
        </Reveal>

        {/* Main Dark Theme Card Container (Matching Devopstrio Dark Theme) */}
        <Reveal>
          <div className="w-full rounded-[32px] overflow-hidden border border-white/10 bg-[#0b0b0c] p-8 sm:p-12 lg:p-16 relative shadow-[0_24px_60px_rgba(0,0,0,0.8)]">
            
            {/* Subtle Radial Glow */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.04),transparent_70%)] pointer-events-none z-0" />

            {activeTab === "who" ? (
              /* ── WHO WE ARE (Dark Theme & Simple Storytelling) ── */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
                
                {/* Left Block: Stacked Title & Overlapping Photo */}
                <div className="lg:col-span-6 flex flex-col items-start justify-center">
                  
                  {/* Category Pill Tag */}
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-rose-500 bg-rose-500/10 border border-rose-500/20 mb-6">
                    Devopstrio Identity
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center w-full">
                    
                    {/* Stacked Semibold Title */}
                    <div className="sm:col-span-6">
                      <div className="flex flex-col text-left font-sans leading-[1.02]">
                        <span className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white inline-block mb-3 underline decoration-rose-500/40 underline-offset-[10px]">
                          Who
                        </span>
                        <span className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white inline-block mb-3 underline decoration-rose-500/40 underline-offset-[10px]">
                          we
                        </span>
                        <span className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-rose-500 inline-block underline decoration-rose-500/40 underline-offset-[10px]">
                          are.
                        </span>
                      </div>
                    </div>

                    {/* Floating Photo Frame with Rose Accent Backdrop Box */}
                    <div className="sm:col-span-6 relative flex justify-center items-center">
                      
                      {/* Floating Offset Rose Accent Box */}
                      <div className="absolute top-[-14px] right-[-14px] w-[85%] h-[85%] bg-rose-950/40 border border-rose-500/30 rounded-2xl z-0 pointer-events-none" />

                      {/* Main Image */}
                      <div className="relative z-10 w-full max-w-[270px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-950">
                        <img
                          src="/assets/About-page/consulting_team.png"
                          alt="Devopstrio Engineering Leaders"
                          className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.05]"
                        />
                      </div>

                    </div>

                  </div>

                </div>

                {/* Right Block: Simple Storytelling Narrative */}
                <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
                  
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug font-sans">
                    Architects, Engineers &amp; Digital Innovators
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    Founded on the principle of engineering excellence, Devopstrio is a premier team of cloud platform architects, site reliability engineers, and AI developers. We partner with forward-thinking global enterprises to design, modernize, and scale mission-critical digital systems with zero compromise on security, performance, and uptime.
                  </p>

                  {/* Highlights List */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-rose-500 shrink-0" />
                      <span className="text-sm sm:text-base text-zinc-200 font-medium">
                        100+ Enterprise Cloud Migrations Completed
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-rose-500 shrink-0" />
                      <span className="text-sm sm:text-base text-zinc-200 font-medium">
                        24/7 Site Reliability (SRE) Operational Guarantee
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-rose-500 shrink-0" />
                      <span className="text-sm sm:text-base text-zinc-200 font-medium">
                        SOC-2 &amp; HIPAA Regulatory Compliance Standards
                      </span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4">
                    <Link
                      href="/about/company-overview"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(244,63,94,0.25)]"
                    >
                      Learn Our History <ArrowUpRight size={15} />
                    </Link>
                  </div>

                </div>

              </div>
            ) : (
              /* ── WHAT WE DO (Dark Theme & Simple Storytelling) ── */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
                
                {/* Left Block: Stacked Title & Overlapping Photo */}
                <div className="lg:col-span-6 flex flex-col items-start justify-center">
                  
                  {/* Category Pill Tag */}
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-rose-500 bg-rose-500/10 border border-rose-500/20 mb-6">
                    Our Core Mission
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center w-full">
                    
                    {/* Stacked Semibold Title */}
                    <div className="sm:col-span-6">
                      <div className="flex flex-col text-left font-sans leading-[1.02]">
                        <span className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white inline-block mb-3 underline decoration-rose-500/40 underline-offset-[10px]">
                          What
                        </span>
                        <span className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white inline-block mb-3 underline decoration-rose-500/40 underline-offset-[10px]">
                          we
                        </span>
                        <span className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-rose-500 inline-block underline decoration-rose-500/40 underline-offset-[10px]">
                          do.
                        </span>
                      </div>
                    </div>

                    {/* Floating Photo Frame with Rose Accent Backdrop Box */}
                    <div className="sm:col-span-6 relative flex justify-center items-center">
                      
                      {/* Floating Offset Rose Accent Box */}
                      <div className="absolute top-[-14px] right-[-14px] w-[85%] h-[85%] bg-rose-950/40 border border-rose-500/30 rounded-2xl z-0 pointer-events-none" />

                      {/* Main Image */}
                      <div className="relative z-10 w-full max-w-[270px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-950">
                        <img
                          src="/assets/About-page/cloud_servers.png"
                          alt="Devopstrio Infrastructure Systems"
                          className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.05]"
                        />
                      </div>

                    </div>

                  </div>

                </div>

                {/* Right Block: Simple Storytelling Narrative */}
                <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
                  
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug font-sans">
                    Building High-Throughput Uptime Architectures
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    We accelerate enterprise digital transformation by turning complex infrastructure into automated, fault-tolerant cloud ecosystems. From multi-cloud GitOps continuous deployment and real-time AI vector search indexing to zero-trust security perimeters, we empower organizations to operate faster, safer, and at scale.
                  </p>

                  {/* Highlights List */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-rose-500 shrink-0" />
                      <span className="text-sm sm:text-base text-zinc-200 font-medium">
                        Automated Multi-Cloud Platform Engineering (AWS, Azure, GCP)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-rose-500 shrink-0" />
                      <span className="text-sm sm:text-base text-zinc-200 font-medium">
                        Enterprise Generative AI &amp; Vector Data Solutions
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-rose-500 shrink-0" />
                      <span className="text-sm sm:text-base text-zinc-200 font-medium">
                        Continuous Zero-Trust Security &amp; Compliance Audits
                      </span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(244,63,94,0.25)]"
                    >
                      Explore Our Services <ArrowUpRight size={15} />
                    </Link>
                  </div>

                </div>

              </div>
            )}

          </div>
        </Reveal>

      </div>
    </section>
  );
}
