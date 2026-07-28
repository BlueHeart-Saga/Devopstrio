"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Landmark, HeartPulse, ShoppingCart, Factory, Network, MonitorPlay, GraduationCap, Building2, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const industries = [
  {
    name: "Banking & Finance",
    tag: "Financial Services",
    desc: "Secure, regulatory-compliant solutions for banking, investing, and digital payments.",
    icon: Landmark,
    image: "/assets/Home-page/industries/bankifinance.png",
    href: "/industries/banking-finance",
  },
  {
    name: "Healthcare & Life Sciences",
    tag: "Specialized Solutions",
    desc: "HIPAA-compliant telehealth apps, EHR platforms, and research databases.",
    icon: HeartPulse,
    image: "/assets/Home-page/industries/healthcaree.png",
    href: "/industries/healthcare-life-sciences",
  },
  {
    name: "Retail & E-Commerce",
    tag: "Digital Commerce",
    desc: "Omni-channel engines, high-speed checkouts, and real-time inventory systems.",
    icon: ShoppingCart,
    image: "/assets/Home-page/industries/retailecommerce.png",
    href: "/industries/retail-ecommerce",
  },
  {
    name: "Manufacturing",
    tag: "Industry 4.0",
    desc: "Industrial IoT integrations, predictive maintenance logs, and smart supply chains.",
    icon: Factory,
    image: "/assets/Home-page/industries/manufacturingg.png",
    href: "/industries/manufacturing",
  },
  {
    name: "Telecommunications",
    tag: "Network Solutions",
    desc: "Scalable OSS/BSS infrastructures, 5G cloud services, and telecom analytics.",
    icon: Network,
    image: "/assets/Home-page/industries/telecommunicationn.png",
    href: "/industries/telecommunications",
  },
  {
    name: "Media & Entertainment",
    tag: "Digital Media",
    desc: "High-bandwidth VOD platforms, live broadcasting, and digital assets.",
    icon: MonitorPlay,
    image: "/assets/Home-page/industries/mediaentertainment.png",
    href: "/industries/media-entertainment",
  },
  {
    name: "Education",
    tag: "EdTech Platforms",
    desc: "LMS environments, remote learning tools, and digital collaboration spaces.",
    icon: GraduationCap,
    image: "/assets/Home-page/industries/educationn.png",
    href: "/industries/education",
  },
  {
    name: "Government & Public Sector",
    tag: "Government Solutions",
    desc: "Citizen portals, cloud modernization, and strict security compliance.",
    icon: Building2,
    image: "/assets/Home-page/industries/governmentsector.png",
    href: "/industries/government-public-sector",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function IndustriesSection() {
  const featuredIndustries = industries.slice(0, 3);
  const gridIndustries = industries.slice(3, 7);
  const tallIndustry = industries[7];

  return (
    <section
      className="w-full pt-20 pb-24 bg-[#030303] text-white relative overflow-hidden"
      id="industries"
    >
      <div className="max-w-7xl mx-auto w-full px-8 xl:px-4 relative z-10 flex flex-col gap-20">

        {/* --- TOP SECTION: Featured Large Cards --- */}
        <div>
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
              <div>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
                  FEATURED EXPERTISE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Handpicked Sectors For You
                </h2>
              </div>
              <a href="/industries" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group mb-2">
                View All Industries <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredIndustries.map((ind, i) => (
              <motion.a
                key={ind.name}
                href={ind.href}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                className="group flex flex-col bg-[#0A0A0A] border border-zinc-800/80 hover:border-zinc-700/80 rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-2.5"
              >
                {/* Image */}
                <div className="relative w-full aspect-[2/1] overflow-hidden rounded-[16px] bg-zinc-900 border border-zinc-800/50 mb-4">
                  <img src={ind.image} alt={ind.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
                     <ind.icon size={14} className="text-white" />
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                     {ind.tag}
                  </div>
                </div>
                {/* Details */}
                <div className="px-3 pb-3 flex flex-col flex-1">
                   <h3 className="font-bold text-lg text-zinc-100 mb-1">{ind.name}</h3>
                   <p className="text-sm text-zinc-300 font-normal leading-relaxed mb-4 line-clamp-2">{ind.desc}</p>
                   
                   <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-800/50 text-xs text-zinc-400 font-medium uppercase tracking-wider">
                      <div className="flex items-center gap-1.5"><Globe size={13} /> Global</div>
                      <div className="flex items-center gap-1.5"><Landmark size={13} /> Regulated</div>
                      <div className="flex items-center gap-1.5 ml-auto text-rose-500 font-semibold">Explore</div>
                   </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* --- MIDDLE SECTION: Split Content --- */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:w-1/3 flex flex-col items-start text-left lg:sticky lg:top-32">
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                OUR EXPERTISE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
                We Make Your Industry Journey Seamless
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed mb-10 font-normal">
                From finding the perfect <Link href="/services/cybersecurity" className="text-rose-500 hover:underline font-medium">compliance strategy</Link> to closing <Link href="/services/it-consulting" className="text-rose-500 hover:underline font-medium">operational gaps</Link>, we're here to make every step smooth and stress-free across regulated and high-growth sectors.
              </p>
              <a
                href="/industries"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-zinc-100 text-zinc-950 font-bold hover:bg-rose-600 hover:text-white transition-all duration-300"
              >
                Explore Services <ArrowUpRight size={18} />
              </a>
            </Reveal>
          </div>

          {/* Right Column: Grid and Side Image */}
          <div className="lg:w-2/3 flex flex-col md:flex-row gap-6">
            
            {/* The 2x2 grid of small cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gridIndustries.map((ind, i) => {
                const isMedia = ind.name === "Media & Entertainment";
                return (
                  <motion.div
                    key={ind.name}
                    custom={i + 3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={cardVariants}
                    className="group relative h-[240px] sm:h-[260px] [perspective:1000px] cursor-pointer"
                  >
                    <a 
                      href={ind.href} 
                      className={`absolute inset-0 w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${
                        isMedia 
                          ? "[transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)]"
                          : "group-hover:[transform:rotateY(180deg)]"
                      }`}
                    >
                      
                      {/* Front Face */}
                      <div className="absolute inset-0 w-full h-full flex flex-col justify-start bg-[#0A0A0A] border border-zinc-800/80 rounded-2xl p-6 shadow-sm [backface-visibility:hidden]">
                        <div className="w-10 h-10 mb-4 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                          <ind.icon size={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-bold text-base text-zinc-100 mb-2">
                          {ind.name}
                        </h3>
                        <p className="text-sm text-zinc-300 font-normal leading-relaxed flex-1 line-clamp-3">
                          {ind.desc}
                        </p>
                        <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 mt-auto opacity-70 transition-opacity">
                          Learn More <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>

                      {/* Back Face */}
                      <div className="absolute inset-0 w-full h-full flex flex-col rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] border border-rose-500/50">
                        <img src={ind.image} alt={ind.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                           <h3 className="font-bold text-[15px] text-white mb-2">{ind.name}</h3>
                           <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400">
                             Learn More <ArrowUpRight size={12} />
                           </div>
                        </div>
                      </div>

                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* The right-most tall image */}
            <motion.a
              href={tallIndustry.href}
              custom={7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className="w-full md:w-[260px] xl:w-[300px] flex flex-col group cursor-pointer"
            >
              <div className="relative w-full h-[400px] md:h-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/50">
                <img 
                  src={tallIndustry.image} 
                  alt={tallIndustry.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-bold text-lg mb-2">{tallIndustry.name}</h4>
                  <p className="text-zinc-300 text-sm line-clamp-2">{tallIndustry.desc}</p>
                </div>
              </div>
            </motion.a>

          </div>
        </div>

        {/* --- BOTTOM SECTION: Stats Bar --- */}
        {/* <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 bg-[#0A0A0A] border border-zinc-800/80 rounded-[24px] p-8 md:p-12 mt-4 relative overflow-hidden">
           
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-rose-500/5 pointer-events-none" />
            
            <div className="flex flex-col items-center text-center gap-3 border-zinc-800/50 sm:border-r relative z-10">
               <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-2">
                 <Building2 size={20} />
               </div>
               <h4 className="text-3xl font-bold text-white">500+</h4>
               <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Enterprise Clients</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 border-zinc-800/50 md:border-r relative z-10">
               <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-2">
                 <HeartPulse size={20} />
               </div>
               <h4 className="text-3xl font-bold text-white">99%</h4>
               <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Client Retention</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 border-zinc-800/50 sm:border-r relative z-10">
               <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-2">
                 <Network size={20} />
               </div>
               <h4 className="text-3xl font-bold text-white">20+</h4>
               <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Global Locations</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 relative z-10">
               <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-2">
                 <Landmark size={20} />
               </div>
               <h4 className="text-3xl font-bold text-white">15+</h4>
               <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Years Experience</p>
            </div>
          </div>
        </Reveal> */}

      </div>
    </section>
  );
}
