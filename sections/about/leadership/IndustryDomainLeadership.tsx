"use client";
import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

interface IndustryLeader {
  id: string;
  name: string;
  role: string;
  image: string;
  description?: string;
}

const industryLeadershipData: IndustryLeader[] = [
  // Row 1 (1 to 4)
  {
    id: "ind-1",
    name: "Arun Karthik",
    role: "Industry Practice Lead — Financial Services & Banking",
    image: "/webp/assets/About-page/leadership/sourcecard/AI services.webp",
  },
  {
    id: "ind-2",
    name: "David O'Connor",
    role: "Industry Director — Healthcare & Life Sciences",
    image: "/webp/assets/About-page/leadership/sourcecard/Cloud Services.webp",
  },
  {
    id: "ind-3",
    name: "Nancy Carell",
    role: "Domain Director — Cloud Infrastructure & SRE",
    image: "/webp/assets/About-page/leadership/sourcecard/Managed Services.webp",
  },
  {
    id: "ind-4",
    name: "Rohan Varma",
    role: "Domain Principal — Cybersecurity & Zero-Trust Governance",
    image: "/webp/assets/About-page/leadership/sourcecard/Explore All Services.webp",
  },

  // Row 2 (5 to 8)
  {
    id: "ind-5",
    name: "Gayathri Raghuram",
    role: "Industry Principal — Manufacturing & Energy",
    image: "/webp/assets/About-page/leadership/sourcecard/Partnerships.webp",
  },
  {
    id: "ind-6",
    name: "Vikramaditya Rao",
    role: "Industry Solutions Director — Telecom & Media",
    image: "/webp/assets/About-page/leadership/sourcecard/Our Culture & People.webp",
  },
  {
    id: "ind-7",
    name: "Nikhil Sharma",
    role: "Sector Lead — Public Sector & Higher Education",
    image: "/webp/assets/About-page/leadership/sourcecard/Careers at Devopstrio.webp",
  },
  {
    id: "ind-8",
    name: "Kofi Boateng",
    role: "Industry Director — Retail, E-Commerce & Logistics",
    image: "/webp/assets/About-page/leadership/sourcecard/Global Internship Programme.webp",
  },
];

export const IndustryDomainLeadership: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden font-sans">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <Reveal>
          {/* Section Heading with Red/Rose Accent Line */}
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3">
              Industry & Domain Leadership
            </h2>
            <div className="w-20 h-1 bg-rose-600 rounded-full" />
          </div>

          {/* 4-column Grid for Landscape/Rectangular Profile Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {industryLeadershipData.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
                className="group flex flex-col bg-[#0b0b0e] border border-zinc-900/90 hover:border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-rose-950/20 transition-all duration-300"
              >
                {/* Rectangular Image Container (1487x1058 exact ratio) */}
                <div className="relative w-full aspect-[1487/1058] bg-zinc-950 overflow-hidden">
                  <img
                    src={`${leader.image}?v=4`}
                    alt={leader.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Leader Text Info */}
                <div className="p-5 text-left flex-1 flex flex-col justify-start">
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-rose-400 transition-colors duration-200 leading-snug">
                    {leader.name}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] font-medium text-zinc-400 tracking-normal leading-relaxed pt-1.5">
                    {leader.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default IndustryDomainLeadership;
