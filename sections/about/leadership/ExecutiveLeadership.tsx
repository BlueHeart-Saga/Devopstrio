"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, BadgeCheck } from "lucide-react";

const leaders = [
  {
    name: "Sagadevan",
    designation: "Chief Executive Officer",
    experience: "10+ Years",
    specialization: "Cloud Architecture · Digital Strategy",
    bio: "Visionary technology leader with over a decade of experience building global engineering practices. Leads Devopstrio's strategic direction across AI, Cloud, and DevOps disciplines.",
    initials: "S",
    color: "red",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Technology Director",
    designation: "Chief Technology Officer",
    experience: "12+ Years",
    specialization: "Platform Engineering · AI Innovation",
    bio: "Drives Devopstrio's engineering standards, platform architecture, and innovation roadmap across all global delivery centres.",
    initials: "CT",
    color: "blue",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Operations Leader",
    designation: "Chief Operating Officer",
    experience: "15+ Years",
    specialization: "Global Delivery · Managed Services",
    bio: "Oversees operational excellence across four global delivery centres, ensuring SLA compliance, workforce development, and client success at scale.",
    initials: "CO",
    color: "violet",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Cloud Practice Head",
    designation: "VP — Cloud Engineering",
    experience: "10+ Years",
    specialization: "Azure · AWS · GCP Multi-cloud",
    bio: "Leads Devopstrio's cloud engineering practice, overseeing multi-cloud migrations, cloud-native development, and FinOps governance for enterprise clients.",
    initials: "CP",
    color: "orange",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Engineering Director",
    designation: "VP — Software Engineering",
    experience: "14+ Years",
    specialization: "Enterprise Applications · SaaS",
    bio: "Leads full-cycle product and application engineering, from architecture design through global deployment, for enterprise and SaaS clients.",
    initials: "ED",
    color: "green",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
  {
    name: "Security Practice Lead",
    designation: "VP — Cybersecurity",
    experience: "11+ Years",
    specialization: "DevSecOps · Zero Trust · Compliance",
    bio: "Heads the cybersecurity practice, building security-first engineering cultures and embedding compliance into the core of every client engagement.",
    initials: "SP",
    color: "teal",
    linkedin: "https://www.linkedin.com/company/devopstrioglobal/",
  },
];

const colorMap: Record<string, { gradient: string; badge: string; ring: string }> = {
  red:    { gradient: "from-red-500 to-red-700",    badge: "bg-red-500/10 text-red-400 border-red-500/20",    ring: "ring-red-500/30" },
  blue:   { gradient: "from-blue-500 to-blue-700",  badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",  ring: "ring-blue-500/30" },
  violet: { gradient: "from-violet-500 to-violet-700", badge: "bg-violet-500/10 text-violet-400 border-violet-500/20", ring: "ring-violet-500/30" },
  orange: { gradient: "from-orange-500 to-orange-700", badge: "bg-orange-500/10 text-orange-400 border-orange-500/20", ring: "ring-orange-500/30" },
  green:  { gradient: "from-green-500 to-green-700", badge: "bg-green-500/10 text-green-400 border-green-500/20", ring: "ring-green-500/30" },
  teal:   { gradient: "from-teal-500 to-teal-700",  badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",  ring: "ring-teal-500/30" },
};

export const ExecutiveLeadership = () => {
  return (
    <section id="executive-leadership" className="py-24 bg-[#050505] border-t border-zinc-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(255,23,68,0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
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
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Our executive team combines technology expertise, business vision, and operational excellence to deliver transformative outcomes for clients worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, idx) => {
            const c = colorMap[leader.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-7 overflow-hidden transition-all duration-300"
              >
                {/* Subtle top gradient line */}
                <div className={`absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r ${c.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10">
                  {/* Avatar + LinkedIn */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-xl font-black text-white ring-4 ${c.ring} shrink-0`}>
                      {leader.initials}
                    </div>
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-0.5">{leader.name}</h3>
                  <p className="text-[#FF1744] text-sm font-medium mb-4">{leader.designation}</p>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-5">{leader.bio}</p>

                  <div className="flex flex-col gap-2 pt-4 border-t border-zinc-800/60">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-4 h-4 text-zinc-600 shrink-0" />
                      <span className="text-zinc-400 text-xs">{leader.experience} Experience</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF1744] mt-1.5 shrink-0" />
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${c.badge}`}>{leader.specialization}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
