"use client";
import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
}

const leadershipTeamData: Leader[] = [
  // Row 1 (1 to 4)
  {
    id: "lead-1",
    name: "Rajesh Subramanian",
    role: "Chief Operating Officer",
    image: "/webp/assets/About-page/leadership/leader_10.webp",
  },
  {
    id: "lead-2",
    name: "Claire Montgomery",
    role: "Managing Director — UK & EMEA",
    image: "/webp/assets/About-page/leadership/leader_02.webp",
  },
  {
    id: "lead-3",
    name: "Kate Hancock",
    role: "Executive Director — Client Success & Delivery",
    image: "/webp/assets/About-page/leadership/leader_03.webp",
  },
  {
    id: "lead-4",
    name: "Stuart Curzon",
    role: "Managing Partner — AI & Cognitive Innovation",
    image: "/webp/assets/About-page/leadership/leader_09.webp",
  },

  // Row 2 (5 to 8)
  {
    id: "lead-5",
    name: "Andrew Fleming",
    role: "Managing Director — Cloud & Infrastructure",
    image: "/webp/assets/About-page/leadership/leader_05.webp",
  },
  {
    id: "lead-6",
    name: "Jason Jennings",
    role: "Managing Director — Enterprise Architecture",
    image: "/webp/assets/About-page/leadership/leader_06.webp",
  },
  {
    id: "lead-7",
    name: "Marcus Thorne",
    role: "Managing Partner — Digital Transformation",
    image: "/webp/assets/About-page/leadership/leader_07.webp",
  },
  {
    id: "lead-8",
    name: "Pete Nisbet",
    role: "Managing Partner — Global Energy & Utilities",
    image: "/webp/assets/About-page/leadership/leader_08.webp",
  },

  // Row 3 (9 to 12)
  {
    id: "lead-9",
    name: "Rachel Adams",
    role: "Chief Commercial Officer",
    image: "/webp/assets/About-page/leadership/leader_04.webp",
  },
  {
    id: "lead-10",
    name: "Emily Watson",
    role: "Managing Partner — Strategy & Global Delivery",
    image: "/webp/assets/About-page/leadership/leader_01.webp",
  },
  {
    id: "lead-11",
    name: "Arun Karthik",
    role: "VP of Global DevOps & SRE",
    image: "/webp/assets/About-page/leadership/leader_11.webp",
  },
  {
    id: "lead-12",
    name: "Siddharth Menon",
    role: "VP of Cybersecurity & Zero-Trust",
    image: "/webp/assets/About-page/leadership/leader_12.webp",
  },
];

export const LeadershipTeamGrid: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden font-sans">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <Reveal>
          {/* Section Heading with Reference Red/Rose Line */}
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3">
              Leadership Team
            </h2>
            <div className="w-20 h-1 bg-rose-600 rounded-full" />
          </div>

          {/* 4x3 Grid (4 columns on lg, 2 columns on sm, 1 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {leadershipTeamData.map((leader, index) => (
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

export default LeadershipTeamGrid;
