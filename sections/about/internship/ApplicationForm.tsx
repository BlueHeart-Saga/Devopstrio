"use client";

import React, { useState, useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, UploadCloud, FileText, X, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";

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

const internshipTracks = [
  "Software Engineering (Full-Stack / Next.js / APIs)",
  "Cloud Engineering (AWS / Azure / GCP / Terraform)",
  "DevOps & Automation (Kubernetes / CI/CD / GitOps)",
  "AI & Data Engineering (LLMs / Pipelines / ML Ops)",
  "Cybersecurity & DevSecOps (Zero-Trust / SOC2)",
  "General / Open to Multiple Tracks"
];

const graduationYears = [
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "Recent Graduate",
  "Other"
];

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryPrefix: "+44",
    phone: "",
    college: "",
    degree: "",
    gradYear: "",
    track: "",
    skills: "",
    linkedin: "",
    portfolio: "",
    newsletter: true,
  });

  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Auto-detect country code from client IP location (Matching WriteMessageForm)
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_calling_code) {
          setFormData((prev) => ({
            ...prev,
            countryPrefix: data.country_calling_code,
          }));
        }
      })
      .catch(() => {
        // Silently fallback to default (+44 UK)
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileSelect = (selectedFile: File | null) => {
    if (!selectedFile) return;
    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("File size exceeds 5MB limit. Please upload a smaller PDF or DOCX file.");
      return;
    }
    setFile(selectedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const data = new FormData();
      const combinedPhone = `${formData.countryPrefix} ${formData.phone}`.trim();

      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", combinedPhone);
      data.append("college", formData.college);
      data.append("degree", formData.degree);
      data.append("gradYear", formData.gradYear);
      data.append(
        "skills",
        formData.track ? `[Track: ${formData.track}] ${formData.skills}` : formData.skills
      );
      data.append("linkedin", formData.linkedin);
      data.append("portfolio", formData.portfolio);

      if (file) {
        data.append("resume", file);
      }

      const response = await fetch("/api/internship", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorJson = await response.json().catch(() => ({}));
        setErrorMessage(errorJson.error || "Failed to submit application. Please check your network and try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("An unexpected error occurred during submission. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScrollToForm = () => {
    const element = document.getElementById("apply-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="apply-form" className="w-full py-10 md:py-16 bg-[#030303] text-white relative overflow-hidden font-sans border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-rose-950/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header (Matching WriteMessageForm.tsx) */}
        <Reveal className="mb-8 md:mb-12 text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* Top-to-bottom straight arrow PNG */}
          <div className="mb-2 sm:mb-3 flex justify-center pointer-events-none select-none">
            <img src="/assets/components/streight-toptobuttm.png"
              alt="Top to bottom arrow"
              className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(244,63,94,0.5)]"
            loading="lazy" />
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-[1.35] mb-3 text-white">
            Launch Your{" "}
            <span className="bg-rose-500 text-white font-semibold px-4 py-1 mx-1 rounded-xl inline-block">
              Career
            </span>{" "}
            with our <span className="text-rose-500 font-semibold">Team</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-medium max-w-xl mx-auto">
            Fill out the application form below to initiate your engineering internship journey.
          </p>
        </Reveal>

        {/* Open Unboxed Form Layout (Matching WriteMessageForm.tsx) */}
        <Reveal delay={0.1}>
          <div className="w-full">

            {/* Subheader bar with category tag */}
            <div className="pb-3 mb-8 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight flex items-center gap-2.5">
                Application Portal
              </h3>
              {/* <span className="text-xs font-mono text-rose-400/90 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full uppercase tracking-widest hidden sm:inline-block">
                Global Internship Program
              </span> */}
            </div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                /* Success State (Matching WriteMessageForm) */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center flex flex-col items-center border border-white/10 rounded-2xl bg-zinc-950/50 p-8 shadow-2xl backdrop-blur-sm"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">Application Received!</h4>
                  <p className="text-xs md:text-sm text-zinc-400 max-w-md font-medium mb-8 leading-relaxed">
                    Thank you for applying to the Devopstrio Global Engineering Internship Program. Our engineering committee will review your application and reach out via email.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        countryPrefix: "+44",
                        phone: "",
                        college: "",
                        degree: "",
                        gradYear: "",
                        track: "",
                        skills: "",
                        linkedin: "",
                        portfolio: "",
                        newsletter: true,
                      });
                      setFile(null);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/10 cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              ) : (
                /* Form */
                <motion.form
                  key="application-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs md:text-sm font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* 1. Track Interest Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                        Preferred Track <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          name="track"
                          value={formData.track}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white focus:outline-none transition-all appearance-none cursor-pointer font-semibold pr-8"
                        >
                          <option value="" disabled className="bg-zinc-950 text-zinc-500">
                            SELECT TRACK
                          </option>
                          {internshipTracks.map((trk, tIdx) => (
                            <option key={tIdx} value={trk} className="bg-zinc-950 text-white py-2">
                              {trk}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                      </div>
                    </div>

                    <div className="hidden md:block" />
                  </div>

                  {/* 2. Full Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="fullName"
                        placeholder="e.g. Alex Morgan"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        placeholder="alex.morgan@university.edu"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-semibold"
                      />
                    </div>
                  </div>

                  {/* 3. Phone Number & College/University */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="flex items-center gap-2 border-b border-white/30 focus-within:border-rose-500 transition-all">
                        <select
                          name="countryPrefix"
                          value={formData.countryPrefix}
                          onChange={handleInputChange}
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
                          name="phone"
                          placeholder="7700 900077"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-transparent py-3 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-semibold font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                        College / University <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="college"
                        placeholder="e.g. Imperial College London / MIT"
                        value={formData.college}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-semibold"
                      />
                    </div>
                  </div>

                  {/* 4. Degree/Major & Graduation Year */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                        Degree &amp; Major <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="degree"
                        placeholder="e.g. B.Sc. Computer Science / Software Eng"
                        value={formData.degree}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-semibold"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                        Graduation Year <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          name="gradYear"
                          value={formData.gradYear}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white focus:outline-none transition-all appearance-none cursor-pointer font-semibold pr-8"
                        >
                          <option value="" disabled className="bg-zinc-950 text-zinc-500">
                            SELECT GRADUATION YEAR
                          </option>
                          {graduationYears.map((yr, yIdx) => (
                            <option key={yIdx} value={yr} className="bg-zinc-950 text-white py-2">
                              {yr}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* 5. LinkedIn URL & Portfolio/GitHub URL */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                        LinkedIn Profile URL <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="url"
                        required
                        name="linkedin"
                        placeholder="https://linkedin.com/in/alexmorgan"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-semibold font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                        GitHub / Portfolio URL
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        placeholder="https://github.com/alexmorgan"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-semibold font-mono"
                      />
                    </div>
                  </div>

                  {/* 6. Skills & Frameworks */}
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-2">
                      Key Technical Skills &amp; Frameworks <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="skills"
                      placeholder="e.g. React, Next.js, TypeScript, Python, Docker, Kubernetes, AWS, Terraform"
                      value={formData.skills}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-white/30 focus:border-rose-500 py-3 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none transition-all font-semibold"
                    />
                  </div>

                  {/* 7. Resume Upload (Dropzone Style) */}
                  <div className="pt-2">
                    <label className="block text-xs md:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-3">
                      Upload Resume (PDF / DOCX) <span className="text-rose-500">*</span>
                    </label>

                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`w-full rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all duration-300 relative border ${
                        isDragging
                          ? "border-rose-500 bg-rose-950/20 shadow-[0_0_25px_rgba(244,63,94,0.3)]"
                          : file
                          ? "border-rose-500/40 bg-zinc-950/80"
                          : "border-white/20 hover:border-rose-500/60 bg-zinc-950/40 hover:bg-zinc-900/40"
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.docx,.doc"
                        onChange={handleFileChange}
                        className="hidden"
                      />

                      {file ? (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2">
                          <div className="flex items-center gap-3.5 text-left">
                            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500 shrink-0">
                              <FileText size={20} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white tracking-tight">{file.name}</p>
                              <p className="text-xs text-zinc-400 font-mono">{(file.size / (1024 * 1024)).toFixed(2)} MB • Ready for submission</p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setFile(null);
                              if (fileInputRef.current) fileInputRef.current.value = "";
                            }}
                            className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <X size={14} /> Remove File
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-1">
                            <UploadCloud size={24} />
                          </div>
                          <p className="text-sm md:text-base font-semibold text-white">
                            Click or drag your resume here to upload
                          </p>
                          <p className="text-xs text-zinc-400 font-medium">
                            Supported formats: PDF or DOCX (Max size: 5MB)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 8. Checkbox & Privacy Notice (Matching WriteMessageForm) */}
                  <div className="space-y-4 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="mt-0.5 w-4 h-4 rounded border-white/40 bg-transparent text-rose-600 focus:ring-rose-500 focus:ring-offset-0 cursor-pointer"
                      />
                      <span className="text-xs md:text-sm text-zinc-300 group-hover:text-white transition-colors font-semibold">
                        Keep me updated on future engineering internship cohorts, open roles, and tech events at Devopstrio.
                      </span>
                    </label>
                  </div>

                  {/* Privacy Consent Notice */}
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-medium pt-3 border-t border-white/10">
                    The Controller of personal data is Devopstrio Group. The details submitted in this form will be securely audited solely for talent acquisition, technical candidate evaluation, and cohort matching.
                  </p>

                  {/* 9. Submit Button (Matching WriteMessageForm design) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-between gap-4 px-9 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-50 cursor-pointer rounded-lg shadow-lg group"
                    >
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send size={16} className="text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                        </>
                      )}
                    </button>
                  </div>

                </motion.form>
              )}
            </AnimatePresence>

          </div>
        </Reveal>

        {/* Final CTA Footer Section */}
        <Reveal delay={0.2} className="mt-20 border-t border-white/10 pt-16 flex flex-col items-center text-center">
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-3">
            Start Your Technology <span className="text-rose-500">Journey</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl leading-relaxed mb-8 font-medium">
            Join the next generation of engineers, innovators, and technology leaders at Devopstrio. You can also view our full-time{" "}
            <Link href="/careers" className="text-rose-500 hover:underline font-semibold">
              careers
            </Link>{" "}
            page.
          </p>

          <button
            onClick={() => handleScrollToForm()}
            className="inline-flex items-center justify-between gap-3 px-8 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer rounded-lg shadow-lg group"
          >
            <span>Apply for Internship</span>
            <Send size={14} className="text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>
        </Reveal>

      </div>
    </section>
  );
}
