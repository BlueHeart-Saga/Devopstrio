"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const offices = [
  { 
    city: "London", 
    region: "(Head Office)", 
    details: "128 City Road, London, United Kingdom\nEC1V 2NX", 
    image: "/assets/locations/london.png",
    gradient: "from-rose-500 to-red-500"
  },
  { 
    city: "Tennessee", 
    region: "(Sub-Regional Office)", 
    details: "522 Aventura Dr, Mt Juliet, Tennessee\n37122 United States",
    image: "/assets/locations/Tennessee.png",
    gradient: "from-zinc-500 to-zinc-300"
  },
  { 
    city: "Bengaluru", 
    region: "(Corporate Office)", 
    details: "Embassy Golf Links Business Park,\nBengaluru, Karnataka-560071, India",
    image: "/assets/locations/Bengaluru.png",
    gradient: "from-zinc-400 to-zinc-200"
  },
  { 
    city: "London", 
    region: "(Support Office)", 
    details: "167-169 Great Portland Street, 5th Floor,\nLondon, W1W 5PF",
    image: "/assets/locations/london.png",
    gradient: "from-rose-600 to-red-700"
  },
  { 
    city: "Chennai", 
    region: "(Operations Center)", 
    details: "Ground Floor, Primus Building, Door No.\nSP – 7A, Guindy Industrial Estate, SIDCO\nIndustrial Estate, Chennai 600032",
    image: "/assets/locations/chennai.png",
    gradient: "from-orange-600 to-amber-500"
  },
  { 
    city: "Thoothukudi", 
    region: "(Operations Center)", 
    details: "4/ 367, Rajeev Colony, Pasuvanthanai\n628718 Thoothukudi, Tamilnadu, IN",
    image: "/assets/locations/Thoothukudi.png",
    gradient: "from-red-600 to-orange-500"
  }
];

export function OurLocations() {
  return (
    <section className="w-full py-20 md:py-28 bg-[#030303] text-white relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              OUR LOCATIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
            Visit Our <span className="text-white font-bold bg-gradient-to-r from-red-650 via-rose-600 to-rose-500 bg-clip-text text-transparent">Global Offices</span>.
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed font-bold max-w-2xl">
            We&apos;d love to meet you in person. Our global locations and engineering hubs are always open for client visits, workshops, and architecture reviews. Coffee&apos;s on us — always.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {offices.map((office, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="flex flex-col items-center text-center group cursor-default">
                
                <div className="w-full h-48 relative mb-6 overflow-hidden flex items-end justify-center">
                  <img 
                    src={office.image} 
                    alt={`${office.city} Office`}
                    className="object-contain h-full w-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                <div className={`w-12 h-[3px] rounded-full bg-gradient-to-r ${office.gradient} mb-6 opacity-80`} />

                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide group-hover:text-zinc-200 transition-colors">
                  {office.city}
                </h4>

                <div className="text-xs md:text-sm text-zinc-400 font-medium leading-relaxed mb-8 max-w-[280px]">
                  {office.details.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>

                <div className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5">
                  {office.region}
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
