"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";

// Curated list of top highlights from the larger awards array
const highlights = [
  { year: "2026", category: "Technology Innovation", title: "Networking Computing Finalist", description: "Recognized for driving massive-scale infrastructure modernization.", logo: "/assets/Awards/Netwoking_Computing_Awards_2026 Finalist.png" },
  { year: "2025", category: "Security & Compliance", title: "Computing Security Awards", description: "Awarded for exceptional DevSecOps practices and zero-trust deployments.", logo: "/assets/Awards/2025_Computing_Security_Awards.png" },
  { year: "2023", category: "Client Trust", title: "HSJ Partnerships Award", description: "Recognized for transformative, long-term impact in public sector tech.", logo: "/assets/Awards/HSJ_Partnership_Awards_2023.png" },
  { year: "2023", category: "Ecosystem Growth", title: "Arctic Wolf Partner", description: "Highlighted for scaling rapid, responsive cybersecurity defense mechanisms.", logo: "/assets/Awards/Arctic_Wolf_Partner_Awards.png" },
  { year: "2022", category: "Delivery Excellence", title: "Cloud Solution Provider of the Year", description: "Awarded for consistent, high-availability cloud migration excellence.", logo: "/assets/Awards/Cloud_Solution_Provider_of_the_Year.png" },
  { year: "2021", category: "Industry Leadership", title: "European IT & Software Excellence", description: "Celebrated for engineering robust data estates across Europe.", logo: "/assets/Awards/European_IT_and_Software_Excellence_Awards_2021.png" },
];

export function RecognitionHighlights() {
  return (
    <section className="py-24 bg-black relative z-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Featured Accolades
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Highlights from Our Recognition Journey
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="bg-[#0A0A0A] border border-zinc-900 rounded-3xl p-6 hover:border-zinc-700 transition-all duration-300 group cursor-pointer flex flex-col h-full hover:-translate-y-1">
                
                {/* Header (Logo + Year) */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shrink-0">
                    <img 
                      src={item.logo} 
                      alt={item.title}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  </div>
                  <div className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300 font-bold text-xs tracking-wider">
                    {item.year}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-rose-500 mb-2 font-mono">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
        
        {/* We can use the AllCertifications component as a full gallery below this or in a different tab, but since the user requested specifically an Awards & Recognition structure, this acts as the highlights. */}
      </div>
    </section>
  );
}
