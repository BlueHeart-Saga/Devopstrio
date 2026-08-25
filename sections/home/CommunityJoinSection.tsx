"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const clientPhotos = [
  "/webp/assets/Home-page/client-reviews/image-164.webp",
  "/webp/assets/Home-page/client-reviews/image-165.webp",
  "/webp/assets/Home-page/client-reviews/image-166.webp",
  "/webp/assets/Home-page/client-reviews/image-167.webp",
  "/webp/assets/Home-page/client-reviews/image-168.webp",
  "/webp/assets/Home-page/client-reviews/image-169.webp",
  "/webp/assets/Home-page/client-reviews/image-170.webp",
  "/webp/assets/Home-page/client-reviews/image-171.webp",
  "/webp/assets/Home-page/client-reviews/image-172.webp",
  "/webp/assets/Home-page/client-reviews/image-173.webp",
  "/webp/assets/Home-page/client-reviews/image-174.webp",
  "/webp/assets/Home-page/client-reviews/image-175.webp",
  "/webp/assets/Home-page/client-reviews/image-176.webp",
  "/webp/assets/Home-page/client-reviews/image-177.webp",
  "/webp/assets/Home-page/client-reviews/image-178.webp",
  "/webp/assets/Home-page/client-reviews/image-180.webp",
  "/webp/assets/Home-page/client-reviews/image-181.webp",
];

const clientReviews = [
  { name: "Elena Rostova", role: "VP of Engineering • FinScale", quote: "Devopstrio scaled our Kubernetes clusters to handle 10x traffic with zero downtime." },
  { name: "David Chen", role: "CTO • CloudMatrix", quote: "Their DevOps automation reduced our deployment cycle from days to under 15 minutes." },
  { name: "Marcus Vance", role: "Director of Cloud Ops • HealthTech", quote: "Outstanding multi-cloud architecture and unmatched 24/7 reliability." },
  { name: "Sophie Taylor", role: "Head of Infrastructure • NexaPay", quote: "Transformed our legacy stack into high-velocity microservices seamlessly." },
  { name: "Sarah Jenkins", role: "Chief Architect • DataPulse", quote: "The AI & MLOps pipelines revolutionized our real-time predictive analytics." },
  { name: "Liam O'Connor", role: "VP of Technology • RetailWave", quote: "Zero-trust security fabric implemented flawlessly across 4 global regions." },
  { name: "Aria Montgomery", role: "Engineering Lead • SaaSify", quote: "Internal developer platforms saved our engineering pods 100+ hours a week." },
  { name: "Kevin Patel", role: "Head of DevOps • LogisticsPro", quote: "GitOps workflows and automated quality gates eliminated production bugs." },
  { name: "Amara Nwosu", role: "VP of Digital • ApexBank", quote: "Seamless enterprise cloud migration with automated FinOps cost optimization." },
  { name: "Julian Rossi", role: "Lead Architect • SmartGrid", quote: "Resilient lakehouse architecture processing 50M+ events per hour effortlessly." },
  { name: "Chloe Dupont", role: "CTO • BioGen Labs", quote: "Unparalleled engineering talent and enterprise rigor from day one." },
  { name: "Alexander Wright", role: "Director of SRE • PayFlow", quote: "Chaos engineering and resilience drills made our systems virtually bulletproof." },
  { name: "Hannah Schmidt", role: "Head of Cloud • AutoDrive AI", quote: "Autonomous agentic AI swarms integrated directly into our core platform." },
  { name: "Tariq Mansoor", role: "VP Engineering • SecureCloud", quote: "Exceptional DevSecOps tooling and continuous compliance automation." },
  { name: "Jessica Lee", role: "Product Director • Streamline", quote: "Delivered our critical platform milestone 2 months ahead of schedule." },
  { name: "Noah Campbell", role: "VP Technology • OmniChannel", quote: "True partners who treat our system scalability and velocity as their own." },
  { name: "Rachel Adams", role: "Head of Infrastructure • CloudScale", quote: "Highest quality engineering team we have ever collaborated with." },
];

// Grid mosaic tile types with rich corner variations matching the reference design
type TileType =
  | "photo"
  | "gray-sq"
  | "gray-cut-tr"
  | "gray-cut-bl"
  | "gray-cut-tl"
  | "gray-cut-br"
  | "gray-arch-l"
  | "gray-arch-r"
  | "circle"
  | "plum-sq"
  | "plum-petal-tl"
  | "plum-petal-tr"
  | "plum-cut-tr"
  | "plum-cut-tl"
  | "plum-cut-br"
  | "plum-cut-bl"
  | "plum-circle";

