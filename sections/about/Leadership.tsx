"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, ArrowUpRight } from "lucide-react";

const founderTags = ["Multi-Cloud Architect", "15+ Years Experience", "Azure · AWS · GCP"];

const teamMembers = [
  {
    name: "Sudalairajan",
    role: "Cloud-Native Product Lead",
    photoPink: "/assets/About-page/team/pinkteam/Sudalairajan.png",
    photoGray: "/assets/About-page/team/grayteam/Sudalairajan.png",
    rotate: "-rotate-3",
    zIndex: "z-[1]",
  },
  {
    name: "Sagadevan",
    role: "Machine Learning Engineer",
    photoPink: "/assets/About-page/team/pinkteam/Sagadevan.png",
    photoGray: "/assets/About-page/team/grayteam/Sagadevan.png",
    rotate: "rotate-2",
    zIndex: "z-[2]",
  },
  {
    name: "Subbiah Muthu",
    role: "Deep Learning Specialist",
    photoPink: "/assets/About-page/team/pinkteam/Subbiahmuthu.png",
    photoGray: "/assets/About-page/team/grayteam/Subbiahmuthu.png",
    rotate: "-rotate-1",
    zIndex: "z-[3]",
  },
  {
    name: "Kishore",
    role: "AI Security Engineer",
    photoPink: "/assets/About-page/team/pinkteam/Kishore.png",
    photoGray: "/assets/About-page/team/grayteam/Kishore.png",
    rotate: "rotate-3",
    zIndex: "z-[4]",
  },
  {
    name: "Sermaraja",
    role: "UI/UX Design Manager",
    photoPink: "/assets/About-page/team/pinkteam/Sermaraj.png",
    photoGray: "/assets/About-page/team/grayteam/Sermaraj.png",
    rotate: "-rotate-2",
    zIndex: "z-[5]",
  },
  {
    name: "Thangalakshmi",
    role: "Cognitive Success Lead",
    photoPink: "/assets/About-page/team/pinkteam/Thangalakshmi.png",
    photoGray: "/assets/About-page/team/grayteam/Thangalakshmi.png",
    rotate: "rotate-1",
    zIndex: "z-[6]",
  },
  {
    name: "Punitha",
    role: "Design Thinking Lead",
    photoPink: "/assets/About-page/team/pinkteam/Punitha.png",
    photoGray: "/assets/About-page/team/grayteam/Punitha.png",
    rotate: "-rotate-3",
    zIndex: "z-[7]",
  },
  {
    name: "Ooviya",
    role: "SEO & Content Marketing",
    photoPink: "/assets/About-page/team/pinkteam/Ooviya.png",
    photoGray: "/assets/About-page/team/grayteam/Ooviya.png",
    rotate: "rotate-2",
    zIndex: "z-[8]",
  },
];

const eventImages = [
  "/assets/About-page/events/1.png",
  "/assets/About-page/events/2.png",
  "/assets/About-page/events/3.png",
  "/assets/About-page/events/4.png",
];

