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
    tagline: "Strategic Leadership. Enterprise Governance. Global Partnerships.",
  },
  {
    id: "bengaluru-corporate-office",
    city: "Bengaluru",
    type: "Corporate Office",
    country: "India",
    address: "Embassy Golf Links Business Park, Bengaluru, Karnataka-560071, India",
    src: "/assets/About-page/building/banagaluru.png",
    alt: "Devopstrio Bengaluru Corporate Office",
    heading: (
      <>
        Bengaluru <span className="text-rose-500">(Corporate Office)</span>
      </>
    ),
    tagline: "Leading Strategy. Accelerating Technology. Enabling Global Growth.",
  },
  {
    id: "thoothukudi-innovation-hub",
    city: "Thoothukudi",
    type: "Innovation Hub",
    country: "India",
    address: "4/ 367, Rajeev Colony, Pasuvanthanai, 628718 Thoothukudi, Tamilnadu, IN",
    src: "/assets/About-page/building/thoothukudi.png",
    alt: "Devopstrio Thoothukudi Innovation Hub",
    heading: (
      <>
        Thoothukudi <span className="text-rose-500">(Innovation Hub)</span>
      </>
    ),
    tagline: "Empowering Talent. Accelerating Innovation. Creating Global Impact.",
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
    tagline: "North America Operations & Real-Time Client Collaboration.",
  },
  {
    id: "chennai-operations-center",
    city: "Chennai",
    type: "Technology & Operations Center",
    country: "India",
    address: "Ground Floor, Primus Building, Door No. SP – 7A, Guindy Industrial Estate, SIDCO Industrial Estate, Chennai 600032",
    src: "/assets/About-page/building/team2.png",
    alt: "Devopstrio Chennai Technology & Operations Center",
    heading: (
      <>
        Chennai <span className="text-rose-500">(Technology & Operations Center)</span>
      </>
    ),
    tagline: "24/7 Cloud Architecture & Security Operations.",
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
    tagline: "Connecting Global Expertise. Supporting Innovation. Delivering Excellence.",
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

  // Calibrated scroll-controlled calculations for 6 slides:
  // Each slide enters from the bottom (100% -> 0%) and moves fully to the top end (0% -> -100%) as the next slide enters
  const getSlideTransforms = (idx: number) => {
    const enterStart = idx === 0 ? 0 : 0.08 + (idx - 1) * 0.17;
    const enterEnd = idx === 0 ? 0 : enterStart + 0.14;
    
    const exitStart = 0.08 + idx * 0.17;
    const exitEnd = exitStart + 0.14;

    let slideY = 0;

    if (idx > 0) {
      if (scrollProgress <= enterStart) {
        slideY = 100;
      } else if (scrollProgress < enterEnd) {
        const enterProgress = (scrollProgress - enterStart) / (enterEnd - enterStart);
        slideY = (1 - enterProgress) * 100;
      } else {
        slideY = 0;
      }
    }

    if (idx < locationSlides.length - 1) {
      if (scrollProgress > exitStart) {
        if (scrollProgress >= exitEnd) {
          slideY = -70;
        } else {
          const exitProgress = (scrollProgress - exitStart) / (exitEnd - exitStart);
          slideY = -exitProgress * 70;
        }
      }
    }

    // Scroll-controlled Text Motion (Translate Y in px and Opacity)
    let textY = 0;
    let textOpacity = 1;

    if (idx > 0 && scrollProgress < enterEnd) {
      // Entering from bottom
      if (scrollProgress <= enterStart) {
        textY = 60;
        textOpacity = 0;
      } else {
        const enterProgress = (scrollProgress - enterStart) / (enterEnd - enterStart);
        textY = (1 - enterProgress) * 60;
        textOpacity = enterProgress;
      }
    }

    if (idx < locationSlides.length - 1 && scrollProgress > exitStart) {
      // Exiting towards top
      if (scrollProgress >= exitEnd) {
        textY = -120;
        textOpacity = 0;
      } else {
        const exitProgress = (scrollProgress - exitStart) / (exitEnd - exitStart);
        textY = -exitProgress * 120;
        textOpacity = 1 - exitProgress;
      }
    }

    return {
      slideY,
      textY,
      textOpacity: Math.max(0, Math.min(1, textOpacity)),
    };
  };

  const activeIndex =
    scrollProgress < 0.15
      ? 0
      : scrollProgress < 0.32
      ? 1
      : scrollProgress < 0.49
      ? 2
      : scrollProgress < 0.66
      ? 3
      : scrollProgress < 0.83
      ? 4
      : 5;

  return (
    <section ref={containerRef} className="relative w-full h-[600vh] bg-black text-white font-sans">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden select-none">
        
        {/* Layered Scroll-Controlled Background Images + Synchronized Headings */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {locationSlides.map((slide, idx) => {
            const { slideY, textY, textOpacity } = getSlideTransforms(idx);
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

                {/* Slide Heading - Bottom Left Positioned with Scroll Parallax */}
                <div 
                  className="absolute inset-x-0 bottom-10 sm:bottom-14 lg:bottom-16 z-20 px-6 sm:px-8 lg:px-12 pointer-events-none"
                  style={{
                    transform: `translateY(${textY}px)`,
                    opacity: textOpacity,
                    willChange: "transform, opacity",
                  }}
                >
                  <div className="max-w-7xl mx-auto w-full text-left">
                    <h1
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-tight text-white select-text max-w-5xl mb-2"
                      style={{
                        textShadow:
                          "0 4px 30px rgba(0, 0, 0, 0.95), 0 2px 10px rgba(0, 0, 0, 0.9), 0 0 50px rgba(0, 0, 0, 0.75)",
                      }}
                    >
                      {slide.heading}
                    </h1>

                    {slide.tagline && (
                      <p 
                        className="text-sm sm:text-base md:text-lg text-rose-400 font-medium tracking-wide mb-2 select-text max-w-2xl"
                        style={{
                          textShadow: "0 2px 15px rgba(0, 0, 0, 0.9)",
                        }}
                      >
                        {slide.tagline}
                      </p>
                    )}

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
