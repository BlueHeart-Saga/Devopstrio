"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Save,
  X,
  MapPin,
  Briefcase,
  Clock,
  UploadCloud,
  FileText,
  CheckCircle2,
  Users,
  Search,
  ExternalLink,
  Mail,
  Phone,
  Calendar,
  AlertCircle
} from "lucide-react";

const ADMIN_STANDARD_DEPARTMENTS = [
  "Artificial Intelligence (AI) & Data Science",
  "Cloud & Platform Engineering",
  "DevOps, GitOps & SRE",
  "Cybersecurity & Zero-Trust",
  "Software & Microservices",
  "Consulting & Strategy",
  "Quality Engineering & QA",
  "Marketing & Communication",
  "Operations & Delivery"
];

const ADMIN_STANDARD_LOCATIONS = [
  "India - Chennai",
  "India - Bengaluru / Bangalore",
  "India - Tuticorin / Thoothukudi",
  "India - Pasuvanthanai",
  "India - Coimbatore",
  "United Kingdom - London",
  "United Kingdom - Manchester",
  "United Kingdom - UK Remote / Hybrid",
  "United States - New York",
  "United States - San Francisco",
  "United States - US Remote",
  "Worldwide Remote"
];

type JobEntry = {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  desc: string;
  skills?: string;
  status: string;
  jdUrl?: string;
};

type ApplicationEntry = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  jobTitle: string;
  location?: string;
  type?: string;
  experience?: string;
  resume?: string;
  portfolio?: string;
  note?: string;
  status: string;
  created_at: string;
};

