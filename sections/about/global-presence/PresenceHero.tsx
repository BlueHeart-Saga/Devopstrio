"use client";

import React, { useState, useEffect, useRef } from "react";

const locationSlides = [
  {
    id: "london-head-office",
    city: "London",
    type: "Head Office",
    country: "United Kingdom",
    address: "128 City Road, London, United Kingdom EC1V 2NX",
    src: "/assets/About-page/building/london.png",
    alt: "Devopstrio London Head Office",
    heading: (
      <>
        London <span className="text-rose-500">(Head Office)</span>
      </>
    ),
  },
  {
    id: "bengaluru-corporate-office",
    city: "Bengaluru",
    type: "Corporate Office",
    country: "India",
    address: "Embassy Golf Links Business Park, Bengaluru, Karnataka-560071, India",
    src: "/assets/About-page/building/buildingtopangle.png",
    alt: "Devopstrio Bengaluru Corporate Office",
    heading: (
      <>
        Bengaluru <span className="text-rose-500">(Corporate Office)</span>
      </>
    ),
  },
  {
    id: "thoothukudi-innovation-hub",
    city: "Thoothukudi",
    type: "Innovation Hub",
    country: "India",
    address: "4/ 367, Rajeev Colony, Pasuvanthanai, 628718 Thoothukudi, Tamilnadu, IN",
    src: "/assets/About-page/building/india.png",
    alt: "Devopstrio Thoothukudi Innovation Hub",
    heading: (
      <>
        Thoothukudi <span className="text-rose-500">(Innovation Hub)</span>
      </>
    ),
  },
  {
    id: "tennessee-sub-regional",
    city: "Tennessee",
    type: "Sub-Regional Office",
    country: "United States",
    address: "522 Aventura Dr, Mt Juliet, Tennessee 37122 United States",
    src: "/assets/About-page/building/USA.png",
    alt: "Devopstrio Tennessee Sub-Regional Office",
    heading: (
      <>
        Tennessee <span className="text-rose-500">(Sub-Regional Office)</span>
      </>
    ),
  },
  
  {
    id: "chennai-operations-center",
    city: "Chennai",
    type: "Operations Center",
    country: "India",
    address: "Ground Floor, Primus Building, Door No. SP – 7A, Guindy Industrial Estate, SIDCO Industrial Estate, Chennai 600032",
    src: "/assets/About-page/building/chennai.png",
    alt: "Devopstrio Chennai Operations Center",
    heading: (
      <>
        Chennai <span className="text-rose-500">(Operations Center)</span>
      </>
    ),
  },
  
  {
    id: "london-support-office",
    city: "London",
    type: "Support Office",
    country: "United Kingdom",
    address: "167-169 Great Portland Street, 5th Floor, London, W1W 5PF",
    src: "/assets/About-page/building/officeroom.png",
    alt: "Devopstrio London Support Office",
    heading: (
      <>
        London <span className="text-rose-500">(Support Office)</span>
      </>
    ),
  },
];

export function PresenceHero() {
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

  // Compute slide-up translation for 6 location slides based on scroll progress
  const getSlideY = (idx: number) => {
    if (idx === 0) return 0;
    
    // Smooth calibrated entry & exit intervals for 6 slides
    const enterStart = 0.12 + (idx - 1) * 0.15;
    const enterEnd = enterStart + 0.14;

    if (scrollProgress <= enterStart) return 100;
    if (scrollProgress >= enterEnd) return 0;
    return ((enterEnd - scrollProgress) / (enterEnd - enterStart)) * 100;
  };

  const activeIndex =
    scrollProgress < 0.19
      ? 0
      : scrollProgress < 0.34
      ? 1
      : scrollProgress < 0.49
      ? 2
      : scrollProgress < 0.64
      ? 3
      : scrollProgress < 0.79
      ? 4
      : 5;

  return (
    <section ref={containerRef} className="relative w-full h-[600vh] bg-black text-white font-sans">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden select-none">
        
        {/* Layered Scroll-Controlled Background Images + Synchronized Headings */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {locationSlides.map((slide, idx) => {
            const slideY = getSlideY(idx);
            const zIndex = (idx + 1) * 10;

            return (
              <div
                key={slide.id}
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
                <div className="absolute inset-x-0 bottom-0 h-64 sm:h-80 md:h-[28rem] bg-gradient-to-t from-black via-black/85 via-40% to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

                {/* Slide Heading - Bottom Left Positioned */}
                <div className="absolute inset-x-0 bottom-10 sm:bottom-14 lg:bottom-16 z-20 px-6 sm:px-8 lg:px-12 pointer-events-none">
                  <div className="max-w-7xl mx-auto w-full text-left">
                    {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/15 backdrop-blur-md text-xs font-mono text-zinc-300 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      {slide.country} • {slide.type}
                    </div> */}

                    <h1
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-tight text-white select-text max-w-4xl mb-2"
                      style={{
                        textShadow:
                          "0 4px 30px rgba(0, 0, 0, 0.95), 0 2px 10px rgba(0, 0, 0, 0.9), 0 0 50px rgba(0, 0, 0, 0.75)",
                      }}
                    >
                      {slide.heading}
                    </h1>

                    <p className="text-xs sm:text-sm text-zinc-300/85 font-mono max-w-xl">
                      {slide.address}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Image Step Indicators */}
        <div className="absolute bottom-8 right-6 sm:right-12 z-50 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10 select-none pointer-events-none">
          {locationSlides.map((loc, i) => (
            <div
              key={loc.id}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === i ? "w-6 bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.6)]" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
