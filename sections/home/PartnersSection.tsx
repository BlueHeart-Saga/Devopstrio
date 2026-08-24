"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

interface PartnerItem {
  name: string;
  logo: string;
}

const partners: PartnerItem[] = [
  { name: "Microsoft", logo: "/assets/Devopstrio_Partners/Microsoft.svg" },
  { name: "ServiceNow", logo: "/assets/Devopstrio_Partners/service-now.svg" },
  { name: "NHS", logo: "/assets/Devopstrio_Partners/NHS.svg" },
  { name: "Airbnb", logo: "/assets/Devopstrio_Partners/airbnb.svg" },
  { name: "Virgin", logo: "/assets/Devopstrio_Partners/virgin.svg" },
  { name: "BP", logo: "/assets/Devopstrio_Partners/Bp.svg" },
  { name: "GoDaddy", logo: "/assets/Devopstrio_Partners/Godaddy.svg" },
  { name: "Metro Bank", logo: "/assets/Devopstrio_Partners/metro-bank.svg" },
  { name: "GXO", logo: "/assets/Devopstrio_Partners/gxo.svg" },
  { name: "Paymentology", logo: "/assets/Devopstrio_Partners/Paymentology.svg" },
  { name: "ASDA", logo: "/assets/Devopstrio_Partners/asda.svg" },
  { name: "Lenovo", logo: "/assets/Devopstrio_Partners/lenovo.svg" },
  { name: "Appian", logo: "/assets/Devopstrio_Partners/appian.svg" },
  { name: "Boviet Solar", logo: "/assets/Devopstrio_Partners/boviet-solar.svg" },
  { name: "BlackRock", logo: "/assets/Devopstrio_Partners/black-rock.svg" },
  { name: "BCLC", logo: "/assets/Devopstrio_Partners/bclc.svg" },
  { name: "Captivix", logo: "/assets/Devopstrio_Partners/captivix.svg" },
  { name: "Crown Commercial Service", logo: "/assets/Devopstrio_Partners/crown-commersial-services.svg" },
  { name: "Danet Technology", logo: "/assets/Devopstrio_Partners/danet-technology.svg" },
  { name: "Decisive BI", logo: "/assets/Devopstrio_Partners/Decisive-BI.svg" },
  { name: "Dentons", logo: "/assets/Devopstrio_Partners/dentons.svg" },
  { name: "Forbes Council", logo: "/assets/Devopstrio_Partners/forbes-council.svg" },
  { name: "Fourth Quadrant Labs", logo: "/assets/Devopstrio_Partners/fourth-quadran-labs.svg" },
  { name: "Gov UK", logo: "/assets/Devopstrio_Partners/gov-uk.svg" },
  { name: "HealthTrust Europe", logo: "/assets/Devopstrio_Partners/healthtrust-europe.svg" },
  { name: "Heathrow", logo: "/assets/Devopstrio_Partners/Healthrow.svg" },
  { name: "Huntress", logo: "/assets/Devopstrio_Partners/huntress.svg" },
  { name: "International Market Centers", logo: "/assets/Devopstrio_Partners/International-market-centers.svg" },
  { name: "Infinigate", logo: "/assets/Devopstrio_Partners/Infinigate.svg" },
  { name: "Infosec Partners", logo: "/assets/Devopstrio_Partners/inosec-partners.svg" },
  { name: "IQVIA", logo: "/assets/Devopstrio_Partners/iqvia.svg" },
  { name: "Ironscales", logo: "/assets/Devopstrio_Partners/Ironscales.svg" },
  { name: "IT Europa", logo: "/assets/Devopstrio_Partners/IT-EUROPA.svg" },
  { name: "Leaseweb", logo: "/assets/Devopstrio_Partners/Ieaseweb.svg" },
  { name: "Lenovo TruScale", logo: "/assets/Devopstrio_Partners/Lenovo-true-scale.svg" },
  { name: "Logpoint", logo: "/assets/Devopstrio_Partners/logpoint.svg" },
  { name: "Medtrainer", logo: "/assets/Devopstrio_Partners/Medtrainer.svg" },
  { name: "NinjaOne", logo: "/assets/Devopstrio_Partners/ninja-one.svg" },
  { name: "Novo Nordisk", logo: "/assets/Devopstrio_Partners/novo-nordisk.svg" },
  { name: "OGL Software", logo: "/assets/Devopstrio_Partners/ogl.svg" },
  { name: "OpenText", logo: "/assets/Devopstrio_Partners/opentext.svg" },
  { name: "Proactis", logo: "/assets/Devopstrio_Partners/proactis.svg" },
  { name: "Public Contracts Scotland", logo: "/assets/Devopstrio_Partners/public-contracts-scotland.svg" },
  { name: "Queen's University Belfast", logo: "/assets/Devopstrio_Partners/queen's-university-belfast.svg" },
  { name: "Rewst", logo: "/assets/Devopstrio_Partners/rewst.svg" },
  { name: "Ruijie Networks", logo: "/assets/Devopstrio_Partners/Ruijile.svg" },
  { name: "Sell2Wales", logo: "/assets/Devopstrio_Partners/sell2wales.svg" },
  { name: "Startup Fuel", logo: "/assets/Devopstrio_Partners/Startup-fuel.svg" },
  { name: "SuperOps", logo: "/assets/Devopstrio_Partners/superops.svg" },
  { name: "ThreatLocker", logo: "/assets/Devopstrio_Partners/threatlocker.svg" },
  { name: "Waterlogic", logo: "/assets/Devopstrio_Partners/water-logic.svg" },
  { name: "YORprocure", logo: "/assets/Devopstrio_Partners/yorprocure.svg" },
  { name: "British Heart Foundation", logo: "/assets/Devopstrio_Partners/British-Heart-Foundation.svg" },
  { name: "Cyber Intelligence House", logo: "/assets/Devopstrio_Partners/CYBER-INTELIGENCE-HOUSE.svg" },
  { name: "Chalky Infotech", logo: "/assets/Devopstrio_Partners/Chalky-Infotech.svg" },
  { name: "Coeur", logo: "/assets/Devopstrio_Partners/Coeur.svg" }
];

