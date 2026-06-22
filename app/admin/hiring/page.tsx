"use client";

import React, { useState, useEffect, useRef } from "react";
import { Plus, Pencil, Trash2, Save, X, MapPin, Briefcase, CalendarDays } from "lucide-react";

type Poster = {
  id: number;
  role: string;
  location: string;
  type: string;
  status: string;
  req: string;
  accent: string;
  date: string;
  image?: string;
};

const GRADIENT_PRESETS = [
  { label: "Rose", value: "from-rose-500 to-red-600", hex: "bg-gradient-to-br from-rose-500 to-red-600" },
  { label: "Blue", value: "from-blue-500 to-cyan-500", hex: "bg-gradient-to-br from-blue-500 to-cyan-500" },
  { label: "Emerald", value: "from-emerald-500 to-teal-500", hex: "bg-gradient-to-br from-emerald-500 to-teal-500" },
  { label: "Purple", value: "from-purple-500 to-indigo-600", hex: "bg-gradient-to-br from-purple-500 to-indigo-600" },
  { label: "Orange", value: "from-orange-500 to-amber-500", hex: "bg-gradient-to-br from-orange-500 to-amber-500" },
  { label: "Zinc", value: "from-zinc-500 to-zinc-700", hex: "bg-gradient-to-br from-zinc-500 to-zinc-700" },
];