export function Leadership() {
  return (
    <section className="w-full py-20 bg-[#030303] text-white relative overflow-hidden" id="leadership">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.05),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Leadership
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              The minds behind every <span className="text-rose-500">breakthrough</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              Decades of combined experience across cloud, AI, DevOps, and enterprise engineering — drawn from the world's leading technology organisations.
            </p>
          </div>
        </Reveal>

        {/* Bento Grid (Mockup Style) */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            
            {/* Column 1: Card A (top) & Card B (bottom) */}
            <div className="flex flex-col gap-6 md:col-span-1">
              
              {/* Card A: Integrations (Tech Stack) */}
              <div className="bg-zinc-950/40 border border-zinc-900 rounded-[1.75rem] p-6 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between h-[210px] relative overflow-hidden group shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                {/* Apps Row */}
                <div className="flex gap-2">
                  {["aws", "azure", "gcp", "k8s"].map((tech, i) => (
                    <div key={i} className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-mono font-bold text-zinc-400 select-none uppercase">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white mb-1">Integrations</h4>
                  <p className="text-zinc-550 text-[11px] leading-relaxed font-semibold">
                    Automated multi-cloud delivery pipelines across major platforms.
                  </p>
                </div>
              </div>

              {/* Card B: Scale Metric (2500+) */}
              <div className="bg-zinc-950/40 border border-zinc-900 rounded-[1.75rem] p-6 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between h-[210px] relative overflow-hidden group shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                <div className="text-3xl font-black text-white tracking-tight text-left">2,500+</div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white mb-1">Projects Completed</h4>
                  <p className="text-zinc-550 text-[11px] leading-relaxed font-semibold">
                    Ensuring scale and reliability for enterprise organizations.
                  </p>
                </div>
              </div>

            </div>

            {/* Column 2: Card C (Center Portrait - Founder) */}
            <div className="md:col-span-1 md:row-span-2">
              <div className="relative rounded-[1.75rem] overflow-hidden border border-zinc-900 bg-zinc-950/60 h-[444px] hover:border-zinc-800 transition-all duration-500 group shadow-lg flex flex-col justify-end">
                {/* Photo */}
                <img
                  src="/assets/About-page/leader/Founder.png"
                  alt="Manikandan PS"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e11d4808_1px,transparent_1px),linear-gradient(to_bottom,#e11d4808_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Gradient bottom cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

                {/* Text */}
                <div className="p-6 relative z-20 text-left">
                  <span className="text-[9px] font-bold text-rose-500 uppercase tracking-widest block mb-1">Founder &amp; CEO</span>
                  <h4 className="text-base font-bold text-white mb-0.5">Manikandan PS</h4>
                  <p className="text-zinc-400 text-[10px] font-medium leading-relaxed">
                    Cloud visionary turning complex infrastructure challenges into elegant systems.
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
                  <div className="text-3xl font-black text-rose-500 tracking-tight">99.9%</div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Service SLA</h4>
                    <p className="text-zinc-550 text-[11px] font-medium leading-relaxed">
                      Continuous delivery assurances with automated alerting and failovers.
                    </p>
                  </div>
                </div>

                {/* Card E: Active pipelines */}
                <div className="bg-[#0A0A0C] border border-zinc-900 rounded-[1.75rem] p-6 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between h-[210px] relative overflow-hidden group shadow-lg text-left">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform duration-300">
                    <span className="font-mono text-sm font-bold">1.2k</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Active Repos</h4>
                    <p className="text-zinc-550 text-[11px] leading-relaxed font-semibold">
                      Managing robust code repositories and microservices clusters.
                    </p>
                  </div>
                </div>

              </div>

              {/* Card F: Wide card (Automation Support with floating avatars) */}
              <div className="bg-gradient-to-r from-zinc-950/45 via-[#0A0A0C] to-zinc-950/80 border border-zinc-900 rounded-[1.75rem] p-6 hover:border-zinc-800 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 h-[210px] relative overflow-hidden group shadow-lg text-left">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(225,29,72,0.015),transparent_60%)] pointer-events-none" />
                
                <div className="max-w-[240px]">
                  <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-2 font-mono">SUPPORT EXCELLENCE</span>
                  <h4 className="text-base font-bold text-white mb-1.5">Human-Centric Engineering</h4>
                  <p className="text-zinc-450 text-[11px] font-medium leading-relaxed">
                    Our team of certified architects works round the clock to ensure seamless co-development.
                  </p>
                </div>

                {/* Overlapping circular avatars exactly like mockup */}
                <div className="flex -space-x-3 overflow-hidden select-none py-2 shrink-0">
                  {teamMembers.slice(0, 5).map((member, i) => (
                    <div 
                      key={i} 
                      className="relative w-10 h-10 rounded-full border-2 border-zinc-950 overflow-hidden bg-zinc-900 transition-transform duration-300 hover:scale-115 hover:z-30 cursor-pointer shadow-md"
                      title={member.name}
                    >
                      <img
                        className="w-full h-full object-cover object-top"
                        src={member.photoPink}
                        alt={member.name}
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-900 flex items-center justify-center text-white text-[10px] font-black tracking-tight shrink-0 select-none">
                    +3
                  </div>
                </div>

              </div>

            </div>

          </div>
        </Reveal>

        {/* ── Team Collage Slider (Vibrant Collage) ── */}
        <Reveal>
          <div className="relative w-full overflow-hidden mb-12 py-8 bg-[#030303] rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            {/* Soft edge fading for smooth carousel effect */}
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
            
            <div className="flex flex-col gap-4 w-full transform -rotate-2 scale-[1.05]">
              
              {/* Row 1 (Moving Left) */}
              <motion.div 
                className="flex gap-4 w-max will-change-transform"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 80 }}
              >
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={`r1-${i}`}>
                    {teamMembers.map((member, idx) => (
                      <React.Fragment key={`m1-${idx}`}>
                        {idx === 2 && (
                          <div className="w-[220px] h-[130px] rounded-2xl flex items-center justify-center p-4 shrink-0">
                            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">From Team to<br/><span className="text-rose-500">Trendsetters</span></h3>
                          </div>
                        )}
                        <div className={`w-[200px] h-[130px] rounded-2xl overflow-hidden shrink-0 relative group shadow-lg ${idx % 2 === 0 ? 'bg-[#facc15]' : 'bg-rose-500'}`}>
                          <img src={eventImages[idx % 4]} alt="Leadership Event" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" />
                        </div>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>

              {/* Row 2 (Moving Right) */}
              <motion.div 
                className="flex gap-4 w-max will-change-transform"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 100 }}
              >
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={`r2-${i}`}>
                    {[...teamMembers].reverse().map((member, idx) => (
                      <React.Fragment key={`m2-${idx}`}>
                        {idx === 3 && (
                          <div className="w-[260px] h-[130px] rounded-2xl flex items-center justify-center p-4 shrink-0">
                            <h3 className="text-3xl font-black text-white leading-tight tracking-tight">How Employee<br/><span className="text-zinc-500 text-4xl">Stories</span></h3>
                          </div>
                        )}
                        {idx === 6 && (
                          <div className="w-[160px] h-[130px] rounded-2xl flex items-center justify-center p-4 shrink-0">
                            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">Can<br/><span className="text-rose-500">Humanize</span></h3>
                          </div>
                        )}
                        <div className={`w-[220px] h-[130px] rounded-2xl overflow-hidden shrink-0 relative group shadow-lg ${idx % 2 === 0 ? 'bg-emerald-400' : 'bg-[#facc15]'}`}>
                          <img src={eventImages[(idx + 1) % 4]} alt="Leadership Meeting" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" />
                        </div>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>

              {/* Row 3 (Moving Left) */}
              <motion.div 
                className="flex gap-4 w-max will-change-transform"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 90 }}
              >
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={`r3-${i}`}>
                    {teamMembers.map((member, idx) => (
                      <React.Fragment key={`m3-${idx}`}>
                        {idx === 4 && (
                          <div className="w-[180px] h-[130px] rounded-2xl flex items-center justify-center p-4 shrink-0">
                            <h3 className="text-3xl font-black text-white leading-tight tracking-tight">a Brand</h3>
                          </div>
                        )}
                        <div className={`w-[180px] h-[130px] rounded-2xl overflow-hidden shrink-0 relative group shadow-lg ${idx % 3 === 0 ? 'bg-blue-500' : 'bg-[#facc15]'}`}>
                          <img src={eventImages[(idx + 2) % 4]} alt="Team Milestone" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" />
                        </div>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>

            </div>
          </div>
        </Reveal>

        {/* ── Our People ── */}
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800/40 bg-zinc-950/30 p-8 md:p-12 lg:p-16">

            {/* Dot grid texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              
            <div className="relative z-10 flex flex-col items-center">
              
              {/* Centered Heading */}
              <div className="text-center max-w-xl mx-auto mb-16 relative z-10">
               
                <h3 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
                  Meet Our <span className="text-rose-500">Team</span>
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  A collision of different minds on a single mission — to build technology that leaves the world better than we found it.
                </p>
              </div>

              {/* Photos container with Background Watermark */}
              <div className="relative w-full z-10">
                {/* Background watermark text "Our PEOPLE" */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
                  <span className="font-serif italic font-normal text-rose-500/5 text-[8vw] leading-none lowercase first-letter:uppercase mb-2">
                    Our
                  </span>
                  <span className="font-black text-zinc-900/40 text-[15vw] leading-none tracking-tighter uppercase">
                    PEOPLE
                  </span>
                </div>
                
                {/* Centered Photo Grid (4 columns, 2 rows for the 8 cards) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative z-10">
                  {teamMembers.map((member, idx) => (
                    <motion.div
                      key={member.name}
                      className={`group relative p-3 pb-5 bg-white border border-zinc-200/80 shadow-[0_12px_24px_rgba(0,0,0,0.25)] rounded cursor-pointer ${member.rotate} origin-center transition-all duration-300`}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -12, scale: 1.05, rotate: 0, zIndex: 50, boxShadow: "0 25px 50px -12px rgba(225,29,72,0.25)", transition: { duration: 0.3 } }}
                    >
                      {/* Number in corner */}
                     

                      <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden bg-zinc-100">
                        <img
                          src={member.photoPink}
                          alt={`${member.name} Pink Theme`}
                          className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
                        />
                        <img
                          src={member.photoGray}
                          alt={`${member.name} Gray Theme`}
                          className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                      </div>
                      
                      <div className="mt-3 text-center">
                        <p className="text-zinc-900 text-xs font-bold leading-tight">{member.name}</p>
                        <p className="text-rose-600 text-[10px] leading-tight font-medium mt-0.5">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>


      </div>
    </section>
  );
}
