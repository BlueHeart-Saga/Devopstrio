"use client";
import React from "react";
import { motion } from "framer-motion";
import { UserCheck, FileText, Calendar, Compass, ShieldAlert, Award, FileCode, CheckCircle, ChevronDown } from "lucide-react";

export const LearningJourney = () => {
  const steps = [
    { name: "Application", desc: "Submit resume & portfolio", icon: FileText },
    { name: "Assessment", desc: "Technical skill evaluation", icon: FileCode },
    { name: "Interview", desc: "Engage with core engineers", icon: Calendar },
    { name: "Onboarding", desc: "Get set up with tooling & workspace", icon: UserCheck },
    { name: "Training", desc: "Deep-dives into technology stack", icon: Compass },
    { name: "Project Assignment", desc: "Match with a real development task", icon: ShieldAlert },
    { name: "Mentorship", desc: "Weekly code reviews & support", icon: CheckCircle },
    { name: "Final Evaluation", desc: "Deliver and present your solution", icon: Award },
    { name: "Certificate", desc: "Receive recommendations & certificate", icon: Award }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-rose-500 font-bold">The Roadmap</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">Your Learning Journey</h2>
          <p className="text-zinc-400 mt-4 text-sm sm:text-base leading-relaxed">
            From your initial application to graduating with certified skills, here is what your engineering experience will look like.
          </p>
        </div>

        {/* Roadmap Roadmap Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500/80 via-rose-500/20 to-zinc-900 -translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon Circle */}
                  <div className="absolute left-[30px] md:left-1/2 top-0 md:top-auto w-12 h-12 rounded-full bg-zinc-950 border-2 border-rose-500/80 shadow-[0_0_15px_rgba(244,63,94,0.3)] flex items-center justify-center text-rose-500 -translate-x-1/2 z-10 transition-transform duration-300 hover:scale-110">
                    <Icon size={18} />
                  </div>

                  {/* Card Content block */}
                  <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                    <div className="bg-zinc-950/60 border border-zinc-900 hover:border-zinc-800 p-6 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg relative group">
                      <span className="text-[10px] font-mono tracking-widest text-rose-500 font-bold uppercase mb-1 block">
                        Step 0{idx + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{step.name}</h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Middle arrows */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-[30px] md:left-1/2 bottom-[-45px] -translate-x-1/2 text-rose-500/60 hidden md:block">
                      <ChevronDown size={18} className="animate-bounce" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
