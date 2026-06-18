"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function ContactHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-[#030303] text-white pt-20 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">
            

            {/* Heading */}
            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                Every Platform Starts
                <br />
                <span className="text-[#E11D48] whitespace-nowrap">With a Conversation.</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.2}>
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed font-semibold max-w-xl mb-8">
                Whether you&apos;re ready to build, migrate, secure, or scale — our senior architects are one message away. No generic pitches. Just honest engineering expertise applied to your exact challenge.
              </p>
            </Reveal>

            {/* Quote Block */}
            <Reveal delay={0.3}>
              <div className="border-l-2 border-rose-500 bg-zinc-950/40 px-6 py-4 rounded-r-lg max-w-xl">
                <p className="text-zinc-300 text-xs md:text-sm font-semibold italic leading-relaxed">
                  &ldquo;We don&apos;t do discovery calls with salespeople. You speak directly with a senior cloud architect who understands your stack — on day one.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
            <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
              <img
                src="/assets/herocard/contactpage.png"
                alt="Global Contact Network"
                className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] h-auto object-contain select-none"
              />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
