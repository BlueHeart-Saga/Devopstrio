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
    image: "/webp/assets/About-page/leadership/exec_stephen_hendry.webp",
  },
  {
    id: "exec-2",
    name: "Rajesh Subramanian",
    role: "Chief Operating Officer (COO)",
    image: "/webp/assets/About-page/leadership/exec_rajesh_subramanian.webp",
  },
  {
    id: "exec-3",
    name: "Jason Jennings",
    role: "Managing Director — UK & Europe",
    image: "/webp/assets/About-page/leadership/exec_jason_jennings.webp",
  },
  {
    id: "exec-4",
    name: "Claire Montgomery",
    role: "Chief Commercial Officer (CCO)",
    image: "/webp/assets/About-page/leadership/exec_claire_montgomery.webp",
  },

  // Row 2 — Executive Directors & Functional Heads
  {
    id: "exec-5",
    name: "Sarah Jenkins",
    role: "Chief Human Resources Officer (CHRO)",
    image: "/webp/assets/About-page/leadership/exec_sarah_jenkins.webp",
  },
  {
    id: "exec-6",
    name: "Andrew Fleming",
    role: "Executive Director — Cloud & SRE Platforms",
    image: "/webp/assets/About-page/leadership/exec_andrew_fleming.webp",
  },
  {
    id: "exec-7",
    name: "Siddharth Menon",
    role: "Executive Director — Cybersecurity & Enterprise Risk",
    image: "/webp/assets/About-page/leadership/exec_siddharth_menon.webp",
  },
  {
    id: "exec-8",
    name: "Kate Hancock",
    role: "Executive Director — Global Client Delivery",
    image: "/webp/assets/About-page/leadership/exec_kate_hancock.webp",
  },

  // Row 3 — Operations, Governance & Strategy Directors
  {
    id: "exec-9",
    name: "Ananya Ranganathan",
    role: "Executive Director — Quality & Enterprise Governance",
    image: "/webp/assets/About-page/leadership/exec_ananya_ranganathan.webp",
  },
  {
    id: "exec-10",
    name: "Divya Nambiar",
    role: "Executive Director — Enterprise Agile & Product Operations",
    image: "/webp/assets/About-page/leadership/exec_divya_nambiar.webp",
  },
  {
    id: "exec-11",
    name: "Marcus Thorne",
    role: "Executive Director — AI & Digital Engineering",
    image: "/webp/assets/About-page/leadership/exec_marcus_thorne.webp",
  },
  {
    id: "exec-12",
    name: "Sofia",
    role: "Executive Director — Strategy & Global Delivery",
    image: "/webp/assets/About-page/leadership/exec_sofia.webp",
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
              Executive Leadership
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
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-rose-400 transition-colors duration-200 leading-snug">
                    {leader.name}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] font-medium text-zinc-400 tracking-wide leading-snug pt-1">
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
