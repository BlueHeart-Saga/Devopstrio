"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const areas = [
  {
    category: "Cloud Engineering",
    headline: "How Multi-Cloud Transformation Accelerates Growth",
    description: "Many enterprises struggle with cloud lock-in and escalating costs. This breakdown shows how a structured multi-cloud approach drives 40% cost reduction while maximizing resilience.",
    metric: "40%", metricLabel: "cost reduction",
    image: "/assets/images/testimonials/case_study_finops.png",
  },
  {
    category: "DevOps",
    headline: "The Real Impact of Automating Your CI/CD",
    description: "Manual deployments stall engineering velocity. See how adopting GitOps and infrastructure as code yields 3× faster release cycles.",
    metric: "3×", metricLabel: "release velocity",
    image: "/assets/images/testimonials/case_study_devops.png",
  },
  {
    category: "AI & Data",
    headline: "Turning Raw Data Into Real-Time Actions",
    description: "Most data platforms are too slow. Intelligent automation and ML pipelines enable 60% faster actionable insights for enterprise leaders.",
    metric: "60%", metricLabel: "faster insights",
    image: "/assets/images/testimonials/case_study_ai.png",
  },
  {
    category: "Cybersecurity",
    headline: "Zero-Trust: Beyond the Buzzword",
    description: "Discover how embedding DevSecOps into your architecture guarantees 100% compliance without slowing down your developers.",
    metric: "100%", metricLabel: "compliance rate",
    image: "/assets/images/testimonials/case_study_security.png",
  },
  {
    category: "Software Eng",
    headline: "Scaling SaaS Platforms for Global Reach",
    description: "A behind the scenes look at how we architected and launched robust enterprise applications for over 500+ successful deployments.",
    metric: "500+", metricLabel: "apps built",
    image: "/assets/images/testimonials/case_study_airbnb.png",
  },
  {
    category: "Managed Services",
    headline: "Achieving 99.9% Uptime in High-Stakes Environments",
    description: "Proactive infrastructure management and continuous operations ensure your critical systems never sleep.",
    metric: "99.9%", metricLabel: "uptime delivered",
    image: "/assets/images/testimonials/case_study_costco.png",
  },
];

export const SuccessByService = () => {
  const featured = areas[0];
  const rest = areas.slice(1);

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block"
          >
            Insights & Success
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white"
          >
            Practical reads to help you move <span className="italic font-serif font-medium">faster.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-base md:text-lg leading-relaxed"
          >
            Deep dives and case studies highlighting how we engineer robust, scalable solutions for leading enterprises.
          </motion.p>
        </div>

        {/* Featured Large Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/60 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col md:flex-row mb-6 lg:mb-8 group hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors shadow-2xl"
        >
          {/* Image Side with gradient fade */}
          <div className="w-full md:w-[55%] relative h-[300px] md:h-auto overflow-hidden bg-zinc-950">
            <Image 
              src={featured.image} 
              alt={featured.headline} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900/90 md:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 md:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/90 md:hidden block" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900 md:hidden block" />
          </div>
          
          {/* Content Side */}
          <div className="w-full md:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 -mt-10 md:mt-0 bg-gradient-to-t from-zinc-900 via-zinc-900 to-transparent md:bg-none">
            <div className="mb-6 self-start">
              <span className="px-3 py-1 bg-zinc-800/80 backdrop-blur-md rounded-full text-[11px] font-bold tracking-wider uppercase text-zinc-300 border border-zinc-700">
                {featured.category}
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-[34px] font-semibold text-white mb-6 tracking-tight leading-[1.2]">
              {featured.headline}
            </h3>
            
            <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed mb-12">
              {featured.description}
            </p>
            
            <div className="mt-auto flex items-center justify-between border-t border-zinc-800/60 pt-6">
              <div className="flex items-center gap-2.5">
                 <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                 <span className="text-white font-bold text-sm">{featured.metric}</span>
                 <span className="text-zinc-500 text-xs">{featured.metricLabel}</span>
              </div>
              <div className="text-zinc-500 font-serif italic text-sm tracking-wide">
                by Devopstrio
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rest.map((area, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900/60 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col group hover:border-zinc-700 hover:bg-zinc-900/80 transition-colors shadow-xl"
            >
              {/* Image Header with Bottom Gradient */}
              <div className="relative h-[220px] w-full overflow-hidden bg-zinc-950">
                <Image 
                  src={area.image} 
                  alt={area.headline} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/20 to-zinc-900/90" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900" />
                
                <div className="absolute top-5 right-5">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider uppercase text-white border border-white/10 shadow-lg">
                    {area.category}
                  </span>
                </div>
              </div>
              
              {/* Content Body */}
              <div className="p-8 pt-2 flex flex-col flex-1 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4 leading-snug group-hover:text-rose-100 transition-colors tracking-tight">
                  {area.headline}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
                  {area.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-zinc-800/60">
                  <div className="flex items-center gap-2">
                     <span className="text-rose-500 font-bold text-sm">{area.metric}</span>
                     <span className="text-zinc-500 text-xs">{area.metricLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
