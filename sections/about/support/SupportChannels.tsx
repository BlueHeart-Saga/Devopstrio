"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, Instagram, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

export const SupportChannels = () => {
  const channels = [
    { icon: Phone, text: "+91 461 294 0062", href: "tel:+914612940062" },
    { icon: Mail, text: "CAREER@DEVOPSTRIOGLOBAL.COM", href: "mailto:career@devopstrioglobal.com" },
    { icon: Globe, text: "DEVOPSTRIO.CO.UK", href: "https://devopstrio.co.uk" },
    { icon: Linkedin, text: "@DEVOPSTRIOGLOBAL", href: "https://www.linkedin.com/company/devopstrioglobal/" },
    { icon: Instagram, text: "@DEVOPSTRIO_OFFCL", href: "https://www.instagram.com/devopstrio_offcl/" },
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-zinc-900 flex flex-col items-center relative overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&display=swap');
        .font-script { font-family: 'Dancing Script', cursive; }
      `}} />
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-rose-500/5 rounded-full blur-[150px]" />
      </div>
 
      {/* Top Header Section */}
      <div className="text-center mb-20 relative z-10 px-6 w-full max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
        >
          Reach Us Anywhere, <span className="text-rose-500">Anytime</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
        >
          Multiple channels, one mission — getting you expert support as fast as possible. Check out our <Link href="/services" className="text-rose-500 hover:underline">digital services</Link> or contact support.
        </motion.p>
      </div>

      {/* Two Column Layout */}
      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center pb-10 relative z-10">
        
        {/* LEFT COLUMN - Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left w-full"
        >
          {/* Business Name */}
          <h3 className="text-zinc-400 text-[13px] md:text-sm font-bold tracking-[0.3em] uppercase mb-3">
            Devopstrio Global
          </h3>

          {/* Cursive Title */}
          <h2 className="font-script text-6xl md:text-7xl text-white mb-14 tracking-wide drop-shadow-md">
            Connect with us
          </h2>

          {/* Contact List */}
          <div className="w-full max-w-[380px] flex flex-col gap-5 mb-14">
            {channels.map((ch, idx) => (
              <motion.a 
                key={idx}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="flex items-center group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-400 transition-all duration-300 shrink-0 mr-5 shadow-sm">
                  <ch.icon className="w-[18px] h-[18px]" />
                </div>
                <span className="text-zinc-200 text-xs md:text-[13px] font-bold tracking-[0.15em] group-hover:text-rose-400 transition-colors uppercase">
                  {ch.text}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Footer Area with script and QR */}
          <div className="w-full max-w-[420px] flex flex-row items-end gap-6 mt-2">
            <h3 className="font-script text-[38px] md:text-[46px] text-zinc-300 leading-none pb-2">
              Let's keep in touch
            </h3>
            <div className="bg-white p-2 rounded-xl shadow-[0_5px_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300 shrink-0">
              <Image 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://devopstrio.co.uk&bgcolor=FFF&color=000" 
                alt="Website QR Code"
                width={85}
                height={85}
                className="rounded-lg object-contain"
                unoptimized
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - Contact Person Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-[500px] md:h-[700px] flex items-end justify-center"
        >
          {/* Subtle glow behind the person */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-rose-500/10 rounded-full blur-[100px] -z-10" />
          
          <Image 
            src="/assets/About-page/support/connect.png"
            alt="Devopstrio Support Professional"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            unoptimized
          />
        </motion.div>

      </div>
    </section>
  );
};
