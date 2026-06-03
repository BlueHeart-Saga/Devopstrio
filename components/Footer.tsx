"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Subscribed successfully!");
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#030303] text-zinc-400 border-t border-zinc-900 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">

        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Col 1: Brand & Socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/assets/logo/logo.png"
                alt="Devopstrio logo"
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 object-contain"
              />
              <span className="text-sm font-semibold tracking-wide text-zinc-100">
                Devopstrio
              </span>
            </Link>
            <p className="text-[11px] text-zinc-500 leading-relaxed font-light max-w-xs">
              Next-generation cognitive AI pipelines, secure multi-cloud automation, and robust multi-platform runtimes built by senior engineers.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-zinc-900 bg-zinc-950/20 flex items-center justify-center text-zinc-550 hover:text-rose-500 hover:border-rose-900/40 transition-colors" aria-label="LinkedIn">
                <Linkedin size={13} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-zinc-900 bg-zinc-950/20 flex items-center justify-center text-zinc-550 hover:text-rose-500 hover:border-rose-900/40 transition-colors" aria-label="Facebook">
                <Facebook size={13} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-zinc-900 bg-zinc-950/20 flex items-center justify-center text-zinc-550 hover:text-rose-500 hover:border-rose-900/40 transition-colors" aria-label="Instagram">
                <Instagram size={13} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-zinc-900 bg-zinc-950/20 flex items-center justify-center text-zinc-550 hover:text-rose-500 hover:border-rose-900/40 transition-colors" aria-label="YouTube">
                <Youtube size={13} />
              </a>
            </div>
          </div>

          {/* Col 2: What We Do */}
          <div>
            <span className="block text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-5">
              What We Do
            </span>
            <ul className="flex flex-col gap-2.5 text-[11px] font-light">
              <li>
                <Link href="/#capabilities" className="text-zinc-450 hover:text-white transition-colors">
                  AI & Generative AI
                </Link>
              </li>
              <li>
                <Link href="/#capabilities" className="text-zinc-450 hover:text-white transition-colors">
                  Cloud & Security
                </Link>
              </li>
              <li>
                <Link href="/#capabilities" className="text-zinc-450 hover:text-white transition-colors">
                  Digital Sovereignty
                </Link>
              </li>
              <li>
                <Link href="/#capabilities" className="text-zinc-450 hover:text-white transition-colors">
                  Applications Dev
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Who We Are */}
          <div>
            <span className="block text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-5">
              Who We Are
            </span>
            <ul className="flex flex-col gap-2.5 text-[11px] font-light">
              <li>
                <Link href="/about" className="text-zinc-450 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#achievements" className="text-zinc-450 hover:text-white transition-colors">
                  Awards & Milestones
                </Link>
              </li>
              <li>
                <Link href="/#insights" className="text-zinc-450 hover:text-white transition-colors">
                  Insights & White Papers
                </Link>
              </li>
              <li>
                <Link href="/#careers" className="text-zinc-450 hover:text-white transition-colors">
                  Careers & Job Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <span className="block text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-5">
              Newsletter
            </span>
            <p className="text-[11px] text-zinc-500 leading-relaxed font-light mb-4">
              Subscribe to our newsletter for the latest tech insights and company updates.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="flex-grow bg-[#000000] border border-zinc-900 rounded-full px-4 py-2 text-[11px] font-light text-white focus:outline-none focus:border-rose-900/60 transition-colors"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-full bg-rose-600 hover:bg-rose-700 transition-colors text-white flex items-center justify-center flex-shrink-0"
                aria-label="Subscribe"
              >
                <Send size={12} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright & utilities bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-550 font-light">
          <span>Copyright © 2026 Devopstrio Limited</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">Contact Us</Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">Disclaimer</Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">Privacy Statement</Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">Terms of use</Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
