"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, BookOpen, Users, Globe } from "lucide-react";

export const InternshipHero = () => {
  const highlights = [
    { text: "Paid & Unpaid Opportunities", icon: Award },
    { text: "Industry Mentorship", icon: Users },
    { text: "Hands-on Project Experience", icon: BookOpen },
    { text: "Global Engineering Exposure", icon: Globe },
  ];

  const stats = [
    { value: "500+", label: "Students Trained", desc: "Across diverse institutions globally" },
    { value: "100+", label: "Internship Projects", desc: "Real-world commercial deployments" },
    { value: "20+", label: "Expert Mentors", desc: "Cloud architects & AI engineers" },
    { value: "4+", label: "Global Locations", desc: "UK, Europe, India & Remote" },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black pt-28 pb-16">
      {/* Background Glowing Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.12),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(225,29,72,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Decorative floating grids */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(244,63,94,0.15)]">
            <Sparkles size={14} className="animate-pulse" />
            Global Internship Program
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center text-white tracking-tight leading-none max-w-5xl"
        >
          Launch Your Technology Career <br className="hidden md:inline" />
          with <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600">Devopstrio</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-zinc-400 text-center max-w-3xl leading-relaxed"
        >
          Work alongside cloud architects, AI engineers, DevOps specialists, and software development teams on real-world projects. Position yourself at the forefront of modern engineering.
        </motion.p>

        {/* Bullet Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mt-12 mb-12"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 px-5 py-4 bg-zinc-900/40 border border-zinc-800/60 rounded-xl backdrop-blur-sm hover:border-rose-500/30 transition-all duration-300 hover:bg-zinc-900/60"
              >
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-semibold text-zinc-200">{item.text}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScroll("apply-form")}
            className="w-full sm:w-auto px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-bold transition-all duration-300 shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] flex items-center justify-center gap-2 group"
          >
            Apply Now
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => handleScroll("program-tracks")}
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900/60 hover:bg-zinc-800 text-white rounded-lg font-bold transition-all duration-300 border border-zinc-800 hover:border-rose-500/40 backdrop-blur-sm"
          >
            Explore Programs
          </button>
        </motion.div>

        {/* Stats Grid section */}
        <div className="w-full border-t border-zinc-800/80 pt-16 mt-20">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
            >
              Build Skills. Gain Experience. Create Impact.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-zinc-400 max-w-3xl mx-auto mt-4 text-sm sm:text-base leading-relaxed"
            >
              The Devopstrio Global Internship Program provides aspiring technology professionals with practical experience across AI, Cloud Engineering, DevOps, Cybersecurity, Data Engineering, and Software Development.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-zinc-950/50 border border-zinc-900 hover:border-zinc-800 p-6 rounded-2xl text-center group transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow dot on hover */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-rose-500/5 rounded-full blur-xl group-hover:bg-rose-500/10 transition-colors" />
                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2 group-hover:text-rose-500 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-zinc-300 mb-1">{stat.label}</div>
                <div className="text-xs text-zinc-550 leading-relaxed font-medium">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
