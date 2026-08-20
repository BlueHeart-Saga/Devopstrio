"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type AvatarItem = 
  | { type: "empty" }
  | { type: "image"; src: string; tilt?: boolean };

type AvatarColumn = {
  hideOn: "lg" | "md" | "none";
  items: AvatarItem[];
};

const avatarColumns: AvatarColumn[] = [
  { hideOn: "lg", items: [{ type: "empty" }, { type: "image", src: "image 164.png" }, { type: "image", src: "image 165.png" }] },
  { hideOn: "md", items: [{ type: "image", src: "image 166.png" }, { type: "image", src: "image 167.png" }] },
  { hideOn: "none", items: [{ type: "empty" }, { type: "image", src: "image 168.png" }] },
  { hideOn: "none", items: [{ type: "image", src: "image 169.png" }] },
  { hideOn: "none", items: [{ type: "empty" }, { type: "image", src: "image 170.png" }] },
  { hideOn: "none", items: [{ type: "image", src: "image 171.png" }] },
  { hideOn: "none", items: [{ type: "empty" }, { type: "image", src: "image 172.png" }] },
  { hideOn: "md", items: [{ type: "image", src: "image 173.png" }, { type: "image", src: "image 174.png", tilt: true }] },
  { hideOn: "lg", items: [{ type: "empty" }, { type: "image", src: "image 175.png" }, { type: "image", src: "image 176.png" }] },
];

export const TestimonialsHero = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden bg-black pt-32 pb-20 md:pb-28">
      
      {/* Faint vertical dashed lines background */}
      <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-20">
        {[...Array(11)].map((_, i) => (
          <div 
            key={i} 
            className="h-full w-px border-r border-dashed border-zinc-700" 
          />
        ))}
      </div>

      {/* Floating Avatar Grid Layer */}
      <div className="absolute top-32 md:top-40 inset-x-0 px-2 md:px-8 flex justify-center gap-3 md:gap-5 max-w-[1800px] mx-auto opacity-90">
        {avatarColumns.map((col, i) => {
          const displayClass = 
            col.hideOn === "lg" ? "hidden lg:flex" : 
            col.hideOn === "md" ? "hidden md:flex" : 
            "flex";

          return (
            <div 
              key={i} 
              className={`flex-1 flex-col gap-3 md:gap-5 ${displayClass}`} 
            >
              {col.items.map((item, j) => {
                if (item.type === "empty") {
                  return (
                    <div key={j} className="w-full aspect-square rounded-2xl md:rounded-3xl border border-zinc-800/30 bg-zinc-900/20 shadow-sm opacity-50" />
                  );
                }

                return (
                  <motion.div 
                    key={j}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 + (j * 0.2), ease: "easeOut" }}
                    className={`w-full aspect-square relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.8)] border border-zinc-800/50 bg-zinc-900 ${item.tilt ? 'rotate-[-5deg] md:rotate-[-8deg] hover:rotate-0 transition-transform duration-500 hover:scale-105 z-10 drop-shadow-2xl' : 'hover:-translate-y-1 transition-transform duration-500'}`}
                  >
                    <Image 
                      src={`/assets/Home-page/client-reviews/${item.src}`} 
                      alt="Client Portrait" 
                      fill 
                      className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 15vw, 10vw"
                    />
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Gradient fade to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black z-10 pointer-events-none" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 mt-auto pt-[40vh]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold text-white tracking-tight mb-8 leading-[1.05] max-w-5xl drop-shadow-2xl font-sans"
        >
          Trusted by Leaders <br className="hidden md:block"/>
          <span className="text-rose-600 font-semibold">Across Global Industries</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-10 font-normal leading-relaxed font-sans"
        >
          Learn why enterprise technology teams trust our engineering execution models. Discover our <Link href="/services/software-development/product-engineering" className="text-rose-500 hover:underline font-bold">digital services</Link> and read our <Link href="/about/company-overview" className="text-rose-500 hover:underline font-bold font-sans">company overview</Link>.
        </motion.p>

        <motion.a
          href="#case-studies"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-zinc-200 text-black rounded-full font-bold transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)] hover:-translate-y-1 font-sans"
        >
          Read Success Stories
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
};
