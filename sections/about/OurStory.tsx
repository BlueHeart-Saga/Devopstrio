"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const milestones = [
  {
    year: "2019",
    title: "Company Foundation",
    description:
      "Founded with an unwavering vision — to build digital foundations that empower bold visionaries to shape tomorrow."
  },
  {
    year: "2020",
    title: "London Headquarters Established",
    description:
      "Established our London headquarters, bringing together passionate tech minds to pioneer enterprise cloud transformation."
  },
  {
    year: "2021",
    title: "Multi-Cloud & Industry Expansion",
    description:
      "Mastered multi-cloud ecosystems across AWS, Azure, and GCP, empowering healthcare and finance pioneers with seamless reliability."
  },
  {
    year: "2022",
    title: "Enterprise Delivery Growth",
    description:
      "Scaled high-performing engineering pods globally, delivering resilient DevOps automation and transformational platforms."
  },
  {
    year: "2023",
    title: "Product Engineering & SaaS Innovation",
    description:
      "Pioneered production-grade GenAI and SaaS platforms, turning complex technological challenges into elegant human experiences."
  },
  {
    year: "2024",
    title: "United States Expansion",
    description:
      "Expanded across the United States, bringing next-generation AI, data engineering, and cloud platforms to global innovators."
  },
  {
    year: "2025",
    title: "Global Delivery & Strategic Partnerships",
    description:
      "Accelerated international delivery networks with 24/7 follow-the-sun excellence, building trust and speed at scale."
  },
  {
    year: "2026",
    title: "AI-Driven Global Evolution",
    description:
      "Leading the frontier of AI-driven global engineering — crafting intelligent digital ecosystems for a brighter, connected world."
  }
];

export function OurStory() {
  const [activeIdx, setActiveIdx] = useState(2); // Start at 2021
  const [isPaused, setIsPaused] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % milestones.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Throttled mouse wheel scroll navigation
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime < 800) return; // Throttle scroll inputs to 800ms
    setLastScrollTime(now);

    if (e.deltaY > 0) {
      setActiveIdx((prev) => (prev + 1) % milestones.length);
    } else {
      setActiveIdx((prev) => (prev - 1 + milestones.length) % milestones.length);
    }
  };

  const activeEvent = milestones[activeIdx];

  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-[#030303] text-white relative overflow-hidden" id="our-story">
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 xl:px-8 relative z-10">

        {/* Circular Scroll Timeline Interface */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-6 items-center min-h-[440px] md:min-h-[520px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onWheel={handleWheel}
        >
          {/* LEFT: Half-Circle Dial (Center is pinned to the left edge of this container) */}
          <div className="relative w-full h-[400px] sm:h-[480px] md:h-[580px] flex items-center overflow-hidden select-none">
            {/* The actual circle positioned half off-screen left with enlarged size */}
            <div className="absolute w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] md:w-[620px] md:h-[620px] left-[-210px] sm:left-[-260px] md:left-[-310px] top-1/2 -translate-y-1/2 flex items-center justify-center shrink-0">
              
              {/* Dashed circular timeline track (Previous clean design) */}
              <svg className="absolute inset-0 w-full h-full text-zinc-800/40 pointer-events-none" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  strokeDasharray="1.5 2"
                />
              </svg>

              {/* Rotating dial years */}
              {milestones.map((event, idx) => {
                let diff = idx - activeIdx;
                const half = milestones.length / 2;
                if (diff > half) diff -= milestones.length;
                if (diff <= -half) diff += milestones.length;

                const theta = diff * 22; // 22 degrees gap
                const rad = (theta * Math.PI) / 180;
                const x = 50 + 40 * Math.cos(rad);
                const y = 50 + 40 * Math.sin(rad);

                const isActive = idx === activeIdx;
                const distance = Math.abs(diff);
                const opacity = Math.max(0.12, 1 - distance * 0.28); // Dynamic opacity based on proximity

                return (
                  <button
                    key={event.year}
                    onClick={() => setActiveIdx(idx)}
                    className={`absolute w-24 h-12 flex items-center justify-center rounded-full transition-all duration-700 focus:outline-none ${isActive
                      ? "text-[#ebd0be] scale-125 font-black z-20 text-2xl md:text-3xl drop-shadow-[0_0_15px_rgba(235,208,190,0.5)]"
                      : "text-zinc-600 hover:text-[#ebd0be]/70 scale-95 font-medium z-10 text-sm md:text-base"
                      }`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: `translate(-50%, -50%) rotate(${theta}deg)`,
                      opacity: opacity
                    }}
                  >
                    <span className="font-sans font-bold tracking-tight">{event.year}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Active Details Content */}
          <div className="flex flex-col justify-center pl-0 lg:pl-10 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col"
              >
                {/* Large Year Display */}
                <span className="text-[#ebd0be] text-7xl sm:text-8xl md:text-[9rem] xl:text-[11rem] font-extrabold tracking-tighter leading-none mb-2 select-none font-sans block drop-shadow-[0_10px_35px_rgba(235,208,190,0.25)]">
                  {activeEvent.year}
                </span>

                {/* Event Title */}
                <h3 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-white mb-4 tracking-tight leading-tight font-sans">
                  {activeEvent.title}
                </h3>

                {/* Event Description (Subtext) */}
                <p className="text-zinc-200 text-lg sm:text-xl xl:text-2xl leading-relaxed max-w-2xl font-medium font-sans">
                  {activeEvent.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OurStory;
