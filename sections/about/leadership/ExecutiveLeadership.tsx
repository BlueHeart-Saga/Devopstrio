"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, ArrowRight, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface Leader {
  name: string;
  designation: string;
  specialization: string;
  photoPink: string;
  photoGray: string;
  linkedin: string;
}

const leaders: Leader[] = [
 
  {
    name: "Subbiah Muthu",
    designation: "COO",
    specialization: "Global Delivery · Managed Services",
    photoPink: "/assets/Team_Pictures/Subaiya[pink].png",
    photoGray: "/assets/Team_Pictures/Subaiya[ash].png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Kishore",
    designation: "VP — Cloud",
    specialization: "Azure · AWS · GCP Multi-cloud",
    photoPink: "/assets/Team_Pictures/Kishore[pink].png",
    photoGray: "/assets/Team_Pictures/Kishore[Ash].png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Sermaraja",
    designation: "VP — Software",
    specialization: "Enterprise Applications · SaaS",
    photoPink: "/assets/Team_Pictures/Sermaraj[pink].png",
    photoGray: "/assets/Team_Pictures/Sermaraj[ash].png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Thangalakshmi",
    designation: "VP — Cyber",
    specialization: "DevSecOps · Zero Trust · Compliance",
    photoPink: "/assets/Team_Pictures/Thangalakshmi[pink].png",
    photoGray: "/assets/Team_Pictures/Thangalakshmi[ash].png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Punitha",
    designation: "VP — Design",
    specialization: "Design Thinking · UI/UX",
    photoPink: "/assets/Team_Pictures/Punitha[pink].png",
    photoGray: "/assets/Team_Pictures/Punitha[pink].png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Ooviya",
    designation: "VP — Growth",
    specialization: "SEO · Digital Marketing",
    photoPink: "/assets/Team_Pictures/Ooviya[pink].png",
    photoGray: "/assets/Team_Pictures/Ooviya[ash].png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
   {
    name: "Sagadevan",
    designation: "CEO",
    specialization: "Cloud Architecture · Digital Strategy",
    photoPink: "/assets/Team_Pictures/sahadevan[pink].png",
    photoGray: "/assets/Team_Pictures/sahadevan[ash].png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Sudalairajan",
    designation: "CTO",
    specialization: "Platform Engineering · AI Innovation",
    photoPink: "/assets/Team_Pictures/Sudalai[pink].png",
    photoGray: "/assets/Team_Pictures/Sudalai[ash].png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
];

const interns: Leader[] = [
  {
    name: "Ananthalakshmi",
    designation: "Software Intern",
    specialization: "Software Engineering · Frontend Development",
    photoPink: "/assets/New Interns Image for devopstrio Site _for Inside the website use/Ananthalakshmi pink without text.png",
    photoGray: "/assets/New Interns Image for devopstrio Site _for Inside the website use/Ananthalakshmi ash without text.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Hamsavarthiny P",
    designation: "DevOps Intern",
    specialization: "Cloud Automation · CI/CD Pipelines",
    photoPink: "/assets/New Interns Image for devopstrio Site _for Inside the website use/Hamsavarthiny.P pink without text.png",
    photoGray: "/assets/New Interns Image for devopstrio Site _for Inside the website use/Hamsavarthiny.P ash without text.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Saravanakumar S",
    designation: "Cloud Intern",
    specialization: "Infrastructure · Multi-Cloud Architecture",
    photoPink: "/assets/New Interns Image for devopstrio Site _for Inside the website use/Saravanakumar.s pink without text.png",
    photoGray: "/assets/New Interns Image for devopstrio Site _for Inside the website use/Saravanakumar.s ash without text.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Suryaprakash S",
    designation: "AI/ML Intern",
    specialization: "GenAI Systems · Semantic Data Routers",
    photoPink: "/assets/New Interns Image for devopstrio Site _for Inside the website use/Suryaprakash s pink without text.png",
    photoGray: "/assets/New Interns Image for devopstrio Site _for Inside the website use/Suryaprakash s ash without text.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Umamaheswari R",
    designation: "Full Stack Intern",
    specialization: "Web Applications · Microservices API",
    photoPink: "/assets/New Interns Image for devopstrio Site _for Inside the website use/Umamaheswari R pink without text.png",
    photoGray: "/assets/New Interns Image for devopstrio Site _for Inside the website use/Umamaheswari R ash without text.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
];

export const ExecutiveLeadership = () => {
  const [showMore, setShowMore] = useState(false);
  const displayedLeaders = showMore ? [...leaders, ...interns] : leaders;

  return (
    <section id="executive-leadership" className="py-24 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(255,23,68,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
          >
            Executive Leadership
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
          >
            Guiding Strategy. <span className="text-rose-500">Accelerating Growth.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Our executive team combines technology expertise, business vision, and operational excellence to deliver transformative outcomes for clients worldwide.
          </motion.p>
        </div>
        {/* Bento Grid (Mockup Style) */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            
            {/* Column 1: Card A (top) & Card B (bottom) */}
            <div className="flex flex-col gap-6 md:col-span-1">
              
              {/* Card A: Integrations (Tech Stack) */}
              <div className="bg-zinc-950/40 border border-zinc-900 rounded-[1.75rem] p-6 hover:border-zinc-850 transition-all duration-300 flex flex-col justify-between h-[210px] relative overflow-hidden group shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                {/* Glow following */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Apps Row */}
                <div className="flex gap-2 relative z-10">
                  {[{ name: "aws", href: "/services/cloud-services" }, { name: "azure", href: "/services/cloud-services" }, { name: "gcp", href: "/services/cloud-services" }, { name: "k8s", href: "/services/devops-automation" }].map((tech, i) => (
                    <Link key={i} href={tech.href} className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-mono font-bold text-zinc-400 select-none uppercase hover:border-rose-500 hover:text-white transition-all">
                      {tech.name}
                    </Link>
                  ))}
                </div>
                <div className="text-left relative z-10">
                  <h4 className="text-sm font-bold text-white mb-1">Integrations</h4>
                  <p className="text-zinc-550 text-[11px] leading-relaxed font-semibold">
                    Automated multi-cloud delivery pipelines across major platforms.
                  </p>
                </div>
              </div>

              {/* Card B: Scale Metric (2500+) */}
              <div className="bg-zinc-950/40 border border-zinc-900 rounded-[1.75rem] p-6 hover:border-zinc-850 transition-all duration-300 flex flex-col justify-between h-[210px] relative overflow-hidden group shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                {/* Glow following */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="text-3xl font-black text-white tracking-tight text-left relative z-10">2,500+</div>
                <div className="text-left relative z-10">
                  <h4 className="text-sm font-bold text-white mb-1">Projects Completed</h4>
                  <p className="text-zinc-550 text-[11px] leading-relaxed font-semibold">
                    Ensuring scale and reliability for enterprise organizations.
                  </p>
                </div>
              </div>

            </div>

            {/* Column 2: Card C (Center Portrait - Platform Engineering Microsoft-style) */}
            <div className="md:col-span-1 md:row-span-2">
              <div className="relative rounded-[1.75rem] overflow-hidden border border-zinc-900 bg-zinc-950/60 h-[444px] hover:border-zinc-800 transition-all duration-500 group shadow-lg flex flex-col justify-end">
                {/* Photo */}
                <img
                  src="/assets/About-page/card/about inside leadership-team_Grid_card.png"
                  alt="Platform Engineering"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e11d4808_1px,transparent_1px),linear-gradient(to_bottom,#e11d4808_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Glow following */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Gradient bottom cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10" />

                {/* Text */}
                <div className="p-6 relative z-20 text-left">
                  <span className="text-[9px] font-bold text-rose-500 uppercase tracking-widest block mb-1">PLATFORM ENGINEERING</span>
                  <h4 className="text-base font-bold text-white mb-0.5">Fluent Cloud Architecture</h4>
                  <p className="text-zinc-400 text-[10px] font-medium leading-relaxed">
                    Scalable container meshes, serverless automation, and unified observability nodes.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3 & 4 (Top row is split into two, Bottom row is Card F) */}
            <div className="md:col-span-2 flex flex-col gap-6">
              
              {/* Top row: Card D (Green/Pink SLA) & Card E (Visual folder) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                
                {/* Card D: SLA percentage */}
                <div className="bg-rose-950/15 border border-rose-900/30 rounded-[1.75rem] p-6 hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between h-[210px] relative overflow-hidden group shadow-lg text-left">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-rose-500/5 rounded-full blur-xl pointer-events-none" />
                  {/* Glow following */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.12),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="text-3xl font-black text-rose-500 tracking-tight relative z-10">99.9%</div>
                  <div className="relative z-10">
                    <h4 className="text-sm font-bold text-white mb-1">Service SLA</h4>
                    <p className="text-zinc-555 text-[11px] font-medium leading-relaxed">
                      Continuous delivery assurances with automated alerting and failovers.
                    </p>
                  </div>
                </div>

                {/* Card E: Active pipelines */}
                <div className="bg-[#0A0A0C] border border-zinc-900 rounded-[1.75rem] p-6 hover:border-zinc-850 transition-all duration-300 flex flex-col justify-between h-[210px] relative overflow-hidden group shadow-lg text-left">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                  {/* Glow following */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <span className="font-mono text-sm font-bold">1.2k</span>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-sm font-bold text-white mb-1">Active Repos</h4>
                    <p className="text-zinc-550 text-[11px] leading-relaxed font-semibold">
                      Managing robust code repositories and microservices clusters.
                    </p>
                  </div>
                </div>

              </div>

              {/* Card F: Wide card (Automation Support with floating avatars) */}
              <div className="bg-gradient-to-r from-zinc-950/45 via-[#0A0A0C] to-zinc-950/80 border border-zinc-900 rounded-[1.75rem] p-6 hover:border-zinc-850 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 h-[210px] relative overflow-hidden group shadow-lg text-left">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(225,29,72,0.015),transparent_60%)] pointer-events-none" />
                {/* Glow following */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="max-w-[240px] relative z-10">
                  <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-2 font-mono">SUPPORT EXCELLENCE</span>
                  <h4 className="text-base font-bold text-white mb-1.5">Human-Centric Engineering</h4>
                  <p className="text-zinc-450 text-[11px] font-medium leading-relaxed">
                    Our team of certified architects works round the clock to ensure seamless co-development.
                  </p>
                </div>

                {/* Overlapping circular avatars */}
                <div className="flex -space-x-3 overflow-hidden select-none py-2 shrink-0 relative z-10">
                  {[
                    "/assets/Home-page/client-reviews/image 164.png",
                    "/assets/Home-page/client-reviews/image 165.png",
                    "/assets/Home-page/client-reviews/image 166.png",
                    "/assets/Home-page/client-reviews/image 167.png",
                    "/assets/Home-page/client-reviews/image 168.png"
                  ].map((src, i) => (
                    <div 
                      key={i} 
                      className="relative w-10 h-10 rounded-full border-2 border-zinc-950 overflow-hidden bg-zinc-900 transition-transform duration-300 hover:scale-115 hover:z-30 cursor-pointer shadow-md"
                    >
                      <img
                        className="w-full h-full object-cover object-top"
                        src={src}
                        alt={`Reviewer ${i + 1}`}
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-900 flex items-center justify-center text-white text-[10px] font-black tracking-tight shrink-0 select-none">
                    +12
                  </div>
                </div>

              </div>

            </div>

          </div>
        </Reveal>

        {/* Redesigned Team Cards Container (Mockup-inspired) */}
        <Reveal>
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 max-w-7xl mx-auto relative z-10 text-left">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4">
                Talent &amp; Operations
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
                Our Experts. <span className="text-rose-500">Talent Excellence.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 pt-2">
              <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed max-w-xl">
                Meet the{" "}
                <Link href="/careers" className="text-white font-semibold hover:text-[#FF1744] transition-colors duration-300 underline underline-offset-4 decoration-rose-500/30">architects</Link>,{" "}
                <Link href="/careers" className="text-white font-semibold hover:text-[#FF1744] transition-colors duration-300 underline underline-offset-4 decoration-rose-500/30">engineers</Link>,{" "}
                <Link href="/services/cloud-services" className="text-white font-semibold hover:text-[#FF1744] transition-colors duration-300 underline underline-offset-4 decoration-rose-500/30">consultants</Link>, and{" "}
                <span className="text-white font-semibold hover:text-[#FF1744] transition-colors duration-300">specialists</span> shaping the next wave of enterprise solutions.
                <span className="block mt-2 text-zinc-500 font-light">
                  We build and run highly resilient infrastructures across multi-cloud environments, secure software delivery streams, and cognitive intelligence platforms.
                </span>
              </p>
            </div>
          </div>

          {/* Redesigned grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-7xl mx-auto relative z-10 text-left mt-6">
                  
                  {/* Card 1: Join the Team */}
                  <motion.div
                    className="flex flex-col justify-between p-6 bg-[#0B0B0D]/80 border border-zinc-900 rounded-[2rem] shadow-lg relative overflow-hidden group h-full hover:border-zinc-800/80 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,23,68,0.03),transparent_50%)] pointer-events-none" />
                    <img
                      src="/assets/About-page/card/about inside leadership-team_Grid_card.png"
                      alt="Leadership Grid Graphic"
                      className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
                    />
                    <div className="relative z-10">
                      <span className="text-[9px] font-bold text-[#FF1744] uppercase tracking-widest block mb-3 font-mono">Join the Team</span>
                      <h3 className="text-base font-bold text-white tracking-tight mb-2">
                        Want to shape the future of Cloud &amp; AI?
                      </h3>
                      <p className="text-zinc-400 text-[11px] leading-relaxed mb-6 font-medium">
                        Join us and build robust, cloud-native systems and cognitive engines that inspire change.
                      </p>
                    </div>
                    <a
                      href="/contact#contact-form"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white hover:text-[#FF1744] text-[11px] font-bold rounded-full transition-all w-fit shadow-md active:scale-95 group/btn relative z-10"
                    >
                      Apply Now
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </motion.div>

                  {/* Leaders & Intern Cards */}
                  <AnimatePresence>
                  {displayedLeaders.map((leader, idx) => {
                    const isExtra = idx >= 4; 
                    
                    return (
                      <motion.div
                        key={leader.name}
                        className="bg-[#0B0B0D] border border-zinc-900 rounded-[2rem] overflow-hidden group shadow-lg flex flex-col justify-between h-full p-3 pb-4 hover:border-zinc-800/80 transition-all duration-300"
                        initial={{ opacity: 0, y: isExtra ? 50 : 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: isExtra ? (idx - 4) * 0.08 : idx * 0.06, 
                          ease: [0.215, 0.61, 0.355, 1] 
                        }}
                      >
                        {/* Image wrapped in click link */}
                        <a 
                          href={leader.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="relative w-full aspect-[4/5] bg-zinc-950 overflow-hidden rounded-[1.5rem] block"
                          title="View LinkedIn Profile"
                        >
                          {/* Default photo */}
                          <img
                            src={leader.photoPink}
                            alt={leader.name}
                            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
                          />
                          {/* Hover theme photo */}
                          <img
                            src={leader.photoGray}
                            alt={leader.name}
                            className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          />
                        </a>

                        {/* Name & Designation Badge below photo */}
                        <div className="pt-4 px-2 flex justify-between items-center bg-[#0B0B0D] relative z-10">
                          <div>
                            <p className="text-white text-sm font-bold tracking-tight mb-0.5">{leader.name}</p>
                            <p className="text-zinc-550 text-[10px] font-mono leading-none">{leader.specialization.split(" · ")[0]}</p>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full border border-zinc-800 text-[9px] text-zinc-400 font-mono font-semibold uppercase tracking-wider bg-zinc-950/40">
                            {leader.designation}
                          </span>
                        </div>

                      </motion.div>
                    );
                  })}
                  </AnimatePresence>

                  {/* Careers (Content Card) */}
                  <motion.div
                    className="flex flex-col justify-between p-6 bg-[#0B0B0D]/80 border border-zinc-900 rounded-[2rem] shadow-lg relative overflow-hidden group h-full hover:border-zinc-800/80 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,23,68,0.03),transparent_50%)] pointer-events-none" />
                    <img
                      src="/assets/About-page/card/about inside leadership-team_Grid_card.png"
                      alt="Leadership Grid Graphic"
                      className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
                    />
                    <div className="relative z-10">
                      <span className="text-[9px] font-bold text-[#FF1744] uppercase tracking-widest block mb-3 font-mono">Careers</span>
                      <h3 className="text-base font-bold text-white tracking-tight mb-2">
                        Work with Our Experts
                      </h3>
                      <p className="text-zinc-400 text-[11px] leading-relaxed mb-6 font-medium">
                        Always looking for cloud visionaries, developers, and platform builders to join our journey.
                      </p>
                    </div>
                    <a
                      href="/contact#contact-form"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white hover:text-[#FF1744] text-[11px] font-bold rounded-full transition-all w-fit shadow-md active:scale-95 group/btn relative z-10"
                    >
                      Join Us
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </motion.div>
                </div>

          {/* View More / Show Less Dropdown Button */}
          <div className="flex justify-center mt-10 relative z-10">
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-zinc-950 border border-zinc-800 hover:border-rose-500/40 text-white hover:text-rose-400 text-xs font-bold rounded-full transition-all duration-300 shadow-xl group cursor-pointer hover:shadow-[0_0_25px_rgba(225,29,72,0.2)]"
            >
              <span>{showMore ? "Show Less Team Members" : "View More Team Members"}</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${showMore ? "rotate-180 text-rose-500" : ""}`} />
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
