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
    description: "Expert managed services ensuring high availability, continuous monitoring, and proactive incident response across all major public cloud environments.",
    image: "/assets/About-page/overview/customersupport/0d35c8aab4c24170e61d1ea01fc4ee77 1.png",
  },
  {
    id: "devops",
    icon: GitBranch,
    tag1: "DevOps",
    tag2: "CI/CD · Kubernetes",
    title: "DevOps Engineering",
    subtitle: "Platform Automation",
    description: "Dedicated support for deployment pipelines, Kubernetes clusters, and infrastructure as code to maintain seamless release cycles.",
    image: "/assets/About-page/overview/customersupport/1d57a7791a12aaa4fb18f8fa649970bd 1.png",
  },
  {
    id: "app",
    icon: AppWindow,
    tag1: "App",
    tag2: "SaaS · APIs",
    title: "Application Support",
    subtitle: "Frontend & Backend",
    description: "Comprehensive troubleshooting and performance monitoring for web applications, enterprise SaaS platforms, and core APIs.",
    image: "/assets/About-page/overview/customersupport/99acdd4cc45c729c9eae31b4df03ea1b 1.png",
  },
  {
    id: "security",
    icon: ShieldCheck,
    tag1: "Security",
    tag2: "SecOps · Compliance",
    title: "Security & SecOps",
    subtitle: "Zero Trust Architecture",
    description: "Proactive vulnerability management, 24/7 security monitoring, and rapid incident response to keep operations compliant.",
    image: "/assets/About-page/overview/customersupport/image 6.png",
  },
];

export const SupportServices = () => {
  const [active, setActive] = useState("cloud");
  const current = services.find(s => s.id === active)!;

  return (
    <section className="py-20 bg-[#050505] border-t border-zinc-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(255,23,68,0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-3"
          >
            Support Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-2"
          >
            How We Support <span className="text-rose-500">Your Business</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          
          {/* LEFT: Topics List (Compact) */}
          <div className="flex flex-row lg:flex-col gap-2.5 lg:w-[260px] xl:w-72 shrink-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 w-full">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-300 shrink-0 lg:shrink
                  ${active === s.id
                    ? "bg-rose-500/10 border-rose-500/40 text-white shadow-[0_0_15px_rgba(244,63,94,0.1)]"
                    : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 transition-colors
                  ${active === s.id ? "bg-rose-500/20 border-rose-500/30 text-rose-500" : "bg-zinc-800 border-zinc-700 text-zinc-400"}`}
                >
                  <s.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[13px] leading-tight">{s.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Rectangular Low Height Image Card */}
          <div className="flex-1 w-full bg-[#0A0A0A] rounded-[24px] border border-zinc-800 shadow-xl overflow-hidden min-h-[260px] lg:min-h-[280px] flex flex-col sm:flex-row">
            
            {/* Image Half */}
            <div className="w-full sm:w-5/12 lg:w-1/2 relative h-48 sm:h-auto overflow-hidden">
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

            {/* Content Half */}
            <div className="w-full sm:w-7/12 lg:w-1/2 p-6 md:p-8 flex flex-col justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl border border-rose-500/30 bg-rose-950/20 flex items-center justify-center text-rose-500 shrink-0">
                      <current.icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-tight">{current.tag1}</span>
                      <span className="text-xs font-semibold text-rose-500/80 leading-tight mt-0.5">{current.tag2}</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 leading-tight">
                    {current.title}
                  </h3>
                  <p className="text-rose-500 font-medium text-xs md:text-sm mb-4">
                    {current.subtitle}
                  </p>
                  
                  <p className="text-zinc-400 text-xs md:text-[13px] leading-relaxed font-medium">
                    {current.description}
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
