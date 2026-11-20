"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function AiEditorialSection() {
  return (
    <section
      id="editorial"
      className="w-full py-20 sm:py-24 lg:py-28 bg-[#020202] text-white border-b border-zinc-900/80 relative font-sans"
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12">
        {/* Section Eyebrow: Editorial Brief styled consistently with other section headers */}
        <Reveal>
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#E11D48]">
              EDITORIAL BRIEF
            </span>
          </div>
        </Reveal>

        {/* 52/48 Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[52fr_48fr] gap-10 lg:gap-14 items-start">
          {/* Left Column: Editorial Content (~52%) */}
          <div className="flex flex-col">
            <Reveal>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] xl:text-[42px] font-semibold tracking-tight text-white leading-[1.15] mb-6">
                Where Artificial Intelligence Meets{" "}
                <span className="text-[#E11D48]">Real Business Needs</span>
              </h2>
            </Reveal>

            {/* Paragraph Above Pull Quote */}
            <Reveal delay={0.05}>
              <p className="text-base text-zinc-300 font-normal leading-[1.72] mb-5">
                For UK enterprises, the genuine value of artificial intelligence lies beyond novelty demonstrations. Across banking, healthcare, retail, and manufacturing, organisations face persistent operational hurdles: fragmented data silos, legacy infrastructure friction, and strict governance mandates.
              </p>
            </Reveal>

            {/* Editorial Pull Quote: Clean vertical red accent, no card background */}
            <Reveal delay={0.1}>
              <blockquote className="border-l-2 border-[#E11D48] pl-5 sm:pl-6 my-5 sm:my-6">
                <p className="text-[17px] sm:text-[18px] text-zinc-200 font-medium not-italic leading-[1.65]">
                  Enterprise AI works best when technology, data and people are considered together.
                </p>
              </blockquote>
            </Reveal>

            {/* Paragraph Below Pull Quote */}
            <Reveal delay={0.15}>
              <p className="text-base text-zinc-300 font-normal leading-[1.72]">
                Moving from experimental pilots to production requires establishing trusted data foundations first. By pairing strategic{" "}
                <Link
                  href="/services/ai-consulting"
                  className="text-white underline decoration-zinc-700 underline-offset-4 hover:decoration-[#E11D48] hover:text-[#E11D48] transition-colors"
                >
                  AI consulting
                </Link>{" "}
                with principal engineering, we deliver deterministic, compliant AI systems tailored directly to core operational objectives.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Clean, Neat Team Photograph (~48%) */}
          <div className="w-full">
            <Reveal delay={0.1}>
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800/80 shadow-2xl">
                <Image
                  src="/webp/assets/editorial/editorial-ai-data-innovation.png"
                  alt="Devopstrio engineering and enterprise technology consulting team at corporate campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
