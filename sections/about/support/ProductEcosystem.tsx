"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "Humanex", src: "/assets/Home-page/our-products/logo/humanex.png" },
  { name: "Brio", src: "/assets/Home-page/our-products/logo/brio.png" },
  { name: "SafeSign", src: "/assets/Home-page/our-products/logo/safesign.png" },
  { name: "Prestivo", src: "/assets/Home-page/our-products/logo/Prestivo.png" },
  { name: "Campix", src: "/assets/Home-page/our-products/logo/Campix.png" },
  { name: "Homela", src: "/assets/Home-page/our-products/logo/homela.png" },
  { name: "CareSuite", src: "/assets/Home-page/our-products/logo/Caresuite.png" },
  { name: "Justivon", src: "/assets/Home-page/our-products/logo/Justivon.png" },
];

import Link from "next/link";

export const ProductEcosystem = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
          >
            Product Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
          >
            Products We <span className="text-rose-500">Support</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-xl mx-auto"
          >
            Full lifecycle support for the entire Devopstrio product portfolio. Explore our <Link href="/ecosystem/our-products" className="text-rose-500 hover:underline">product ecosystem</Link> for detailed specs.
          </motion.p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 items-center justify-items-center max-w-5xl mx-auto">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-36 md:w-44 h-16 md:h-20 relative transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Image 
                src={logo.src} 
                alt={logo.name} 
                fill 
                className="object-contain" 
                unoptimized
              />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
