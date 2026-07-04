"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function PeopleBehindRecognition() {
  return (
    <section className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl h-[400px] lg:h-[500px]">
                <img 
                  src="/assets/About-page/microsoft_fluent_asset.png" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                    <p className="text-white text-sm font-bold italic">
                      "Recognition matters most when it reflects real value—delivered by strong teams achieving continuous client outcomes."
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="text-left mb-14">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                  The People Behind The Work
                </span>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                  Every Milestone Reflects the People Behind the Work
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  Behind every recognition, milestone, and achievement is a team of engineers, designers, strategists, support professionals, and collaborators committed to building meaningful outcomes.
                </p>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  At Devopstrio, recognition is shared across the teams, ideas, partnerships, and learning culture that make progress possible. It is a collective validation of the talent and dedication that drive our global delivery forward.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
