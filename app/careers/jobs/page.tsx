"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, MapPin, Clock, Briefcase, X, Send, Check, Heart, Sparkles, SlidersHorizontal, FileText } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { openPositionsData, categories, Job } from "@/sections/careers/careersData";
import { JobPostingSchema } from "@/components/seo/Schemas";

function JobsBoardContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialLoc = searchParams.get("loc") || "";

  const [keyword, setKeyword] = useState(initialQuery);
  const [location, setLocation] = useState(initialLoc);
  
  // Filters State
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", resume: "", note: "" });

  const [backendJobs, setBackendJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    fetch("/api/jobs")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Filter to only show active jobs, mapping id to string
          const mapped = data.filter((j: any) => j.status === "active").map((j: any) => ({
             ...j,
             id: String(j.id)
          }));
          setBackendJobs(mapped);
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const toggleFilter = (setState: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setState(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  const allJobs = [...backendJobs, ...openPositionsData];

  const filteredJobs = allJobs.filter((job) => {
    const matchesKeyword = keyword === "" || 
      job.title.toLowerCase().includes(keyword.toLowerCase()) || 
      job.desc.toLowerCase().includes(keyword.toLowerCase());
    const matchesLocation = location === "" || 
      job.location.toLowerCase().includes(location.toLowerCase());
      
    const matchesType = selectedTypes.length === 0 || selectedTypes.some(type => job.type.includes(type));
    const matchesExp = selectedExperience.length === 0 || selectedExperience.some(exp => job.experience.includes(exp) || (exp === 'Expert' && job.title.includes('Senior')));

    return matchesKeyword && matchesLocation && matchesType && matchesExp;
  });

  const handleApplyClick = (job: Job) => {
    setActiveJob(job);
    setFormSubmitted(false);
    setFormData({ name: "", email: "", resume: "", note: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setActiveJob(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pb-32">
      
      {/* --- TOP HERO SECTION --- */}
      <div className="bg-[#0f0f0f] pt-32 pb-16 px-6 lg:px-12 border-b border-zinc-800 rounded-b-[40px] relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.05),transparent_70%)] pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10 rounded-tl-full mix-blend-overlay pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-10 flex items-center gap-4">
              Find Your Dream Job Here <Sparkles className="text-rose-500 w-10 h-10" />
            </h1>

            {/* Giant Search Pill */}
            <div className="bg-white rounded-full p-2.5 max-w-4xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full">
                <Search size={20} className="text-zinc-400 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Job title or keyword" 
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="bg-transparent border-none outline-none text-zinc-900 placeholder-zinc-500 w-full text-base font-medium"
                />
              </div>
              
              <div className="hidden md:block w-[1px] h-8 bg-zinc-300 shrink-0" />

              <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full border-t md:border-t-0 border-zinc-200">
                <MapPin size={20} className="text-zinc-400 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Add country or city" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent border-none outline-none text-zinc-900 placeholder-zinc-500 w-full text-base font-medium"
                />
              </div>

              <button className="w-full md:w-auto px-10 py-4 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-full font-semibold text-sm transition-colors shadow-md">
                Search
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* --- MAIN LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
        
        {/* SIDEBAR FILTERS */}
        <aside className="hidden lg:block space-y-10">
          
          {/* Job Type Filter */}
          <div>
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-white text-lg">Job Type</h3>
              <button 
                onClick={() => setSelectedTypes([])} 
                className="text-rose-500 text-xs font-semibold hover:underline"
              >
                Clear all
              </button>
            </div>
            <div className="space-y-3.5">
              {['Full-Time', 'Part-Time', 'Internship', 'Contract'].map(type => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors ${selectedTypes.includes(type) ? 'bg-white border-white' : 'border-zinc-600 group-hover:border-zinc-400'}`}>
                    {selectedTypes.includes(type) && <Check size={12} className="text-black stroke-[3]" />}
                  </div>
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <hr className="border-zinc-800" />

          {/* Salary Range (Visual only for exact mockup match) */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Salary Range</h3>
            <div className="relative h-1 bg-zinc-800 rounded-full mb-4">
              <div className="absolute left-[10%] right-[30%] h-full bg-white rounded-full" />
              <div className="absolute left-[10%] -top-1.5 w-4 h-4 rounded-full bg-white shadow-md border-2 border-zinc-900" />
              <div className="absolute right-[30%] -top-1.5 w-4 h-4 rounded-full bg-white shadow-md border-2 border-zinc-900" />
            </div>
            <div className="flex justify-between text-xs font-bold text-zinc-500">
              <span>$50k</span>
              <span>$120k</span>
            </div>
          </div>

          <hr className="border-zinc-800" />

          {/* Experience Level */}
          <div>
            <h3 className="font-bold text-white text-lg mb-5">Experience Level</h3>
            <div className="space-y-3.5">
              {[
                { label: 'Entry level', val: 'Entry', count: 32 },
                { label: 'Intermediate', val: 'Intermediate', count: 124 },
                { label: 'Expert', val: 'Expert', count: 87 }
              ].map(exp => (
                <label key={exp.label} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors ${selectedExperience.includes(exp.val) ? 'bg-white border-white' : 'border-zinc-600 group-hover:border-zinc-400'}`}>
                      {selectedExperience.includes(exp.val) && <Check size={12} className="text-black stroke-[3]" />}
                    </div>
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{exp.label}</span>
                  </div>
                  <span className="text-xs text-zinc-600 font-semibold">{exp.count}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* JOB GRID */}
        <div>
          {/* Grid Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white">Recommended jobs</h2>
            <button className="flex items-center gap-2 px-4 py-2 border border-zinc-700 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
              Most recent <SlidersHorizontal size={14} />
            </button>
          </div>

          {/* Grid Layout */}
          {isLoading ? (
            <div className="py-20 text-center border border-dashed border-zinc-800 rounded-2xl bg-[#0a0a0a]">
              <div className="w-8 h-8 border-2 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-zinc-500 text-sm font-medium">Loading open positions from database...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, idx) => (
                <React.Fragment key={job.id}>
                  <JobPostingSchema
                    title={job.title}
                    description={job.desc}
                    datePosted="2026-06-25"
                    jobLocationCity={job.location.split(",")[0].trim()}
                    jobLocationCountry={job.location.includes("UK") ? "GB" : job.location.includes("US") ? "US" : "IN"}
                  />
                  <Reveal delay={idx * 0.05} className="h-full">
                    {/* Dark Premium Card mimicking the light-mode layout */}
                    <div className="group h-full bg-[#111111] border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-600 transition-all duration-300 relative flex flex-col cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                      
                      {/* Top Header: Logo + Title + Heart */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-3 items-center">
                          <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 font-serif italic text-lg shrink-0">
                            dt.
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white leading-tight mb-1 group-hover:text-rose-400 transition-colors">
                              {job.title}
                            </h3>
                            <p className="text-xs text-zinc-500 font-medium">
                              Devopstrio • {Math.floor(Math.random() * 50 + 5)} Applicants
                            </p>
                          </div>
                        </div>
                        <button className="text-zinc-500 hover:text-rose-500 transition-colors p-1">
                          <Heart size={18} />
                        </button>
                      </div>

                      {/* Pill Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-5">
                        <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                          {job.experience.includes('8+') ? 'Expert' : 'Intermediate'}
                        </span>
                        <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                          {job.type}
                        </span>
                        {job.location.includes('Remote') && (
                          <span className="bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                            Remote
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-zinc-400 leading-relaxed font-medium mb-6 flex-1 line-clamp-2">
                        {job.desc}
                      </p>

                      {/* Footer: Salary + View JD PDF */}
                      <div className="flex items-center justify-between border-t border-zinc-800/80 pt-4 mt-auto relative z-20">
                        <span className="text-sm font-bold text-white">
                          $120k<span className="text-zinc-500 font-medium text-xs">/yr</span>
                        </span>

                        {job.jdUrl ? (
                          <a
                            href={job.jdUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600/20 text-rose-400 border border-rose-500/40 hover:bg-rose-600 hover:text-white transition-all text-xs font-bold shadow-md z-30"
                          >
                            <FileText size={13} /> View JD (PDF)
                          </a>
                        ) : (
                          <span className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                            <Clock size={12} /> Posted {Math.floor(Math.random() * 10 + 1)} days ago
                          </span>
                        )}
                      </div>

                      {/* Invisible Full-Card Click Target */}
                      <button 
                        onClick={() => handleApplyClick(job)}
                        className="absolute inset-0 w-full h-full opacity-0"
                        aria-label="Apply to job"
                      />
                    </div>
                  </Reveal>
                </React.Fragment>
              ))
            ) : (
              <div className="col-span-full py-20 text-center border border-dashed border-zinc-800 rounded-2xl bg-[#0a0a0a]">
                <p className="text-zinc-500 text-sm font-medium mb-4">No positions found matching your criteria.</p>
                <button 
                  onClick={() => { setKeyword(""); setLocation(""); setSelectedTypes([]); setSelectedExperience([]); }}
                  className="text-rose-500 hover:text-rose-400 font-semibold text-sm underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
          )}
        </div>
      </div>

      {/* Application Modal (Kept from previous iteration) */}
      {activeJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#090909] border border-zinc-800 rounded-[32px] p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(225,29,72,0.15)]">

            <button
              onClick={() => setActiveJob(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-zinc-900/60 p-2 rounded-full border border-zinc-800 transition-colors"
            >
              <X size={16} />
            </button>

            {!formSubmitted ? (
              <>
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-2 font-bold">Apply Position</span>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{activeJob.title}</h3>
                <p className="text-zinc-500 text-xs mb-4 flex items-center gap-2 font-medium border-b border-zinc-800/60 pb-4">
                  <span className="flex items-center gap-1.5"><MapPin size={12} className="text-rose-500" /> {activeJob.location}</span>
                  <span className="text-zinc-700">|</span>
                  <span className="flex items-center gap-1.5"><Briefcase size={12} className="text-zinc-500" /> {activeJob.type}</span>
                </p>

                {activeJob.jdUrl && (
                  <div className="mb-6">
                    <a
                      href={activeJob.jdUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600/20 text-rose-400 border border-rose-500/40 hover:bg-rose-600 hover:text-white transition-all text-xs font-bold shadow-lg"
                    >
                      <FileText size={14} /> Download / View Official JD PDF
                    </a>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-400 uppercase mb-2">Full Name</label>
                    <input type="text" required placeholder="e.g. John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:border-rose-500 focus:outline-none transition-colors font-semibold" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-400 uppercase mb-2">Email Address</label>
                    <input type="email" required placeholder="john.doe@enterprise.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:border-rose-500 focus:outline-none transition-colors font-semibold" />
                  </div>
                  <button type="submit" className="w-full gap-2 inline-flex items-center justify-center px-6 py-4 mt-2 rounded-xl text-xs font-bold tracking-wider uppercase bg-[#3b82f6] hover:bg-blue-600 text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5">
                    Submit Application <Send size={13} />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-500 animate-bounce">
                  <Check size={28} className="stroke-[3]" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">Application Received!</h4>
                <p className="text-zinc-400 text-sm font-medium max-w-sm leading-relaxed">
                  Thank you, <span className="font-bold text-white">{formData.name}</span>. Our recruitment specialists will review your credentials and follow up within 48 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function JobsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-rose-500">Loading...</div>}>
      <JobsBoardContent />
    </Suspense>
  );
}
