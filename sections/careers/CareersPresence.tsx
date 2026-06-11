"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function CareersPresence() {
  const offices = [
    { city: "London", country: "United Kingdom", role: "UK Consulting Hub" },
    { city: "New York", country: "United States", role: "US Client Services" },
    { city: "Bangalore", country: "India", role: "SRE Operations Center" },
    { city: "Chennai", country: "India", role: "Cloud Delivery Center" },
    { city: "Thoothukudi", country: "India", role: "IP & Frameworks Lab" }
  ];

  return (
    <section className="py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-center">
          {/* Left Info */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Global Presence</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug mb-6">
                One team. <span className="block font-semibold text-rose-500">Multiple locations.</span> Unlimited opportunities.
              </h2>
              <p className="text-zinc-450 text-xs md:text-sm font-light leading-relaxed mb-8">
                We design and maintain systems across offices in the UK, US, and India, coordinating delivery models that ensure continuous operations.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {offices.map((office, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-4">
                    <span className="text-xs font-bold text-white block mb-0.5">{office.city}</span>
                    <span className="text-[9px] text-zinc-500 font-semibold block mb-2">{office.country}</span>
                    <span className="text-[9px] text-rose-500 font-bold uppercase tracking-wider block">{office.role}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Map Canvas (Interactive SVG Vector Map) */}
          <Reveal delay={0.15} className="relative w-full aspect-[1.6/1] bg-zinc-950/10 border border-zinc-900 rounded-[32px] overflow-hidden p-6 flex items-center justify-center group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_75%)] pointer-events-none" />
            
            {/* World Grid Vector Map */}
            <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20 text-zinc-700 stroke-zinc-800 fill-none stroke-[0.5]">
              {/* Simulated Grid Latitudes / Longitudes */}
              <line x1="0" y1="100" x2="1000" y2="100" strokeDasharray="3,3" />
              <line x1="0" y1="200" x2="1000" y2="200" strokeDasharray="3,3" />
              <line x1="0" y1="300" x2="1000" y2="300" strokeDasharray="3,3" />
              <line x1="0" y1="400" x2="1000" y2="400" strokeDasharray="3,3" />
              <line x1="200" y1="0" x2="200" y2="500" strokeDasharray="3,3" />
              <line x1="400" y1="0" x2="400" y2="500" strokeDasharray="3,3" />
              <line x1="600" y1="0" x2="600" y2="500" strokeDasharray="3,3" />
              <line x1="800" y1="0" x2="800" y2="500" strokeDasharray="3,3" />
              
              {/* World outline placeholder path to simulate world geography */}
              <path d="M150,150 Q180,120 220,180 T300,160 T350,220 T200,280 Z" />
              <path d="M480,100 Q550,80 620,120 T700,200 T600,350 T500,200 Z" />
              <path d="M720,250 Q780,220 840,280 T880,350 T750,420 Z" />
            </svg>

            {/* Glowing Office Locations overlay */}
            <div className="absolute inset-0">
              {/* London */}
              <div className="absolute top-[32%] left-[45%] group/pin">
                <span className="absolute -top-6 -left-8 bg-zinc-950 border border-zinc-800 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">London Hub</span>
                <div className="w-3.5 h-3.5 rounded-full bg-rose-600/30 border border-rose-500 flex items-center justify-center animate-ping absolute -inset-0.5" />
                <div className="relative w-2.5 h-2.5 rounded-full bg-rose-500 border border-black z-10 cursor-pointer" />
              </div>

              {/* New York */}
              <div className="absolute top-[38%] left-[28%] group/pin">
                <span className="absolute -top-6 -left-10 bg-zinc-950 border border-zinc-800 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">New York Hub</span>
                <div className="w-3.5 h-3.5 rounded-full bg-rose-600/30 border border-rose-500 flex items-center justify-center animate-ping absolute -inset-0.5" />
                <div className="relative w-2.5 h-2.5 rounded-full bg-rose-500 border border-black z-10 cursor-pointer" />
              </div>

              {/* Bangalore */}
              <div className="absolute top-[62%] left-[71%] group/pin">
                <span className="absolute -top-6 -left-12 bg-zinc-950 border border-zinc-800 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">Bangalore SRE</span>
                <div className="w-3.5 h-3.5 rounded-full bg-rose-600/30 border border-rose-500 flex items-center justify-center animate-ping absolute -inset-0.5" />
                <div className="relative w-2.5 h-2.5 rounded-full bg-rose-500 border border-black z-10 cursor-pointer" />
              </div>

              {/* Chennai */}
              <div className="absolute top-[64%] left-[72%] group/pin">
                <span className="absolute -top-6 -left-12 bg-zinc-950 border border-zinc-800 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">Chennai Delivery</span>
                <div className="w-3.5 h-3.5 rounded-full bg-rose-600/30 border border-rose-500 flex items-center justify-center animate-ping absolute -inset-0.5" />
                <div className="relative w-2.5 h-2.5 rounded-full bg-rose-500 border border-black z-10 cursor-pointer" />
              </div>

              {/* Thoothukudi */}
              <div className="absolute top-[68%] left-[71.5%] group/pin">
                <span className="absolute -top-6 -left-12 bg-zinc-950 border border-zinc-800 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">Thoothukudi IP Lab</span>
                <div className="w-3.5 h-3.5 rounded-full bg-rose-600/30 border border-rose-500 flex items-center justify-center animate-ping absolute -inset-0.5" />
                <div className="relative w-2.5 h-2.5 rounded-full bg-rose-500 border border-black z-10 cursor-pointer" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
