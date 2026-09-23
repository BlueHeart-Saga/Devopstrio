"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Search,
  MapPin,
  X,
  Send,
  Check,
  Heart,
  ChevronDown,
  ChevronRight,
  Plus,
  Minus,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  FileText,
  UploadCloud,
  Download
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Job, openPositionsData } from "@/sections/careers/careersData";
import { JobPostingSchema, BreadcrumbSchema } from "@/components/seo/Schemas";

// Master Hierarchical Location Structure
const LOCATION_GROUPS = [
  {
    id: "india",
    country: "India",
    query: "India",
    subLocations: [
      { id: "chennai", name: "Chennai", query: "Chennai" },
      { id: "bangalore", name: "Bengaluru / Bangalore", query: "Bangalore" },
      { id: "tuticorin", name: "Tuticorin / Thoothukudi", query: "Tuticorin" },
      { id: "pasuvanthanai", name: "Pasuvanthanai", query: "Pasuvanthanai" },
      { id: "coimbatore", name: "Coimbatore", query: "Coimbatore" },
    ]
  },
  {
    id: "uk",
    country: "United Kingdom",
    query: "UK",
    subLocations: [
      { id: "london", name: "London (UK Hub)", query: "London" },
      { id: "manchester", name: "Manchester", query: "Manchester" },
      { id: "uk-remote", name: "UK Remote / Hybrid", query: "UK Remote" }
    ]
  },
  {
    id: "us",
    country: "United States",
    query: "US",
    subLocations: [
      { id: "newyork", name: "New York (US Hub)", query: "New York" },
      { id: "sanfrancisco", name: "San Francisco", query: "San Francisco" },
      { id: "us-remote", name: "US Remote", query: "US Remote" }
    ]
  },
  {
    id: "remote",
    country: "Remote",
    query: "Remote",
    subLocations: [
      { id: "worldwide-remote", name: "Worldwide Remote", query: "Remote" }
    ]
  }
];

// Master Departments / Areas of Interest
const DEPARTMENTS_LIST = [
  { id: "ai-data", name: "Artificial Intelligence (AI) & Data Science", query: "AI" },
  { id: "cloud", name: "Cloud & Platform Engineering", query: "Cloud" },
  { id: "devops", name: "DevOps, GitOps & SRE", query: "DevOps" },
  { id: "cybersecurity", name: "Cybersecurity & Zero-Trust", query: "Cybersecurity" },
  { id: "software", name: "Software & Microservices", query: "Software" },
  { id: "consulting", name: "Consulting & Strategy", query: "Consulting" },
  { id: "qa", name: "Quality Engineering & QA", query: "Quality" },
  { id: "sales", name: "Marketing & Communication", query: "Marketing" },
  { id: "ops", name: "Operations & Delivery", query: "Operations" }
];

const ALL_TYPES = ["Full-Time", "Part-Time", "Internship", "Contract", "Hybrid"];
const ALL_EXP = [
  { label: "Entry Level (0-2 Years)", val: "Entry" },
  { label: "Intermediate (3-5 Years)", val: "Mid" },
  { label: "Expert (6+ Years)", val: "Senior" }
];

function JobsBoardContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialLoc = searchParams.get("loc") || "";
  const initialDept = searchParams.get("dept") || "";

  // Search Bar state
  const [keyword, setKeyword] = useState(initialQuery);
  const [searchLocation, setSearchLocation] = useState(initialLoc);

  // Filters state
  const [selectedLocations, setSelectedLocations] = useState<string[]>(initialLoc ? [initialLoc] : []);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>(initialDept ? [initialDept] : []);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedExp, setSelectedExp] = useState<string[]>([]);
  const [locationSearchFilter, setLocationSearchFilter] = useState("");

  // Accordion open/collapse state in sidebar (start collapsed by default)
  const [locationOpen, setLocationOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [expOpen, setExpOpen] = useState(false);

  // Expanded cards set (store job IDs - start collapsed by default)
  const [expandedJobIds, setExpandedJobIds] = useState<string[]>([]);

  // Sorting
  const [sortBy, setSortBy] = useState<"newest" | "title" | "exp">("newest");
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Saved Jobs Bookmarking
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);

  // Apply Modal State
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [uploadingPdf, setUploadingPdf] = useState(false);
  const [pdfFileName, setPdfFileName] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    portfolio: "",
    note: "",
  });

  const [backendJobs, setBackendJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load saved jobs from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("devopstrio_saved_jobs");
      if (saved) {
        setSavedJobIds(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleSaveJob = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedJobIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("devopstrio_saved_jobs", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const toggleCardExpand = (id: string) => {
    setExpandedJobIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const mapped = data
            .filter((j: any) => j.status === "active")
            .map((j: any) => ({
              ...j,
              id: String(j.id || j._id || Math.random()),
              skills: j.skills || j.requiredSkills || "",
              postedAt: j.postedAt || "Recently"
            }));
          setBackendJobs(mapped);
          // Start with all jobs collapsed by default as requested
          setExpandedJobIds([]);
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const toggleLocation = (query: string) => {
    setSelectedLocations((prev) =>
      prev.includes(query) ? prev.filter((l) => l !== query) : [...prev, query]
    );
  };

  const toggleDepartment = (query: string) => {
    setSelectedDepartments((prev) =>
      prev.includes(query) ? prev.filter((d) => d !== query) : [...prev, query]
    );
  };

  const toggleType = (t: string) => {
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((item) => item !== t) : [...prev, t]
    );
  };

  const toggleExp = (e: string) => {
    setSelectedExp((prev) =>
      prev.includes(e) ? prev.filter((item) => item !== e) : [...prev, e]
    );
  };

  const clearAllFilters = () => {
    setKeyword("");
    setSearchLocation("");
    setSelectedLocations([]);
    setSelectedDepartments([]);
    setSelectedTypes([]);
    setSelectedExp([]);
  };

  // Combine backend active jobs with openPositionsData
  const allJobs = useMemo(() => {
    return [...backendJobs, ...openPositionsData];
  }, [backendJobs]);

  // Dynamic Location Counts Calculator
  const locationCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    LOCATION_GROUPS.forEach((group) => {
      // Country total count
      const countryCount = allJobs.filter((j) => {
        const loc = j.location.toLowerCase();
        return (
          loc.includes(group.country.toLowerCase()) ||
          loc.includes(group.query.toLowerCase()) ||
          group.subLocations.some((s) => loc.includes(s.query.toLowerCase()))
        );
      }).length;
      counts[group.id] = countryCount;

      // Sub-location counts
      group.subLocations.forEach((sub) => {
        const subCount = allJobs.filter((j) =>
          j.location.toLowerCase().includes(sub.query.toLowerCase())
        ).length;
        counts[sub.id] = subCount;
      });
    });

    return counts;
  }, [allJobs]);

  // Dynamic Department Counts Calculator
  const departmentCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    DEPARTMENTS_LIST.forEach((dept) => {
      const count = allJobs.filter((j) => {
        const cat = j.category.toLowerCase();
        return (
          cat.includes(dept.query.toLowerCase()) ||
          dept.name.toLowerCase().includes(cat)
        );
      }).length;
      counts[dept.id] = count;
    });

    return counts;
  }, [allJobs]);

  // Filter & Sort Logic (Includes Job ID, Job Number, Title, Skills, Location, Category, and Description)
  const filteredJobs = useMemo(() => {
    return allJobs
      .filter((job) => {
        const jobNum = `DVT-${job.id.slice(-7).toUpperCase()}`;
        const query = keyword.trim().toLowerCase();

        // Keyword & Job ID Search
        const matchesKeyword =
          query === "" ||
          job.id.toLowerCase().includes(query) ||
          jobNum.toLowerCase().includes(query) ||
          job.title.toLowerCase().includes(query) ||
          job.desc.toLowerCase().includes(query) ||
          (job.skills && job.skills.toLowerCase().includes(query)) ||
          job.category.toLowerCase().includes(query) ||
          job.location.toLowerCase().includes(query);

        // Location text from search bar
        const matchesSearchLoc =
          searchLocation.trim() === "" ||
          job.location.toLowerCase().includes(searchLocation.toLowerCase());

        // Location checkbox selection
        const matchesCheckboxLoc =
          selectedLocations.length === 0 ||
          selectedLocations.some((locQuery) =>
            job.location.toLowerCase().includes(locQuery.toLowerCase())
          );

        // Department checkbox selection
        const matchesDepartment =
          selectedDepartments.length === 0 ||
          selectedDepartments.some((deptQuery) =>
            job.category.toLowerCase().includes(deptQuery.toLowerCase()) ||
            deptQuery.toLowerCase().includes(job.category.toLowerCase())
          );

        // Type filter
        const matchesType =
          selectedTypes.length === 0 ||
          selectedTypes.some((t) =>
            job.type.toLowerCase().includes(t.toLowerCase())
          );

        // Experience filter
        const matchesExp =
          selectedExp.length === 0 ||
          selectedExp.some((exp) => {
            if (exp === "Entry") return job.experience.includes("1+") || job.experience.includes("2+") || job.experience.toLowerCase().includes("entry") || job.experience.includes("0-");
            if (exp === "Mid") return job.experience.includes("3+") || job.experience.includes("4+") || job.experience.includes("5+") || job.experience.toLowerCase().includes("mid");
            if (exp === "Senior") return job.experience.includes("6+") || job.experience.includes("7+") || job.experience.includes("8+") || job.title.includes("Senior") || job.title.includes("Lead") || job.title.includes("Principal");
            return true;
          });

        return (
          matchesKeyword &&
          matchesSearchLoc &&
          matchesCheckboxLoc &&
          matchesDepartment &&
          matchesType &&
          matchesExp
        );
      })
      .sort((a, b) => {
        if (sortBy === "title") return a.title.localeCompare(b.title);
        if (sortBy === "exp") return b.experience.localeCompare(a.experience);
        return 0; // Default newest
      });
  }, [allJobs, keyword, searchLocation, selectedLocations, selectedDepartments, selectedTypes, selectedExp, sortBy]);

  const activeFiltersCount =
    (keyword ? 1 : 0) +
    (searchLocation ? 1 : 0) +
    selectedLocations.length +
    selectedDepartments.length +
    selectedTypes.length +
    selectedExp.length;

  const handleApplyClick = (job: Job) => {
    setActiveJob(job);
    setFormSubmitted(false);
    setFormError("");
    setPdfFileName("");
    setFormData({ name: "", email: "", phone: "", resume: "", portfolio: "", note: "" });
  };

  const handleGeneralApply = () => {
    setActiveJob({
      id: "general-talent-pool",
      title: "General Engineering & Architecture Application",
      category: "Global Technology & Strategy",
      location: "India / UK / US / Remote",
      type: "Full-Time / Flexible",
      experience: "All Experience Levels",
      desc: "Submit your credentials to Devopstrio's Talent Network. Our leadership team reviews profiles proactively for upcoming multi-cloud, AI, platform engineering, and cybersecurity engagements.",
      skills: "Cloud Architecture, Kubernetes, DevOps, AI, Python, Full-Stack",
    });
    setFormSubmitted(false);
    setFormError("");
    setPdfFileName("");
    setFormData({ name: "", email: "", phone: "", resume: "", portfolio: "", note: "" });
  };

  // PDF File Upload Handler
  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".pdf") && !file.name.toLowerCase().endsWith(".docx") && !file.name.toLowerCase().endsWith(".doc")) {
      setFormError("Please upload a PDF or DOC resume document.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setFormError("Resume file size must be under 10MB.");
      return;
    }

    setUploadingPdf(true);
    setFormError("");

    try {
      const data = new FormData();
      data.append("file", file);

      const res = await fetch("/api/upload-pdf", {
        method: "POST",
        body: data,
      });

      const json = await res.json();
      if (json.success && json.url) {
        setFormData((prev) => ({ ...prev, resume: json.url }));
        setPdfFileName(file.name);
      } else {
        setFormError(json.error || "Failed to upload resume file.");
      }
    } catch (err: any) {
      setFormError("Error uploading file. Please verify or paste a link.");
    } finally {
      setUploadingPdf(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.name.trim()) {
      setFormError("Full name is required.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setFormError("Valid corporate or personal email is required.");
      return;
    }
    if (!formData.phone.trim()) {
      setFormError("Contact phone number is required.");
      return;
    }
    if (!formData.resume.trim()) {
      setFormError("Please upload your CV/Resume document or provide a link.");
      return;
    }

    setFormSubmitting(true);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        resume: formData.resume.trim(),
        portfolio: formData.portfolio.trim(),
        note: formData.note.trim(),
        jobTitle: activeJob ? activeJob.title : "General Engineering Application",
        location: activeJob?.location || "",
        type: activeJob?.type || "",
        experience: activeJob?.experience || "",
      };

      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormSubmitted(true);
      } else {
        setFormError(data.error || "Failed to submit application. Please verify your details.");
      }
    } catch (err: any) {
      setFormError("Network communication error. Please try again.");
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-rose-600 selection:text-white font-sans antialiased">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Careers", item: "/careers" },
          { name: "Open Positions", item: "/careers/jobs" }
        ]}
      />

      {/* =====================================================
          1. CLEAN HERO SECTION WITH PILL SEARCH BAR
      ===================================================== */}
      <section className="relative pt-32 pb-14 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 flex items-center justify-center gap-2">
              Find your dream job here <span className="text-rose-500">✨</span>
            </h1>

            {/* Pill Search Bar */}
            <div className="bg-white rounded-full p-2 pl-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shadow-[0_15px_40px_rgba(0,0,0,0.8)] max-w-3xl mx-auto">
              {/* Keyword Search */}
              <div className="flex-1 flex items-center gap-3 text-black">
                <Search size={18} className="text-zinc-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Keyword, job title, skill, or Job ID..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="bg-transparent border-none outline-none text-black placeholder-zinc-400 w-full text-sm font-medium"
                />
                {keyword && (
                  <button onClick={() => setKeyword("")} className="text-zinc-400 hover:text-black">
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="hidden sm:block w-[1px] h-6 bg-zinc-200 shrink-0" />

              {/* Location Search */}
              <div className="flex-1 flex items-center gap-2.5 text-black px-2 sm:px-0">
                <MapPin size={18} className="text-zinc-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Add country or city..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="bg-transparent border-none outline-none text-black placeholder-zinc-400 w-full text-sm font-medium"
                />
                {searchLocation && (
                  <button onClick={() => setSearchLocation("")} className="text-zinc-400 hover:text-black">
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  const el = document.getElementById("jobs-results-container");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 rounded-full bg-[#2563eb] hover:bg-blue-600 text-white font-bold text-sm transition-all duration-200 shadow-md shadow-blue-500/30 flex items-center justify-center shrink-0"
              >
                <span>Search</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          2. MAIN CAREERS BOARD (SIDEBAR ACCORDION + JOB CARDS)
      ===================================================== */}
      <main id="jobs-results-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
          
          {/* ===================================================
              LEFT SIDEBAR FILTERS (ACCORDION WITH DYNAMIC COUNTS)
          =================================================== */}
          <aside className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-900">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Clear filters</span>
                  <RotateCcw size={12} />
                </button>
              )}
            </div>

            {/* 1. Location Hierarchy Accordion (India, UK, US, Remote with Indented Sub-hubs) */}
            <div className="border-b border-zinc-900 pb-5">
              <button
                onClick={() => setLocationOpen(!locationOpen)}
                className="w-full flex items-center justify-between text-sm font-bold text-white py-1 cursor-pointer select-none"
              >
                <span>Location</span>
                <span className="text-lg font-mono text-zinc-400">
                  {locationOpen ? "−" : "+"}
                </span>
              </button>

              {locationOpen && (
                <div className="mt-3 space-y-4 animate-in fade-in duration-150">
                  {/* Location search input */}
                  <div className="relative">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="text"
                      placeholder="Search locations"
                      value={locationSearchFilter}
                      onChange={(e) => setLocationSearchFilter(e.target.value)}
                      className="w-full bg-[#121212] border border-zinc-800 rounded-md pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-rose-500"
                    />
                  </div>

                  {/* Hierarchical Group List */}
                  <div className="space-y-3.5 max-h-80 overflow-y-auto pr-1 no-scrollbar pt-1">
                    {LOCATION_GROUPS.map((group) => {
                      const groupCount = locationCounts[group.id] || 0;
                      const isGroupChecked = selectedLocations.includes(group.query);

                      // Filter sub-locations based on search query
                      const matchingSubs = group.subLocations.filter((sub) =>
                        !locationSearchFilter.trim() ||
                        sub.name.toLowerCase().includes(locationSearchFilter.toLowerCase()) ||
                        group.country.toLowerCase().includes(locationSearchFilter.toLowerCase())
                      );

                      if (matchingSubs.length === 0 && locationSearchFilter.trim() && !group.country.toLowerCase().includes(locationSearchFilter.toLowerCase())) {
                        return null;
                      }

                      return (
                        <div key={group.id} className="space-y-1.5">
                          {/* Top Country Row */}
                          <label className="flex items-center justify-between gap-2 text-xs font-bold text-zinc-200 hover:text-white cursor-pointer select-none py-0.5">
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={isGroupChecked}
                                onChange={() => toggleLocation(group.query)}
                                className="w-4 h-4 rounded bg-[#181818] border-zinc-700 text-rose-600 focus:ring-0 cursor-pointer accent-rose-600"
                              />
                              <span>{group.country}</span>
                            </div>
                            <span className="text-[11px] font-mono text-zinc-400">
                              {groupCount}
                            </span>
                          </label>

                          {/* Indented Sub-locations List */}
                          <div className="pl-5 border-l border-zinc-800 ml-2 space-y-1">
                            {matchingSubs.map((sub) => {
                              const isSubChecked = selectedLocations.includes(sub.query);
                              const subCount = locationCounts[sub.id] || 0;

                              return (
                                <label
                                  key={sub.id}
                                  className="flex items-center justify-between gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-200 cursor-pointer select-none py-0.5"
                                >
                                  <div className="flex items-center gap-2">
                                    <input
                                      type="checkbox"
                                      checked={isSubChecked}
                                      onChange={() => toggleLocation(sub.query)}
                                      className="w-3.5 h-3.5 rounded bg-[#181818] border-zinc-700 text-rose-600 focus:ring-0 cursor-pointer accent-rose-600"
                                    />
                                    <span>{sub.name}</span>
                                  </div>
                                  <span className="text-[10px] font-mono text-zinc-500">
                                    {subCount}
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Area of Interest Accordion (with Dynamic Real-Time Counts) */}
            <div className="border-b border-zinc-900 pb-5">
              <button
                onClick={() => setDeptOpen(!deptOpen)}
                className="w-full flex items-center justify-between text-sm font-bold text-white py-1 cursor-pointer select-none"
              >
                <span>Area of Interest</span>
                <span className="text-lg font-mono text-zinc-400">
                  {deptOpen ? "−" : "+"}
                </span>
              </button>

              {deptOpen && (
                <div className="mt-3 space-y-2 max-h-64 overflow-y-auto pr-1 no-scrollbar animate-in fade-in duration-150">
                  {DEPARTMENTS_LIST.map((dept) => {
                    const isChecked = selectedDepartments.includes(dept.query);
                    const count = departmentCounts[dept.id] || 0;

                    return (
                      <label
                        key={dept.id}
                        className="flex items-center justify-between gap-2 text-xs font-medium text-zinc-300 hover:text-white cursor-pointer group select-none py-0.5"
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleDepartment(dept.query)}
                            className="w-4 h-4 rounded bg-[#181818] border-zinc-700 text-rose-600 focus:ring-0 cursor-pointer accent-rose-600"
                          />
                          <span>{dept.name}</span>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400">
                          {count}
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. Job Type Accordion */}
            <div className="border-b border-zinc-900 pb-5">
              <button
                onClick={() => setTypeOpen(!typeOpen)}
                className="w-full flex items-center justify-between text-sm font-bold text-white py-1 cursor-pointer select-none"
              >
                <span>Job Type</span>
                <span className="text-lg font-mono text-zinc-400">
                  {typeOpen ? "−" : "+"}
                </span>
              </button>

              {typeOpen && (
                <div className="mt-3 space-y-2 animate-in fade-in duration-150">
                  {ALL_TYPES.map((type) => {
                    const isChecked = selectedTypes.includes(type);
                    const typeCount = allJobs.filter((j) => j.type.toLowerCase().includes(type.toLowerCase())).length;

                    return (
                      <label
                        key={type}
                        className="flex items-center justify-between gap-2.5 text-xs font-medium text-zinc-300 hover:text-white cursor-pointer select-none py-0.5"
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleType(type)}
                            className="w-4 h-4 rounded bg-[#181818] border-zinc-700 text-rose-600 focus:ring-0 cursor-pointer accent-rose-600"
                          />
                          <span>{type}</span>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-500">
                          {typeCount}
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 4. Experience Level Accordion */}
            <div className="border-b border-zinc-900 pb-5">
              <button
                onClick={() => setExpOpen(!expOpen)}
                className="w-full flex items-center justify-between text-sm font-bold text-white py-1 cursor-pointer select-none"
              >
                <span>Experience Level</span>
                <span className="text-lg font-mono text-zinc-400">
                  {expOpen ? "−" : "+"}
                </span>
              </button>

              {expOpen && (
                <div className="mt-3 space-y-2 animate-in fade-in duration-150">
                  {ALL_EXP.map((exp) => {
                    const isChecked = selectedExp.includes(exp.val);
                    const expCount = allJobs.filter((j) => {
                      if (exp.val === "Entry") return j.experience.includes("1+") || j.experience.includes("2+") || j.experience.toLowerCase().includes("entry") || j.experience.includes("0-");
                      if (exp.val === "Mid") return j.experience.includes("3+") || j.experience.includes("4+") || j.experience.includes("5+") || j.experience.toLowerCase().includes("mid");
                      if (exp.val === "Senior") return j.experience.includes("6+") || j.experience.includes("7+") || j.experience.includes("8+") || j.title.includes("Senior") || j.title.includes("Lead");
                      return true;
                    }).length;

                    return (
                      <label
                        key={exp.val}
                        className="flex items-center justify-between gap-2.5 text-xs font-medium text-zinc-300 hover:text-white cursor-pointer select-none py-0.5"
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleExp(exp.val)}
                            className="w-4 h-4 rounded bg-[#181818] border-zinc-700 text-rose-600 focus:ring-0 cursor-pointer accent-rose-600"
                          />
                          <span>{exp.label}</span>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-500">
                          {expCount}
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          </aside>

          {/* ===================================================
              RIGHT SIDE: RESULTS BAR & ACCORDION JOB CARDS
          =================================================== */}
          <div>
            {/* Results Count & Sort Row */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-900">
              <span className="text-sm font-bold text-white tracking-tight">
                {filteredJobs.length} Results
              </span>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-1 text-xs font-semibold text-zinc-300 hover:text-white cursor-pointer select-none"
                >
                  <span>
                    Sort by {sortBy === "newest" ? "Newest" : sortBy === "title" ? "Title A-Z" : "Experience"}
                  </span>
                  <ChevronDown size={13} className={`text-zinc-400 transition-transform ${isSortOpen ? "rotate-180" : ""}`} />
                </button>

                {isSortOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-[#141414] border border-zinc-800 rounded-xl shadow-2xl p-1 z-40 animate-in fade-in duration-150">
                    <button
                      onClick={() => { setSortBy("newest"); setIsSortOpen(false); }}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium ${sortBy === "newest" ? "bg-rose-600/20 text-rose-400 font-bold" : "text-zinc-300 hover:bg-zinc-800"}`}
                    >
                      Newest
                    </button>
                    <button
                      onClick={() => { setSortBy("title"); setIsSortOpen(false); }}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium ${sortBy === "title" ? "bg-rose-600/20 text-rose-400 font-bold" : "text-zinc-300 hover:bg-zinc-800"}`}
                    >
                      Title A-Z
                    </button>
                    <button
                      onClick={() => { setSortBy("exp"); setIsSortOpen(false); }}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium ${sortBy === "exp" ? "bg-rose-600/20 text-rose-400 font-bold" : "text-zinc-300 hover:bg-zinc-800"}`}
                    >
                      Experience
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Job Listings Cards */}
            {isLoading ? (
              <div className="py-20 text-center bg-[#0d0d0d] rounded-xl">
                <div className="w-6 h-6 border-2 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                <p className="text-zinc-400 text-xs">Loading positions registry...</p>
              </div>
            ) : filteredJobs.length > 0 ? (
              <div className="space-y-4">
                {filteredJobs.map((job) => {
                  const isExpanded = expandedJobIds.includes(job.id);
                  const isSaved = savedJobIds.includes(job.id);

                  return (
                    <div
                      key={job.id}
                      className="bg-[#0e0e0e] hover:bg-[#121212] rounded-xl p-6 transition-all duration-200 border border-zinc-900/60 hover:border-zinc-800"
                    >
                      <JobPostingSchema
                        title={job.title}
                        description={job.desc}
                        datePosted="2026-06-25"
                        jobLocationCity={job.location.split("-").pop()?.trim() || job.location}
                        jobLocationCountry={job.location.includes("UK") ? "GB" : job.location.includes("US") ? "US" : "IN"}
                      />

                      {/* Top Header Row of the Card */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                          <h3
                            onClick={() => toggleCardExpand(job.id)}
                            className="text-lg sm:text-xl font-bold text-white hover:text-rose-400 transition-colors cursor-pointer leading-snug"
                          >
                            {job.title}
                          </h3>

                          {/* Subline: Location | Type | Experience */}
                          <p className="text-xs sm:text-sm font-medium text-zinc-400">
                            {job.location} <span className="text-zinc-600 mx-1">|</span> {job.type} <span className="text-zinc-600 mx-1">|</span> Experience: {job.experience}
                          </p>

                          {/* Required Skill */}
                          <p className="text-xs sm:text-sm font-medium text-zinc-400">
                            Required Skill: <span className="text-zinc-300">{job.skills || "Cloud Architecture, DevOps, CI/CD Pipelines"}</span>
                          </p>
                        </div>

                        {/* Circular Expand/Collapse Button */}
                        <button
                          onClick={() => toggleCardExpand(job.id)}
                          aria-label={isExpanded ? "Collapse job details" : "Expand job details"}
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all active:scale-95 ${
                            isExpanded ? "bg-rose-600 text-white" : "bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800"
                          }`}
                        >
                          {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                        </button>
                      </div>

                      {/* Expanded Section (Accordion Dropdown Content) */}
                      {isExpanded && (
                        <div className="mt-6 pt-5 border-t border-zinc-850 space-y-4 animate-in fade-in duration-200">
                          <div className="space-y-1 text-xs text-zinc-400">
                            <p>
                              <strong className="text-zinc-300">Job:</strong> {job.title}
                            </p>
                            <p>
                              <strong className="text-zinc-300">Job Number:</strong> DVT-{job.id.slice(-7).toUpperCase()}
                            </p>
                            <p>
                              <strong className="text-zinc-300">Posted:</strong> {job.postedAt || "Recently"}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                              Job description
                            </h4>
                            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                              {job.desc}
                            </p>
                          </div>

                          {/* Action Bar: Save & JD Download & Read Full JD / Apply */}
                          <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
                            <button
                              onClick={(e) => toggleSaveJob(job.id, e)}
                              className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors py-1"
                            >
                              <span>Save</span>
                              <Heart
                                size={15}
                                className={isSaved ? "fill-rose-500 text-rose-500" : "text-zinc-400"}
                              />
                            </button>

                            <div className="flex items-center gap-2">
                              {job.jdUrl && (
                                <a
                                  href={job.jdUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-bold transition-colors flex items-center gap-1.5 border border-zinc-800"
                                >
                                  <Download size={13} className="text-rose-400" />
                                  <span>Download JD PDF</span>
                                </a>
                              )}

                              <button
                                onClick={() => handleApplyClick(job)}
                                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 hover:from-red-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md active:scale-95"
                              >
                                <span>Read full job description / Apply</span>
                                <ChevronRight size={13} />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* No Results Card */
              <div className="py-20 text-center bg-[#0e0e0e] rounded-xl p-8">
                <p className="text-zinc-400 text-sm mb-4">No positions found matching your criteria.</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={clearAllFilters}
                    className="text-xs font-bold text-rose-500 hover:underline"
                  >
                    Clear all filters
                  </button>
                  <span className="text-zinc-600">•</span>
                  <button
                    onClick={handleGeneralApply}
                    className="text-xs font-bold text-purple-400 hover:underline"
                  >
                    Submit General Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* =====================================================
          3. CORPORATE APPLICATION MODAL
      ===================================================== */}
      {activeJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#0c0c0c] border border-zinc-700/80 rounded-2xl p-7 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.9)] no-scrollbar">
            {/* Top Gradient Edge */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-rose-500 to-amber-500 rounded-t-2xl" />

            {/* Close Button */}
            <button
              onClick={() => setActiveJob(null)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 p-2 rounded-full border border-zinc-700/60 transition-colors z-10"
              aria-label="Close dialog"
            >
              <X size={16} />
            </button>

            {!formSubmitted ? (
              <>
                {/* Modal Header */}
                <div className="mb-6 pb-5 border-b border-zinc-800">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold tracking-wider uppercase mb-2.5">
                    Official Application
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {activeJob.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-zinc-400 mt-2 flex flex-wrap items-center gap-2">
                    <span>{activeJob.location}</span>
                    <span className="text-zinc-600">|</span>
                    <span>{activeJob.type}</span>
                    <span className="text-zinc-600">|</span>
                    <span>Experience: {activeJob.experience || "Not Specified"}</span>
                  </p>
                  {activeJob.jdUrl && (
                    <a
                      href={activeJob.jdUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 font-semibold mt-3 hover:underline"
                    >
                      <FileText size={13} /> Download / View Official JD PDF
                    </a>
                  )}
                </div>

                {/* Error Banner */}
                {formError && (
                  <div className="mb-5 p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-400 text-xs sm:text-sm flex items-center gap-2.5 font-medium">
                    <AlertCircle size={16} className="shrink-0 text-rose-400" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Application Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#141414] border border-zinc-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all font-medium"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1.5">
                        Corporate / Personal Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex.m@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#141414] border border-zinc-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1.5">
                        Contact Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+44 7911 123456 / +91 98765..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#141414] border border-zinc-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Resume Upload / Link */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-zinc-300 mb-1.5">
                      CV / Resume Document (PDF/DOC) <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-zinc-900/90 border border-dashed border-zinc-750 hover:border-rose-500 rounded-xl cursor-pointer text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                        <UploadCloud size={16} className={uploadingPdf ? "animate-bounce text-rose-400" : "text-zinc-400"} />
                        <span className="truncate">{uploadingPdf ? "Uploading CV..." : pdfFileName || "Upload CV (PDF/DOC)"}</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handlePdfUpload}
                          className="hidden"
                          disabled={uploadingPdf}
                        />
                      </label>

                      <input
                        type="text"
                        placeholder="Or paste Drive/LinkedIn URL"
                        value={formData.resume}
                        onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                        className="flex-1 bg-[#141414] border border-zinc-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none font-medium"
                      />
                    </div>
                    {pdfFileName && (
                      <p className="text-xs text-emerald-400 mt-1.5 flex items-center gap-1.5 font-medium">
                        <CheckCircle2 size={13} /> {pdfFileName} attached successfully
                      </p>
                    )}
                  </div>

                  {/* LinkedIn / Portfolio */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-zinc-400 mb-1.5">
                      LinkedIn / Portfolio URL <span className="text-zinc-600">(Optional)</span>
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="w-full bg-[#141414] border border-zinc-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none font-medium"
                    />
                  </div>

                  {/* Cover Note & Notice Period */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-zinc-400 mb-1.5">
                      Cover Note &amp; Notice Period <span className="text-zinc-600">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Key technical achievements, architectural experience, or notice period..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full bg-[#141414] border border-zinc-800 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none font-medium resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formSubmitting || uploadingPdf}
                    className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 hover:from-red-500 hover:via-rose-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-rose-900/20 flex items-center justify-center gap-2 disabled:opacity-50 active:scale-98"
                  >
                    {formSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-zinc-500 text-center mt-2">
                    Your data is confidential and protected under UK GDPR &amp; ISO 27001 guidelines.
                  </p>
                </form>
              </>
            ) : (
              /* Success confirmation */
              <div className="text-center py-10 flex flex-col items-center justify-center gap-4 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                  <Check size={28} className="stroke-[3]" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Application Submitted Successfully
                </h4>
                <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
                  Thank you, <span className="font-bold text-white">{formData.name}</span>. A confirmation email has been sent to <span className="text-purple-400">{formData.email}</span>. Our talent acquisition team will review your credentials and get back to you shortly.
                </p>
                <button
                  onClick={() => setActiveJob(null)}
                  className="mt-3 px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm font-bold text-zinc-200 transition-colors"
                >
                  Done / Close
                </button>
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
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-purple-500 text-xs font-mono">Loading Devopstrio Careers...</div>}>
      <JobsBoardContent />
    </Suspense>
  );
}
