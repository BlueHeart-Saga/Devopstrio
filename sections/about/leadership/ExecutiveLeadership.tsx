"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, ArrowRight, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface TeamMember {
  name: string;
  image: string;
  linkedin: string;
}

const initialTeam: TeamMember[] = [
  {
    name: "Sermaraja",
    image: "/assets/About-page/team/team/sermaraj_.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Sagadevan",
    image: "/assets/About-page/team/team/sagadevan_.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Suriya",
    image: "/assets/About-page/team/team/Surya_.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Anantha Lakshmi",
    image: "/assets/About-page/team/team/ananthalakshmi_.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Kishore",
    image: "/assets/About-page/team/team/khishore_.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
 
  {
    name: "Punitha",
    image: "/assets/About-page/team/team/punitha_.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Oviya",
    image: "/assets/About-page/team/team/Ooviya_.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Hamsavarthiny",
    image: "/assets/About-page/team/team/Hamsavarthiny_.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
];

const additionalTeam: TeamMember[] = [
 
  {
    name: "Saravana Kumar",
    image: "/assets/About-page/team/team/saravana_.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  
  {
    name: "Uma",
    image: "/assets/About-page/team/team/uma_.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
   {
    name: "Subbiah",
    image: "/assets/About-page/team/team/subbaiya.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
   {
    name: "Thangalakshmi",
    image: "/assets/About-page/team/team/thangalakshmi.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
];

export const ExecutiveLeadership = () => {
  const [showMore, setShowMore] = useState(false);
  const displayedMembers = showMore ? [...initialTeam, ...additionalTeam] : initialTeam;

  return (
    <section id="executive-leadership" className="pt-16 sm:pt-24 pb-24 bg-black relative overflow-visible">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(255,23,68,0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Executive Leadership Bento Grid (Commented Out)
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 relative">
          <div className="absolute -top-6 right-2 sm:right-10 z-20 pointer-events-none select-none">
            <img
              src="/assets/components/Carrow-right.png"
              alt="Curved arrow"
              className="w-14 sm:w-20 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)] scale-x-[-1]"
            />
          </div>

          <Reveal>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              Executive <span className="bg-rose-500 text-white font-semibold px-4 py-1 rounded-xl inline-block">Leadership.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            
            <div className="flex flex-col gap-6 md:col-span-1">
              
              <div className="bg-zinc-950/40 border border-zinc-900 rounded-[1.75rem] p-6 hover:border-zinc-850 transition-all duration-300 flex flex-col justify-between h-[210px] relative overflow-hidden group shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
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

              <div className="bg-zinc-950/40 border border-zinc-900 rounded-[1.75rem] p-6 hover:border-zinc-850 transition-all duration-300 flex flex-col justify-between h-[210px] relative overflow-hidden group shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
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

            <div className="md:col-span-1 md:row-span-2">
              <div className="relative rounded-[1.75rem] overflow-hidden border border-zinc-900 bg-zinc-950/60 h-[444px] hover:border-zinc-800 transition-all duration-500 group shadow-lg flex flex-col justify-end">
                <img
                  src="/assets/About-page/card/about-inside-leadership-team_Grid_card.png"
                  alt="Platform Engineering"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e11d4808_1px,transparent_1px),linear-gradient(to_bottom,#e11d4808_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10" />

                <div className="p-6 relative z-20 text-left">
                  <span className="text-[9px] font-bold text-rose-500 uppercase tracking-widest block mb-1">PLATFORM ENGINEERING</span>
                  <h4 className="text-base font-bold text-white mb-0.5">Fluent Cloud Architecture</h4>
                  <p className="text-zinc-400 text-[10px] font-medium leading-relaxed">
                    Scalable container meshes, serverless automation, and unified observability nodes.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                
                <div className="bg-rose-950/15 border border-rose-900/30 rounded-[1.75rem] p-6 hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between h-[210px] relative overflow-hidden group shadow-lg text-left">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-rose-500/5 rounded-full blur-xl pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.12),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="text-3xl font-black text-rose-500 tracking-tight relative z-10">99.9%</div>
                  <div className="relative z-10">
                    <h4 className="text-sm font-bold text-white mb-1">Service SLA</h4>
                    <p className="text-zinc-555 text-[11px] font-medium leading-relaxed">
                      Continuous delivery assurances with automated alerting and failovers.
                    </p>
                  </div>
                </div>

                <div className="bg-[#0A0A0C] border border-zinc-900 rounded-[1.75rem] p-6 hover:border-zinc-850 transition-all duration-300 flex flex-col justify-between h-[210px] relative overflow-hidden group shadow-lg text-left">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
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

              <div className="bg-gradient-to-r from-zinc-950/45 via-[#0A0A0C] to-zinc-950/80 border border-zinc-900 rounded-[1.75rem] p-6 hover:border-zinc-850 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 h-[210px] relative overflow-hidden group shadow-lg text-left">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(225,29,72,0.015),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.08),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="max-w-[240px] relative z-10">
                  <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-2 font-mono">SUPPORT EXCELLENCE</span>
                  <h4 className="text-base font-bold text-white mb-1.5">Human-Centric Engineering</h4>
                  <p className="text-zinc-450 text-[11px] font-medium leading-relaxed">
                    Our team of certified architects works round the clock to ensure seamless co-development.
                  </p>
                </div>

                <div className="flex -space-x-3 overflow-hidden select-none py-2 shrink-0 relative z-10">
                  {[
                    "/assets/Home-page/client-reviews/image-164.png",
                    "/assets/Home-page/client-reviews/image-165.png",
                    "/assets/Home-page/client-reviews/image-166.png",
                    "/assets/Home-page/client-reviews/image-167.png",
                    "/assets/Home-page/client-reviews/image-168.png"
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
        */}

        {/* Redesigned Team Cards Container (Mockup-inspired) */}
        <Reveal>
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 max-w-7xl mx-auto relative z-10 text-left">
            <div className="lg:col-span-7">
              {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4">
                Leadership &amp; Talent
              </span> */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white mb-4">
                Leaders Who{" "}
                <span className="relative inline-block">
                  {/* Top-to-bottom straight arrow spanning across section boundary (Enlarged) */}
                  <div className="absolute -top-16 sm:-top-20 md:-top-24 lg:-top-28 left-1/2 -translate-x-1/2 pointer-events-none select-none z-30">
                    <img
                      src="/assets/components/streight-toptobuttm.png"
                      alt="Top to bottom arrow indicator"
                      className="w-14 sm:w-18 md:w-22 lg:w-24 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(244,63,94,0.6)]"
                    />
                  </div>
                  <span className="text-rose-500">Inspire.</span>
                </span>{" "}
                Team That Innovates.
              </h2>
            </div>
            {/* <div className="lg:col-span-5 pt-2">
              <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed max-w-xl">
                Leaders create a clear vision and motivate the team to think bigger, innovate, and achieve more. Meet the{" "}
                <Link href="/careers" className="text-white font-semibold hover:text-rose-500 transition-colors duration-300 underline underline-offset-4 decoration-rose-500/30">architects</Link>,{" "}
                <Link href="/careers" className="text-white font-semibold hover:text-rose-500 transition-colors duration-300 underline underline-offset-4 decoration-rose-500/30">engineers</Link>,{" "}
                <Link href="/services/cloud-services" className="text-white font-semibold hover:text-rose-500 transition-colors duration-300 underline underline-offset-4 decoration-rose-500/30">consultants</Link>, and{" "}
                <span className="text-white font-semibold hover:text-rose-500 transition-colors duration-300">specialists</span> shaping the next wave of enterprise solutions.
                <span className="block mt-2 text-zinc-500 font-light">
                  We build and run highly resilient infrastructures across multi-cloud environments, secure software delivery streams, and cognitive intelligence platforms.
                </span>
              </p>
            </div> */}
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
                      src="/assets/About-page/card/about-inside-leadership-team_Grid_card.png"
                      alt="Leadership Grid Graphic"
                      className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
                    />
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug">
                        Want to shape the future of Cloud &amp; AI?
                      </h3>
                    </div>
                    <a
                      href="/contact#contact-form"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white hover:text-[#FF1744] text-xs font-bold rounded-full transition-all w-fit shadow-md active:scale-95 group/btn relative z-10"
                    >
                      Apply Now
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </motion.div>

                  {/* Team Member Cards (Full Image - No Crop, No Wrap) */}
                  <AnimatePresence>
                  {displayedMembers.map((member, idx) => {
                    const isExtra = idx >= 8; 
                    
                    return (
                      <motion.div
                        key={member.name}
                        className="group h-full transition-all duration-300 flex flex-col justify-center items-center"
                        initial={{ opacity: 0, y: isExtra ? 50 : 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: isExtra ? (idx - 8) * 0.08 : idx * 0.05, 
                          ease: [0.215, 0.61, 0.355, 1] 
                        }}
                      >
                        {/* Image wrapped in click link - with 30-degree handwriting signature drawing in front */}
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="relative w-full h-full flex items-center justify-center p-2 sm:p-3 rounded-2xl group/card cursor-pointer"
                          title={`View ${member.name}'s Profile`}
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full max-w-[135px] sm:max-w-[150px] md:max-w-[165px] lg:max-w-[175px] h-auto object-contain transition-transform duration-500 group-hover:scale-105 block"
                          />

                          {/* Dynamic Signature drawing across the front from bottom-right on hover (moved down) */}
                          <div className="absolute bottom-2 -right-1 sm:bottom-3 sm:right-0 md:bottom-4 md:right-1 pointer-events-none z-30 flex flex-col items-end -rotate-[10deg] origin-bottom-right opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out transform translate-y-2 group-hover:translate-y-0">
                            <div className="relative flex flex-col items-end">
                              {/* Signature cursive name with left-to-right handwriting draw reveal */}
                              <div className="[clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)] transition-[clip-path] duration-700 ease-out">
                                <span
                                  style={{ fontFamily: "'Alex Brush', 'Caveat', 'Great Vibes', cursive" }}
                                  className="text-white text-2xl sm:text-3xl md:text-[34px] font-bold tracking-wider select-none whitespace-nowrap block leading-none pr-1"
                                >
                                  {member.name}
                                </span>
                              </div>

                              {/* Signature draw pen stroke underline */}
                              <svg
                                className="w-28 sm:w-32 md:w-36 h-4 text-rose-500 -mt-1 overflow-visible"
                                viewBox="0 0 100 15"
                                fill="none"
                              >
                                <path
                                  d="M 2 8 C 30 2, 65 14, 98 6"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  className="transition-all duration-700 delay-150 ease-out [stroke-dasharray:120] [stroke-dashoffset:120] group-hover:[stroke-dashoffset:0]"
                                />
                              </svg>
                            </div>
                          </div>
                        </a>
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
                      src="/assets/About-page/card/about-inside-leadership-team_Grid_card.png"
                      alt="Leadership Grid Graphic"
                      className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
                    />
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug">
                        Work with Our Experts
                      </h3>
                    </div>
                    <a
                      href="/contact#contact-form"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white hover:text-[#FF1744] text-xs font-bold rounded-full transition-all w-fit shadow-md active:scale-95 group/btn relative z-10"
                    >
                      Join Us
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
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
