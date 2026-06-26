"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Laptop2, BookOpen, Award, TrendingUp, Users2,
  Globe, Rocket, FlaskConical
} from "lucide-react";

const benefits = [
  { icon: Laptop2, title: "Flexible Work Culture", desc: "Hybrid-first setup designed around your productivity peak hours." },
  { icon: BookOpen, title: "Learning Budget", desc: "Annual budget for books, courses, and conferences of your choice." },
  { icon: Award, title: "Certification Support", desc: "100% sponsored cloud and tech certifications across major providers." },
  { icon: TrendingUp, title: "Performance Rewards", desc: "Competitive bonuses tied to your impact, not just tenure." },
  { icon: Users2, title: "Team Events", desc: "Regular off-sites, hackathons, and team-building experiences." },
  { icon: Globe, title: "Global Exposure", desc: "Work with clients and teams across multiple continents." },
  { icon: Rocket, title: "Career Acceleration", desc: "Fast-track programs for high performers to lead sooner." },
  { icon: FlaskConical, title: "Innovation Programs", desc: "Dedicated 20% time for research, open source, and side projects." },
];

export const BenefitsWellbeing = () => {
  return (
    <section className="py-24 bg-black relative border-t border-zinc-800">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
          >
            Benefits &amp; Wellbeing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
          >
            Everything You Need to <span className="text-rose-500">Thrive</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-2xl mx-auto"
          >
            We've designed our benefits package around what actually matters to engineers and technologists.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="group relative bg-black/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 overflow-hidden hover:border-red-500/40 transition-all duration-300 cursor-default"
            >
              {/* hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all duration-300">
                  <benefit.icon className="w-5 h-5 text-zinc-400 group-hover:text-rose-500 transition-colors duration-300" />
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