interface MosaicTile {
  type: TileType;
  photoIdx?: number;
}

const gridTiles: MosaicTile[] = [
  // Row 1 (20 tiles)
  { type: "gray-sq" },
  { type: "gray-cut-tr" },
  { type: "plum-petal-tl" },
  { type: "circle" },
  { type: "photo", photoIdx: 0 },
  { type: "plum-cut-tl" },
  { type: "gray-arch-l" },
  { type: "photo", photoIdx: 1 },
  { type: "circle" },
  { type: "gray-cut-bl" },
  { type: "plum-petal-tr" },
  { type: "gray-sq" },
  { type: "plum-cut-br" },
  { type: "circle" },
  { type: "photo", photoIdx: 2 },
  { type: "plum-sq" },
  { type: "gray-cut-tl" },
  { type: "plum-circle" },
  { type: "gray-sq" },
  { type: "plum-petal-tr" },

  // Row 2 (20 tiles)
  { type: "gray-cut-tl" },
  { type: "plum-sq" },
  { type: "photo", photoIdx: 3 },
  { type: "circle" },
  { type: "gray-sq" },
  { type: "plum-petal-tl" },
  { type: "photo", photoIdx: 4 },
  { type: "plum-circle" },
  { type: "gray-arch-r" },
  { type: "photo", photoIdx: 5 },
  { type: "plum-cut-tr" },
  { type: "gray-cut-br" },
  { type: "photo", photoIdx: 6 },
  { type: "circle" },
  { type: "gray-sq" },
  { type: "plum-petal-tr" },
  { type: "photo", photoIdx: 7 },
  { type: "circle" },
  { type: "plum-cut-tl" },
  { type: "gray-arch-r" },

  // Row 3 (20 tiles)
  { type: "photo", photoIdx: 8 },
  { type: "gray-arch-l" },
  { type: "circle" },
  { type: "plum-petal-tr" },
  { type: "photo", photoIdx: 9 },
  { type: "gray-cut-tr" },
  { type: "circle" },
  { type: "photo", photoIdx: 10 },
  { type: "plum-sq" },
  { type: "gray-sq" },
  { type: "photo", photoIdx: 11 },
  { type: "plum-petal-tl" },
  { type: "circle" },
  { type: "photo", photoIdx: 12 },
  { type: "gray-cut-tl" },
  { type: "plum-circle" },
  { type: "photo", photoIdx: 13 },
  { type: "gray-sq" },
  { type: "plum-cut-br" },
  { type: "circle" },

  // Row 4 (20 tiles)
  { type: "plum-petal-tl" },
  { type: "circle" },
  { type: "photo", photoIdx: 14 },
  { type: "gray-cut-bl" },
  { type: "plum-sq" },
  { type: "circle" },
  { type: "photo", photoIdx: 15 },
  { type: "gray-arch-l" },
  { type: "plum-petal-tr" },
  { type: "photo", photoIdx: 16 },
  { type: "gray-sq" },
  { type: "plum-cut-bl" },
  { type: "circle" },
  { type: "photo", photoIdx: 0 },
  { type: "plum-circle" },
  { type: "gray-cut-tr" },
  { type: "photo", photoIdx: 1 },
  { type: "circle" },
  { type: "plum-petal-tl" },
  { type: "gray-sq" },

  // Row 5 (20 tiles)
  { type: "gray-sq" },
  { type: "plum-cut-tl" },
  { type: "circle" },
  { type: "photo", photoIdx: 2 },
  { type: "gray-cut-tr" },
  { type: "plum-sq" },
  { type: "circle" },
  { type: "photo", photoIdx: 3 },
  { type: "gray-arch-r" },
  { type: "plum-petal-tl" },
  { type: "photo", photoIdx: 4 },
  { type: "circle" },
  { type: "gray-sq" },
  { type: "plum-cut-tr" },
  { type: "photo", photoIdx: 5 },
  { type: "plum-circle" },
  { type: "gray-cut-bl" },
  { type: "photo", photoIdx: 6 },
  { type: "gray-sq" },
  { type: "plum-petal-tr" },

  // Row 6 (20 tiles)
  { type: "gray-cut-br" },
  { type: "photo", photoIdx: 7 },
  { type: "plum-sq" },
  { type: "gray-arch-l" },
  { type: "photo", photoIdx: 8 },
  { type: "circle" },
  { type: "plum-petal-tr" },
  { type: "photo", photoIdx: 9 },
  { type: "gray-cut-tl" },
  { type: "circle" },
  { type: "photo", photoIdx: 10 },
  { type: "plum-circle" },
  { type: "gray-sq" },
  { type: "photo", photoIdx: 11 },
  { type: "plum-petal-tl" },
  { type: "circle" },
  { type: "photo", photoIdx: 12 },
  { type: "gray-cut-tr" },
  { type: "plum-sq" },
  { type: "circle" },

  // Row 7 (20 tiles)
  { type: "photo", photoIdx: 13 },
  { type: "gray-sq" },
  { type: "plum-petal-tl" },
  { type: "circle" },
  { type: "photo", photoIdx: 14 },
  { type: "plum-cut-br" },
  { type: "gray-arch-r" },
  { type: "photo", photoIdx: 15 },
  { type: "circle" },
  { type: "gray-cut-bl" },
  { type: "plum-sq" },
  { type: "photo", photoIdx: 16 },
  { type: "plum-circle" },
  { type: "gray-sq" },
  { type: "photo", photoIdx: 0 },
  { type: "plum-petal-tr" },
  { type: "circle" },
  { type: "photo", photoIdx: 1 },
  { type: "gray-cut-tl" },
  { type: "plum-sq" },

  // Row 8 (20 tiles)
  { type: "gray-sq" },
  { type: "plum-cut-bl" },
  { type: "circle" },
  { type: "gray-cut-tr" },
  { type: "plum-sq" },
  { type: "photo", photoIdx: 2 },
  { type: "circle" },
  { type: "gray-sq" },
  { type: "plum-petal-tl" },
  { type: "circle" },
  { type: "photo", photoIdx: 3 },
  { type: "plum-cut-tr" },
  { type: "gray-arch-l" },
  { type: "circle" },
  { type: "photo", photoIdx: 4 },
  { type: "plum-sq" },
  { type: "gray-cut-br" },
  { type: "circle" },
  { type: "plum-petal-tr" },
  { type: "gray-sq" },
];

