"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function CareersHero() {
  return (
    <section id="overview" className="relative w-full min-h-[75vh] lg:min-h-[80vh] flex items-center bg-[#030303] text-white pt-20 pb-28 lg:pt-24 lg:pb-36 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.08),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">
            
            {/* Heading */}
            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                Empowering Talent.
                <br />
                <span className="text-[#E11D48] whitespace-nowrap">Co-Engineering Future.</span>
              </h1>
            </Reveal>

            {/* Description */}
            {/* <Reveal delay={0.2}>
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-8">
                Join a high-performance global network of system architects, DevOps experts, and AI engineers. We build and secure the modern, regulatory-compliant digital infrastructures powering tomorrow&apos;s enterprises. Learn more about our <Link href="/services/devops-automation" className="text-[#E11D48] hover:underline font-bold">DevOps automation</Link> and <Link href="/about/overview" className="text-[#E11D48] hover:underline font-bold">company overview</Link>.
              </p>
            </Reveal> */}

            {/* Quote Block */}
            <Reveal delay={0.3}>
              <div className="border-l-2 border-rose-500 bg-zinc-950/60 border border-zinc-800/80 px-6 py-4 rounded-r-xl max-w-xl shadow-lg">
                <p className="text-zinc-300 text-xs md:text-sm font-semibold italic leading-relaxed">
                  &ldquo;We don&apos;t just write code; we architect systems. We empower our engineers with absolute ownership, flexible schedules, and direct client synergy.&rdquo;
                </p>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Hero Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
            <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
              <img
                src="/assets/herocard/careerspage.png"
                alt="Global Careers Illustration"
                className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[460px] h-auto object-contain select-none"
              />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
