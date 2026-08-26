"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { RibbonGraphic } from "@/components/ui/RibbonGraphic";

export function CareersHero() {
  return (
    <section id="overview" className="relative w-full min-h-[480px] lg:min-h-[540px] flex items-center justify-center bg-[#030303] text-white pt-20 pb-8 lg:pb-10 overflow-hidden font-sans">
      {/* Ribbon Graphic Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <RibbonGraphic className="w-full h-full" />
      </div>

      {/* Dark Ambient Lighting Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Text content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center relative z-20">
            <Reveal delay={0.05}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.18] text-white font-sans mb-6">
                Empowering Talent. <br />
                <span className="text-rose-500 font-semibold">Co-Engineering Future.</span>
              </h1>
            </Reveal>

            {/* Quote Block */}
            <Reveal delay={0.15}>
              <div className="border-l-4 border-rose-500 bg-zinc-950/60 border border-zinc-800/80 px-6 py-5 rounded-r-xl max-w-2xl shadow-lg">
                <p className="text-zinc-200 text-base sm:text-lg md:text-xl font-semibold italic leading-relaxed">
                  &ldquo;We don&apos;t just write code; we architect systems. We empower our engineers with absolute ownership, flexible schedules, and direct client synergy.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Careers Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
            <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
              <Image
                src="/webp/assets/herocard/careerspage.webp"
                alt="Global Careers Illustration"
                priority
                width={480}
                height={480}
                className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain select-none filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
