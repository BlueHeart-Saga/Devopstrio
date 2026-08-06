"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const industryTabs = [
  {
    id: "banking",
    name: "Banking & Finance",
    title: "Banking & Finance",
    description: "Achieve your business goals faster with secure custom solutions, from mobile banking apps and payment systems to fraud detection tools. Serve customers better and meet strict regulatory requirements.",
    image: "/assets/Industries-page/slider/Bank and finance.png"
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    title: "Healthcare & Life Sciences",
    description: "Enable high-performance clinical data pipeline processing, secure HIPAA-compliant telehealth applications, and multi-cloud collaboration spaces.",
    image: "/assets/Industries-page/slider/Healthcare & Life Sciences.png"
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    title: "Retail & E-Commerce",
    description: "Deploy omnichannel commerce recommendation engines, high-speed product checkout paths, and dynamic warehouse inventory syncs.",
    image: "/assets/Industries-page/slider/Retail & E-Commerce.png"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    title: "Manufacturing & Industry 4.0",
    description: "Connect factory-floor IoT sensory networks, orchestrate predictive maintenance logs, and establish cloud-first supply chain monitoring.",
    image: "/assets/Industries-page/slider/Manufacturing.png"
  },
  {
    id: "telecom",
    name: "Telecommunications",
    title: "Telecommunications",
    description: "Orchestrate high-density OSS/BSS platforms, scalable 5G network integration nodes, and real-time telecom analytics clusters.",
    image: "/assets/Industries-page/slider/Telecommunication.png"
  },
  {
    id: "media",
    name: "Media & Entertainment",
    title: "Media & Entertainment",
    description: "Deliver high-bandwidth VOD streaming architectures, intelligent asset distribution pipelines, and real-time digital rendering lobbies.",
    image: "/assets/Industries-page/slider/Media & Entertainment.png"
  },
  {
    id: "education",
    name: "Education",
    title: "Education & EdTech",
    description: "Deploy collaborative learning management ecosystems, remote interactive classrooms, and secure academic credential validation nodes.",
    image: "/assets/Industries-page/slider/Education.png"
  },
  {
    id: "government",
    name: "Government & Public Sector",
    title: "Government & Public Sector",
    description: "Modernize national security portals, establish cloud migration frameworks, and meet strict federal regulatory and database security compliance.",
    image: "/assets/Industries-page/slider/Government & Public Sector.png"
  }
];

export function IndustryExpertise() {
  const [activeTab, setActiveTab] = useState<string>("banking");
  const activeData = industryTabs.find((tab) => tab.id === activeTab) || industryTabs[0];

  return (
    <section className="w-full py-8 bg-[#030303] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <Reveal>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
              Experts who understand your industry <span className="text-rose-500">impact</span> from the inside
            </h2>
          </Reveal>
        </div>

        {/* Horizontal Navigation Tabs */}
        <div className="w-full border-b border-zinc-800/60 mb-10 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-8 min-w-max pb-3">
            {industryTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-sm md:text-[15px] font-semibold transition-all duration-300 relative pb-3 cursor-pointer shrink-0 ${
                    isActive ? "text-rose-500 font-bold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {tab.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Banner Display area */}
        <Reveal>
          <div className="relative w-full rounded-2xl bg-zinc-950 border border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] min-h-[340px] md:min-h-[400px] flex items-center mb-28">
            {/* Background banner image container to keep image bounded */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeData.id}
                  src={activeData.image}
                  alt={activeData.name}
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover pointer-events-none brightness-[0.85] contrast-100"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            </div>

            {/* Foreground Detail Box - Hanging out of the parent bottom edge */}
            <div className="relative z-10 max-w-sm md:max-w-md ml-6 sm:ml-12 mt-20 -mb-20 bg-gradient-to-b from-[#b91c1c] to-[#7f1d1d] border border-rose-500/30 rounded-2xl p-8 md:p-10 shadow-[0_25px_50px_rgba(0,0,0,0.7)] flex flex-col justify-between min-h-[300px] md:min-h-[340px]">
              <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-4">
                  {activeData.title}
                </h3>
                <p className="text-white text-xs md:text-sm font-medium leading-relaxed opacity-95">
                  {activeData.description}
                </p>
              </div>
              
              <div>
                <a 
                  href="/industries" 
                  className="text-xs font-bold text-white hover:text-rose-200 uppercase tracking-wider flex items-center gap-1.5 mt-8 group/btn w-fit"
                >
                  <span>Learn more</span>
                  <ArrowUpRight size={14} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
