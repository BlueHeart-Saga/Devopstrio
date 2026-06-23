"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, Globe, Linkedin, Facebook, Instagram, Copy, Check
} from "lucide-react";

const channels = [
  {
    id: "email",
    icon: Mail,
    label: "Email Support",
    value: "career@devopstrioglobal.com",
    href: "mailto:career@devopstrioglobal.com",
    copyable: true,
    color: "from-red-500/20 to-transparent",
    borderHover: "hover:border-red-500/50",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone Support",
    value: "+91 461 294 0062",
    href: "tel:+914612940062",
    copyable: true,
    color: "from-blue-500/10 to-transparent",
    borderHover: "hover:border-blue-500/30",
  },
  {
    id: "website",
    icon: Globe,
    label: "Corporate Website",
    value: "devopstrio.co.uk",
    href: "https://devopstrio.co.uk/",
    copyable: false,
    color: "from-green-500/10 to-transparent",
    borderHover: "hover:border-green-500/30",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "devopstrioglobal",
    href: "https://www.linkedin.com/company/devopstrioglobal/",
    copyable: false,
    color: "from-sky-500/10 to-transparent",
    borderHover: "hover:border-sky-500/30",
  },
  {
    id: "facebook",
    icon: Facebook,
    label: "Facebook",
    value: "Devopstrio Official",
    href: "https://www.facebook.com/61579126233218/",
    copyable: false,
    color: "from-indigo-500/10 to-transparent",
    borderHover: "hover:border-indigo-500/30",
  },
  {
    id: "instagram",
    icon: Instagram,
    label: "Instagram",
    value: "@devopstrio_offcl",
    href: "https://www.instagram.com/devopstrio_offcl/",
    copyable: false,
    color: "from-pink-500/10 to-transparent",
    borderHover: "hover:border-pink-500/30",
  },
];

export const SupportChannels = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (id: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-24 bg-[#050505] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
          >
            Contact Methods
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Reach Us Anywhere, <span className="text-[#FF1744]">Anytime</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-xl mx-auto"
          >
            Multiple channels, one mission — getting you expert support as fast as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {channels.map((ch, idx) => (
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className={`group relative bg-zinc-900/40 border border-zinc-800 ${ch.borderHover} rounded-2xl p-7 overflow-hidden transition-all duration-300`}
            >
              {/* gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${ch.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center group-hover:border-white/10 transition-colors">
                    <ch.icon className="w-6 h-6 text-zinc-300 group-hover:text-white transition-colors" />
                  </div>

                  {ch.copyable && (
                    <button
                      onClick={() => handleCopy(ch.id, ch.value)}
                      className="w-9 h-9 rounded-lg flex items-center justify-center bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copied === ch.id
                        ? <Check className="w-4 h-4 text-green-400" />
                        : <Copy className="w-4 h-4 text-zinc-400" />}
                    </button>
                  )}
                </div>

                <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase mb-1">{ch.label}</p>
                <a
                  href={ch.href}
                  target={ch.id === "website" || ch.id === "linkedin" || ch.id === "facebook" || ch.id === "instagram" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-white font-semibold text-base hover:text-[#FF1744] transition-colors break-all"
                >
                  {ch.value}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
