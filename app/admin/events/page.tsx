"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  Plus, 
  Pencil, 
  Trash2, 
  Save, 
  X, 
  Image as ImageIcon, 
  Upload, 
  GripVertical, 
  Search, 
  Check, 
  AlertCircle,
  Layers,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ExternalLink
} from "lucide-react";
import Image from "next/image";

type EventImage = {
  src: string;
  tagname: string;
};

type EventRecord = {
  id: string;
  eventName: string;
  year: string;
  images: EventImage[];
};

type PreviewModalState = {
  isOpen: boolean;
  images: EventImage[];
  currentIndex: number;
  eventName?: string;
  year?: string;
};

export default function EventsAdminPage() {
  const [items, setItems] = useState<EventRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYearFilter, setSelectedYearFilter] = useState("ALL");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<EventRecord>>({ images: [] });
  const [isAdding, setIsAdding] = useState(false);

  // Uploading state & progress
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ current: number; total: number } | null>(null);
  const [isDragOverDropzone, setIsDragOverDropzone] = useState(false);

  // Drag-and-drop image reordering state
  const [draggedImageIndex, setDraggedImageIndex] = useState<number | null>(null);
  const [dragOverImageIndex, setDragOverImageIndex] = useState<number | null>(null);

  // Quick batch tag input
  const [batchTagInput, setBatchTagInput] = useState("");
  const [showBatchTagModal, setShowBatchTagModal] = useState(false);

  // Image Preview Modal Lightbox
  const [previewModal, setPreviewModal] = useState<PreviewModalState | null>(null);

  // Notification Toast
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Keyboard navigation for preview modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!previewModal?.isOpen) return;

      if (e.key === "Escape") {
        setPreviewModal(null);
      } else if (e.key === "ArrowLeft") {
        setPreviewModal((prev) => {
          if (!prev) return null;
          const nextIndex = (prev.currentIndex - 1 + prev.images.length) % prev.images.length;
          return { ...prev, currentIndex: nextIndex };
        });
      } else if (e.key === "ArrowRight") {
        setPreviewModal((prev) => {
          if (!prev) return null;
          const nextIndex = (prev.currentIndex + 1) % prev.images.length;
          return { ...prev, currentIndex: nextIndex };
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewModal]);

  const openPreview = (images: EventImage[], index: number, eventName?: string, year?: string) => {
    if (!images || images.length === 0) return;
    setPreviewModal({
      isOpen: true,
      images,
      currentIndex: Math.max(0, Math.min(index, images.length - 1)),
      eventName,
      year
    });
  };

  const closePreview = () => {
    setPreviewModal(null);
  };

  const handleNextPreview = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!previewModal) return;
    setPreviewModal({
      ...previewModal,
      currentIndex: (previewModal.currentIndex + 1) % previewModal.images.length
    });
  };

  const handlePrevPreview = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!previewModal) return;
    setPreviewModal({
      ...previewModal,
      currentIndex: (previewModal.currentIndex - 1 + previewModal.images.length) % previewModal.images.length
    });
  };

  const fetchItems = async () => {
    try {
      const res = await fetch(`/api/events?t=${Date.now()}`);
      if (!res.ok) {
        console.error("Server returned error status:", res.status);
        showToast("Failed to fetch events list from server", "error");
        return;
      }
      const data = await res.json();
      const list = Array.isArray(data) ? data : (data?.events || data?.data || []);
      
      const normalizedData: EventRecord[] = list.map((item: any) => {
        const id = String(item.id || item._id || "");
        if (item.images) return { ...item, id };
        let parsedYear = item.year || new Date().toISOString().split('T')[0];
        if (parsedYear.length === 4) {
          parsedYear = `${parsedYear}-01-01`;
        }
        return {
          id,
          eventName: item.eventName || item.category || "Untitled Event",
          year: parsedYear,
          images: item.src ? [{ src: item.src, tagname: item.title || "" }] : []
        };
      });
      
      setItems(normalizedData);
    } catch (err) {
      console.error("Failed to fetch events", err);
      showToast("Error connecting to server database", "error");
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

  // Reorder Images: Move Left / Right
  const handleMoveImage = (index: number, direction: "left" | "right") => {
    setFormData((prev) => {
      const images = [...(prev.images || [])];
      const targetIndex = direction === "left" ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= images.length) return prev;

      const temp = images[index];
      images[index] = images[targetIndex];
      images[targetIndex] = temp;

      return { ...prev, images };
    });
  };

  // Drag & drop reordering handlers
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedImageIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (dragOverImageIndex !== index) {
      setDragOverImageIndex(index);
    }
  };

  const handleDragEnd = () => {
    if (draggedImageIndex !== null && dragOverImageIndex !== null && draggedImageIndex !== dragOverImageIndex) {
      setFormData((prev) => {
        const images = [...(prev.images || [])];
        const [movedItem] = images.splice(draggedImageIndex, 1);
        images.splice(dragOverImageIndex, 0, movedItem);
        return { ...prev, images };
      });
    }
    setDraggedImageIndex(null);
    setDragOverImageIndex(null);
  };

  // Upload multiple / high-resolution files (parallel processing)
  const processFilesUpload = async (files: FileList | File[]) => {
    if (!files || files.length === 0) return;

    const validFiles = Array.from(files).filter((file) => 
      file.type.startsWith("image/") || ["jpg", "jpeg", "png", "webp", "avif", "svg"].some(ext => file.name.toLowerCase().endsWith(ext))
    );

    if (validFiles.length === 0) {
      showToast("Please select valid image files (JPG, PNG, WEBP, AVIF, SVG)", "error");
      return;
    }

    setIsUploading(true);
    setUploadProgress({ current: 0, total: validFiles.length });

    const newUploadedImages: EventImage[] = [];
    let completedCount = 0;

    const batchSize = 4;
    for (let i = 0; i < validFiles.length; i += batchSize) {
      const chunk = validFiles.slice(i, i + batchSize);
      
      await Promise.all(
        chunk.map(async (file) => {
          const uploadData = new FormData();
          uploadData.append("file", file);

          try {
            const res = await fetch("/api/upload", {
              method: "POST",
              body: uploadData,
            });
            const result = await res.json();
            if (result.success && result.url) {
              newUploadedImages.push({
                src: result.url,
                tagname: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")
              });
            } else {
              console.error("Upload error for file:", file.name, result.error);
            }
          } catch (err) {
            console.error("Network upload failure for file:", file.name, err);
          } finally {
            completedCount++;
            setUploadProgress({ current: completedCount, total: validFiles.length });
          }
        })
      );
    }

    if (newUploadedImages.length > 0) {
      setFormData((prev) => ({
        ...prev,
        images: [...(prev.images || []), ...newUploadedImages]
      }));
      showToast(`Successfully uploaded ${newUploadedImages.length} image(s)!`);
    } else {
      showToast("Failed to upload images. Please check your connection.", "error");
    }

    setIsUploading(false);
    setUploadProgress(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Dropzone file drop handler
  const handleDropzoneDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOverDropzone(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFilesUpload(e.dataTransfer.files);
    }
  };

  const handleApplyBatchTag = () => {
    if (!batchTagInput.trim()) return;
    setFormData((prev) => ({
      ...prev,
      images: (prev.images || []).map((img) => ({
        ...img,
        tagname: batchTagInput.trim()
      }))
    }));
    setShowBatchTagModal(false);
    setBatchTagInput("");
    showToast("Batch tag applied to all images!");
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
      showToast("Please fill in event name, date, and add at least one image.", "error");
      return;
    }

    const payload = {
      eventName: formData.eventName.trim(),
      year: formData.year,
      images: formData.images
    };

    try {
      let res;
      if (isAdding) {
        res = await fetch("/api/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else if (editingId) {
        res = await fetch(`/api/events/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (res && res.ok) {
        showToast(isAdding ? "Event created successfully!" : "Event updated successfully!");
        await fetchItems();
        handleCancel();
      } else {
        showToast("Failed to save event.", "error");
      }
    } catch (err) {
      console.error("Failed to save event", err);
      showToast("Network error while saving event.", "error");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this entire event and all its images?")) return;
    try {
      const res = await fetch(`/api/events/${id}`, { method: "DELETE" });
      if (res.ok) {
        showToast("Event deleted successfully.");
        await fetchItems();
      } else {
        showToast("Failed to delete event.", "error");
      }
    } catch (err) {
      console.error("Failed to delete event", err);
      showToast("Error deleting event.", "error");
    }
  };

  // Filter items
  const availableYears = Array.from(new Set(items.map(item => item.year.slice(0, 4)))).sort().reverse();
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.images.some(img => img.tagname.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesYear = selectedYearFilter === "ALL" || item.year.startsWith(selectedYearFilter);
    return matchesSearch && matchesYear;
  });

  const activePreviewImage = previewModal ? previewModal.images[previewModal.currentIndex] : null;

  if (isLoading) {
    return (
      <div className="p-20 text-white min-h-screen bg-[#030303] flex flex-col items-center justify-center gap-4 font-sans">
        <div className="w-12 h-12 border-3 border-rose-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-zinc-300 font-sans text-sm font-semibold tracking-wider">Loading Event Management System...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-28 pb-20 px-6 sm:px-10 lg:px-16 font-sans selection:bg-rose-500 selection:text-white">
      
      {/* ── IMAGE PREVIEW LIGHTBOX MODAL ── */}
      {previewModal && activePreviewImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={closePreview}
        >
          {/* Modal Close Button */}
          <button
            onClick={closePreview}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 flex items-center justify-center transition-all cursor-pointer shadow-2xl"
            title="Close Preview (Esc)"
          >
            <X size={24} />
          </button>

          {/* Modal Header details */}
          <div 
            className="absolute top-6 left-6 z-40 flex items-center gap-3 bg-zinc-950/80 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {previewModal.year && (
              <span className="px-2.5 py-0.5 rounded-lg bg-rose-500/20 text-rose-400 font-bold text-xs">
                {previewModal.year.slice(0, 4)}
              </span>
            )}
            <h3 className="text-base sm:text-lg font-bold text-white max-w-sm truncate">
              {previewModal.eventName || "Event Photo"}
            </h3>
            <span className="text-xs text-zinc-400 font-medium">
              ({previewModal.currentIndex + 1} of {previewModal.images.length})
            </span>
          </div>

          {/* Left Arrow Button */}
          {previewModal.images.length > 1 && (
            <button
              onClick={handlePrevPreview}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-zinc-950/80 hover:bg-rose-600 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xl group"
              title="Previous Photo (←)"
            >
              <ChevronLeft size={30} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Center Image Container */}
          <div 
            className="relative max-w-5xl max-h-[82vh] w-full h-full flex flex-col items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-h-[74vh] flex items-center justify-center">
              <img
                src={activePreviewImage.src}
                alt={activePreviewImage.tagname || "Full Resolution Preview"}
                className="max-h-full max-w-full object-contain rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.9)] animate-in zoom-in-95 duration-200"
              />
            </div>

            {/* Caption bar below image */}
            <div className="mt-4 flex items-center justify-between w-full max-w-3xl bg-zinc-950/90 backdrop-blur-md px-6 py-3.5 rounded-2xl shadow-xl gap-4">
              <div className="flex-1">
                <p className="text-base font-semibold text-white leading-snug">
                  {activePreviewImage.tagname || "No caption provided"}
                </p>
                <p className="text-xs text-zinc-400 truncate mt-0.5">
                  {activePreviewImage.src}
                </p>
              </div>

              <a
                href={activePreviewImage.src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-bold uppercase tracking-wider text-rose-400 hover:text-rose-300 transition-colors shrink-0"
              >
                <ExternalLink size={14} /> Open Original
              </a>
            </div>
          </div>

          {/* Right Arrow Button */}
          {previewModal.images.length > 1 && (
            <button
              onClick={handleNextPreview}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-zinc-950/80 hover:bg-rose-600 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-2xl group"
              title="Next Photo (→)"
            >
              <ChevronRight size={30} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl text-base font-semibold ${
            toastMessage.type === "success" 
              ? "bg-emerald-950 text-emerald-200 shadow-[0_10px_30px_rgba(16,185,129,0.3)]"
              : "bg-rose-950 text-rose-200 shadow-[0_10px_30px_rgba(244,63,94,0.3)]"
          }`}>
            {toastMessage.type === "success" ? <Check size={20} /> : <AlertCircle size={20} />}
            <span>{toastMessage.text}</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-12">

        {/* Top Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6">
          <div className="space-y-2">
            {/* <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-rose-400 font-sans">
                Devopstrio Admin
              </span>
            </div> */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans">
              Events &amp; Media Gallery
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg font-normal font-sans">
              Upload full-resolution photos, adjust display order, and click any photo to inspect in full preview.
            </p>
          </div>

          {!isAdding && !editingId && (
            <button
              onClick={handleAddNew}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold tracking-wide uppercase bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 hover:from-red-500 hover:to-rose-400 text-white shadow-[0_0_30px_rgba(225,29,72,0.3)] hover:shadow-[0_0_40px_rgba(225,29,72,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer font-sans"
            >
              <Plus size={20} /> Add New Event
            </button>
          )}
        </div>

        {/* ── CREATE / EDIT FORM (Borderless Dark Card) ── */}
        {(isAdding || editingId) && (
          <div ref={formRef} className="bg-[#0A0B0E] p-6 sm:p-10 rounded-3xl shadow-2xl scroll-mt-32 relative">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                  {isAdding ? <Plus size={24} /> : <Pencil size={22} />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight font-sans">
                    {isAdding ? "Create New Event" : "Edit Event Gallery"}
                  </h2>
                  <p className="text-sm text-zinc-400 font-sans mt-0.5">Add event details, drop multiple photos, and reorder.</p>
                </div>
              </div>

              <button
                onClick={handleCancel}
                className="w-11 h-11 rounded-2xl bg-zinc-900 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
              
              {/* Left Column: Form Fields & Drag-and-Drop Image Manager */}
              <div className="xl:col-span-7 space-y-8">
                
                {/* Event Name & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="block text-sm font-bold text-zinc-300 uppercase tracking-wide font-sans">
                      Event Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="eventName"
                      value={formData.eventName || ""}
                      onChange={handleInputChange}
                      className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl px-5 py-4 text-white text-base font-medium focus:outline-none transition-all placeholder:text-zinc-600 font-sans"
                      placeholder="e.g. AI Innovation Summit 2026"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <label className="block text-sm font-bold text-zinc-300 uppercase tracking-wide font-sans">
                      Event Date <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="year"
                      value={formData.year || ""}
                      onChange={handleInputChange}
                      className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl px-5 py-4 text-white text-base font-medium focus:outline-none transition-all font-sans [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* ── DRAG & DROP UPLOAD ZONE ── */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-bold text-zinc-300 uppercase tracking-wide font-sans">
                      Upload High-Resolution Photos
                    </label>
                    <span className="text-xs text-zinc-400 font-medium font-sans">Supports Multi-select &amp; Full Quality</span>
                  </div>

                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragOverDropzone(true);
                    }}
                    onDragLeave={() => setIsDragOverDropzone(false)}
                    onDrop={handleDropzoneDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative w-full rounded-3xl p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 group ${
                      isDragOverDropzone 
                        ? "bg-rose-950/40 ring-2 ring-rose-500 scale-[1.01]" 
                        : "bg-[#040507] hover:bg-[#07090d]"
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          processFilesUpload(e.target.files);
                        }
                      }}
                      className="hidden"
                    />

                    {isUploading ? (
                      <div className="flex flex-col items-center gap-4 py-4">
                        <div className="w-14 h-14 rounded-full border-4 border-rose-500 border-t-transparent animate-spin flex items-center justify-center">
                          <Upload size={22} className="text-rose-500 animate-pulse" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-lg font-bold text-white font-sans">
                            Uploading High-Res Images ({uploadProgress?.current || 0} / {uploadProgress?.total || 0})
                          </p>
                          <p className="text-sm text-zinc-400 font-sans">Processing media storage...</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-4 py-2">
                        <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-rose-500 transition-colors">
                          <Upload size={28} />
                        </div>
                        <div>
                          <p className="text-base sm:text-lg font-bold text-white group-hover:text-rose-400 transition-colors font-sans">
                            Drag &amp; drop multiple photos here, or <span className="underline underline-offset-4 text-rose-500">browse files</span>
                          </p>
                          <p className="text-sm text-zinc-400 mt-1 font-sans">
                            JPG, PNG, WEBP, AVIF, SVG. Upload full-resolution DSLR / Event photography.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* ── REORDERABLE IMAGE LIST ── */}
                <div className="space-y-5 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Layers size={20} className="text-rose-500" />
                      <span className="text-sm font-bold text-zinc-200 uppercase tracking-wide font-sans">
                        Gallery Images ({formData.images?.length || 0})
                      </span>
                    </div>

                    {formData.images && formData.images.length > 0 && (
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setShowBatchTagModal(true)}
                          className="text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors underline underline-offset-4 cursor-pointer font-sans"
                        >
                          Batch Set Tag
                        </button>
                        <span className="text-xs text-zinc-400 font-medium font-sans">Drag or use ◀ ▶ to reorder</span>
                      </div>
                    )}
                  </div>

                  {/* Batch Tag Input Modal */}
                  {showBatchTagModal && (
                    <div className="bg-[#030303] p-5 rounded-2xl flex items-center gap-3 animate-in fade-in">
                      <input
                        type="text"
                        value={batchTagInput}
                        onChange={(e) => setBatchTagInput(e.target.value)}
                        placeholder="Type tag/quote to apply to all images..."
                        className="flex-1 bg-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-rose-500 font-sans"
                      />
                      <button
                        type="button"
                        onClick={handleApplyBatchTag}
                        className="px-5 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer font-sans"
                      >
                        Apply All
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowBatchTagModal(false)}
                        className="px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer font-sans"
                      >
                        Cancel
                      </button>
                    </div>
                  )}

                  {/* Image Grid with Drag-and-Drop Reordering */}
                  <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-1">
                    {formData.images?.map((img, idx) => (
                      <div
                        key={idx}
                        draggable
                        onDragStart={(e) => handleDragStart(e, idx)}
                        onDragOver={(e) => handleDragOver(e, idx)}
                        onDragEnd={handleDragEnd}
                        className={`bg-[#040507] rounded-2xl p-4 flex items-center gap-4 transition-all duration-200 ${
                          draggedImageIndex === idx 
                            ? "opacity-40 ring-2 ring-rose-500 scale-95" 
                            : dragOverImageIndex === idx 
                            ? "bg-rose-950/30 ring-2 ring-rose-500 translate-y-1" 
                            : "hover:bg-[#07090d]"
                        }`}
                      >
                        {/* Drag Handle & Order Badge */}
                        <div className="flex items-center gap-2 cursor-grab active:cursor-grabbing text-zinc-500 hover:text-zinc-200">
                          <GripVertical size={20} />
                          <span className="w-8 h-8 rounded-xl bg-zinc-900 text-xs font-bold text-zinc-300 flex items-center justify-center select-none font-sans">
                            #{idx + 1}
                          </span>
                        </div>

                        {/* Thumbnail (Click to open full modal preview) */}
                        <div 
                          onClick={() => openPreview(formData.images as EventImage[], idx, formData.eventName, formData.year)}
                          className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-zinc-900 shadow-inner cursor-zoom-in group/thumb"
                          title="Click to preview full image"
                        >
                          <Image
                            src={img.src}
                            alt="Uploaded Event Photo"
                            fill
                            className="object-cover select-none group-hover/thumb:scale-110 transition-transform duration-300"
                            unoptimized={img.src.startsWith("http") || img.src.startsWith("/")}
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity">
                            <Maximize2 size={16} className="text-white" />
                          </div>
                        </div>

                        {/* Tag/Quote Input */}
                        <div className="flex-1 flex flex-col gap-1.5">
                          <input
                            type="text"
                            value={img.tagname}
                            onChange={(e) => handleImageTagnameChange(idx, e.target.value)}
                            className="w-full bg-zinc-900 focus:ring-2 focus:ring-rose-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-all font-sans placeholder:text-zinc-600"
                            placeholder="Image caption / speaker tag / title..."
                          />
                          <span className="text-xs text-zinc-500 truncate max-w-xs font-sans">
                            {img.src.split("/").pop()}
                          </span>
                        </div>

                        {/* Reorder Buttons & Remove Action */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            disabled={idx === 0}
                            onClick={() => handleMoveImage(idx, "left")}
                            className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300 flex items-center justify-center transition-colors cursor-pointer"
                            title="Move Up / Left"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          
                          <button
                            type="button"
                            disabled={idx === (formData.images?.length || 0) - 1}
                            onClick={() => handleMoveImage(idx, "right")}
                            className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-300 flex items-center justify-center transition-colors cursor-pointer"
                            title="Move Down / Right"
                          >
                            <ChevronRight size={18} />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleRemoveImage(idx)}
                            className="w-9 h-9 rounded-xl bg-rose-950/40 hover:bg-rose-900 text-rose-400 flex items-center justify-center transition-colors cursor-pointer ml-1"
                            title="Remove Photo"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}

                    {(!formData.images || formData.images.length === 0) && !isUploading && (
                      <div className="py-14 text-center text-zinc-500 text-sm font-semibold uppercase tracking-wider bg-[#040507] rounded-2xl font-sans">
                        No photos added yet. Drag and drop images above.
                      </div>
                    )}
                  </div>
                </div>

                {/* Save / Cancel Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  <button
                    onClick={handleSave}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-9 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] active:scale-95 cursor-pointer font-sans"
                  >
                    <Save size={18} /> Save Event
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-7 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer font-sans"
                  >
                    <X size={18} /> Cancel
                  </button>
                </div>

              </div>

              {/* Right Column: Live Gallery Visualizer Preview */}
              <div className="xl:col-span-5 flex flex-col space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-zinc-300 uppercase tracking-wide font-sans">
                    Live Gallery Preview
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full font-sans">
                    Click photo to open full model
                  </span>
                </div>

                <div className="w-full bg-[#030303] rounded-3xl p-6 shadow-inner">
                  {/* Event Heading Preview */}
                  <div className="mb-5 pb-4 border-b border-zinc-900 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block font-sans">
                        {formData.year ? formData.year.slice(0, 4) : "2026"} EVENT
                      </span>
                      <h4 className="text-lg font-bold text-white truncate max-w-[240px] font-sans">
                        {formData.eventName || "Your Event Name Here"}
                      </h4>
                    </div>
                    <span className="text-sm text-zinc-400 font-semibold font-sans">{formData.images?.length || 0} Photos</span>
                  </div>

                  {/* Grid Images Preview */}
                  {formData.images && formData.images.length > 0 ? (
                    <div className="grid grid-cols-2 gap-3.5 max-h-[480px] overflow-y-auto pr-1">
                      {formData.images.map((img, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => openPreview(formData.images as EventImage[], idx, formData.eventName, formData.year)}
                          className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-950 shadow-md group cursor-pointer"
                          title="Click to view full preview"
                        >
                          <Image
                            src={img.src}
                            alt={img.tagname || "Event Image"}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            unoptimized={img.src.startsWith("http") || img.src.startsWith("/")}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                          
                          {/* Order index pill */}
                          <div className="absolute top-2.5 left-2.5 bg-black/80 px-2.5 py-1 rounded-lg text-xs font-bold text-white font-sans">
                            #{idx + 1}
                          </div>

                          {/* Zoom icon on hover */}
                          <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 size={13} className="text-white" />
                          </div>

                          {/* Tag quote */}
                          <div className="absolute inset-x-0 bottom-0 p-3.5 pointer-events-none">
                            <p className="text-white text-xs sm:text-sm font-semibold leading-tight line-clamp-2 font-sans">
                              {img.tagname || "No Tag / Quote"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center aspect-video w-full text-zinc-600 gap-3">
                      <ImageIcon size={44} className="opacity-40" />
                      <p className="text-sm font-bold uppercase tracking-wider font-sans">No photos to preview</p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ── EVENTS LIST & FILTERS ── */}
        <div className="space-y-8">
          
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0A0B0E] p-4 rounded-3xl">
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events or photo tags..."
                className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none transition-all font-sans placeholder:text-zinc-600"
              />
            </div>

            {/* Year Filters */}
            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
              <button
                onClick={() => setSelectedYearFilter("ALL")}
                className={`px-5 py-2.5 rounded-2xl text-sm font-bold uppercase transition-all cursor-pointer font-sans ${
                  selectedYearFilter === "ALL" 
                    ? "bg-rose-600 text-white shadow-[0_0_20px_rgba(225,29,72,0.4)]" 
                    : "bg-[#030303] text-zinc-400 hover:text-white"
                }`}
              >
                All ({items.length})
              </button>
              {availableYears.map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYearFilter(yr)}
                  className={`px-5 py-2.5 rounded-2xl text-sm font-bold uppercase transition-all cursor-pointer font-sans ${
                    selectedYearFilter === yr 
                      ? "bg-rose-600 text-white shadow-[0_0_20px_rgba(225,29,72,0.4)]" 
                      : "bg-[#030303] text-zinc-400 hover:text-white"
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          {/* Event Cards List */}
          <div className="grid grid-cols-1 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-[#0A0B0E] p-6 md:p-9 rounded-3xl flex flex-col gap-6 shadow-xl hover:bg-[#0e0f14] transition-colors">
                
                {/* Event Card Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-xs font-bold uppercase rounded-lg bg-rose-500/10 text-rose-400 font-sans">
                        {item.year}
                      </span>
                      <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider font-sans">
                        {item.images.length} Photos
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">{item.eventName}</h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleEdit(item)}
                      className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer font-sans"
                    >
                      <Pencil size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="inline-flex items-center gap-2 bg-rose-950/40 hover:bg-rose-900 text-rose-400 px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer font-sans"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </div>

                {/* Event Images Grid (Click any photo to open modal) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {item.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => openPreview(item.images, idx, item.eventName, item.year)}
                      className="relative aspect-square rounded-2xl overflow-hidden group bg-zinc-950 shadow-md cursor-zoom-in"
                      title="Click to view full preview"
                    >
                      <Image
                        src={img.src}
                        alt={img.tagname || "Event Image"}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized={img.src.startsWith("http") || img.src.startsWith("/")}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                      
                      {/* Order indicator */}
                      <div className="absolute top-2.5 left-2.5 bg-black/70 px-2 py-0.5 rounded-md text-[10px] font-bold text-white font-sans">
                        #{idx + 1}
                      </div>

                      {/* Zoom Indicator Icon */}
                      <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={13} className="text-white" />
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-3 pointer-events-none">
                        <p className="text-white text-xs sm:text-sm font-semibold leading-tight line-clamp-2 font-sans">
                          {img.tagname || "No Tag"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}

            {filteredItems.length === 0 && (
              <div className="text-center py-24 text-zinc-400 font-medium bg-[#0A0B0E] rounded-3xl flex flex-col items-center justify-center gap-4 font-sans">
                <ImageIcon size={48} className="text-zinc-600" />
                <p className="text-base font-semibold">No events match your search or filter.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
