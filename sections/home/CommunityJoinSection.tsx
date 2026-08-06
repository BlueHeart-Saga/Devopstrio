"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const clientPhotos = [
  "/assets/Home-page/client-reviews/image%20164.png",
  "/assets/Home-page/client-reviews/image%20165.png",
  "/assets/Home-page/client-reviews/image%20166.png",
  "/assets/Home-page/client-reviews/image%20167.png",
  "/assets/Home-page/client-reviews/image%20168.png",
  "/assets/Home-page/client-reviews/image%20169.png",
  "/assets/Home-page/client-reviews/image%20170.png",
  "/assets/Home-page/client-reviews/image%20171.png",
  "/assets/Home-page/client-reviews/image%20172.png",
  "/assets/Home-page/client-reviews/image%20173.png",
  "/assets/Home-page/client-reviews/image%20174.png",
  "/assets/Home-page/client-reviews/image%20175.png",
  "/assets/Home-page/client-reviews/image%20176.png",
  "/assets/Home-page/client-reviews/image%20177.png",
  "/assets/Home-page/client-reviews/image%20178.png",
  "/assets/Home-page/client-reviews/image%20180.png",
  "/assets/Home-page/client-reviews/image%20181.png"
];

// Grid mosaic tile types to create an organic, artistic layout like the reference image
type TileType = "photo" | "square" | "circle" | "teardrop1" | "teardrop2" | "rose-block";

interface MosaicTile {
  type: TileType;
  photoIdx?: number;
}

const gridTiles: MosaicTile[] = [
  // Row 1
  { type: "square" },
  { type: "photo", photoIdx: 0 },
  { type: "teardrop1" },
  { type: "circle" },
  { type: "photo", photoIdx: 1 },
  { type: "photo", photoIdx: 2 },
  { type: "square" },
  { type: "photo", photoIdx: 3 },
  { type: "circle" },
  { type: "square" },
  { type: "teardrop2" },
  
  // Row 2
  { type: "square" },
  { type: "teardrop2" },
  { type: "rose-block" },
  { type: "photo", photoIdx: 4 },
  { type: "square" },
  { type: "circle" },
  { type: "photo", photoIdx: 5 },
  { type: "photo", photoIdx: 6 },
  { type: "square" },
  { type: "teardrop1" },
  { type: "rose-block" },

  // Row 3
  { type: "rose-block" },
  { type: "square" },
  { type: "photo", photoIdx: 7 },
  { type: "square" },
  { type: "photo", photoIdx: 8 },
  { type: "circle" },
  { type: "square" },
  { type: "photo", photoIdx: 9 },
  { type: "circle" },
  { type: "photo", photoIdx: 10 },
  { type: "square" },

  // Row 4
  { type: "square" },
  { type: "photo", photoIdx: 11 },
  { type: "photo", photoIdx: 12 },
  { type: "circle" },
  { type: "square" },
  { type: "rose-block" },
  { type: "photo", photoIdx: 13 },
  { type: "teardrop2" },
  { type: "photo", photoIdx: 14 },
  { type: "square" },
  { type: "circle" },

  // Row 5
  { type: "photo", photoIdx: 15 },
  { type: "teardrop1" },
  { type: "photo", photoIdx: 16 },
  { type: "photo", photoIdx: 0 },
  { type: "square" },
  { type: "circle" },
  { type: "photo", photoIdx: 1 },
  { type: "teardrop1" },
  { type: "photo", photoIdx: 2 },
  { type: "square" },
  { type: "rose-block" },
];

export function CommunityJoinSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#030303] text-white relative overflow-hidden">
      {/* Decorative top-left curly arrow */}
      <svg
        className="absolute top-8 left-10 w-20 h-20 text-zinc-700 pointer-events-none hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 30 10 C 60 0, 80 40, 50 50 C 30 60, 20 20, 50 25 C 70 30, 85 60, 80 85"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 70 75 L 80 85 L 90 75"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Decorative bottom-right curly arrow */}
      <svg
        className="absolute bottom-8 right-10 w-24 h-24 text-zinc-700 pointer-events-none hidden md:block rotate-12"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 20 80 C 10 50, 40 20, 60 40 C 75 55, 45 75, 35 50 C 30 30, 60 10, 85 20"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 75 12 L 85 20 L 80 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10">
        
        {/* Outer Container with relative position for floating overlay */}
        <div className="relative w-full py-8 md:py-12 flex items-center justify-center">

          {/* Background Grid Mosaic Wall */}
          <div className="w-full grid grid-cols-5 sm:grid-cols-8 md:grid-cols-11 gap-2.5 sm:gap-3.5 opacity-80 select-none pointer-events-none">
            {gridTiles.map((tile, i) => {
              if (tile.type === "photo" && tile.photoIdx !== undefined) {
                const photoSrc = clientPhotos[tile.photoIdx % clientPhotos.length];
                return (
                  <div
                    key={i}
                    className="w-full aspect-square rounded-2xl overflow-hidden bg-zinc-900/80 border border-white/10 relative shadow-md"
                  >
                    <Image
                      src={photoSrc}
                      alt="Client headshot"
                      fill
                      className="object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                );
              }

              if (tile.type === "circle") {
                return (
                  <div
                    key={i}
                    className="w-full aspect-square rounded-full bg-zinc-800/40 border border-white/5"
                  />
                );
              }

              if (tile.type === "teardrop1") {
                return (
                  <div
                    key={i}
                    className="w-full aspect-square rounded-tl-3xl rounded-br-3xl bg-zinc-900/60 border border-white/5"
                  />
                );
              }

              if (tile.type === "teardrop2") {
                return (
                  <div
                    key={i}
                    className="w-full aspect-square rounded-tr-3xl rounded-bl-3xl bg-rose-950/30 border border-rose-500/20"
                  />
                );
              }

              if (tile.type === "rose-block") {
                return (
                  <div
                    key={i}
                    className="w-full aspect-square rounded-2xl bg-gradient-to-br from-rose-900/50 to-red-950/40 border border-rose-500/30"
                  />
                );
              }

              // Default square
              return (
                <div
                  key={i}
                  className="w-full aspect-square rounded-2xl bg-zinc-900/30 border border-white/5"
                />
              );
            })}
          </div>

          {/* Floating Center Overlay Card */}
          <div className="absolute inset-0 flex items-center justify-center p-4 z-20 pointer-events-auto">
            <Reveal>
              <div className="bg-white text-black max-w-2xl w-full rounded-3xl p-8 sm:p-12 md:p-14 text-center shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-white/20 relative overflow-hidden">
                
                {/* Hand-drawn accent note above title */}
                <div className="inline-flex items-center gap-1.5 mb-2 relative">
                  <span className="font-serif italic text-rose-600 text-sm sm:text-base font-semibold transform -rotate-6 block">
                    ~ trusted worldwide ~
                  </span>
                  <svg
                    className="w-6 h-6 text-rose-500 -ml-1 transform rotate-12"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M 10 10 Q 25 5, 30 25 M 30 25 L 22 20 M 30 25 L 25 32"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight mb-4 font-sans">
                  Join 100+ enterprise clients
                </h2>

                {/* Subtitle */}
                {/* <p className="text-zinc-600 text-base sm:text-lg font-medium leading-relaxed max-w-lg mx-auto mb-8">
                  who transform their cloud architecture, DevOps automation, and AI capabilities with Devopstrio
                </p> */}

                {/* CTA Button */}
                {/* <div className="flex justify-center">
                  <Link
                    href="/contact#contact-form"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase bg-black hover:bg-rose-600 text-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-105"
                  >
                    Schedule a Consultation
                  </Link>
                </div> */}

              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
