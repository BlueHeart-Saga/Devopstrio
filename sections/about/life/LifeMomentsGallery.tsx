"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

export const LifeMomentsGallery = () => {
  const [events, setEvents] = useState<EventRecord[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

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
          setEvents(normalizedData.reverse());
        }
      } catch (err) {
        console.error("Failed to load events", err);
      }
    };
    fetchEvents();
  }, []);

  // Flatten the events into a single array of images for the beautiful masonry gallery
  const allImages = events.flatMap(event => 
    event.images.map((img, index) => ({
      id: `${event.id}-${index}-${img.src}`,
      src: img.src,
      title: img.tagname,
      category: event.eventName,
      year: event.year
    }))
  );

  // Extract unique categories (event names) dynamically for the filter bar
  const categories = ["All", ...Array.from(new Set(events.map(e => e.eventName)))];

  const filteredImages = activeCategory === "All" 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

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
            Discover the latest events hosted by Devopstrio. You can also read our <Link href="/insights" className="text-rose-500 hover:underline">insights & updates</Link> or view our <Link href="/careers" className="text-rose-500 hover:underline">open career positions</Link>.
          </motion.p>
          
          {/* Scrollable Filter Pill Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            {categories.length > 1 && (
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
            )}
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
                key={item.id}
                className="bg-white p-3 rounded-[2rem] border border-zinc-200/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:scale-[1.02] transition-all duration-500 group relative cursor-pointer"
              >
                <div className="relative aspect-[16/10] w-full rounded-[1.5rem] overflow-hidden bg-zinc-100">
                  {/* Background Image */}
                  <Image 
                    src={item.src} 
                    alt={item.title || "Event Image"} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized={item.src.startsWith('http') || item.src.startsWith("/")}
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

        {displayedImages.length === 0 && (
          <div className="text-center py-24 text-zinc-500 font-medium">
            No events found. Check the admin dashboard to add events.
          </div>
        )}

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
