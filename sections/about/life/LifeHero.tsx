"use client";

import React from "react";
import { motion } from "framer-motion";

const movieImages = [
  "/assets/About-page/life-at-devopstrio/movie/award-1st.png",
  "/assets/About-page/life-at-devopstrio/movie/feb-july-dinner.png",
  "/assets/About-page/life-at-devopstrio/movie/saraswathi-1st.png",
  "/assets/About-page/life-at-devopstrio/movie/award-2nd-1.png",
  "/assets/About-page/life-at-devopstrio/movie/new-year-game-1st.png",
  "/assets/About-page/life-at-devopstrio/movie/saraswathi-2nd.png",
  "/assets/About-page/life-at-devopstrio/movie/award-3rd-1.png",
  "/assets/About-page/life-at-devopstrio/movie/new-year-poojai-3rd.png",
  "/assets/About-page/life-at-devopstrio/movie/saraswathi-3rd.png",
  "/assets/About-page/life-at-devopstrio/movie/award4th.png",
  "/assets/About-page/life-at-devopstrio/movie/image-2.png",
];

// Duplicate list for infinite smooth loop without any gap
const infiniteMovieTrack = [...movieImages, ...movieImages];

export const LifeHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-end justify-center overflow-hidden font-sans select-none pb-16 sm:pb-24 lg:pb-28">
      
      {/* Video-like Smooth Left-to-Right Continuous Scroll Movie Reel Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-85">
        <motion.div
          className="flex h-full w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          {infiniteMovieTrack.map((src, index) => (
            <div
              key={index}
              className="relative h-full w-[85vw] sm:w-[65vw] md:w-[50vw] lg:w-[45vw] shrink-0 border-r border-black/40 overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Life at Devopstrio frame ${index + 1}`}
                className="w-full h-full object-cover object-center filter brightness-105 contrast-105 scale-[1.01]"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dark Gradient Overlays for Smooth Contrast & Navbar Blend */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-56 sm:h-72 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-72 sm:h-96 bg-gradient-to-t from-black via-black/85 via-50% to-transparent z-10 pointer-events-none" />

      {/* Hero Content (Positioned at Down / Bottom Area) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-100 max-w-4xl mx-auto leading-relaxed drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)] font-sans tracking-tight">
          We don&apos;t just celebrate milestones — we cherish every step of our journey. So happy to share our life, our culture, and the vibrant moments we build together with <span className="text-rose-500 font-bold">heart</span>.
        </p>
      </div>
    </section>
  );
};

export default LifeHero;
