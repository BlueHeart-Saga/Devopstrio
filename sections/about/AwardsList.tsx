"use client";

import React, { useState, useMemo } from "react";
import { Search, Trophy, Calendar, Sparkles, Filter, ChevronDown, Award } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";

interface AwardItem {
  title: string;
  year: string;
  issuer: string;
  src: string;
}

const awardsData: AwardItem[] = [
  {
    title: "Networking Computing Awards Finalist",
    year: "2026",
    issuer: "Networking Computing",
    src: "/assets/Awards/Netwoking_Computing_Awards_2026 Finalist.png"
  },
  {
    title: "Computing Security Awards Winner",
    year: "2025",
    issuer: "Computing Security",
    src: "/assets/Awards/2025_Computing_Security_Awards-1.png"
  },
  {
    title: "Computing Security Awards Finalist",
    year: "2025",
    issuer: "Computing Security",
    src: "/assets/Awards/2025_Computing_Security_Awards.png"
  },
  {
    title: "HSJ Partnership Awards Finalist",
    year: "2023",
    issuer: "HSJ Partnerships",
    src: "/assets/Awards/HSJ_Partnership_Awards_2023.png"
  },
  {
    title: "IT Europa Channel Awards Winner",
    year: "2023",
    issuer: "IT Europa",
    src: "/assets/Awards/IT_Europa_Channel_Awards_2023.png"
  },
  {
    title: "IT Europa Channel Awards Finalist",
    year: "2023",
    issuer: "IT Europa",
    src: "/assets/Awards/IT_Europa_Channel_Awards2023.png"
  },
  {
    title: "Cloudtango MSP Select 2023",
    year: "2023",
    issuer: "Cloudtango",
    src: "/assets/Awards/Cloudtango_MSP_Select_2023.png"
  },
  {
    title: "IT Europa Channel Awards Finalist",
    year: "2022",
    issuer: "IT Europa",
    src: "/assets/Awards/Finalist_IT_Europa_Channel_Awards_2022.png"
  },
  {
    title: "Dell Technologies Gold Partner",
    year: "2022",
    issuer: "Dell",
    src: "/assets/Awards/Dell_Technologies_Gold_Partner_2022-2023.png"
  },
  {
    title: "Cyber Essentials Certification",
    year: "2021",
    issuer: "Cyber Essentials",
    src: "/assets/Awards/2021-2022_Cyber_Essentials_Certification.png"
  },
  {
    title: "European IT & Software Excellence Awards Finalist",
    year: "2021",
    issuer: "IT Europa",
    src: "/assets/Awards/European_IT_and_Software_Excellence_Awards_2021.png"
  },
  {
    title: "European IT & Software Excellence Awards",
    year: "2020",
    issuer: "IT Europa",
    src: "/assets/Awards/European_IT&Software_Excellence_Awards_2020.png"
  },
  {
    title: "Cyber Essentials Certification",
    year: "2020",
    issuer: "Cyber Essentials",
    src: "/assets/Awards/Cyber_Essentials_(CE)_Certification_2020.png"
  },
  {
    title: "Highly Commended Recognition",
    year: "2019",
    issuer: "IT Europa",
    src: "/assets/Awards/2019_Highly_Commended.png"
  },
  {
    title: "IT Europa Finalist",
    year: "2019",
    issuer: "IT Europa",
    src: "/assets/Awards/2019_IT_Europa_Finalist.png"
  },
  {
    title: "IT Europa Finalist (Four Categories)",
    year: "2018",
    issuer: "IT Europa",
    src: "/assets/Awards/2018_Finalists_in_four_categories.png"
  },
  {
    title: "Lenovo Platinum Data Center Partner",
    year: "2018",
    issuer: "Lenovo",
    src: "/assets/Awards/2018_Lenovo_Platinum_Partner_Data_Center_Partner.png"
  },
  {
    title: "Crown Commercial Service Supplier (CCS)",
    year: "2017",
    issuer: "UK Gov",
    src: "/assets/Awards/June_2017- Crown_Commercial_Service_Supplier_(CCS).png"
  },
  {
    title: "IBM Business Partner Award Winner",
    year: "2015",
    issuer: "IBM",
    src: "/assets/Awards/IBM_Business_Partner_Award_2015.png"
  },
  {
    title: "European IT & Software Excellence Award Winner",
    year: "2015",
    issuer: "IT Europa",
    src: "/assets/Awards/2015_European_IT&Software_Excellence_Award.png"
  },
  {
    title: "Microsoft Partner of the Year Finalist",
    year: "2014",
    issuer: "Microsoft",
    src: "/assets/Awards/2014_Microsoft_Partner_of_the_Year_Award_Finalist.png"
  },
  {
    title: "IBM Business Partner Award Finalist",
    year: "2014",
    issuer: "IBM",
    src: "/assets/Awards/IBM_Business_Partner_Award_2014.png"
  },
  {
    title: "IBM Platinum Award Winner",
    year: "2013",
    issuer: "IBM",
    src: "/assets/Awards/IBM_Platinum_Award_2013.png"
  },
  {
    title: "Achilles Network Silver Certification",
    year: "Active",
    issuer: "Achilles",
    src: "/assets/Awards/Achilles_Network_Silver.png"
  },
  {
    title: "Arctic Wolf Partner Award",
    year: "Active",
    issuer: "Arctic Wolf",
    src: "/assets/Awards/Arctic_Wolf_Partner_Awards.png"
  },
  {
    title: "Bramble Hub listings",
    year: "Active",
    issuer: "Bramble Hub",
    src: "/assets/Awards/Bramble_Hub_listings.png"
  },
  {
    title: "Certificate of Compliance",
    year: "Active",
    issuer: "Compliance",
    src: "/assets/Awards/Certificate_of_Compliance.png"
  },
  {
    title: "Certificate of Compliance Renewal",
    year: "Active",
    issuer: "Compliance",
    src: "/assets/Awards/Certificate_of_Compliance_Renewal.png"
  },
  {
    title: "Cloud Solution Provider of the Year",
    year: "Active",
    issuer: "Cloud Awards",
    src: "/assets/Awards/Cloud_Solution_Provider_of_the_Year.png"
  },
  {
    title: "Data Estate Modernisation Award",
    year: "Active",
    issuer: "Data Awards",
    src: "/assets/Awards/Data_Estate_Modernisation_Award.png"
  },
  {
    title: "Data Management Solution of the Year",
    year: "Active",
    issuer: "Data Awards",
    src: "/assets/Awards/Data_Management_Solution_of_the_Year.png"
  },
  {
    title: "FSQS Registered Supplier Accreditation",
    year: "Active",
    issuer: "FSQS",
    src: "/assets/Awards/FSQS_Registered_Supplier.png"
  },
  {
    title: "FSQS Registered Renewal",
    year: "Active",
    issuer: "FSQS",
    src: "/assets/Awards/FSQS_Registered_Renewal.png"
  },
  {
    title: "G-Cloud 11 Framework Listing",
    year: "Active",
    issuer: "UK Gov",
    src: "/assets/Awards/G-Cloud_11_Framework_Award.png"
  },
  {
    title: "IBM Gold Partner Accreditation",
    year: "Active",
    issuer: "IBM",
    src: "/assets/Awards/IBM_Gold_Partner.png"
  },
  {
    title: "IBM PartnerWorld Member",
    year: "Active",
    issuer: "IBM",
    src: "/assets/Awards/IBM_PartnerWorld_Programme.png"
  },
  {
    title: "ISO Certification Framework",
    year: "Active",
    issuer: "ISO",
    src: "/assets/Awards/ISO.png"
  },
  {
    title: "KnowBe4 Partner Security Certification",
    year: "Active",
    issuer: "KnowBe4",
    src: "/assets/Awards/Knowbe4_Partner.png"
  },
  {
    title: "Accredited Living Wage Employer",
    year: "Active",
    issuer: "Living Wage",
    src: "/assets/Awards/Living_Wage_Employer.png"
  },
  {
    title: "Living Wage Accreditation Movement",
    year: "Active",
    issuer: "Living Wage",
    src: "/assets/Awards/Living_Wage_Employer_Accreditation_Living_Wage_Movement.png"
  },
  {
    title: "Microsoft Gold Status Certification",
    year: "Active",
    issuer: "Microsoft",
    src: "/assets/Awards/MS_Gold_Status.png"
  },
  {
    title: "Risk Management Solution Award",
    year: "Active",
    issuer: "Risk Awards",
    src: "/assets/Awards/Risk_Management_Award.png"
  },
  {
    title: "Solution Provider Tier Accredited Partner",
    year: "Active",
    issuer: "Solution Provider",
    src: "/assets/Awards/Solution_Provider_Tier-Accredited_Business_Partner.png"
  },
  {
    title: "Top 1% of Microsoft Partner Marketers Worldwide",
    year: "Active",
    issuer: "Microsoft",
    src: "/assets/Awards/Top_1%_of_Microsoft_Partner_Marketers_Across_The_World!.png"
  },
  {
    title: "Top UK Cyber Security Consulting Firms",
    year: "Active",
    issuer: "Cyber Security",
    src: "/assets/Awards/UK_Cyber_Security_Consulting_Firms.png"
  }
];

