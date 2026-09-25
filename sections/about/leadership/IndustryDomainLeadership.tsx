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
    image: "/webp/assets/About-page/leadership/industry_arun_karthik.webp",
  },
  {
    id: "ind-2",
    name: "David O'Connor",
    role: "Industry Director — Healthcare & Life Sciences",
    image: "/webp/assets/About-page/leadership/industry_david_oconnor.webp",
  },
  {
    id: "ind-3",
    name: "Kwame Mensah",
    role: "Domain Director — Cloud Infrastructure & SRE",
    image: "/webp/assets/About-page/leadership/industry_kwame_mensah.webp",
  },
  {
    id: "ind-4",
    name: "Kofi Boateng",
    role: "Industry Director — Retail, E-Commerce & Logistics",
    image: "/webp/assets/About-page/leadership/industry_kofi_boateng.webp",
  },

  // Row 2 (5 to 8)
  {
    id: "ind-5",
    name: "Pradeep Verma",
    role: "Industry Principal — Manufacturing & Energy",
    image: "/webp/assets/About-page/leadership/industry_pradeep_verma.webp",
  },
  {
    id: "ind-6",
    name: "Vikramaditya Rao",
    role: "Industry Solutions Director — Telecom & Media",
    image: "/webp/assets/About-page/leadership/industry_vikramaditya_rao.webp",
  },
  {
    id: "ind-7",
    name: "Nikhil Sharma",
    role: "Sector Lead — Public Sector & Higher Education",
    image: "/webp/assets/About-page/leadership/industry_nikhil_sharma.webp",
  },
  {
    id: "ind-8",
    name: "Rohan Varma",
    role: "Domain Principal — Cybersecurity & Zero-Trust Governance",
    image: "/webp/assets/About-page/leadership/industry_rohan_varma.webp",
  },
];

export const IndustryDomainLeadership: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden font-sans">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <Reveal>
          {/* Section Heading with Reference Red/Rose Line */}
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3">
              Industry & Domain Leadership
            </h2>
            <div className="w-20 h-1 bg-rose-600 rounded-full" />
          </div>

          {/* 4x2 Grid (4 columns on lg, 2 columns on sm, 1 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {industryLeadershipData.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.1 }}
                className="group flex flex-col bg-[#0b0b0d]/90 border border-zinc-900 hover:border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-rose-950/10 transition-all duration-300"
              >
                {/* Image Container with crisp square ratio */}
                <div className="relative w-full aspect-square bg-[#121214] overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                </div>

                {/* Leader Text Info */}
                <div className="p-5 text-left space-y-1 flex-1 flex flex-col justify-start">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-400 transition-colors duration-200 leading-snug">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-medium text-rose-500 leading-normal pt-0.5">
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
