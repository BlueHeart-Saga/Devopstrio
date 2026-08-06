"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function CompanyIntro() {
  return (
    <section className="w-full py-10 md:py-16 bg-black text-white relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-950/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-rose-900/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* Headline & Paragraph                                                      */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <Reveal>
            <span className="inline-block px-3.5 py-1.5 text-rose-500 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
              Company Overview
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white mb-4">
              We build the intelligent digital foundations that scale global innovation.
            </h2>
          </Reveal>
          {/* <Reveal delay={0.2}>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium max-w-3xl mx-auto">
              Devopstrio is a London-headquartered global technology company specialising in <Link href="/services/cloud-services" className="text-rose-500 hover:underline">Cloud</Link>, <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">AI</Link>, <Link href="/services/devops-automation" className="text-rose-500 hover:underline">DevOps</Link>, and <Link href="/services/software-development" className="text-rose-500 hover:underline">Enterprise Software</Link>. We partner with forward-thinking enterprises to modernise infrastructure, unlock new value, and accelerate digital success — quietly, precisely, and at scale.
            </p>
          </Reveal> */}
        </div>

        {/* ========================================================================= */}
        {/* Premium Redesigned Mockup Card                                           */}
        {/* ========================================================================= */}
        <Reveal delay={0.3}>
          <div className="relative w-full rounded-[2rem] border border-zinc-800 bg-[#09090b] overflow-hidden min-h-[480px] flex items-center mb-12">

            {/* Background Collage Image shown fully without desaturation or heavy dark shadows */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/assets/About-page/team/image.png"
                alt="Devopstrio Engineering Team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Grid Layout containing Left Info and Right Card */}
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 lg:p-16">

              {/* Left Side: Editorial Heading with a subtle backdrop to ensure readability on full color background */}
              <div className="lg:col-span-6 flex flex-col items-start gap-4 bg-black/60 p-6 border border-zinc-800/50">
                <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500 border border-rose-500/30 rounded-none bg-black/40">
                  WHO WE ARE
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white max-w-[420px]">
                  Powering Digital Evolution Through Precision Engineering
                </h3>
              </div>

              {/* Right Side: High Contrast Floating Card */}
              <div className="lg:col-span-6 flex justify-end">
                <div className="w-full max-w-[460px] bg-black border-2 border-white/90 p-8 md:p-10 flex flex-col gap-6 text-left shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500 block mb-0">
                    OUR PHILOSOPHY
                  </span>

                  {/* Elegant Quote */}
                  <blockquote className="text-sm md:text-base italic font-semibold text-white border-l-2 border-rose-500 pl-4 leading-relaxed">
                    "We don't just build systems; we architect the digital engines that power tomorrow's enterprises."
                  </blockquote>

                  {/* Concise Summary Paragraph */}
                  <p className="text-xs md:text-sm leading-relaxed text-zinc-300 font-medium">
                    Devopstrio is an elite engineering partner. We combine advanced cloud design, automated <Link href="/ecosystem/global-delivery" className="text-rose-500 hover:underline">delivery pipelines</Link>, and secure scale to accelerate business transformation at global scale.
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
    </section>
  );
}
