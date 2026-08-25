"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const certifications = [
  { year: "2026", title: "Networking Computing", logo: "/webp/assets/Awards/Netwoking_Computing_Awards_2026-Finalist.webp" },
  { year: "2025", title: "Computing Security", logo: "/webp/assets/Awards/2025_Computing_Security_Awards-1.webp" },
  { year: "2023", title: "HSJ Partnerships", logo: "/webp/assets/Awards/HSJ_Partnership_Awards_2023.webp" },
  { year: "2022", title: "Dell Gold Partner", logo: "/webp/assets/Awards/Dell_Technologies_Gold_Partner_2022-2023.webp" },
  { year: "2021", title: "Cyber Essentials", logo: "/webp/assets/Awards/2021-2022_Cyber_Essentials_Certification.webp" },
  { year: "2020", title: "ISO 9001", logo: "/webp/assets/Awards/ISO.webp" },
  { year: "2023", title: "Cloudtango MSP Select", logo: "/webp/assets/Awards/Cloudtango_MSP_Select_2023.webp" },
  { year: "2023", title: "IT Europa Awards", logo: "/webp/assets/Awards/IT_Europa_Channel_Awards2023.webp" },
  { year: "2023", title: "UK Cyber Security", logo: "/webp/assets/Awards/UK_Cyber_Security_Consulting_Firms.webp" },
  { year: "2023", title: "Arctic Wolf Partner", logo: "/webp/assets/Awards/Arctic_Wolf_Partner_Awards.webp" },
  { year: "2023", title: "FSQS Registered", logo: "/webp/assets/Awards/FSQS_Registered_Supplier.webp" },
  { year: "2022", title: "IT Europa Finalist", logo: "/webp/assets/Awards/Finalist_IT_Europa_Channel_Awards_2022.webp" },
  { year: "2022", title: "Cloud Solution Provider", logo: "/webp/assets/Awards/Cloud_Solution_Provider_of_the_Year.webp" },
  { year: "2022", title: "Data Management", logo: "/webp/assets/Awards/Data_Management_Solution_of_the_Year.webp" },
  { year: "2022", title: "KnowBe4 Partner", logo: "/webp/assets/Awards/Knowbe4_Partner.webp" },
  { year: "2021", title: "European IT Excellence", logo: "/webp/assets/Awards/European_IT_and_Software_Excellence_Awards_2021.webp" },
  { year: "2021", title: "Data Modernisation", logo: "/webp/assets/Awards/Data_Estate_Modernisation_Award.webp" },
  { year: "2021", title: "Risk Management", logo: "/webp/assets/Awards/Risk_Management_Award.webp" },
  { year: "2021", title: "Living Wage Employer", logo: "/webp/assets/Awards/Living_Wage_Employer.webp" },
  { year: "2020", title: "European IT Excellence", logo: "/webp/assets/Awards/European_ITandSoftware_Excellence_Awards_2020.webp" },
  { year: "2020", title: "Microsoft Gold Status", logo: "/webp/assets/Awards/MS_Gold_Status.webp" },
  { year: "2020", title: "IBM Gold Partner", logo: "/webp/assets/Awards/IBM_Gold_Partner.webp" },
  { year: "2019", title: "IT Europa Finalist", logo: "/webp/assets/Awards/2019_IT_Europa_Finalist.webp" },
  { year: "2019", title: "G-Cloud 11", logo: "/webp/assets/Awards/G-Cloud_11_Framework_Award.webp" },
  { year: "2018", title: "Lenovo Platinum Partner", logo: "/webp/assets/Awards/2018_Lenovo_Platinum_Partner_Data_Center_Partner.webp" },
  { year: "2018", title: "4-Category Finalist", logo: "/webp/assets/Awards/2018_Finalists_in_four_categories.webp" },
  { year: "2017", title: "Crown Commercial Service", logo: "/webp/assets/Awards/June_2017-Crown_Commercial_Service_Supplier_CCS.webp" },
  { year: "2015", title: "IBM Business Partner", logo: "/webp/assets/Awards/IBM_Business_Partner_Award_2015.webp" },
  { year: "2015", title: "European IT Excellence", logo: "/webp/assets/Awards/2015_European_ITandSoftware_Excellence_Award.webp" },
  { year: "2014", title: "IBM Business Partner", logo: "/webp/assets/Awards/IBM_Business_Partner_Award_2014.webp" },
  { year: "2014", title: "Microsoft Partner Finalist", logo: "/webp/assets/Awards/2014_Microsoft_Partner_of_the_Year_Award_Finalist.webp" },
  { year: "2013", title: "IBM Platinum Partner", logo: "/webp/assets/Awards/IBM_Platinum_Award_2013.webp" },
];

export function AllCertifications() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 12;
  const maxPage = Math.ceil(certifications.length / itemsPerPage) - 1;

  const displayedCertifications = certifications.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section className="py-10 sm:py-14 bg-black text-white relative overflow-hidden z-10 font-sans">
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

      {/* Section Header with Highlighted Capability & Side Arrow */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 mb-12 relative text-left">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.35] text-white font-sans">
            Recognized for What We Build. Trusted for How We{" "}
            <span className="relative inline-block">
              <span className="inline-block bg-rose-500 text-black font-extrabold px-3.5 py-0.5 mx-1.5 rounded-xs transform -rotate-3 shadow-[0_4px_20px_rgba(225,29,72,0.45)] align-middle">
                Deliver
              </span>
              {/* Curved top-to-bottom side arrow image positioned directly AFTER Deliver */}
              <img src="/webp/assets/components/top-to-buttom-side-Arrowmid.webp"
                alt="Side arrow pointing down"
                className="absolute -bottom-14 sm:-bottom-20 md:-bottom-24 -right-8 sm:-right-12 md:-right-16 scale-x-[-1] w-10 sm:w-14 md:w-16 lg:w-18 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.5)] pointer-events-none select-none z-20"
                loading="lazy" />
            </span>
          </h2>
        </Reveal>
      </div>

      {/* Premium Hairline Grid Container matching PartnersSection */}
      <div className="relative max-w-[1240px] mx-auto w-full px-6 sm:px-8 select-none">
        <div key={page} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-t border-l border-zinc-800/80 bg-[#030303] rounded-2xl overflow-hidden animate-custom-fade shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {displayedCertifications.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="w-full h-36 sm:h-40 md:h-44 border-r border-b border-zinc-800/80 bg-zinc-950/60 flex flex-col items-center justify-between p-4 sm:p-5 relative overflow-hidden group cursor-pointer hover:bg-zinc-900/80 hover:border-rose-500/40 transition-all duration-300"
            >
              {/* Hover Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 via-transparent to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Year Tag (Top Bar) */}
              {/* <div className="w-full flex justify-start items-center relative z-10">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-zinc-500 group-hover:text-rose-400 transition-colors uppercase">
                  {item.year}
                </span>
              </div> */}

              {/* Award / Certification Logo */}
              <div className="relative z-10 flex items-center justify-center w-full h-full my-auto px-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.logo}
                  alt={item.title}
                  className="max-w-[85%] max-h-[75%] object-contain select-none transition-all duration-300 group-hover:scale-105 filter contrast-105"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Award Title (Bottom Label) */}
              {/* <div className="w-full relative z-10 text-center pt-1">
                <h4 className="text-[11px] sm:text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors truncate font-sans">
                  {item.title}
                </h4>
              </div> */}
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxPage + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === page ? "bg-rose-500 w-7" : "bg-zinc-700 hover:bg-zinc-500"}`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllCertifications;
