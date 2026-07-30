"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function ServicesHero() {
  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-center justify-center bg-[#030303] text-white pt-28 pb-16 lg:pb-20 overflow-hidden border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* Left Column: Text content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center relative z-20">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/40 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                  OUR CAPABILITIES
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                End-to-End <span className="text-rose-500">Technology Services</span> for Modern Enterprise
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8 font-medium">
                We deliver high-impact cloud engineering, SRE automation, data platforms, and AI innovation designed to accelerate delivery speed, increase resilience, and scale without limits.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-4 items-center justify-start">
                <Link
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                  href="#services-start"
                >
                  Explore Capabilities
                </Link>
                <Link
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                  href="/contact#contact-form"
                >
                  Book a Consultation
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Services Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
            <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
              <Image
                src="/assets/herocard/servicespage.png"
                alt="Services Capabilities"
                priority
                width={480}
                height={480}
                className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain select-none"
              />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
