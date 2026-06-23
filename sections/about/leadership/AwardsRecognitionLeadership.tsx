"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, BadgeCheck, Trophy, Star } from "lucide-react";

const certGroups = [
  {
    icon: BadgeCheck,
    category: "Cloud Certifications",
    items: ["Azure Solutions Architect Expert", "AWS Solutions Architect Professional", "Google Cloud Professional", "Oracle Cloud Infrastructure"],
    color: "blue",
  },
  {
    icon: Award,
    category: "Security Certifications",
    items: ["CISSP", "Azure Security Engineer", "AWS Security Specialty", "CompTIA Security+"],
    color: "green",
  },
  {
    icon: Trophy,
    category: "DevOps Certifications",
    items: ["CKA — Kubernetes", "HashiCorp Terraform", "GitHub Actions", "Azure DevOps Expert"],
    color: "orange",
  },
  {
    icon: Star,
    category: "Engineering Excellence",
    items: ["Technology Innovation Awards", "Client Success Recognition", "Partner Achievement Awards", "Quality Excellence Program"],
    color: "red",
  },
];

const colorMap: Record<string, { icon: string; item: string; border: string }> = {
  blue:   { icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",   item: "border-blue-500/15 bg-blue-500/5 text-blue-300/80",   border: "hover:border-blue-500/40" },
  green:  { icon: "text-green-400 bg-green-500/10 border-green-500/20", item: "border-green-500/15 bg-green-500/5 text-green-300/80", border: "hover:border-green-500/40" },
  orange: { icon: "text-orange-400 bg-orange-500/10 border-orange-500/20", item: "border-orange-500/15 bg-orange-500/5 text-orange-300/80", border: "hover:border-orange-500/40" },
  red:    { icon: "text-[#FF1744] bg-red-500/10 border-red-500/20",    item: "border-red-500/15 bg-red-500/5 text-red-300/80",     border: "hover:border-red-500/40" },
};

export const AwardsRecognitionLeadership = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-500/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
          >
            Awards &amp; Recognition
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Certified. Recognised.{" "}
            <span className="text-[#FF1744]">Trusted.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {certGroups.map((group, idx) => {
            const c = colorMap[group.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group bg-zinc-900/40 border border-zinc-800 ${c.border} rounded-2xl p-7 transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${c.icon}`}>
                  <group.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-base mb-5">{group.category}</h3>
                <div className="space-y-2">
                  {group.items.map((item, i) => (
                    <div key={i} className={`flex items-center gap-2 text-xs px-3 py-2 rounded-lg border font-mono ${c.item}`}>
                      <span className="w-1 h-1 rounded-full bg-current shrink-0 opacity-70" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
