"use client";

import React, { useState, useEffect, useRef } from "react";

const heroSlides = [
  {
    src: "/assets/About-page/leadership/hero.png",
    alt: "Life at Devopstrio - Innovation & Leadership",
    heading: (
      <>
        Where <span className="text-rose-500">Innovation</span> Meets Opportunity
      </>
    ),
  },
  {
    src: "/assets/About-page/leader/Picture4.png",
    alt: "Life at Devopstrio - People and Passion",
    heading: (
      <>
        Built on Passion, <span className="text-rose-500">Driven by People</span>
      </>
    ),
  },
  {
    src: "/assets/About-page/leader/Picture12.png",
    alt: "Life at Devopstrio - Leadership & Teamwork",
    heading: (
      <>
        Leading with Vision, <span className="text-rose-500">Empowering Teams</span>
      </>
    ),
  },
  {
    src: "/assets/About-page/leader/Picture18.png",
    alt: "Life at Devopstrio - Innovation & Impact",
    heading: (
      <>
        Innovating Together, <span className="text-rose-500">Shaping the Future</span>
      </>
    ),
  },
];

export const LifeHero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      if (totalScrollableHeight <= 0) return;

      const progress = Math.min(
        Math.max(-rect.top / totalScrollableHeight, 0),
        1
      );

      rafId = requestAnimationFrame(() => {
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Compute slide-up translation for each image based on scroll progress (4 slides)
  const getSlideY = (idx: number) => {
    if (idx === 0) return 0;
    if (idx === 1) {
      // Slide 2 enters between 0.14 and 0.38
      if (scrollProgress <= 0.14) return 100;
      if (scrollProgress >= 0.38) return 0;
      return ((0.38 - scrollProgress) / 0.24) * 100;
    }
    if (idx === 2) {
      // Slide 3 enters between 0.42 and 0.66
      if (scrollProgress <= 0.42) return 100;
      if (scrollProgress >= 0.66) return 0;
      return ((0.66 - scrollProgress) / 0.24) * 100;
    }
    if (idx === 3) {
      // Slide 4 enters between 0.70 and 0.88 (stays fully settled from 0.88 to 1.00)
      if (scrollProgress <= 0.70) return 100;
      if (scrollProgress >= 0.88) return 0;
      return ((0.88 - scrollProgress) / 0.18) * 100;
    }
    return 0;
  };

  const activeIndex =
    scrollProgress < 0.28 ? 0 : scrollProgress < 0.56 ? 1 : scrollProgress < 0.80 ? 2 : 3;

  return (
    <section ref={containerRef} className="relative w-full h-[420vh] bg-black text-white">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden select-none">
        {/* Layered Scroll-Controlled Background Images + Synchronized Headings */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroSlides.map((slide, idx) => {
            const slideY = getSlideY(idx);
            const zIndex = idx === 0 ? 10 : idx === 1 ? 20 : idx === 2 ? 30 : 40;

            return (
              <div
                key={slide.src}
                className="absolute inset-0 overflow-hidden"
                style={{
                  transform: `translateY(${slideY}%)`,
                  zIndex,
                  willChange: "transform",
                  boxShadow: idx > 0 && slideY < 99 && slideY > 0 ? "0 -35px 70px rgba(0,0,0,0.95)" : "none",
                }}
              >
                {/* Background Image */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center scale-[1.02]"
                />

                {/* Top Fade for smooth navbar blend and clean text contrast */}
                <div className="absolute inset-x-0 top-0 h-56 sm:h-72 md:h-80 bg-gradient-to-b from-black/85 via-black/45 to-transparent z-10 pointer-events-none" />

                {/* Deep Bottom Black Shadow */}
                <div className="absolute inset-x-0 bottom-0 h-56 sm:h-72 md:h-96 bg-gradient-to-t from-black via-black/85 via-40% to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

                {/* Slide Heading - Bound directly to this slide so it moves in sync */}
                <div
                  className={`absolute inset-x-0 z-20 px-4 sm:px-8 md:px-12 flex justify-center text-center pointer-events-none ${
                    idx === 0
                      ? "top-28 sm:top-32 md:top-36 lg:top-40"
                      : "top-14 sm:top-16 md:top-20 lg:top-24"
                  }`}
                >
                  <div className="max-w-7xl mx-auto w-full">
                    <h1
                      className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-tight text-white whitespace-normal sm:whitespace-nowrap select-text"
                      style={{
                        textShadow:
                          "0 4px 30px rgba(0, 0, 0, 0.95), 0 2px 10px rgba(0, 0, 0, 0.9), 0 0 50px rgba(0, 0, 0, 0.75)",
                      }}
                    >
                      {slide.heading}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Image Step Indicators */}
        <div className="absolute bottom-10 right-6 sm:right-12 z-50 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10 select-none pointer-events-none">
          {heroSlides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === i ? "w-6 bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.6)]" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};









