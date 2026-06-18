"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { TransformedPost } from "@/lib/insightsApi";

interface CategoryFeaturedProps {
  posts: TransformedPost[];
  categorySlug: string;
}

export function CategoryFeatured({ posts, categorySlug }: CategoryFeaturedProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance the carousel every 6 seconds
  useEffect(() => {
    if (posts.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % posts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [posts.length]);

  if (!posts || posts.length === 0) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % posts.length);
  };

  const N = posts.length;

  return (
    <section className="py-12 md:py-16 bg-black overflow-hidden select-none">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-center">
        
        {/* Header Block */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              FEATURED PUBLICATION
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Featured <span className="text-rose-500">Highlight</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Discover our most impactful and popular stories curated just for you.
            </p>
          </div>
        </Reveal>

        {/* Carousel Container */}
        <div className="relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[500px] py-6 overflow-visible">
          
          {/* Navigation Arrow Left */}
          {N > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 md:left-4 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-zinc-900 shadow-xl hover:bg-zinc-100 active:scale-95 flex items-center justify-center transition-all duration-200 border border-zinc-200/20"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} className="stroke-[2.5]" />
            </button>
          )}

          {/* Cards Frame */}
          <div className="relative w-full max-w-[640px] aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center overflow-visible">
            {posts.map((post, idx) => {
              // Calculate shortest modular distance for 3D stack wrapping
              let offset = idx - activeIndex;
              if (offset < -N / 2) offset += N;
              if (offset > N / 2) offset -= N;

              const isActive = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              // Only render center, left, and right cards for 3D stack
              const isVisible = isActive || isLeft || isRight;

              if (!isVisible && N > 3) return null;

              // Motion configuration mapping
              let xPosition = "0%";
              if (offset === -1) xPosition = "-38%";
              if (offset === 1) xPosition = "38%";
              if (offset < -1) xPosition = "-75%";
              if (offset > 1) xPosition = "75%";

              return (
                <motion.div
                  key={post.id}
                  style={{
                    originY: 0.5,
                  }}
                  animate={{
                    x: xPosition,
                    scale: isActive ? 1.0 : 0.82,
                    opacity: isActive ? 1 : 0.45,
                    zIndex: isActive ? 30 : 20,
                    filter: isActive ? "blur(0px)" : "blur(2.5px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 28,
                  }}
                  className={`absolute w-full h-full rounded-[32px] overflow-hidden border transition-colors duration-300 ${
                    isActive
                      ? "border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] pointer-events-auto cursor-default"
                      : "border-white/5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] pointer-events-none"
                  }`}
                >
                  {/* Card Background Image */}
                  <div className="absolute inset-0 bg-zinc-950 z-0">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt=""
                        className="w-full h-full object-cover select-none pointer-events-none opacity-90 transition-transform duration-700 hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-tr from-rose-950/20 to-purple-950/20 flex items-center justify-center">
                        <span className="text-rose-500/20 font-bold uppercase tracking-wider text-[10px]">Devopstrio</span>
                      </div>
                    )}
                    {/* Dark gradient overlay for content contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none z-10" />
                  </div>

                  {/* Card Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 flex flex-col items-start text-left z-20">
                    
                    {/* Tags Badges Row */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {/* Primary Category Tag */}
                      <span className="px-3 py-1 rounded-full text-[9px] font-bold bg-[#E11D48] text-white uppercase tracking-wider shadow-sm">
                        {post.category.name}
                      </span>
                      {/* Secondary Tags */}
                      {post.tags &&
                        post.tags.slice(0, 2).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-full text-[9px] font-bold bg-white/10 border border-white/10 text-white uppercase tracking-wider backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>

                    {/* Metadata Row */}
                    <div className="flex items-center gap-4 text-[10px] text-zinc-300 font-mono mb-4">
                      <span className="flex items-center gap-1.5">
                        <Clock size={11} className="text-rose-500" />
                        {post.readTime} min read
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} className="text-rose-500" />
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-6 leading-snug line-clamp-2 drop-shadow-md">
                      {post.title}
                    </h3>

                    {/* CTA Button */}
                    {isActive ? (
                      <Link
                        href={`/insights/${categorySlug}/${post.id}`}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-[#E11D48] hover:bg-rose-600 text-white transition-all duration-300 shadow-[0_4px_15px_rgba(225,29,72,0.25)] hover:shadow-[0_4px_25px_rgba(225,29,72,0.45)] active:scale-98"
                      >
                        Read Article
                        <span className="ml-1.5">→</span>
                      </Link>
                    ) : (
                      <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-white/5 border border-white/10 text-white opacity-40">
                        Read Article
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrow Right */}
          {N > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-0 md:right-4 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-zinc-900 shadow-xl hover:bg-zinc-100 active:scale-95 flex items-center justify-center transition-all duration-200 border border-zinc-200/20"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} className="stroke-[2.5]" />
            </button>
          )}

        </div>
      </div>
    </section>
  );
}
