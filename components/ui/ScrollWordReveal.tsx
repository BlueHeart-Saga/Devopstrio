"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollWordRevealProps {
  paragraph?: string;
  paragraphs?: string[];
  className?: string;
}

export function ScrollWordReveal({ paragraph, paragraphs, className = "" }: ScrollWordRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const list: string[] = paragraphs ? paragraphs : paragraph ? [paragraph] : [];

  // Calculate total words across all paragraphs for sequential ordering
  let totalWords = 0;
  list.forEach((p) => {
    totalWords += p.split(" ").filter(Boolean).length;
  });

  return (
    <div ref={containerRef} className={`space-y-6 ${className}`}>
      {list.map((paraText, pIdx) => {
        const paraWords = paraText.split(" ").filter(Boolean);

        // Count preceding words before this paragraph
        let startWordIndex = 0;
        for (let i = 0; i < pIdx; i++) {
          startWordIndex += list[i].split(" ").filter(Boolean).length;
        }

        return (
          <p
            key={pIdx}
            className="flex flex-wrap font-sans text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium"
          >
            {paraWords.map((word, wIdx) => {
              const globalIdx = startWordIndex + wIdx;
              const start = globalIdx / totalWords;
              const end = Math.min((globalIdx + 1) / totalWords, 1);

              return (
                <Word key={wIdx} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(progress, range, ["rgba(161, 161, 170, 0.25)", "rgba(255, 255, 255, 1)"]);

  return (
    <span className="relative mr-2 my-0.5 inline-block">
      <motion.span style={{ opacity, color }} className="transition-colors duration-150 font-medium">
        {children}
      </motion.span>
    </span>
  );
}

export default ScrollWordReveal;
