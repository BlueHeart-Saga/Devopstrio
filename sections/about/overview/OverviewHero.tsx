"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export function OverviewHero() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const chapters = [
    {
      id: "hero",
      tagline: undefined,
      title: (
        <>
          Building <span className="text-rose-500">Innovation.</span>
          <br />
          Creating <span className="text-rose-500">Impact.</span>
        </>
      ),
      description: undefined,
      isValues: false,
      stats: undefined,
    },
    {
      id: "mission",
      tagline: undefined,
      title: (
        <>
          OUR MISSION
          <br />
          <span className="text-rose-500">EMPOWERING POSSIBILITIES.</span>
        </>
      ),
      description: "To empower enterprises by simplifying complex technology into intelligent, AI-driven cloud ecosystems. We partner with leaders to accelerate innovation across AI, Cloud, DevOps, and modern software engineering.",
      isValues: false,
      stats: undefined,
    },
    {
      id: "vision",
      tagline: undefined,
      title: (
        <>
          Our Vision.
          <br />
          Building <span className="text-rose-500">What&apos;s Next.</span>
        </>
      ),
      description: "To become a leading global IT support and helpdesk service provider known for innovation, reliability, and customer-centric solutions. Architecting a future where software never fails through the synergy of AI intelligence and human creativity.",
      isValues: false,
      stats: undefined,
    },
    {
      id: "values",
      tagline: "OUR FOUNDATION",
      title: "Core Values",
      description: "Leveraging technology to enable business transformation from strategy and design to cloud, AI, and DevOps. Built on integrity, engineering excellence, and customer success.",
      isValues: true,
      stats: [
        { text: "3,500+ Experts", isHighlighted: false },
        { text: "2,000+ Clients", isHighlighted: true },
      ],
    },
  ];

  // Pure Native Scroll Tracker: map scroll progress across chapters with boundary guards
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      if (totalScrollableHeight <= 0) return;

      // Calculate progress percentage inside section from 0 to 0.999
      const progress = Math.min(
        Math.max(-rect.top / totalScrollableHeight, 0),
        0.999
      );

      // Map progress (0 to 1) to active chapter index (0 to 3)
      const step = Math.min(
        Math.floor(progress * chapters.length),
        chapters.length - 1
      );
      setActiveStep(step);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [chapters.length]);

  return (
    <div ref={containerRef} className="relative w-full h-[320vh] bg-black text-white">
      {/* Pinned Sticky Background & Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center select-none pt-16 sm:pt-20">
        
        {/* Fixed Pinned Background Image with Scale Zoom */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/About-page/building/building2.png"
            alt="Devopstrio Building"
            className="w-full h-full object-cover object-right sm:object-center filter brightness-110 contrast-105 transition-transform duration-700 ease-out"
            style={{
              transform: `scale(${1 + activeStep * 0.03})`,
            }}
          />
          {/* Focused Left Dark Gradient: keeps text 100% legible while right half stays bright */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[60%] lg:w-[55%] bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent z-10" />
        </div>

        {/* Left Side Content Area */}
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 relative z-20 h-full flex items-center">
          <div className="max-w-3xl w-full min-h-[300px] sm:min-h-[380px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start text-left w-full"
              >
                {/* Top Sparkles Icon (ONLY FOR MISSION CHAPTER) */}
                {chapters[activeStep].id === "mission" && (
                  <div className="flex items-center gap-1.5 text-rose-500 mb-2 sm:mb-3 opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    <Sparkles size={24} className="animate-pulse" />
                  </div>
                )}

                {/* Red Tagline (FOR VALUES CHAPTER) */}
                {chapters[activeStep].tagline && (
                  <span
                    style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.95)" }}
                    className="text-rose-500 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                  >
                    {chapters[activeStep].tagline}
                  </span>
                )}

                {/* Main Heading */}
                <h1
                  style={{ textShadow: "0 4px 24px rgba(0, 0, 0, 0.98), 0 2px 8px rgba(0, 0, 0, 0.9)" }}
                  className={
                    chapters[activeStep].id === "mission"
                      ? "text-2xl sm:text-4xl md:text-5xl font-semibold uppercase tracking-tight text-white leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
                      : "text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
                  }
                >
                  {chapters[activeStep].title}
                </h1>

                {/* Thin Horizontal Divider Line (FOR MISSION CHAPTER) */}
                {chapters[activeStep].id === "mission" && chapters[activeStep].description && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="w-full max-w-xl h-[1px] bg-gradient-to-r from-white/25 via-white/15 to-transparent my-4 sm:my-5 origin-left shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                  />
                )}

                {/* Subtitle / Description Paragraph */}
                {chapters[activeStep].description && (
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.35 }}
                    style={{ textShadow: "0 2px 16px rgba(0, 0, 0, 0.98), 0 1px 4px rgba(0, 0, 0, 0.9)" }}
                    className="text-base sm:text-lg md:text-xl text-zinc-200 font-normal max-w-2xl leading-relaxed mt-4 sm:mt-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
                  >
                    {chapters[activeStep].description}
                  </motion.p>
                )}

                {/* Core Values Stats Highlights (Matching Reference Screenshot) */}
                {chapters[activeStep].isValues && chapters[activeStep].stats && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.35 }}
                    className="w-full max-w-2xl mt-6 sm:mt-8"
                  >
                    <div className="w-full border-t border-zinc-800/80 mb-6 sm:mb-8" />
                    <div
                      style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.95)" }}
                      className="flex items-center gap-8 sm:gap-12 text-lg sm:text-2xl font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                    >
                      {chapters[activeStep].stats.map((stat, idx) => (
                        <span
                          key={idx}
                          className={stat.isHighlighted ? "text-rose-500" : "text-zinc-300"}
                        >
                          {stat.text}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}




