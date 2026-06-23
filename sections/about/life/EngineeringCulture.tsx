"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cloud, Cpu, Terminal, Shield, Lock, Code2, Database, Workflow } from "lucide-react";

const engineeringAreas = [
  { icon: Cloud, title: "Cloud Native Development", tools: ["Azure", "AWS", "Google Cloud"] },
  { icon: Cpu, title: "AI Product Innovation", tools: ["Python", "TensorFlow", "OpenAI"] },
  { icon: Terminal, title: "DevOps Excellence", tools: ["Kubernetes", "Terraform", "Docker"] },
  { icon: Workflow, title: "Platform Engineering", tools: ["Backstage", "Crossplane", "ArgoCD"] },
  { icon: Shield, title: "Cybersecurity", tools: ["Zero Trust", "DevSecOps", "Compliance"] },
  { icon: Code2, title: "Modern Web Apps", tools: ["React", "Next.js", "FastAPI"] },
];

export const EngineeringCulture = () => {
  return (
    <section className="py-24 bg-[#111111] relative border-y border-zinc-800/50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Engineering at <span className="text-red-500">Devopstrio</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            We are builders at heart. Our engineering culture is defined by technical excellence, robust architectures, and using the right tools to solve the right problems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all duration-300">
                <area.icon className="w-7 h-7 text-zinc-400 group-hover:text-red-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">{area.title}</h3>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {area.tools.map((tool, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-mono px-3 py-1 bg-zinc-900 text-zinc-300 rounded-full border border-zinc-800 group-hover:border-zinc-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
