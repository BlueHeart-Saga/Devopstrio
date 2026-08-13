"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const timelineEvents = [
  {
    year: "2019",
    title: "Company Foundation",
    description:
      "Devopstrio began its journey in Bangalore, India, serving global clients through digital platforms and remote engineering services.",
  },
  {
    year: "2020",
    title: "London Headquarters Established",
    description:
      "Expanded internationally by establishing our London headquarters, accelerating our focus on Cloud Transformation & Enterprise Technology.",
  },
  {
    year: "2021",
    title: "Multi-Cloud & Expansion",
    description:
      "Expanded capabilities across Azure, AWS, and GCP while entering Healthcare and Financial Services with scalable digital solutions.",
  },
  {
    year: "2022",
    title: "Enterprise Delivery Growth",
    description:
      "Our engineering teams scaled significantly, supporting larger enterprise engagements across cloud platforms and automation initiatives.",
  },
  {
    year: "2023",
    title: "SaaS & Product Innovation",
    description:
      "Launched industry-focused digital products and SaaS platforms for Healthcare, Banking, and Retail organizations.",
  },
  {
    year: "2024",
    title: "United States Expansion",
    description:
      "Expanded into the United States to support growing enterprise demand for AI, Cloud Engineering, and Data Platforms.",
  },
  {
    year: "2025",
    title: "Global Delivery Scale",
    description:
      "Expanded operational footprint with new delivery centers and strategic partnerships in Data, AI, and Cloud capabilities.",
  },
  {
    year: "2026",
    title: "AI-Driven Global Evolution",
    description:
      "Pioneering next-generation enterprise innovation through Artificial Intelligence, Cloud Platforms, DevOps, and Digital Engineering.",
  },
];

export const JourneyTimeline = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Observe when section is visible on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance interval ONLY when user is looking at this section
  useEffect(() => {
    if (isPaused || !isInView) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % timelineEvents.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, isInView]);

  // Container-isolated smooth horizontal scroll (NEVER scrolls or affects the window/page)
  useEffect(() => {
    const timer = setTimeout(() => {
      const container = scrollContainerRef.current;
      const activeEl = itemRefs.current[activeIdx];
      if (container && activeEl) {
        if (activeIdx === 0) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          const containerWidth = container.clientWidth;
          const leftPadding = containerWidth > 1024 ? 120 : containerWidth > 640 ? 60 : 24;
          const targetScrollLeft = Math.max(0, activeEl.offsetLeft - leftPadding);

          container.scrollTo({
            left: targetScrollLeft,
            behavior: "smooth",
          });
        }
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [activeIdx]);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 bg-black overflow-hidden relative"
      id="timeline"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4"
        >
          Our <span className="text-rose-500">Journey</span>
        </motion.h2>
      </div>

      {/* Horizontal Auto-Changing Timeline Container */}
      <div className="relative w-full max-w-[100vw] mx-auto mt-8 sm:mt-14">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto items-center pb-16 pt-8 px-6 sm:px-12 md:px-20 gap-8 md:gap-14 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-zinc-900/40 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-rose-500/80 cursor-grab active:cursor-grabbing select-none scroll-smooth"
        >
          {timelineEvents.map((item, idx) => {
            const isActive = idx === activeIdx;

            return (
              <div
                key={item.year}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                onClick={() => setActiveIdx(idx)}
                className="flex-shrink-0 flex items-center group cursor-pointer"
              >
                {/* Large Year Text */}
                <div
                  className={`text-[85px] sm:text-[140px] md:text-[190px] lg:text-[230px] font-black leading-[0.8] tracking-tighter select-none transition-all duration-700 shrink-0 ${
                    isActive
                      ? "text-rose-500 scale-105 drop-shadow-[0_0_40px_rgba(225,29,72,0.4)]"
                      : "text-zinc-800 hover:text-zinc-500"
                  }`}
                >
                  {item.year}
                </div>

                {/* Expanding Content Container */}
                <div
                  className={`flex flex-col justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "w-[300px] sm:w-[380px] md:w-[460px] opacity-100 ml-4 sm:ml-8 md:ml-12 pl-4 sm:pl-8 md:pl-10 border-l border-zinc-800/90"
                      : "w-0 opacity-0 ml-0 pl-0 border-l border-transparent pointer-events-none"
                  }`}
                >
                  <span className="text-rose-500 text-xs sm:text-sm font-semibold uppercase tracking-widest block font-mono mb-2">
                    Milestone {idx + 1} of {timelineEvents.length}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 tracking-tight whitespace-normal leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed font-semibold min-w-[260px] sm:min-w-[340px] md:min-w-[400px]">
                    {item.description}
                  </p>
                  <div
                    className={`w-16 h-[2px] bg-rose-500 mt-6 transform origin-left transition-transform duration-700 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Edge Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-black to-transparent pointer-events-none z-10 opacity-70" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-black to-transparent pointer-events-none z-10 opacity-70" />
      </div>

      {/* Interactive Bottom Controls: Clickable Year Badges & Next/Prev */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 relative z-20">
        {/* Year Pills Navigation */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap justify-center">
          {timelineEvents.map((event, i) => (
            <button
              key={event.year}
              onClick={() => setActiveIdx(i)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeIdx === i
                  ? "bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.5)] scale-105"
                  : "bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80"
              }`}
            >
              {event.year}
            </button>
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setActiveIdx((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length)}
            className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-rose-600 hover:border-rose-500 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
            aria-label="Previous year"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveIdx((prev) => (prev + 1) % timelineEvents.length)}
            className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-rose-600 hover:border-rose-500 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
            aria-label="Next year"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};


