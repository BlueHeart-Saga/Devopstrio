"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const industries = [
  { image: "/assets/Home-page/industries-icon/Banking.png", name: "Banking & Finance", projects: "300+ projects" },
  { image: "/assets/Home-page/industries-icon/Finacial.png", name: "Financial Services", projects: "150+ projects" },
  { image: "/assets/Home-page/industries-icon/healthcare.png", name: "Healthcare", projects: "200+ projects" },
  { image: "/assets/Home-page/industries-icon/retails-ecommerce.png", name: "Retail & E-Commerce", projects: "250+ projects" },
  { image: "/assets/Home-page/industries-icon/manufacture.png", name: "Manufacturing", projects: "120+ projects" },
  { image: "/assets/Home-page/industries-icon/media-entertainments.png", name: "Media & Entertainment", projects: "100+ projects" },
  { image: "/assets/Home-page/industries-icon/tel-com.png", name: "Telecommunications", projects: "90+ projects" },
  { image: "/assets/Home-page/industries-icon/education.png", name: "Education", projects: "80+ projects" },
];

const techPartners = [
  { name: "Microsoft Azure", logo: "/assets/Tech-icons/microsoft-azure-logo_svgstack_com_7501780931055.svg" },
  { name: "AWS", logo: "/assets/Devopstrio_Partners/aws.png" },
  { name: "Google Cloud", logo: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg" },
  { name: "Oracle", logo: "/assets/Tech-icons/oracle-logo_svgstack_com_28991780931429.svg" },
  { name: "Docker", logo: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg" },
  { name: "Linux", logo: "/assets/Tech-icons/linux-logo_svgstack_com_28711780931364.svg" },
];

const certifications = [
  { name: "ISO", image: "/assets/Awards/ISO.png" },
  { name: "Cyber Essentials", image: "/assets/Awards/2021-2022_Cyber_Essentials_Certification.png" },
  { name: "MS Gold Status", image: "/assets/Awards/MS_Gold_Status.png" },
  { name: "G-Cloud Framework", image: "/assets/Awards/G-Cloud_11_Framework_Award.png" },
  { name: "IBM Gold Partner", image: "/assets/Awards/IBM_Gold_Partner.png" },
];

export const IndustriesTrust = () => {
  return (
    <section className="py-16 sm:py-24 bg-black border-t border-zinc-900 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Industries Header, Subtitle Removed */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans"
            >
              Expertise Across <span className="text-rose-600 font-semibold">Every Sector</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <motion.a
                href="#industry"
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col justify-between h-full bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 hover:border-rose-500/40 hover:bg-zinc-900/60 transition-all duration-300 text-center relative overflow-hidden cursor-pointer shadow-xl"
              >
                <div>
                  <div className="mb-6 flex items-center justify-center">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="w-28 h-28 sm:w-32 sm:h-32 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-rose-500 mb-2 group-hover:text-rose-400 transition-colors uppercase tracking-wide font-sans">
                    {ind.name}
                  </h3>

                  <p className="text-sm text-zinc-300 font-bold font-mono">
                    {ind.projects}
                  </p>
                </div>

                <div className="border-t border-zinc-800/80 pt-4 mt-6 flex justify-center">
                  <span className="text-xs text-rose-500 font-bold uppercase tracking-wider inline-flex items-center gap-1.5 font-mono">
                    Explore Sector <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Strategic partnerships and Awards */}
        <div className="pt-16 border-t border-zinc-900">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans"
            >
              Strategic Partnerships &amp; <span className="text-rose-600 font-semibold">Recognition</span>
            </motion.h2>
          </div>

          <div className="flex flex-col gap-14">
            {/* Tech Partners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
            >
              {techPartners.map((partner, idx) => (
                <div key={idx} className="group flex flex-col items-center gap-3">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-950/80 rounded-2xl border border-zinc-800 flex items-center justify-center p-3 md:p-4 group-hover:border-rose-500/40 transition-colors shadow-lg">
                    <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain transition-all duration-300" />
                  </div>
                  <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors font-sans">{partner.name}</span>
                </div>
              ))}
            </motion.div>

            {/* Awards & Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
            >
              {certifications.map((cert, idx) => (
                <div key={idx} className="w-32 md:w-40 bg-zinc-950/80 rounded-2xl border border-zinc-800 p-4 md:p-6 flex flex-col items-center justify-center group hover:border-rose-500/40 transition-all shadow-xl">
                  <img src={cert.image} alt={cert.name} className="w-full aspect-square object-contain transition-all duration-300 group-hover:scale-105" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
