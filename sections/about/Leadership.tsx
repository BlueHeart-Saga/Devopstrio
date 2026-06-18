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
    photo: "/assets/About-page/team/membars/Suman_1.png",
    rotate: "-rotate-3",
    zIndex: "z-[1]",
  },
  {
    name: "Sagadevan",
    role: "Machine Learning Engineer",
    photo: "/assets/About-page/team/membars/sagadevan.png",
    rotate: "rotate-2",
    zIndex: "z-[2]",
  },
  {
    name: "Subbiah Muthu",
    role: "Deep Learning Specialist",
    photo: "/assets/About-page/team/membars/subbiah_muthu.png",
    rotate: "-rotate-1",
    zIndex: "z-[3]",
  },
  {
    name: "Kishore",
    role: "AI Security Engineer",
    photo: "/assets/About-page/team/membars/Kishore2.jpg",
    rotate: "rotate-3",
    zIndex: "z-[4]",
  },
  {
    name: "Sermaraja",
    role: "UI/UX Design Manager",
    photo: "/assets/About-page/team/membars/Serma_2.jpg",
    rotate: "-rotate-2",
    zIndex: "z-[5]",
  },
  {
    name: "Thangalakshmi",
    role: "Cognitive Success Lead",
    photo: "/assets/About-page/team/membars/thangalakshimi_7.jpeg",
    rotate: "rotate-1",
    zIndex: "z-[6]",
  },
  {
    name: "Punitha",
    role: "Design Thinking Lead",
    photo: "/assets/About-page/team/membars/Punitha_2.png",
    rotate: "-rotate-3",
    zIndex: "z-[7]",
  },
  {
    name: "Ooviya",
    role: "SEO & Content Marketing",
    photo: "/assets/About-page/team/membars/Ooviya_2.png",
    rotate: "rotate-2",
    zIndex: "z-[8]",
  },
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

        {/* ── Founder Card ── */}
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-950/30 mb-16 group hover:border-zinc-700/60 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr]">

              {/* Photo */}
              <div className="relative min-h-[320px] lg:min-h-[420px] overflow-hidden bg-zinc-900">
                <img
                  src="/assets/About-page/leader/Founder.png"
                  alt="Manikandan PS"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-950/70 pointer-events-none hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none lg:hidden" />
              </div>

              {/* Content */}
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

                {/* Tags */}
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
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-rose-400 transition-colors w-fit group/link"
                >
                  Connect with Manikandan
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>

              </div>
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
                     

                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full aspect-[3/4] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm"
                      />
                      
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
