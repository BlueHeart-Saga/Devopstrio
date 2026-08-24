"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Plus, 
  Pencil, 
  Trash2, 
  Save, 
  X, 
  FileText, 
  Upload, 
  Download, 
  ExternalLink, 
  BookOpen, 
  Check, 
  AlertCircle,
  FileCheck,
  Eye
} from "lucide-react";
import { BookReaderModal } from "@/components/ui/BookReaderModal";

type CultureAlbum = {
  id: string | number;
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
  pdfUrl?: string;
  pdfName?: string;
  pdfSize?: number;
};

export default function CultureAlbumsAdminPage() {
  const [items, setItems] = useState<CultureAlbum[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [formData, setFormData] = useState<Partial<CultureAlbum>>({});
  const [isAdding, setIsAdding] = useState(false);
  const [isUploadingPdf, setIsUploadingPdf] = useState(false);
  const [isDragOverPdf, setIsDragOverPdf] = useState(false);

  // Live Flipbook Reader Modal preview state
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activePreviewItem, setActivePreviewItem] = useState<CultureAlbum | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const formRef = useRef<HTMLDivElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/culture-albums");
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch culture albums", err);
      showToast("Failed to fetch culture albums", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateNew = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      titlePrefix: "The ",
      titleHighlight: "Life & Culture",
      titleSuffix: " Album, 2026",
      description: "Explore our vibrant company culture, team moments, and global engineering energy.",
      formTitle: "Stay updated with Devopstrio Culture & Career news",
      reportType: "CULTURE ALBUM",
      coverTitleLine1: "LIFE & CULTURE",
      coverTitleLine2: "LOOKBOOK",
      coverEdition: "2026 EDITION",
      coverBrand: "Devopstrio",
      status: "active",
      pdfUrl: "",
      pdfName: "",
    });
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleEdit = (item: CultureAlbum) => {
    setIsAdding(false);
    setEditingId(item.id);
    setFormData({ ...item });
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleCancelForm = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({});
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.titleHighlight) {
      showToast("Please provide a title highlight", "error");
      return;
    }

    try {
      if (isAdding) {
        const res = await fetch("/api/culture-albums", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error("Failed to add culture album");
        const newItem = await res.json();
        setItems([newItem, ...items]);
        showToast("Culture album added successfully!");
      } else if (editingId) {
        const res = await fetch(`/api/culture-albums/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error("Failed to update culture album");
        const updatedItem = await res.json();
        setItems(items.map((item) => (item.id === editingId ? updatedItem : item)));
        showToast("Culture album updated successfully!");
      }
      handleCancelForm();
    } catch (err) {
      console.error(err);
      showToast("Error saving culture album", "error");
    }
  };

  const handleDelete = async (id: string | number) => {
    if (!window.confirm("Are you sure you want to delete this culture album?")) return;

    try {
      const res = await fetch(`/api/culture-albums/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete culture album");
      setItems(items.filter((item) => item.id !== id));
      showToast("Culture album deleted successfully");
      if (editingId === id) handleCancelForm();
    } catch (err) {
      console.error(err);
      showToast("Error deleting culture album", "error");
    }
  };

  const handleToggleStatus = async (item: CultureAlbum) => {
    const nextStatus = item.status === "active" ? "inactive" : "active";
    try {
      const res = await fetch(`/api/culture-albums/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");
      const updated = await res.json();
      setItems(items.map((i) => (i.id === item.id ? updated : i)));
      showToast(`Album set to ${nextStatus}`);
    } catch (err) {
      console.error(err);
      showToast("Failed to update album status", "error");
    }
  };

  // PDF File Upload Handler (Saves permanently via /api/upload-pdf)
  const handlePdfUpload = async (file: File) => {
    if (!file) return;
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      showToast("Please select a valid PDF file", "error");
      return;
    }

    setIsUploadingPdf(true);
    showToast("Uploading & saving PDF permanently...", "success");

    try {
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);

      const res = await fetch("/api/upload-pdf", {
        method: "POST",
        body: uploadFormData,
      });

      if (!res.ok) throw new Error("Upload failed");
      const result = await res.json();

      setFormData((prev) => ({
        ...prev,
        pdfUrl: result.url,
        pdfName: file.name,
        pdfSize: file.size,
      }));
      showToast(`PDF "${file.name}" saved permanently!`);
    } catch (err) {
      console.error(err);
      showToast("Failed to upload PDF file permanently", "error");
    } finally {
      setIsUploadingPdf(false);
    }
  };

  const handleOpenLivePreview = (item: CultureAlbum) => {
    setActivePreviewItem(item);
    setIsPreviewOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 sm:pt-36 lg:pt-40 pb-16 px-6 sm:px-10 font-sans relative">
      
      {/* ── HIGH-LEVEL 3D PDF PAGEFLIP MODAL PREVIEW ── */}
      <BookReaderModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        report={activePreviewItem}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-sm font-semibold animate-in fade-in duration-200 border ${
          toastMessage.type === "error" 
            ? "bg-rose-950/90 border-rose-600 text-rose-200" 
            : "bg-emerald-950/90 border-emerald-600 text-emerald-200"
        }`}>
          {toastMessage.type === "error" ? <AlertCircle size={18} /> : <Check size={18} />}
          <span>{toastMessage.text}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono uppercase tracking-widest mb-2">
              ADMIN DASHBOARD
            </div> */}
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Culture Album & PDF Magazine Manager
            </h1>
            <p className="text-zinc-400 text-sm mt-1">
              Manage lookbooks, PDF announcements, and flipbook magazine readers featured on Our Culture & People page.
            </p>
          </div>

          <button
            onClick={handleCreateNew}
            disabled={isAdding}
            className="px-5 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-semibold text-sm flex items-center gap-2 transition-all shadow-lg hover:shadow-rose-600/20 cursor-pointer disabled:opacity-50"
          >
            <Plus size={18} />
            <span>Add Culture Album</span>
          </button>
        </div>

        {/* Form Panel (Create / Edit) */}
        {(isAdding || editingId !== null) && (
          <div ref={formRef} className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                {isAdding ? <Plus className="text-rose-500" size={20} /> : <Pencil className="text-rose-500" size={20} />}
                <span>{isAdding ? "Create New Culture Album" : "Edit Culture Album"}</span>
              </h2>
              <button
                onClick={handleCancelForm}
                className="text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-zinc-800 transition-colors"
                title="Cancel"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
              
              {/* Title Combination Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Title Prefix</label>
                  <input
                    type="text"
                    placeholder="e.g. The "
                    value={formData.titlePrefix || ""}
                    onChange={(e) => setFormData({ ...formData, titlePrefix: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">Title Highlight (Rose)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Life & Culture"
                    value={formData.titleHighlight || ""}
                    onChange={(e) => setFormData({ ...formData, titleHighlight: e.target.value })}
                    className="w-full bg-zinc-950 border border-rose-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Title Suffix</label>
                  <input
                    type="text"
                    placeholder="e.g. Album, 2026"
                    value={formData.titleSuffix || ""}
                    onChange={(e) => setFormData({ ...formData, titleSuffix: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Description</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Summary text explaining the album or culture document..."
                  value={formData.description || ""}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              {/* Cover Styling Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Report Badge</label>
                  <input
                    type="text"
                    placeholder="CULTURE ALBUM"
                    value={formData.reportType || ""}
                    onChange={(e) => setFormData({ ...formData, reportType: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Cover Title Line 1</label>
                  <input
                    type="text"
                    placeholder="LIFE & CULTURE"
                    value={formData.coverTitleLine1 || ""}
                    onChange={(e) => setFormData({ ...formData, coverTitleLine1: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Cover Title Line 2</label>
                  <input
                    type="text"
                    placeholder="LOOKBOOK"
                    value={formData.coverTitleLine2 || ""}
                    onChange={(e) => setFormData({ ...formData, coverTitleLine2: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Edition Year</label>
                  <input
                    type="text"
                    placeholder="2026 EDITION"
                    value={formData.coverEdition || ""}
                    onChange={(e) => setFormData({ ...formData, coverEdition: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              {/* PDF Document Upload Area */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Attached PDF Album File
                </label>
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragOverPdf(true); }}
                  onDragLeave={() => setIsDragOverPdf(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setIsDragOverPdf(false);
                    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                      handlePdfUpload(e.dataTransfer.files[0]);
                    }
                  }}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all flex flex-col items-center justify-center gap-3 ${
                    isDragOverPdf ? "border-rose-500 bg-rose-500/10" : "border-zinc-800 bg-zinc-950/60"
                  }`}
                >
                  <input
                    type="file"
                    ref={pdfInputRef}
                    accept="application/pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handlePdfUpload(e.target.files[0]);
                      }
                    }}
                    className="hidden"
                  />

                  {formData.pdfUrl ? (
                    <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-4 rounded-xl max-w-lg w-full justify-between">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <FileCheck size={28} className="text-emerald-400 shrink-0" />
                        <div className="text-left truncate">
                          <p className="text-sm font-bold text-white truncate">{formData.pdfName || "Attached_Document.pdf"}</p>
                          <p className="text-xs text-zinc-400">PDF Document ready for Flipbook Reader</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => pdfInputRef.current?.click()}
                        className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold rounded-lg text-white shrink-0"
                      >
                        Change PDF
                      </button>
                    </div>
                  ) : (
                    <>
                      <FileText size={36} className="text-rose-500/80" />
                      <div>
                        <p className="text-sm font-semibold text-white">Drag & drop your PDF Culture Album here</p>
                        <p className="text-xs text-zinc-400 mt-1">Supports standard PDF lookbook files & brochures</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => pdfInputRef.current?.click()}
                        className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-white rounded-lg transition-colors cursor-pointer"
                      >
                        Browse PDF File
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={handleCancelForm}
                  className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-sm rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-rose-600/20"
                >
                  <Save size={16} />
                  <span>{isAdding ? "Save & Publish Album" : "Update Album"}</span>
                </button>
              </div>

            </form>
          </div>
        )}

        {/* Culture Albums List */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center justify-between">
            <span>Published Culture Albums ({items.length})</span>
            <span className="text-xs font-normal text-zinc-400">Click flipbook cover to test reader</span>
          </h2>

          {isLoading ? (
            <div className="text-center py-16 text-zinc-400">Loading Culture Albums...</div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 bg-zinc-950 border border-zinc-900 rounded-3xl text-zinc-400">
              No culture albums found. Click "Add Culture Album" to create one.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`bg-zinc-900/40 border rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all shadow-xl ${
                    item.status === "active" ? "border-zinc-800" : "border-zinc-900 opacity-60"
                  }`}
                >
                  {/* Left Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                        item.status === "active" 
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                          : "bg-zinc-800 text-zinc-400"
                      }`}>
                        {item.status}
                      </span>
                      <span className="text-xs text-rose-400 font-mono uppercase">{item.reportType || "CULTURE ALBUM"}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {item.titlePrefix} <span className="text-rose-500">{item.titleHighlight}</span> {item.titleSuffix}
                    </h3>
                    <p className="text-zinc-400 text-sm max-w-2xl">{item.description}</p>
                    
                    {item.pdfName && (
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800">
                        <FileText size={14} className="text-rose-500" />
                        <span>{item.pdfName}</span>
                      </div>
                    )}
                  </div>

                  {/* 3D PDF PageFlip Card Preview Thumbnail */}
                  <div 
                    onClick={() => handleOpenLivePreview(item)}
                    className="relative w-36 aspect-[3/4] bg-[#0E0F14] border border-zinc-800 hover:border-rose-500 rounded-xl p-4 flex flex-col justify-between shadow-xl cursor-pointer group shrink-0 transition-transform hover:scale-105"
                    title="Click to Preview PDF Flipbook Reader"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-bold text-rose-400 tracking-wider">{item.reportType || "ALBUM"}</span>
                      <FileText size={14} className="text-rose-500" />
                    </div>
                    <div className="my-auto">
                      <p className="text-xs font-bold text-white leading-tight uppercase">
                        {item.coverTitleLine1 || "CULTURE"}<br />
                        <span className="text-rose-400">{item.coverTitleLine2 || "LOOKBOOK"}</span>
                      </p>
                    </div>
                    <div className="text-[10px] text-zinc-400 font-bold">{item.coverEdition || "2026"}</div>
                    
                    {/* Hover badge */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1 rounded-xl transition-opacity">
                      <BookOpen size={20} className="text-white" />
                      <span className="text-[10px] font-bold text-white">Flipbook</span>
                    </div>
                  </div>

                  {/* Action Controls */}
                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => handleOpenLivePreview(item)}
                      className="p-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-colors cursor-pointer"
                      title="Preview Flipbook Reader"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => handleToggleStatus(item)}
                      className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                        item.status === "active" 
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20" 
                          : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
                      }`}
                    >
                      {item.status === "active" ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white rounded-xl transition-colors cursor-pointer"
                      title="Edit"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-3 bg-rose-950/40 hover:bg-rose-900/60 border border-rose-900/40 text-rose-400 hover:text-rose-200 rounded-xl transition-colors cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
