"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, GitBranch, AppWindow, ShieldCheck } from "lucide-react";

const services = [
  {
    id: "cloud",
    icon: Cloud,
    title: "Managed Cloud Support",
    subtitle: "Azure · AWS · GCP",
    items: [
      "Azure Support & Architecture",
      "AWS Infrastructure Management",
      "Google Cloud Operations",
      "Cloud Cost Optimisation",
      "Multi-Cloud Strategy",
      "Cloud Migration Support",
    ],
  },
  {
    id: "devops",
    icon: GitBranch,
    title: "DevOps Support",
    subtitle: "CI/CD · Kubernetes · IaC",
    items: [
      "CI/CD Pipeline Troubleshooting",
      "Kubernetes Cluster Management",
      "Platform Engineering",
      "Infrastructure as Code (IaC)",
      "Release & Deployment Automation",
      "GitOps & Observability",
    ],
  },
  {
    id: "app",
    icon: AppWindow,
    title: "Application Support",
    subtitle: "SaaS · APIs · Monitoring",
    items: [
      "SaaS Platform Support",
      "Web Application Management",
      "API Integration Assistance",
      "Performance Monitoring",
      "Bug Triage & Resolution",
      "Frontend & Backend Support",
    ],
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Security Support",
    subtitle: "Incident · SecOps · Compliance",
    items: [
      "Incident Response",
      "Vulnerability Management",
      "Security Monitoring",
      "Compliance Assistance",
      "DevSecOps Integration",
      "Zero Trust Architecture",
    ],
  },
];

export const SupportServices = () => {
  const [active, setActive] = useState("cloud");
  const current = services.find(s => s.id === active)!;

  return (
    <section className="py-24 bg-[#050505] border-t border-zinc-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(255,23,68,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
          >
            Support Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
          >
            How We Support <span className="text-rose-500">Your Business</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <div className="flex flex-row lg:flex-col gap-3 lg:w-72 shrink-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl border text-left transition-all duration-300 shrink-0 lg:shrink
                  ${active === s.id
                    ? "bg-rose-500/10 border-rose-500/40 text-white"
                    : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"}`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center border shrink-0 transition-colors
                  ${active === s.id ? "bg-rose-500/20 border-rose-500/30 text-rose-500" : "bg-zinc-800 border-zinc-700 text-zinc-400"}`}
                >
                  <s.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-sm leading-tight">{s.title}</p>
                  <p className={`text-xs mt-0.5 hidden lg:block ${active === s.id ? "text-rose-400/70" : "text-zinc-600"}`}>{s.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="flex-1 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                    <current.icon className="w-7 h-7 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{current.title}</h3>
                    <p className="text-rose-400 text-sm font-medium mt-0.5">{current.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3 px-4 py-3 bg-black/40 border border-zinc-800 rounded-lg group hover:border-zinc-600 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span className="text-zinc-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
