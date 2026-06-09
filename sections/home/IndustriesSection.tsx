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
    icon: "/assets/Home-page/industries-icon/Banking.png",
    href: "/industries/banking-finance",
  },
  {
    name: "Healthcare & Life Sciences",
    tag: "Specialized Solutions",
    desc: "HIPAA-compliant telehealth apps, EHR platforms, and research databases.",
    icon: "/assets/Home-page/industries-icon/healthcare.png",
    href: "/industries/healthcare-life-sciences",
  },
  {
    name: "Retail & E-Commerce",
    tag: "Digital Commerce",
    desc: "Omni-channel engines, high-speed checkouts, and real-time inventory systems.",
    icon: "/assets/Home-page/industries-icon/retails-ecommerce.png",
    href: "/industries/retail-ecommerce",
  },
  {
    name: "Manufacturing",
    tag: "Industry 4.0",
    desc: "Industrial IoT integrations, predictive maintenance logs, and smart supply chains.",
    icon: "/assets/Home-page/industries-icon/manufacture.png",
    href: "/industries/manufacturing",
  },
  {
    name: "Telecommunications",
    tag: "Network Solutions",
    desc: "Scalable OSS/BSS infrastructures, 5G cloud services, and telecom analytics.",
    icon: "/assets/Home-page/industries-icon/tel-com.png",
    href: "/industries/telecom",
  },
  {
    name: "Media & Entertainment",
    tag: "Digital Media",
    desc: "High-bandwidth VOD platforms, live broadcasting, and digital assets.",
    icon: "/assets/Home-page/industries-icon/media-entertainments.png",
    href: "/industries/media-entertainment",
  },
  {
    name: "Education",
    tag: "EdTech Platforms",
    desc: "LMS environments, remote learning tools, and digital collaboration spaces.",
    icon: "/assets/Home-page/industries-icon/education.png",
    href: "/industries/education",
  },
  {
    name: "Government & Public Sector",
    tag: "Government Solutions",
    desc: "Citizen portals, cloud modernization, and strict security compliance.",
    icon: "/assets/Home-page/industries-icon/Finacial.png",
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
      ease: [0.22, 1, 0.36, 1],
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/40 rounded-2xl overflow-hidden border border-zinc-800/40">
          {industries.map((ind, i) => (
            <motion.a
              key={ind.name}
              href={ind.href}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className="group flex flex-col bg-[#0c0c0c] hover:bg-zinc-900/80 transition-colors duration-300 p-8 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/0 group-hover:from-rose-600/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="w-full flex justify-center mb-6">
                <div className="w-56 h-56 flex items-center justify-center">
                  <img
                    src={ind.icon}
                    alt={ind.name}
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Red Accent Divider */}
              <div className="w-8 h-0.5 bg-rose-500 mb-5 mx-auto transition-all duration-300 group-hover:w-14" />

              {/* Title */}
              <h3 className="text-center text-lg font-bold text-white mb-5 group-hover:text-rose-100 transition-colors duration-300">
                {ind.name}
              </h3>

              {/* CTA Link */}
              <div className="flex justify-center mt-auto">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-rose-400 border-b border-zinc-700 group-hover:border-rose-500/60 pb-0.5 transition-all duration-300">
                  Explore Solutions
                  <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
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
