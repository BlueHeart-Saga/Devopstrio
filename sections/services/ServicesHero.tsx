"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesHero() {
  return (
    <section className="w-full bg-[#030303] text-white relative overflow-hidden pt-12 md:pt-16 pb-0">
      
      {/* Absolute Right-Aligned Services Image */}
      <div className="absolute right-0 bottom-0 w-[70%] md:w-[45%] lg:w-[32%] h-[90%] pointer-events-none z-0 opacity-40 hidden md:block">
        <img
          src="/assets/herocard/servicespage.png"
          alt="Services Capabilities"
          className="w-full h-full object-contain object-bottom filter grayscale contrast-125 brightness-90"
        />
      </div>

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10 flex flex-col justify-center">
        
        {/* Main Title */}
        <Reveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-white">
            <span className="block font-bold">Scaling Infrastructure.</span>
            <span className="text-rose-500 block mt-1">Accelerating Delivery.</span>
          </h1>
        </Reveal>

        {/* Description */}
        <Reveal delay={0.2}>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-xl mb-10">
            From cognitive AI pipelines and global cloud orchestration to zero-trust compliance frameworks, Devopstrio engineers robust solutions for high-velocity enterprise environments.
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.4} className="flex flex-wrap items-center gap-4 mb-20">
          <Link 
            href="#services-start" 
            className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded text-xs md:text-sm font-medium transition-colors shadow-sm"
          >
            Explore Capabilities <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/contact" 
            className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 hover:border-zinc-700 text-zinc-300 hover:text-white px-6 py-3 rounded text-xs md:text-sm font-medium transition-colors shadow-sm"
          >
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>

    </section>
  );
}
