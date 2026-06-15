"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const industries = [
  {
    name: "Banking & Finance",
    tag: "Financial Services",
    desc: "Secure, regulatory-compliant solutions for banking, investing, and digital payments.",
    icon: "/assets/Home-page/industries/icons/bankingfiannace.png",
    href: "/industries/banking-finance",
  },
  {
    name: "Healthcare & Life Sciences",
    tag: "Specialized Solutions",
    desc: "HIPAA-compliant telehealth apps, EHR platforms, and research databases.",
    icon: "/assets/Home-page/industries/icons/healthcarescience.png",
    href: "/industries/healthcare-life-sciences",
  },
  {
    name: "Retail & E-Commerce",
    tag: "Digital Commerce",
    desc: "Omni-channel engines, high-speed checkouts, and real-time inventory systems.",
    icon: "/assets/Home-page/industries/icons/reatilecommerce.png",
    href: "/industries/retail-ecommerce",
  },
  {
    name: "Manufacturing",
    tag: "Industry 4.0",
    desc: "Industrial IoT integrations, predictive maintenance logs, and smart supply chains.",
    icon: "/assets/Home-page/industries/icons/Manufacturing (2).png",
    href: "/industries/manufacturing",
  },
  {
    name: "Telecommunications",
    tag: "Network Solutions",
    desc: "Scalable OSS/BSS infrastructures, 5G cloud services, and telecom analytics.",
    icon: "/assets/Home-page/industries/icons/telecommunicate.png",
    href: "/industries/telecommunications",
  },
  {
    name: "Media & Entertainment",
    tag: "Digital Media",
    desc: "High-bandwidth VOD platforms, live broadcasting, and digital assets.",
    icon: "/assets/Home-page/industries/icons/Mediaentertainement.png",
    href: "/industries/media-entertainment",
  },
  {
    name: "Education",
    tag: "EdTech Platforms",
    desc: "LMS environments, remote learning tools, and digital collaboration spaces.",
    icon: "/assets/Home-page/industries/icons/educationn.png",
    href: "/industries/education",
  },
  {
    name: "Government & Public Sector",
    tag: "Government Solutions",
    desc: "Citizen portals, cloud modernization, and strict security compliance.",
    icon: "/assets/Home-page/industries/icons/governmentpublicsector.png",
    href: "/industries/government-public-sector",
  },
];


const cardVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function IndustriesSection() {
  return (
    <section
      className="w-full pt-14 md:pt-20 pb-16 md:pb-24 bg-[#080808] text-white relative overflow-hidden"
      id="industries"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">

        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GLOBAL INDUSTRY EXPERIENCE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Empowering businesses across <span className="text-rose-500">every sector</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Deep industry expertise across regulated and high-growth sectors — delivering tailored, secure, and scalable technology solutions.
            </p>
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.a
              key={ind.name}
              href={ind.href}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className="group flex flex-col justify-end bg-black border border-zinc-900/80 hover:border-rose-500/35 rounded-[2rem] p-4 relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(244,63,94,0.12)] cursor-pointer h-[260px]"
            >
              {/* Cover Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={ind.icon}
                  alt={ind.name}
                  className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-500"
                />
                {/* Dark Vignette Overlay for readability and premium depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>

              {/* Premium White Label Box */}
              <div className="bg-white text-zinc-900 rounded-xl p-3.5 flex items-center justify-between shadow-lg w-full transition-all duration-300 group-hover:bg-zinc-50 relative z-10 mt-auto">
                <div className="text-left">
                  <h3 className="font-extrabold text-[11px] uppercase tracking-wider text-zinc-950 leading-tight">
                    {ind.name}
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-800 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shrink-0 ml-2">
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>




        {/* Bottom CTA */}
        <Reveal>
          <div className="flex justify-center mt-10">
            <a
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-rose-400 transition-colors uppercase tracking-wider"
            >
              Explore all industries <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
