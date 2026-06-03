"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const techStack1 = [
  { name: "AWS", icon: "/assets/Techtools/aws-color.svg" },
  { name: "Azure", icon: "/assets/Techtools/azure-color.svg" },
  { name: "Google Cloud", icon: "/assets/Techtools/google-color.svg" },
  { name: "Node.js", icon: "/assets/Techtools/Node.svg" },
  { name: "Python", icon: "/assets/Techtools/Python.svg" },
  { name: "Go", icon: "/assets/Techtools/GO.svg" },
  { name: "Java", icon: "/assets/Techtools/java-colored.svg" },
  { name: ".NET", icon: "/assets/Techtools/net.svg" },
];

const techStack2 = [
  { name: "React", icon: "/assets/Techtools/React.svg" },
  { name: "Next.js", icon: "/assets/Techtools/next-js-color.svg" },
  { name: "Angular", icon: "/assets/Techtools/Angular.svg" },
  { name: "Flutter", icon: "/assets/Techtools/flutter.svg" },
  { name: "PostgreSQL", icon: "/assets/Techtools/postgre.svg" },
  { name: "MySQL", icon: "/assets/Techtools/MySQL.svg" },
  { name: "C++", icon: "/assets/Techtools/Cplusplus.svg" },
  { name: "Ruby", icon: "/assets/Techtools/Ruby.svg" },
];

export function TechnicalPartnerships() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#050505] text-white border-b border-zinc-900 relative overflow-x-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Header Section */}
        <Reveal className="max-w-4xl mx-auto mb-16 flex flex-col items-center text-center gap-6">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block">
              TECHNOLOGY ECOSYSTEM
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1] mt-2">
           Strategic Technology Partnerships <br className="hidden md:block" />
            <span className="font-bold">The Foundation Behind Digital Success</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-4 max-w-2xl mx-auto font-medium">
            We partner with industry-leading platforms and leverage modern, scalable technologies to build enterprise-grade software and cloud architectures.
          </p>
        </Reveal>

      </div>

      {/* Full-width Infinite Scroll Tech Marquee */}
      <div className="relative w-full overflow-hidden py-10 flex flex-col gap-6"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
      >
        <style>{`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-33.333% - 0.5rem)); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(calc(-33.333% - 0.5rem)); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            animation: marquee-left 40s linear infinite;
          }
          .animate-marquee-right {
            animation: marquee-right 40s linear infinite;
          }
          .tech-row:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        {/* Row 1 (Scrolling Left) */}
        <div className="flex animate-marquee-left tech-row gap-6 w-max pl-6">
          {[...techStack1, ...techStack1, ...techStack1].map((tech, i) => (
            <div 
              key={`row1-${tech.name}-${i}`} 
              className="flex items-center justify-center w-40 h-20 md:w-56 md:h-28 rounded-2xl border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-sm hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 group shadow-lg"
            >
              <img 
                src={tech.icon} 
                alt={tech.name} 
                title={tech.name}
                className="max-w-[45%] max-h-[45%] object-contain transition-all duration-500 group-hover:scale-110" 
              />
            </div>
          ))}
        </div>

        {/* Row 2 (Scrolling Right) */}
        <div className="flex animate-marquee-right tech-row gap-6 w-max pl-6">
          {[...techStack2, ...techStack2, ...techStack2].map((tech, i) => (
            <div 
              key={`row2-${tech.name}-${i}`} 
              className="flex items-center justify-center w-40 h-20 md:w-56 md:h-28 rounded-2xl border border-zinc-800/40 bg-zinc-950/40 backdrop-blur-sm hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 group shadow-lg"
            >
              <img 
                src={tech.icon} 
                alt={tech.name} 
                title={tech.name}
                className="max-w-[45%] max-h-[45%] object-contain transition-all duration-500 group-hover:scale-110" 
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
