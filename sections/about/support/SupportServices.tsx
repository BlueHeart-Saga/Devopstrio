"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, GitBranch, AppWindow, ShieldCheck } from "lucide-react";

const services = [
  {
    id: "cloud",
    icon: Cloud,
    tag1: "Cloud",
    tag2: "Azure · AWS · GCP",
    title: "Managed Cloud Support",
    subtitle: "Infrastructure Optimisation",
    image: "/assets/About-page/overview/customersupport/0d35c8aab4c24170e61d1ea01fc4ee77-1.png",
  },
  {
    id: "devops",
    icon: GitBranch,
    tag1: "DevOps",
    tag2: "CI/CD · Kubernetes",
    title: "DevOps Engineering",
    subtitle: "Platform Automation",
    image: "/assets/About-page/overview/customersupport/1d57a7791a12aaa4fb18f8fa649970bd-1.png",
  },
  {
    id: "app",
    icon: AppWindow,
    tag1: "App",
    tag2: "SaaS · APIs",
    title: "Application Support",
    subtitle: "Frontend & Backend",
    image: "/assets/About-page/overview/customersupport/99acdd4cc45c729c9eae31b4df03ea1b-1.png",
  },
  {
    id: "security",
    icon: ShieldCheck,
    tag1: "Security",
    tag2: "SecOps · Compliance",
    title: "Security & SecOps",
    subtitle: "Zero Trust Architecture",
    image: "/assets/About-page/overview/customersupport/image-6.png",
  },
];

export const SupportServices = () => {
  const [active, setActive] = useState("cloud");
  const current = services.find(s => s.id === active)!;

  return (
    <section className="py-20 bg-[#050505] border-t border-zinc-900 relative font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(255,23,68,0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans mb-4"
          >
            How We Support <span className="text-rose-500 font-semibold">Your Business</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          
          {/* LEFT: Topics List (Prominent Viewable Buttons) */}
          <div className="flex flex-row lg:flex-col gap-3 lg:w-[280px] xl:w-80 shrink-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 w-full">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-3.5 px-5 py-4 rounded-xl border text-left transition-all duration-300 shrink-0 lg:shrink cursor-pointer
                  ${active === s.id
                    ? "bg-rose-500/10 border-rose-500/40 text-white shadow-[0_0_20px_rgba(244,63,94,0.15)]"
                    : "bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-white"}`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 transition-colors
                  ${active === s.id ? "bg-rose-500/20 border-rose-500/40 text-rose-500" : "bg-zinc-800 border-zinc-700 text-zinc-400"}`}
                >
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-base md:text-lg leading-tight">{s.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Rectangular Card (Simple, Prominent Viewable Text, Desc Removed) */}
          <div className="flex-1 w-full bg-[#0A0A0A] rounded-[24px] border border-zinc-800/80 shadow-2xl overflow-hidden min-h-[260px] lg:min-h-[280px] flex flex-col sm:flex-row">
            
            {/* Image Half */}
            <div className="w-full sm:w-5/12 lg:w-1/2 relative h-56 sm:h-auto overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={active}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={current.image}
                  alt={current.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A0A0A]/95 hidden sm:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent sm:hidden" />
            </div>

            {/* Content Half (Clean Prominent Text) */}
            <div className="w-full sm:w-7/12 lg:w-1/2 p-7 md:p-10 flex flex-col justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl border border-rose-500/30 bg-rose-950/30 flex items-center justify-center text-rose-500 shrink-0 shadow-inner">
                      <current.icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-tight">{current.tag1}</span>
                      <span className="text-sm font-semibold text-rose-400 leading-tight mt-0.5">{current.tag2}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight font-sans tracking-tight">
                    {current.title}
                  </h3>
                  
                  <p className="text-rose-500 font-semibold text-base sm:text-lg tracking-wide">
                    {current.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SupportServices;
