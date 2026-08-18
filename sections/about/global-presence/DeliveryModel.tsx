"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Building, Cpu, Globe } from "lucide-react";
import Link from "next/link";

export function DeliveryModel() {
  const features = [
    {
      title: "Onshore Strategy & Leadership",
      desc: <>Strategy, advisory, and system architecture are driven directly from our London Hub, ensuring absolute project alignment, compliance, and direct <Link href="/contact#contact-form" className="text-[#E11D48] hover:underline">local accountability</Link>.</>,
      icon: <Building className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Distributed Agile Engineering",
      desc: <>Dedicated engineering pods across India (Bengaluru, Chennai, Thoothukudi) execute builds, write automated infrastructure, perform quality assurance, and manage <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">migrations</Link>.</>,
      icon: <Cpu className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Follow-the-Sun Operations",
      desc: <>With operational centers in the United States and India, we provide continuous time-zone coverage, 24/7 <Link href="/services/managed-services" className="text-[#E11D48] hover:underline">managed support</Link>, and proactive monitoring services.</>,
      icon: <Globe className="w-5 h-5 text-rose-500" />
    }
  ];

  return (
    <section className="w-full py-24 bg-black text-white relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-rose-500/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-4xl mb-20 text-left">
          <Reveal>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
              Global Operations Engine
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white mb-6 font-sans">
              Engineered Locally. Delivered Globally.
            </h2>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl font-medium">
              We combine London-led strategic consulting and architect-level advisory with high-performing global <Link href="/services" className="text-[#E11D48] hover:underline font-semibold">engineering centers</Link>. This hybrid model ensures absolute project accountability and direct face-to-face communication, backed by the cost-efficiency, technical depth, and scalability of our distributed <Link href="/ecosystem/engineering-excellence" className="text-[#E11D48] hover:underline font-semibold">delivery network</Link>.
            </p>
          </Reveal>
        </div>

        {/* Full-Width Video Banner with 360 Surround Shadow & Ambient Glow */}
        <div className="w-full relative">
          {/* Surround Ambient Glow Halo */}
          <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-rose-600/15 via-rose-500/10 to-rose-600/15 rounded-[40px] blur-3xl opacity-80 pointer-events-none" />

          <Reveal>
            <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-[0_0_50px_rgba(244,63,94,0.18),0_0_100px_rgba(225,29,72,0.12),0_30px_90px_rgba(0,0,0,0.95)]">
              <iframe
                src="https://www.youtube.com/embed/-EVRIFmJzBM?autoplay=1&mute=1&loop=1&playlist=-EVRIFmJzBM&playsinline=1&si=0L6j12ExtZDQWPxv"
                title="Devopstrio Delivery Model & Operations Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>

        {/* Right Column: Three Pillars List (Commented out) */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          {features.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 shrink-0 group-hover:bg-rose-500/20 group-hover:text-rose-400 transition-colors">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 tracking-tight group-hover:text-rose-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div> */}

      </div>
    </section>
  );
}

export default DeliveryModel;
