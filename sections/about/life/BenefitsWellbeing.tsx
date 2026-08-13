"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Laptop2, BookOpen, Award, TrendingUp, Users2,
  Globe, Rocket, FlaskConical
} from "lucide-react";

import Link from "next/link";

const benefits = [
  { icon: Laptop2, title: "Flexible Work Culture", desc: <>Hybrid-first setup designed around your productivity peak hours. View our <Link href="/careers" className="text-rose-500 hover:underline font-bold">careers portal</Link>.</> },
  { icon: BookOpen, title: "Learning Budget", desc: "Annual budget for books, courses, and conferences of your choice." },
  { icon: Award, title: "Certification Support", desc:  <>100% sponsored cloud and tech certifications across major providers in <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud services</Link>.</> },
  { icon: TrendingUp, title: "Performance Rewards", desc: "Competitive bonuses tied to your impact, not just tenure." },
  { icon: Users2, title: "Team Events", desc: "Regular off-sites, hackathons, and team-building experiences." },
  { icon: Globe, title: "Global Exposure", desc: "Work with clients and teams across multiple continents." },
  { icon: Rocket, title: "Career Acceleration", desc: "Fast-track programs for high performers to lead sooner." },
  { icon: FlaskConical, title: "Innovation Programs", desc: "Dedicated 20% time for research, open source, and side projects." },
];

export const BenefitsWellbeing = () => {
  return (
    <section className="py-24 sm:py-32 bg-black relative border-t border-zinc-900">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-white mb-4"
          >
            Everything You Need to <span className="text-rose-500">Thrive</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative bg-zinc-950/70 backdrop-blur-sm border border-zinc-800/80 rounded-3xl p-7 sm:p-8 overflow-hidden hover:border-rose-500/50 hover:bg-zinc-900/80 transition-all duration-500 cursor-default flex flex-col justify-start min-h-[200px] shadow-xl"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 group-hover:bg-rose-500/10 group-hover:border-rose-500/40 transition-all duration-300 shadow-md">
                  <benefit.icon className="w-7 h-7 text-zinc-300 group-hover:text-rose-500 transition-colors duration-300" />
                </div>
                <h3 className="text-white font-semibold text-xl sm:text-2xl mb-1 group-hover:mb-3 tracking-tight group-hover:text-rose-400 transition-all duration-300">
                  {benefit.title}
                </h3>
                {/* Description shows only on hover with smooth expansion */}
                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-semibold pt-1">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
