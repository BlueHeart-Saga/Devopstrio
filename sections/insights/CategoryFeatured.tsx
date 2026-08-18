"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
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

  const post = posts[activeIndex];
  const getFallbackImage = (i: number) => {
    const images = [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    ];
    return images[i % images.length];
  };

  return (
    <section className="py-12 md:py-16 bg-[#030303] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        
        {/* Header Block matching GIF style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
              Recent Post ({String(posts.length).padStart(2, '0')})
            </h2>
          </Reveal>

          {/* Navigation Arrows */}
          {posts.length > 1 && (
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-zinc-800 bg-[#0a0a0a] text-zinc-400 hover:text-white hover:border-zinc-600 flex items-center justify-center transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-zinc-800 bg-[#0a0a0a] text-zinc-400 hover:text-white hover:border-zinc-600 flex items-center justify-center transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Carousel Container */}
        <div className="relative w-full min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex flex-col md:flex-row items-center relative"
            >
              
              {/* Left Image Container */}
              <div className="w-full md:w-[60%] h-[300px] md:h-[480px] rounded-[32px] overflow-hidden relative shadow-2xl z-0">
                <img 
                  src={post.image || getFallbackImage(activeIndex)} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-105" 
                />
              </div>
              
              {/* Right Overlapping Content Card */}
              <div className="w-full md:w-[45%] p-8 lg:p-12 flex flex-col bg-[#0a0a0a] border border-zinc-800 rounded-[32px] md:-ml-16 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] mt-[-60px] md:mt-0 relative group">
                
                {/* Meta Row */}
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300 font-medium mb-6">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Calendar size={14} className="text-rose-500" />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Clock size={14} className="text-rose-500" />
                    {post.readTime} min read
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-5 leading-[1.25] group-hover:text-rose-500 transition-colors line-clamp-3">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                {/* <p className="text-base md:text-lg text-zinc-300 leading-relaxed mb-10 line-clamp-4 font-normal">
                  {post.excerpt}
                </p> */}
                
                {/* Footer Row */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 rounded-full border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-zinc-200 bg-zinc-900/60">
                      {post.category.name}
                    </span>
                    {post.tags && post.tags.slice(0, 2).map((tag, tIdx) => (
                      <span key={tIdx} className="px-4 py-1.5 rounded-full border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-zinc-200 bg-zinc-900/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/insights/${categorySlug}/${post.id}`} 
                    className="w-12 h-12 shrink-0 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-rose-600 group-hover:border-rose-500 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]"
                  >
                    <ArrowRight size={18} className="text-white group-hover:-rotate-45 transition-transform duration-300" />
                  </Link>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
