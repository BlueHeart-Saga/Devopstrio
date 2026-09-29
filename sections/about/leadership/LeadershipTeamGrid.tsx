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
  // Row 1 — C-Suite & Senior Executive Board
  {
    id: "exec-1",
    name: "Stephen Hendry",
    role: "Chief Financial Officer (CFO)",
    image: "/webp/assets/About-page/leadership/v2/7.webp",
  },
  {
    id: "exec-2",
    name: "Rajesh Subramanian",
    role: "Chief Operating Officer (COO)",
    image: "/webp/assets/About-page/leadership/v2/dev_emp_025.webp",
  },
  {
    id: "exec-3",
    name: "Jason Jennings",
    role: "Managing Director — UK & Europe",
    image: "/webp/assets/About-page/leadership/v2/dev_emp_016.webp",
  },
  {
    id: "exec-4",
    name: "Claire Montgomery",
    role: "Chief Commercial Officer (CCO)",
    image: "/webp/assets/About-page/leadership/v2/dev_emp_033.webp",
  },

  // Row 2 — Executive Directors & Functional Heads
  {
    id: "exec-5",
    name: "Sarah Jenkins",
    role: "Chief Human Resources Officer (CHRO)",
    image: "/webp/assets/About-page/leadership/v2/3.webp",
  },
  {
    id: "exec-6",
    name: "Andrew Fleming",
    role: "Executive Director — Cloud & SRE Platforms",
    image: "/webp/assets/About-page/leadership/v2/dev_emp_007.webp",
  },
  {
    id: "exec-7",
    name: "Siddharth Menon",
    role: "Executive Director — Cybersecurity & Enterprise Risk",
    image: "/webp/assets/About-page/leadership/v2/dev_emp_012.webp",
  },
  {
    id: "exec-8",
    name: "Kate Hancock",
    role: "Executive Director — Global Client Delivery",
    image: "/webp/assets/About-page/leadership/v2/dev_emp_003.webp",
  },

  // Row 3 — Operations, Governance & Strategy Directors
  {
    id: "exec-9",
    name: "Ananya Ranganathan",
    role: "Executive Director — Quality & Enterprise Governance",
    image: "/webp/assets/About-page/leadership/v2/dev_emp_026.webp",
  },
  {
    id: "exec-10",
    name: "Divya Nambiar",
    role: "Executive Director — Enterprise Agile & Product Operations",
    image: "/webp/assets/About-page/leadership/v2/6.webp",
  },
  {
    id: "exec-11",
    name: "Marcus Thorne",
    role: "Executive Director — AI & Digital Engineering",
    image: "/webp/assets/About-page/leadership/v2/dev_emp_009.webp",
  },
  {
    id: "exec-12",
    name: "Sofia",
    role: "Executive Director — Strategy & Global Delivery",
    image: "/webp/assets/About-page/leadership/v2/4.webp",
  },
];

export const LeadershipTeamGrid: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden font-sans">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <Reveal>
          {/* Section Heading with Red/Rose Accent Line */}
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3">
              Executive Leadership
            </h2>
            <div className="w-20 h-1 bg-rose-600 rounded-full" />
          </div>

          {/* 4-column Grid for Landscape/Rectangular Profile Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {leadershipTeamData.map((leader, index) => (
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
                    src={`${leader.image}?v=3`}
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

export default LeadershipTeamGrid;
