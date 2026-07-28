"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Building, Cpu, Globe } from "lucide-react";
import Link from "next/link";

export function DeliveryModel() {
  const features = [
    {
      title: "Onshore Strategy & Leadership",
      desc: <>Strategy, advisory, and system architecture are driven directly from our London Hub, ensuring absolute project alignment, compliance, and direct <Link href="/contact" className="text-[#E11D48] hover:underline">local accountability</Link>.</>,
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
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-bold tracking-widest uppercase mb-4">
              Global Operations Engine
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Engineered Locally. Delivered Globally.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-3xl font-medium">
              We combine London-led strategic consulting and architect-level advisory with high-performing global <Link href="/services" className="text-[#E11D48] hover:underline">engineering centers</Link>. This hybrid model ensures absolute project accountability and direct face-to-face communication, backed by the cost-efficiency, technical depth, and scalability of our distributed <Link href="/ecosystem/engineering-excellence" className="text-[#E11D48] hover:underline">delivery network</Link>.
            </p>
          </Reveal>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Graphic */}
          <div className="lg:col-span-5 relative">
            <Reveal>
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-zinc-800/80 bg-zinc-950/20 shadow-2xl group/img">
                <img
                  src="/assets/About-page/leadership/leadership-banner/Global Operations Engine.png"
                  alt="Devopstrio Delivery Architecture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-[1.02]"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Three Pillars List */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {features.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 shrink-0 group-hover:bg-rose-500/20 group-hover:text-rose-400 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base md:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-rose-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default DeliveryModel;
