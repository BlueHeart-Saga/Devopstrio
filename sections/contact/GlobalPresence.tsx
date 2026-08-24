"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

const locations = [
  {
    id: "london",
    city: "London",
    label: "Global HQ",
    role: "Strategy & Leadership",
    flag: "🇬🇧",
    x: 47.2,
    y: 37.1,
    mapUrl: "https://www.google.com/maps/place/Devopstrio+ltd/@51.5245288,-0.1367657,14z/data=!3m1!5s0x4875cee4157f1139:0xd249cf37df391616!4m10!1m2!2m1!1sdevopstrio+ltd+uk!3m6!1s0x48760b08b17623d1:0x6617df320c1480ed!8m2!3d51.5272553!4d-0.0887416!15sChFkZXZvcHN0cmlvIGx0ZCB1a5IBEHNvZnR3YXJlX2NvbXBhbnngAQA!16s%2Fg%2F11s90s3cf8",
  },
  {
    id: "london-w1",
    city: "London W1",
    label: "Support Office",
    role: "Connecting Global Expertise. Supporting Innovation. Delivering Excellence.",
    flag: "🇬🇧",
    x: 47.3,
    y: 38.3,
    mapUrl: "https://www.google.com/maps/place/Devopstrio+Ltd/@51.5217329,-0.1816995,14z/data=!3m1!5s0x48761b2a2ad5bccd:0x14f0e4cbfee2283a!4m10!1m2!2m1!1sdevopstrio+ltd+uk!3m6!1s0x48761bf02b1933c7:0x47453e7d1b549278!8m2!3d51.5217329!4d-0.1435907!15sChFkZXZvcHN0cmlvIGx0ZCB1a5IBHWNvbXB1dGVyX3N1cHBvcnRfYW5kX3NlcnZpY2Vz4AEA!16s%2Fg%2F11zcnb2t_d",
  },
  {
    id: "tennessee",
    city: "Tennessee",
    label: "North America Ops",
    role: "EST Timezone Coverage",
    flag: "🇺🇸",
    x: 27.6,
    y: 46.6,
    mapUrl: "https://maps.google.com/?q=522+Aventura+Dr,+Mt+Juliet,+TN+37122",
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    label: "Corporate Office",
    role: "Leading Strategy. Accelerating Technology. Enabling Global Growth.",
    flag: "🇮🇳",
    x: 65.2,
    y: 56.4,
    mapUrl: "https://www.google.com/maps/place/Devopstrio+Pvt+Ltd/@11.2597005,71.6100439,6.11z/data=!4m10!1m2!2m1!1sDevopstrio+Pbangalore!3m6!1s0x3bae152b54eca867:0x980925bb507a328c!8m2!3d12.9513154!4d77.6464534!15sChVEZXZvcHN0cmlvIFBiYW5nYWxvcmVaFyIVZGV2b3BzdHJpbyBwYmFuZ2Fsb3JlkgEdY29tcHV0ZXJfc3VwcG9ydF9hbmRfc2VydmljZXPgAQA!16s%2Fg%2F11mdtl382s",
  },
  {
    id: "chennai",
    city: "Chennai",
    label: "Technology & Operations Center",
    role: "24/7 Cloud Architecture & Security Operations",
    flag: "🇮🇳",
    x: 65.9,
    y: 57,
    labelPosition: "right",
    mapUrl: "https://www.google.com/maps/place/Devopstrio+Pvt+Ltd/@13.0095316,80.2063518,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267f2a761f2c5:0x795e4dac8df70296!8m2!3d13.0095264!4d80.2089267!16s%2Fg%2F11nq0wrf8p",
  },
  {
    id: "thoothukudi",
    city: "Thoothukudi",
    label: "Innovation Hub",
    role: "Empowering Talent. Accelerating Innovation. Creating Global Impact.",
    flag: "🇮🇳",
    x: 65.7,
    y: 58,
    labelPosition: "bottom",
    mapUrl: "https://www.google.com/maps/place/Devopstrio/@9.0039123,77.9576017,17z/data=!3m1!4b1!4m6!3m5!1s0x3b01557677b55437:0xdccfaa15cbbc87ca!8m2!3d9.0039123!4d77.9601766!16s%2Fg%2F11xw9tzf_k",
  },
];

