"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ServicesHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-[#030303] text-white pt-20 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">
            {/* Eyebrow */}
            {/* <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-950/40 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
                  OUR CAPABILITIES
                </span>
              </div>
            </Reveal> */}

            {/* Heading */}
            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                Scaling Infrastructure.
                <br />
                <span className="text-[#E11D48] whitespace-nowrap">Accelerating Delivery.</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-8">
                From cognitive AI pipelines and global cloud orchestration to zero-trust compliance frameworks, Devopstrio engineers robust solutions for high-velocity enterprise environments.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 items-center justify-start">
                <Link
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                  href="#services-start"
                >
                  Explore Capabilities

                </Link>
                <Link
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                  href="/contact"
                >
                  Book a Consultation

                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Services Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
            <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
              <img
                src="/assets/herocard/servicespage.png"
                alt="Services Capabilities"
                className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain select-none"
              />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
