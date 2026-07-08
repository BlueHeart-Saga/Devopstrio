"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

import Link from "next/link";

const locations = [
  {
    id: "london",
    city: "London",
    label: "Global HQ",
    role: "Strategy & Architecture",
    flag: "🇬🇧",
    x: 47.4,
    y: 37.1,
  },
  {
    id: "london-w1",
    city: "London W1",
    label: "Client Experience Centre",
    role: "Enterprise Consulting",
    flag: "🇬🇧",
    x: 48,
    y: 38.3,
  },
  {
    id: "tennessee",
    city: "Tennessee",
    label: "North America Ops",
    role: "EST Timezone Coverage",
    flag: "🇺🇸",
    x: 33.6,
    y: 46.6,
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    label: "Engineering Centre",
    role: "Core Development",
    flag: "🇮🇳",
    x: 61.1,
    y: 58.4,
  },
  {
    id: "chennai",
    city: "Chennai",
    label: "Cloud & SecOps Hub",
    role: "24/7 Monitoring",
    flag: "🇮🇳",
    x: 61.7,
    y: 58.5,
  },
  {
    id: "thoothukudi",
    city: "Thoothukudi",
    label: "DevOps & Automation",
    role: "Rapid Delivery Team",
    flag: "🇮🇳",
    x: 61.5,
    y: 60,
  },
];

const defaultVisible = new Set(["london", "tennessee", "bengaluru"]);

export function GlobalDelivery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="global-delivery" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">

        {/* Header */}
        <Reveal className="mb-12">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            AVAILABILITY MAP
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Global <span className="text-rose-500">delivery distribution</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            Sourcing certified architects and SRE leads globally to support continuous follow-the-sun operations. Explore our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link> and read our client <Link href="/about/testimonials" className="text-rose-500 hover:underline font-bold">testimonials</Link>.
          </p>
        </Reveal>

        {/* Map Card */}
        <Reveal delay={0.1}>
          <div className="relative w-full">
            {/* Map image background */}
            <div className="relative w-full" style={{ paddingBottom: "40%" }}>
              <img
                src="/assets/Contact-page/map/image1.png"
                alt="World map showing Devopstrio delivery locations"
                className="absolute inset-0 w-full h-full object-contain opacity-60"
                draggable={false}
              />

              {/* Dark vignette overlay at edges */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#000000_100%)] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

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
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-md border shadow-lg text-[9px] font-bold backdrop-blur-sm transition-colors ${
                        isActive
                          ? "bg-zinc-900/95 border-rose-800/60 text-white"
                          : "bg-zinc-950/90 border-zinc-800/80 text-zinc-200"
                      }`}>
                        <span className="text-xs leading-none">{loc.flag}</span>
                        <span>{loc.city}</span>
                      </div>
                      {/* Arrow */}
                      <div className="w-1.5 h-1.5 bg-zinc-900/95 border-r border-b border-zinc-800/80 rotate-45 mx-auto -mt-[3px]" />
                    </div>

                    {/* Expanded detail card on hover */}
                    {isActive && (
                      <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-20 animate-fadeIn">
                        <div className="bg-zinc-950/95 border border-zinc-800 rounded-lg p-2 shadow-xl text-left min-w-[130px] backdrop-blur-md">
                          <div className="text-[8px] font-bold text-rose-500 uppercase tracking-widest mb-0.5">{loc.label}</div>
                          <div className="text-[10px] font-bold text-white leading-none mb-0.5">{loc.city}</div>
                          <div className="text-[9px] text-zinc-500 font-bold">{loc.role}</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Legend bar */}
            <div className="flex items-center justify-center gap-6 py-2.5 mt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_5px_rgba(244,63,94,0.7)]" />
                <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Delivery Hub</span>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
            {locations.map(loc => {
              const isActive = active === loc.id;
              return (
                <button
                  key={loc.id}
                  onMouseEnter={() => setActive(loc.id)}
                  onMouseLeave={() => setActive(null)}
                  className={`text-left p-4 rounded-xl border transition-all duration-250 group ${
                    isActive
                      ? "border-rose-900/70 bg-rose-950/15"
                      : "border-zinc-900 bg-zinc-950/30 hover:border-zinc-800"
                  }`}
                >
                  <div className="text-lg mb-2 leading-none">{loc.flag}</div>
                  <div className={`text-[12px] font-bold leading-none mb-1 transition-colors ${isActive ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                    {loc.city}
                  </div>
                  <div className={`text-[10px] font-bold transition-colors leading-tight ${isActive ? "text-rose-500" : "text-zinc-600 group-hover:text-zinc-500"}`}>
                    {loc.label}
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
