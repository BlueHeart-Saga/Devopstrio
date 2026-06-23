"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, BookOpen, Globe2 } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We don't just follow trends; we create them. Every team member is encouraged to bring new ideas to the table, challenging the status quo to build better solutions."
  },
  {
    icon: Target,
    title: "Ownership Mindset",
    description: "We act as owners. From the code we write to the client relationships we build, we take full responsibility for outcomes and drive them to success."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and so do we. We invest heavily in your growth with learning budgets, certifications, and dedicated time for upskilling."
  },
  {
    icon: Globe2,
    title: "Global Collaboration",
    description: "Great ideas have no borders. We foster a culture where diverse teams across multiple time zones collaborate seamlessly to solve complex problems."
  }
];

export const CultureManifesto = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Manifesto Text */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-mono tracking-widest text-[#FF1744] uppercase mb-4 font-bold">Culture Manifesto</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">How We Work</h3>
              
              <div className="space-y-6 text-2xl font-light text-zinc-300">
                <p className="hover:text-white transition-colors cursor-default">We <span className="font-semibold text-white">build</span>.</p>
                <p className="hover:text-white transition-colors cursor-default">We <span className="font-semibold text-white">innovate</span>.</p>
                <p className="hover:text-white transition-colors cursor-default">We <span className="font-semibold text-white">learn</span>.</p>
                <p className="hover:text-white transition-colors cursor-default">We <span className="font-semibold text-[#FF1744]">own outcomes</span>.</p>
                <p className="hover:text-white transition-colors cursor-default">We <span className="font-semibold text-white">grow together</span>.</p>
              </div>
            </motion.div>
          </div>

          {/* Pillars Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900 hover:border-red-500/30 transition-all duration-300"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-zinc-800/80 flex items-center justify-center mb-6 group-hover:bg-red-500/20 group-hover:text-red-500 transition-colors duration-300 border border-zinc-700 group-hover:border-red-500/30 text-zinc-300">
                    <pillar.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">{pillar.title}</h4>
                  <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
