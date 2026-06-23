"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const roadmap = [
  { step: "01", title: "Onboarding", desc: "Immersive introduction to our culture, tools, and engineering standards." },
  { step: "02", title: "Technical Training", desc: "Hands-on labs and workshops with modern cloud and AI technologies." },
  { step: "03", title: "Certifications", desc: "Fully funded paths for AWS, Azure, GCP, and Kubernetes certifications." },
  { step: "04", title: "Project Ownership", desc: "Taking the lead on critical features and architectural decisions." },
  { step: "05", title: "Leadership Development", desc: "Mentorship and training to become the next generation of tech leaders." }
];

const highlights = [
  "Azure Certifications", "AWS Certifications", "Cloud Labs", 
  "AI Workshops", "Internal Mentorship", "Hackathons"
];

export const LearningGrowth = () => {
  return (
    <section className="py-24 bg-black relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/2 sticky top-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Accelerate Your <span className="text-[#FF1744]">Growth</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg mb-10"
            >
              We believe in compounding knowledge. Our structured growth pathways ensure you're always learning, always challenged, and always moving forward in your career.
            </motion.p>

            <div className="flex flex-wrap gap-3">
              {highlights.map((item, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.05) }}
                  className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium hover:border-red-500/50 hover:text-red-400 transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="space-y-6 relative">
              <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-zinc-800" />
              
              {roadmap.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-6 relative"
                >
                  <div className="w-14 h-14 rounded-full bg-black border-2 border-zinc-800 flex items-center justify-center text-zinc-500 font-bold shrink-0 relative z-10 group-hover:border-red-500 transition-colors">
                    {item.step}
                  </div>
                  <div className="pt-3 pb-8">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
