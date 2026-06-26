"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const locations = [
  {
    region: "United Kingdom",
    flag: "🇬🇧",
    badge: "HQ",
    name: "Devopstrio Limited",
    address: "128 City Road, London, EC1V 2NJ",
    timezone: "GMT / BST",
    utc: "UTC+0 / UTC+1",
    highlight: true,
  },
  {
    region: "United States",
    flag: "🇺🇸",
    badge: "US",
    name: "Devopstrio Inc.",
    address: "522 Aventura Dr, Mount Juliet, Tennessee 37122",
    timezone: "CST / CDT",
    utc: "UTC-6 / UTC-5",
    highlight: false,
  },
  {
    region: "India — Bengaluru",
    flag: "🇮🇳",
    badge: "IN",
    name: "Devopstrio Engineering Hub",
    address: "Embassy Golf Links Business Park, Bengaluru, Karnataka",
    timezone: "IST",
    utc: "UTC+5:30",
    highlight: false,
  },
  {
    region: "India — Chennai",
    flag: "🇮🇳",
    badge: "IN",
    name: "Devopstrio Delivery Centre",
    address: "Primus Building, Door No. SP-7A, Chennai, Tamil Nadu",
    timezone: "IST",
    utc: "UTC+5:30",
    highlight: false,
  },
  {
    region: "India — Thoothukudi",
    flag: "🇮🇳",
    badge: "IN",
    name: "Devopstrio Operations",
    address: "Rajeev Nagar, Pasuvanthanai, Thoothukudi, Tamil Nadu",
    timezone: "IST",
    utc: "UTC+5:30",
    highlight: false,
  },
];

export const GlobalSupportNetwork = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative overflow-hidden">
      {/* decorative */}
      <div className="absolute -right-40 top-0 w-96 h-96 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute -left-40 bottom-0 w-96 h-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
          >
            Global Network
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
          >
            Global Delivery &amp; <span className="text-rose-500">Support Locations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-xl mx-auto"
          >
            Follow-the-sun support model with delivery centres across 3 continents.
          </motion.p>
        </div>

        {/* World map SVG placeholder with dots */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full bg-zinc-900/30 border border-zinc-800 rounded-3xl overflow-hidden mb-10 h-48 md:h-64"
        >
          {/* Stylized world map background using CSS */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 900 440" className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              {/* Rough simplified world landmass shapes */}
              <ellipse cx="140" cy="200" rx="80" ry="120" fill="#444" />
              <ellipse cx="230" cy="220" rx="40" ry="80" fill="#444" />
              <ellipse cx="360" cy="160" rx="100" ry="70" fill="#444" />
              <ellipse cx="460" cy="220" rx="50" ry="100" fill="#444" />
              <ellipse cx="600" cy="180" rx="120" ry="80" fill="#444" />
              <ellipse cx="730" cy="190" rx="60" ry="70" fill="#444" />
              <ellipse cx="820" cy="240" rx="40" ry="50" fill="#444" />
              <ellipse cx="550" cy="320" rx="30" ry="50" fill="#444" />
            </svg>

            {/* UK dot */}
            <div className="absolute" style={{ top: "25%", left: "35%" }}>
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.8)]" />
              </span>
            </div>
            {/* US dot */}
            <div className="absolute" style={{ top: "35%", left: "19%" }}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-40" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-zinc-300 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              </span>
            </div>
            {/* India dot */}
            <div className="absolute" style={{ top: "42%", left: "62%" }}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-40" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-zinc-300 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              </span>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-6 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-500 inline-block" /> Headquarters</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-zinc-300 inline-block" /> Delivery Centre</span>
          </div>
        </motion.div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className={`relative group bg-zinc-900/40 border rounded-2xl p-7 overflow-hidden transition-all duration-300
                ${loc.highlight
                  ? "border-red-500/40 bg-red-500/5 hover:border-red-500/70"
                  : "border-zinc-800 hover:border-zinc-600"}`}
            >
              {loc.highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/8 to-transparent pointer-events-none" />
              )}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{loc.flag}</span>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full border ${loc.highlight ? "border-red-500/40 text-red-400 bg-red-500/10" : "border-zinc-700 text-zinc-400 bg-zinc-800"}`}>
                      {loc.badge}
                    </span>
                    {loc.highlight && (
                      <span className="text-xs font-bold text-red-400 tracking-widest uppercase">Headquarters</span>
                    )}
                  </div>
                </div>

                <h3 className="text-white font-bold text-base mb-1">{loc.name}</h3>
                <p className="text-zinc-500 text-sm mb-1">{loc.region}</p>

                <div className="flex items-start gap-2 text-zinc-400 text-sm mt-4">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-zinc-600" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 text-sm mt-2">
                  <Clock className="w-4 h-4 shrink-0 text-zinc-600" />
                  <span>{loc.timezone} <span className="text-zinc-600">({loc.utc})</span></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
