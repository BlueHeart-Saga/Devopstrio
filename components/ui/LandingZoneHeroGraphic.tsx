"use client";

import React from "react";
import { motion } from "framer-motion";

export function LandingZoneHeroGraphic({ className = "" }: { className?: string }) {
  // 52 multi-dimensional architectural wave ribs converging from cloud horizon
  const lines = Array.from({ length: 52 }, (_, i) => i);

  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1000 700"
        style={{ width: "100%", height: "100%" }}
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle multi-cloud rose to white radiant gradient */}
          <linearGradient id="lzRayGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
            <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="65%" stopColor="#E11D48" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="lzAccentGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F43F5E" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#881337" stopOpacity="0.05" />
          </linearGradient>

          {/* Core Horizon Glow Filter */}
          <filter id="horizonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient focal point glow at horizon origin */}
        <circle cx="280" cy="350" r="45" fill="url(#lzAccentGrad)" opacity="0.3" filter="url(#horizonGlow)" />
        <circle cx="280" cy="350" r="12" fill="#FFFFFF" opacity="0.8" filter="url(#horizonGlow)" />

        {/* Architectural Stratum Curves & Radiant Foundation Ribs */}
        {lines.map((i) => {
          const progress = i / 51;
          const angleDeg = -82 + progress * 164; // -82 to +82 degrees sweep
          const rad = (angleDeg * Math.PI) / 180;

          // Wave modulation simulating multi-tiered landing zone topologies
          const length = 380 + Math.sin(progress * Math.PI * 2.5) * 90 + Math.cos(progress * 8) * 35;
          const startX = 280;
          const startY = 350;

          // Control point for subtle S-curve contour
          const cpX = startX + Math.cos(rad) * (length * 0.45) + Math.sin(progress * Math.PI * 3) * 60;
          const cpY = startY + Math.sin(rad) * (length * 0.45) + Math.cos(progress * Math.PI * 2) * 45;

          const endX = startX + Math.cos(rad) * length;
          const endY = startY + Math.sin(rad) * length;

          const pathData = `M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`;
          const isAccent = i % 7 === 0;

          return (
            <g key={i}>
              <motion.path
                d={pathData}
                stroke={isAccent ? "url(#lzAccentGrad)" : "url(#lzRayGrad)"}
                strokeWidth={isAccent ? "2.5" : "1.5"}
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: isAccent ? 0.9 : 0.6 }}
                transition={{
                  duration: 1.4,
                  delay: 0.2 + i * 0.015,
                  ease: "easeOut"
                }}
              />

              {/* Glowing Node Points on Accent Foundations */}
              {isAccent && (
                <motion.circle
                  cx={endX}
                  cy={endY}
                  r="3.5"
                  fill="#FFFFFF"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: [0.4, 0.9, 0.4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5 + i * 0.05,
                    ease: "easeInOut"
                  }}
                />
              )}
            </g>
          );
        })}

        {/* Concentric Architectural Rings / Perimeters */}
        {[180, 290, 410].map((radius, rIdx) => (
          <motion.ellipse
            key={`ring-${rIdx}`}
            cx="280"
            cy="350"
            rx={radius}
            ry={radius * 0.72}
            stroke="url(#lzRayGrad)"
            strokeWidth="1"
            strokeDasharray="4 8"
            opacity={0.25 - rIdx * 0.06}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 - rIdx * 0.06 }}
            transition={{ duration: 1.6, delay: 0.4 + rIdx * 0.2 }}
          />
        ))}
      </svg>
    </div>
  );
}

export default LandingZoneHeroGraphic;