// Which pins show their label pill by default (others only on hover)
const defaultVisible = new Set(["london", "tennessee", "bengaluru", "chennai", "thoothukudi"]);

export function GlobalPresence() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="w-full pt-2 pb-2 md:pt-4 md:pb-4 bg-[#030303] text-white relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[250px] bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-8 relative z-10">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <Reveal className="mb-2 text-center max-w-3xl mx-auto flex flex-col items-center relative">
          <div className="flex items-center justify-center gap-4 mb-2 relative w-full">
            {/* Carrow-right.png arrow on the left side pointing to header */}
            <div className="absolute left-0 sm:left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden sm:block">
              <img src="/assets/components/Carrow-right.png"
                alt="Arrow indicator"
                className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]"
              loading="lazy" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-[1.35] mb-2 text-white">
            Wherever you build &amp;{" "}
            <span className="bg-rose-500 text-white font-semibold px-4 py-1 mx-1 rounded-xl inline-block">
              Collaborate
            </span>
            , <span className="text-rose-500 font-semibold">we&apos;re already there.</span>
          </h2>
        </Reveal>

        {/* ── Map Card (Edge-to-edge, No Image Padding & No Hover Zoom) ──── */}
        <Reveal delay={0.1}>
          <div className="relative w-full overflow-hidden shadow-2xl">

            {/* Map image background with edge-to-edge display */}
            <div className="relative w-full h-[380px] sm:h-[500px] md:h-[600px] lg:h-[680px] overflow-hidden">
              <img src="/assets/Contact-page/map/image1.png"
                alt="World map showing Devopstrio office locations"
                className="w-full h-full object-cover sm:object-contain opacity-90"
                draggable={false}
              loading="lazy" />

              {/* Ambient radial lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#030303_95%)] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/90 via-transparent to-[#030303]/40 pointer-events-none" />

              {/* ── Location Pins ────────────────────────────────────────── */}
              {locations.map(loc => {
                const isActive = active === loc.id;
                const showLabel = isActive || defaultVisible.has(loc.id);

                return (
                  <a
                    key={loc.id}
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20 focus:outline-none"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    onMouseEnter={() => setActive(loc.id)}
                    onMouseLeave={() => setActive(null)}
                    title={`Open ${loc.city} office on Google Maps`}
                  >
                    {/* Location Pin PNG Icon */}
                    <div className="relative flex items-center justify-center">
                      <img src="/assets/components/location-pin.png"
                        alt={`${loc.city} location pin`}
                        className={`relative z-10 transition-all duration-300 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.7)] ${
                          isActive
                            ? "w-7 h-7 sm:w-8 sm:h-8 scale-110"
                            : "w-5 h-5 sm:w-6 sm:h-6 opacity-90 group-hover:opacity-100 group-hover:scale-110"
                        }`}
                      loading="lazy" />
                    </div>

                    {/* Label Pill */}
                    {loc.labelPosition === "right" ? (
                      <div
                        className={`absolute left-full top-1/2 -translate-y-1/2 ml-2 transition-all duration-300 whitespace-nowrap z-30 flex items-center ${
                          showLabel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
                        }`}
                      >
                        {/* Arrow pointing LEFT */}
                        <div className={`w-2 h-2 rotate-45 -mr-[4px] z-10 border-l border-b ${
                          isActive ? "bg-zinc-900/95 border-rose-500" : "bg-zinc-950/90 border-zinc-800"
                        }`} />
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border shadow-2xl text-xs font-semibold backdrop-blur-md transition-all duration-300 ${
                          isActive
                            ? "bg-zinc-900/95 border-rose-500 text-white scale-105 shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                            : "bg-zinc-950/90 border-zinc-800 text-zinc-200"
                        }`}>
                          <span className="text-sm leading-none">{loc.flag}</span>
                          <span>{loc.city}</span>
                        </div>
                      </div>
                    ) : loc.labelPosition === "bottom" ? (
                      <div
                        className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 transition-all duration-300 whitespace-nowrap z-30 ${
                          showLabel ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        {/* Arrow pointing UP */}
                        <div className={`w-2 h-2 rotate-45 mx-auto -mb-[4px] border-l border-t ${
                          isActive ? "bg-zinc-900/95 border-rose-500" : "bg-zinc-950/90 border-zinc-800"
                        }`} />
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border shadow-2xl text-xs font-semibold backdrop-blur-md transition-all duration-300 ${
                          isActive
                            ? "bg-zinc-900/95 border-rose-500 text-white scale-105 shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                            : "bg-zinc-950/90 border-zinc-800 text-zinc-200"
                        }`}>
                          <span className="text-sm leading-none">{loc.flag}</span>
                          <span>{loc.city}</span>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 transition-all duration-300 whitespace-nowrap z-30 ${
                          showLabel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border shadow-2xl text-xs font-semibold backdrop-blur-md transition-all duration-300 ${
                          isActive
                            ? "bg-zinc-900/95 border-rose-500 text-white scale-105 shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                            : "bg-zinc-950/90 border-zinc-800 text-zinc-200"
                        }`}>
                          <span className="text-sm leading-none">{loc.flag}</span>
                          <span>{loc.city}</span>
                        </div>
                        {/* Arrow pointing DOWN */}
                        <div className={`w-2 h-2 rotate-45 mx-auto -mt-[4px] border-r border-b ${
                          isActive ? "bg-zinc-900/95 border-rose-500" : "bg-zinc-950/90 border-zinc-800"
                        }`} />
                      </div>
                    )}

                    {/* Expanded Detail Card on Hover */}
                    {isActive && (
                      <div className={`absolute ${loc.labelPosition === "bottom" ? "bottom-full mb-10" : "top-full mt-3"} left-1/2 -translate-x-1/2 z-40 animate-fadeIn`}>
                        <div className="bg-zinc-950/95 border border-rose-500/40 rounded-xl p-3.5 shadow-2xl text-left min-w-[170px] backdrop-blur-md">
                          <div className="text-[9px] font-semibold text-rose-500 uppercase tracking-widest mb-1">{loc.label}</div>
                          <div className="text-xs font-bold text-white leading-none mb-1">{loc.city}</div>
                          <div className="text-[10px] text-zinc-400 font-semibold mb-2">{loc.role}</div>
                          <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] text-rose-400 font-semibold group-hover:underline">
                            <span>Open on Maps</span>
                            <ArrowUpRight size={11} />
                          </div>
                        </div>
                      </div>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ── Office quick cards ──────────────────────────────────────────── */}
        {/* <Reveal delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-3">
            {locations.map(loc => {
              const isActive = active === loc.id;
              return (
                <button
                  key={loc.id}
                  onMouseEnter={() => setActive(loc.id)}
                  onMouseLeave={() => setActive(null)}
                  className={`text-left p-3 rounded-lg border transition-all duration-250 group ${
                    isActive
                      ? "border-rose-900/70 bg-rose-950/15"
                      : "border-zinc-900 bg-zinc-950/30 hover:border-zinc-800"
                  }`}
                >
                  <div className="text-base mb-1.5 leading-none">{loc.flag}</div>
                  <div className={`text-[11px] font-bold leading-none mb-0.5 transition-colors ${isActive ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                    {loc.city}
                  </div>
                  <div className={`text-[9px] font-bold transition-colors leading-tight ${isActive ? "text-rose-500" : "text-zinc-700 group-hover:text-zinc-600"}`}>
                    {loc.label}
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal> */}

        {/* ── Stats bar ──────────────────────────────────────────────────── */}
        {/* <Reveal delay={0.3}>
          <div className="mt-3 border border-zinc-900 rounded-xl bg-zinc-950/20 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-zinc-900">
            {[
              { n: "6",    label: "Global Offices"  },
              { n: "4",    label: "Countries"        },
              { n: "525+", label: "Professionals"    },
              { n: "24/7", label: "Operations"       },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col items-center justify-center py-3.5 px-4 text-center">
                <span className="text-lg md:text-xl font-black text-white tracking-tight">{stat.n}</span>
                <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal> */}

      </div>
    </section>
  );
}
