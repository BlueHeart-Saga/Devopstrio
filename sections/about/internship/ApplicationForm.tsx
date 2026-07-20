"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, UploadCloud, CheckCircle, Mail, Phone, BookOpen, Cpu, Linkedin, Globe, User } from "lucide-react";
import Link from "next/link";

export const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    degree: "",
    gradYear: "",
    skills: "",
    linkedin: "",
    portfolio: ""
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      if (file) {
        data.append('resume', file);
      }
      
      const response = await fetch('/api/internship', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Failed to submit application. Please check your network and try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during submission.");
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
    <section id="apply-form" className="relative py-24 bg-black overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(225,29,72,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Form Container Card */}
        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-500/35 to-transparent" />
          
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Apply Today
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              Application <span className="text-rose-500">Portal</span>
            </h2>
            <p className="text-zinc-400 mt-2 text-xs sm:text-sm font-bold">
              Fill out the form below to initiate your engineering journey.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                
                {/* 2-Column Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <User size={13} className="text-rose-500" /> Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="bg-zinc-900/60 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors w-full font-medium"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Mail size={13} className="text-rose-500" /> Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-zinc-900/60 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors w-full font-medium"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Phone size={13} className="text-rose-500" /> Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+44 7700 900077"
                      className="bg-zinc-900/60 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors w-full font-medium"
                    />
                  </div>

                  {/* College */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen size={13} className="text-rose-500" /> College / University <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      placeholder="University of Oxford"
                      className="bg-zinc-900/60 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors w-full font-medium"
                    />
                  </div>

                  {/* Degree */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen size={13} className="text-rose-500" /> Degree & Major <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="degree"
                      value={formData.degree}
                      onChange={handleInputChange}
                      placeholder="B.Sc. Computer Science"
                      className="bg-zinc-900/60 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors w-full font-medium"
                    />
                  </div>

                  {/* Graduation Year */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen size={13} className="text-rose-500" /> Graduation Year <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="gradYear"
                      value={formData.gradYear}
                      onChange={handleInputChange}
                      placeholder="2026"
                      className="bg-zinc-900/60 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors w-full font-medium"
                    />
                  </div>

                </div>

                {/* Skills textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu size={13} className="text-rose-500" /> Skills & Frameworks <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    id="skills-input"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="React, Next.js, Node.js, Python, Docker"
                    className="bg-zinc-900/60 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors w-full font-medium"
                  />
                </div>

                {/* Social Profiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* LinkedIn */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Linkedin size={13} className="text-rose-500" /> LinkedIn Profile URL <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/username"
                      className="bg-zinc-900/60 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors w-full font-medium"
                    />
                  </div>

                  {/* Portfolio URL */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Globe size={13} className="text-rose-500" /> Portfolio URL / GitHub URL
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://github.com/username"
                      className="bg-zinc-900/60 border border-zinc-850 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors w-full font-medium"
                    />
                  </div>

                </div>

                {/* Resume Upload Dragzone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Upload Resume (PDF, DOCX) <span className="text-rose-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-zinc-850 hover:border-rose-500/50 bg-zinc-900/20 rounded-2xl p-8 flex flex-col items-center justify-center transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      required
                      accept=".pdf,.docx,.doc"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <UploadCloud size={32} className="text-zinc-600 mb-3" />
                    <span className="text-sm font-bold text-zinc-300">
                      {file ? file.name : "Click or drag resume file to upload"}
                    </span>
                    <span className="text-xs text-zinc-550 mt-1">PDF or Word files up to 5MB</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(244,63,94,0.3)] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Submitting Application..."
                  ) : (
                    <>
                      Submit Application
                      <Send size={14} />
                    </>
                  )}
                </button>

              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/25 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="stroke-[2.5px]" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">Application Received!</h3>
                <p className="text-zinc-400 text-sm max-w-md leading-relaxed font-medium">
                  Thank you for applying to the Devopstrio Global Engineering Internship Program. Our reviewing committee will audit your skills and get in touch via email.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      college: "",
                      degree: "",
                      gradYear: "",
                      skills: "",
                      linkedin: "",
                      portfolio: ""
                    });
                    setFile(null);
                  }}
                  className="mt-8 px-6 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-bold text-zinc-300 rounded-lg transition-colors"
                >
                  Submit another application
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* FINAL CTA SECTION (From screenshot!) */}
        <div className="mt-28 border-t border-zinc-900/60 pt-20 flex flex-col items-center text-center">
          
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
            Start Your Technology <span className="text-rose-500">Journey</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-12 font-bold">
            Join the next generation of engineers, innovators, and technology leaders at Devopstrio. You can also view our full-time <Link href="/careers" className="text-[#E11D48] hover:underline">careers</Link> page.
          </p>

          <button
            onClick={() => handleScrollToForm()}
            className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-bold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(244,63,94,0.3)] flex items-center gap-2 group"
          >
            Apply for Internship
            <Send size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* SIGNATURE SIGN-OFF BLOCK FROM DESIGN SCREENSHOT */}
          <div className="mt-24 pt-8 w-full border-t border-zinc-950 flex flex-col items-center justify-center">
            
            {/* DEVOPSTRIO INTERN Logo Header */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-sm font-extrabold tracking-[0.25em] text-white uppercase font-sans">
                DEVOPSTRIO
              </span>
              <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
              <span className="text-sm font-extrabold tracking-[0.25em] text-rose-500 uppercase font-sans relative">
                INTERN
                {/* underline line */}
                <div className="absolute left-0 bottom-[-6px] w-full h-[1px] bg-zinc-800" />
              </span>
            </div>

            {/* Questions subtext */}
            <p className="text-xs sm:text-sm text-zinc-550 font-medium tracking-wide mb-2">
              Questions? Our engineering team is here.
            </p>

            {/* Email link */}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_INTERNSHIP_EMAIL}`}
              className="text-base sm:text-lg font-bold text-white hover:text-rose-500 transition-colors tracking-tight font-mono"
            >
              internship@devopstrioglobal.com
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
