"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, FlaskConical, BookOpen, Cpu, Users2, Heart, ArrowRight } from "lucide-react";

const lifeItems = [
  { icon: Cpu, label: "Innovation Programs" },
  { icon: BookOpen, label: "Learning Initiatives" },
  { icon: FlaskConical, label: "Technical Workshops" },
  { icon: Rocket, label: "Hackathons" },
  { icon: Users2, label: "Team Celebrations" },
  { icon: Heart, label: "Community Engagement" },
];

const openRoles = [
  "Software Engineering", "Cloud Engineering",
  "DevOps & Automation", "AI & Data Innovation",
  "Cybersecurity", "Consulting",
];

export const LeadershipCareersCTA = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(255,23,68,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Life at Devopstrio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
            >
              Life at Devopstrio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
            >
              Beyond Technology,
              <br />
              <span className="text-[#FF1744]">Our People</span> Drive Culture.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg leading-relaxed mb-8"
            >
              We believe great teams build great products. Our culture is built on continuous learning, innovation, and genuine collaboration.
            </motion.p>
            <motion.a
              href="/about/life-at-devopstrio"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-red-500/40 text-white rounded-xl font-semibold text-sm transition-all"
            >
              Explore Life at Devopstrio
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {lifeItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="group flex flex-col items-center gap-3 p-5 bg-zinc-900/40 border border-zinc-800 hover:border-red-500/30 rounded-2xl text-center transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-colors">
                  <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-[#FF1744] transition-colors" />
                </div>
                <span className="text-zinc-400 text-xs font-medium group-hover:text-zinc-300 transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Careers CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-zinc-900/80 via-zinc-900/50 to-red-500/5 border border-zinc-800 rounded-3xl p-10 md:p-14 overflow-hidden text-center"
        >
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,23,68,0.06),transparent)]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Work with Leaders.
              <br />
              <span className="text-[#FF1744]">Build the Future.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Explore opportunities across engineering, cloud, DevOps, AI, cybersecurity, and consulting.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {openRoles.map((role, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-900/60 border border-zinc-800 text-zinc-300 text-sm rounded-lg font-medium hover:border-red-500/30 hover:text-white transition-colors">
                  {role}
                </span>
              ))}
            </div>

            <motion.a
              href="/careers"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-9 py-4 bg-[#FF1744] hover:bg-red-600 text-white rounded-xl font-semibold text-base transition-colors shadow-[0_0_35px_rgba(255,23,68,0.4)] hover:shadow-[0_0_55px_rgba(255,23,68,0.6)]"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
