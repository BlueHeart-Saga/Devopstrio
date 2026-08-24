"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function PeopleBehindRecognition() {
  return (
    <section className="py-12 sm:py-16 bg-black relative border-t border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Single Leader Image */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="relative w-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/assets/About-page/leader/Mani PS 002-Photoroom.png" 
                  alt="Leadership & People Behind Recognition" 
                  className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Side: Heading + Feel-Good Quote */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="text-left space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
                  Every Milestone Reflects the <span className="text-rose-600 font-semibold">People Behind the Work</span>
                </h2>

                <div className="border-l-2 border-rose-600 pl-6 py-2">
                  <p className="text-lg sm:text-xl font-medium italic text-zinc-300 tracking-tight leading-relaxed font-sans">
                    &ldquo;Recognition matters most when it reflects real value—delivered by strong teams achieving continuous client outcomes.&rdquo;
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
