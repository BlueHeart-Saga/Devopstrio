"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { 
  Phone, 
  Mail, 
  ShieldAlert, 
  Check,
  Copy
} from "lucide-react";

export function DepartmentContacts() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="department-contacts" className="w-full py-16 md:py-24 bg-[#030303] text-white relative overflow-hidden font-sans">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rose-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">

        {/* ── Section Header ─────────────────────────────────────────── */}
        <Reveal className="mb-8 md:mb-12 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-zinc-500">
              Departmental Contact Directory
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-4 text-white">
            Direct Access to Our <span className="text-rose-500">Specialized Teams.</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed max-w-xl mx-auto">
            Connect directly with our dedicated departments for faster response times across general inquiries, support, HR, and emergency infrastructure assistance.
          </p>
        </Reveal>

        {/* ── Top Summary Grid (3 High-Impact Cards) ──────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Call Us */}
          <Reveal delay={0.1}>
            <div className="h-full bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-rose-500/30 transition-all duration-300 shadow-xl group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">📞 Call Us Directly</h3>
                <p className="text-xs text-zinc-400 font-medium mb-6">
                  Speak directly with our engineering and consulting offices in the UK and India.
                </p>

                <div className="space-y-4 text-xs font-mono">
                  <div className="bg-black/40 border border-white/5 rounded-xl p-3.5 flex justify-between items-center">
                    <div>
                      <span className="text-zinc-500 block text-[10px] uppercase font-sans font-bold">United Kingdom Office</span>
                      <a href="tel:+447471482903" className="text-white font-bold hover:text-rose-400 transition-colors text-sm">
                        +44 7471 482903
                      </a>
                    </div>
                    <span className="text-[10px] font-bold text-rose-400 px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">UK</span>
                  </div>

                  <div className="bg-black/40 border border-white/5 rounded-xl p-3.5 flex justify-between items-center">
                    <div>
                      <span className="text-zinc-500 block text-[10px] uppercase font-sans font-bold">India Delivery Center</span>
                      <a href="tel:0447471482903" className="text-white font-bold hover:text-rose-400 transition-colors text-sm">
                        044-7471 482903
                      </a>
                    </div>
                    <span className="text-[10px] font-bold text-rose-400 px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">IN</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-medium">
                <span>Available Mon-Fri, 9am - 6pm</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </Reveal>

          {/* Card 2: Email Us */}
          <Reveal delay={0.2}>
            <div className="h-full bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-rose-500/30 transition-all duration-300 shadow-xl group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">✉️ Email Us</h3>
                <p className="text-xs text-zinc-400 font-medium mb-6">
                  Official email channels for general, HR, careers, legal, and support inquiries.
                </p>

                <div className="space-y-2.5 text-xs">
                  {[
                    { label: "General Inquiries", email: "info@devopstrioglobal.com" },
                    { label: "HR Team", email: "hr@devopstrioglobal.com" },
                    { label: "Careers & Jobs", email: "careers@devopstrioglobal.com" },
                    { label: "Customer Support", email: "support@devopstrioglobal.com" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5 hover:border-white/10 transition-colors">
                      <div>
                        <span className="text-zinc-500 text-[10px] block font-bold">{item.label}</span>
                        <a href={`mailto:${item.email}`} className="text-zinc-200 hover:text-rose-400 font-mono font-medium text-[11px] transition-colors">
                          {item.email}
                        </a>
                      </div>
                      <button
                        onClick={() => handleCopy(item.email)}
                        className="text-zinc-500 hover:text-white p-1 transition-colors"
                        title="Copy Email"
                      >
                        {copiedEmail === item.email ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-zinc-500 font-medium flex items-center justify-between">
                <span>Average Response Time</span>
                <span className="text-white font-bold">&lt; 2 Hours</span>
              </div>
            </div>
          </Reveal>

          {/* Card 3: 24x7 Emergency Support */}
          <Reveal delay={0.3}>
            <div className="h-full bg-gradient-to-b from-rose-950/30 via-zinc-900/90 to-zinc-950/90 border border-rose-500/30 rounded-3xl p-8 flex flex-col justify-between hover:border-rose-500/60 transition-all duration-300 shadow-[0_0_30px_rgba(225,29,72,0.15)] group relative overflow-hidden">
              
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-rose-600 text-white font-bold text-[10px] uppercase tracking-widest rounded-bl-2xl">
                Critical SLA
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">24×7 Emergency Support</h3>
                <p className="text-xs text-zinc-300 font-medium mb-6">
                  For mission-critical enterprise cloud infrastructure, live SaaS applications, and emergency incident resolution.
                </p>

                <div className="bg-black/60 border border-rose-500/20 rounded-2xl p-4 mb-4">
                  <span className="text-[10px] uppercase tracking-wider text-rose-400 font-bold block mb-1">
                    Hotline & Emergency Email
                  </span>
                  <a href="mailto:support@devopstrioglobal.com" className="text-white font-mono font-bold text-sm block hover:text-rose-400 transition-colors mb-2">
                    support@devopstrioglobal.com
                  </a>
                  <a href="tel:+447471482903" className="text-rose-400 font-mono font-bold text-xs inline-flex items-center gap-1.5 hover:underline">
                    📞 +44 7471 482903 / 044-7471 482903
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold">
                  <div className="bg-white/5 border border-white/5 py-2.5 rounded-xl text-zinc-300">
                    <span className="text-rose-400 block text-xs font-extrabold">24</span> Hours
                  </div>
                  <div className="bg-white/5 border border-white/5 py-2.5 rounded-xl text-zinc-300">
                    <span className="text-rose-400 block text-xs font-extrabold">7</span> Days
                  </div>
                  <div className="bg-white/5 border border-white/5 py-2.5 rounded-xl text-zinc-300">
                    <span className="text-rose-400 block text-xs font-extrabold">365</span> Days/Yr
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-500/20 flex items-center justify-between text-[11px]">
                <span className="text-zinc-400 font-medium">SaaS & Infrastructure Coverage</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Active
                </span>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
