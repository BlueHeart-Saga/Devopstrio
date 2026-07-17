"use client";

import React from "react";
import Image from "next/image";

interface CurvedCarouselProps {
  images: string[];
}

export function CurvedCarousel({ images }: CurvedCarouselProps) {
  // We duplicate the images to create a seamless infinite loop if there are too few,
  // but with 10+ images, we can just map them around the 360-degree cylinder.
  const radius = 600; // translateZ distance

  return (
    <div className="relative w-full h-[250px] sm:h-[320px] overflow-hidden flex items-center justify-center [perspective:1200px] mt-8">
      {/* Center Laser/Glow Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_4px_rgba(52,211,153,0.6)] z-20 pointer-events-none mix-blend-screen" />
      
      {/* Shadow overlay to fade edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-[#0B0B0B] z-10 pointer-events-none" />

      {/* 3D Spinner */}
      <div 
        className="relative w-[180px] h-[120px] sm:w-[260px] sm:h-[160px] [transform-style:preserve-3d] animate-[spin-cylinder_40s_linear_infinite]"
      >
        {images.map((src, idx) => {
          const angle = (360 / images.length) * idx;
          return (
            <div
              key={idx}
              className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-xl border-2 border-zinc-800/80 bg-zinc-950 transition-all duration-300 hover:border-emerald-500/50"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
              }}
            >
              {/* Grayscale filter with color on hover */}
              <div className="relative w-full h-full group">
                <Image
                  src={src}
                  alt={`Carousel image ${idx}`}
                  fill
                  className="object-cover opacity-60 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes spin-cylinder {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(-360deg);
          }
        }
      `}</style>
    </div>
  );
}
