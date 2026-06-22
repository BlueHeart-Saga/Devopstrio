"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OfficeLocation {
  name: string;
  role: string;
}

interface CountryGroup {
  country: string;
  flag: string;
  offices: OfficeLocation[];
}

export function GlobalTalentReach() {
  const [activeCountry, setActiveCountry] = useState("uk");

  const groups: Record<string, CountryGroup> = {
    uk: {
      country: "United Kingdom",
      flag: "🇬🇧",
      offices: [
        { name: "London HQ", role: "Global Headquarters" },
        { name: "London W1", role: "Client Experience Centre" }
      ]
    },
    us: {
      country: "United States",
      flag: "🇺🇸",
      offices: [
        { name: "Tennessee", role: "North America Operations" }
      ]
    },
    in: {
      country: "India",
      flag: "🇮🇳",
      offices: [
        { name: "Bengaluru Engineering Centre", role: "R&D and Software Development" },
        { name: "Chennai Cloud & SecOps Hub", role: "Cloud operations & Security" },
        { name: "Thoothukudi DevOps & Automation Centre", role: "CI/CD & platform engineering" }
      ]
    }
  };

  const currentGroup = groups[activeCountry] || groups.uk;

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            GEOGRAPHICAL SCOPE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Global Talent <span className="text-rose-500">Reach</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Connecting professionals across our central offices to build cloud platforms and operate secure release cycles.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-4xl mx-auto">

          {/* Left Buttons Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {Object.entries(groups).map(([key, group]) => (
              <button
                key={key}
                onClick={() => setActiveCountry(key)}
                className={`flex items-center justify-between p-5 rounded-2xl text-left border transition-all duration-300 ${activeCountry === key
                    ? "bg-rose-500/10 text-rose-500 border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
                    : "bg-zinc-950/45 text-zinc-455 border-zinc-900/80 hover:text-zinc-350 hover:bg-zinc-900/40"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{group.flag}</span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{group.country}</span>
                </div>
                <ArrowUpRight size={14} className="text-zinc-550" />
              </button>
            ))}
          </div>

          {/* Right Display Board */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCountry}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-zinc-950/40 border border-zinc-900/60 rounded-3xl p-8 min-h-[300px] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-widest block mb-4 border-b border-zinc-900 pb-2">
                    TALENT POOL ({currentGroup.flag} {currentGroup.country})
                  </span>
                  <div className="flex flex-col gap-4">
                    {currentGroup.offices.map((office) => (
                      <div
                        key={office.name}
                        className="bg-zinc-900/40 border border-zinc-900 rounded-xl p-4 flex gap-4 hover:border-rose-500/15 transition-all duration-300"
                      >
                        <MapPin className="text-rose-500 shrink-0 mt-1" size={16} />
                        <div>
                          <h5 className="text-[11px] font-bold text-white uppercase tracking-wider">{office.name}</h5>
                          <span className="block text-[8px] font-mono text-rose-500 uppercase tracking-widest mt-0.5 font-bold">
                            {office.role}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
