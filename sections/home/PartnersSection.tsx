"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

interface PartnerItem {
  name: string;
  logo: string;
}

const partners: PartnerItem[] = [
  { name: "Microsoft", logo: "/assets/Home-page/partners/Microsoft.svg" },
  { name: "ServiceNow", logo: "/assets/Home-page/partners/servicenow.png" },
  { name: "NHS", logo: "/assets/Home-page/partners/NHS.svg" },
  { name: "Airbnb", logo: "/assets/Home-page/partners/Airbnb.svg" },
  { name: "Virgin", logo: "/assets/Home-page/partners/Virgin.svg" },
  { name: "BP", logo: "/assets/Home-page/partners/bp-logo.svg" },
  { name: "Costco", logo: "/assets/Home-page/partners/Costco.svg" },
  { name: "BT", logo: "/assets/Home-page/partners/BT.svg" },
  { name: "GoDaddy", logo: "/assets/Home-page/partners/godaddy.svg" },
  { name: "Metrobank", logo: "/assets/Home-page/partners/Metrobank.svg" },
  { name: "GXO", logo: "/assets/Home-page/partners/gxo.svg" },
  { name: "Paymentology", logo: "/assets/Home-page/partners/paymentology.svg" },
  { name: "Topland", logo: "/assets/Home-page/partners/topland.svg" },
  { name: "ASDA", logo: "/assets/Home-page/partners/ASDA.svg" },
  { name: "Lenovo", logo: "/assets/Home-page/partners/lenovo.svg" },
  { name: "Appian", logo: "/assets/Home-page/partners/appian.svg" },
  { name: "Boviet Solar", logo: "/assets/Home-page/partners/Boviet_Solar.png" },
  { name: "BlackRock", logo: "/assets/Home-page/partners/blackrock.png" },
  { name: "BCLC", logo: "/assets/Home-page/partners/bclc.png" },
  { name: "Captivix", logo: "/assets/Home-page/partners/Captivix.png" },
  { name: "Crown Commercial Service", logo: "/assets/Home-page/partners/Crown commercial.png" },
  { name: "Danet", logo: "/assets/Home-page/partners/Danet.png" },
  { name: "Decisive", logo: "/assets/Home-page/partners/Decisive.png" },
  { name: "Dentons", logo: "/assets/Home-page/partners/Dentons.png" },
  { name: "Fourth Quadrant", logo: "/assets/Home-page/partners/FourthQuadrant.png" },
  { name: "Gov.uk", logo: "/assets/Home-page/partners/gov.uk.png" },
  { name: "HealthTrust", logo: "/assets/Home-page/partners/healthtrust.png" },
  { name: "Heathrow", logo: "/assets/Home-page/partners/heathrow.png" },
  { name: "Huntress", logo: "/assets/Home-page/partners/huntresz.png" },
  { name: "IMC", logo: "/assets/Home-page/partners/Imc.png" },
  { name: "Infinigate", logo: "/assets/Home-page/partners/infinigate.png" },
  { name: "Infosec Partners", logo: "/assets/Home-page/partners/infosecpartners.png" },
  { name: "IQVIA", logo: "/assets/Home-page/partners/iqvia.png" },
  { name: "Ironscales", logo: "/assets/Home-page/partners/ironscales.png" },
  { name: "IT Europe", logo: "/assets/Home-page/partners/it europe.png" },
  { name: "Leaseweb", logo: "/assets/Home-page/partners/leaseweb.png" },
  { name: "Lenovo TruScale", logo: "/assets/Home-page/partners/lenovotruscale.png" },
  { name: "Logpoint", logo: "/assets/Home-page/partners/logpoint.png" },
  { name: "Luminar", logo: "/assets/Home-page/partners/Luminar.png" },
  { name: "Medtrainer", logo: "/assets/Home-page/partners/Medtrainer.png" },
  { name: "NinjaOne", logo: "/assets/Home-page/partners/ninjaone.png" },
  { name: "Novo Nordisk", logo: "/assets/Home-page/partners/novo.png" },
  { name: "OGL Software", logo: "/assets/Home-page/partners/ogl.png" },
  { name: "OpenText", logo: "/assets/Home-page/partners/opentext.png" },
  { name: "Proactis", logo: "/assets/Home-page/partners/proactis.png" },
  { name: "Public Contracts Scotland", logo: "/assets/Home-page/partners/publiccontracts.png" },
  { name: "Queen's University Belfast", logo: "/assets/Home-page/partners/queen.png" },
  { name: "Rewst", logo: "/assets/Home-page/partners/rewst.png" },
  { name: "Ruijie Networks", logo: "/assets/Home-page/partners/Rujiie.png" },
  { name: "Sell2Wales", logo: "/assets/Home-page/partners/sell2wales.png" },
  { name: "Startup Fuel", logo: "/assets/Home-page/partners/startup.png" },
  { name: "SuperOps", logo: "/assets/Home-page/partners/Superops.png" },
  { name: "ThreatLocker", logo: "/assets/Home-page/partners/threatlocker.png" },
  { name: "Waterlogic", logo: "/assets/Home-page/partners/waterlogic.png" },
  { name: "YORprocure", logo: "/assets/Home-page/partners/yorprocure.png" }
];

export function PartnersSection() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 12;
  const maxPage = Math.ceil(partners.length / itemsPerPage) - 1;

  const displayedPartners = partners.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section className="w-full py-12 md:py-16 bg-[#030303] text-white relative" id="partners">
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

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        {/* Header */}
        <Reveal className="max-w-3xl mb-12 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-4 text-white relative inline-block">
            {/* Connecting side arrow starting right at left side of "Some of Our Clients" */}
            <div className="absolute -top-2 sm:-top-4 md:-top-6 -left-20 sm:-left-28 md:-left-36 lg:-left-40 z-30 pointer-events-none select-none">
              <img
                src="/assets/components/top-to-buttom-side%20-Arrowmid.png"
                alt="Connecting section arrow"
                className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(225,29,72,0.4)] transform -rotate-[-30deg]"
              />
            </div>
            Some of Our Clients
          </h2>
          {/* <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            The following are just a few of our regular clients and strategic partners worldwide.
          </p> */}
        </Reveal>
      </div>

      {/* Partner Grid Container - Hairline Grid Layout */}
      <div className="relative max-w-[1240px] mx-auto w-full px-6 sm:px-8 select-none mt-4">
        <div key={page} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 border-t border-l border-zinc-800/80 bg-[#030303] animate-custom-fade">
          {displayedPartners.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="w-full h-28 sm:h-32 md:h-36 border-r border-b border-zinc-800/80 bg-[#030303] flex items-center justify-center p-6 transition-all duration-300 hover:bg-zinc-950/80 relative overflow-hidden group"
            >
              <div className="relative z-10 flex items-center justify-center w-full h-full p-2">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={48}
                  className="w-auto h-auto max-w-[80%] max-h-[70%] object-contain select-none transition-all duration-300 group-hover:scale-110"
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
          <div className="mt-8 text-center max-w-2xl mx-auto border-t border-zinc-900/60 pt-8">
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed italic font-normal">
              "We've created lasting relationships with our clients. Our success is our client's success."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
