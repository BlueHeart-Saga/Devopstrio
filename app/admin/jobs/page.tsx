"use client";

import React, { useState, useEffect, useRef } from "react";
import { Plus, Pencil, Trash2, Save, X, MapPin, Briefcase, Clock } from "lucide-react";
import { categories } from "@/sections/careers/careersData";

type JobEntry = {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  desc: string;
  status: string;
};

export default function JobsAdminPage() {
  const [jobs, setJobs] = useState<JobEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<JobEntry>>({});

  const [isAdding, setIsAdding] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    } finally {
      setIsLoading(false);
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

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({});
    setIsAdding(false);
  };

  const handleAddNew = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      title: "",
      category: categories[1], // default to first valid category
      location: "",
      type: "Full-Time",
      experience: "Intermediate (3-5 Years)",
      desc: "",
      status: "active"
    });

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleSave = async () => {
    try {
      if (isAdding) {
        await fetch("/api/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else if (editingId) {
        await fetch(`/api/jobs/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      await fetchJobs();
      handleCancel();
    } catch (err) {
      console.error("Failed to save job", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job posting?")) return;
    try {
      await fetch(`/api/jobs/${id}`, { method: "DELETE" });
      await fetchJobs();
    } catch (err) {
      console.error("Failed to delete job", err);
    }
  };

  if (isLoading) {
    return <div className="p-20 text-white min-h-screen bg-[#030303]">Loading jobs admin...</div>;
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Job Board Admin</h1>
            <p className="text-zinc-400">Manage textual job listings displayed on the public Careers Job Board.</p>
          </div>
          {!isAdding && !editingId && (
            <button
              onClick={handleAddNew}
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#3b82f6] hover:bg-blue-600 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 shrink-0"
            >
              <Plus size={16} /> Post New Job
            </button>
          )}
        </div>

        {/* Edit / Add Form */}
        {(isAdding || editingId) && (
          <div ref={formRef} className="bg-[#0a0a0a] border border-zinc-800 p-8 rounded-2xl mb-12 shadow-2xl scroll-mt-32">
            <h2 className="text-xl font-bold mb-8 text-rose-500">{isAdding ? "Create New Job Listing" : "Edit Job Listing"}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Job Title</label>
                <input
                  type="text" name="title" value={formData.title || ""} onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 font-semibold"
                  placeholder="e.g. Senior Frontend Engineer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Category (Domain)</label>
                <select
                  name="category" value={formData.category || ""} onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 appearance-none font-semibold cursor-pointer"
                >
                  {categories.filter(c => c !== "All").map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Location</label>
                <input
                  type="text" name="location" value={formData.location || ""} onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 font-semibold"
                  placeholder="e.g. New York, US / Remote"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Job Type</label>
                <select
                  name="type" value={formData.type || "Full-Time"} onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 appearance-none font-semibold cursor-pointer"
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Experience Level</label>
                <select
                  name="experience" value={formData.experience || "Intermediate (3-5 Years)"} onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 appearance-none font-semibold cursor-pointer"
                >
                  <option value="Entry Level (0-2 Years)">Entry Level (0-2 Years)</option>
                  <option value="Intermediate (3-5 Years)">Intermediate (3-5 Years)</option>
                  <option value="Expert (8+ Years)">Expert (8+ Years)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Status</label>
                <select
                  name="status" value={formData.status || "active"} onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 appearance-none font-semibold cursor-pointer"
                >
                  <option value="active">Active (Visible)</option>
                  <option value="closed">Closed (Hidden)</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Job Description</label>
                <textarea
                  name="desc" value={formData.desc || ""} onChange={handleInputChange} rows={4}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 font-medium resize-none"
                  placeholder="Short description of the role..."
                />
              </div>

              <div className="md:col-span-2 flex gap-4 mt-4">
                <button
                  onClick={handleSave}
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-colors"
                >
                  <Save size={16} /> Save Job
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-colors"
                >
                  <X size={16} /> Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* List view */}
        <div className="grid grid-cols-1 gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-[#0a0a0a] border border-zinc-800 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-md ${job.status === 'active'
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-red-500/10 text-red-400"
                    }`}>
                    {job.status === 'active' ? 'ACTIVE' : 'CLOSED'}
                  </span>
                  <span className="bg-rose-500/10 text-rose-400 text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                    {job.category}
                  </span>
                  <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                    {job.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white">{job.title}</h3>
                
                <div className="flex items-center gap-4 text-xs font-semibold text-zinc-500">
                  <span className="flex items-center gap-1.5"><MapPin size={12} /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Briefcase size={12} /> {job.experience}</span>
                </div>
              </div>

              <div className="flex gap-2 w-full md:w-auto shrink-0">
                <button
                  onClick={() => handleEdit(job)}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-lg font-bold text-xs tracking-wide transition-colors"
                >
                  <Pencil size={14} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-red-950/40 hover:bg-red-900/60 text-red-500 border border-red-900/50 px-5 py-2.5 rounded-lg font-bold text-xs tracking-wide transition-colors"
                >
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          ))}

          {jobs.length === 0 && (
            <div className="text-center py-20 text-zinc-500 font-medium border border-dashed border-zinc-800 rounded-2xl bg-[#0a0a0a]">
              No jobs found. Click 'Post New Job' to create one.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
