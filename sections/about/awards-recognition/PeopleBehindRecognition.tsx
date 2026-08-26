"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function PeopleBehindRecognition() {
  return (
    <section className="py-12 sm:py-16 bg-black relative border-t border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Single Leader Image with Bottom Black Fade */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="relative w-full flex items-center justify-center overflow-hidden rounded-b-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/webp/assets/About-page/leader/Mani-PS-002-Photoroom.webp" 
                  alt="Leadership & People Behind Recognition" 
                  className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                  loading="lazy" />

                {/* Bottom Black Gradient Overlay to hide image bottom lines */}
                <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
              </div>
            </Reveal>
          </div>

          {/* Right Side: Heading + Feel-Good Quote */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="text-left space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
                  The People Behind <br />
                  <span className="text-rose-500">Every Recognition</span>
                </h2>
                
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-sans">
                  Behind every award, certification, and benchmark achievement is a relentless team of 
                  visionaries, engineers, and problem-solvers. We don&apos;t just build technology—we 
                  engineer trust, elevate industry standards, and deliver excellence that speaks for itself.
                </p>

                <div className="pt-2 border-l-2 border-rose-500/80 pl-4 sm:pl-6">
                  <p className="text-lg sm:text-xl font-medium text-white italic font-serif leading-snug">
                    &ldquo;Real recognition isn&apos;t given; it&apos;s earned through consistency, passion, and engineered impact.&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-500 font-sans tracking-wide mt-2">
                    — Manikandan PS
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PeopleBehindRecognition;
