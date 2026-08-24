"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, CheckCircle, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface OfficeLocation {
  flag: string;
  region: string;
  city: string;
  role: string;
  address: string;
  image: string;
  mapImage: string;
  functions: string[];
  focusAreas: string[];
}

const locations: OfficeLocation[] = [
  {
    flag: "🇬🇧",
    region: "United Kingdom",
    city: "London HQ",
    role: "Head Office",
    address: "128 City Road, London, United Kingdom, EC1V 2NX",
    image: "/assets/About-page/leadership/Locations/2c03183e0217e53e76a080a126aaa23d-1.png",
    mapImage: "/assets/locations/london.png",
    functions: [
      "Executive Leadership",
      "Enterprise Consulting",
      "Strategic Partnerships",
      "Global Program Governance",
      "Business Transformation"
    ],
    focusAreas: [
      "Client Strategy",
      "Digital Transformation",
      "Solution Architecture",
      "Global Operations Management"
    ]
  },
  {
    flag: "🇬🇧",
    region: "United Kingdom",
    city: "London Office",
    role: "Support Office",
    address: "167-169 Great Portland Street, 5th Floor, London, W1W 5PF",
    image: "/assets/About-page/leadership/Locations/8903ee4dd9fe86e48fbc4fb02a1e579d-1.png",
    mapImage: "/assets/locations/UK.png",
    functions: [
      "Customer Success",
      "Solution Workshops",
      "Executive Briefings",
      "Product Demonstrations",
      "Innovation Showcases"
    ],
    focusAreas: [
      "Client Engagement",
      "Design Thinking Sessions",
      "Technology Consulting"
    ]
  },
  {
    flag: "🇺🇸",
    region: "United States",
    city: "Tennessee Office",
    role: "Sub-Regional Office",
    address: "522 Aventura Dr, Mt Juliet, Tennessee, 37122 United States",
    image: "/assets/About-page/leadership/Locations/3703b6d7a30877eb1ede0b93c90c966a-1.png",
    mapImage: "/assets/locations/Tennessee.png",
    functions: [
      "North American Customer Support",
      "Regional Delivery Coordination",
      "Business Development",
      "Customer Success Management"
    ],
    focusAreas: [
      "Enterprise Support",
      "Managed Services",
      "Regional Operations"
    ]
  },
  {
    flag: "🇮🇳",
    region: "India",
    city: "Bengaluru Office",
    role: "Corporate Office",
    address: "Embassy Golf Links Business Park, Bengaluru, Karnataka-560071, India",
    image: "/assets/About-page/leadership/Locations/3d1cb911d53ef536d25a1c799841964f-1.png",
    mapImage: "/assets/locations/Bengaluru.png",
    functions: [
      "Software Engineering",
      "Product Development",
      "Artificial Intelligence",
      "Platform Engineering",
      "Data Engineering"
    ],
    focusAreas: [
      "SaaS Development",
      "AI Solutions",
      "Enterprise Applications",
      "Cloud Native Engineering"
    ]
  },
  {
    flag: "🇮🇳",
    region: "India",
    city: "Chennai Office",
    role: "Operations Center",
    address: "Ground Floor, Primus Building, Door No. SP – 7A, Guindy Industrial Estate, SIDCO Industrial Estate, Chennai 600032",
    image: "/assets/About-page/leadership/Locations/a3522af23a2079d9fdfe727c0fe88cca-1.png",
    mapImage: "/assets/locations/chennai.png",
    functions: [
      "Cloud Operations",
      "Security Operations",
      "Infrastructure Management",
      "Compliance Monitoring",
      "Reliability Engineering"
    ],
    focusAreas: [
      "Azure Integration",
      "AWS Integrations",
      "Cybersecurity Systems",
      "DevSecOps Pipelines",
      "Cloud Governance"
    ]
  },
  {
    flag: "🇮🇳",
    region: "India",
    city: "Thoothukudi Office",
    role: "Operations Center",
    address: "4/ 367, Rajeev Colony, Pasuvanthanai, 628718 Thoothukudi, Tamilnadu, IN",
    image: "/assets/About-page/leadership/Locations/ab86228d389fff2381da37b76b0cb6c3-1.png",
    mapImage: "/assets/locations/Thoothukudi.png",
    functions: [
      "DevOps Engineering",
      "Automation Services",
      "CI/CD Operations",
      "Infrastructure as Code",
      "Platform Operations"
    ],
    focusAreas: [
      "Kubernetes orchestration",
      "Terraform management",
      "GitOps architecture",
      "Release Engineering",
      "Continuous Delivery"
    ]
  }
];

export function DeliveryFootprint() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLoc = locations[activeIndex];

  return (
    <section id="footprint" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_60%,rgba(244,63,94,0.04),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Header */}
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            FACILITIES MAP
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Global Delivery <span className="text-rose-500">Footprint</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            A comprehensive mapping of our regional centers of excellence, detailing the core functions and technological focus areas of each office.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
            {locations.map((loc, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={loc.city + "-" + idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer group flex flex-col border rounded-3xl overflow-hidden transition-all duration-300 relative select-none min-h-[250px]
                    ${isActive
                      ? "bg-rose-500/[0.03] border-rose-500/80 shadow-[0_0_25px_rgba(244,63,94,0.12)] -translate-y-1"
                      : "bg-zinc-950/40 border-zinc-900/80 hover:border-zinc-800 hover:bg-zinc-900/10 hover:-translate-y-0.5"
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
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xl shrink-0 leading-none">{loc.flag}</span>
                        <h3 className="text-white font-bold text-sm tracking-wide">{loc.city}</h3>
                      </div>
                      
                      <p className="text-rose-500 text-[10px] font-mono tracking-widest uppercase font-bold mb-2">
                        {loc.role}
                      </p>
                      
                      <p className="text-zinc-300 text-xs leading-relaxed line-clamp-3 font-semibold flex-1">
                        {loc.address}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active location map image + Dashboard details */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full min-h-[500px]">
            
            {/* Map Image Showcase (No borders, show full image) */}
            <div className="w-full aspect-[4/3] rounded-3xl bg-zinc-950 overflow-hidden relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={activeLoc.mapImage}
                  alt={`${activeLoc.city} Map`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>
            </div>

            {/* Hub Details Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 flex flex-col justify-between flex-grow"
              >
                <div>
                  {/* Title & Role */}
                  <div className="border-b border-zinc-900 pb-4 mb-4">
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-rose-500 block mb-1">
                      ACTIVE CENTRE PROFILE
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-wider">{activeLoc.city} ({activeLoc.role})</h4>
                  </div>

                  {/* Core Functions */}
                  <div className="mb-6">
                    <span className="flex items-center gap-2 text-[9px] font-mono font-bold text-rose-500 uppercase tracking-widest mb-3">
                      <CheckCircle size={10} />
                      CORE FUNCTIONS
                    </span>
                    <ul className="space-y-2">
                      {activeLoc.functions.map((func) => (
                        <li key={func} className="text-xs text-zinc-300 font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                          {func}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Focus Areas */}
                  <div className="border-t border-zinc-900/60 pt-4">
                    <span className="flex items-center gap-2 text-[9px] font-mono font-bold text-rose-500 uppercase tracking-widest mb-3">
                      <Target size={10} />
                      FOCUS AREAS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeLoc.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-850 text-[10px] font-mono text-zinc-200 uppercase font-semibold"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
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
