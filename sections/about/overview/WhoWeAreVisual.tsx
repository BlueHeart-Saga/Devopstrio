"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface WhoWeAreVisualProps {
  className?: string;
  selectedKey?: "W" | "E";
  onKeyClick?: (key: "W" | "E") => void;
}

export function WhoWeAreVisual({
  className = "",
  selectedKey = "W",
  onKeyClick,
}: WhoWeAreVisualProps) {
  const [pressedKey, setPressedKey] = useState<"W" | "E" | null>(null);

  // Play subtle mechanical key click sound using Web Audio API
  const playClickSound = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Crisp mechanical key switch sound
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(450, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.035);

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Audio not supported or blocked, graceful fallback
    }
  }, []);

  const handleKeyPress = (key: "W" | "E") => {
    setPressedKey(key);
    playClickSound();
    if (onKeyClick) onKeyClick(key);

    setTimeout(() => {
      setPressedKey(null);
    }, 200);
  };

  // Keyboard shortcut listener for 'W' and 'E' keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === "w" || e.key === "W") {
        handleKeyPress("W");
      } else if (e.key === "e" || e.key === "E") {
        handleKeyPress("E");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`relative w-full select-none flex flex-col items-center justify-center ${className}`}>
      
      {/* Outer bounding box with clearance for floating text and arrows */}
      <div className="relative py-16 sm:py-20 md:py-24 px-16 sm:px-24 md:px-32 flex items-center justify-center">
        
        {/* Central Keycaps Stage */}
        <div className="relative inline-flex items-center justify-center gap-5 sm:gap-7 md:gap-9">

          {/* ── COLUMN 1: [ W ] Keycap + "Who" text + Left Curved Arrow ── */}
          <div className="relative flex flex-col items-center">
            
            {/* "Who" Text: Shifted further to the left side */}
            <div className="absolute -top-16 sm:-top-20 md:-top-24 -left-8 sm:-left-12 md:-left-16 pointer-events-none z-20 whitespace-nowrap">
              <span
                style={{ fontFamily: "'Sedgwick Ave', 'Permanent Marker', cursive" }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight -rotate-6 inline-block leading-none drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
              >
                Who
              </span>
            </div>

            {/* Left Arrow: Curves from below "Who" towards the left shoulder of [W] */}
            <div className="absolute top-1 sm:top-2 -left-16 sm:-left-22 md:-left-26 w-14 sm:w-18 md:w-22 h-16 sm:h-20 md:h-24 pointer-events-none z-20 text-rose-500">
              <svg
                viewBox="0 0 65 70"
                fill="none"
                className="w-full h-full overflow-visible"
              >
                {/* Curved arrow from below Who into left edge of [W] */}
                <path
                  d="M 24 4 C 6 18, 6 44, 52 58"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arrowhead pointing down-right into [W] */}
                <path
                  d="M 38 50 L 52 58 L 50 44"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Keycap [ W ] - Signature Rose Red Theme */}
            <motion.button
              type="button"
              aria-label="Press W key for We Are"
              onClick={() => handleKeyPress("W")}
              whileHover={{ y: -4, scale: 1.02 }}
              animate={{
                y: pressedKey === "W" ? 8 : 0,
                scale: pressedKey === "W" ? 0.96 : selectedKey === "W" ? 1.03 : 1,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="relative group cursor-pointer focus:outline-none"
            >
              <div
                className={`w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-[22px] sm:rounded-[28px] p-[6px] sm:p-[8px] md:p-[10px] transition-all duration-150 relative ${
                  pressedKey === "W"
                    ? "shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0_4px_6px_rgba(0,0,0,0.4)]"
                    : selectedKey === "W"
                    ? "shadow-[0_20px_45px_-5px_rgba(225,29,72,0.5),0_10px_20px_-2px_rgba(0,0,0,0.6),inset_0_3px_5px_rgba(255,255,255,0.8),inset_0_-8px_10px_rgba(0,0,0,0.3),inset_3px_0_5px_rgba(255,255,255,0.4),inset_-3px_0_5px_rgba(0,0,0,0.2)] ring-2 ring-rose-500/50"
                    : "shadow-[0_20px_35px_-5px_rgba(0,0,0,0.8),0_10px_18px_-2px_rgba(0,0,0,0.5),inset_0_3px_5px_rgba(255,255,255,0.7),inset_0_-8px_10px_rgba(0,0,0,0.3),inset_3px_0_5px_rgba(255,255,255,0.35),inset_-3px_0_5px_rgba(0,0,0,0.2)] opacity-85 hover:opacity-100"
                }`}
                style={{
                  background: "linear-gradient(180deg, #e11d48 0%, #be123c 55%, #9f1239 100%)",
                }}
              >
                {/* Concave Key Dish */}
                <div
                  className="w-full h-full rounded-[16px] sm:rounded-[20px] flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: "radial-gradient(ellipse at 50% 30%, #f43f5e 0%, #e11d48 60%, #be123c 100%)",
                    boxShadow: pressedKey === "W"
                      ? "inset 0 5px 10px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.1)"
                      : "inset 0 3px 6px rgba(0,0,0,0.18), inset 0 -3px 5px rgba(255,255,255,0.45), 0 1px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Key specular sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20 pointer-events-none" />
                  
                  {/* Key Legend: W */}
                  <span
                    className="font-bold text-3xl sm:text-4xl md:text-5xl text-white select-none tracking-normal font-sans"
                    style={{
                      textShadow: "0 2px 4px rgba(0,0,0,0.4), 0 -1px 2px rgba(255,255,255,0.3)",
                    }}
                  >
                    W
                  </span>
                </div>
              </div>

              {/* Hover tooltip */}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Press [W] • We Are
              </span>
            </motion.button>
          </div>

          {/* ── COLUMN 2: [ E ] Keycap + Right Curved Arrow + "ARE" text ── */}
          <div className="relative flex flex-col items-center">
            
            {/* Keycap [ E ] - Signature Rose Red Theme */}
            <motion.button
              type="button"
              aria-label="Press E key for Engineering Solutions"
              onClick={() => handleKeyPress("E")}
              whileHover={{ y: -4, scale: 1.02 }}
              animate={{
                y: pressedKey === "E" ? 8 : 0,
                scale: pressedKey === "E" ? 0.96 : selectedKey === "E" ? 1.03 : 1,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="relative group cursor-pointer focus:outline-none"
            >
              <div
                className={`w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-[22px] sm:rounded-[28px] p-[6px] sm:p-[8px] md:p-[10px] transition-all duration-150 relative ${
                  pressedKey === "E"
                    ? "shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0_4px_6px_rgba(0,0,0,0.4)]"
                    : selectedKey === "E"
                    ? "shadow-[0_20px_45px_-5px_rgba(225,29,72,0.5),0_10px_20px_-2px_rgba(0,0,0,0.6),inset_0_3px_5px_rgba(255,255,255,0.8),inset_0_-8px_10px_rgba(0,0,0,0.3),inset_3px_0_5px_rgba(255,255,255,0.4),inset_-3px_0_5px_rgba(0,0,0,0.2)] ring-2 ring-rose-500/50"
                    : "shadow-[0_20px_35px_-5px_rgba(0,0,0,0.8),0_10px_18px_-2px_rgba(0,0,0,0.5),inset_0_3px_5px_rgba(255,255,255,0.7),inset_0_-8px_10px_rgba(0,0,0,0.3),inset_3px_0_5px_rgba(255,255,255,0.35),inset_-3px_0_5px_rgba(0,0,0,0.2)] opacity-85 hover:opacity-100"
                }`}
                style={{
                  background: "linear-gradient(180deg, #e11d48 0%, #be123c 55%, #9f1239 100%)",
                }}
              >
                {/* Concave Key Dish */}
                <div
                  className="w-full h-full rounded-[16px] sm:rounded-[20px] flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: "radial-gradient(ellipse at 50% 30%, #f43f5e 0%, #e11d48 60%, #be123c 100%)",
                    boxShadow: pressedKey === "E"
                      ? "inset 0 5px 10px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.1)"
                      : "inset 0 3px 6px rgba(0,0,0,0.18), inset 0 -3px 5px rgba(255,255,255,0.45), 0 1px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Key specular sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20 pointer-events-none" />

                  {/* Key Legend: E */}
                  <span
                    className="font-bold text-3xl sm:text-4xl md:text-5xl text-white select-none tracking-normal font-sans"
                    style={{
                      textShadow: "0 2px 4px rgba(0,0,0,0.4), 0 -1px 2px rgba(255,255,255,0.3)",
                    }}
                  >
                    E
                  </span>
                </div>
              </div>

              {/* Hover tooltip */}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Press [E] • Engineering
              </span>
            </motion.button>

            {/* Right Arrow: Curves from right edge of [E] down towards "ARE" */}
            <div className="absolute top-6 sm:top-8 -right-16 sm:-right-22 md:-right-26 w-14 sm:w-18 md:w-22 h-16 sm:h-20 md:h-24 pointer-events-none z-20 text-rose-500">
              <svg
                viewBox="0 0 65 70"
                fill="none"
                className="w-full h-full overflow-visible"
              >
                {/* Curved arrow from right of E down towards ARE */}
                <path
                  d="M 12 4 C 42 16, 44 42, 24 62"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arrowhead pointing down towards ARE */}
                <path
                  d="M 14 50 L 24 62 L 34 50"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* "ARE" Text: Positioned directly below [E], shifted further to the right side */}
            <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 -right-8 sm:-right-12 md:-right-16 pointer-events-none z-20 whitespace-nowrap">
              <span
                style={{ fontFamily: "'Sedgwick Ave', 'Permanent Marker', cursive" }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-widest rotate-2 inline-block leading-none drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
              >
                ARE
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
