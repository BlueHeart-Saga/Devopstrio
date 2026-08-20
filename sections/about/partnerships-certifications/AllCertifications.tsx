"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const certifications = [
  { year: "2026", title: "Networking Computing", logo: "/assets/Awards/Netwoking_Computing_Awards_2026 Finalist.png" },
  { year: "2025", title: "Computing Security", logo: "/assets/Awards/2025_Computing_Security_Awards-1.png" },
  { year: "2023", title: "HSJ Partnerships", logo: "/assets/Awards/HSJ_Partnership_Awards_2023.png" },
  { year: "2022", title: "Dell Gold Partner", logo: "/assets/Awards/Dell_Technologies_Gold_Partner_2022-2023.png" },
  { year: "2021", title: "Cyber Essentials", logo: "/assets/Awards/2021-2022_Cyber_Essentials_Certification.png" },
  { year: "2020", title: "ISO 9001", logo: "/assets/Awards/ISO.png" },
  { year: "2023", title: "Cloudtango MSP Select", logo: "/assets/Awards/Cloudtango_MSP_Select_2023.png" },
  { year: "2023", title: "IT Europa Awards", logo: "/assets/Awards/IT_Europa_Channel_Awards2023.png" },
  { year: "2023", title: "UK Cyber Security", logo: "/assets/Awards/UK_Cyber_Security_Consulting_Firms.png" },
  { year: "2023", title: "Arctic Wolf Partner", logo: "/assets/Awards/Arctic_Wolf_Partner_Awards.png" },
  { year: "2023", title: "FSQS Registered", logo: "/assets/Awards/FSQS_Registered_Supplier.png" },
  { year: "2022", title: "IT Europa Finalist", logo: "/assets/Awards/Finalist_IT_Europa_Channel_Awards_2022.png" },
  { year: "2022", title: "Cloud Solution Provider", logo: "/assets/Awards/Cloud_Solution_Provider_of_the_Year.png" },
  { year: "2022", title: "Data Management", logo: "/assets/Awards/Data_Management_Solution_of_the_Year.png" },
  { year: "2022", title: "KnowBe4 Partner", logo: "/assets/Awards/Knowbe4_Partner.png" },
  { year: "2021", title: "European IT Excellence", logo: "/assets/Awards/European_IT_and_Software_Excellence_Awards_2021.png" },
  { year: "2021", title: "Data Modernisation", logo: "/assets/Awards/Data_Estate_Modernisation_Award.png" },
  { year: "2021", title: "Risk Management", logo: "/assets/Awards/Risk_Management_Award.png" },
  { year: "2021", title: "Living Wage Employer", logo: "/assets/Awards/Living_Wage_Employer.png" },
  { year: "2020", title: "European IT Excellence", logo: "/assets/Awards/European_IT&Software_Excellence_Awards_2020.png" },
  { year: "2020", title: "Microsoft Gold Status", logo: "/assets/Awards/MS_Gold_Status.png" },
  { year: "2020", title: "IBM Gold Partner", logo: "/assets/Awards/IBM_Gold_Partner.png" },
  { year: "2019", title: "IT Europa Finalist", logo: "/assets/Awards/2019_IT_Europa_Finalist.png" },
  { year: "2019", title: "G-Cloud 11", logo: "/assets/Awards/G-Cloud_11_Framework_Award.png" },
  { year: "2018", title: "Lenovo Platinum Partner", logo: "/assets/Awards/2018_Lenovo_Platinum_Partner_Data_Center_Partner.png" },
  { year: "2018", title: "4-Category Finalist", logo: "/assets/Awards/2018_Finalists_in_four_categories.png" },
  { year: "2017", title: "Crown Commercial Service", logo: "/assets/Awards/June_2017- Crown_Commercial_Service_Supplier_(CCS).png" },
  { year: "2015", title: "IBM Business Partner", logo: "/assets/Awards/IBM_Business_Partner_Award_2015.png" },
  { year: "2015", title: "European IT Excellence", logo: "/assets/Awards/2015_European_IT&Software_Excellence_Award.png" },
  { year: "2014", title: "IBM Business Partner", logo: "/assets/Awards/IBM_Business_Partner_Award_2014.png" },
  { year: "2014", title: "Microsoft Partner Finalist", logo: "/assets/Awards/2014_Microsoft_Partner_of_the_Year_Award_Finalist.png" },
  { year: "2013", title: "IBM Platinum Partner", logo: "/assets/Awards/IBM_Platinum_Award_2013.png" },
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

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              Our <span className="text-rose-600">Certifications</span>
            </h2>
          </div>
        </Reveal>
      </div>

      {/* Premium Hairline Grid Container matching PartnersSection */}
      <div className="relative max-w-[1240px] mx-auto w-full px-6 sm:px-8 select-none">
        <div key={page} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 border-t border-l border-zinc-800/80 bg-[#030303] rounded-2xl overflow-hidden animate-custom-fade shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {displayedCertifications.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="w-full h-36 sm:h-40 md:h-44 border-r border-b border-zinc-800/80 bg-zinc-950/70 flex items-center justify-center p-5 relative overflow-hidden group cursor-pointer hover:border-rose-500/50 transition-all duration-300"
            >
              {/* Default State: Clean Centered Logo Only */}
              <div className="relative z-10 flex items-center justify-center w-full h-full p-2 group-hover:scale-105 transition-transform duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.logo}
                  alt={item.title}
                  className="max-w-[85%] max-h-[80%] object-contain select-none filter contrast-110"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>

              {/* Hover State: Glassmorphism Blur Text Overlay */}
              <div className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <span className="text-rose-500 font-bold text-xs uppercase tracking-widest mb-1.5 font-sans">
                  {item.year}
                </span>
                <h4 className="text-white font-bold text-sm sm:text-base leading-snug font-sans max-w-[90%]">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
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
