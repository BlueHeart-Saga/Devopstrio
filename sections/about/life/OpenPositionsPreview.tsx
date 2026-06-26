"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

const positions = [
  {
    title: "Software Engineer",
    department: "Engineering",
    location: "Hybrid · India",
    type: "Full-time",
    tags: ["React", "Node.js", "Python"],
    href: "/careers"
  },
  {
    title: "DevOps Engineer",
    department: "Platform Engineering",
    location: "Hybrid · India / UAE",
    type: "Full-time",
    tags: ["Kubernetes", "Terraform", "CI/CD"],
    href: "/careers"
  },
  {
    title: "Cloud Architect",
    department: "Cloud Practice",
    location: "Remote · Global",
    type: "Full-time",
    tags: ["Azure", "AWS", "GCP"],
    href: "/careers"
  },
  {
    title: "AI Engineer",
    department: "AI & Data Innovation",
    location: "Hybrid · India",
    type: "Full-time",
    tags: ["Python", "LLMs", "MLOps"],
    href: "/careers"
  },
  {
    title: "Data Engineer",
    department: "Data Practice",
    location: "Hybrid · India / UK",
    type: "Full-time",
    tags: ["Spark", "dbt", "Snowflake"],
    href: "/careers"
  },
  {
    title: "Platform Engineer",
    department: "Platform Engineering",
    location: "Remote · Global",
    type: "Full-time",
    tags: ["Backstage", "ArgoCD", "Golang"],
    href: "/careers"
  },
];

export const OpenPositionsPreview = () => {
  return (
    <section id="open-positions" className="py-24 bg-black border-t border-zinc-800 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
            >
              Open Positions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
            >
              Join Our <span className="text-rose-500">Team</span>
            </motion.h2>
          </div>
          <motion.a
            href="/careers"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
          >
            View all positions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {positions.map((pos, idx) => (
            <motion.a
              key={idx}
              href={pos.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="group relative bg-black/60 border border-zinc-800 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300 flex flex-col gap-4 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-white font-bold text-lg group-hover:text-red-400 transition-colors leading-snug">
                    {pos.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-zinc-600 shrink-0 mt-1 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                </div>

                <p className="text-zinc-500 text-sm mb-4">{pos.department}</p>

                <div className="flex flex-col gap-2 text-sm text-zinc-500 mb-5">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-zinc-600" /> {pos.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-zinc-600" /> {pos.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {pos.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono px-2.5 py-1 bg-zinc-900 text-zinc-400 rounded-full border border-zinc-800 group-hover:border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
