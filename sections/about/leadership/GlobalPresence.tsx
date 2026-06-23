"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const locations = [
  {
    flag: "🇬🇧", region: "United Kingdom", city: "London", role: "Global Headquarters",
    highlights: ["Executive Leadership", "Strategy & Sales", "Client Partnerships"],
    tz: "GMT / BST", highlight: true,
  },
  {
    flag: "🇺🇸", region: "United States", city: "Tennessee", role: "Americas Delivery",
    highlights: ["Cloud Engineering", "Platform Architecture", "Client Success"],
    tz: "CST / CDT", highlight: false,
  },
  {
    flag: "🇮🇳", region: "India", city: "Bengaluru", role: "Engineering Hub",
    highlights: ["Software Engineering", "DevOps", "AI & Data Practice"],
    tz: "IST (UTC+5:30)", highlight: false,
  },
  {
    flag: "🇮🇳", region: "India", city: "Chennai", role: "Delivery Centre",
    highlights: ["QA Engineering", "Managed Services", "Cloud Operations"],
    tz: "IST (UTC+5:30)", highlight: false,
  },
  {
    flag: "🇮🇳", region: "India", city: "Thoothukudi", role: "Operations Centre",
    highlights: ["IT Consulting", "Support Operations", "Talent Development"],
    tz: "IST (UTC+5:30)", highlight: false,
  },
];

export const GlobalPresence = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_60%,rgba(255,23,68,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
          >
            Global Presence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Globally <span className="text-[#FF1744]">Distributed</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Our global teams collaborate across regions to provide continuous delivery, support, and innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`relative group border rounded-2xl p-7 transition-all duration-300 overflow-hidden
                ${loc.highlight
                  ? "bg-red-500/5 border-red-500/30 hover:border-red-500/60"
                  : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-600"}`}
            >
              {loc.highlight && (
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
              )}

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{loc.flag}</span>
                    {loc.highlight && (
                      <span className="text-xs font-bold text-red-400 border border-red-500/30 bg-red-500/10 px-2 py-0.5 rounded-full tracking-wider uppercase">HQ</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-600">
                    <Clock className="w-3.5 h-3.5" /> {loc.tz}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-0.5">{loc.city}</h3>
                <p className="text-zinc-500 text-sm mb-1">{loc.region}</p>
                <p className="text-[#FF1744] text-xs font-medium mb-5">{loc.role}</p>

                <div className="space-y-2">
                  {loc.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                      <span className="text-zinc-400 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