export function CommunityJoinSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-advance reviews one by one every 3.5 seconds when not hovered or paused
  useEffect(() => {
    if (isPaused || hoveredIdx !== null) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % clientReviews.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, hoveredIdx]);

  const displayIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;
  const currentReview = clientReviews[displayIdx % clientReviews.length];

  const getTileShapeClass = (type: TileType) => {
    switch (type) {
      case "circle":
      case "plum-circle":
        return "rounded-full";
      case "plum-petal-tl":
        return "rounded-tl-[16px] sm:rounded-tl-[22px] rounded-br-[16px] sm:rounded-br-[22px] rounded-tr-none rounded-bl-none";
      case "plum-petal-tr":
        return "rounded-tr-[16px] sm:rounded-tr-[22px] rounded-bl-[16px] sm:rounded-bl-[22px] rounded-tl-none rounded-br-none";
      case "plum-cut-tr":
        return "rounded-tr-[16px] sm:rounded-tr-[22px] rounded-tl-none rounded-br-none rounded-bl-none";
      case "plum-cut-tl":
        return "rounded-tl-[16px] sm:rounded-tl-[22px] rounded-tr-none rounded-br-none rounded-bl-none";
      case "plum-cut-br":
        return "rounded-br-[16px] sm:rounded-br-[22px] rounded-tl-none rounded-tr-none rounded-bl-none";
      case "plum-cut-bl":
        return "rounded-bl-[16px] sm:rounded-bl-[22px] rounded-tl-none rounded-tr-none rounded-bl-none";
      case "gray-cut-tr":
        return "rounded-md sm:rounded-lg rounded-tr-none";
      case "gray-cut-bl":
        return "rounded-md sm:rounded-lg rounded-bl-none";
      case "gray-cut-tl":
        return "rounded-md sm:rounded-lg rounded-tl-none";
      case "gray-cut-br":
        return "rounded-md sm:rounded-lg rounded-br-none";
      case "gray-arch-l":
        return "rounded-l-full rounded-r-none";
      case "gray-arch-r":
        return "rounded-r-full rounded-l-none";
      case "plum-sq":
      case "gray-sq":
      case "photo":
      default:
        return "rounded-md sm:rounded-lg";
    }
  };

  const getTileColorClass = (type: TileType) => {
    if (type.startsWith("plum") || type.startsWith("rose")) {
      return "bg-[#E11D48] border border-rose-400/50 shadow-[0_0_12px_rgba(225,29,72,0.35)]";
    }
    if (type === "circle") {
      return "bg-zinc-800/80 border border-zinc-700/40";
    }
    return "bg-zinc-800/70 border border-zinc-700/30";
  };

  return (
    <section className="w-full py-10 sm:py-14 md:py-18 bg-black text-white relative overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative top-left arrow image (Matching Reference Style) */}
      <div className="absolute top-10 sm:top-14 md:top-16 left-4 sm:left-8 z-20 pointer-events-none select-none">
        <img src="/webp/assets/components/top-to-buttom-side-Arrowmid.webp"
          alt="Top connector arrow"
          className="w-12 sm:w-16 md:w-20 h-auto object-contain opacity-75 filter drop-shadow-[0_0_12px_rgba(244,63,94,0.35)]"
        loading="lazy" />
      </div>

      <div className="max-w-6xl xl:max-w-7xl mx-auto w-full px-3 sm:px-6 relative z-10">
        
        {/* Section Header (Left Aligned) */}
        <div className="text-left max-w-3xl mb-8 sm:mb-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight font-sans">
            Our customers speak
          </h2>
        </div>

        {/* Outer Rounded Stadium / Oval Container for Compact Mosaic Wall */}
        <div className="relative w-full py-2 sm:py-4 flex items-center justify-center min-h-[320px] sm:min-h-[400px] md:min-h-[460px]">

          {/* Background Strict 8-Row x 20-Column Grid (Non-Wrapping, Smooth Stadium Silhouette) */}
          <div className="w-full grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1 sm:gap-1.5 md:gap-2 opacity-80 sm:opacity-90 rounded-[32px] sm:rounded-[50px] md:rounded-[64px] overflow-hidden p-2.5 sm:p-3 border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-sm">
            {gridTiles.map((tile, i) => {
              if (tile.type === "photo" && tile.photoIdx !== undefined) {
                const photoSrc = clientPhotos[tile.photoIdx % clientPhotos.length];
                const review = clientReviews[tile.photoIdx % clientReviews.length];
                const isSelected = displayIdx % clientReviews.length === tile.photoIdx % clientReviews.length;
                const isHovered = hoveredIdx === tile.photoIdx;

                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredIdx(tile.photoIdx!)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => {
                      setActiveIdx(tile.photoIdx!);
                      setHoveredIdx(tile.photoIdx!);
                    }}
                    className={`w-full aspect-square rounded-sm sm:rounded-md md:rounded-lg overflow-hidden bg-zinc-900 border relative cursor-pointer transition-all duration-300 ${
                      isHovered || isSelected
                        ? "scale-115 sm:scale-125 border-rose-500 ring-2 ring-rose-500/70 shadow-[0_0_20px_rgba(244,63,94,0.75)] z-40 opacity-100"
                        : "border-zinc-800 hover:border-zinc-700 z-10 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={photoSrc}
                      alt={review.name}
                      fill
                      className={`object-cover transition-all duration-300 ${
                        isHovered || isSelected ? "contrast-115 brightness-105" : ""
                      }`}
                    />
                  </div>
                );
              }

              const shapeClass = getTileShapeClass(tile.type);
              const colorClass = getTileColorClass(tile.type);

              return (
                <div
                  key={i}
                  className={`w-full aspect-square ${shapeClass} ${colorClass} pointer-events-none transition-all duration-300`}
                />
              );
            })}
          </div>

          {/* Centered Floating Stadium Oval Pill Capsule Badge */}
          <div 
            className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 z-20 pointer-events-none"
          >
            <motion.div
              layout
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="bg-white text-zinc-950 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full rounded-full sm:rounded-[56px] px-6 sm:px-10 md:px-12 py-5 sm:py-7 md:py-8 text-center shadow-[0_25px_70px_rgba(0,0,0,0.9)] border border-zinc-200 relative pointer-events-auto min-h-[110px] sm:min-h-[135px] md:min-h-[145px] flex items-center justify-center overflow-hidden transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`review-${displayIdx}`}
                  initial={{ opacity: 0, scale: 0.96, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -6 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-1 sm:space-y-1.5 max-w-lg mx-auto w-full px-2"
                >
                  {/* Top 5 Gold Stars */}
                  <div className="flex items-center justify-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} size={13} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote statement */}
                  <p className="text-xs sm:text-sm md:text-base font-medium text-zinc-900 leading-snug font-sans italic line-clamp-2">
                    &ldquo;{currentReview.quote}&rdquo;
                  </p>

                  {/* Author Details */}
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-zinc-950 font-sans tracking-tight">
                      {currentReview.name}
                    </p>
                    {/* <p className="text-[10px] sm:text-xs text-rose-600 font-semibold font-mono">
                      {currentReview.role}
                    </p> */}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

