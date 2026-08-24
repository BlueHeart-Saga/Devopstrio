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
    color: "red",
    borderClass: "border-red-500/50 bg-red-500/5 hover:border-red-500/80",
    iconClass: "text-red-500 bg-red-500/10 border-red-500/20",
    timeClass: "text-red-400",
    badgeClass: "bg-red-500/15 text-red-400 border-red-500/30",
  },
  {
    icon: AlertTriangle,
    priority: "High",
    level: "P2",
    time: "4 Hours",
    color: "orange",
    borderClass: "border-orange-500/30 bg-orange-500/5 hover:border-orange-500/60",
    iconClass: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    timeClass: "text-orange-300",
    badgeClass: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  },
  {
    icon: Info,
    priority: "Medium",
    level: "P3",
    time: "8 Hours",
    color: "yellow",
    borderClass: "border-yellow-500/20 bg-yellow-500/5 hover:border-yellow-500/50",
    iconClass: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    timeClass: "text-yellow-300",
    badgeClass: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  },
  {
    icon: Clock3,
    priority: "Low",
    level: "P4",
    time: "24 Hours",
    color: "blue",
    borderClass: "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/50",
    iconClass: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    timeClass: "text-blue-300",
    badgeClass: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  },
];

export const SLAMatrix = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans mb-4"
          >
            Support <span className="text-rose-500 font-semibold">Response Matrix</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slas.map((sla, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative border rounded-2xl p-8 overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${sla.borderClass}`}
            >
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none" />

              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 shadow-sm ${sla.iconClass}`}>
                <sla.icon className="w-7 h-7" />
              </div>

              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-sm font-mono font-bold mb-5 ${sla.badgeClass}`}>
                {sla.level} · {sla.priority}
              </div>

              <div className={`text-5xl sm:text-6xl font-black mb-3 leading-none tracking-tight ${sla.timeClass}`}>
                {sla.time}
              </div>
              <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider font-sans">
                Response Target
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SLAMatrix;
