"use client";
import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

interface Director {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

const directorsData: Director[] = [
  {
    id: "director-1",
    name: "Manikandan P S",
    role: "Executive Chairman",
    image: "/webp/assets/About-page/leadership/director_manikandan_ps.webp",
    bio: "Senior Executive Chairman leading strategic enterprise governance, high-level corporate advisory, and global client alignment.",
  },
  {
    id: "director-2",
    name: "Richard Brown",
    role: "Non-Executive Director",
    image: "/webp/assets/About-page/leadership/director_richard_brown.webp",
    bio: "Senior Non-Executive Director guiding enterprise architecture standards, corporate risk governance, and international expansion.",
  },
];

export const DirectorsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden font-sans">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <Reveal>
          {/* Section Heading with Reference Red/Rose Line */}
          <div className="mb-10 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3">
              Directors
            </h2>
            <div className="w-16 h-1 bg-rose-600 rounded-full" />
          </div>

          {/* 2-Column Directors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
            {directorsData.map((director, index) => (
              <motion.div
                key={director.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col bg-[#0b0b0d]/90 border border-zinc-900 hover:border-zinc-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
              >
                {/* Image Container with crisp square ratio and hover zoom */}
                <div className="relative w-full aspect-square bg-[#121214] overflow-hidden">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Director Information */}
                <div className="p-6 text-left space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-rose-400 transition-colors duration-200">
                      {director.name}
                    </h3>
                    <p className="text-sm font-medium text-rose-500 pt-0.5">
                      {director.role}
                    </p>
                  </div>
                  {director.bio && (
                    <p className="text-xs text-zinc-400 font-normal leading-relaxed pt-2">
                      {director.bio}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default DirectorsSection;
