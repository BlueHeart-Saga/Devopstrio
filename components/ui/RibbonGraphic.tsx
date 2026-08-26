"use client";

import React from "react";
import { motion } from "framer-motion";

export function RibbonGraphic({ className = "" }: { className?: string }) {
  // Generates 60 lines
  const bars = Array.from({ length: 60 }, (_, i) => i);

  // Center point of the burst
  const cx = 520;
  const cy = 300;

  // Angle calculations
  const baseAngle = -70;
  const angleStep = 2.6;

  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 900 600"
        style={{ width: "100%", height: "100%" }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* The white to transparent gradient applied to the lines */}
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {bars.map((i) => {
          const angle = baseAngle + i * angleStep;
          const rad = (angle * Math.PI) / 180;

          // Calculates length with a slight wave effect using Math.sin
          const len = 260 + Math.sin(i * 0.35) * 40;
          const x2 = cx + Math.cos(rad) * len;
          const y2 = cy + Math.sin(rad) * len;

          return (
            <motion.line
              key={i}
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke="url(#barGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // Staggered animation delay so they draw in one by one
              transition={{ duration: 1.2, delay: 0.3 + i * 0.008, ease: "easeOut" }}
            />
          );
        })}
      </svg>
    </div>
  );
}