export const AwardsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const years = useMemo(() => {
    const list = ["All", ...new Set(awardsData.map((item) => item.year))];
    // Sort years descending but put "Active" first or last
    return list.sort((a, b) => {
      if (a === "All") return -1;
      if (b === "All") return 1;
      if (a === "Active") return 1;
      if (b === "Active") return -1;
      return b.localeCompare(a);
    });
  }, []);

  const filteredAwards = useMemo(() => {
    return awardsData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.issuer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear = selectedYear === "All" || item.year === selectedYear;
      return matchesSearch && matchesYear;
    });
  }, [searchQuery, selectedYear]);

  const toggleRow = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 bg-black text-white relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-zinc-900 pb-8">
          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Official Directory
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight">
              Ecosystem <span className="font-semibold text-rose-500">Accreditation & Awards</span>
            </h2>
          </Reveal>

          {/* Year filtering tabs */}
          <div className="flex flex-wrap gap-1.5 bg-zinc-950/80 border border-zinc-900 p-1 rounded-xl">
            {years.slice(0, 7).map((year) => (
              <button
                key={year}
                onClick={() => {
                  setSelectedYear(year);
                  setExpandedIndex(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                  selectedYear === year
                    ? "bg-rose-600 text-white font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="max-w-lg mb-8">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-rose-500" />
            <input
              type="text"
              placeholder="Search awards by title or authority..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setExpandedIndex(null);
              }}
              className="w-full bg-zinc-950/60 border border-zinc-900 focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 rounded-xl py-3 pl-11 pr-4 text-xs text-white placeholder-zinc-500 transition-all outline-none"
            />
          </div>
        </div>

        {/* Stack List Container */}
        <div className="w-full border-t border-zinc-900">
          <AnimatePresence initial={false}>
            {filteredAwards.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border-b border-zinc-900 transition-all duration-300 ${
                    isExpanded ? "bg-zinc-950/40" : "hover:bg-zinc-950/20"
                  }`}
                >
                  {/* Row Header clickable */}
                  <div
                    onClick={() => toggleRow(idx)}
                    className="flex items-center justify-between py-6 px-4 cursor-pointer select-none group"
                  >
                    <div className="flex items-center gap-6 md:gap-10 flex-grow">
                      {/* Year badge */}
                      <span className="text-xs font-mono font-bold text-rose-500 tracking-wider w-14 shrink-0">
                        {item.year}
                      </span>
                      
                      {/* Award details */}
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                        <span className="text-sm font-semibold text-zinc-100 group-hover:text-rose-400 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                          {item.issuer}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-[9px] font-mono text-zinc-650 opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline">
                        {isExpanded ? "COLLAPSE" : "EXPAND PREVIEW"}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-zinc-500 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-rose-500" : "group-hover:text-zinc-300"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded badge image container */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 pt-2 flex flex-col md:flex-row md:items-center gap-8 border-t border-zinc-950">
                          {/* Image Box */}
                          <div className="relative w-48 h-32 bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden flex items-center justify-center p-4 shadow-2xl shadow-rose-950/10 shrink-0">
                            <img
                              src={item.src}
                              alt={item.title}
                              className="max-w-full max-h-full object-contain filter brightness-110 select-none pointer-events-none"
                            />
                          </div>

                          {/* Text description */}
                          <div className="max-w-lg">
                            <div className="flex items-center gap-2 mb-3">
                              <Award className="w-4 h-4 text-rose-500" />
                              <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                                VERIFIED ACCREDITATION
                              </span>
                            </div>
                            <h4 className="text-sm font-semibold text-white mb-2">
                              {item.title}
                            </h4>
                            <p className="text-xs text-zinc-450 leading-relaxed font-light">
                              Devopstrio's credentials are audited and certified by leading global compliance, network security, and channel assessment authorities, including {item.issuer}.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </AnimatePresence>

          {filteredAwards.length === 0 && (
            <div className="text-center py-16">
              <Award className="w-8 h-8 text-zinc-750 mx-auto mb-3" />
              <p className="text-zinc-500 text-xs font-light">
                No certificates found matching your search.
              </p>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
};
