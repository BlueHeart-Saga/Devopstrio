"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Suryaprakash S",
    role: "Cloud Solutions Engineer",
    photoPink: "/assets/About-page/team/pinkteam/Suryaprakash s pink with text.png",
    photoGray: "/assets/About-page/team/grayteam/Suryaprakash s ash with text.png",
    rotate: "-rotate-2",
  },
  {
    name: "Hamsavarthiny P",
    role: "DevOps & Automation Lead",
    photoPink: "/assets/About-page/team/pinkteam/Hamsavarthiny.P pink with text.png",
    photoGray: "/assets/About-page/team/grayteam/Hamsavarthiny.P ash with text.png",
    rotate: "-rotate-1",
  },
  {
    name: "Ananthalakshmi",
    role: "Senior Software Architect",
    photoPink: "/assets/About-page/team/pinkteam/Ananthalakshmi pink with text.png",
    photoGray: "/assets/About-page/team/grayteam/Ananthalakshmi ash with text.png",
    rotate: "rotate-2",
  },
  {
    name: "Sagadevan",
    role: "Machine Learning Engineer",
    photoPink: "/assets/About-page/team/pinkteam/Sagadevan.png",
    photoGray: "/assets/About-page/team/grayteam/Sagadevan.png",
    rotate: "rotate-2",
  },
  {
    name: "Subbiah Muthu",
    role: "Deep Learning Specialist",
    photoPink: "/assets/About-page/team/pinkteam/Subbiahmuthu.png",
    photoGray: "/assets/About-page/team/grayteam/Subbiahmuthu.png",
    rotate: "-rotate-1",
  },
  {
    name: "Kishore",
    role: "AI Security Engineer",
    photoPink: "/assets/About-page/team/pinkteam/Kishore.png",
    photoGray: "/assets/About-page/team/grayteam/Kishore.png",
    rotate: "rotate-3",
  },
  {
    name: "Sermaraja",
    role: "UI/UX Design Manager",
    photoPink: "/assets/About-page/team/pinkteam/Sermaraj.png",
    photoGray: "/assets/About-page/team/grayteam/Sermaraj.png",
    rotate: "-rotate-2",
  },
  {
    name: "Thangalakshmi",
    role: "Cognitive Success Lead",
    photoPink: "/assets/About-page/team/pinkteam/Thangalakshmi.png",
    photoGray: "/assets/About-page/team/grayteam/Thangalakshmi.png",
    rotate: "rotate-1",
  },
  {
    name: "Punitha",
    role: "Design Thinking Lead",
    photoPink: "/assets/About-page/team/pinkteam/Punitha.png",
    photoGray: "/assets/About-page/team/grayteam/Punitha.png",
    rotate: "-rotate-3",
  },
  {
    name: "Ooviya",
    role: "SEO & Content Marketing",
    photoPink: "/assets/About-page/team/pinkteam/Ooviya.png",
    photoGray: "/assets/About-page/team/grayteam/Ooviya.png",
    rotate: "rotate-2",
  },
  {
    name: "Saravanakumar S",
    role: "Platform Infrastructure Lead",
    photoPink: "/assets/About-page/team/pinkteam/Saravanakumar.s pink with text.png",
    photoGray: "/assets/About-page/team/grayteam/Saravanakumar.s ash with text.png",
    rotate: "rotate-3",
  },
  {
    name: "Umamaheswari R",
    role: "AI & Data Engineering Lead",
    photoPink: "/assets/About-page/team/pinkteam/Umamaheswari R pink with text.png",
    photoGray: "/assets/About-page/team/grayteam/Umamaheswari R ash with text.png",
    rotate: "-rotate-3",
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

export function OurPeopleSection() {
  return (
    <section className="w-full py-20 bg-[#030303] text-white relative overflow-hidden" id="our-people">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.05),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            {/* Curved Arrow PNG on Right Side (Mirrored, shifted left) */}
            <div className="absolute -top-6 sm:-top-8 md:-top-10 right-2 sm:right-6 md:right-10 lg:right-12 z-20 pointer-events-none select-none">
              <img
                src="/assets/components/Carrow-right.png"
                alt="Curved arrow right"
                className="w-14 sm:w-18 md:w-22 lg:w-24 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)] scale-x-[-1]"
              />
            </div>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-white mb-4 font-sans leading-[1.45]">
              <span className="bg-rose-500 text-white font-semibold px-4 py-1 mr-1.5 rounded-xl inline-block">
                Our People
              </span>{" "}
              behind{" "}
              <span className="relative inline-block text-white px-1 mx-1 whitespace-nowrap">
                <span className="text-white font-semibold relative z-10">every Solutions</span>
                {/* Modern Pencil Art Hand-Sketched Underline */}
                <svg
                  className="absolute -bottom-4 left-0 w-full h-5 text-rose-500 pointer-events-none overflow-visible z-0"
                  viewBox="0 0 250 20"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Primary artistic pencil stroke */}
                  <path
                    d="M 3 14 C 50 6, 130 17, 245 9"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    className="opacity-90 filter drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                  />
                  {/* Secondary graphite texture pencil stroke overlay */}
                  <path
                    d="M 12 17 C 75 11, 165 18, 238 12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeDasharray="6 3 14 4"
                    className="opacity-75 filter drop-shadow-[0_0_5px_rgba(244,63,94,0.4)]"
                  />
                </svg>
              </span>
            </h2>
          </div>
        </Reveal>

        {/* ── Team Collage Slider (Vibrant Collage) ── */}
        <Reveal>
          <div className="relative w-full overflow-hidden mb-16 py-8 bg-[#030303] rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-zinc-900/60">
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
                            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">From Team to<br /><span className="text-rose-500">Trendsetters</span></h3>
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
                            <h3 className="text-3xl font-black text-white leading-tight tracking-tight">How Employee<br /><span className="text-zinc-500 text-4xl">Stories</span></h3>
                          </div>
                        )}
                        {idx === 6 && (
                          <div className="w-[160px] h-[130px] rounded-2xl flex items-center justify-center p-4 shrink-0">
                            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">Can<br /><span className="text-rose-500">Humanize</span></h3>
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

        {/* ── Our People Polaroid Cards Container ── */}
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800/40 bg-zinc-950/30 p-8 md:p-12 lg:p-16">

            {/* Dot grid texture */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />

            <div className="relative z-10 flex flex-col items-center">

              {/* Centered Heading with Connecting Side Arrow (matching PartnersSection style) */}
              <div className="text-center max-w-xl mx-auto mb-16 relative z-10">
                <h3 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white relative inline-block">
                  {/* Connecting side arrow starting at left side */}
                  <div className="absolute -top-2 sm:-top-4 md:-top-6 -left-20 sm:-left-28 md:-left-36 lg:-left-44 z-30 pointer-events-none select-none">
                    <img
                      src="/assets/components/top-to-buttom-side%20-Arrowmid.png"
                      alt="Connecting section arrow"
                      className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(225,29,72,0.4)] transform -rotate-[-30deg]"
                    />
                  </div>
                  Meet Our <span className="text-rose-500">Team</span>
                </h3>
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

                {/* Single Row Horizontal Scroll Slot Container */}
                <div className="w-full overflow-x-auto pb-8 pt-4 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative z-10">
                  <div className="flex gap-6 min-w-max px-4">
                    {teamMembers.map((member, idx) => (
                      <motion.div
                        key={member.name}
                        className={`group relative w-[210px] shrink-0 p-3 pb-5 bg-white border border-zinc-200/80 shadow-[0_12px_24px_rgba(0,0,0,0.25)] rounded cursor-pointer ${member.rotate} origin-center transition-all duration-300`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ y: -12, scale: 1.05, rotate: 0, zIndex: 50, boxShadow: "0 25px 50px -12px rgba(225,29,72,0.25)", transition: { duration: 0.3 } }}
                      >
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
          </div>
        </Reveal>

      </div>
    </section>
  );
}
