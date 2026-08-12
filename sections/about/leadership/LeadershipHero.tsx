"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface StoryItem {
  id: string;
  text: string;
  highlightWords: string[];
}

// 5-step concise, emotional narrative sequence
const storyItems: StoryItem[] = [
  {
    id: "vision",
    text: "Every journey begins with a vision to build a better tomorrow through technology.",
    highlightWords: ["vision", "better", "tomorrow", "technology."],
  },
  {
    id: "people",
    text: "Behind every achievement are people who bring passion, courage, and curiosity.",
    highlightWords: ["people", "passion,", "courage,", "curiosity."],
  },
  {
    id: "trust",
    text: "When teams are trusted and empowered, ideas grow stronger and possibilities become endless.",
    highlightWords: ["trusted", "empowered,", "stronger", "possibilities", "become", "endless."],
  },
  {
    id: "action",
    text: "Together, we turn ambitious challenges into solutions that create lasting impact.",
    highlightWords: ["ambitious", "challenges", "solutions", "lasting", "impact."],
  },
  {
    id: "future",
    text: "Our next chapter is being built together with people who believe in what is possible.",
    highlightWords: ["next", "chapter", "built", "together", "believe", "in", "what", "is", "possible."],
  },
];

export const LeadershipHero = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Split sentence into words and identify highlights
  const currentStory = storyItems[activeStep];
  const words = useMemo(() => {
    return currentStory.text.split(" ").map((word, idx) => {
      const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
      const isHighlighted = currentStory.highlightWords.some((hw) => {
        const cleanHw = hw.toLowerCase().replace(/[^a-z0-9]/g, "");
        return cleanHw === cleanWord;
      });
      return { word, isHighlighted, index: idx };
    });
  }, [currentStory]);

  // Calculate the sub-progress for word-by-word reveal inside the active step (0 to 1)
  const stepCount = storyItems.length;
  const stepRange = 1 / stepCount;
  const currentStepStart = activeStep * stepRange;
  const rawStepProgress = (scrollProgress - currentStepStart) / stepRange;
  const stepProgress = Math.min(Math.max(rawStepProgress, 0), 1);

  // Native scroll handler for smooth 60fps tracking
  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      if (totalScrollableHeight <= 0) return;

      const progress = Math.min(
        Math.max(-rect.top / totalScrollableHeight, 0),
        0.9999
      );

      rafId = requestAnimationFrame(() => {
        setScrollProgress(progress);
        const step = Math.min(
          Math.floor(progress * stepCount),
          stepCount - 1
        );
        setActiveStep(step);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [stepCount]);

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-[300vh] bg-black text-white">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-end pb-16 sm:pb-20 lg:pb-24 overflow-hidden select-none">
        {/* Bright Cinematic Background Image & Targeted Contrast Masks */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src="/assets/About-page/leadership_hero_bg.png"
            alt="Devopstrio Leadership and Executive Office"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-105 transition-transform duration-700 ease-out"
            style={{
              transform: `scale(${1 + scrollProgress * 0.04})`,
            }}
          />
          {/* Targeted Left Gradient: keeps text 100% viewable while the right half remains bright & clear */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[55%] bg-gradient-to-r from-black/95 via-black/80 to-transparent z-10" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 to-transparent z-10" />
          <div className="absolute bottom-24 left-10 w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[130px] pointer-events-none z-10" />
        </div>

        {/* Content Container (Bottom-Left Positioned) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-20 space-y-7 sm:space-y-9">
          {/* Story Title */}
          <div className="max-w-3xl lg:max-w-4xl min-h-[130px] sm:min-h-[150px] flex items-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 16, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(3px)" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <h1
                  style={{
                    textShadow:
                      "0 4px 24px rgba(0, 0, 0, 0.98), 0 2px 8px rgba(0, 0, 0, 0.9)",
                  }}
                  className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.2] text-white flex flex-wrap gap-x-[0.3em] gap-y-[0.15em]"
                >
                  {words.map(({ word, isHighlighted, index }) => {
                    // Compute word activation threshold (word lights up across 0.05 to 0.85 of step scroll)
                    const totalWords = words.length;
                    const wordThreshold = 0.05 + (index / totalWords) * 0.8;
                    const isLit = stepProgress >= wordThreshold;

                    return (
                      <span
                        key={index}
                        className="inline-block transition-all duration-300"
                        style={{
                          opacity: isLit ? 1 : 0.35,
                          transform: isLit ? "translateY(0)" : "translateY(1.5px)",
                        }}
                      >
                        {isHighlighted ? (
                          <span
                            className={
                              isLit
                                ? "text-rose-500 font-semibold drop-shadow-[0_0_18px_rgba(244,63,94,0.5)] transition-colors duration-300"
                                : "text-zinc-400 transition-colors duration-300"
                            }
                          >
                            {word}
                          </span>
                        ) : (
                          <span
                            className={
                              isLit
                                ? "text-white font-semibold transition-colors duration-300"
                                : "text-zinc-400 transition-colors duration-300"
                            }
                          >
                            {word}
                          </span>
                        )}
                      </span>
                    );
                  })}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1"
          >
            <a href="#executive-leadership" className="btn-tactile group">
              <div>
                <span>
                  Meet Our Leaders
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
            <Link href="/careers" className="btn-tactile btn-tactile-secondary group">
              <div>
                <span>Join Our Team</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



