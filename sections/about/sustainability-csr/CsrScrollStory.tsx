"use client";

import React, { useRef, useEffect, useState } from "react";

interface CsrStage {
  id: string;
  title: string;
  startProg: number;
  endProg: number;
}

const CSR_STAGES: CsrStage[] = [
  {
    id: "01",
    title: "Every change starts with a small beginning.",
    startProg: 0,
    endProg: 0.2
  },
  {
    id: "02",
    title: "Investing in people creates possibilities.",
    startProg: 0.2,
    endProg: 0.4
  },
  {
    id: "03",
    title: "Small actions create lasting progress.",
    startProg: 0.4,
    endProg: 0.6
  },
  {
    id: "04",
    title: "Technology should create value beyond business.",
    startProg: 0.6,
    endProg: 0.8
  },
  {
    id: "05",
    title: "Let's grow something better together.",
    startProg: 0.8,
    endProg: 1.0
  }
];

export function CsrScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const targetProgressRef = useRef(0);
  const smoothedProgressRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth Lerp Physics & Hardware-Accelerated Video Scrubbing Engine
  useEffect(() => {
    let animationFrameId: number;

    const renderLoop = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalScrollable = containerRef.current.offsetHeight - windowHeight;

        if (totalScrollable > 0) {
          const currentScroll = -rect.top;
          const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
          targetProgressRef.current = rawProgress;
        }
      }

      // Smooth Inertia Easing for Scroll Progress (Apple-style physics)
      const diff = targetProgressRef.current - smoothedProgressRef.current;
      smoothedProgressRef.current += diff * 0.08;

      const currentProgress = smoothedProgressRef.current;
      setScrollProgress(currentProgress);

      // Hardware-Accelerated Video Scrubbing with Seek Guard
      const video = videoRef.current;
      if (video && video.readyState >= 1 && video.duration > 0) {
        const targetTime = currentProgress * video.duration;

        // Prevent seeking conflicts if video thread is actively decoding
        if (!video.seeking && Math.abs(video.currentTime - targetTime) > 0.015) {
          if ("fastSeek" in video && typeof (video as any).fastSeek === "function") {
            try {
              (video as any).fastSeek(targetTime);
            } catch {
              video.currentTime = targetTime;
            }
          } else {
            video.currentTime = targetTime;
          }
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[650vh] bg-black text-white font-sans"
    >
      {/* Sticky Full-Screen Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10">
        
        {/* FULL SCREEN ORIGINAL PLANT GROWING VIDEO */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            src="/webp/assets/About-page/csr/Plant_growing_from_seed_1080p_202608251527.mp4"
            className="w-full h-full object-cover object-center scale-[1.01]"
          />

          {/* Bottom Dark Gradient Fade for Crisp Title Contrast */}
          <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-10" />
        </div>

        {/* WORD-BY-WORD SCROLL REVEAL TITLE AT BOTTOM-MIDDLE SIDE */}
        <div className="absolute bottom-24 sm:bottom-32 lg:bottom-36 inset-x-0 z-20 px-6 sm:px-12 lg:px-16 w-full max-w-6xl mx-auto text-center">
          {CSR_STAGES.map((stg) => {
            const isStageActive =
              scrollProgress >= stg.startProg && scrollProgress <= stg.endProg;

            // Overall stage container fade in/out calculation
            const mid = (stg.startProg + stg.endProg) / 2;
            const distFromMid = Math.abs(scrollProgress - mid);
            const halfRange = (stg.endProg - stg.startProg) / 2;
            const containerOpacity = isStageActive
              ? Math.max(0, 1 - (distFromMid / halfRange) * 0.65)
              : 0;

            if (containerOpacity <= 0.01) return null;

            // Calculate progress within this specific stage (0.0 to 1.0)
            const stageProgress = Math.max(
              0,
              Math.min(1, (scrollProgress - stg.startProg) / (stg.endProg - stg.startProg))
            );

            const words = stg.title.split(" ");

            return (
              <div
                key={stg.id}
                style={{
                  opacity: containerOpacity,
                  transform: `translateY(${(1 - containerOpacity) * 10}px)`
                }}
                className="w-full transition-all duration-300 ease-out flex justify-center"
              >
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight font-sans drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)] flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 max-w-5xl">
                  {words.map((word, wIdx) => {
                    // Reveal threshold for each word
                    const wordThreshold = wIdx / words.length;
                    const isWordLit = stageProgress >= wordThreshold * 0.85;
                    const wordAlpha = isWordLit ? 1 : 0.25;

                    return (
                      <span
                        key={wIdx}
                        style={{
                          opacity: wordAlpha,
                          transition: "opacity 0.25s ease-out, color 0.25s ease-out, text-shadow 0.25s ease-out"
                        }}
                        className={`inline-block transition-all duration-300 ${
                          isWordLit
                            ? "text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
                            : "text-zinc-500/50"
                        }`}
                      >
                        {word}
                      </span>
                    );
                  })}
                </h2>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
