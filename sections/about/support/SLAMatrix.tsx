"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, AlertTriangle, Info, Clock3 } from "lucide-react";

const slas = [
  {
    icon: Zap,
    priority: "Critical",
    level: "P1",
    time: "1 Hour",
    description: "Production down or total service loss. Immediate engineer assignment and war-room activation.",
    color: "red",
    borderClass: "border-red-500/50 bg-red-500/5",
    iconClass: "text-red-500 bg-red-500/10 border-red-500/20",
    timeClass: "text-red-400",
    badgeClass: "bg-red-500/15 text-red-400 border-red-500/30",
  },
  {
    icon: AlertTriangle,
    priority: "High",
    level: "P2",
    time: "4 Hours",
    description: "Major function degraded with significant business impact. Lead architect prioritised.",
    color: "orange",
    borderClass: "border-orange-500/30 bg-orange-500/5",
    iconClass: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    timeClass: "text-orange-300",
    badgeClass: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  },
  {
    icon: Info,
    priority: "Medium",
    level: "P3",
    time: "8 Hours",
    description: "Non-critical issue affecting some users. Assigned to next available support engineer.",
    color: "yellow",
    borderClass: "border-yellow-500/20 bg-yellow-500/5",
    iconClass: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    timeClass: "text-yellow-300",
    badgeClass: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  },
  {
    icon: Clock3,
    priority: "Low",
    level: "P4",
    time: "24 Hours",
    description: "General queries, feature requests, or documentation help. Standard ticket queue.",
    color: "blue",
    borderClass: "border-blue-500/20 bg-blue-500/5",
    iconClass: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    timeClass: "text-blue-300",
    badgeClass: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  },
];

import Link from "next/link";

export const SLAMatrix = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
          >
            Response Commitments
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
          >
            Support <span className="text-rose-500">Response Matrix</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-2xl mx-auto"
          >
            Binding SLA thresholds across all priority levels, backed by our global engineering team. Learn about our <Link href="/services/managed-services" className="text-rose-500 hover:underline">managed services</Link> packages.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {slas.map((sla, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative border rounded-2xl p-8 overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${sla.borderClass}`}
            >
              {/* animated corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/3 to-transparent rounded-bl-full" />

              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${sla.iconClass}`}>
                <sla.icon className="w-6 h-6" />
              </div>

              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-bold mb-4 ${sla.badgeClass}`}>
                {sla.level} · {sla.priority}
              </div>

              <div className={`text-5xl font-black mb-2 leading-none ${sla.timeClass}`}>
                {sla.time}
              </div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono mb-4">Response Target</p>

              <p className="text-zinc-400 text-sm leading-relaxed">{sla.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
