"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, GraduationCap, MonitorSmartphone, Building2, Leaf } from "lucide-react";

const initiatives = [
  {
    icon: Heart,
    title: "CSR Activities",
    description: "Regular volunteering drives and company-wide days dedicated to giving back to local communities."
  },
  {
    icon: GraduationCap,
    title: "Education Programs",
    description: "Scholarships and coding bootcamps for underprivileged youth to build the next generation of engineers."
  },
  {
    icon: MonitorSmartphone,
    title: "Technology Workshops",
    description: "Free workshops bringing AI and cloud literacy to communities and small businesses that need it most."
  },
  {
    icon: Building2,
    title: "Community Development",
    description: "Partnering with local NGOs and government bodies to use technology for social good and infrastructure."
  },
  {
    icon: Leaf,
    title: "Environmental Initiatives",
    description: "Our commitment to a greener future through carbon offset programs and sustainable engineering practices."
  },
];

export const CommunityImpact = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-800 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
            >
              Impact & Community
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Giving <span className="text-[#FF1744]">Back</span><br />
              to the World
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg leading-relaxed"
            >
              Our mission extends beyond client projects. We invest in the communities around us, leveraging technology as a force for meaningful, lasting change.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-zinc-800"
            >
              <div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-zinc-500 text-sm mt-1">Volunteer Hours</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">20+</p>
                <p className="text-zinc-500 text-sm mt-1">NGO Partners</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">3K+</p>
                <p className="text-zinc-500 text-sm mt-1">Students Trained</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Initiative cards */}
          <div className="space-y-4">
            {initiatives.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex gap-5 items-start bg-black/40 border border-zinc-800 rounded-2xl p-5 hover:border-red-500/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-colors">
                  <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-red-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
