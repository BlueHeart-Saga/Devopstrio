"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, Tag, ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export const OpenPositions = () => {
  const positions = [
    {
      title: "Frontend Developer Intern",
      duration: "3 Months",
      location: "Remote / Hybrid",
      skills: ["React", "JavaScript", "Next.js", "Tailwind CSS"],
      desc: "Work on web application development using React/Next.js frameworks. Help translate Figma mocks into structured Tailwind components.",
      formTrack: "Frontend"
    },
    {
      title: "DevOps Intern",
      duration: "3-6 Months",
      location: "Remote / Hybrid",
      skills: ["Docker", "Azure", "GitHub Actions", "Terraform"],
      desc: "Implement continuous integration tasks, audit build logs, write infrastructure scripts, and assist in Kubernetes landing zone maintenance.",
      formTrack: "DevOps"
    },
    {
      title: "AI Engineer Intern",
      duration: "3-6 Months",
      location: "Remote / Hybrid / Onsite",
      skills: ["Python", "AI", "LLMs", "FastAPI", "Vector Search"],
      desc: "Develop backend microservices incorporating vector databases, build semantic caching logic, and evaluate multi-agent workflows.",
      formTrack: "AI Engineering"
    }
  ];

  const faqs = [
    {
      q: "Who can apply?",
      a: "Students, recent graduates, and career starters looking to launch their technology career. We look for curiosity, strong basic computing concepts, and basic experience in your selected track."
    },
    {
      q: "Is the internship remote?",
      a: "Yes! Remote, hybrid, and onsite options are available based on your location. We support co-working locations across global delivery centers."
    },
    {
      q: "Do interns receive official certificates?",
      a: "Yes, all graduates receive an official Accredited Certificate of Completion, a Portfolio Performance review, and a Letter of Recommendation signed by our Principal Architects."
    },
    {
      q: "Are full-time opportunities available?",
      a: "Absolutely. High-performing interns may be considered for entry-level Associate positions at Devopstrio upon graduation or completion of their internship tenure."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleApply = (trackName: string) => {
    // Scroll to form and set text if possible
    const form = document.getElementById("apply-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
      const skillsInput = document.getElementById("skills-input") as HTMLInputElement;
      if (skillsInput) {
        skillsInput.value = `${trackName} - `;
        skillsInput.focus();
      }
    }
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* SECTION 1: Opportunities */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Open Cohort
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              Active <span className="text-rose-500">Opportunities</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-2xl mx-auto">
              Explore our current open internship opportunities. Applications are reviewed on a rolling basis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {positions.map((pos, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-zinc-950/60 border border-zinc-900 rounded-3xl p-6 flex flex-col justify-between hover:border-zinc-800 hover:bg-zinc-950 transition-all duration-300 group"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-rose-500 transition-colors">
                    {pos.title}
                  </h3>

                  <div className="flex flex-col gap-2.5 mb-6 text-xs text-zinc-550 font-semibold">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-rose-500" />
                      <span>Duration: {pos.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-rose-500" />
                      <span>Location: {pos.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-medium">
                    {pos.desc}
                  </p>
                </div>

                <div>
                  <div className="mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2 font-bold">Target Skills</span>
                    <div className="flex flex-wrap gap-1.5">
                      {pos.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[10px] bg-zinc-900 border border-zinc-850 px-2 py-1 rounded text-zinc-300 font-bold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleApply(pos.formTrack)}
                    className="w-full py-3 bg-zinc-900 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition-all duration-300 border border-zinc-800 hover:border-rose-500 flex items-center justify-center gap-1.5 group/btn"
                  >
                    Apply Now
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: FAQ */}
        <div className="max-w-4xl mx-auto border-t border-zinc-900 pt-24">
          <div className="text-center mb-16">
            <HelpCircle size={32} className="text-rose-500 mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              Frequently Asked <span className="text-rose-500">Questions</span>
            </h2>
            <p className="text-zinc-400 mt-2 text-xs sm:text-sm font-bold">
              Got questions about our cohort structure and selection process?
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-zinc-950/40 border border-zinc-900 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left text-white font-bold text-sm sm:text-base hover:bg-zinc-900/10 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-rose-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-zinc-900/50 text-xs sm:text-sm text-zinc-450 leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
