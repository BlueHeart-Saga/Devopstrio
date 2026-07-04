"use client";

import { Reveal } from "@/components/ui/Reveal";

const partners = [
  { name: "Costco Wholesale", category: "Global Retail", logo: "/assets/Home-page/partners/Costco.svg" },
  { name: "Metrobank", category: "United Kingdom", logo: "/assets/Home-page/partners/Metrobank.svg" },
  { name: "Virgin Money", category: "United Kingdom", logo: "/assets/Home-page/partners/Virgin.svg" },
  { name: "Appian", category: "Global Low-Code System", logo: "/assets/Home-page/partners/appian.svg" },
  { name: "NHS", category: "Healthcare", logo: "/assets/Home-page/partners/NHS.svg" },
  { name: "ServiceNow", category: "Enterprise Workflow", logo: "/assets/Home-page/partners/servicenow.svg" },
  { name: "Microsoft", category: "Technology", logo: "/assets/Home-page/partners/Microsoft.svg" },
  { name: "ASDA", category: "Retail", logo: "/assets/Home-page/partners/ASDA.svg" },
  { name: "Airbnb", category: "Hospitality", logo: "/assets/Home-page/partners/Airbnb.svg" },
  { name: "BT", category: "Telecommunications", logo: "/assets/Home-page/partners/BT.svg" },
];

export function AllBusinessPartners() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E11D48] mb-3 block">
              Business Network
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Our Business <span className="text-[#E11D48]">Partners</span>
            </h2>
          </div>
        </Reveal>

      {/* Auto-scrolling Marquee Container */}
      <div 
        className="w-full overflow-hidden pb-12 pt-4 relative"
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
                className="w-[280px] shrink-0 p-4 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col gap-5 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-full h-40 bg-white rounded-2xl flex items-center justify-center p-8">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </div>
                <div className="flex flex-col gap-1 px-2 pb-2">
                  <div className="text-[#E11D48] font-bold text-[10px] tracking-[0.2em] uppercase">
                    {partner.category}
                  </div>
                  <div className="text-white font-bold text-lg tracking-tight">
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
                className="w-[280px] shrink-0 p-4 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col gap-5 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-full h-40 bg-white rounded-2xl flex items-center justify-center p-8">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                </div>
                <div className="flex flex-col gap-1 px-2 pb-2">
                  <div className="text-[#E11D48] font-bold text-[10px] tracking-[0.2em] uppercase">
                    {partner.category}
                  </div>
                  <div className="text-white font-bold text-lg tracking-tight">
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
