"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const devopstrioServices = [
  "AI & Data Innovation",
  "Cloud Services",
  "DevOps & Automation",
  "Cybersecurity",
  "Software Development",
  "Digital Transformation",
  "Data Engineering",
  "Managed Services",
  "QA & Testing",
  "IT Consulting",
  "Others"
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          selectedServices,
        }),
      });

      if (response.ok) {
        setForm({ name: "", email: "", phone: "", message: "" });
        setSelectedServices([]);
        setSubmitted(true);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="w-full bg-[#030303] pt-4 pb-12 md:pt-2 md:pb-16 flex items-center justify-center font-sans relative overflow-hidden">

      <div className="w-full max-w-[1100px] mx-auto px-6 relative z-10 [perspective:1500px]">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <Reveal className="mb-6 md:mb-8 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-zinc-500">
              Start a Conversation
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-4 text-white">
            Ready to scale? <span className="text-rose-500">Let&apos;s build it together.</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed max-w-xl mx-auto">
            Our engineering leaders are standing by to review your requirements, scope your vision, and guide your next transformation.
          </p>
        </Reveal>

        {/* ── Initial Card (Commented Out) ──────────────────────────────────
        <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden flex flex-col items-center justify-center min-h-[450px] shadow-2xl relative p-10 md:p-16 text-center transform-gpu">
          <h2 className="text-4xl md:text-6xl lg:text-[76px] font-medium text-white tracking-tight mb-6 leading-[1.05]">
            Fuelling growth with every deployment
          </h2>
          <p className="text-zinc-400 text-base md:text-lg lg:text-xl font-medium max-w-2xl mb-12">
            From cloud architecture to AI automation, we craft enterprise solutions that scale your business on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="px-8 py-4 bg-white text-black rounded-full text-sm md:text-base font-bold">
              Start a conversation
            </button>
            <button className="flex items-center gap-2.5 px-6 py-4 text-white text-sm md:text-base font-bold">
              Learn more
            </button>
          </div>
        </div>
        ─────────────────────────────────────────────────────────────────── */}

        <motion.div
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full bg-[#131313] rounded-3xl overflow-hidden flex flex-col lg:flex-row min-h-[500px] shadow-2xl relative transform-gpu"
        >

              {/* LEFT SIDE: Custom Theme Area */}
              <div className="w-full lg:w-[45%] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden bg-[#050505] text-white">

                {/* Blurred Glowing Blobs */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#ebd0be] rounded-full blur-[100px] opacity-50 pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#ebd0be] rounded-full blur-[120px] opacity-40 pointer-events-none" />

                {/* Top area: Profile + Contact Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6 z-10 w-full backdrop-blur-sm">
                  {/* Profile Block */}
                  <div className="max-w-[200px]">
                    <div className="w-[64px] h-[64px] rounded-full overflow-hidden mb-4 border-2 border-white/20 shadow-sm bg-white/5">
                      <img
                        src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=transparent"
                        alt="Alex Coordinator"
                        className="w-full h-full object-cover scale-110"
                      />
                    </div>
                    <p className="text-xs font-medium text-white/80 leading-relaxed">
                      <span className="font-semibold text-white block">Solutions Architect,</span>
                      can guide your project's initial steps.
                    </p>
                  </div>

                  {/* Pills */}
                  <div className="flex flex-col gap-2 mt-2 sm:mt-0">
                    <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#ebd0be] text-[10px] font-medium tracking-wide shadow-sm text-center">
                      {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                    </div>
                    <a
                      href="tel:0447471482903"
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#ebd0be] text-[10px] font-medium tracking-wide text-center shadow-sm hover:bg-white/10 hover:border-[#ebd0be]/30 hover:text-white transition-all"
                    >
                      📞 044-7471 482903
                    </a>
                  </div>
                </div>

                {/* Bottom area: Title + Socials */}
                <div className="z-10 mt-12 lg:mt-0 backdrop-blur-sm">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.05]">
                    Every project<br />starts with a plan.
                  </h2>

                  <div className="flex items-center gap-5">
                    <a href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" title="LinkedIn">
                      <img src="/assets/social-icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61579126233218" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" title="Facebook">
                      <img src="/assets/social-icons/facebook.svg" alt="Facebook" className="w-5 h-5 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="https://www.instagram.com/devopstrio_offcl/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" title="Instagram">
                      <img src="/assets/social-icons/instagram.svg" alt="Instagram" className="w-5 h-5 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="https://www.youtube.com/@Devopstrioltd" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" title="YouTube">
                      <img src="/assets/social-icons/youtube.svg" alt="YouTube" className="w-5 h-5 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>


              {/* RIGHT SIDE: Dark Form Area */}
              <div className="w-full lg:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-[#131313]">

                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center fade-in">
                    <CheckCircle2 size={56} className="text-[#E11D48] mb-6" />
                    <h3 className="text-3xl font-normal text-white mb-4">Message Received</h3>
                    <p className="text-white/50 mb-10 max-w-sm leading-relaxed">Our architecture team will review your requirements and be in touch shortly to start planning.</p>
                    <button onClick={() => setSubmitted(false)} className="w-full max-w-xs py-3.5 bg-[#E11D48] text-white text-sm font-medium rounded hover:bg-[#BE123C] transition-colors">
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="w-full max-w-[400px] mx-auto lg:ml-6 flex flex-col gap-6">

                    {/* Heading & Services */}
                    <div>
                      <h3 className="text-3xl md:text-4xl font-normal text-white/40 leading-[1.1] mb-5 tracking-tight">
                        What services<br />
                        <span className="text-white">we can support<br />you with?</span>
                      </h3>

                      <p className="text-[12px] text-white/60 mb-3 font-medium tracking-wide">I would love to partner with Devopstrio on...</p>
                      <div className="flex flex-wrap gap-2.5">
                        {devopstrioServices.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            className={`px-3.5 py-1.5 rounded-md border text-[11px] font-normal transition-all duration-300 ${selectedServices.includes(s)
                                ? "bg-[#ebd0be] border-[#ebd0be] text-black"
                                : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                              }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Minimalist Inputs */}
                    <div className="flex flex-col gap-4 mt-1">
                      <div className="relative border-b border-white/20 pb-2 focus-within:border-[#ebd0be] transition-colors">
                        <input
                          required
                          value={form.name}
                          onChange={set("name")}
                          placeholder="Your Name"
                          className="w-full bg-transparent outline-none text-white text-[13px] placeholder-white/30 font-light"
                        />
                      </div>
                      <div className="relative border-b border-white/20 pb-2 focus-within:border-[#ebd0be] transition-colors">
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={set("email")}
                          placeholder="E-mail"
                          className="w-full bg-transparent outline-none text-white text-[13px] placeholder-white/30 font-light"
                        />
                      </div>
                      <div className="relative border-b border-white/20 pb-2 focus-within:border-[#ebd0be] transition-colors">
                        <input
                          value={form.phone}
                          onChange={set("phone")}
                          placeholder="Phone"
                          className="w-full bg-transparent outline-none text-white text-[13px] placeholder-white/30 font-light"
                        />
                      </div>
                      <div className="relative border-b border-white/20 pb-2 focus-within:border-[#ebd0be] transition-colors">
                        <input
                          required
                          value={form.message}
                          onChange={set("message")}
                          placeholder="Message"
                          className="w-full bg-transparent outline-none text-white text-[13px] placeholder-white/30 font-light"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 mt-2 bg-[#E11D48] hover:bg-[#BE123C] text-white text-[13px] font-medium rounded transition-colors disabled:opacity-50"
                    >
                      {submitting ? "Sending..." : "Submit"}
                    </button>

                  </form>
                )}
              </div>

            </motion.div>
      </div>
    </section>
  );
}
