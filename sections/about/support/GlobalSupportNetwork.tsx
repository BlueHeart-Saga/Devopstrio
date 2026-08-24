"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const locations = [
  {
    id: "london",
    city: "London",
    region: "United Kingdom",
    flag: "🇬🇧",
    badge: "HQ",
    name: "Global HQ",
    address: "128 City Road, London, EC1V 2NJ",
    timezone: "GMT / BST",
    utc: "UTC+0 / UTC+1",
    role: "Strategy & Leadership",
    highlight: true,
    x: 47.4,
    y: 37.1,
  },
  {
    id: "london-w1",
    city: "London W1",
    region: "United Kingdom",
    flag: "🇬🇧",
    badge: "UK",
    name: "Client Experience Centre",
    address: "Mayfair, London, W1",
    timezone: "GMT / BST",
    utc: "UTC+0 / UTC+1",
    role: "Enterprise Meetings",
    highlight: false,
    x: 48,
    y: 38.3,
  },
  {
    id: "tennessee",
    city: "Tennessee",
    region: "United States",
    flag: "🇺🇸",
    badge: "US",
    name: "North America Ops",
    address: "522 Aventura Dr, Mount Juliet, Tennessee 37122",
    timezone: "CST / CDT",
    utc: "UTC-6 / UTC-5",
    role: "EST Timezone Coverage",
    highlight: false,
    x: 33.6,
    y: 46.6,
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    region: "India — Bengaluru",
    flag: "🇮🇳",
    badge: "IN",
    name: "Engineering Centre",
    address: "Embassy Golf Links Business Park, Bengaluru, Karnataka",
    timezone: "IST",
    utc: "UTC+5:30",
    role: "300+ Specialists",
    highlight: false,
    x: 61.1,
    y: 58.4,
  },
  {
    id: "chennai",
    city: "Chennai",
    region: "India — Chennai",
    flag: "🇮🇳",
    badge: "IN",
    name: "Cloud & SecOps Hub",
    address: "Primus Building, Door No. SP-7A, Chennai, Tamil Nadu",
    timezone: "IST",
    utc: "UTC+5:30",
    role: "24/7 Monitoring",
    highlight: false,
    x: 61.7,
    y: 58.5,
  },
  {
    id: "thoothukudi",
    city: "Thoothukudi",
    region: "India — Thoothukudi",
    flag: "🇮🇳",
    badge: "IN",
    name: "DevOps & Automation",
    address: "Rajeev Nagar, Pasuvanthanai, Thoothukudi, Tamil Nadu",
    timezone: "IST",
    utc: "UTC+5:30",
    role: "Rapid Delivery Team",
    highlight: false,
    x: 61.5,
    y: 60,
  },
];

const defaultVisible = new Set(["london", "tennessee", "bengaluru"]);

import Link from "next/link";

export const GlobalSupportNetwork = () => {
  const [active, setActive] = useState<string | null>(null);

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
            Follow-the-sun support model with delivery centres across 3 continents. Learn more on our <Link href="/about/global-presence" className="text-rose-500 hover:underline">global presence</Link> page.
          </motion.p>
        </div>

        {/* INTERACTIVE MAP SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full mb-16"
        >
          <div className="relative w-full" style={{ paddingBottom: "38%" }}>
            <img src="/assets/Contact-page/map/image1.png"
              alt="World map showing Devopstrio office locations"
              className="absolute inset-0 w-full h-full object-contain opacity-60"
              draggable={false}
            loading="lazy" />

            {/* Dark vignette overlay at edges */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0A0A0A_100%)] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />

            {/* Location Pins */}
            {locations.map(loc => {
              const isActive = active === loc.id;
              const showLabel = isActive || defaultVisible.has(loc.id);

              return (
                <div
                  key={loc.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  onMouseEnter={() => setActive(loc.id)}
                  onMouseLeave={() => setActive(null)}
                >
                  {/* Outer pulse ring */}
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      isActive
                        ? "animate-ping bg-rose-500/30 scale-150"
                        : "bg-rose-500/15 scale-125"
                    }`}
                    style={{ width: 10, height: 10, top: -2, left: -2 }}
                  />

                  {/* Core dot */}
                  <span
                    className={`block rounded-full border transition-all duration-200 ${
                      isActive
                        ? "bg-white border-rose-500 w-3 h-3 shadow-[0_0_8px_rgba(244,63,94,0.8)]"
                        : "bg-rose-500 border-rose-400/60 w-2 h-2 shadow-[0_0_5px_rgba(244,63,94,0.6)]"
                    }`}
                  />

                  {/* Label pill — shown on hover or for default-visible pins */}
                  <div
                    className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 transition-all duration-200 whitespace-nowrap ${
                      showLabel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border shadow-lg text-[10px] font-bold backdrop-blur-sm transition-colors ${
                      isActive
                        ? "bg-zinc-900/95 border-rose-800/60 text-white"
                        : "bg-zinc-950/90 border-zinc-800/80 text-zinc-200"
                    }`}>
                      <span className="text-xs leading-none">{loc.flag}</span>
                      <span>{loc.city}</span>
                    </div>
                    {/* Arrow */}
                    <div className="w-2 h-2 bg-zinc-900/95 border-r border-b border-zinc-800/80 rotate-45 mx-auto -mt-[5px]" />
                  </div>

                  {/* Expanded detail card on hover */}
                  {isActive && (
                    <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-20">
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-zinc-950/95 border border-zinc-800 rounded-lg p-3 shadow-xl text-left min-w-[150px] backdrop-blur-md"
                      >
                        <div className="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-1">{loc.badge} &bull; {loc.role}</div>
                        <div className="text-xs font-bold text-white leading-none mb-1.5">{loc.name}</div>
                        <div className="text-[10px] text-zinc-400 font-medium">{loc.timezone}</div>
                      </motion.div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="flex items-center justify-center gap-6 py-2.5 mt-2">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_5px_rgba(244,63,94,0.7)]" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Office Location</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Hover to explore</span>
            </div>
          </div>
        </motion.div>

        {/* Location detailed cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              onMouseEnter={() => setActive(loc.id)}
              onMouseLeave={() => setActive(null)}
              className={`relative group bg-zinc-900/40 border rounded-2xl p-7 overflow-hidden transition-all duration-300
                ${loc.highlight || active === loc.id
                  ? "border-red-500/40 bg-red-500/5 hover:border-red-500/70"
                  : "border-zinc-800 hover:border-zinc-600"}`}
            >
              {(loc.highlight || active === loc.id) && (
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/8 to-transparent pointer-events-none" />
              )}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{loc.flag}</span>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full border ${loc.highlight || active === loc.id ? "border-red-500/40 text-red-400 bg-red-500/10" : "border-zinc-700 text-zinc-400 bg-zinc-800"}`}>
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
