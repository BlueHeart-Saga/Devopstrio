"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Team Celebrations", "Hackathons", "Learning Sessions", "Community Impact", "Awards"];

const images = [
  { src: "/images/life/team_hero.png", category: "Team Celebrations", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", category: "Learning Sessions", span: "col-span-1 row-span-1" },
  { src: "/images/life/hackathon.png", category: "Hackathons", span: "md:col-span-2 row-span-1" },
  { src: "/images/life/awards.png", category: "Awards", span: "col-span-1 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", category: "Community Impact", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", category: "Team Celebrations", span: "md:col-span-2 row-span-1" },
];

export const LifeMomentsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Life <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#FF1744]">Moments</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                  ? "bg-red-500 text-white shadow-[0_0_15px_rgba(255,23,68,0.4)]" 
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4"
        >
          {filteredImages.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={`${item.src}-${idx}`}
              className={`relative group rounded-2xl overflow-hidden bg-zinc-900 ${item.span}`}
            >
              <Image 
                src={item.src} 
                alt={item.category} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized={item.src.startsWith('http')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-red-400 text-sm font-medium mb-1">{item.category}</span>
                <div className="w-10 h-1 bg-red-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
