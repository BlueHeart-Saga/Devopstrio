"use client";

import React, { useState, useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Suryaprakash S",
    role: "Cloud Solutions Engineer",
    photo: "/webp/assets/About-page/team/MeetOurTeam/new/Suriya.webp",
    rotate: "-rotate-2",
  },
  {
    name: "Hamsavarthiny P",
    role: "DevOps & Automation Lead",
    photo: "/webp/assets/About-page/team/MeetOurTeam/new/Humza.webp",
    rotate: "-rotate-1",
  },
  {
    name: "Ananthalakshmi",
    role: "Senior Software Architect",
    photo: "/webp/assets/About-page/team/MeetOurTeam/new/Anantha-Lakshmi.webp",
    rotate: "rotate-2",
  },
  {
    name: "Sagadevan",
    role: "Machine Learning Engineer",
    photo: "/webp/assets/About-page/team/MeetOurTeam/new/Sagadevan.webp",
    rotate: "rotate-2",
  },
  {
    name: "Subbiah Muthu",
    role: "Deep Learning Specialist",
    photo: "/webp/assets/About-page/team/MeetOurTeam/new/Subbiah.webp",
    rotate: "-rotate-1",
  },
  {
    name: "Kishore",
    role: "AI Security Engineer",
    photo: "/webp/assets/About-page/team/MeetOurTeam/new/Kishore.webp",
    rotate: "rotate-3",
  },
  {
    name: "Sermaraja",
    role: "UI/UX Design Manager",
    photo: "/webp/assets/About-page/team/MeetOurTeam/new/serma-raja.webp",
    rotate: "-rotate-2",
  },
  {
    name: "Thangalakshmi",
    role: "Cognitive Success Lead",
    photo: "/webp/assets/About-page/team/MeetOurTeam/new/Thanga-laxmi.webp",
    rotate: "rotate-1",
  },
  {
    name: "Punitha",
    role: "Design Thinking Lead",
    photo: "/webp/assets/About-page/team/MeetOurTeam/new/Punitha-2.webp",
    rotate: "-rotate-3",
  },
  {
    name: "Ooviya",
    role: "SEO & Content Marketing",
    photo: "/webp/assets/About-page/team/MeetOurTeam/new/Oviya.webp",
    rotate: "rotate-2",
  },
  {
    name: "Saravanakumar S",
    role: "Platform Infrastructure Lead",
    photo: "/webp/assets/About-page/team/MeetOurTeam/new/Saravana-Kumar.webp",
    rotate: "rotate-3",
  },
  {
    name: "Umamaheswari R",
    role: "AI & Data Engineering Lead",
    photo: "/webp/assets/About-page/team/MeetOurTeam/new/Uma.webp",
    rotate: "-rotate-3",
  }
  // {
  //   name: "Mareeswaran",
  //   role: "Full Stack Engineer",
  //   photo: "/webp/assets/About-page/team/MeetOurTeam/new/Mareeswaran.webp",
  //   rotate: "-rotate-2",
  // },
];

const eventImages = [
  "/webp/assets/About-page/events/Picture1.webp",
  "/webp/assets/About-page/events/Picture2.webp",
  "/webp/assets/About-page/events/Picture3.webp",
  "/webp/assets/About-page/events/Picture4.webp",
  "/webp/assets/About-page/events/Picture5.webp",
  "/webp/assets/About-page/events/Picture6.webp",
  "/webp/assets/About-page/events/Picture7.webp",
  "/webp/assets/About-page/events/Picture8.webp",
  "/webp/assets/About-page/events/Picture9.webp",
  "/webp/assets/About-page/events/Picture10.webp",
  "/webp/assets/About-page/events/Picture11.webp",
  "/webp/assets/About-page/events/Picture12.webp",
  "/webp/assets/About-page/events/Picture13.webp",
  "/webp/assets/About-page/events/Picture14.webp",
  "/webp/assets/About-page/events/Picture15.webp",
  "/webp/assets/About-page/events/Picture16.webp",
  "/webp/assets/About-page/events/Picture17.webp",
  "/webp/assets/About-page/events/Picture18.webp",
  "/webp/assets/About-page/events/Picture19.webp",
  "/webp/assets/About-page/events/Picture20.webp",
  "/webp/assets/About-page/events/Picture21.webp",
];

