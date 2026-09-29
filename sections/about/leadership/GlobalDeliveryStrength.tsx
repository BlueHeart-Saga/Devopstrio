"use client";
import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

interface DeliveryTeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const deliveryTeamData: DeliveryTeamMember[] = [
  // Row 1 (1 to 4)
  {
    id: "del-1",
    name: "Sagadevan",
    role: "Lead, SME&C AI & Innovation",
    image: "/webp/assets/About-page/leadership/v2/sagadevan.webp",
  },
  {
    id: "del-2",
    name: "Sermaraja",
    role: "Lead, SME&C Growth Marketing",
    image: "/webp/assets/About-page/leadership/v2/sermaraj.webp",
  },
  {
    id: "del-3",
    name: "Oviya",
    role: "Lead, SME&C Experience Design",
    image: "/webp/assets/About-page/leadership/v2/oviya.webp",
  },
  {
    id: "del-4",
    name: "Subbiah",
    role: "Associate Systems Engineer",
    image: "/webp/assets/About-page/leadership/v2/subbiah.webp",
  },

  // Row 2 (5 to 8)
  {
    id: "del-5",
    name: "Kishore",
    role: "AI Developer",
    image: "/webp/assets/About-page/leadership/v2/kishore.webp",
  },
  {
    id: "del-6",
    name: "Punitha",
    role: "Creative Design & Brand Strategy Specialist",
    image: "/webp/assets/About-page/leadership/v2/punitha.webp",
  },
  {
    id: "del-7",
    name: "Ananthalakshmi",
    role: "QA Analyst",
    image: "/webp/assets/About-page/leadership/v2/ananthalakshmii.webp",
  },
  {
    id: "del-8",
    name: "Surya Prakash",
    role: "Associate Cloud Engineer",
    image: "/webp/assets/About-page/leadership/v2/surya.webp",
  },

  // Row 3 (9 to 12)
  {
    id: "del-9",
    name: "Sakthivelammal",
    role: "Associate Systems Engineer",
    image: "/webp/assets/About-page/leadership/v2/sakthi.webp",
  },
  {
    id: "del-10",
    name: "Sakaishwarya",
    role: "UI/UX Designer",
    image: "/webp/assets/About-page/leadership/v2/sakaiswarya.webp",
  },
  {
    id: "del-11",
    name: "Essakiammal",
    role: "SEO Analyst",
    image: "/webp/assets/About-page/leadership/v2/essaki.webp",
  },
  {
    id: "del-12",
    name: "Saravana Kumar",
    role: "AI Developer",
    image: "/webp/assets/About-page/leadership/v2/saravanakumar.webp",
  },

  // Row 4 (13 to 14 - Last Row)
  {
    id: "del-13",
    name: "Umamaheshwari",
    role: "Product Developer",
    image: "/webp/assets/About-page/leadership/v2/uma.webp",
  },
  {
    id: "del-14",
    name: "Hamsavarthiny",
    role: "AI Developer",
    image: "/webp/assets/About-page/leadership/v2/hamsa.webp",
  },
];

export const GlobalDeliveryStrength: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-black text-white relative overflow-hidden font-sans">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <Reveal>
          {/* Section Heading with Red/Rose Accent Line */}
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3">
              A Global Delivery Model Built on Local Strength
            </h2>
            <div className="w-20 h-1 bg-rose-600 rounded-full" />
          </div>

          {/* 4-column Grid for Landscape/Rectangular Profile Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {deliveryTeamData.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
                className="group flex flex-col bg-[#0b0b0e] border border-zinc-900/90 hover:border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-rose-950/20 transition-all duration-300"
              >
                {/* Rectangular Image Container (1487x1058 exact ratio) */}
                <div className="relative w-full aspect-[1487/1058] bg-zinc-950 overflow-hidden">
                  <img
                    src={`${member.image}?v=3`}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Leader Text Info */}
                <div className="p-5 text-left flex-1 flex flex-col justify-start">
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-rose-400 transition-colors duration-200 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] font-medium text-zinc-400 tracking-normal leading-relaxed pt-1.5">
                    {member.role}
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

export default GlobalDeliveryStrength;
