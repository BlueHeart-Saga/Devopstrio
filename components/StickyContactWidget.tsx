"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Calendar, X, Check } from "lucide-react";
import Link from "next/link";

export function StickyContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-[80px] right-4 md:bottom-[96px] md:right-6 z-[99] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4 shadow-2xl w-64 text-left flex flex-col gap-3.5"
          >
            {/* Title */}
            <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                Contact Sales
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* Call Sales */}
            <a
              href="tel:+441784640216"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-rose-500/30 hover:bg-rose-500/5 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 group-hover:scale-105 transition-transform">
                <Phone size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white group-hover:text-rose-500 transition-colors">Call Direct</span>
                <span className="text-[10px] text-zinc-400 font-semibold mt-0.5">+441784640216</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/447471482903"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <MessageCircle size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">Chat on WhatsApp</span>
                <span className="text-[10px] text-zinc-400 font-semibold mt-0.5">Online • Senior Architect</span>
              </div>
            </a>

            {/* Book Demo */}
            <Link
              href="/contact#contact-form"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                <Calendar size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white group-hover:text-sky-400 transition-colors">Book a Demo</span>
                <span className="text-[10px] text-zinc-400 font-semibold mt-0.5">Schedule online session</span>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110 active:scale-95 border group relative ${isOpen
            ? "bg-zinc-900 border-zinc-800"
            : "bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 border-rose-500/20 shadow-[0_10px_20px_rgba(225,29,72,0.25)]"
          }`}
      >
        {!isOpen && (
          <div className="absolute right-[110%] top-1/2 -translate-y-1/2 mr-2 px-4 py-2.5 bg-white text-zinc-950 text-xs sm:text-sm font-semibold rounded-2xl rounded-br-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-zinc-100/50 translate-x-2 group-hover:translate-x-0">
            connect with call
          </div>
        )}
        {isOpen ? <X size={20} /> : <Phone size={20} className="animate-pulse" />}
      </motion.button>
    </div>
  );
}
