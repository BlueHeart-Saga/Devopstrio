"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { 
  Building2, 
  Activity, 
  ShoppingBag, 
  Factory, 
  Wifi, 
  Film, 
  GraduationCap, 
  Landmark 
} from "lucide-react";

const industries = [
  {
    name: "Banking & Finance",
    Icon: Building2,
    accent: "#f43f5e",
    desc: "Secure, high-availability architectures, regulatory compliance, and cloud-native solutions for modern banking, payments, and financial institutions.",
    href: "/industries/banking-finance",
    image: "/assets/Home-page/industries/Financial-Services.png",
  },
  {
    name: "Healthcare & Life Sciences",
    Icon: Activity,
    accent: "#f43f5e",
    desc: "HIPAA-compliant systems, secure patient portals, EHR integrations, and scalable data analytics pipelines for life sciences and health providers.",
    href: "/industries/healthcare-life-sciences",
    image: "/assets/Home-page/industries/Healthcare.png",
  },
  {
    name: "Retail & E-Commerce",
    Icon: ShoppingBag,
    accent: "#f43f5e",
    desc: "Omni-channel experiences, high-throughput checkout engines, global inventory management, and real-time customer personalization pipelines.",
    href: "/industries/retail-ecommerce",
    image: "/assets/Home-page/industries/Manufacturing-Retail.png",
  },
  {
    name: "Manufacturing",
    Icon: Factory,
    accent: "#f43f5e",
    desc: "Smart factory integrations, supply chain automation, predictive maintenance dashboards, and industrial IoT data platforms.",
    href: "/industries/manufacturing",
    image: "/assets/Home-page/industries/Logistics.png",
  },
  {
    name: "Telecommunications",
    Icon: Wifi,
    accent: "#f43f5e",
    desc: "Cloud-native 5G orchestrations, robust OSS/BSS platforms, high-throughput network monitoring, and real-time telecom billing engines.",
    href: "/industries/telecom",
    image: "/assets/Home-page/industries/Telecom.png",
  },
  {
    name: "Media & Entertainment",
    Icon: Film,
    accent: "#f43f5e",
    desc: "High-throughput video streaming platforms, digital asset management, content delivery networks (CDNs), and interactive media applications.",
    href: "/industries/media-entertainment",
    image: "/assets/Home-page/industries/Media-Entertainment.png",
  },
  {
    name: "Education",
    Icon: GraduationCap,
    accent: "#f43f5e",
    desc: "Robust learning management systems (LMS), remote education platforms, secure student record databases, and interactive classroom integrations.",
    href: "/industries/education",
    image: "/assets/Home-page/industries/education.png",
  },
  {
    name: "Government & Public Sector",
    Icon: Landmark,
    accent: "#f43f5e",
    desc: "Secure gov-tech solutions, citizen service portals, cloud migration for federal and local agencies, and strict access control systems.",
    href: "/industries/government-public-sector",
    image: "/assets/Home-page/industries/govt-public-sector.png",
  },
];

const TOTAL = industries.length;

function wrappedOffset(idx: number, active: number): number {
  const raw  = idx - active;
  const half = Math.floor(TOTAL / 2);
  return ((raw % TOTAL) + TOTAL + half) % TOTAL - half;
}

function getCardStyle(offset: number): React.CSSProperties {
  // We only show the active card (offset 0), next card (offset 1), and next-next card (offset 2)
  if (offset < 0 || offset > 2) {
    return { opacity: 0, pointerEvents: "none", zIndex: 0, transform: "translateX(-60px) scale(0.8) rotate(-4deg)" };
  }

  const tx      = -offset * 28; // Shift cards left to stack
  const ty      = -offset * 14; // Shift cards up slightly
  const scale   = 1 - (offset * 0.05); // Scale down stack elements
  const opacity = 1 - (offset * 0.35); // Fade out stack elements
  const zIndex  = 10 - offset;

  return {
    transform: `translateX(${tx}px) translateY(${ty}px) scale(${scale})`,
    opacity,
    zIndex,
    transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
  };
}

