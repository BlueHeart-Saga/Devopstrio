"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";


const services = [
  "Cloud Infrastructure & DevOps",
  "AI / ML Engineering",
  "Product Engineering",
  "Cybersecurity & SecOps",
  "Data Engineering & Analytics",
  "Site Reliability Engineering (SRE)",
  "Enterprise Modernisation",
  "Managed Services & Support",
  "Other / Not Sure Yet",
];

const budgets = [
  "< £10,000",
  "£10,000 – £50,000",
  "£50,000 – £150,000",
  "£150,000 – £500,000",
  "£500,000+",
  "Prefer not to say",
];
  


export function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.service || !form.message) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1400);
  };

  // shared classes
  const inputCls =
    "w-full bg-white/5 focus:bg-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all duration-300 font-medium backdrop-blur-sm";
  const labelCls = "block text-[10px] font-bold tracking-[0.18em] uppercase text-white/40 mb-1.5";
  const selectCls = `${inputCls} appearance-none cursor-pointer`;

  return (
    <section className="w-full relative min-h-[780px] flex items-center overflow-hidden bg-[#030303]">

      {/* ── Full-bleed background image ──────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/Contact-page/contactform/image.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-40"
          aria-hidden
        />
        {/* Dark overlay gradient — heavier on left where glass sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/85 to-[#030303]/30" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/60" />
        {/* Rose ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(244,63,94,0.07),transparent_65%)] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-12 xl:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] gap-10 lg:gap-20 items-start">

          {/* ── LEFT: Glass Form ────────────────────────────────────────── */}
          <Reveal>
            {submitted ? (
              /* Success */
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 flex flex-col items-center text-center shadow-2xl">
                <div className="w-14 h-14 rounded-full bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                  <CheckCircle2 size={26} />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">We&apos;ve received your enquiry.</h3>
                <p className="text-white/50 text-sm font-bold leading-relaxed mb-8 max-w-sm">
                  A senior Devopstrio engineer will review your brief and reach out within 2 hours during business hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName:"", lastName:"", email:"", company:"", service:"", budget:"", message:"" }); }}
                  className="px-7 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold tracking-widest uppercase transition-all"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              /* Form card */
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-black/50 backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden"
              >
                {/* Card header */}
                <div className="px-8 pt-8 pb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-[1px] w-5 bg-rose-500" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500">
                      Service Enquiry
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white leading-snug">
                    Start a conversation.<br />
                    <span className="text-white/40 font-bold text-xl md:text-2xl">Tell us what you&apos;re building.</span>
                  </h2>
                </div>

                <div className="px-8 py-7 flex flex-col gap-5">

                  {/* Row 1: First + Last Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cf-first" className={labelCls}>First Name *</label>
                      <input id="cf-first" required value={form.firstName} onChange={set("firstName")} placeholder="Sarah" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="cf-last" className={labelCls}>Last Name</label>
                      <input id="cf-last" value={form.lastName} onChange={set("lastName")} placeholder="Johnson" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 2: Email + Company */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cf-email" className={labelCls}>Work Email *</label>
                      <input id="cf-email" required type="email" value={form.email} onChange={set("email")} placeholder="sarah@company.com" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="cf-company" className={labelCls}>Company</label>
                      <input id="cf-company" value={form.company} onChange={set("company")} placeholder="Acme Corp" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 3: Service + Budget */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="cf-service" className={labelCls}>Service Needed *</label>
                      <select id="cf-service" required value={form.service} onChange={set("service")} className={selectCls}>
                        <option value="" disabled>Select a service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <ChevronDown size={13} className="absolute right-4 bottom-3.5 text-white/30 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <label htmlFor="cf-budget" className={labelCls}>Budget Range</label>
                      <select id="cf-budget" value={form.budget} onChange={set("budget")} className={selectCls}>
                        <option value="" disabled>Select range</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                      <ChevronDown size={13} className="absolute right-4 bottom-3.5 text-white/30 pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label htmlFor="cf-message" className={labelCls}>Brief / Message *</label>
                    <textarea
                      id="cf-message"
                      required
                      value={form.message}
                      onChange={set("message")}
                      rows={4}
                      placeholder="Describe your challenge, project scope, timeline, or anything that helps us understand what you need..."
                      className={`${inputCls} resize-none leading-relaxed`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,63,94,0.35)] hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none mt-1"
                  >
                    {submitting ? "Submitting enquiry..." : "Submit Service Enquiry"}
                    {!submitting && <ArrowUpRight size={14} />}
                  </button>

                  <p className="text-center text-white/25 text-[10px] font-bold tracking-wider">
                    No commitment required · Senior response within 2 hours · 100% confidential
                  </p>
                </div>
              </form>
            )}
          </Reveal>

          {/* ── RIGHT: empty breathing space ──────────── */}
          <div />

        </div>
      </div>
    </section>
  );
}
