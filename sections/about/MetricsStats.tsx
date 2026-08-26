"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  { value: "2500+", label: "Projects Delivered" },
  { value: "1500+", label: "Enterprise Clients" },
  { value: "525+", label: "Certified Experts" },
  { value: "98%", label: "Client Retention" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "73%", label: "Faster Deployments" },
  { value: "42%", label: "Avg Cost Reduction" },
  { value: "565t", label: "CO₂ Saved/Year" },
  { value: "24/7", label: "Global Support" },
];

export function MetricsStats() {
  return (
    <section className="w-full bg-black text-white pt-0 pb-8 sm:pb-12 lg:pb-16 relative overflow-hidden font-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6 sm:pt-8 mb-6 sm:mb-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            The Results Speak for Themselves
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed mt-4 max-w-3xl mx-auto font-normal">
            &ldquo;Numbers only matter when they mean something to the business behind them.
            Every metric below represents a client who moved faster, spent less, and worried
            less about their infrastructure.&rdquo;
          </p>
        </Reveal>
      </div>

      {/* Main Content Area: Left Image + Centered Red Box + Right Image */}
      <Reveal delay={0.15} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
        <div className="w-full flex items-stretch justify-center relative">
          
          {/* Left Landmark Illustration */}
          <div className="hidden lg:flex flex-1 justify-end items-end pointer-events-none pb-0 overflow-visible self-stretch z-0 -mr-16 lg:-mr-24 xl:-mr-32 relative -translate-y-8 lg:-translate-y-12 xl:-translate-y-14">
            <Image
              src="/webp/assets/components/left.png"
              alt="Landmarks illustration"
              width={1200}
              height={800}
              className="w-auto h-full max-h-[440px] xl:max-h-[520px] 2xl:max-h-[580px] object-contain object-right-bottom scale-120 xl:scale-125 origin-bottom-right"
            />
          </div>

          {/* Central Crimson Stats Box */}
          <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl bg-[#D82355] px-6 sm:px-10 lg:px-14 py-6 sm:py-8 lg:py-10 shadow-2xl relative z-10 shrink-0 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-y-7 lg:gap-y-8 gap-x-6 sm:gap-x-10 text-center">
              {metrics.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight block">
                    {item.value}
                  </span>
                  <span className="text-xs sm:text-sm font-normal text-white/90 mt-1 sm:mt-2 block tracking-wide">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right City Skyline Illustration */}
          <div className="hidden lg:flex flex-1 justify-start items-end pointer-events-none pb-0 overflow-visible self-stretch z-0 -ml-16 lg:-ml-24 xl:-ml-32 relative -translate-y-8 lg:-translate-y-12 xl:-translate-y-14">
            <Image
              src="/webp/assets/components/right.png"
              alt="City skyline illustration"
              width={1200}
              height={800}
              className="w-auto h-full max-h-[440px] xl:max-h-[520px] 2xl:max-h-[580px] object-contain object-left-bottom scale-120 xl:scale-125 origin-bottom-left"
            />
          </div>

        </div>
      </Reveal>

    </section>
  );
}

export default MetricsStats;

