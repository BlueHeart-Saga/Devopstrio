"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const highlights = [
  { year: "2026", category: "Technology Innovation", title: "Networking Computing Finalist", description: <>Recognized for driving massive-scale <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">infrastructure modernization</Link>.</>, logo: "/assets/Awards/Netwoking_Computing_Awards_2026 Finalist.png" },
  { year: "2025", category: "Security & Compliance", title: "Computing Security Awards", description: <>Awarded for exceptional <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">DevSecOps practices</Link> and zero-trust deployments.</>, logo: "/assets/Awards/2025_Computing_Security_Awards.png" },
  { year: "2023", category: "Client Trust", title: "HSJ Partnerships Award", description: <>Recognized for transformative, long-term impact in <Link href="/industries/government-public-sector" className="text-[#E11D48] hover:underline">public sector tech</Link>.</>, logo: "/assets/Awards/HSJ_Partnership_Awards_2023.png" },
  { year: "2023", category: "Ecosystem Growth", title: "Arctic Wolf Partner", description: <>Highlighted for scaling rapid, responsive <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">cybersecurity defense</Link> mechanisms.</>, logo: "/assets/Awards/Arctic_Wolf_Partner_Awards.png" },
  { year: "2022", category: "Delivery Excellence", title: "Cloud Solution Provider of the Year", description: <>Awarded for consistent, high-availability <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud migration</Link> excellence.</>, logo: "/assets/Awards/Cloud_Solution_Provider_of_the_Year.png" },
  { year: "2021", category: "Industry Leadership", title: "European IT & Software Excellence", description: <>Celebrated for engineering robust <Link href="/services/data-engineering" className="text-[#E11D48] hover:underline">data estates</Link> across Europe.</>, logo: "/assets/Awards/European_IT_and_Software_Excellence_Awards_2021.png" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 hover:border-rose-500/50 hover:bg-zinc-900/60 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center h-full hover:-translate-y-1">
                
                {/* Big Centered Image Container Box */}
                <div className="w-full h-40 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl flex items-center justify-center p-6 mb-5 group-hover:border-zinc-700 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={item.logo} 
                    alt={item.title}
                    className="max-w-[85%] max-h-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </div>
                
                {/* Year Badge */}
                <div className="mb-3">
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-rose-500 font-bold text-xs tracking-wider font-mono">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center items-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white font-sans group-hover:text-rose-400 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* Description Text (Only visible on hover) */}
                  <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-48 group-hover:mt-3 transition-all duration-300 ease-in-out">
                    <p className="text-base text-zinc-300 font-normal leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
