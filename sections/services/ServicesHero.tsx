"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function ServicesHero() {
  return (
    <section className="relative w-full min-h-[480px] lg:min-h-[540px] flex items-center justify-center bg-[#030303] text-white pt-20 pb-8 lg:pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* Left Column: Text content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center relative z-20">
            <Reveal delay={0.05}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.18] text-white font-sans">
                “Simplifying technology, <span className="text-rose-500 font-semibold">amplifying your success</span>.”
              </h1>
            </Reveal>
          </div>

          {/* Right Column: Services Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full">
            <Reveal delay={0.2} className="w-full flex items-center justify-center lg:justify-end">
              <Image
                src="/webp/assets/herocard/servicespage.webp"
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
