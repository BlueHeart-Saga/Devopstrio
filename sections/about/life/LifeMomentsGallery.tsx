"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

type EventImage = {
  src: string;
  tagname: string;
};

type EventRecord = {
  id: string;
  eventName: string;
  year: string;
  images: EventImage[];
};

type FlattenedMoment = {
  id: string;
  src: string;
  title: string;
  category: string;
  year: string;
};

// 3D Book / Paper-Turn Animation Variants
const bookPageVariants = {
  enter: (direction: number) => ({
    transformOrigin: direction > 0 ? "left center" : "right center",
    rotateY: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.92,
    x: direction > 0 ? 120 : -120,
  }),
  center: {
    transformOrigin: "center center",
    rotateY: 0,
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction: number) => ({
    transformOrigin: direction > 0 ? "right center" : "left center",
    rotateY: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.92,
    x: direction > 0 ? -120 : 120,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const LifeMomentsGallery = () => {
  const [events, setEvents] = useState<EventRecord[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState(6);
  
  // Lightbox Modal State
  const [[selectedIndex, direction], setPage] = useState<[number | null, number]>([null, 0]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        if (Array.isArray(data)) {
          // Normalize legacy and new data seamlessly
          const normalizedData: EventRecord[] = data.map((item: any) => {
            const id = String(item.id);
            if (item.images) return { ...item, id };
            return {
              id,
              eventName: item.eventName || item.category || "Untitled Event",
              year: item.year || new Date().getFullYear().toString(),
              images: item.src ? [{ src: item.src, tagname: item.title || "" }] : []
            };
          });
          // Show newest events first
          const reversed = normalizedData.reverse();
          setEvents(reversed);
          if (reversed.length > 0) {
            setActiveCategory(reversed[0].eventName);
          }
        }
      } catch (err) {
        console.error("Failed to load events", err);
      }
    };
    fetchEvents();
  }, []);

  // Extract unique categories (event names) without "All"
  const categories = Array.from(new Set(events.map(e => e.eventName).filter(Boolean)));

  // Flatten the events into a single array of images for the gallery
  const allImages: FlattenedMoment[] = events.flatMap(event => 
    event.images.map((img, index) => ({
      id: `${event.id}-${index}-${img.src}`,
      src: img.src,
      title: img.tagname,
      category: event.eventName,
      year: event.year
    }))
  );

  const filteredImages = activeCategory 
    ? allImages.filter(img => img.category === activeCategory)
    : allImages;

  const displayedImages = filteredImages.slice(0, visibleCount);
  const hasMore = filteredImages.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredImages.length));
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  // Modal navigation handlers
  const openModal = (index: number) => {
    setPage([index, 0]);
  };

  const closeModal = () => {
    setPage([null, 0]);
  };

  const paginate = useCallback((newDirection: number) => {
    if (selectedIndex === null || filteredImages.length === 0) return;
    const nextIndex = (selectedIndex + newDirection + filteredImages.length) % filteredImages.length;
    setPage([nextIndex, newDirection]);
  }, [selectedIndex, filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    // Lock body scroll
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, paginate]);

  // Swipe drag threshold
  const handleDragEnd = (e: any, { offset, velocity }: { offset: { x: number; y: number }; velocity: { x: number; y: number } }) => {
    const swipe = offset.x;
    if (swipe < -60 || velocity.x < -400) {
      paginate(1);
    } else if (swipe > 60 || velocity.x > 400) {
      paginate(-1);
    }
  };

  const currentMoment = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  return (
    <section className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3"
          >
            Moments We <span className="text-rose-500">Share</span>
          </motion.h2>
          {/* <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-sm sm:text-base font-normal max-w-xl mx-auto"
          >
            A look back at the celebrations, collaborations, and milestones that bring our global team together.
          </motion.p> */}
        </div>

        {/* Scrollable Category Filter Pill Bar (Without "All" Tab) */}
        {categories.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 p-1.5 bg-zinc-950/70 border border-zinc-800/80 rounded-full backdrop-blur-md max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shadow-2xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat 
                    ? "bg-rose-600 text-white shadow-[0_0_20px_rgba(225,29,72,0.35)]" 
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {displayedImages.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
              key={item.id}
              onClick={() => openModal(idx)}
              className="bg-zinc-900/60 p-3 rounded-[1.75rem] border border-zinc-800/80 hover:border-rose-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(225,29,72,0.15)] hover:scale-[1.02] transition-all duration-500 group relative cursor-pointer"
            >
              <div className="relative aspect-[16/10] w-full rounded-[1.25rem] overflow-hidden bg-zinc-950">
                {/* Image */}
                <Image 
                  src={item.src} 
                  alt={item.title || item.category || "Event Image"} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized={item.src.startsWith('http') || item.src.startsWith("/")}
                />
                
                {/* Premium Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-between p-5 z-10 text-white">
                  {/* Top: Year Badge */}
                  <div className="flex justify-end">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold text-rose-400 border border-rose-500/30">
                      {item.year}
                    </span>
                  </div>

                  {/* Bottom: Title & Category */}
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-rose-400 text-[11px] font-bold tracking-widest uppercase mb-1 block">
                      {item.category}
                    </span>
                    <h4 className="text-white text-base sm:text-lg font-bold tracking-tight line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {displayedImages.length === 0 && (
          <div className="text-center py-24 flex flex-col items-center gap-4">
            <div className="text-5xl mb-2">✨</div>
            <p className="text-white text-xl font-semibold tracking-tight">Our story is still being written.</p>
            <p className="text-zinc-400 text-sm font-medium max-w-sm leading-relaxed">
              Exciting moments, milestones, and memories are on their way. Stay tuned — the best is yet to come.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleLoadMore}
              className="px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md"
            >
              Load More Moments
            </motion.button>
          </div>
        )}
        
      </div>

      {/* Book Paper-Swipe Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && currentMoment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 md:p-10 select-none"
            onClick={closeModal}
          >
            {/* Top Bar: Counter & Close Button */}
            <div 
              className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-30 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md rounded-full border border-zinc-800 text-xs font-semibold tracking-wider text-zinc-300">
                <Calendar className="w-3.5 h-3.5 text-rose-500" />
                <span>{selectedIndex + 1} / {allImages.length}</span>
                <span className="text-zinc-500">•</span>
                <span className="text-rose-400">{currentMoment.year}</span>
              </div>

              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Left Navigation Arrow */}
            {allImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(-1);
                }}
                className="absolute left-3 sm:left-6 md:left-10 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-zinc-900/80 hover:bg-rose-600 border border-zinc-800 hover:border-rose-500 flex items-center justify-center text-white transition-all duration-300 shadow-2xl hover:scale-110 pointer-events-auto"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Navigation Arrow */}
            {allImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(1);
                }}
                className="absolute right-3 sm:right-6 md:right-10 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-zinc-900/80 hover:bg-rose-600 border border-zinc-800 hover:border-rose-500 flex items-center justify-center text-white transition-all duration-300 shadow-2xl hover:scale-110 pointer-events-auto"
                aria-label="Next Page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Book Stage Container with 3D Perspective */}
            <div
              className="relative w-full max-w-4xl h-[70vh] sm:h-[78vh] flex items-center justify-center"
              style={{ perspective: 1200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentMoment.id}
                  custom={direction}
                  variants={bookPageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.5}
                  onDragEnd={handleDragEnd}
                  className="w-full h-full max-h-[72vh] flex flex-col bg-zinc-950 border border-zinc-800/90 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden cursor-grab active:cursor-grabbing relative"
                >
                  {/* Photo Display */}
                  <div className="relative w-full flex-1 bg-black overflow-hidden flex items-center justify-center">
                    <Image
                      src={currentMoment.src}
                      alt={currentMoment.title || currentMoment.category}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 896px"
                      priority
                      unoptimized={currentMoment.src.startsWith('http') || currentMoment.src.startsWith("/")}
                    />

                    {/* Subtle Book Spine Shadow Overlay */}
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Caption & Metadata Footer */}
                  <div className="p-4 sm:p-6 bg-zinc-950/95 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 z-10">
                    <div>
                      <span className="text-rose-500 text-xs font-bold tracking-widest uppercase block font-mono">
                        {currentMoment.category}
                      </span>
                      <h3 className="text-white text-base sm:text-xl font-bold tracking-tight">
                        {currentMoment.title || currentMoment.category}
                      </h3>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono tracking-wider">
                      Swipe or use arrow keys ← →
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

