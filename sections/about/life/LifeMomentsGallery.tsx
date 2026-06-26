"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Team Celebrations", "Hackathons", "Learning Sessions", "Community Impact", "Awards"];

const initialImages = [
  { src: "/images/life/team_hero.png", category: "Team Celebrations", year: "2026", title: "Office Inauguration" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", category: "Learning Sessions", year: "2026", title: "Tech Talk Masterclass" },
  { src: "/images/life/hackathon.png", category: "Hackathons", year: "2026", title: "Techspira Hackathon" },
  { src: "/images/life/awards.png", category: "Awards", year: "2025", title: "Annual Excellence Awards" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", category: "Community Impact", year: "2026", title: "Green Drive CSR" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", category: "Team Celebrations", year: "2026", title: "Team Outing & Offsite" },
  
  // Additional items loaded when clicking "Load More"
  { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800", category: "Learning Sessions", year: "2026", title: "AI & ML Workshop" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800", category: "Hackathons", year: "2026", title: "Innovate Hack" },
  { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800", category: "Team Celebrations", year: "2025", title: "Christmas & New Year Bash" },
  { src: "https://images.unsplash.com/photo-1505232458627-539c97b84a6a?auto=format&fit=crop&q=80&w=800", category: "Community Impact", year: "2026", title: "Charity Marathon" },
  { src: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800", category: "Learning Sessions", year: "2026", title: "Cloud Architecture Masterclass" },
  { src: "https://images.unsplash.com/photo-1516649791333-9a3b83fa670a?auto=format&fit=crop&q=80&w=800", category: "Awards", year: "2025", title: "Customer Success Awards" },
];

export const LifeMomentsGallery = () => {
  const [images, setImages] = useState<any[]>(initialImages);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        if (Array.isArray(data)) {
          setImages(data);
        }
      } catch (err) {
        console.error("Failed to load events, using fallback", err);
      }
    };
    fetchEvents();
  }, []);

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const displayedImages = filteredImages.slice(0, visibleCount);
  const hasMore = filteredImages.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredImages.length));
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(6); // reset limit when category changes
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3"
          >
            Events
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-sm sm:text-base font-medium"
          >
            Discover the latest events hosted by Devopstrio
          </motion.p>
          
          {/* Scrollable Filter Pill Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <div className="inline-flex items-center gap-1.5 p-1.5 bg-zinc-950/40 border border-zinc-900 rounded-full backdrop-blur-md max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shadow-2xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat 
                    ? "bg-white text-black shadow-lg" 
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedImages.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                key={`${item.src}-${idx}`}
                className="bg-white p-3 rounded-[2rem] border border-zinc-200/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-500 group relative cursor-pointer"
              >
                <div className="relative aspect-[16/10] w-full rounded-[1.5rem] overflow-hidden bg-zinc-100">
                  {/* Background Image */}
                  <Image 
                    src={item.src} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized={item.src.startsWith('http')}
                  />
                  
                  {/* Premium Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-6 z-10 text-white">
                    {/* Top Section: Year */}
                    <div className="text-right transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-2xl md:text-3xl font-black tracking-widest text-rose-500 select-none">
                        {item.year}
                      </span>
                    </div>

                    {/* Bottom Section: Details */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-rose-400 text-[10px] font-bold tracking-widest uppercase mb-1 block">
                        {item.category}
                      </span>
                      <h4 className="text-white text-lg sm:text-xl font-bold tracking-tight">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLoadMore}
              className="px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-md"
            >
              Load More
            </motion.button>
          </div>
        )}
        
      </div>
    </section>
  );
};
