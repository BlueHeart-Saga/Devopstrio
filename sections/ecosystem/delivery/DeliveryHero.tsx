"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export function DeliveryHero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-between bg-black overflow-hidden pt-10 md:pt-12 pb-4 border-b border-zinc-900/60">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 relative z-10 flex flex-col items-center text-center flex-grow justify-center pt-2">

        {/* 1st: Center Heading */}
        <Reveal delay={0.1} className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-2 text-white text-center">
            Global Delivery. Local Expertise.
          </h1>
        </Reveal>

        {/* 2nd: Full-Width Standalone Showcase Image */}
        <Reveal delay={0.2} className="w-full flex justify-center mt-4 md:mt-6 mb-2">
          <div className="relative w-full aspect-[16/9] max-h-[580px] md:max-h-[660px]">
            <Image
              src="/webp/assets/ecosystem/global-delevery-hero.webp"
              alt="Global Delivery Ecosystem Showcase"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Reveal>

      </div>

      {/* Bottom black blur fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none z-20" />
    </section>
  );
}
