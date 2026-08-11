"use client";

import React, { useState, useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Suryaprakash S",
    role: "Cloud Solutions Engineer",
    photo: "/assets/About-page/team/MeetOurTeam/Suriya.png",
    rotate: "-rotate-2",
  },
  {
    name: "Hamsavarthiny P",
    role: "DevOps & Automation Lead",
    photo: "/assets/About-page/team/MeetOurTeam/Humza.png",
    rotate: "-rotate-1",
  },
  {
    name: "Ananthalakshmi",
    role: "Senior Software Architect",
    photo: "/assets/About-page/team/MeetOurTeam/Anantha%20Lakshmi.png",
    rotate: "rotate-2",
  },
  {
    name: "Sagadevan",
    role: "Machine Learning Engineer",
    photo: "/assets/About-page/team/MeetOurTeam/Sagadevan.png",
    rotate: "rotate-2",
  },
  {
    name: "Subbiah Muthu",
    role: "Deep Learning Specialist",
    photo: "/assets/About-page/team/MeetOurTeam/Subbiah.png",
    rotate: "-rotate-1",
  },
  {
    name: "Kishore",
    role: "AI Security Engineer",
    photo: "/assets/About-page/team/MeetOurTeam/Kishore.png",
    rotate: "rotate-3",
  },
  {
    name: "Sermaraja",
    role: "UI/UX Design Manager",
    photo: "/assets/About-page/team/MeetOurTeam/serma%20raja.png",
    rotate: "-rotate-2",
  },
  {
    name: "Thangalakshmi",
    role: "Cognitive Success Lead",
    photo: "/assets/About-page/team/MeetOurTeam/Thanga%20laxmi.png",
    rotate: "rotate-1",
  },
  {
    name: "Punitha",
    role: "Design Thinking Lead",
    photo: "/assets/About-page/team/MeetOurTeam/Punitha.png",
    rotate: "-rotate-3",
  },
  {
    name: "Ooviya",
    role: "SEO & Content Marketing",
    photo: "/assets/About-page/team/MeetOurTeam/Oviya.png",
    rotate: "rotate-2",
  },
  {
    name: "Saravanakumar S",
    role: "Platform Infrastructure Lead",
    photo: "/assets/About-page/team/MeetOurTeam/Saravana%20Kumar.png",
    rotate: "rotate-3",
  },
  {
    name: "Umamaheswari R",
    role: "AI & Data Engineering Lead",
    photo: "/assets/About-page/team/MeetOurTeam/Uma.png",
    rotate: "-rotate-3",
  },
  {
    name: "Mareeswaran",
    role: "Full Stack Engineer",
    photo: "/assets/About-page/team/MeetOurTeam/Mareeswaran.png",
    rotate: "rotate-1",
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

                {/* 4 Cards Per View Sliding Carousel Container */}
                <div className="w-full overflow-hidden relative pb-4 pt-4 z-10">
                  <div
                    ref={teamScrollRef}
                    className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {teamMembers.map((member, idx) => (
                      <div
                        key={member.name}
                        className="w-[calc(100%-16px)] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] shrink-0 snap-start snap-always"
                      >
                        <motion.div
                          className={`group relative w-full p-3.5 pb-6 bg-white border border-zinc-200/80 shadow-[0_14px_30px_rgba(0,0,0,0.3)] rounded cursor-pointer ${member.rotate} origin-center transition-all duration-300`}
                          initial={{ opacity: 0, y: 35 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: (idx % 4) * 0.06 }}
                          whileHover={{ y: -12, scale: 1.04, rotate: 0, zIndex: 50, boxShadow: "0 25px 50px -12px rgba(225,29,72,0.25)" }}
                        >
                          <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden bg-zinc-100">
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
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