export function PartnersSection() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 12;
  const maxPage = Math.ceil(partners.length / itemsPerPage) - 1;

  const displayedPartners = partners.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section className="w-full py-12 md:py-16 bg-[#030303] text-white relative overflow-hidden" id="partners">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes customFade {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-custom-fade {
          animation: customFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 xl:px-8 relative z-10">
        {/* Header */}
        <Reveal className="max-w-3xl mb-12 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-4 text-white relative inline-block">
            {/* Connecting side arrow starting right at left side of "Partnering for Innovation" */}
            <div className="absolute -top-2 sm:-top-4 md:-top-6 -left-4 sm:-left-28 md:-left-36 lg:-left-40 z-30 pointer-events-none select-none">
              <img
                src="/assets/components/top-to-buttom-side-Arrowmid.png"
                alt="Connecting section arrow"
                className="w-12 sm:w-20 md:w-24 lg:w-28 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(225,29,72,0.4)] transform -rotate-[-30deg]"
              />
            </div>
            Partnering for <span className="text-rose-500 font-semibold">Innovation</span>
          </h2>
        </Reveal>
      </div>

      {/* Partner Grid Container - Hairline Grid Layout */}
      <div className="relative max-w-[1240px] mx-auto w-full px-6 sm:px-8 select-none mt-4">
        <div key={page} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 border-t border-l border-zinc-800/80 bg-[#030303] animate-custom-fade">
          {displayedPartners.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="w-full h-28 sm:h-32 md:h-36 border-r border-b border-zinc-800/80 bg-zinc-950/60 flex items-center justify-center p-4 sm:p-5 transition-all duration-300 hover:bg-zinc-900/80 hover:border-rose-500/40 relative overflow-hidden group"
            >
              <div className="relative z-10 flex items-center justify-center w-full h-full p-2">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={220}
                  height={90}
                  unoptimized
                  className="w-auto h-auto max-w-[85%] max-h-[80%] object-contain select-none transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxPage + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === page ? "bg-rose-500 w-6" : "bg-zinc-700 hover:bg-zinc-500"}`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        {/* Quote Footer */}
        <Reveal>
          <div className="mt-8 text-center max-w-4xl mx-auto border-t border-zinc-900/60 pt-8">
            <p className="text-zinc-200 text-xl sm:text-2xl md:text-3xl leading-relaxed italic font-semibold font-sans">
              &ldquo;We&apos;ve created lasting relationships with our clients. Our success is our client&apos;s success.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
