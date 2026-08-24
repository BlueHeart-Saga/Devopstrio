"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const locations = [
  {
    flag: "🇬🇧",
    region: "United Kingdom",
    city: "London (HQ)",
    role: "Head Office",
    address: "128 City Road, London, United Kingdom, EC1V 2NX",
    image: "/assets/About-page/leadership/Locations/2c03183e0217e53e76a080a126aaa23d-1.png",
    mapUrl: "https://maps.google.com/maps?q=51.527339,-0.088630&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    flag: "🇺🇸",
    region: "United States",
    city: "Tennessee Office",
    role: "Sub-Regional Office",
    address: "522 Aventura Dr, Mt Juliet, Tennessee, 37122 United States",
    image: "/assets/About-page/leadership/Locations/3703b6d7a30877eb1ede0b93c90c966a-1.png",
    mapUrl: "https://maps.google.com/maps?q=36.195230,-86.518600&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    flag: "🇮🇳",
    region: "India",
    city: "Bengaluru Office",
    role: "Corporate Office",
    address: "Embassy Golf Links Business Park, Bengaluru, Karnataka-560071, India",
    image: "/assets/About-page/leadership/Locations/3d1cb911d53ef536d25a1c799841964f-1.png",
    mapUrl: "https://maps.google.com/maps?q=12.946300,77.648300&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    flag: "🇬🇧",
    region: "United Kingdom",
    city: "London Office",
    role: "Support Office",
    address: "167-169 Great Portland Street, 5th Floor, London, W1W 5PF",
    image: "/assets/About-page/leadership/Locations/8903ee4dd9fe86e48fbc4fb02a1e579d-1.png",
    mapUrl: "https://maps.google.com/maps?q=51.520440,-0.143210&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    flag: "🇮🇳",
    region: "India",
    city: "Chennai Office",
    role: "Operations Center",
    address: "Ground Floor, Primus Building, Door No. SP – 7A, Guindy Industrial Estate, SIDCO Industrial Estate, Chennai 600032",
    image: "/assets/About-page/leadership/Locations/a3522af23a2079d9fdfe727c0fe88cca-1.png",
    mapUrl: "https://maps.google.com/maps?q=13.018900,80.207800&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    flag: "🇮🇳",
    region: "India",
    city: "Thoothukudi Office",
    role: "Operations Center",
    address: "4/ 367, Rajeev Colony, Pasuvanthanai, 628718 Thoothukudi, Tamilnadu, IN",
    image: "/assets/About-page/leadership/Locations/ab86228d389fff2381da37b76b0cb6c3-1.png",
    mapUrl: "https://maps.google.com/maps?q=8.948200,78.016300&t=&z=15&ie=UTF8&iwloc=&output=embed"
  }
];

import Link from "next/link";

export const GlobalPresence = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="global-presence" className="py-24 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_60%,rgba(255,23,68,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 relative">
          {/* Curved Arrow PNG on Right Side */}
          <div className="absolute -top-6 right-2 sm:right-10 z-20 pointer-events-none select-none">
            <img
              src="/assets/components/Carrow-right.png"
              alt="Curved arrow"
              className="w-14 sm:w-20 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)] scale-x-[-1]"
            />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            Global <span className="bg-rose-500 text-white font-semibold px-4 py-1 rounded-xl inline-block">Presence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 6 Cards arranged in 2 rows of 3 columns on lg+ screens */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {locations.map((loc, idx) => {
              const isActive = activeIndex === idx;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`cursor-pointer group flex flex-col border rounded-xl overflow-hidden transition-all duration-300 relative select-none
                    ${isActive
                      ? "bg-rose-500/[0.03] border-rose-500 shadow-[0_0_25px_rgba(244,63,94,0.12)] -translate-y-1"
                      : "bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/50 hover:-translate-y-0.5"
                    }`}
                >
                  {/* Card Image Header */}
                  <div className="relative h-28 w-full overflow-hidden bg-zinc-950">
                    <img
                      src={loc.image}
                      alt={loc.city}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    
                    {/* Active State Ping Indicator */}
                    {isActive && (
                      <span className="absolute top-3 right-3 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                        
                      </span>
                    )}
                  </div>

                  {/* Card Content Area */}
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl shrink-0 leading-none">{loc.flag}</span>
                      <h3 className="text-white font-bold text-sm truncate">{loc.city}</h3>
                    </div>
                    
                    <p className="text-rose-500 text-[10px] font-mono tracking-wider uppercase font-bold mb-2">
                      {loc.role}
                    </p>
                    
                    <p className="text-zinc-400 text-[11px] leading-relaxed line-clamp-3 font-medium flex-1">
                      {loc.address}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Google Maps Iframe showing active location */}
          <div className="lg:col-span-4 h-full min-h-[500px] flex flex-col">
            <div className="w-full h-full flex-1 rounded-2xl border border-zinc-800 bg-zinc-900/20 overflow-hidden relative group">
              <iframe
                key={activeIndex}
                src={locations[activeIndex].mapUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)",
                  minHeight: "500px"
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full block"
              />
              
              {/* Premium Dashboard Overlay */}
              {/* <div className="absolute top-4 left-4 bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 px-3 py-1.5 rounded-lg z-10 flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  
                </span>
                <span className="text-[10px] font-mono font-bold text-zinc-300 uppercase tracking-wider">
                  Live View: {locations[activeIndex].city}
                </span>
              </div> */}

              <div className="absolute inset-0 border border-zinc-800/80 pointer-events-none rounded-2xl group-hover:border-rose-500/20 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
