"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const InternshipHero = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[750px] flex flex-col justify-center items-center overflow-hidden bg-black pt-24 pb-12 lg:pb-0">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 xl:px-8 relative z-10 flex flex-col gap-8 py-8 lg:py-16">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tighter leading-[0.95] uppercase mb-4">
              Your Future, <br className="hidden sm:block" />
              <span className="text-zinc-400">Our Mission</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-wide">
              Exceeding Standards In Global Engineering
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button 
              onClick={() => handleScroll("apply-form")}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white px-8 py-4 rounded-2xl font-bold tracking-wide transition-all duration-300 shadow-xl"
            >
              Apply Now
            </button>
          </motion.div>
        </div>

        {/* Middle Wide Image Row */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full relative h-[400px] md:h-[500px] lg:h-[550px] rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-zinc-800/50"
        >
          <Image 
            src="/assets/About-page/leadership/leadership-banner/2.png" 
            alt="Devopstrio Internship Team"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            unoptimized
          />
          {/* Gradients for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Glassmorphism inner floating box */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-[600px] bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8">
             <span className="bg-white/90 text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block shadow-sm">
               Program
             </span>
             <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 tracking-tight">
               Leaders in technology incubation
             </h3>
             {/* <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-medium">
               Our internship covers <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud architecture</Link>, <Link href="/services/data-engineering" className="text-[#E11D48] hover:underline">data pipelines</Link>, <Link href="/services/ai-data-innovation" className="text-[#E11D48] hover:underline">AI models</Link>, and real-world <Link href="/services/software-development" className="text-[#E11D48] hover:underline">software deployments</Link> to turn you into a top-tier engineer.
             </p> */}
             
             
          </div>
        </motion.div>

        {/* Bottom Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2"
        >
          {/* Stat 1 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-[2rem] p-8 flex justify-between items-end hover:border-zinc-800 transition-colors group">
            <div>
               <h4 className="text-5xl font-bold text-white mb-2 tracking-tighter">500+</h4>
               <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Students Trained</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-900 text-zinc-400 group-hover:bg-zinc-800 group-hover:text-white transition-colors flex items-center justify-center cursor-pointer">
               <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          
          {/* Stat 2 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-[2rem] p-8 flex justify-between items-end hover:border-zinc-800 transition-colors">
            <div>
               <h4 className="text-5xl font-bold text-white mb-2 tracking-tighter">100+</h4>
               <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Real Projects</p>
            </div>
            <span className="border border-zinc-800 text-zinc-500 text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-widest">Global</span>
          </div>

          {/* Stat 3 (Accent Card) */}
          <div className="bg-zinc-900 rounded-[2rem] p-8 flex justify-between items-end border border-zinc-800 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div>
               <h4 className="text-5xl font-bold text-white mb-2 tracking-tighter">95%</h4>
               <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Placement Rate</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
