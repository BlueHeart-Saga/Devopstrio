"use client";

import React, { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const benefits = [
  {
    name: "Health & Wellness",
    tag: "WE CARE ABOUT YOU",
    desc: "Comprehensive medical cover and mental health support for you and your family.",
    image: "/assets/careers/careers_industries/Healthcare-and-Life-Sciences.png",
  },
  {
    name: "Learning & Certification",
    tag: "CONTINUOUS GROWTH",
    desc: "Sponsored cloud certifications, study guides, and global conference access.",
    image: "/assets/careers/careers_industries/Education.png",
  },
  {
    name: "Hybrid & Remote Work",
    tag: "FLEXIBLE LIFE",
    desc: "Flexible schedules blending home office and modern premium workspaces.",
    image: "/assets/careers/careers_industries/Government-and-Public-Sector.png",
  },
  {
    name: "Global Opportunities",
    tag: "INTERNATIONAL NETWORK",
    desc: "Opportunities to work across our UK, US, Singapore and India office locations.",
    image: "/assets/careers/careers_industries/Telecommunications.png",
  },
  {
    name: "Generous Leave Policy",
    tag: "WORK-LIFE BALANCE",
    desc: "Generous time off to rest, recharge, travel, and enjoy life fully with your loved ones.",
    image: "/assets/careers/careers_industries/Media-and-Entertainment.png",
  },
  {
    name: "Performance Rewards",
    tag: "RECOGNITION",
    desc: "Performance spot bonuses, annual payouts, and team achievement milestones.",
    image: "/assets/careers/careers_industries/Manufacturing.png",
  },
  {
    name: "Competitive Payouts",
    tag: "COMPENSATION",
    desc: "Premium industry payouts, annual bonuses, equity options, and referral incentives.",
    image: "/assets/careers/careers_industries/Banking-and-Finance.png",
  },
  {
    name: "Career Progression",
    tag: "ADVANCEMENT",
    desc: "Structured promotion tracks, architecture mentoring, and executive leadership paths.",
    image: "/assets/careers/careers_industries/Retail-and-E-Commerce.png",
  },
];

export function PerksBenefits() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section id="perks" className="w-full pt-6 sm:pt-8 pb-8 sm:pb-4 bg-[#030303] text-white border-b border-zinc-900/80 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-rose-600/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header & Square Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <div className="max-w-2xl text-left relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
                Benefits built for your wellbeing {" "}
                <span className="relative inline-block">
                  {/* Arrow image placed directly near Grow word */}
                  <div className="absolute -top-10 -left-20 pointer-events-none select-none hidden sm:block">
                    <img
                      src="/assets/components/lefttoright.png"
                      alt="Arrow indicator"
                      className="w-12 sm:w-14 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                    />
                  </div>

                  <span className="bg-rose-500 text-white font-semibold px-4 py-1 mr-1 rounded-xl inline-block">
                    Grow.
                  </span>
                </span>
              </h2>
            </div>
          </Reveal>

          {/* Navigation Buttons (Matching User Screenshot UI) */}
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2.5 self-end md:self-auto">
              <button
                onClick={scrollLeft}
                aria-label="Scroll left"
                className="w-11 h-11 bg-[#e2e8f0] text-zinc-500 flex items-center justify-center transition-all duration-300 hover:bg-zinc-300 active:scale-95 shadow-sm"
              >
                <ChevronLeft size={20} className="stroke-[2]" />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll right"
                className="w-11 h-11 bg-white text-zinc-900 border-2 border-zinc-900 flex items-center justify-center transition-all duration-300 hover:bg-zinc-100 active:scale-95 shadow-sm"
              >
                <ChevronRight size={20} className="stroke-[2]" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Single Row Scrollable Cards Container (Hidden Scrollbar + Navigation Arrow Control) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory pt-4 pb-20 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 scroll-smooth [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {benefits.map((ben, idx) => (
            <div
              key={idx}
              className="w-[290px] sm:w-[340px] md:w-[380px] shrink-0 group snap-start"
            >
              {/* Image Box Container */}
              <div className="w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden relative shadow-xl bg-zinc-950 border border-zinc-800/80">
                <img
                  src={ben.image}
                  alt={ben.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                />
              </div>

              {/* 50% Inside / 50% Outside Floating White Card Overlay */}
              <div className="mx-3.5 -mt-16 sm:-mt-20 relative z-20 bg-white text-zinc-900 border border-zinc-200/90 rounded-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-1.5 tracking-tight font-sans">
                  {ben.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">
                  {ben.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
