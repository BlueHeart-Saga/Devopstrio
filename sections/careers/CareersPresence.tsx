"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const locations = [
  {
    id: "london",
    city: "London",
    label: "Global HQ",
    role: "Strategy & Leadership",
    country: "United Kingdom",
    flag: "🇬🇧",
    x: 47.4,
    y: 37.1,
    hiring: true,
  },
  {
    id: "tennessee",
    city: "Tennessee",
    label: "North America Ops",
    role: "EST Timezone Coverage",
    country: "United States",
    flag: "🇺🇸",
    x: 33.6,
    y: 46.6,
    hiring: true,
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    label: "Engineering Centre",
    role: "300+ Specialists",
    country: "India",
    flag: "🇮🇳",
    x: 61.1,
    y: 58.4,
    hiring: true,
  },
  {
    id: "chennai",
    city: "Chennai",
    label: "Cloud & SecOps Hub",
    role: "24/7 Monitoring",
    country: "India",
    flag: "🇮🇳",
    x: 61.7,
    y: 58.5,
    hiring: true,
  },
  {
    id: "thoothukudi",
    city: "Thoothukudi",
    label: "DevOps & Automation",
    role: "Rapid Delivery Team",
    country: "India",
    flag: "🇮🇳",
    x: 61.5,
    y: 60,
    hiring: true,
  },
];

const defaultVisible = new Set(["london", "tennessee", "bengaluru"]);

export function CareersPresence() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="w-full py-20 bg-black border-b border-zinc-900 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GLOBAL PRESENCE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white uppercase">
              One team. <span className="text-rose-500">Worldwide opportunities.</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              Join a globally distributed team across the UK, US, and India — with hybrid roles, flexible hours, and open positions in every timezone.
            </p>
          </div>
        </Reveal>

        {/* Interactive Map */}
        <Reveal delay={0.1}>
          <div className="relative w-full">
            {/* Map image */}
            <div className="relative w-full" style={{ paddingBottom: "38%" }}>
              <img
                src="/assets/Contact-page/map/image1.png"
                alt="Devopstrio global hiring locations"
                className="absolute inset-0 w-full h-full object-contain opacity-50"
                draggable={false}
              />
              {/* Edge vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#000_100%)] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

              {/* Location pins */}
              {locations.map((loc) => {
                const isActive = active === loc.id;
                const showLabel = isActive || defaultVisible.has(loc.id);

                return (
                  <div
                    key={loc.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    onMouseEnter={() => setActive(loc.id)}
                    onMouseLeave={() => setActive(null)}
                  >
                    {/* Pulse ring */}
                    <span
                      className={`absolute rounded-full transition-all duration-300 ${
                        isActive
                          ? "animate-ping bg-rose-500/30 scale-150"
                          : "bg-rose-500/15 scale-125"
                      }`}
                      style={{ width: 7, height: 7, top: -1, left: -1 }}
                    />
                    {/* Core dot */}
                    <span
                      className={`block rounded-full border transition-all duration-200 ${
                        isActive
                          ? "bg-white border-rose-500 w-2.5 h-2.5 shadow-[0_0_8px_rgba(244,63,94,0.8)]"
                          : "bg-rose-500 border-rose-400/60 w-1.5 h-1.5 shadow-[0_0_5px_rgba(244,63,94,0.6)]"
                      }`}
                    />

                    {/* Label pill */}
                    <div
                      className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 transition-all duration-200 whitespace-nowrap ${
                        showLabel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-1 px-2 py-1 rounded-md border shadow-lg text-[9px] font-bold backdrop-blur-sm ${
                          isActive
                            ? "bg-zinc-900/95 border-rose-800/60 text-white"
                            : "bg-zinc-950/90 border-zinc-800/80 text-zinc-200"
                        }`}
                      >
                        <span className="text-xs leading-none">{loc.flag}</span>
                        <span>{loc.city}</span>
                      </div>
                      <div className="w-1.5 h-1.5 bg-zinc-900/95 border-r border-b border-zinc-800/80 rotate-45 mx-auto -mt-[3px]" />
                    </div>

                    {/* Detail card on hover */}
                    {isActive && (
                      <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-20">
                        <div className="bg-zinc-950/95 border border-zinc-800 rounded-lg p-2.5 shadow-xl text-left min-w-[140px] backdrop-blur-md">
                          <div className="text-[8px] font-bold text-rose-500 uppercase tracking-widest mb-0.5">
                            {loc.label}
                          </div>
                          <div className="text-[10px] font-bold text-white leading-none mb-0.5">
                            {loc.city}, {loc.country}
                          </div>
                          <div className="text-[9px] text-zinc-500 font-bold mb-1.5">
                            {loc.role}
                          </div>
                          {loc.hiring && (
                            <span className="text-[8px] font-extrabold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full">
                              Now Hiring
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 py-2 mt-1">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_5px_rgba(244,63,94,0.7)]" />
                <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Office Location</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Hover to explore</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Office quick cards */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-6">
            {locations.map((loc) => {
              const isActive = active === loc.id;
              return (
                <button
                  key={loc.id}
                  onMouseEnter={() => setActive(loc.id)}
                  onMouseLeave={() => setActive(null)}
                  className={`text-left p-4 rounded-xl border transition-all duration-250 group ${
                    isActive
                      ? "border-rose-900/70 bg-rose-950/15"
                      : "border-white/[0.06] bg-zinc-950/40 hover:border-zinc-800"
                  }`}
                >
                  <div className="text-lg mb-2 leading-none">{loc.flag}</div>
                  <div className={`text-[12px] font-bold leading-none mb-1 transition-colors ${isActive ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                    {loc.city}
                  </div>
                  <div className={`text-[9px] font-bold transition-colors leading-tight mb-1.5 ${isActive ? "text-rose-500" : "text-zinc-600 group-hover:text-zinc-500"}`}>
                    {loc.label}
                  </div>
                  {loc.hiring && (
                    <span className="text-[8px] font-extrabold text-emerald-400 uppercase tracking-wider">
                      Now Hiring
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={0.3}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "5", label: "Global Offices" },
              { value: "3", label: "Countries" },
              { value: "525+", label: "Professionals" },
              { value: "24/7", label: "Operations" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-5 rounded-xl border border-white/[0.06] bg-zinc-950/40 text-center"
              >
                <span className="text-2xl font-extrabold text-rose-500 leading-none mb-1">{stat.value}</span>
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
