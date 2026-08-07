"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const offices = [
  { 
    city: "London", 
    region: "(Head Office)", 
    details: "128 City Road, London, United Kingdom\nEC1V 2NX", 
    image: "/assets/locations/london.png",
    gradient: "from-rose-500 to-red-500",
    mapUrl: "https://maps.google.com/?q=128+City+Road,+London,+EC1V+2NX"
  },
  { 
    city: "Tennessee", 
    region: "(Sub-Regional Office)", 
    details: "522 Aventura Dr, Mt Juliet, Tennessee\n37122 United States",
    image: "/assets/locations/Tennessee.png",
    gradient: "from-zinc-500 to-zinc-300",
    mapUrl: "https://maps.google.com/?q=522+Aventura+Dr,+Mt+Juliet,+TN+37122"
  },
  { 
    city: "Bengaluru", 
    region: "(Corporate Office)", 
    details: "Embassy Golf Links Business Park,\nBengaluru, Karnataka-560071, India",
    image: "/assets/locations/Bengaluru.png",
    gradient: "from-zinc-400 to-zinc-200",
    mapUrl: "https://maps.google.com/?q=Embassy+Golf+Links+Business+Park,+Bengaluru,+Karnataka+560071"
  },
  { 
    city: "London", 
    region: "(Support Office)", 
    details: "167-169 Great Portland Street, 5th Floor,\nLondon, W1W 5PF",
    image: "/assets/locations/london.png",
    gradient: "from-rose-600 to-red-700",
    mapUrl: "https://maps.google.com/?q=167-169+Great+Portland+Street,+London,+W1W+5PF"
  },
  { 
    city: "Chennai", 
    region: "(Operations Center)", 
    details: "Ground Floor, Primus Building, Door No.\nSP – 7A, Guindy Industrial Estate, SIDCO\nIndustrial Estate, Chennai 600032",
    image: "/assets/locations/chennai.png",
    gradient: "from-orange-600 to-amber-500",
    mapUrl: "https://maps.google.com/?q=Primus+Building,+Guindy+Industrial+Estate,+Chennai+600032"
  },
  { 
    city: "Thoothukudi", 
    region: "(Innovation Hub)", 
    details: "4/ 367, Rajeev Colony, Pasuvanthanai\n628718 Thoothukudi, Tamilnadu, IN",
    image: "/assets/locations/Thoothukudi.png",
    gradient: "from-red-600 to-orange-500",
    mapUrl: "https://maps.google.com/?q=Pasuvanthanai,+Thoothukudi+628718"
  }
];

export function GlobalLocations() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-8 pb-4 border-t border-zinc-900/60">
      <Reveal>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-rose-500 block mb-2">
              OUR LOCATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">
              Visit Our Global Offices
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-semibold leading-relaxed">
              We&apos;d love to meet you in person. Our global locations and engineering hubs are always open for client visits, workshops, and architecture reviews.
            </p>
          </div>

          {/* Right Side Interactive Dropdown Button with linearrow.png */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-950/80 hover:bg-rose-500/10 hover:border-rose-500/50 text-white transition-all duration-300 shrink-0 cursor-pointer shadow-md"
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-200 group-hover:text-rose-400">
              {isOpen ? "Hide Locations" : "View All Locations"}
            </span>
            <img
              src="/assets/components/linearrow.png"
              alt="Toggle arrow"
              className={`w-5 h-5 object-contain filter drop-shadow-[0_0_8px_rgba(244,63,94,0.5)] transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </Reveal>

      {/* Expandable Grid */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 pt-6 pb-8 border-t border-zinc-900">
              {offices.map((office, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                  <div className="w-full h-44 relative mb-4 overflow-hidden flex items-end justify-center">
                    <img 
                      src={office.image} 
                      alt={`${office.city} Office`}
                      className="object-contain h-full w-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>

                  <div className={`w-10 h-[3px] rounded-full bg-gradient-to-r ${office.gradient} mb-4 opacity-80`} />

                  <h4 className="text-xl md:text-2xl font-semibold text-white mb-1 tracking-wide group-hover:text-rose-400 transition-colors">
                    {office.city}
                  </h4>

                  <span className="text-xs font-mono font-semibold text-rose-500 uppercase tracking-widest mb-3">
                    {office.region}
                  </span>

                  <div className="text-xs text-zinc-400 font-semibold leading-relaxed mb-6 max-w-[260px]">
                    {office.details.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>

                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase border border-zinc-800 hover:border-rose-500/50 bg-zinc-950/80 hover:bg-rose-600 text-zinc-200 hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-md group/map cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-rose-500 group-hover/map:text-white transition-colors" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover/map:text-white transition-colors ml-0.5" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
