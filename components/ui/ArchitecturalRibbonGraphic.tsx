"use client";

import React from "react";
import { motion } from "framer-motion";

export function ArchitecturalRibbonGraphic({ className = "" }: { className?: string }) {
  // Generates 28 architectural perspective ribbon layers/stairs
  const steps = Array.from({ length: 28 }, (_, i) => i);

  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1000 800"
        style={{ width: "100%", height: "100%" }}
        preserveAspectRatio="xMaxYMid slice"
        className="w-full h-full"
      >
        <defs>
          {/* Main White to Translucent Gradient */}
          <linearGradient id="ribbonGradWhite" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.32" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
          </linearGradient>

          {/* Accent Rose Subtle Gradient */}
          <linearGradient id="ribbonGradRose" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#F43F5E" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.0" />
          </linearGradient>

          {/* Radial Mask for Soft Edge Fade */}
          <mask id="radialFade">
            <circle cx="800" cy="300" r="600" fill="white" />
          </mask>
        </defs>

        <g mask="url(#radialFade)">
          {steps.map((i) => {
            // Calculate 3D perspective fan steps
            const yOffset = i * 22;
            const xOffset = i * 18;
            const depth = i * 8;
            const isAccent = i % 7 === 0;

            // Coordinates for 3D polygon step/ribbon
            const p1 = `${850 - xOffset + depth}, ${50 + yOffset}`;
            const p2 = `${1050 - xOffset}, ${80 + yOffset}`;
            const p3 = `${980 - xOffset}, ${140 + yOffset + depth * 0.5}`;
            const p4 = `${780 - xOffset + depth}, ${110 + yOffset}`;

            return (
              <motion.g
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + i * 0.025,
                  ease: "easeOut",
                }}
              >
                {/* 3D Polygon Step Surface */}
                <polygon
                  points={`${p1} ${p2} ${p3} ${p4}`}
                  fill={isAccent ? "url(#ribbonGradRose)" : "url(#ribbonGradWhite)"}
                  stroke={isAccent ? "rgba(244,63,94,0.4)" : "rgba(255,255,255,0.25)"}
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />

                {/* Perspective Edge Accent Line */}
                <line
                  x1={850 - xOffset + depth}
                  y1={50 + yOffset}
                  x2={520 - xOffset * 1.4}
                  y2={220 + yOffset * 1.3}
                  stroke={isAccent ? "rgba(244,63,94,0.3)" : "rgba(255,255,255,0.15)"}
                  strokeWidth="1"
                  strokeDasharray={i % 2 === 0 ? "none" : "4 4"}
                />
              </motion.g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
