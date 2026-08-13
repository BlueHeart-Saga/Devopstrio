"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, BookOpen, Globe2 } from "lucide-react";

import Link from "next/link";

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
    description:  <>Technology evolves rapidly, and so do we. We invest heavily in your growth with learning budgets, certifications in <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud platforms</Link>, and dedicated time for upskilling.</>
  },
  {
    icon: Globe2,
    title: "Global Collaboration",
    description:  <>Great ideas have no borders. We foster a culture where diverse teams across multiple time zones collaborate seamlessly to solve complex problems. Explore our <Link href="/about/global-presence" className="text-rose-500 hover:underline font-bold">global presence</Link>.</>
  }
];

export const CultureManifesto = () => {
  return (
    <section className="py-24 sm:py-32 bg-black relative overflow-hidden text-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-rose-600/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">
          
          {/* Manifesto Text (50% Width) */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-rose-500 block mb-4 font-mono">
                Culture Manifesto
              </span> */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.12] text-white mb-6">
                How We <span className="text-rose-500">Work</span>
              </h2>
              
              {/* Left-Aligned Manifesto Statements with Larger Font Size */}
              <div className="flex flex-col space-y-5 sm:space-y-7 mt-8 sm:mt-12 select-none">
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="pl-0 text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[46px] font-light text-zinc-300 hover:text-white transition-all duration-300 cursor-default"
                >
                  We <span className="font-semibold text-white">learn</span>.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="pl-0 text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[46px] font-light text-zinc-300 hover:text-white transition-all duration-300 cursor-default"
                >
                  We <span className="font-semibold text-white">build</span>.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="pl-0 text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[46px] font-light text-zinc-200 hover:text-white transition-all duration-300 cursor-default"
                >
                  We <span className="font-semibold text-white">innovate</span>.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="pl-0 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[48px] font-light text-zinc-100 hover:text-white transition-all duration-300 cursor-default"
                >
                  We <span className="font-semibold text-rose-500">own outcomes</span>.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="pl-0 text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[56px] font-light text-white transition-all duration-300 cursor-default"
                >
                  We <span className="font-semibold text-white">grow together</span>.
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Pillars Grid (50% Width) */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 sm:p-7 hover:bg-zinc-900/90 hover:border-rose-500/40 transition-all duration-500 cursor-pointer flex flex-col justify-start"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 w-full">
                  <div className="w-11 h-11 rounded-lg bg-zinc-800/80 flex items-center justify-center mb-4 group-hover:bg-rose-500/20 group-hover:text-rose-500 transition-all duration-300 border border-zinc-700 group-hover:border-rose-500/30 text-zinc-300">
                    <pillar.icon size={22} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-rose-500 transition-colors duration-300">
                    {pillar.title}
                  </h4>
                  
                  {/* Description: Hidden by default, reveals smoothly on hover */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 pt-3 text-xs sm:text-sm">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
