"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const founderTags = ["Multi-Cloud Architect", "15+ Years Experience", "Azure · AWS · GCP"];

const teamMembers = [
  // {
  //   name: "Sudalairajan",
  //   role: "Cloud-Native Product Lead",
  //   photoPink: "/assets/About-page/team/pinkteam/Sudalairajan.png",
  //   photoGray: "/assets/About-page/team/grayteam/Sudalairajan.png",
  //   rotate: "-rotate-3",
  //   zIndex: "z-[1]",
  // },
  {
    name: "Suryaprakash S",
    role: "Cloud Solutions Engineer",
    photoPink: "/assets/About-page/team/pinkteam/Suryaprakash s pink with text.png",
    photoGray: "/assets/About-page/team/grayteam/Suryaprakash s ash with text.png",
    rotate: "-rotate-2",
    zIndex: "z-[9]",
  },
   {
    name: "Hamsavarthiny P",
    role: "DevOps & Automation Lead",
    photoPink: "/assets/About-page/team/pinkteam/Hamsavarthiny.P pink with text.png",
    photoGray: "/assets/About-page/team/grayteam/Hamsavarthiny.P ash with text.png",
    rotate: "-rotate-1",
    zIndex: "z-[11]",
  },
  {
    name: "Ananthalakshmi",
    role: "Senior Software Architect",
    photoPink: "/assets/About-page/team/pinkteam/Ananthalakshmi pink with text.png",
    photoGray: "/assets/About-page/team/grayteam/Ananthalakshmi ash with text.png",
    rotate: "rotate-2",
    zIndex: "z-[12]",
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
  
  {
    name: "Saravanakumar S",
    role: "Platform Infrastructure Lead",
    photoPink: "/assets/About-page/team/pinkteam/Saravanakumar.s pink with text.png",
    photoGray: "/assets/About-page/team/grayteam/Saravanakumar.s ash with text.png",
    rotate: "rotate-3",
    zIndex: "z-[10]",
  },
 
  {
    name: "Umamaheswari R",
    role: "AI & Data Engineering Lead",
    photoPink: "/assets/About-page/team/pinkteam/Umamaheswari R pink with text.png",
    photoGray: "/assets/About-page/team/grayteam/Umamaheswari R ash with text.png",
    rotate: "-rotate-3",
    zIndex: "z-[13]",
  },
];

const eventImages = [
  "/assets/About-page/events/Picture1.png",
  "/assets/About-page/events/Picture2.png",
  "/assets/About-page/events/Picture3.png",
  "/assets/About-page/events/Picture4.png",
  "/assets/About-page/events/Picture5.png",
  "/assets/About-page/events/Picture6.png",
  "/assets/About-page/events/Picture7.png",
  "/assets/About-page/events/Picture8.png",
  "/assets/About-page/events/Picture9.png",
  "/assets/About-page/events/Picture10.png",
  "/assets/About-page/events/Picture11.png",
  "/assets/About-page/events/Picture12.png",
  "/assets/About-page/events/Picture13.png",
  "/assets/About-page/events/Picture14.png",
  "/assets/About-page/events/Picture15.png",
  "/assets/About-page/events/Picture16.png",
  "/assets/About-page/events/Picture17.png",
  "/assets/About-page/events/Picture18.png",
  "/assets/About-page/events/Picture19.png",
  "/assets/About-page/events/Picture20.png",
  "/assets/About-page/events/Picture21.png",
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
            {/* <p className="text-zinc-400 text-base leading-relaxed">
              Decades of combined experience across <Link href="/services/cloud-services" className="text-rose-500 hover:underline">cloud</Link>, <Link href="/services/ai-data-innovation" className="text-rose-500 hover:underline">AI</Link>, <Link href="/services/devops-automation" className="text-rose-500 hover:underline">DevOps</Link>, and <Link href="/services/software-development" className="text-rose-500 hover:underline">enterprise engineering</Link> — drawn from the world's leading technology organisations.
            </p> */}
          </div>
        </Reveal>

        {/* ── Founder Card (Commented Out) ── */}
        {/*
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-950/30 mb-16 group hover:border-zinc-700/60 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr]">

              <div className="relative min-h-[320px] lg:min-h-[420px] overflow-hidden bg-zinc-900">
                <img
                  src="/assets/About-page/leader/Founder.png"
                  alt="Manikandan PS"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-950/70 pointer-events-none hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none lg:hidden" />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 gap-6">

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-rose-500 block mb-3">Founder & CEO</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">Manikandan PS</h3>
                  <div className="flex items-center gap-1.5 text-zinc-500 text-sm">
                    <MapPin size={12} />
                    <span>London, United Kingdom</span>
                  </div>
                </div>

                <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-lg">
                  A cloud visionary who turns complex infrastructure challenges into elegant, business-driven solutions — trusted by enterprises across three continents.
                </p>

                <div className="flex flex-wrap gap-2">
                  {founderTags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400 text-xs font-medium tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

                <blockquote className="border-l-2 border-rose-500/70 pl-4 text-zinc-400 text-sm italic leading-relaxed">
                  &ldquo;I transform complex cloud challenges into secure, scalable, and business-focused solutions that drive measurable results.&rdquo;
                </blockquote>

                <a
                  href="/contact#contact-form"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-rose-400 transition-colors w-fit group/link"
                >
                  Connect with Manikandan
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>

              </div>
            </div>
          </div>
        </Reveal>
        */}

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
                          <img src={eventImages[idx % eventImages.length]} alt="Leadership Event" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" />
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
                          <img src={eventImages[(idx + 7) % eventImages.length]} alt="Leadership Meeting" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" />
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
                          <img src={eventImages[(idx + 14) % eventImages.length]} alt="Team Milestone" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" />
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
                {/* <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  A collision of different minds on a single mission — to build technology that leaves the world better than we found it.
                </p> */}
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
                
                {/* Centered Photo Grid (4 cards per row) */}
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
