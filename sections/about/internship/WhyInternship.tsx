"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  Briefcase,
  Globe2,
  GraduationCap,
  Terminal,
  Award,
  Rocket,
  Code2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const internshipHighlights = [
  {
    id: "real-projects",
    icon: Briefcase,
    tag: "Hands-On",
    title: "Real-World Enterprise Projects",
    desc: "Ship production-ready code on live client systems and cloud environments.",
  },
  {
    id: "global-team",
    icon: Globe2,
    tag: "Global",
    title: "Cross-Border Pod Collaboration",
    desc: "Work alongside international engineering teams across 4 delivery hubs.",
  },
  {
    id: "mentorship",
    icon: GraduationCap,
    tag: "Guidance",
    title: "1-on-1 Senior Mentorship",
    desc: "Direct coaching from principal architects and senior technology leads.",
  },
  {
    id: "modern-tech",
    icon: Terminal,
    tag: "Tech Stack",
    title: "Modern Cloud & AI Stack",
    desc: "Master Next.js, Kubernetes, GenAI, Microservices, Python & Docker.",
  },
  {
    id: "certificate",
    icon: Award,
    tag: "Recognition",
    title: "Certified Professional Growth",
    desc: "Verified experience certificate, executive reference & career credentials.",
  },
  {
    id: "portfolio",
    icon: Rocket,
    tag: "Impact",
    title: "Production Portfolio",
    desc: "Build a high-impact portfolio showcasing deployed enterprise applications.",
  },
  {
    id: "engineering",
    icon: Code2,
    tag: "Skills",
    title: "Agile Engineering Practices",
    desc: "Gain hands-on experience with CI/CD pipelines, code reviews & SRE.",
  },
  {
    id: "career-jump",
    icon: Sparkles,
    tag: "Future",
    title: "Direct Placement Fast-Track",
    desc: "Top performing interns get fast-tracked for full-time engineering roles.",
  },
];

export const WhyInternship = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = internshipHighlights.length - visibleCards;

  // Auto-scroll loop
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, [maxIndex, isPaused]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="w-full py-4 sm:py-6 bg-[#030303] text-white relative overflow-hidden font-sans">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-rose-950/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-purple-950/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Top Header */}
        <Reveal className="mb-4 sm:mb-6 text-center max-w-3xl mx-auto pt-14 sm:pt-18">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white leading-[1.35] font-sans">
            Why{" "}
            <span className="relative inline-block px-3 py-0.5 mx-1">
              {/* Top-to-bottom straight arrow PNG pointing directly down to 'Learn' */}
              <img src="/webp/assets/components/streight-toptobuttm.webp"
                alt="Top to bottom arrow"
                className="absolute -top-14 sm:-top-18 md:-top-20 left-1/2 -translate-x-1/2 w-14 sm:w-18 md:w-20 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(244,63,94,0.6)] pointer-events-none select-none z-20"
              loading="lazy" />

              <span className="relative z-10 text-white font-semibold">Learn</span>
              {/* Brand Rose hand-drawn oval circle loop */}
              <svg
                className="absolute -inset-x-3.5 -inset-y-2 w-[calc(100%+28px)] h-[calc(100%+16px)] text-rose-500 pointer-events-none"
                viewBox="0 0 220 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 30 C30 8, 195 5, 208 28 C218 42, 160 54, 70 55 C18 56, 5 45, 18 26"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-95 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]"
                />
              </svg>
            </span>{" "}
            With Our Global Internship
          </h2>
        </Reveal>

        {/* Premium Interactive Auto-Scrolling Cards Showcase */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Carousel Wrapper */}
          <div className="overflow-hidden py-2 -mx-2 px-2">
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCards)}%)`,
              }}
            >
              {internshipHighlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group"
                  >
                    <div className="h-full bg-gradient-to-br from-[#131219] via-[#0E0E14] to-[#09090C] hover:from-[#1A1823] hover:via-[#13121B] hover:to-[#0D0C12] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-xl relative overflow-hidden backdrop-blur-xl">
                      {/* Top-Right Microsoft Fluent Radial Glow */}
                      <div className="absolute -top-12 -right-12 w-40 h-40 bg-[radial-gradient(circle,rgba(225,29,72,0.18),transparent_70%)] pointer-events-none group-hover:scale-150 transition-transform duration-700" />

                      <div className="relative z-10 space-y-4">
                        {/* Icon & Tag Header */}
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-rose-600/5 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(225,29,72,0.25)] group-hover:shadow-[0_0_30px_rgba(225,29,72,0.6)]">
                            <IconComponent size={24} />
                          </div>
                          <span className="text-xs font-semibold text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full font-sans tracking-wide shadow-sm">
                            {item.tag}
                          </span>
                        </div>

                        {/* Title Only (Description avoided, Viewable Font Size) */}
                        <div className="pt-2">
                          <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-rose-400 transition-colors font-sans leading-snug">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      {/* Bottom Accent Bar */}
                      <div className="relative z-10 mt-6 pt-4 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest font-medium">
                          Devopstrio Internship
                        </span>
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/40 group-hover:bg-rose-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls & Indicators */}
          <div className="mt-8 flex items-center justify-between">
            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setStartIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    startIndex === idx
                      ? "w-8 bg-rose-500"
                      : "w-2 bg-zinc-800 hover:bg-zinc-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-rose-500/50 bg-white/5 hover:bg-rose-500/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-rose-500/50 bg-white/5 hover:bg-rose-500/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
