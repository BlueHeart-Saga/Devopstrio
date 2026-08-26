"use client";

import React from "react";

export const FlowerRadialGraphic = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-35 sm:opacity-45 md:opacity-55"
      >
        <defs>
          {/* Main Rose/Magenta Flower Gradient */}
          <linearGradient id="flowerRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#e11d48" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#881337" stopOpacity="0.05" />
          </linearGradient>

          {/* Secondary Violet Glow Gradient */}
          <linearGradient id="flowerVioletGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#f43f5e" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          {/* Center Core Radial Glow */}
          <radialGradient id="centerCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.35" />
            <stop offset="40%" stopColor="#e11d48" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Center Glow */}
        <circle cx="400" cy="400" r="320" fill="url(#centerCoreGlow)" />

        {/* Outer Flower Ring - 12 Petals Layer 1 */}
        <g className="animate-[spin_120s_linear_infinite] origin-center">
          {[...Array(12)].map((_, i) => (
            <path
              key={`outer-${i}`}
              d="M 400 400 Q 400 120 480 260 Q 400 400 400 400 Z"
              fill="url(#flowerRoseGrad)"
              stroke="url(#flowerRoseGrad)"
              strokeWidth="1.2"
              transform={`rotate(${i * 30} 400 400)`}
              className="transition-all duration-700"
            />
          ))}
        </g>

        {/* Counter Rotating Inner Flower Ring - 12 Petals Layer 2 */}
        <g className="animate-[spin_90s_linear_infinite_reverse] origin-center">
          {[...Array(12)].map((_, i) => (
            <path
              key={`inner-${i}`}
              d="M 400 400 Q 400 180 450 300 Q 400 400 400 400 Z"
              fill="url(#flowerVioletGrad)"
              stroke="#fb7185"
              strokeWidth="0.8"
              strokeOpacity="0.4"
              transform={`rotate(${i * 30 + 15} 400 400)`}
            />
          ))}
        </g>

        {/* Core Lotus Petals Ring - 8 Petals Layer 3 */}
        <g className="animate-[spin_60s_linear_infinite] origin-center">
          {[...Array(8)].map((_, i) => (
            <path
              key={`core-${i}`}
              d="M 400 400 Q 400 240 435 320 Q 400 400 400 400 Z"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="1.5"
              strokeOpacity="0.7"
              transform={`rotate(${i * 45} 400 400)`}
            />
          ))}
        </g>

        {/* Concentric Geometric Rings */}
        <circle cx="400" cy="400" r="350" stroke="#f43f5e" strokeWidth="0.5" strokeDasharray="4 8" strokeOpacity="0.3" />
        <circle cx="400" cy="400" r="280" stroke="#fb7185" strokeWidth="0.5" strokeOpacity="0.4" />
        <circle cx="400" cy="400" r="200" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="6 6" strokeOpacity="0.3" />
        <circle cx="400" cy="400" r="110" stroke="#f43f5e" strokeWidth="1" strokeOpacity="0.6" />
        <circle cx="400" cy="400" r="40" fill="#f43f5e" fillOpacity="0.15" stroke="#fb7185" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

export default FlowerRadialGraphic;
