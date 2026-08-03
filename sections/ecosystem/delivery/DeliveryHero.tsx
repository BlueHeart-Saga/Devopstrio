"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function DeliveryHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-between bg-black overflow-hidden pt-20 pb-8 border-b border-zinc-900/60">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8 relative z-10 flex flex-col items-center text-center flex-grow justify-center pt-2">

        {/* 1st: Center Heading & Subtitle */}
        <Reveal delay={0.1} className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 text-white text-center">
            Global Delivery. Local Expertise.
          </h1>
        </Reveal>

        <Reveal delay={0.2} className="max-w-3xl">
          <p className="text-zinc-300 text-xs md:text-sm lg:text-base leading-relaxed font-normal max-w-3xl text-center mx-auto opacity-95 mb-6">
            Devopstrio combines strategic <Link href="/services/it-consulting" className="text-rose-500 hover:underline font-bold">IT consulting services</Link>, <Link href="/ecosystem/engineering-excellence" className="text-rose-500 hover:underline font-bold">engineering excellence</Link>, <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud operations</Link>, and 24×7 delivery capabilities.
          </p>
        </Reveal>

        {/* Exploration Pill Button */}
        <Reveal delay={0.3}>
          <Link
            href="#overview"
            className="inline-flex items-center gap-3.5 pl-6 pr-2 py-2 bg-white text-black font-semibold text-xs tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5"
          >
            Explore Our Presence
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </Reveal>

        {/* 2nd: Full-Width Standalone Showcase Image (No Box Wrapper) */}
        <Reveal delay={0.4} className="w-full flex justify-center mt-10 mb-2">
          <div className="relative w-full aspect-[16/9] max-h-[580px] md:max-h-[660px]">
            <Image
              src="/assets/ecosystem/global-delevery-hero.png"
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
