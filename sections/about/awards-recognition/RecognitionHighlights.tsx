"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  { year: "2026", category: "Technology Innovation", title: "Networking Computing Finalist", description: "Recognized for driving massive-scale infrastructure modernization.", logo: "/assets/Awards/Netwoking_Computing_Awards_2026 Finalist.png" },
  { year: "2025", category: "Security & Compliance", title: "Computing Security Awards", description: "Awarded for exceptional DevSecOps practices and zero-trust deployments.", logo: "/assets/Awards/2025_Computing_Security_Awards-1.png" },
  { year: "2023", category: "Client Trust", title: "HSJ Partnerships Award", description: "Recognized for transformative, long-term impact in public sector tech.", logo: "/assets/Awards/HSJ_Partnership_Awards_2023.png" },
  { year: "2023", category: "Ecosystem Growth", title: "Arctic Wolf Partner", description: "Highlighted for scaling rapid, responsive cybersecurity defense mechanisms.", logo: "/assets/Awards/Arctic_Wolf_Partner_Awards.png" },
  { year: "2022", category: "Delivery Excellence", title: "Cloud Solution Provider of the Year", description: "Awarded for consistent, high-availability cloud migration excellence.", logo: "/assets/Awards/Cloud_Solution_Provider_of_the_Year.png" },
  { year: "2021", category: "Industry Leadership", title: "European IT & Software Excellence", description: "Celebrated for engineering robust data estates across Europe.", logo: "/assets/Awards/European_IT_and_Software_Excellence_Awards_2021.png" },
];

export function RecognitionHighlights() {
  return (
    <section className="py-10 sm:py-14 bg-black relative z-10 border-t border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <Reveal>
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              Highlights from Our <span className="text-rose-600 font-semibold">Recognition Journey</span>
            </h2>
          </div>
        </Reveal>

        {/* Premium Glassic Logo-Only Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-xl p-6 hover:border-rose-500/50 hover:bg-zinc-900/70 transition-all duration-300 h-36 sm:h-44 flex items-center justify-center cursor-pointer shadow-xl">
                {/* Logo Image Only */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.logo} 
                  alt={item.title}
                  className="max-w-[80%] max-h-[75%] object-contain select-none transition-all duration-300 group-hover:scale-105 filter contrast-105"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />

                {/* Card Text Content (Commented Out as Requested) */}
                {/* 
                <div className="mt-4 text-center">
                  <span className="text-xs font-mono text-rose-500 font-bold">{item.year}</span>
                  <h3 className="text-lg font-bold text-white font-sans mt-1">{item.title}</h3>
                  <p className="text-xs text-zinc-400 font-sans mt-2">{item.description}</p>
                </div> 
                */}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RecognitionHighlights;
