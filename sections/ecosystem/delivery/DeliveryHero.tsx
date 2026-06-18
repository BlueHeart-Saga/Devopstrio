"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function DeliveryHero() {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-between bg-black overflow-hidden pt-28 border-b border-zinc-900/60">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/[0.012] rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 flex flex-col items-center text-center flex-grow justify-center pt-8">
        
        {/* Center Heading & Subtitle */}
        <Reveal delay={0.1} className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white text-center">
            Global Delivery. Local Expertise.
          </h1>
        </Reveal>

        <Reveal delay={0.2} className="max-w-3xl">
          <p className="text-zinc-300 text-xs md:text-sm lg:text-base leading-relaxed font-normal max-w-3xl text-center mx-auto opacity-95 mb-10">
            Devopstrio combines strategic consulting, engineering excellence, cloud operations, and 24×7 delivery capabilities through a globally connected network of innovation hubs.
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
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
        </Reveal>

        {/* Centered clean team image sitting at the bottom */}
        <div className="w-full max-w-5xl relative overflow-visible mt-16 select-none flex justify-center">
          <div className="relative w-full aspect-[960/540] max-h-[480px]">
            <Image
              src="/assets/About-page/team/imagestroke.png"
              alt="Global Delivery Team"
              fill
              priority
              className="object-contain filter grayscale brightness-90 contrast-110"
            />
          </div>
        </div>

      </div>

      {/* Bottom black blur fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none z-20" />
    </section>
  );
}