export function IndustriesSection() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(active);
  activeRef.current = active;

  const goTo = useCallback((idx: number) => {
    const next = ((idx % TOTAL) + TOTAL) % TOTAL;
    setActive(next);
  }, []);

  // Smooth automatic one-by-one cycling
  useEffect(() => {
    const interval = setInterval(() => {
      goTo(activeRef.current + 1);
    }, 5000); // cycle every 5 seconds
    return () => clearInterval(interval);
  }, [goTo]);

  const activeInd = industries[active];

  return (
    <section
      className="w-full pt-10 pb-12 md:pt-14 md:pb-16 bg-[#030303] text-white relative overflow-hidden"
      id="industries"
    >
      {/* Background wave/mesh image */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40 mix-blend-screen">
        <img
          src="/assets/Home-page/industries/bg2.png"
          alt="Industries Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div> */}

      {/* Ambient glow that follows active card color */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none z-0 transition-colors duration-1000"
        style={{ background: `${activeInd.accent}10` }}
      />

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Header */}
        <Reveal>
          <div className="mb-20 max-w-5xl">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-rose-500 mb-6 block">
               GLOBAL INDUSTRY EXPERIENCE
             </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold tracking-tight leading-tight mb-8 text-white">
              Empowering businesses across <span className="font-bold">every sector</span>.
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-bold leading-relaxed">
              Devopstrio blends deep industry insights with advanced AI, cloud-native engineering, and DevOps automation to build resilient digital solutions tailored to the unique regulatory and scaling challenges of your sector.
            </p>
          </div>
        </Reveal>

        {/* Stacked Cards & Item List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-center min-h-[500px]">
          
          {/* Left Side: Card Stack */}
          <div className="relative flex justify-center items-center h-[440px] sm:h-[490px] md:h-[520px] w-full max-w-[420px] mx-auto select-none pl-8">
            {industries.map((ind, idx) => {
              const offset = wrappedOffset(idx, active);
              const isCenter = offset === 0;

              return (
                <div
                  key={ind.name}
                  className="absolute w-[300px] sm:w-[340px] md:w-[370px] h-[390px] sm:h-[440px] md:h-[470px] rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    ...getCardStyle(offset),
                    cursor: isCenter ? "default" : "pointer",
                  }}
                  onClick={() => !isCenter && goTo(idx)}
                >
                  {/* Card Background Image */}
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform: isCenter ? "scale(1.05)" : "scale(1)",
                    }}
                  />

                  {/* Right Edge Indicator Dot for active card connection */}
                  {isCenter && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-rose-500 rounded-l-md"
                         style={{ backgroundColor: ind.accent }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side: Interactive Menu List */}
          <div className="relative flex flex-col justify-center py-6 border-l border-white/10 pl-6 sm:pl-10 lg:pl-16">
            
            {/* Header / Accent Label */}
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-rose-500 block mb-6"
                  style={{ color: activeInd.accent }}>
              Areas of expertise
            </span>

            {/* List Items */}
            <div className="flex flex-col gap-3">
              {industries.map((ind, idx) => {
                const isActive = active === idx;
                return (
                  <button
                    key={ind.name}
                    onClick={() => goTo(idx)}
                    className="group relative flex flex-col items-start gap-1 py-3.5 text-left w-full focus:outline-none transition-all duration-300"
                  >
                    <div className="relative flex items-center gap-4 w-full">
                      {/* Connecting Line (Only visible on desktop lg screen, active item) */}
                      {isActive && (
                        <div
                          className="hidden lg:block absolute right-full top-1/2 -translate-y-1/2 h-[1px] origin-right transition-all duration-500"
                          style={{
                            background: `linear-gradient(to left, ${ind.accent}, ${ind.accent}11)`,
                            width: "calc(100% + 24px)", // reaches from list to card stack border
                          }}
                        >
                          {/* Bullet Node at Left end of line */}
                          <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                            style={{
                              backgroundColor: ind.accent,
                              boxShadow: `0 0 8px ${ind.accent}`,
                            }}
                          />
                        </div>
                      )}

                      {/* Label/Name */}
                      <span
                        className={`font-bold tracking-tight transition-all duration-300 ${
                          isActive
                            ? "text-xl sm:text-2xl lg:text-3xl text-white translate-x-2"
                            : "text-base sm:text-lg lg:text-xl text-zinc-500 group-hover:text-zinc-300 translate-x-0"
                        }`}
                      >
                        {ind.name}
                      </span>

                      {/* Arrow right icon on hover or active */}
                      <ArrowRight
                        size={16}
                        className={`transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                          isActive ? "opacity-100 translate-x-1" : "translate-x-0"
                        }`}
                        style={{ color: ind.accent }}
                      />
                    </div>

                    {/* Short Description */}
                    {isActive && (
                      <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed mt-2 pl-2 max-w-xl animate-fadeIn duration-500">
                        {ind.desc}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* SEO Text Section */}
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mt-10 mb-0">
            <h3 className="text-2xl font-bold text-white mb-6">
              Technology Expertise Across the Entire Digital Lifecycle
            </h3>
            <p className="text-zinc-400 text-base leading-relaxed font-bold">
              From strategy and architecture to development, deployment, and ongoing optimization, Devopstrio delivers end-to-end technology services that help organizations innovate faster, operate securely, and scale confidently in a rapidly evolving digital world.
            </p>
          </div>
        </Reveal>

      </div>

      {/* Embedded styles for fadeIn animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease forwards;
        }
      `}</style>
    </section>
  );
}
