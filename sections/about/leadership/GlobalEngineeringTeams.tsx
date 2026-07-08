"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Cloud, GitBranch, Workflow, Code2, Database,
  Cpu, Shield, TestTube2, Headphones
} from "lucide-react";

import Link from "next/link";

const teams = [
  { icon: Cloud, name: "Cloud Engineers", count: "80+", desc: <>Azure, AWS, and GCP certified engineers in our <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud services</Link> division.</> },
  { icon: GitBranch, name: "DevOps Engineers", count: "60+", desc: <>Pipeline automation, GitOps, and SRE specialists in <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">DevOps automation</Link>.</> },
  { icon: Workflow, name: "Platform Engineers", count: "40+", desc: "Internal developer platform and IDP builders." },
  { icon: Code2, name: "Software Developers", count: "120+", desc:  <>Full-stack and backend engineering specialists under <Link href="/services/software-development" className="text-rose-500 hover:underline font-bold">software development</Link>.</> },
  { icon: Database, name: "Data Engineers", count: "50+", desc: <>Lakehouse, ETL, and streaming data experts in <Link href="/services/data-engineering" className="text-rose-500 hover:underline font-bold">data engineering</Link>.</> },
  { icon: Cpu, name: "AI Specialists", count: "35+", desc: <>LLM, MLOps, and AI product engineers in <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline font-bold">AI & data innovation</Link>.</> },
  { icon: Shield, name: "Cybersecurity Experts", count: "30+", desc: <>Cloud security, DevSecOps, and compliance with our <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-bold">cybersecurity</Link> team.</> },
  { icon: TestTube2, name: "QA Engineers", count: "45+", desc: "Automated and performance testing specialists." },
  { icon: Headphones, name: "IT Consultants", count: "65+", desc: "Advisory, architecture, and delivery consultants." },
];

export const GlobalEngineeringTeams = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute -right-40 bottom-0 w-96 h-96 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left sticky heading */}
          <div className="lg:w-80 shrink-0 lg:sticky lg:top-24">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
            >
              Global Engineering Teams
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
            >
              Built by <span className="text-rose-500">Specialists</span>. Driven by Collaboration.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-base leading-relaxed mb-6"
            >
              Devopstrio brings together multidisciplinary teams working across global delivery centers to accelerate innovation and business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800"
            >
              <div className="text-center">
                <p className="text-2xl font-black text-white">525+</p>
                <p className="text-zinc-600 text-xs mt-1">Experts</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-white">9</p>
                <p className="text-zinc-600 text-xs mt-1">Disciplines</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-white">4+</p>
                <p className="text-zinc-600 text-xs mt-1">Countries</p>
              </div>
            </motion.div>
          </div>

          {/* Right grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teams.map((team, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group bg-zinc-900/40 border border-zinc-800 hover:border-red-500/30 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-colors">
                    <team.icon className="w-5 h-5 text-zinc-400 group-hover:text-[#FF1744] transition-colors" />
                  </div>
                  <span className="text-2xl font-black text-white group-hover:text-[#FF1744] transition-colors">{team.count}</span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{team.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{team.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
