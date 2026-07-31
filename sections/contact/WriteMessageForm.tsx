"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Send, CheckCircle2, Mail, ChevronDown } from "lucide-react";
import { insightsApi } from "@/lib/insightsApi";
import CategoryPopup from "@/components/CategoryPopup";

const countryPrefixes = [
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+1", country: "US/CA", flag: "🇺🇸" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+31", country: "NL", flag: "🇳🇱" },
];

const coreServices = [
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
  "Support Inquiries",
  "Other"
];

export function WriteMessageForm() {
  const [formData, setFormData] = useState({
    service: "",
    firstName: "",
    lastName: "",
    email: "",
    countryPrefix: "+44",
    phone: "",
    country: "",
    message: "",
    newsletter: false,
    marketingConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);

  // Auto-scroll to #contact-form or #write-message if hash is present in URL
  useEffect(() => {
    const handleHashScroll = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (hash === "contact-form" || hash === "write-message" || hash === "form") {
          const el = document.getElementById(hash) || document.getElementById("contact-form") || document.getElementById("write-message");
          if (el) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 150);
          }
        }
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  // Auto-detect country code from client IP location
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_calling_code) {
          const matched = countryPrefixes.find((p) => p.code === data.country_calling_code);
          setFormData((prev) => ({
            ...prev,
            countryPrefix: data.country_calling_code,
            country: prev.country || data.country_name || "",
          }));
        }
      })
      .catch(() => {
        // Silently fallback to default (+44 UK)
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Send email notification & thank you auto-reply via /api/contact Mail API
      const contactResponse = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: `${formData.countryPrefix} ${formData.phone}`.trim(),
          company: formData.country ? `Country: ${formData.country}` : "",
          message: formData.message,
          selectedServices: formData.service ? [formData.service] : [],
        }),
      });

      if (!contactResponse.ok) {
        console.warn("Contact API status:", contactResponse.status);
      }

      // 2. If newsletter or marketing consent is checked, subscribe email
      if (formData.newsletter || formData.marketingConsent) {
        await insightsApi.subscribe(formData.email, [], ["general"]).catch((err) => {
          console.warn("Newsletter subscription warning:", err);
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      if (formData.newsletter) {
        setShowCategoryPopup(true);
      }
    }
  };

  return (
    <section id="write-message" className="w-full py-6 md:py-10 bg-[#030303] text-white relative overflow-hidden font-sans border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-rose-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <Reveal className="mb-8 md:mb-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-zinc-500">
              Global Engineering Inquiry
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-3 text-white">
            Connect with our <span className="text-rose-500">team worldwide.</span>
          </h2>
          {/* <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed max-w-xl mx-auto">
            Fill out the details below to route your query directly to our global engineering leads.
          </p> */}
        </Reveal>

        {/* Open Unboxed Form Layout */}
        <Reveal delay={0.1}>
          <div className="w-full">
            
            <div className="pb-3 mb-6 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                Write a Message
              </h3>
            </div>

            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center border border-white/10 rounded-2xl bg-zinc-950/50 p-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                <p className="text-xs md:text-sm text-zinc-400 max-w-md font-medium mb-6">
                  Thank you for reaching out to Devopstrio. Our engineering team will review your inquiry and respond within 2 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      service: "",
                      firstName: "",
                      lastName: "",
                      email: "",
                      countryPrefix: "+44",
                      phone: "",
                      country: "",
                      message: "",
                      newsletter: false,
                      marketingConsent: false,
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/10"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">

                {/* Services Dropdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                      Services <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white focus:outline-none transition-all appearance-none cursor-pointer font-semibold pr-8"
                      >
                        <option value="" disabled className="bg-zinc-950 text-zinc-500">
                          SELECT SERVICE
                        </option>
                        {coreServices.map((serviceName, sIdx) => (
                          <option key={sIdx} value={serviceName} className="bg-zinc-950 text-white py-2">
                            {serviceName}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>

                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                      First Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                      Last Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Morgan"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* E-mail & Phone Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                      E-mail <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex.morgan@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex items-center gap-2 border-b border-white/30 focus-within:border-rose-500 transition-all">
                      <select
                        value={formData.countryPrefix}
                        onChange={(e) => setFormData({ ...formData, countryPrefix: e.target.value })}
                        className="bg-transparent py-3 text-sm md:text-base text-rose-400 focus:outline-none cursor-pointer font-bold font-mono"
                      >
                        {countryPrefixes.map((p, pIdx) => (
                          <option key={pIdx} value={p.code} className="bg-zinc-950 text-white">
                            {p.flag} {p.code} ({p.country})
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        required
                        placeholder="1784 640216"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent py-3 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-semibold font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                      Country <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. United Kingdom, India, United States"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-semibold"
                    />
                  </div>
                  <div className="hidden md:block" />
                </div>

                {/* Big Textarea: How can we help you? */}
                <div>
                  <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                    How can we help you? <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project requirements, scope, timeline, architecture goals, or specific challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/50 border border-white/20 focus:border-rose-500/60 rounded-xl p-4 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-medium resize-none"
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4 pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.newsletter}
                      onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                      className="mt-0.5 w-4 h-4 rounded border-white/40 bg-transparent text-rose-600 focus:ring-rose-500 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-xs md:text-sm text-zinc-300 group-hover:text-white transition-colors font-semibold">
                      I would like to receive newsletters and announcements via email.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.marketingConsent}
                      onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                      className="mt-0.5 w-4 h-4 rounded border-white/40 bg-transparent text-rose-600 focus:ring-rose-500 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-xs md:text-sm text-zinc-300 group-hover:text-white transition-colors font-semibold">
                      I would like to be contacted by Devopstrio local marketing for opportunities via email.
                    </span>
                  </label>
                </div>

                {/* Privacy Consent Notice */}
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-medium pt-2 border-t border-white/10">
                  The Controller of personal data is Devopstrio Group. The data entered in the form will be processed to maintain contact and analyze interest in our materials. You can withdraw any consent given at any time.
                </p>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-between gap-4 px-9 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-50 cursor-pointer rounded-lg shadow-lg"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit</span>
                        <Mail size={16} className="text-zinc-400" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </Reveal>

      </div>

      {showCategoryPopup && (
        <CategoryPopup
          email={formData.email}
          closePopup={() => setShowCategoryPopup(false)}
        />
      )}
    </section>
  );
}