export default function HiringAdminPage() {
  const [posters, setPosters] = useState<Poster[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<Poster>>({});

  const [isAdding, setIsAdding] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
  const formRef = useRef<HTMLDivElement>(null);
  const locationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetchPosters();
  }, []);

  const fetchPosters = async () => {
    try {
      const res = await fetch("/api/hiring-posters");
      const data = await res.json();
      setPosters(data);
    } catch (err) {
      console.error("Failed to fetch posters", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, location: value }));

    if (value.length < 3) {
      setLocationSuggestions([]);
      return;
    }

    if (locationTimeoutRef.current) {
      clearTimeout(locationTimeoutRef.current);
    }

    locationTimeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/location-suggest?q=${encodeURIComponent(value)}`);
        const data = await res.json();

        if (!Array.isArray(data)) return;

        const suggestions = data.map((d: any) => {
          const parts = d.display_name.split(", ");
          return parts.length > 2 ? `${parts[0]}, ${parts[parts.length - 1]}` : d.display_name;
        });
        setLocationSuggestions(suggestions);
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const handleSelectLocation = (loc: string) => {
    setFormData((prev) => ({ ...prev, location: loc }));
    setLocationSuggestions([]);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const data = new FormData();
    data.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setFormData((prev) => ({ ...prev, image: result.url }));
      } else {
        alert("Upload failed");
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const handleEdit = (poster: Poster) => {
    setEditingId(poster.id);
    setFormData(poster);
    setIsAdding(false);

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({});
    setIsAdding(false);
    setLocationSuggestions([]);
  };

  const handleAddNew = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      role: "",
      location: "",
      type: "Full-Time",
      status: "active",
      req: "REQ-",
      accent: "from-rose-500 to-red-600",
      date: "",
      image: ""
    });

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleSave = async () => {
    try {
      if (isAdding) {
        await fetch("/api/hiring-posters", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else if (editingId) {
        await fetch(`/api/hiring-posters/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      await fetchPosters();
      handleCancel();
    } catch (err) {
      console.error("Failed to save poster", err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this poster?")) return;
    try {
      await fetch(`/api/hiring-posters/${id}`, { method: "DELETE" });
      await fetchPosters();
    } catch (err) {
      console.error("Failed to delete poster", err);
    }
  };

  if (isLoading) {
    return <div className="p-20 text-white min-h-screen bg-[#030303]">Loading admin panel...</div>;
  }

  const renderPreview = () => {
    const isActive = formData.status === "active";
    const p = formData as Poster;

    return (
      <div className="relative w-full max-w-sm h-[400px] rounded-xl border p-8 flex flex-col shadow-2xl overflow-hidden mx-auto transition-all duration-300 bg-[#0a0a0a] border-zinc-800">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none" />

        {p.image && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img src={p.image} alt="Preview" className={`w-full h-full object-cover mix-blend-overlay ${isActive ? 'opacity-40' : 'opacity-20 grayscale'}`} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]" />
          </div>
        )}

        {isActive && p.accent && (
          <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${p.accent} opacity-[0.15] blur-3xl rounded-full translate-x-1/2 -translate-y-1/2`} />
        )}

        <div className="flex justify-between items-start mb-8 relative z-10">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500">
              {p.req || "REQ-XXX"}
            </span>
            <span className={`text-[11px] font-bold tracking-[0.25em] uppercase ${isActive ? "text-rose-500" : "text-zinc-600"}`}>
              {isActive ? "We're Hiring" : "Closed"}
            </span>
          </div>
          <div className={`px-2 py-1 text-[10px] font-mono font-bold uppercase rounded border ${isActive ? "bg-rose-500/10 text-rose-400 border-rose-500/30" : "bg-zinc-900 text-zinc-500 border-zinc-800"
            }`}>
            {p.status || "active"}
          </div>
        </div>

        <div className="flex-1 relative z-10">
          <h3 className={`text-3xl font-black uppercase tracking-tight leading-[1.1] mb-8 ${isActive ? "text-white" : "text-zinc-500"}`}>
            {p.role || "Role Title"}
          </h3>
          <div className="flex flex-col gap-3.5">
            <div className={`flex items-center gap-4 text-sm font-bold ${isActive ? "text-zinc-300" : "text-zinc-600"}`}>
              <MapPin size={18} strokeWidth={2.5} className={isActive ? "text-rose-500" : "text-zinc-700"} />
              {p.location || "Location"}
            </div>
            <div className={`flex items-center gap-4 text-sm font-bold ${isActive ? "text-zinc-300" : "text-zinc-600"}`}>
              <Briefcase size={18} strokeWidth={2.5} className={isActive ? "text-rose-500" : "text-zinc-700"} />
              {p.type || "Type"}
            </div>
            <div className={`flex items-center gap-4 text-sm font-bold ${isActive ? "text-zinc-300" : "text-zinc-600"}`}>
              <CalendarDays size={18} strokeWidth={2.5} className={isActive ? "text-rose-500" : "text-zinc-700"} />
              {p.date || "Date"}
            </div>
          </div>
        </div>

        <div className="pt-6 mt-auto border-t border-zinc-800/50 relative z-10">
          <button className={`w-full py-3.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 ${isActive ? "bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.3)]" : "bg-zinc-900 text-zinc-600 border border-zinc-800"
            }`}>
            {isActive ? "Apply Now" : "Position Filled"}
          </button>
        </div>

        {!isActive && (
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none overflow-hidden">
            <div className="text-5xl font-black text-red-600/40 border-[8px] border-red-600/40 uppercase -rotate-[20deg] px-8 py-3 tracking-widest mix-blend-overlay shadow-2xl">
              FILLED
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Hiring Posters Admin</h1>
            <p className="text-zinc-400">Manage your open roles and career posters for the website.</p>
          </div>
          {!isAdding && !editingId && (
            <button
              onClick={handleAddNew}
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
            >
              <Plus size={16} /> Add New Poster
            </button>
          )}
        </div>

        {/* Edit / Add Form */}
        {(isAdding || editingId) && (
          <div ref={formRef} className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl mb-12 shadow-2xl scroll-mt-32">
            <h2 className="text-xl font-bold mb-8">{isAdding ? "Create New Poster" : "Edit Poster"}</h2>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
              <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Role Title</label>
                  <input
                    type="text" name="role" value={formData.role || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                    placeholder="e.g. Senior Backend Engineer"
                  />
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Location</label>
                  <input
                    type="text" name="location" value={formData.location || ""} onChange={handleLocationChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                    placeholder="Search globally..."
                    autoComplete="off"
                  />
                  {locationSuggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-950 border border-zinc-800 rounded-lg shadow-xl z-50 overflow-hidden">
                      {locationSuggestions.map((loc, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleSelectLocation(loc)}
                          className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                        >
                          {loc}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Req Number</label>
                  <input
                    type="text" name="req" value={formData.req || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                    placeholder="e.g. REQ-042"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Status</label>
                  <select
                    name="status" value={formData.status || "active"} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 appearance-none"
                  >
                    <option value="active">Active</option>
                    <option value="expired">Expired (Filled)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Job Type</label>
                  <input
                    type="text" name="type" value={formData.type || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                    placeholder="e.g. Full-Time"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Closing Date</label>
                  <input
                    type="date" name="date" value={formData.date || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 [color-scheme:dark]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Poster Accent Color</label>
                  <div className="flex flex-wrap items-center gap-4">
                    {GRADIENT_PRESETS.map((preset) => (
                      <button
                        key={preset.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, accent: preset.value }))}
                        title={preset.label}
                        className={`w-10 h-10 rounded-full transition-all duration-300 border-[3px] ${preset.hex} ${formData.accent === preset.value ? 'border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'border-zinc-900 hover:scale-105 hover:border-zinc-500'}`}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Custom Classes:</span>
                    <input
                      type="text" name="accent" value={formData.accent || ""} onChange={handleInputChange}
                      className="bg-transparent border-b border-zinc-800 text-xs font-mono text-zinc-400 focus:outline-none focus:border-zinc-500 pb-1 w-64"
                      placeholder="e.g. from-rose-500 to-red-600"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Poster Background Image (Optional)</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="block w-full text-sm text-zinc-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:tracking-widest file:uppercase file:bg-zinc-800 file:text-white hover:file:bg-zinc-700 cursor-pointer"
                    />
                    {isUploading && <span className="text-rose-500 text-sm font-bold animate-pulse">Uploading...</span>}
                  </div>
                  {formData.image && (
                    <div className="mt-4 relative w-32 h-32 rounded-lg overflow-hidden border border-zinc-800">
                      <img src={formData.image} alt="Preview" className="object-cover w-full h-full" />
                      <button
                        onClick={() => setFormData(prev => ({ ...prev, image: "" }))}
                        className="absolute top-1 right-1 bg-black/70 p-1 rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                </div>

                <div className="md:col-span-2 flex gap-4 mt-4">
                  <button
                    onClick={handleSave}
                    className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-colors"
                  >
                    <Save size={16} /> Save Poster
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-colors"
                  >
                    <X size={16} /> Cancel
                  </button>
                </div>
              </div>

              {/* Live Preview */}
              <div className="xl:border-l xl:border-zinc-800 xl:pl-12 flex flex-col items-center">
                <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6 self-start xl:self-center">Live Preview</span>
                {renderPreview()}
              </div>
            </div>
          </div>
        )}

        {/* List view */}
        <div className="grid grid-cols-1 gap-4">
          {posters.map((poster) => (
            <div key={poster.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded border ${poster.status === 'active'
                      ? "bg-rose-500/10 text-rose-400 border-rose-500/30"
                      : "bg-zinc-800 text-zinc-500 border-zinc-700"
                    }`}>
                    {poster.status}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">{poster.req}</span>
                </div>
                <div className="flex items-center gap-4">
                  {poster.image && (
                    <img src={poster.image} alt={poster.role} className="w-12 h-12 rounded object-cover border border-zinc-800" />
                  )}
                  <div>
                    <h3 className="text-xl font-bold mb-1">{poster.role}</h3>
                    <p className="text-sm text-zinc-400 font-medium">{poster.location} • {poster.type} • {poster.date}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <button
                  onClick={() => handleEdit(poster)}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg font-bold text-xs tracking-wide transition-colors"
                >
                  <Pencil size={14} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(poster.id)}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-red-950 hover:bg-red-900 text-red-500 border border-red-900/50 px-4 py-2.5 rounded-lg font-bold text-xs tracking-wide transition-colors"
                >
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          ))}

          {posters.length === 0 && (
            <div className="text-center py-20 text-zinc-500 font-medium">
              No posters found. Click 'Add New Poster' to create one.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