export default function JobsAdminPage() {
  const [activeTab, setActiveTab] = useState<"jobs" | "applications">("jobs");

  // Jobs state
  const [jobs, setJobs] = useState<JobEntry[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<JobEntry>>({});
  const [isAdding, setIsAdding] = useState(false);
  const [uploadingPdf, setUploadingPdf] = useState(false);
  const [uploadMsg, setUploadMsg] = useState("");
  const [jobSearch, setJobSearch] = useState("");

  // Applications state
  const [applications, setApplications] = useState<ApplicationEntry[]>([]);
  const [isLoadingApps, setIsLoadingApps] = useState(false);
  const [appSearch, setAppSearch] = useState("");
  const [selectedApp, setSelectedApp] = useState<ApplicationEntry | null>(null);

  const [notification, setNotification] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchJobs();
    fetchApplications();
  }, []);

  const showNotification = (type: "success" | "error", text: string) => {
    setNotification({ type, text });
    setTimeout(() => setNotification(null), 4000);
  };

  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      if (Array.isArray(data)) {
        setJobs(data);
      }
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    } finally {
      setIsLoadingJobs(false);
    }
  };

  const fetchApplications = async () => {
    setIsLoadingApps(true);
    try {
      const res = await fetch("/api/careers/applications");
      const data = await res.json();
      if (Array.isArray(data)) {
        setApplications(data);
      }
    } catch (err) {
      console.error("Failed to fetch applications", err);
    } finally {
      setIsLoadingApps(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (job: JobEntry) => {
    setEditingId(job.id);
    setFormData(job);
    setIsAdding(false);
    setUploadMsg("");

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({});
    setIsAdding(false);
    setUploadMsg("");
  };

  const handleAddNew = () => {
    setIsAdding(true);
    setEditingId(null);
    setUploadMsg("");
    setFormData({
      title: "",
      category: ADMIN_STANDARD_DEPARTMENTS[0],
      location: ADMIN_STANDARD_LOCATIONS[0],
      type: "Full-Time",
      experience: "Intermediate (3-5 Years)",
      skills: "",
      desc: "",
      status: "active",
      jdUrl: ""
    });

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".pdf")) {
      showNotification("error", "Please select a valid PDF file.");
      return;
    }

    setUploadingPdf(true);
    setUploadMsg("");

    try {
      const data = new FormData();
      data.append("file", file);

      const res = await fetch("/api/upload-pdf", {
        method: "POST",
        body: data,
      });

      const json = await res.json();
      if (res.ok && json.success && json.url) {
        setFormData((prev) => ({ ...prev, jdUrl: json.url }));
        setUploadMsg(`✓ ${file.name} uploaded successfully!`);
        showNotification("success", `JD PDF uploaded successfully: ${file.name}`);
      } else {
        showNotification("error", json.error || "Failed to upload PDF");
      }
    } catch (err: any) {
      showNotification("error", "Network error during PDF upload");
    } finally {
      setUploadingPdf(false);
    }
  };

  const handleSave = async () => {
    if (!formData.title?.trim()) {
      showNotification("error", "Job Title is required");
      return;
    }

    try {
      let res;
      if (isAdding) {
        res = await fetch("/api/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else if (editingId) {
        res = await fetch(`/api/jobs/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      if (res && res.ok) {
        showNotification("success", isAdding ? "Job posted successfully!" : "Job updated successfully!");
        await fetchJobs();
        handleCancel();
      } else {
        const errJson = await res?.json().catch(() => ({}));
        showNotification("error", errJson?.error || "Failed to save job");
      }
    } catch (err) {
      console.error("Failed to save job", err);
      showNotification("error", "Network error while saving job");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job posting?")) return;
    try {
      const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
      if (res.ok) {
        showNotification("success", "Job deleted successfully");
        await fetchJobs();
      } else {
        showNotification("error", "Failed to delete job");
      }
    } catch (err) {
      console.error("Failed to delete job", err);
      showNotification("error", "Network error while deleting job");
    }
  };

  const handleDeleteApp = async (id: string) => {
    if (!confirm("Are you sure you want to remove this application?")) return;
    try {
      const res = await fetch(`/api/careers/applications/${id}`, { method: "DELETE" });
      if (res.ok) {
        showNotification("success", "Application deleted successfully");
        await fetchApplications();
        if (selectedApp?.id === id) setSelectedApp(null);
      } else {
        showNotification("error", "Failed to delete application");
      }
    } catch (err) {
      showNotification("error", "Network error while deleting application");
    }
  };

  const filteredJobs = jobs.filter((j) =>
    (j.title || "").toLowerCase().includes(jobSearch.toLowerCase()) ||
    (j.location || "").toLowerCase().includes(jobSearch.toLowerCase()) ||
    (j.category || "").toLowerCase().includes(jobSearch.toLowerCase())
  );

  const filteredApps = applications.filter((a) =>
    (a.name || "").toLowerCase().includes(appSearch.toLowerCase()) ||
    (a.email || "").toLowerCase().includes(appSearch.toLowerCase()) ||
    (a.jobTitle || "").toLowerCase().includes(appSearch.toLowerCase()) ||
    (a.location || "").toLowerCase().includes(appSearch.toLowerCase())
  );

  if (isLoadingJobs && isLoadingApps) {
    return <div className="p-20 text-white min-h-screen bg-[#030303] flex items-center justify-center font-mono text-purple-400">Loading Devopstrio Admin...</div>;
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-16 px-6 md:px-16 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Notification Toast */}
        {notification && (
          <div
            className={`fixed top-24 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl border flex items-center gap-2.5 text-sm font-semibold animate-in fade-in slide-in-from-top-4 duration-200 ${
              notification.type === "success"
                ? "bg-emerald-950/90 border-emerald-500/50 text-emerald-300 shadow-emerald-950/50"
                : "bg-rose-950/90 border-rose-500/50 text-rose-300 shadow-rose-950/50"
            }`}
          >
            {notification.type === "success" ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
            <span>{notification.text}</span>
          </div>
        )}

        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1.5">Careers &amp; Recruitment Center</h1>
            <p className="text-zinc-400 text-sm">Post enterprise roles, attach official JD PDFs, and review incoming candidate submissions.</p>
          </div>

          {activeTab === "jobs" && !isAdding && !editingId && (
            <button
              onClick={handleAddNew}
              className="gap-2 inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] shrink-0"
            >
              <Plus size={16} /> Post New Job
            </button>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-3 border-b border-zinc-800 mb-8 pb-3">
          <button
            onClick={() => { setActiveTab("jobs"); setSelectedApp(null); }}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === "jobs"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900"
            }`}
          >
            <Briefcase size={16} />
            <span>Job Postings</span>
            <span className="ml-1.5 px-2 py-0.5 text-xs rounded-full bg-black/40 font-mono">
              {jobs.length}
            </span>
          </button>

          <button
            onClick={() => { setActiveTab("applications"); fetchApplications(); }}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === "applications"
                ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900"
            }`}
          >
            <Users size={16} />
            <span>Candidate Applications</span>
            <span className="ml-1.5 px-2 py-0.5 text-xs rounded-full bg-black/40 font-mono">
              {applications.length}
            </span>
          </button>
        </div>

        {/* =========================================================
            TAB 1: JOB POSTINGS REGISTRY
        ========================================================= */}
        {activeTab === "jobs" && (
          <>
            {/* Edit / Add Form */}
            {(isAdding || editingId) && (
              <div ref={formRef} className="bg-[#0a0a0a] border border-zinc-800 p-8 rounded-2xl mb-10 shadow-2xl scroll-mt-32">
                <h2 className="text-xl font-bold mb-6 text-purple-400 flex items-center gap-2">
                  <Briefcase size={20} />
                  <span>{isAdding ? "Create New Job Listing" : "Edit Job Listing"}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Job Title */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                      Job Title <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title || ""}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 font-semibold text-sm"
                      placeholder="e.g. Senior Data Engineer / DevOps Architect"
                    />
                  </div>

                  {/* Area of Interest / Category */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                      Area of Interest / Domain <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="category"
                      value={formData.category || ""}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 appearance-none font-semibold text-sm cursor-pointer"
                    >
                      {ADMIN_STANDARD_DEPARTMENTS.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                      Location (Region / Hub) <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="location"
                      value={formData.location || ""}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 appearance-none font-semibold text-sm cursor-pointer"
                    >
                      {ADMIN_STANDARD_LOCATIONS.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  {/* Job Type */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Job Type</label>
                    <select
                      name="type"
                      value={formData.type || "Full-Time"}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 appearance-none font-semibold text-sm cursor-pointer"
                    >
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Experience Level</label>
                    <select
                      name="experience"
                      value={formData.experience || "Intermediate (3-5 Years)"}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 appearance-none font-semibold text-sm cursor-pointer"
                    >
                      <option value="Entry Level (0-2 Years)">Entry Level (0-2 Years)</option>
                      <option value="Intermediate (3-5 Years)">Intermediate (3-5 Years)</option>
                      <option value="Expert (6+ Years)">Expert (6+ Years)</option>
                    </select>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Status</label>
                    <select
                      name="status"
                      value={formData.status || "active"}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 appearance-none font-semibold text-sm cursor-pointer"
                    >
                      <option value="active">Active (Visible on Careers Page)</option>
                      <option value="closed">Closed (Hidden)</option>
                    </select>
                  </div>

                  {/* Required Skills */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                      Required Skills / Key Tech Stack (Displayed on Card)
                    </label>
                    <input
                      type="text"
                      name="skills"
                      value={formData.skills || ""}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 font-medium text-sm"
                      placeholder="e.g. Data Modeling Techniques, PySpark, Python, AWS"
                    />
                  </div>

                  {/* Official JD PDF Upload & Link */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                      Official JD PDF (Upload or Link)
                    </label>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <label className="w-full sm:w-auto px-5 py-3 bg-zinc-900 border border-dashed border-zinc-700 hover:border-purple-500 rounded-xl cursor-pointer text-xs font-bold text-zinc-300 hover:text-white flex items-center justify-center gap-2 transition-all">
                        <UploadCloud size={16} className={uploadingPdf ? "animate-bounce text-purple-400" : "text-zinc-400"} />
                        <span>{uploadingPdf ? "Uploading PDF..." : "Upload JD PDF"}</span>
                        <input type="file" accept=".pdf" onChange={handlePdfUpload} className="hidden" disabled={uploadingPdf} />
                      </label>

                      <input
                        type="text"
                        name="jdUrl"
                        value={formData.jdUrl || ""}
                        onChange={handleInputChange}
                        className="flex-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 font-medium text-xs"
                        placeholder="or paste URL e.g. /Marketing_and_SEO_Analytics_JD.pdf"
                      />
                    </div>
                    {uploadMsg && (
                      <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1 font-semibold">
                        <CheckCircle2 size={13} /> {uploadMsg}
                      </p>
                    )}
                  </div>

                  {/* Short Job Description */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                      Job Description (Summary for Expanded Card)
                    </label>
                    <textarea
                      name="desc"
                      value={formData.desc || ""}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 font-medium resize-none text-sm"
                      placeholder="Design, develop and maintain enterprise platforms. Ensure data pipeline quality, CI/CD automation, and architecture alignment..."
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t border-zinc-800">
                  <button
                    onClick={handleCancel}
                    className="px-6 py-2.5 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-8 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-purple-600/30 transition-all"
                  >
                    Save Position
                  </button>
                </div>
              </div>
            )}

            {/* Jobs Search & Header */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 mb-4">
              <div className="relative flex-1 max-w-md">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Filter active jobs by title, location, or domain..."
                  value={jobSearch}
                  onChange={(e) => setJobSearch(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 font-medium"
                />
              </div>
              <span className="text-xs font-mono text-zinc-400 self-center">
                Showing {filteredJobs.length} of {jobs.length} positions
              </span>
            </div>

            {/* Existing Jobs Table */}
            <div className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#121212] text-xs font-mono uppercase text-zinc-400 tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Title</th>
                      <th className="px-6 py-4">Area of Interest</th>
                      <th className="px-6 py-4">Location</th>
                      <th className="px-6 py-4">Type</th>
                      <th className="px-6 py-4">JD PDF</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 text-zinc-300">
                    {filteredJobs.map((job) => (
                      <tr key={job.id} className="hover:bg-zinc-900/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-white">
                          {job.title}
                          {job.skills && <span className="block text-xs font-normal text-zinc-500 truncate max-w-xs">{job.skills}</span>}
                        </td>
                        <td className="px-6 py-4 text-xs text-zinc-300">{job.category}</td>
                        <td className="px-6 py-4 text-xs text-zinc-300">{job.location}</td>
                        <td className="px-6 py-4 text-xs font-medium">{job.type}</td>
                        <td className="px-6 py-4">
                          {job.jdUrl ? (
                            <a href={job.jdUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline flex items-center gap-1 text-xs font-semibold">
                              <FileText size={13} /> View JD
                            </a>
                          ) : (
                            <span className="text-zinc-600 text-xs">None</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            job.status === "active" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-zinc-800 text-zinc-400"
                          }`}>
                            {job.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleEdit(job)}
                              className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                              title="Edit Position"
                            >
                              <Pencil size={15} />
                            </button>
                            <button
                              onClick={() => handleDelete(job.id)}
                              className="p-1.5 rounded-lg hover:bg-red-950/40 text-red-400 hover:text-red-300 transition-colors"
                              title="Delete Position"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredJobs.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-6 py-12 text-center text-zinc-500 text-sm font-medium">
                          No jobs found. Click "+ Post New Job" to create a new opening.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* =========================================================
            TAB 2: CANDIDATE APPLICATIONS
        ========================================================= */}
        {activeTab === "applications" && (
          <div>
            {/* Search & Stats */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search by candidate name, email, or applied position..."
                  value={appSearch}
                  onChange={(e) => setAppSearch(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 font-medium"
                />
              </div>
              <button
                onClick={fetchApplications}
                className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-300 transition-colors self-end sm:self-auto"
              >
                Refresh List
              </button>
            </div>

            {/* Applications List */}
            <div className="grid grid-cols-1 gap-4">
              {filteredApps.map((app) => (
                <div
                  key={app.id}
                  className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 transition-all hover:border-zinc-700"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4 pb-4 border-b border-zinc-850">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold">
                          {app.jobTitle}
                        </span>
                        {app.type && (
                          <span className="text-xs text-zinc-500 font-medium">
                            • {app.type}
                          </span>
                        )}
                        {app.experience && (
                          <span className="text-xs text-zinc-500 font-medium">
                            • Exp: {app.experience}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white">{app.name}</h3>
                      {app.location && (
                        <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5">
                          <MapPin size={12} className="text-rose-500" /> {app.location}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                        <Calendar size={13} /> {new Date(app.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <button
                        onClick={() => handleDeleteApp(app.id)}
                        className="p-1.5 rounded-lg hover:bg-red-950/40 text-red-400 hover:text-red-300 transition-colors ml-2"
                        title="Delete Application"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Contact Details & Links */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs mb-4">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Mail size={14} className="text-purple-400 shrink-0" />
                      <a href={`mailto:${app.email}`} className="hover:underline truncate">{app.email}</a>
                    </div>

                    {app.phone && (
                      <div className="flex items-center gap-2 text-zinc-300">
                        <Phone size={14} className="text-emerald-400 shrink-0" />
                        <a href={`tel:${app.phone}`} className="hover:underline">{app.phone}</a>
                      </div>
                    )}

                    {app.resume && (
                      <div className="flex items-center gap-2">
                        <FileText size={14} className="text-rose-400 shrink-0" />
                        <a
                          href={app.resume.startsWith("http") ? app.resume : app.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-rose-400 hover:underline font-bold flex items-center gap-1"
                        >
                          View Resume / CV <ExternalLink size={11} />
                        </a>
                      </div>
                    )}

                    {app.portfolio && (
                      <div className="flex items-center gap-2">
                        <ExternalLink size={14} className="text-cyan-400 shrink-0" />
                        <a
                          href={app.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:underline font-bold"
                        >
                          LinkedIn / Portfolio
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Cover Note */}
                  {app.note && (
                    <div className="mt-3 p-3.5 rounded-xl bg-zinc-950 border border-zinc-850 text-xs text-zinc-300">
                      <span className="font-bold text-zinc-400 block mb-1 uppercase tracking-wider text-[10px]">
                        Cover Note &amp; Notice Period:
                      </span>
                      <p className="whitespace-pre-wrap leading-relaxed">{app.note}</p>
                    </div>
                  )}
                </div>
              ))}

              {filteredApps.length === 0 && (
                <div className="text-center py-20 bg-[#0a0a0a] border border-zinc-800 rounded-2xl text-zinc-500 font-medium">
                  No candidate applications received yet.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

