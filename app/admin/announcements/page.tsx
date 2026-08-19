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

type Announcement = {
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

export default function AnnouncementsAdminPage() {
  const [items, setItems] = useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [formData, setFormData] = useState<Partial<Announcement>>({});
  const [isAdding, setIsAdding] = useState(false);
  const [isUploadingPdf, setIsUploadingPdf] = useState(false);
  const [isDragOverPdf, setIsDragOverPdf] = useState(false);

  // Live Flipbook Reader Modal preview state
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [activePreviewItem, setActivePreviewItem] = useState<Announcement | null>(null);

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
      const res = await fetch("/api/announcements");
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch announcements", err);
      showToast("Failed to fetch announcements", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Upload PDF handler
  const handlePdfUpload = async (files: FileList | File[]) => {
    if (!files || files.length === 0) return;
    const file = files[0];

    if (!file.name.toLowerCase().endsWith(".pdf") && file.type !== "application/pdf") {
      showToast("Please upload a valid PDF document (.pdf)", "error");
      return;
    }

    setIsUploadingPdf(true);
    const data = new FormData();
    data.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      const result = await res.json();

      if (result.success && result.url) {
        setFormData((prev) => ({
          ...prev,
          pdfUrl: result.url,
          pdfName: file.name,
          pdfSize: file.size,
        }));
        showToast("PDF document uploaded successfully!");
      } else {
        showToast("Failed to upload PDF document", "error");
      }
    } catch (err) {
      console.error("PDF upload error:", err);
      showToast("Network error uploading PDF", "error");
    } finally {
      setIsUploadingPdf(false);
      if (pdfInputRef.current) pdfInputRef.current.value = "";
    }
  };

  const handleRemovePdf = () => {
    setFormData((prev) => ({
      ...prev,
      pdfUrl: undefined,
      pdfName: undefined,
      pdfSize: undefined,
    }));
    showToast("PDF document removed.");
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
      status: "active",
      pdfUrl: "",
      pdfName: "",
    });

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleSave = async () => {
    try {
      let res;
      if (isAdding) {
        res = await fetch("/api/announcements", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else if (editingId) {
        res = await fetch(`/api/announcements/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      if (res && res.ok) {
        showToast(isAdding ? "Announcement created successfully!" : "Announcement updated successfully!");
        await fetchItems();
        handleCancel();
      } else {
        showToast("Failed to save announcement", "error");
      }
    } catch (err) {
      console.error("Failed to save announcement", err);
      showToast("Error connecting to server", "error");
    }
  };

  const handleDelete = async (id: string | number) => {
    if (!confirm("Are you sure you want to delete this announcement?")) return;
    try {
      const res = await fetch(`/api/announcements/${id}`, { method: "DELETE" });
      if (res.ok) {
        showToast("Announcement deleted.");
        await fetchItems();
      } else {
        showToast("Failed to delete announcement.", "error");
      }
    } catch (err) {
      console.error("Failed to delete announcement", err);
      showToast("Error deleting announcement.", "error");
    }
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return "";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  if (isLoading) {
    return (
      <div className="p-20 text-white min-h-screen bg-[#030303] flex flex-col items-center justify-center gap-4 font-sans">
        <div className="w-12 h-12 border-3 border-rose-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-zinc-300 font-sans text-sm font-semibold tracking-wider">Loading Announcements Admin...</p>
      </div>
    );
  }

  const renderPreview = () => {
    const isActive = formData.status === "active";
    const p = formData as Announcement;

    return (
      <div 
        onClick={() => {
          setActivePreviewItem(formData as Announcement);
          setIsPreviewOpen(true);
        }}
        className="relative w-full max-w-[220px] aspect-[3/4] rounded-2xl p-6 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden mx-auto transition-all duration-300 bg-[#0E0F14] hover:scale-105 cursor-pointer group select-none"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.25),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(225,29,72,0.1),transparent)]" />
        
        <div className="flex justify-between items-start relative z-10">
          <span className="text-[10px] font-bold text-rose-400 tracking-wider uppercase font-sans">
            {p.reportType || "RESEARCH REPORT"}
          </span>
          <FileText size={18} className="text-rose-500" />
        </div>

        <div className="my-auto relative z-10">
          <h3 className="text-base font-bold tracking-tight text-white leading-snug font-sans">
            {p.coverTitleLine1 || "AI IMPACT"}<br />
            <span className="text-rose-400">{p.coverTitleLine2 || "IMPERATIVES"}</span>
          </h3>
          <div className="h-[3px] w-10 bg-rose-600 mt-2.5 rounded-full" />
        </div>

        <div className="flex justify-between items-center text-xs font-semibold text-zinc-400 mt-4 relative z-10 font-sans">
          <span>{p.coverBrand || "Devopstrio"}</span>
          <span className="text-white font-bold">{p.coverEdition || "2026 EDITION"}</span>
        </div>
        
        {/* Click to open badge */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-2 transition-opacity z-20">
          <BookOpen size={28} className="text-white animate-bounce" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">Click to Read</span>
        </div>

        {!isActive && (
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none overflow-hidden bg-black/75">
            <div className="text-sm font-black text-red-500 border-2 border-red-500 uppercase -rotate-[20deg] px-3 py-1 tracking-widest font-sans">
              INACTIVE
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-28 pb-20 px-6 sm:px-10 lg:px-16 font-sans selection:bg-rose-500 selection:text-white">
      
      {/* ── INTERACTIVE BOOK READER MODAL ── */}
      <BookReaderModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        report={activePreviewItem}
      />

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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans">
              Global Announcements &amp; Reports
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg font-normal font-sans">
              Upload executive PDF research documents and provide an interactive book-reading experience.
            </p>
          </div>

          {!isAdding && !editingId && (
            <button
              onClick={handleAddNew}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold tracking-wide uppercase bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 hover:from-red-500 hover:to-rose-400 text-white shadow-[0_0_30px_rgba(225,29,72,0.3)] hover:shadow-[0_0_40px_rgba(225,29,72,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer font-sans"
            >
              <Plus size={20} /> Add Announcement
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
                    {isAdding ? "Create New Announcement" : "Edit Announcement"}
                  </h2>
                  <p className="text-sm text-zinc-400 font-sans mt-0.5">
                    Configure banner text, upload PDF report, and customize cover.
                  </p>
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
              
              {/* Left Column: Form Inputs & PDF Document Uploader */}
              <div className="xl:col-span-8 space-y-8">
                
                {/* ── PDF DOCUMENT UPLOAD SECTION ── */}
                <div className="bg-[#040507] p-6 sm:p-8 rounded-3xl space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white font-sans">
                          Executive PDF Research Document
                        </h4>
                        <p className="text-xs text-zinc-400 font-sans">
                          Upload full PDF to enable instant book-reading and document download.
                        </p>
                      </div>
                    </div>

                    {formData.pdfUrl && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold font-sans">
                        <FileCheck size={14} /> PDF Attached
                      </span>
                    )}
                  </div>

                  {/* PDF Upload Dropzone */}
                  {!formData.pdfUrl ? (
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragOverPdf(true);
                      }}
                      onDragLeave={() => setIsDragOverPdf(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setIsDragOverPdf(false);
                        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                          handlePdfUpload(e.dataTransfer.files);
                        }
                      }}
                      onClick={() => pdfInputRef.current?.click()}
                      className={`relative w-full rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 group ${
                        isDragOverPdf 
                          ? "bg-rose-950/40 ring-2 ring-rose-500 scale-[1.01]" 
                          : "bg-zinc-950/80 hover:bg-zinc-900/60"
                      }`}
                    >
                      <input
                        ref={pdfInputRef}
                        type="file"
                        accept="application/pdf,.pdf"
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            handlePdfUpload(e.target.files);
                          }
                        }}
                        className="hidden"
                      />

                      {isUploadingPdf ? (
                        <div className="flex flex-col items-center gap-3 py-2">
                          <div className="w-12 h-12 rounded-full border-3 border-rose-500 border-t-transparent animate-spin flex items-center justify-center">
                            <Upload size={20} className="text-rose-500 animate-pulse" />
                          </div>
                          <p className="text-sm font-bold text-white font-sans">
                            Uploading PDF to cloud storage...
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-3 py-2">
                          <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-rose-500 transition-colors">
                            <Upload size={24} />
                          </div>
                          <div>
                            <p className="text-base font-bold text-white group-hover:text-rose-400 transition-colors font-sans">
                              Drag &amp; drop research PDF here, or <span className="underline underline-offset-4 text-rose-500">browse file</span>
                            </p>
                            <p className="text-xs text-zinc-400 mt-1 font-sans">
                              Accepts PDF up to 100MB. Full vector typography preserved.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* PDF Document Details Card */
                    <div className="bg-zinc-950/90 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                          <FileText size={24} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white font-sans truncate max-w-xs sm:max-w-md">
                            {formData.pdfName || "Uploaded-Document.pdf"}
                          </p>
                          <p className="text-xs text-zinc-400 font-sans mt-0.5">
                            {formatFileSize(formData.pdfSize) || "Cloud PDF"} • Ready for Interactive Reader
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => {
                            setActivePreviewItem(formData as Announcement);
                            setIsPreviewOpen(true);
                          }}
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          <Eye size={15} /> Open Reader
                        </button>
                        <button
                          type="button"
                          onClick={handleRemovePdf}
                          className="p-2.5 rounded-xl bg-rose-950/40 hover:bg-rose-900 text-rose-400 transition-colors cursor-pointer"
                          title="Remove PDF"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Main Headline Inputs */}
                <div className="space-y-6">
                  <h4 className="text-base font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-3 font-sans">
                    Banner Copy &amp; Headlines
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide font-sans">
                        Title Prefix
                      </label>
                      <input
                        type="text"
                        name="titlePrefix"
                        value={formData.titlePrefix || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl px-4 py-3.5 text-white text-sm font-sans focus:outline-none transition-all"
                        placeholder="The "
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide font-sans">
                        Title Highlight (Gradient)
                      </label>
                      <input
                        type="text"
                        name="titleHighlight"
                        value={formData.titleHighlight || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl px-4 py-3.5 text-white text-sm font-sans focus:outline-none transition-all"
                        placeholder="AI Impact"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide font-sans">
                        Title Suffix
                      </label>
                      <input
                        type="text"
                        name="titleSuffix"
                        value={formData.titleSuffix || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl px-4 py-3.5 text-white text-sm font-sans focus:outline-none transition-all"
                        placeholder=" Imperatives, 2026"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide font-sans">
                      Description Summary
                    </label>
                    <input
                      type="text"
                      name="description"
                      value={formData.description || ""}
                      onChange={handleInputChange}
                      className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl px-4 py-3.5 text-white text-sm font-sans focus:outline-none transition-all"
                      placeholder="Explore how organizations are turning AI potential into measurable business impact."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide font-sans">
                        Newsletter Form Heading
                      </label>
                      <input
                        type="text"
                        name="formTitle"
                        value={formData.formTitle || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl px-4 py-3.5 text-white text-sm font-sans focus:outline-none transition-all"
                        placeholder="Stay ahead with our latest Updates"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide font-sans">
                        Banner Status
                      </label>
                      <select
                        name="status"
                        value={formData.status || "active"}
                        onChange={handleInputChange}
                        className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl px-4 py-3.5 text-white text-sm font-sans focus:outline-none transition-all"
                      >
                        <option value="active">Active (Visible on Homepage)</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Visual Cover Customization */}
                <div className="space-y-6">
                  <h4 className="text-base font-bold text-white uppercase tracking-wider border-b border-zinc-900 pb-3 font-sans">
                    3D Book Cover Visuals
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide font-sans">
                        Report Eyebrow
                      </label>
                      <input
                        type="text"
                        name="reportType"
                        value={formData.reportType || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl px-4 py-3.5 text-white text-sm font-sans focus:outline-none transition-all"
                        placeholder="RESEARCH REPORT"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide font-sans">
                        Cover Title (Line 1)
                      </label>
                      <input
                        type="text"
                        name="coverTitleLine1"
                        value={formData.coverTitleLine1 || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl px-4 py-3.5 text-white text-sm font-sans focus:outline-none transition-all"
                        placeholder="AI IMPACT"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide font-sans">
                        Cover Title (Line 2)
                      </label>
                      <input
                        type="text"
                        name="coverTitleLine2"
                        value={formData.coverTitleLine2 || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl px-4 py-3.5 text-white text-sm font-sans focus:outline-none transition-all"
                        placeholder="IMPERATIVES"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide font-sans">
                        Edition / Year
                      </label>
                      <input
                        type="text"
                        name="coverEdition"
                        value={formData.coverEdition || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl px-4 py-3.5 text-white text-sm font-sans focus:outline-none transition-all"
                        placeholder="2026 EDITION"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wide font-sans">
                        Brand Name
                      </label>
                      <input
                        type="text"
                        name="coverBrand"
                        value={formData.coverBrand || ""}
                        onChange={handleInputChange}
                        className="w-full bg-[#030303] focus:ring-2 focus:ring-rose-500 rounded-2xl px-4 py-3.5 text-white text-sm font-sans focus:outline-none transition-all"
                        placeholder="Devopstrio"
                      />
                    </div>
                  </div>
                </div>

                {/* Save / Cancel Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  <button
                    onClick={handleSave}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-9 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] active:scale-95 cursor-pointer font-sans"
                  >
                    <Save size={18} /> Save Announcement
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-7 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer font-sans"
                  >
                    <X size={18} /> Cancel
                  </button>
                </div>

              </div>

              {/* Right Column: Live 3D Book Visualizer Preview */}
              <div className="xl:col-span-4 flex flex-col space-y-6 items-center">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm font-bold text-zinc-300 uppercase tracking-wide font-sans">
                    3D Book Preview
                  </span>
                  <span className="text-xs font-bold text-rose-400 bg-rose-950 px-3 py-1 rounded-full font-sans">
                    Interactive
                  </span>
                </div>

                <div className="w-full bg-[#030303] rounded-3xl p-8 flex flex-col items-center justify-center shadow-inner">
                  {renderPreview()}
                  <p className="text-xs text-zinc-400 text-center mt-6 max-w-xs font-sans">
                    Click the 3D book cover above to preview the interactive page-swipe reader experience.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ── ANNOUNCEMENTS LIST ── */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white font-sans">Existing Announcements</h3>
            <span className="text-xs font-semibold text-zinc-400 font-sans">{items.length} Total</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#0A0B0E] p-6 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl hover:bg-[#0e0f14] transition-colors"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 text-xs font-bold uppercase rounded-lg font-sans ${
                      item.status === 'active'
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-zinc-800 text-zinc-500"
                    }`}>
                      {item.status}
                    </span>

                    {item.pdfUrl && (
                      <span className="px-3 py-1 text-xs font-bold uppercase rounded-lg bg-rose-500/10 text-rose-400 font-sans flex items-center gap-1.5">
                        <FileCheck size={14} /> PDF Attached
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                    {item.titlePrefix}
                    <span className="text-rose-500">{item.titleHighlight}</span>
                    {item.titleSuffix}
                  </h3>
                  <p className="text-base text-zinc-300 font-normal font-sans max-w-2xl">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={() => {
                      setActivePreviewItem(item);
                      setIsPreviewOpen(true);
                    }}
                    className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-rose-400 px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer font-sans"
                  >
                    <BookOpen size={16} /> Open Book
                  </button>

                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer font-sans"
                  >
                    <Pencil size={16} /> Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-rose-950/40 hover:bg-rose-900 text-rose-400 px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer font-sans"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            ))}

            {items.length === 0 && (
              <div className="text-center py-24 text-zinc-400 font-medium bg-[#0A0B0E] rounded-3xl flex flex-col items-center justify-center gap-4 font-sans">
                <FileText size={48} className="text-zinc-600" />
                <p className="text-base font-semibold">No announcements found. Click &apos;Add Announcement&apos; to create one.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
