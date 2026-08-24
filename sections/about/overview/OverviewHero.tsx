"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function OverviewHero() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const chapters = [
    {
      id: "hero",
      tagline: "DEVOPSTRIO OVERVIEW",
      title: (
        <>
          Crafting <span className="text-rose-500 font-bold">Dreams.</span>
          <br />
          Inspiring <span className="text-rose-500 font-bold">Growth.</span>
        </>
      ),
      quote: "We turn visionary ideas into living digital experiences that bring joy, confidence, and unlimited potential to every enterprise.",
    },
    {
      id: "vision",
      tagline: "OUR VISION",
      title: (
        <>
          Pioneering <span className="text-rose-500 font-bold">Innovation.</span>
          <br />
          Shaping <span className="text-rose-500 font-bold">Excellence.</span>
        </>
      ),
      quote: "To be recognized as a global leader in Cloud, AI, and DevOps solutions by enabling organizations to embrace innovation, accelerate growth, and achieve operational excellence. We envision a future where businesses of all sizes can seamlessly harness the power of multi-cloud environments, intelligent automation, and data-driven decision-making to stay competitive and resilient in the digital-first world. Through trust, innovation, and agility, we aspire to shape the future of technology-driven transformation.",
    },
    {
      id: "mission",
      tagline: "OUR MISSION",
      title: (
        <>
          Empowering <span className="text-rose-500 font-bold">Businesses.</span>
          <br />
          Delivering <span className="text-rose-500 font-bold">Impact.</span>
        </>
      ),
      quote: "Our mission is to empower businesses through innovative Cloud, AI, and DevOps solutions that simplify complexity, accelerate transformation, and deliver measurable impact. We strive to build trust, drive sustainable growth, and foster a culture of innovation and agility.",
    },
    {
      id: "values",
      tagline: "OUR CORE VALUES",
      title: (
        <>
          Powered By <span className="text-rose-500 font-bold">Trust.</span>
          <br />
          Driven By <span className="text-rose-500 font-bold">Agility.</span>
        </>
      ),
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
    <div ref={containerRef} className="relative w-full h-[320vh] bg-black text-white font-sans">
      {/* Pinned Sticky Background & Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center select-none pt-16 sm:pt-20">

        {/* Fixed Pinned Background Image with Scale Zoom */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="/assets/About-page/building/thoothukudi.png"
            alt="Devopstrio Building"
            className="w-full h-full object-cover object-right filter brightness-110 contrast-105 transition-transform duration-700 ease-out"
            style={{
              transform: `scale(${1 + activeStep * 0.03})`,
            }}
          loading="eager" />
          {/* 50% Left Dark Gradient: keeps text 100% legible while right half displays the building */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[60%] lg:w-[52%] bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent z-10" />
        </div>

        {/* Left 50% Content Area */}
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 relative z-20 h-full flex items-center">
          <div className="max-w-xl lg:max-w-[48%] w-full flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start text-left w-full space-y-4"
              >
                {/* Viewable Prominent Tag Name */}
                {chapters[activeStep].tagline && (
                  <span
                    style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.95)" }}
                    className="text-rose-500 font-sans text-sm sm:text-base md:text-lg font-bold tracking-[0.25em] uppercase drop-shadow-[0_2px_10px_rgba(244,63,94,0.4)]"
                  >
                    {chapters[activeStep].tagline}
                  </span>
                )}

                {/* Main Short Feel-Good Title */}
                <h1
                  style={{ textShadow: "0 4px 24px rgba(0, 0, 0, 0.98), 0 2px 8px rgba(0, 0, 0, 0.9)" }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] font-sans"
                >
                  {chapters[activeStep].title}
                </h1>

                {/* Professional Sub-Text Quote */}
                {chapters[activeStep].quote && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12, duration: 0.35 }}
                    className="pt-2"
                  >
                    <p
                      style={{ textShadow: "0 2px 16px rgba(0, 0, 0, 0.98)" }}
                      className="text-sm sm:text-base lg:text-lg text-zinc-200 font-sans font-normal leading-relaxed max-w-xl border-l-2 border-rose-500 pl-4 py-2 bg-rose-950/30 backdrop-blur-sm rounded-r-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
                    >
                      &ldquo;{chapters[activeStep].quote}&rdquo;
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






