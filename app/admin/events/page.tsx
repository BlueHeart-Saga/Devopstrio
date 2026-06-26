"use client";

import React, { useState, useEffect, useRef } from "react";
import { Plus, Pencil, Trash2, Save, X, Image as ImageIcon, Upload } from "lucide-react";
import Image from "next/image";

type EventItem = {
  id: number;
  src: string;
  category: string;
  year: string;
  title: string;
};

const CATEGORIES = ["Team Celebrations", "Hackathons", "Learning Sessions", "Community Impact", "Awards"];
const YEARS = ["2027", "2026", "2025", "2024", "2023"];

export default function EventsAdminPage() {
  const [items, setItems] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<EventItem>>({});

  const [isAdding, setIsAdding] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/events");
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Failed to fetch events", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        setFormData((prev) => ({ ...prev, src: result.url }));
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

  const handleEdit = (item: EventItem) => {
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
      title: "",
      category: CATEGORIES[0],
      year: new Date().getFullYear().toString(),
      src: ""
    });

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleSave = async () => {
    if (!formData.title || !formData.category || !formData.year || !formData.src) {
      alert("Please fill in all fields including the image.");
      return;
    }

    try {
      if (isAdding) {
        await fetch("/api/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else if (editingId) {
        await fetch(`/api/events/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      await fetchItems();
      handleCancel();
    } catch (err) {
      console.error("Failed to save event", err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    try {
      await fetch(`/api/events/${id}`, { method: "DELETE" });
      await fetchItems();
    } catch (err) {
      console.error("Failed to delete event", err);
    }
  };

  if (isLoading) {
    return <div className="p-20 text-white min-h-screen bg-[#030303]">Loading admin panel...</div>;
  }

  const renderPreview = () => {
    const p = formData as EventItem;

    return (
      <div className="relative aspect-[16/10] w-full max-w-sm rounded-[2rem] overflow-hidden bg-zinc-950 border border-zinc-900 shadow-2xl transition-all duration-500">
        {/* Year Overlay */}
        <div className="absolute top-4 left-0 right-0 z-20 text-center pointer-events-none select-none">
          <span className="text-3xl font-black tracking-widest text-rose-500/85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {p.year || "YEAR"}
          </span>
        </div>

        {/* Background Image */}
        {p.src ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={p.src}
              alt={p.title || "Preview"}
              fill
              className="object-cover"
              unoptimized={p.src.startsWith("http") || p.src.startsWith("/")}
            />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-zinc-600 bg-zinc-950">
            <ImageIcon size={48} className="mb-2" />
            <span className="text-xs font-mono uppercase tracking-wider">No Image Uploaded</span>
          </div>
        )}

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-10" />

        {/* Hover Details Overlay */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-6 flex flex-col justify-end">
          <span className="text-rose-500 text-xs font-bold tracking-widest uppercase mb-1">
            {p.category || "CATEGORY"}
          </span>
          <h4 className="text-white text-base font-bold tracking-tight">
            {p.title || "Event Title"}
          </h4>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Events Admin</h1>
            <p className="text-zinc-400">Manage the Life Moments Gallery and events hosted by Devopstrio.</p>
          </div>
          {!isAdding && !editingId && (
            <button
              onClick={handleAddNew}
              className="gap-2 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
            >
              <Plus size={16} /> Add New Event
            </button>
          )}
        </div>

        {/* Edit / Add Form */}
        {(isAdding || editingId) && (
          <div ref={formRef} className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl mb-12 shadow-2xl scroll-mt-32">
            <h2 className="text-xl font-bold mb-8">{isAdding ? "Create New Event" : "Edit Event"}</h2>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
              <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Event Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title || ""}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                    placeholder="e.g. Office Inauguration"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category || ""}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Year</label>
                  <select
                    name="year"
                    value={formData.year || ""}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                  >
                    {YEARS.map((yr) => (
                      <option key={yr} value={yr}>
                        {yr}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Event Image</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-2">Upload File</span>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase cursor-pointer transition-colors">
                          <Upload size={14} />
                          Browse File
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                        </label>
                        {isUploading && <span className="text-rose-500 text-sm font-bold animate-pulse">Uploading...</span>}
                      </div>
                    </div>
                    <div>
                      <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-2">Or Paste URL</span>
                      <input
                        type="text"
                        name="src"
                        value={formData.src || ""}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>
                  </div>
                  {formData.src && (
                    <div className="mt-4 relative w-32 h-20 rounded-lg overflow-hidden border border-zinc-800">
                      <Image
                        src={formData.src}
                        alt="Preview"
                        fill
                        className="object-cover"
                        unoptimized={formData.src.startsWith("http") || formData.src.startsWith("/")}
                      />
                      <button
                        onClick={() => setFormData((prev) => ({ ...prev, src: "" }))}
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
                    <Save size={16} /> Save Event
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
          {items.map((item) => (
            <div key={item.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-4">
                {item.src && (
                  <div className="relative w-16 h-12 rounded overflow-hidden border border-zinc-800 flex-shrink-0">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                      unoptimized={item.src.startsWith("http") || item.src.startsWith("/")}
                    />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded border bg-rose-500/10 text-rose-400 border-rose-500/30">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-500">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
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
              No events found. Click 'Add New Event' to create one.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
