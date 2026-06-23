"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Cpu, Lightbulb, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision begins with customer success and measurable business outcomes. We exist to create value for the organizations we serve.",
    number: "01",
    color: "red",
  },
  {
    icon: Cpu,
    title: "Engineering Excellence",
    description: "We prioritize quality, scalability, security, and performance in everything we build. Good enough is never our standard.",
    number: "02",
    color: "blue",
  },
  {
    icon: Lightbulb,
    title: "Innovation Mindset",
    description: "We continuously explore emerging technologies and modern engineering practices to stay ahead and deliver future-proof solutions.",
    number: "03",
    color: "orange",
  },
  {
    icon: ShieldCheck,
    title: "Ownership Culture",
    description: "Teams are empowered to take responsibility and drive meaningful impact. Leaders at every level take ownership of outcomes, not just tasks.",
    number: "04",
    color: "green",
  },
];

const colorMap: Record<string, { border: string; icon: string; number: string; glow: string }> = {
  red:    { border: "border-red-500/30 hover:border-red-500/60",    icon: "text-[#FF1744] bg-red-500/10 border-red-500/20",    number: "text-red-500/20",    glow: "from-red-500/6" },
  blue:   { border: "border-blue-500/30 hover:border-blue-500/60",  icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",   number: "text-blue-500/20",   glow: "from-blue-500/6" },
  orange: { border: "border-orange-500/30 hover:border-orange-500/60", icon: "text-orange-400 bg-orange-500/10 border-orange-500/20", number: "text-orange-500/20", glow: "from-orange-500/6" },
  green:  { border: "border-green-500/30 hover:border-green-500/60", icon: "text-green-400 bg-green-500/10 border-green-500/20",  number: "text-green-500/20",  glow: "from-green-500/6" },
};

export const LeadershipPrinciples = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(255,23,68,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
          >
            Our Principles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Leadership <span className="text-[#FF1744]">Principles</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-xl mx-auto"
          >
            The values that guide every decision, every architecture, and every client engagement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => {
            const c = colorMap[p.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative bg-zinc-900/40 border ${c.border} rounded-2xl p-8 overflow-hidden transition-all duration-300`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Large number watermark */}
                <span className={`absolute top-4 right-6 text-8xl font-black ${c.number} select-none leading-none`}>
                  {p.number}
                </span>

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${c.icon}`}>
                    <p.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
