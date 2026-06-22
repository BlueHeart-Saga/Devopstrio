"use client";

import React, { useState, useEffect, useRef } from "react";
import { Plus, Pencil, Trash2, Save, X, FileText } from "lucide-react";

type Announcement = {
  id: number;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  formTitle: string;
  reportType: string;
  coverTitleLine1: string;
  coverTitleLine2: string;
  coverEdition: string;
  coverBrand: string;
  status: string;
};

export default function AnnouncementsAdminPage() {
  const [items, setItems] = useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<Announcement>>({});
  const [isAdding, setIsAdding] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/announcements");
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Failed to fetch announcements", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (item: Announcement) => {
    setEditingId(item.id);
    setFormData(item);
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
      titlePrefix: "The ",
      titleHighlight: "AI Impact",
      titleSuffix: " Imperatives, 2026",
      description: "Explore how organizations are turning AI potential into measurable business impact.",
      formTitle: "Stay ahead with our latest Updates",
      reportType: "RESEARCH REPORT",
      coverTitleLine1: "AI IMPACT",
      coverTitleLine2: "IMPERATIVES",
      coverEdition: "2026 EDITION",
      coverBrand: "Devopstrio",
      status: "active"
    });

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleSave = async () => {
    try {
      if (isAdding) {
        await fetch("/api/announcements", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else if (editingId) {
        await fetch(`/api/announcements/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      await fetchItems();
      handleCancel();
    } catch (err) {
      console.error("Failed to save announcement", err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this announcement?")) return;
    try {
      await fetch(`/api/announcements/${id}`, { method: "DELETE" });
      await fetchItems();
    } catch (err) {
      console.error("Failed to delete announcement", err);
    }
  };

  if (isLoading) {
    return <div className="p-20 text-white min-h-screen bg-[#030303]">Loading admin panel...</div>;
  }

  const renderPreview = () => {
    const isActive = formData.status === "active";
    const p = formData as Announcement;

    return (
      <div className="relative w-full max-w-[200px] aspect-[3/4] rounded-lg border p-5 flex flex-col justify-between shadow-2xl overflow-hidden mx-auto transition-all duration-300 bg-zinc-900 border-zinc-800">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.2),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(220,38,38,0.1),transparent)] [mask-image:linear-gradient(rgba(0,0,0,1),transparent)]" />
        
        <div className="flex justify-between items-start relative z-10">
          <span className="text-[8px] font-mono text-zinc-500 tracking-widest uppercase">{p.reportType || "REPORT TYPE"}</span>
          <FileText size={16} className="text-rose-500" />
        </div>

        <div className="my-auto relative z-10">
          <h3 className="text-sm font-semibold tracking-wider text-white leading-snug">
            {p.coverTitleLine1 || "LINE 1"}<br />
            {p.coverTitleLine2 || "LINE 2"}
          </h3>
          <div className="h-[2px] w-8 bg-rose-600 mt-2" />
        </div>

        <div className="flex justify-between items-center text-[8px] font-mono text-zinc-500 mt-4 relative z-10">
          <span>{p.coverBrand || "Brand"}</span>
          <span className="text-white">{p.coverEdition || "EDITION"}</span>
        </div>
        
        {!isActive && (
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none overflow-hidden bg-black/60">
            <div className="text-xl font-black text-red-600 border-[3px] border-red-600 uppercase -rotate-[20deg] px-4 py-1 tracking-widest">
              INACTIVE
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
            <h1 className="text-3xl font-bold tracking-tight mb-2">Announcements Admin</h1>
            <p className="text-zinc-400">Manage the global announcements banner on the homepage.</p>
          </div>
          {!isAdding && !editingId && (
            <button
              onClick={handleAddNew}
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
            >
              <Plus size={16} /> Add Announcement
            </button>
          )}
        </div>

        {/* Edit / Add Form */}
        {(isAdding || editingId) && (
          <div ref={formRef} className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl mb-12 shadow-2xl scroll-mt-32">
            <h2 className="text-xl font-bold mb-8">{isAdding ? "Create New Announcement" : "Edit Announcement"}</h2>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
              <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="md:col-span-2">
                  <h3 className="text-rose-500 font-bold mb-4 text-sm border-b border-zinc-800 pb-2">Main Copy</h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Title Prefix</label>
                  <input
                    type="text" name="titlePrefix" value={formData.titlePrefix || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Title Highlight (Gradient)</label>
                  <input
                    type="text" name="titleHighlight" value={formData.titleHighlight || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Title Suffix</label>
                  <input
                    type="text" name="titleSuffix" value={formData.titleSuffix || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Status</label>
                  <select
                    name="status" value={formData.status || "active"} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 appearance-none"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Description</label>
                  <input
                    type="text" name="description" value={formData.description || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Form Title</label>
                  <input
                    type="text" name="formTitle" value={formData.formTitle || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div className="md:col-span-2 mt-4">
                  <h3 className="text-rose-500 font-bold mb-4 text-sm border-b border-zinc-800 pb-2">Visual Report Cover details</h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Report Type / Eyebrow</label>
                  <input
                    type="text" name="reportType" value={formData.reportType || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Brand Name</label>
                  <input
                    type="text" name="coverBrand" value={formData.coverBrand || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Cover Title (Line 1)</label>
                  <input
                    type="text" name="coverTitleLine1" value={formData.coverTitleLine1 || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Cover Title (Line 2)</label>
                  <input
                    type="text" name="coverTitleLine2" value={formData.coverTitleLine2 || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Edition / Year</label>
                  <input
                    type="text" name="coverEdition" value={formData.coverEdition || ""} onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div className="md:col-span-2 flex gap-4 mt-8">
                  <button
                    onClick={handleSave}
                    className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-colors"
                  >
                    <Save size={16} /> Save Announcement
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
                <div className="mt-8 text-center text-xs text-zinc-500 max-w-xs">
                  This preview only shows the right-side visual component of the banner. The entire component will be populated automatically based on your active entry.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* List view */}
        <div className="grid grid-cols-1 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded border ${item.status === 'active'
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                      : "bg-zinc-800 text-zinc-500 border-zinc-700"
                    }`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-lg font-bold mb-1">
                      {item.titlePrefix}
                      <span className="text-rose-500">{item.titleHighlight}</span>
                      {item.titleSuffix}
                    </h3>
                    <p className="text-sm text-zinc-400 font-medium">{item.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg font-bold text-xs tracking-wide transition-colors"
                >
                  <Pencil size={14} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-red-950 hover:bg-red-900 text-red-500 border border-red-900/50 px-4 py-2.5 rounded-lg font-bold text-xs tracking-wide transition-colors"
                >
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          ))}

          {items.length === 0 && (
            <div className="text-center py-20 text-zinc-500 font-medium">
              No announcements found. Click 'Add Announcement' to create one.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
