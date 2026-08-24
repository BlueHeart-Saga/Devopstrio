"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export const MentorshipBenefits = () => {
  const mentoringItems = [
    "1-on-1 Weekly Mentoring",
    "Structured Production Code Reviews",
    "Career Mapping & Industry Pathways",
    "Enterprise System Architecture Sessions",
    "Cloud & DevOps Certification Support",
  ];

  const benefits = [
    "Production Industry Experience",
    "Live Client Projects & Real Stakes",
    "Technical Certifications & Badges",
    "Global Engineering Collaboration",
    "High-Credibility Portfolio & GitHub",
    "Direct Full-Time Conversion Track",
    "Executive Letter of Recommendation",
    "Accredited Completion Certificate",
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-[#030303] text-white relative overflow-hidden font-sans border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-rose-950/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-purple-950/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Top Header */}
        <Reveal className="mb-10 md:mb-14 text-left max-w-3xl">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white leading-tight font-sans">
            Designed for <span className="text-rose-500">Accelerated</span> Mastery
          </h2>
        </Reveal>

        {/* Clean 2-Column Simple List View (60% / 40% Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* Left Column: Mentorship Program (60% width) */}
          <Reveal delay={0.1} className="lg:col-span-7 space-y-4">
            <div className="pb-3 border-b border-white/10 flex items-center justify-between">
              <div>
               
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Learn from <span className="text-rose-500">Industry Experts</span>
                </h3>
              </div>
              {/* <span className="text-xs font-mono text-zinc-500">
                0{mentoringItems.length}
              </span> */}
            </div>

            {/* List View with linearrow.png bullet points */}
            <div className="flex flex-col divide-y divide-white/5 pt-1">
              {mentoringItems.map((title, idx) => (
                <div
                  key={idx}
                  className="py-3 sm:py-3.5 flex items-center gap-3.5 group transition-colors hover:bg-white/[0.02] rounded-lg px-2 -mx-2 cursor-default"
                >
                  {/* linearrow.png bullet icon */}
                  <img src="/assets/components/linearrow.png"
                    alt="Bullet arrow"
                    className="w-3.5 h-3.5 object-contain rotate-0 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.6)] group-hover:translate-x-1.5 transition-transform duration-300 shrink-0"
                  loading="lazy" />

                  {/* Title Only */}
                  <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-rose-400 transition-colors leading-snug">
                    {title}
                  </h4>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right Column: Internship Benefits (40% width) */}
          <Reveal delay={0.2} className="lg:col-span-5 space-y-4">
            <div className="pb-3 border-b border-white/10 flex items-center justify-between">
              <div>
                {/* <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block mb-0.5">
                  Key Outcomes
                </span> */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Internship <span className="text-rose-500">Benefits</span>
                </h3>
              </div>
              {/* <span className="text-xs font-mono text-zinc-500">
                0{benefits.length}
              </span> */}
            </div>

            {/* List View with linearrow.png bullet points */}
            <div className="flex flex-col divide-y divide-white/5 pt-1">
              {benefits.map((title, idx) => (
                <div
                  key={idx}
                  className="py-3 sm:py-3.5 flex items-center gap-3.5 group transition-colors hover:bg-white/[0.02] rounded-lg px-2 -mx-2 cursor-default"
                >
                  {/* linearrow.png bullet icon */}
                  <img src="/assets/components/linearrow.png"
                    alt="Bullet arrow"
                    className="w-3.5 h-3.5 object-contain rotate-180 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.6)] group-hover:translate-x-1.5 transition-transform duration-300 shrink-0"
                  loading="lazy" />

                  {/* Title Only */}
                  <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-rose-400 transition-colors leading-snug">
                    {title}
                  </h4>
                </div>
              ))}
            </div>
          </Reveal>
          
        </div>

      </div>
    </section>
  );
};
