"use client";

import React from "react";

export const LifeHero = () => {
  return (
    <section className="relative w-full min-h-[75vh] sm:min-h-[85vh] bg-black text-white flex items-end justify-center overflow-hidden font-sans select-none">
      
      {/* Background Video Element - Full Clarity Original Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/webp/assets/About-page/life-at-devopstrio/movie/movieslide.mp4" type="video/mp4" />
        </video>
      </div>

    </section>
  );
};

export default LifeHero;
