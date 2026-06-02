"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const offices = [
  { city: "Palo Alto", region: "Americas Hub", details: "340 University Ave, Palo Alto, CA" },
  { city: "London", region: "EMEA Operations", details: "8 Devonshire Square, Spitalfields, London" },
  { city: "Bangalore", region: "APAC Delivery", details: "Prestige Trade Tower, Palace Rd, Bangalore" }
];

export function OurLocations() {
  return (
    <section className="w-full py-20 bg-[#030303] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              03 / PHYSICAL OFFICES
            </span>
          </div>
          <h2 className="text-3xl font-light tracking-tight leading-tight">
            Our global <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">delivery hubs</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div 
              key={office.city}
              className="flex gap-4 items-start p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 transition-colors"
            >
              <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-rose-500 flex-shrink-0">
                <MapPin size={14} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-200">{office.city}</h4>
                <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-1">{office.region}</span>
                <p className="text-xs text-zinc-450 font-light leading-relaxed">{office.details}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
