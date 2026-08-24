"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ScrollWordReveal({ text, progress }: { text: string; progress: number }) {
  const words = text.split(" ");
  const total = words.length;

  return (
    <span className="inline font-semibold">
      {words.map((word, i) => {
        const start = i / total;
        const end = (i + 1) / total;
        // Word visibility ratio from 0 to 1 based on current step scroll progress
        const wordRatio = Math.min(Math.max((progress - start) / (end - start), 0), 1);
        const isRevealed = wordRatio > 0.3;

        return (
          <span
            key={`${word}-${i}`}
            className="inline-block transition-all duration-150 ease-out mr-[0.3em] font-semibold"
            style={{
              opacity: 0.45 + wordRatio * 0.55,
              transform: `translateY(${(1 - wordRatio) * 4}px)`,
              filter: `blur(${(1 - wordRatio) * 1.5}px)`,
              color: isRevealed ? "#ffffff" : "rgba(255, 255, 255, 0.55)",
              textShadow: isRevealed
                ? "0 2px 16px rgba(0, 0, 0, 0.98), 0 0 12px rgba(244, 63, 94, 0.4)"
                : "0 1px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}

export function OverviewHero() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const chapters = [
    {
      id: "hero",
      tagline: "DEVOPSTRIO OVERVIEW",
      quote: "We turn visionary ideas into living digital experiences that bring confidence, clarity, and unlimited potential to every enterprise.",
    },
    {
      id: "vision",
      tagline: "OUR VISION",
      quote: "To be a global leader in Cloud, AI, and DevOps by empowering organizations to harness multi-cloud innovation, intelligent automation, and data-driven decision-making to drive resilient growth.",
    },
    {
      id: "mission",
      tagline: "OUR MISSION",
      quote: "To empower businesses with innovative Cloud, AI, and DevOps solutions that simplify complexity, accelerate transformation, and deliver measurable impact through trust and agility.",
    },
    {
      id: "values",
      tagline: "OUR CORE VALUES",
      quote: "Built on integrity, transparency, and relentless innovation — delivering sustainable growth and engineering excellence for enterprises worldwide.",
    },
  ];

  // Pure Native Scroll Tracker: map scroll progress across chapters with boundary guards
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      if (totalScrollableHeight <= 0) return;

      const progress = Math.min(
        Math.max(-rect.top / totalScrollableHeight, 0),
        0.999
      );

      setScrollProgress(progress);

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

  const stepSize = 1 / chapters.length;
  const stepStart = activeStep * stepSize;
  const stepProgress = Math.min(
    Math.max((scrollProgress - stepStart) / (stepSize * 0.85), 0),
    1
  );

  return (
    <div ref={containerRef} className="relative w-full h-[320vh] bg-black text-white font-sans">
      {/* Pinned Sticky Background & Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center select-none pt-16 sm:pt-20">

        {/* Fixed Pinned Background Image with Scale Zoom */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/About-page/building/thoothukudi.png"
            alt="Devopstrio Building"
            className="w-full h-full object-cover object-right filter brightness-110 contrast-105 transition-transform duration-700 ease-out"
            style={{
              transform: `scale(${1 + activeStep * 0.03})`,
            }}
            loading="eager"
          />
          {/* 50% Left Dark Gradient: keeps text 100% legible while right half displays the building */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[55%] lg:w-[50%] bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent z-10" />
        </div>

        {/* Left 50% Content Area */}
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 relative z-20 h-full flex items-center">
          <div className="max-w-xl lg:max-w-[50%] w-full flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start text-left w-full space-y-5"
              >
                {/* Viewable Prominent Tag Name */}
                {chapters[activeStep].tagline && (
                  <span
                    style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.95)" }}
                    className="text-rose-500 font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.2em] uppercase drop-shadow-[0_2px_12px_rgba(244,63,94,0.5)]"
                  >
                    {chapters[activeStep].tagline}
                  </span>
                )}

                {/* Main Short Feel-Good Title */}
                {chapters[activeStep].title && (
                  <h1
                    style={{ textShadow: "0 4px 24px rgba(0, 0, 0, 0.98), 0 2px 8px rgba(0, 0, 0, 0.9)" }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] font-sans"
                  >
                    {chapters[activeStep].title}
                  </h1>
                )}

                {/* Professional Sub-Text Quote */}
                {chapters[activeStep].quote && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12, duration: 0.35 }}
                    className="pt-2 w-full"
                  >
                    <p
                      style={{ textShadow: "0 2px 20px rgba(0, 0, 0, 0.98)" }}
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-100 font-sans font-semibold leading-relaxed w-full max-w-2xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]"
                    >
                      <span className="text-rose-500 font-serif text-3xl sm:text-4xl mr-1.5 inline-block align-top leading-none">&ldquo;</span>
                      <ScrollWordReveal text={chapters[activeStep].quote} progress={stepProgress} />
                      <span className="text-rose-500 font-serif text-3xl sm:text-4xl ml-1 inline-block align-bottom leading-none">&rdquo;</span>
                    </p>
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







