
"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
  { name: "AWS", logo: "/assets/Tech-icons/amazon-aws-logo_svgstack_com_7491780931192.svg" },
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
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute -left-40 bottom-0 w-96 h-96 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Industries */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block"
            >
              Industries We Serve
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white"
            >
              Expertise Across <span className="text-rose-500">Every Sector</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-base md:text-lg leading-relaxed"
            >
              Delivering tailored technology solutions that address the unique challenges of your specific industry.
            </motion.p>
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
                className="group flex flex-col justify-between h-full bg-zinc-950/40 border border-white/5 rounded-3xl p-8 hover:border-rose-500/35 hover:bg-zinc-950/60 transition-all duration-300 hover:scale-[1.01] text-center relative overflow-hidden cursor-pointer backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div>
                  <div className="mb-8 flex items-center justify-center">
                    <img 
                      src={ind.image} 
                      alt={ind.name} 
                      className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl group-hover:scale-110 transition-all duration-500 pointer-events-none select-none"
                    />
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold text-rose-500 mb-3 group-hover:text-rose-400 transition-colors uppercase tracking-wide">
                    {ind.name}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 leading-relaxed font-bold transition-colors">
                    {ind.projects}
                  </p>
                </div>

                <div className="border-t border-zinc-900/60 pt-4 mt-6 flex justify-center">
                  <span className="text-[9px] text-rose-500 font-bold uppercase tracking-wider transition-transform duration-300 inline-flex items-center gap-1.5 group-hover:translate-y-[-2px]">
                    Explore Sector <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Strategic partnerships and Awards */}
        <div className="pt-16 border-t border-zinc-800/60">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block"
            >
              Partners & Awards
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white"
            >
              Strategic Partnerships &amp; <span className="text-rose-500">Recognition</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-400 text-base md:text-lg leading-relaxed"
            >
              Recognized by industry leaders for delivering excellence in modern software and cloud engineering.
            </motion.p>
          </div>

          <div className="flex flex-col gap-16">
            {/* Tech Partners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
            >
              {techPartners.map((partner, idx) => (
                <div key={idx} className="group flex flex-col items-center gap-3">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-900/40 rounded-2xl border border-zinc-800/80 flex items-center justify-center p-3 md:p-4 group-hover:bg-zinc-800/60 transition-colors shadow-lg group-hover:-translate-y-1 duration-300">
                    <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain transition-all duration-300" />
                  </div>
                  <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">{partner.name}</span>
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
                <div key={idx} className="w-32 md:w-40 bg-zinc-900/20 rounded-2xl border border-white/5 p-4 md:p-6 flex flex-col items-center justify-center group hover:bg-zinc-900/40 hover:border-white/10 transition-all shadow-xl hover:-translate-y-1 duration-300">
                  <img src={cert.image} alt={cert.name} className="w-full aspect-square object-contain drop-shadow-md transition-all duration-300 group-hover:scale-105" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
