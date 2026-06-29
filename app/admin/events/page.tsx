"use client";

import React, { useState, useEffect, useRef } from "react";
import { Plus, Pencil, Trash2, Save, X, Image as ImageIcon, Upload } from "lucide-react";
import Image from "next/image";

type EventImage = {
  src: string;
  tagname: string;
};

type EventRecord = {
  id: number;
  eventName: string;
  year: string;
  images: EventImage[];
};

const YEARS = ["2027", "2026", "2025", "2024", "2023", "2022"];

export default function EventsAdminPage() {
  const [items, setItems] = useState<EventRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<EventRecord>>({ images: [] });

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
      
      const normalizedData: EventRecord[] = data.map((item: any) => {
        if (item.images) return item;
          let parsedYear = item.year || new Date().toISOString().split('T')[0];
          if (parsedYear.length === 4) {
            parsedYear = `${parsedYear}-01-01`; // Normalize legacy "2024" to a valid date input format
          }
          return {
            id: item.id,
            eventName: item.eventName || item.category || "Untitled Event",
            year: parsedYear,
            images: item.src ? [{ src: item.src, tagname: item.title || "" }] : []
          };
      });
      
      setItems(normalizedData);
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

  const handleImageTagnameChange = (index: number, value: string) => {
    setFormData((prev) => {
      const newImages = [...(prev.images || [])];
      newImages[index] = { ...newImages[index], tagname: value };
      return { ...prev, images: newImages };
    });
  };

  const handleRemoveImage = (index: number) => {
    setFormData((prev) => {
      const newImages = [...(prev.images || [])];
      newImages.splice(index, 1);
      return { ...prev, images: newImages };
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    
    const newUploadedImages: EventImage[] = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const data = new FormData();
      data.append("file", file);

      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: data,
        });
        const result = await res.json();
        if (result.success) {
          newUploadedImages.push({ src: result.url, tagname: "" });
        }
      } catch (err) {
        console.error(err);
      }
    }
    
    setFormData((prev) => ({ 
      ...prev, 
      images: [...(prev.images || []), ...newUploadedImages] 
    }));
    
    setIsUploading(false);
    e.target.value = ''; // Reset file input
  };

  const handleEdit = (item: EventRecord) => {
    setEditingId(item.id);
    setFormData(item);
    setIsAdding(false);

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ images: [] });
    setIsAdding(false);
  };

  const handleAddNew = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      eventName: "",
      year: new Date().toISOString().split('T')[0],
      images: []
    });

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleSave = async () => {
    if (!formData.eventName || !formData.year || !formData.images || formData.images.length === 0) {
      alert("Please fill in the event name, year, and add at least one image.");
      return;
    }

    const payload = {
      eventName: formData.eventName,
      year: formData.year,
      images: formData.images
    };

    try {
      if (isAdding) {
        await fetch("/api/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else if (editingId) {
        await fetch(`/api/events/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      await fetchItems();
      handleCancel();
    } catch (err) {
      console.error("Failed to save event", err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this entire event and all its images?")) return;
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
    const p = formData as EventRecord;
    
    if (!p.images || p.images.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm aspect-video bg-zinc-950 border border-zinc-900 rounded-2xl text-zinc-600">
           <ImageIcon size={48} className="mb-2" />
           <span className="text-xs font-mono uppercase tracking-wider">No Images Uploaded</span>
        </div>
      );
    }

    return (
      <div className="w-full max-w-lg grid grid-cols-2 gap-3">
        {p.images.map((img, idx) => (
          <div key={idx} className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-900 shadow-xl group">
            <Image
              src={img.src}
              alt={img.tagname || "Event Image"}
              fill
              className="object-cover"
              unoptimized={img.src.startsWith("http") || img.src.startsWith("/")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 pointer-events-none" />
            
            <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col justify-end pointer-events-none">
              <span className="text-rose-500 text-[10px] font-bold tracking-widest uppercase mb-1">
                {p.eventName || "Event Name"}
              </span>
              <h4 className="text-white text-sm font-bold tracking-tight">
                {img.tagname || "Image Quote/Tag"}
              </h4>
            </div>
            
            <div className="absolute top-2 right-2 bg-black/50 px-2 py-0.5 rounded text-[10px] font-mono text-zinc-300">
              {p.year || "YEAR"}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Events Admin</h1>
            <p className="text-zinc-400">Manage dynamically named events and their image galleries.</p>
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

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Event Name</label>
                    <input
                      type="text"
                      name="eventName"
                      value={formData.eventName || ""}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500"
                      placeholder="e.g. Innovators Hackathon 2024"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Event Date</label>
                    <input
                      type="date"
                      name="year"
                      value={formData.year || ""}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest">Event Images</label>
                  </div>
                  
                  <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5">
                    <div className="flex items-center gap-4 mb-5 pb-5 border-b border-zinc-800">
                      <label className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase cursor-pointer transition-colors">
                        <Upload size={14} />
                        Upload Images
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                      {isUploading && <span className="text-rose-500 text-sm font-bold animate-pulse flex items-center gap-2"><ImageIcon size={16} className="animate-bounce" /> Uploading...</span>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {formData.images?.map((img, idx) => (
                        <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 flex gap-3 relative group">
                          <div className="relative w-20 h-20 rounded-md overflow-hidden shrink-0 border border-zinc-700">
                            <Image
                              src={img.src}
                              alt="Preview"
                              fill
                              className="object-cover"
                              unoptimized={img.src.startsWith("http") || img.src.startsWith("/")}
                            />
                          </div>
                          <div className="flex flex-col flex-1 gap-2">
                            <input
                              type="text"
                              value={img.tagname}
                              onChange={(e) => handleImageTagnameChange(idx, e.target.value)}
                              className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                              placeholder="Image quote or tagname..."
                            />
                            <button
                              onClick={() => handleRemoveImage(idx)}
                              className="self-end text-[10px] uppercase font-bold tracking-wider text-red-500 hover:text-red-400 transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                      {(!formData.images || formData.images.length === 0) && !isUploading && (
                        <div className="col-span-full py-8 text-center text-zinc-600 text-xs font-bold uppercase tracking-widest">
                          No images added yet.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-2">
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
              <div className="xl:border-l xl:border-zinc-800 xl:pl-12 flex flex-col items-start h-full">
                <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Gallery Preview</span>
                <div className="w-full">
                  {renderPreview()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* List view Grouped by Event */}
        <div className="grid grid-cols-1 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-xl flex flex-col gap-6">
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-800 pb-5">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded border bg-rose-500/10 text-rose-400 border-rose-500/30">
                      {item.year}
                    </span>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{item.images.length} Images</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{item.eventName}</h3>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg font-bold text-xs tracking-wide transition-colors"
                  >
                    <Pencil size={14} /> Edit Event
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex items-center justify-center gap-2 bg-red-950 hover:bg-red-900 text-red-500 border border-red-900/50 px-4 py-2.5 rounded-lg font-bold text-xs tracking-wide transition-colors"
                  >
                    <Trash2 size={14} /> Delete Event
                  </button>
                </div>
              </div>

              {/* Event Images Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {item.images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-zinc-800 group bg-zinc-950">
                    <Image
                      src={img.src}
                      alt={img.tagname || "Event Image"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized={img.src.startsWith("http") || img.src.startsWith("/")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 p-3 pointer-events-none">
                      <p className="text-white text-xs font-semibold leading-tight line-clamp-2">
                        {img.tagname || "No Tag"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

          {items.length === 0 && (
            <div className="text-center py-20 text-zinc-500 font-medium bg-zinc-900/50 border border-zinc-800 rounded-xl">
              No events found. Click 'Add New Event' to create one.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
