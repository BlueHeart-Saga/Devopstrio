"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const leaders = [
  {
    name: "Sagadevan",
    designation: "Chief Executive Officer",
    specialization: "Cloud Architecture · Digital Strategy",
    photoPink: "/assets/About-page/team/pinkteam/Sagadevan.png",
    photoGray: "/assets/About-page/team/grayteam/Sagadevan.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Sudalairajan",
    designation: "Chief Technology Officer",
    specialization: "Platform Engineering · AI Innovation",
    photoPink: "/assets/About-page/team/pinkteam/Sudalairajan.png",
    photoGray: "/assets/About-page/team/grayteam/Sudalairajan.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Subbiah Muthu",
    designation: "Chief Operating Officer",
    specialization: "Global Delivery · Managed Services",
    photoPink: "/assets/About-page/team/pinkteam/Subbiahmuthu.png",
    photoGray: "/assets/About-page/team/grayteam/Subbiahmuthu.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Kishore",
    designation: "VP — Cloud Engineering",
    specialization: "Azure · AWS · GCP Multi-cloud",
    photoPink: "/assets/About-page/team/pinkteam/Kishore.png",
    photoGray: "/assets/About-page/team/grayteam/Kishore.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Sermaraja",
    designation: "VP — Software Engineering",
    specialization: "Enterprise Applications · SaaS",
    photoPink: "/assets/About-page/team/pinkteam/Sermaraj.png",
    photoGray: "/assets/About-page/team/grayteam/Sermaraj.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Thangalakshmi",
    designation: "VP — Cybersecurity",
    specialization: "DevSecOps · Zero Trust · Compliance",
    photoPink: "/assets/About-page/team/pinkteam/Thangalakshmi.png",
    photoGray: "/assets/About-page/team/grayteam/Thangalakshmi.png",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
];

export const ExecutiveLeadership = () => {
  return (
    <section id="executive-leadership" className="py-24 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(255,23,68,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
          >
            Executive Leadership
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Guiding Strategy.{" "}
            <span className="text-[#FF1744]">Accelerating Growth.</span>
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
                  {["aws", "azure", "gcp", "k8s"].map((tech, i) => (
                    <div key={i} className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-mono font-bold text-zinc-400 select-none uppercase">
                      {tech}
                    </div>
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
                  src="/assets/About-page/microsoft_fluent_asset.png"
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

                {/* Overlapping circular avatars exactly like mockup */}
                <div className="flex -space-x-3 overflow-hidden select-none py-2 shrink-0 relative z-10">
                  {leaders.slice(0, 5).map((leader, i) => (
                    <div 
                      key={i} 
                      className="relative w-10 h-10 rounded-full border-2 border-zinc-950 overflow-hidden bg-zinc-900 transition-transform duration-300 hover:scale-115 hover:z-30 cursor-pointer shadow-md"
                      title={leader.name}
                    >
                      <img
                        className="w-full h-full object-cover object-top"
                        src={leader.photoPink}
                        alt={leader.name}
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-900 flex items-center justify-center text-white text-[10px] font-black tracking-tight shrink-0 select-none">
                    +1
                  </div>
                </div>

              </div>

            </div>

          </div>
        </Reveal>

        {/* Polaroid Style Container */}
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800/40 bg-zinc-950/30 p-8 md:p-12 lg:p-16">

            {/* Dot grid texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              
            <div className="relative z-10 flex flex-col items-center">
              {/* Photos container with Background Watermark */}
              <div className="relative w-full z-10">
                {/* Background watermark text "Our LEADERS" */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
                  <span className="font-serif italic font-normal text-rose-500/5 text-[8vw] leading-none lowercase first-letter:uppercase mb-2">
                    Executive
                  </span>
                  <span className="font-black text-zinc-900/40 text-[15vw] leading-none tracking-tighter uppercase">
                    LEADERS
                  </span>
                </div>
                
                {/* Polaroid Photo Grid (3 columns, 2 rows for the 6 cards) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
                  {leaders.map((leader, idx) => {
                    // Alternate rotation styles for playful Polaroid effect
                    const rotations = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1", "rotate-3", "-rotate-3"];
                    const rotateClass = rotations[idx % rotations.length];
                    
                    return (
                      <motion.div
                        key={idx}
                        className={`group relative p-3 pb-5 bg-white border border-zinc-200/80 shadow-[0_12px_24px_rgba(0,0,0,0.25)] rounded cursor-pointer ${rotateClass} origin-center transition-all duration-300`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ 
                          y: -12, 
                          scale: 1.05, 
                          rotate: 0, 
                          zIndex: 50, 
                          boxShadow: "0 25px 50px -12px rgba(225,29,72,0.25)", 
                          transition: { duration: 0.3 } 
                        }}
                      >
                        {/* LinkedIn float link on hover */}
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/75 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:text-[#0A66C2] hover:bg-white transition-all z-20 opacity-0 group-hover:opacity-100 duration-300"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>

                        <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden bg-zinc-100">
                          {/* Pink / default photo */}
                          <img
                            src={leader.photoPink}
                            alt={`${leader.name} Pink Theme`}
                            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
                          />
                          {/* Gray / hover photo */}
                          <img
                            src={leader.photoGray}
                            alt={`${leader.name} Gray Theme`}
                            className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          />
                        </div>
                        
                        <div className="mt-3 text-center">
                          <p className="text-zinc-900 text-sm font-bold leading-tight">{leader.name}</p>
                          <p className="text-rose-600 text-xs font-semibold leading-tight mt-0.5">{leader.designation}</p>
                          <p className="text-zinc-400 text-[10px] leading-tight font-medium mt-1 font-mono tracking-tighter">
                            {leader.specialization}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
