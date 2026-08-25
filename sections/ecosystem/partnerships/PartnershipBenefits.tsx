"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, Award, Zap, HeartHandshake, Compass, Layers } from "lucide-react";

interface BenefitItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
}

export function PartnershipBenefits() {
  const benefits: BenefitItem[] = [
    {
      title: "Faster Time-to-Market",
      desc: "Utilize pre-approved solution blueprints and native integrations, saving months of architecture development.",
      icon: <Zap size={24} />,
      image: "/webp/assets/common/09ff7846bc8c9998745688779c09f88d-1.webp"
    },
    {
      title: "Certified Engineers",
      desc: "Our delivery teams maintain top-tier cloud certificates, guaranteeing professional configuration.",
      icon: <Award size={24} />,
      image: "/webp/assets/common/1b065043b6959827c05a0073c93a4a53-1.webp"
    },
    {
      title: "Reduced Project Risk",
      desc: "Deployment plans are reviewed against cloud provider validation frames, securing system uptimes.",
      icon: <ShieldCheck size={24} />,
      image: "/webp/assets/common/260b761ad40c3ad2acba2c6666894539-1.webp"
    },
    {
      title: "Vendor Best Practices",
      desc: "Direct channel alignment ensures architectures strictly adhere to verified infrastructure frameworks.",
      icon: <Compass size={24} />,
      image: "/webp/assets/common/2fe7f9184c515b0c515ce38bc8a25efa-1.webp"
    },
    {
      title: "Enterprise support",
      desc: "Priority ticket escalation queues directly to cloud vendor engineering support centers.",
      icon: <HeartHandshake size={24} />,
      image: "/webp/assets/common/315e4fdc6263bfd240f36297e376576e-1.webp"
    },
    {
      title: "Early Innovation Access",
      desc: "Get exclusive preview updates to alpha and beta products to build tomorrow's toolkits early.",
      icon: <Layers size={24} />,
      image: "/webp/assets/common/37b9b888cc479ea7b74d2d9a05c37597-1.webp"
    }
  ];

  return (
    <section id="benefits" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            PARTNER VALUE
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Benefits of <span className="text-rose-500">Partnership</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold">
            How our strategic alliances translate into reduced engineering risks and superior business capabilities for your enterprise.
          </p> */}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => (
            <Reveal key={benefit.title} delay={idx * 0.1}>
              <div className="relative rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] p-6 md:p-8 flex flex-col justify-between group h-full shadow-lg overflow-hidden transition-all duration-500 hover:border-rose-500/40 min-h-[160px]">
                
                {/* Expanding Image Layer with Glassmorphism */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                  <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-70" loading="lazy" />
                  
                  {/* Frosted Glass Blur Overlay */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
                  
                  {/* Vignette Gradient for depth and text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-white/5 border border-white/5 rounded-[24px]" />
                </div>

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-rose-500 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-400 transition-all duration-500">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-3 tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                      {benefit.title}
                    </h3>
                    {/* <p className="text-zinc-400 text-sm leading-relaxed font-medium group-hover:text-zinc-200 transition-colors duration-500">
                      {benefit.desc}
                    </p> */}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