export function OurPeopleSection() {
  const teamScrollRef = useRef<HTMLDivElement>(null);

  const scrollTeam = (direction: "left" | "right") => {
    if (teamScrollRef.current) {
      const scrollAmount = teamScrollRef.current.clientWidth;
      teamScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full pt-14 sm:pt-20 pb-6 sm:pb-8 bg-[#030303] text-white relative overflow-hidden" id="our-people">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.05),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            {/* Curved Arrow PNG on Right Side (Mirrored, shifted left) */}
            <div className="absolute -top-6 sm:-top-8 md:-top-10 right-2 sm:right-6 md:right-10 lg:right-12 z-20 pointer-events-none select-none">
              <img src="/webp/assets/components/Carrow-right.webp"
                alt="Curved arrow right"
                className="w-14 sm:w-18 md:w-22 lg:w-24 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.4)] scale-x-[-1]"
              loading="lazy" />
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
                          <img src={eventImages[idx % eventImages.length]} alt="Leadership Event" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" loading="lazy" />
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
                          <img src={eventImages[(idx + 7) % eventImages.length]} alt="Leadership Meeting" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" loading="lazy" />
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
                          <img src={eventImages[(idx + 14) % eventImages.length]} alt="Team Milestone" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" loading="lazy" />
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
          <div className="relative w-full">

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
                    <img src="/webp/assets/components/top-to-buttom-side-Arrowmid.webp"
                      alt="Connecting section arrow"
                      className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(225,29,72,0.4)] transform -rotate-[-30deg]"
                    loading="lazy" />
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

                {/* 4 Cards Per View Sliding Carousel Container (Ample top & bottom padding prevents hover clipping) */}
                <div className="w-full relative pt-8 sm:pt-12 pb-6 sm:pb-8 -mt-4 sm:-mt-6 z-10">
                  <div
                    ref={teamScrollRef}
                    className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pt-4 pb-6 px-2 cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {teamMembers.map((member, idx) => (
                      <div
                        key={member.name}
                        className="w-[calc(100%-16px)] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] shrink-0 snap-start snap-always"
                      >
                        <motion.div
                          className={`group relative w-full p-3 sm:p-3.5 pb-4 sm:pb-5 bg-white border border-zinc-200/90 shadow-[0_14px_30px_rgba(0,0,0,0.28)] rounded-2xl cursor-pointer ${member.rotate} origin-center transition-all duration-300 ease-out`}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: (idx % 4) * 0.05 }}
                          whileHover={{
                            y: -14,
                            scale: 1.03,
                            rotate: 0,
                            zIndex: 40,
                            boxShadow: "0 28px 50px -12px rgba(0,0,0,0.45), 0 0 25px rgba(225,29,72,0.18)",
                          }}
                        >
                          {/* Photo Container */}
                          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-zinc-100 shadow-inner">
                            <img src={member.photo}
                              alt={member.name}
                              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                              loading="lazy" />
                          </div>

                          {/* Bottom Border / Polaroid Info Area that smoothly expands on hover revealing Signature Name */}
                          <div className="w-full grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                            <div className="overflow-hidden pt-2 sm:pt-2.5 pb-1 flex items-center justify-center">
                              <h4
                                style={{ fontFamily: "'Caveat', 'Alex Brush', 'Kaushan Script', cursive" }}
                                className="text-zinc-950 font-bold text-2xl sm:text-3xl md:text-[32px] tracking-wide text-center truncate w-full group-hover:text-rose-600 transition-colors duration-200 select-none drop-shadow-sm -rotate-1 inline-block leading-tight"
                              >
                                {member.name}
                              </h4>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>

                  {/* Carousel Navigation Arrow Controls */}
                  <div className="flex items-center justify-center gap-4 mt-4 sm:mt-6 relative z-20">
                    <button
                      onClick={() => scrollTeam("left")}
                      className="w-11 h-11 rounded-full border border-zinc-700 hover:border-rose-500 hover:bg-rose-500/10 text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                      aria-label="Previous Team Members"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      onClick={() => scrollTeam("right")}
                      className="w-11 h-11 rounded-full border border-zinc-700 hover:border-rose-500 hover:bg-rose-500/10 text-white flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                      aria-label="Next Team Members"
                    >
                      <ArrowRight size={18} />
                    </button>
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
