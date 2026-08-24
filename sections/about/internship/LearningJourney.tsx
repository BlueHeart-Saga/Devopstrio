"use client";
import React from "react";
import { motion } from "framer-motion";
import { UserCheck, FileText, Calendar, Compass, ShieldAlert, Award, FileCode, CheckCircle } from "lucide-react";

import Link from "next/link";

const colorMap: Record<string, { border: string; icon: string; number: string; glow: string }> = {
  rose:    { border: "border-rose-500/30 hover:border-rose-500/60",    icon: "text-rose-500 bg-rose-500/10 border-rose-500/20",    number: "text-rose-500/10",    glow: "from-rose-500/10" },
  blue:    { border: "border-blue-500/30 hover:border-blue-500/60",    icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",    number: "text-blue-500/10",    glow: "from-blue-500/10" },
  emerald: { border: "border-emerald-500/30 hover:border-emerald-500/60", icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", number: "text-emerald-500/10", glow: "from-emerald-500/10" },
  orange:  { border: "border-orange-500/30 hover:border-orange-500/60", icon: "text-orange-400 bg-orange-500/10 border-orange-500/20", number: "text-orange-500/10", glow: "from-orange-500/10" },
  purple:  { border: "border-purple-500/30 hover:border-purple-500/60", icon: "text-purple-400 bg-purple-500/10 border-purple-500/20", number: "text-purple-500/10", glow: "from-purple-500/10" },
  cyan:    { border: "border-cyan-500/30 hover:border-cyan-500/60",    icon: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",    number: "text-cyan-500/10",    glow: "from-cyan-500/10" },
  indigo:  { border: "border-indigo-500/30 hover:border-indigo-500/60", icon: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20", number: "text-indigo-500/10", glow: "from-indigo-500/10" },
  pink:    { border: "border-pink-500/30 hover:border-pink-500/60",    icon: "text-pink-400 bg-pink-500/10 border-pink-500/20",    number: "text-pink-500/10",    glow: "from-pink-500/10" },
};

export const LearningJourney = () => {
  const steps = [
    { name: "Application", desc: "Submit resume & portfolio", icon: FileText, color: "rose" },
    { name: "Assessment", desc: "Technical skill evaluation", icon: FileCode, color: "blue" },
    { name: "Interview", desc: "Engage with core engineers", icon: Calendar, color: "emerald" },
    { name: "Onboarding", desc: "Get set up with tooling & workspace", icon: UserCheck, color: "orange" },
    { name: "Training", desc: "Deep-dives into technology stack", icon: Compass, color: "purple" },
    { name: "Project Assignment", desc: "Match with a real development task", icon: ShieldAlert, color: "cyan" },
    { name: "Mentorship", desc: "Weekly code reviews & support", icon: CheckCircle, color: "indigo" },
    { name: "Final Evaluation", desc: "Deliver and present your solution", icon: Award, color: "pink" },
    { name: "Certificate", desc: "Receive recommendations & certificate", icon: Award, color: "rose" }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 pt-16 sm:pt-24">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-[1.35] text-white mb-4 font-sans">
            Your Roadmap To Learn, Build &{" "}
            <span className="relative inline-block px-3.5 py-0.5 mx-1">
              {/* Top-to-bottom straight arrow PNG pointing directly down to 'Grow' */}
              <img src="/assets/components/streight-toptobuttm.png"
                alt="Top to bottom arrow"
                className="absolute -top-20 sm:-top-28 md:-top-32 left-1/2 -translate-x-1/2 w-16 sm:w-24 md:w-28 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(244,63,94,0.6)] pointer-events-none select-none z-20"
              loading="lazy" />

              <span className="relative z-10 text-white font-bold">Grow</span>
              {/* Brand Rose hand-drawn oval circle loop */}
              <svg
                className="absolute -inset-x-3.5 -inset-y-2 w-[calc(100%+28px)] h-[calc(100%+16px)] text-rose-500 pointer-events-none"
                viewBox="0 0 220 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 30 C30 8, 195 5, 208 28 C218 42, 160 54, 70 55 C18 56, 5 45, 18 26"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-95 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Grid-based Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const c = colorMap[step.color];
            
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
                <span className={`absolute top-4 right-6 text-[5.5rem] font-black ${c.number} select-none leading-none transition-transform duration-300 group-hover:scale-110`}>
                  0{idx + 1}
                </span>

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${c.icon}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
