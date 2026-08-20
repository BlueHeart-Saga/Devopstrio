"use client";

import { Reveal } from "@/components/ui/Reveal";

const partners = [
  { name: "Microsoft", category: "Technology", logo: "/assets/Devopstrio_Partners/Microsoft.svg" },
  { name: "ServiceNow", category: "Enterprise Workflow", logo: "/assets/Devopstrio_Partners/service now.svg" },
  { name: "Metro Bank", category: "United Kingdom", logo: "/assets/Devopstrio_Partners/metro bank.svg" },
  { name: "Virgin Money", category: "United Kingdom", logo: "/assets/Devopstrio_Partners/virgin.svg" },
  { name: "Appian", category: "Global Low-Code System", logo: "/assets/Devopstrio_Partners/appian.svg" },
  { name: "NHS", category: "Healthcare", logo: "/assets/Devopstrio_Partners/NHS.svg" },
  { name: "ASDA", category: "Retail", logo: "/assets/Devopstrio_Partners/asda.svg" },
  { name: "Airbnb", category: "Hospitality", logo: "/assets/Devopstrio_Partners/airbnb.svg" },
  { name: "BP", category: "Global Energy", logo: "/assets/Devopstrio_Partners/Bp.svg" },
  { name: "British Heart Foundation", category: "Healthcare & Non-Profit", logo: "/assets/Devopstrio_Partners/British Heart Foundation.svg" },
  { name: "GoDaddy", category: "Cloud & Web Infrastructure", logo: "/assets/Devopstrio_Partners/Godaddy.svg" },
  { name: "Lenovo", category: "Enterprise Hardware", logo: "/assets/Devopstrio_Partners/lenovo.svg" },
  { name: "Novo Nordisk", category: "Pharmaceuticals", logo: "/assets/Devopstrio_Partners/novo nordisk.svg" },
  { name: "Paymentology", category: "FinTech & Payments", logo: "/assets/Devopstrio_Partners/Paymentology.svg" },
  { name: "Gov UK", category: "Public Sector", logo: "/assets/Devopstrio_Partners/gov uk.svg" },
  { name: "Dentons", category: "Legal & Advisory", logo: "/assets/Devopstrio_Partners/dentons.svg" },
  { name: "IQVIA", category: "HealthTech & Data", logo: "/assets/Devopstrio_Partners/iqvia.svg" },
  { name: "GXO Logistics", category: "Supply Chain", logo: "/assets/Devopstrio_Partners/gxo.svg" },
  { name: "ThreatLocker", category: "Zero Trust Security", logo: "/assets/Devopstrio_Partners/threatlocker.svg" },
  { name: "NinjaOne", category: "IT Management", logo: "/assets/Devopstrio_Partners/ninja one.svg" },
];

export function AllBusinessPartners() {
  return (
    <section className="py-10 sm:py-14 bg-black text-white relative overflow-hidden z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              Our Business <span className="text-rose-600">Partners</span>
            </h2>
          </div>
        </Reveal>

        {/* Auto-scrolling Marquee Container */}
        <div 
          className="w-full overflow-hidden pb-8 pt-2 relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)'
          }}
        >
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 35s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex w-max animate-marquee">
            {/* First Set */}
            <div className="flex gap-6 pr-6">
              {partners.map((partner, i) => (
                <div 
                  key={`a-${i}`} 
                  className="w-[280px] shrink-0 p-6 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md flex flex-col gap-6 hover:border-rose-500/50 hover:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="w-full h-36 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-center p-6 group-hover:border-zinc-700/80 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-[85%] max-h-[85%] object-contain transition-all duration-300 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  </div>
                  <div className="flex flex-col items-center text-center gap-1.5 px-2 pb-1">
                    <div className="text-white font-bold text-xl sm:text-2xl tracking-tight font-sans group-hover:text-rose-400 transition-colors">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Set (Duplicate for seamless scroll) */}
            <div className="flex gap-6 pr-6">
              {partners.map((partner, i) => (
                <div 
                  key={`b-${i}`} 
                  className="w-[280px] shrink-0 p-6 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md flex flex-col gap-6 hover:border-rose-500/50 hover:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="w-full h-36 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-center p-6 group-hover:border-zinc-700/80 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-[85%] max-h-[85%] object-contain transition-all duration-300 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  </div>
                  <div className="flex flex-col items-center text-center gap-1.5 px-2 pb-1">
                    <div className="text-white font-bold text-xl sm:text-2xl tracking-tight font-sans group-hover:text-rose-400 transition-colors">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
