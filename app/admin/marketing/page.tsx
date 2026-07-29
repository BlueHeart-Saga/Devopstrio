"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Plus, Pencil, Trash2, Save, X, Upload, FileText, Star, StarOff,
  Search, Filter, Eye, EyeOff, Download, ChevronDown, Tag, AlertCircle,
  Building2, Briefcase, Factory, Rocket, Cpu, BookOpen, Presentation,
  Video, Library, Clock, CheckCircle2, RefreshCw, ExternalLink,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type ResourceType = "PDF" | "PPT" | "Word" | "Video" | "Brochure" | "Whitepaper" | "Case Study" | "Datasheet" | "Blueprint";
type ResourceStatus = "published" | "draft" | "archived";

type MarketingResource = {
  id: string;
  title: string;
  category: string;
  type: ResourceType;
  description: string;
  fileUrl: string;
  thumbnailUrl: string;
  fileSize: string;
  fileName: string;
  tags: string[];
  badge: string;
  featured: boolean;
  downloads: number;
  status: ResourceStatus;
  created_at?: string;
  updated_at?: string;
};

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: "Company Documents", label: "Company Documents & Decks", icon: Building2 },
  { id: "Service Brochures", label: "Service Practice Brochures", icon: Briefcase },
  { id: "Industry Solutions", label: "Industry Solution Papers", icon: Factory },
  { id: "Platform Datasheets", label: "Proprietary SaaS Platform Datasheets", icon: Rocket },
  { id: "Technology Blueprints", label: "Technology Blueprints & Stack Specifications", icon: Cpu },
  { id: "Case Studies", label: "Enterprise Case Studies", icon: BookOpen },
  { id: "Whitepapers", label: "Whitepapers & Thought Leadership", icon: FileText },
  { id: "Presentations", label: "Presentations & Slide Decks", icon: Presentation },
  { id: "Videos", label: "Videos & Technical Webinars", icon: Video },
  { id: "Downloads Library", label: "Complete Resource Downloads Library", icon: Library },
  { id: "Latest Releases", label: "Latest Resource Additions & Releases", icon: Clock },
];

const RESOURCE_TYPES: ResourceType[] = ["PDF", "PPT", "Word", "Video", "Brochure", "Whitepaper", "Case Study", "Datasheet", "Blueprint"];

const TYPE_COLORS: Record<string, string> = {
  PDF: "bg-red-500/10 text-red-400 border-red-500/20",
  PPT: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Word: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Video: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Brochure: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  Whitepaper: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Case Study": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Datasheet: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Blueprint: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

const ACCEPT_TYPES = ".pdf,.ppt,.pptx,.doc,.docx,.mp4,.mov,.webm";

const EMPTY_FORM: Partial<MarketingResource> = {
  title: "",
  category: "Company Documents",
  type: "PDF",
  description: "",
  fileUrl: "",
  thumbnailUrl: "",
  fileSize: "",
  fileName: "",
  tags: [],
  badge: "",
  featured: false,
  status: "published",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function MarketingResourcesAdminPage() {
  const [resources, setResources] = useState<MarketingResource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<MarketingResource>>(EMPTY_FORM);
  const [tagInput, setTagInput] = useState("");

  // Filters
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Upload state
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [isUploadingThumb, setIsUploadingThumb] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const formRef = useRef<HTMLDivElement>(null);

  // ── Data fetching ──────────────────────────────────────────────────────────

  const fetchResources = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (filterCategory !== "All") params.set("category", filterCategory);
      if (filterType !== "All") params.set("type", filterType);
      if (searchQuery) params.set("search", searchQuery);
      const res = await fetch(`/api/marketing-resources?${params.toString()}`);
      const data = await res.json();
      setResources(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch resources", err);
    } finally {
      setIsLoading(false);
    }
  }, [filterCategory, filterType, searchQuery]);

  useEffect(() => { fetchResources(); }, [fetchResources]);

  // ── File upload ────────────────────────────────────────────────────────────

  const uploadFile = async (file: File, field: "fileUrl" | "thumbnailUrl") => {
    const isThumbnail = field === "thumbnailUrl";
    isThumbnail ? setIsUploadingThumb(true) : setIsUploadingFile(true);
    setUploadError(null);

    const fd = new FormData();
    fd.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const result = await res.json();
      if (result.success) {
        setFormData((prev) => ({
          ...prev,
          [field]: result.url,
          ...(field === "fileUrl" ? { fileName: file.name, fileSize: formatBytes(file.size) } : {}),
        }));
      } else {
        setUploadError("Upload failed. Please try again.");
      }
    } catch {
      setUploadError("Upload failed. Please try again.");
    } finally {
      isThumbnail ? setIsUploadingThumb(false) : setIsUploadingFile(false);
    }
  };

  const formatBytes = (bytes: number) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  // ── Form handlers ──────────────────────────────────────────────────────────

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const addTag = () => {
    const t = tagInput.trim();
    if (!t || formData.tags?.includes(t)) return;
    setFormData((prev) => ({ ...prev, tags: [...(prev.tags || []), t] }));
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    setFormData((prev) => ({ ...prev, tags: (prev.tags || []).filter((t) => t !== tag) }));
  };

  const handleAddNew = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData(EMPTY_FORM);
    setTagInput("");
    setUploadError(null);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const handleEdit = (r: MarketingResource) => {
    setEditingId(r.id);
    setIsAdding(false);
    setFormData({ ...r });
    setTagInput("");
    setUploadError(null);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData(EMPTY_FORM);
    setUploadError(null);
  };

  const handleSave = async () => {
    if (!formData.title?.trim() || !formData.category) {
      setUploadError("Title and category are required.");
      return;
    }
    try {
      if (isAdding) {
        await fetch("/api/marketing-resources", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else if (editingId) {
        await fetch(`/api/marketing-resources/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      await fetchResources();
      handleCancel();
    } catch (err) {
      console.error("Failed to save resource", err);
      setUploadError("Failed to save. Please try again.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this resource permanently?")) return;
    try {
      await fetch(`/api/marketing-resources/${id}`, { method: "DELETE" });
      await fetchResources();
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  const toggleFeatured = async (r: MarketingResource) => {
    await fetch(`/api/marketing-resources/${r.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...r, featured: !r.featured }),
    });
    fetchResources();
  };

  const toggleStatus = async (r: MarketingResource) => {
    const next: ResourceStatus = r.status === "published" ? "draft" : "published";
    await fetch(`/api/marketing-resources/${r.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...r, status: next }),
    });
    fetchResources();
  };

  // ── Stats ──────────────────────────────────────────────────────────────────

  const stats = {
    total: resources.length,
    published: resources.filter((r) => r.status === "published").length,
    featured: resources.filter((r) => r.featured).length,
    totalDownloads: resources.reduce((a, r) => a + (r.downloads || 0), 0),
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-black tracking-tight mb-1">Marketing Resources Admin</h1>
            <p className="text-zinc-400 text-sm">Manage PDFs, PPTs, Word docs, videos and all enterprise resource materials.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchResources}
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors"
              title="Refresh"
            >
              <RefreshCw size={16} className="text-zinc-400" />
            </button>
            {!isAdding && !editingId && (
              <button
                onClick={handleAddNew}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
              >
                <Plus size={15} /> Add New Resource
              </button>
            )}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Resources", value: stats.total, color: "text-white" },
            { label: "Published", value: stats.published, color: "text-emerald-400" },
            { label: "Featured", value: stats.featured, color: "text-yellow-400" },
            { label: "Total Downloads", value: stats.totalDownloads.toLocaleString(), color: "text-rose-400" },
          ].map((s) => (
            <div key={s.label} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">{s.label}</p>
              <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3 mb-8 bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by title, description, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500 appearance-none min-w-[180px]"
          >
            <option value="All">All Categories</option>
            {CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500 appearance-none min-w-[130px]"
          >
            <option value="All">All Types</option>
            {RESOURCE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* ── Add / Edit Form ── */}
        {(isAdding || editingId) && (
          <div ref={formRef} className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 mb-10 shadow-2xl scroll-mt-32">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-rose-500">
                {isAdding ? "➕ Add New Resource" : "✏️ Edit Resource"}
              </h2>
              <button onClick={handleCancel} className="p-2 rounded-lg hover:bg-zinc-800 transition-colors">
                <X size={18} className="text-zinc-400" />
              </button>
            </div>

            {uploadError && (
              <div className="flex items-center gap-2 bg-red-950/40 border border-red-800/50 rounded-lg px-4 py-3 mb-6 text-sm text-red-400">
                <AlertCircle size={14} /> {uploadError}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Title */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Resource Title *</label>
                <input
                  type="text" name="title" value={formData.title || ""} onChange={handleInput}
                  placeholder="e.g. Devopstrio Corporate Overview & Capability Deck 2026"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white font-semibold focus:outline-none focus:border-rose-500"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Category *</label>
                <select
                  name="category" value={formData.category || ""} onChange={handleInput}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 appearance-none cursor-pointer"
                >
                  {CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Resource Type *</label>
                <select
                  name="type" value={formData.type || "PDF"} onChange={handleInput}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 appearance-none cursor-pointer"
                >
                  {RESOURCE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Description</label>
                <textarea
                  name="description" value={formData.description || ""} onChange={handleInput} rows={3}
                  placeholder="Brief description of the resource content and value..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 resize-none font-medium"
                />
              </div>

              {/* File Upload */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                  Document / File Upload <span className="text-zinc-600 font-normal normal-case">(PDF, PPT, PPTX, DOC, DOCX, MP4, MOV)</span>
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 px-5 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-sm font-bold text-white cursor-pointer transition-colors">
                    <Upload size={15} />
                    {isUploadingFile ? "Uploading..." : "Choose File"}
                    <input
                      type="file" accept={ACCEPT_TYPES} className="hidden"
                      onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadFile(f, "fileUrl"); }}
                    />
                  </label>
                  {formData.fileUrl && (
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-emerald-400 font-mono truncate">
                        ✓ {formData.fileName || "File uploaded"}
                      </div>
                      <span className="text-xs text-zinc-500">{formData.fileSize}</span>
                      <a href={formData.fileUrl} target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors">
                        <ExternalLink size={13} className="text-zinc-400" />
                      </a>
                      <button onClick={() => setFormData(p => ({ ...p, fileUrl: "", fileName: "", fileSize: "" }))}
                        className="p-2 rounded-lg bg-red-950/40 hover:bg-red-900/40 transition-colors">
                        <X size={13} className="text-red-400" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnail Upload */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                  Cover / Thumbnail Image <span className="text-zinc-600 font-normal normal-case">(optional — JPG, PNG, WebP)</span>
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 px-5 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-sm font-bold text-white cursor-pointer transition-colors">
                    <Upload size={15} />
                    {isUploadingThumb ? "Uploading..." : "Choose Image"}
                    <input
                      type="file" accept="image/*" className="hidden"
                      onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadFile(f, "thumbnailUrl"); }}
                    />
                  </label>
                  {formData.thumbnailUrl && (
                    <div className="flex items-center gap-3">
                      <img src={formData.thumbnailUrl} alt="Thumbnail" className="w-16 h-16 rounded-lg object-cover border border-zinc-800" />
                      <button onClick={() => setFormData(p => ({ ...p, thumbnailUrl: "" }))}
                        className="p-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/40 transition-colors">
                        <X size={12} className="text-red-400" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Badge */}
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Badge Label</label>
                <input
                  type="text" name="badge" value={formData.badge || ""} onChange={handleInput}
                  placeholder="e.g. NEW, POPULAR, FEATURED"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 uppercase font-mono text-sm"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Status</label>
                <select
                  name="status" value={formData.status || "published"} onChange={handleInput}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 appearance-none cursor-pointer"
                >
                  <option value="published">Published (Visible on site)</option>
                  <option value="draft">Draft (Hidden)</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              {/* Tags */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Tags</label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                    placeholder="Type a tag and press Enter..."
                    className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                  <button onClick={addTag} className="px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-white transition-colors">
                    <Tag size={13} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(formData.tags || []).map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-xs font-semibold text-rose-400">
                      {tag}
                      <button onClick={() => removeTag(tag)} className="hover:text-rose-300 transition-colors"><X size={10} /></button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Toggle */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-3 cursor-pointer w-fit group">
                  <div
                    onClick={() => setFormData(p => ({ ...p, featured: !p.featured }))}
                    className={`w-11 h-6 rounded-full transition-all duration-300 relative ${formData.featured ? "bg-yellow-500" : "bg-zinc-700"}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${formData.featured ? "translate-x-5" : "translate-x-0"}`} />
                  </div>
                  <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
                    {formData.featured ? "⭐ Featured Resource" : "Mark as Featured"}
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="md:col-span-2 flex gap-4 mt-2">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-colors"
                >
                  <Save size={16} /> {isAdding ? "Publish Resource" : "Save Changes"}
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-colors"
                >
                  <X size={16} /> Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Resource List ── */}
        {isLoading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-8 h-8 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-3">
            {/* Category group headers */}
            {CATEGORIES.filter((c) =>
              filterCategory === "All" || filterCategory === c.id
            ).map((cat) => {
              const catResources = resources.filter((r) => r.category === cat.id);
              if (catResources.length === 0 && filterCategory === "All") return null;
              const IconComp = cat.icon;
              return (
                <div key={cat.id} className="mb-2">
                  {filterCategory === "All" && (
                    <div className="flex items-center gap-2 mb-3 mt-6 first:mt-0">
                      <IconComp size={16} className="text-rose-500" />
                      <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">{cat.label}</span>
                      <span className="text-xs bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded-full font-mono">{catResources.length}</span>
                    </div>
                  )}
                  <div className="space-y-2">
                    {catResources.map((resource) => (
                      <ResourceRow
                        key={resource.id}
                        resource={resource}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onToggleFeatured={toggleFeatured}
                        onToggleStatus={toggleStatus}
                        isEditing={editingId === resource.id}
                      />
                    ))}
                    {catResources.length === 0 && filterCategory !== "All" && (
                      <div className="text-center py-16 border border-dashed border-zinc-800 rounded-xl text-zinc-600 text-sm">
                        No resources in this category. Click "Add New Resource" to create one.
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {resources.length === 0 && (
              <div className="text-center py-24 border border-dashed border-zinc-800 rounded-2xl">
                <FileText size={40} className="text-zinc-700 mx-auto mb-4" />
                <p className="text-zinc-400 font-semibold text-lg mb-1">No resources found</p>
                <p className="text-zinc-600 text-sm">Adjust your filters or add a new resource.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Resource Row Component ───────────────────────────────────────────────────

function ResourceRow({
  resource, onEdit, onDelete, onToggleFeatured, onToggleStatus, isEditing,
}: {
  resource: MarketingResource;
  onEdit: (r: MarketingResource) => void;
  onDelete: (id: string) => void;
  onToggleFeatured: (r: MarketingResource) => void;
  onToggleStatus: (r: MarketingResource) => void;
  isEditing: boolean;
}) {
  const typeClass = TYPE_COLORS[resource.type] || "bg-zinc-800 text-zinc-400 border-zinc-700";

  return (
    <div className={`bg-zinc-900 border rounded-xl p-5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 transition-all duration-200 ${isEditing ? "border-rose-500/50 shadow-[0_0_20px_rgba(225,29,72,0.1)]" : "border-zinc-800 hover:border-zinc-700"}`}>
      
      {/* Left info */}
      <div className="flex items-start gap-4 flex-1 min-w-0">
        {resource.thumbnailUrl ? (
          <img src={resource.thumbnailUrl} alt={resource.title} className="w-14 h-14 rounded-lg object-cover border border-zinc-800 shrink-0" />
        ) : (
          <div className="w-14 h-14 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
            <FileText size={20} className="text-zinc-500" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded border ${typeClass}`}>
              {resource.type}
            </span>
            {resource.badge && (
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                {resource.badge}
              </span>
            )}
            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded ${resource.status === "published" ? "bg-emerald-500/10 text-emerald-400" : resource.status === "draft" ? "bg-yellow-500/10 text-yellow-500" : "bg-zinc-800 text-zinc-500"}`}>
              {resource.status}
            </span>
            {resource.featured && <span className="text-yellow-400 text-xs">⭐</span>}
          </div>
          <h3 className="font-bold text-white text-sm truncate">{resource.title}</h3>
          {resource.description && (
            <p className="text-xs text-zinc-500 mt-0.5 line-clamp-1">{resource.description}</p>
          )}
          <div className="flex flex-wrap items-center gap-3 mt-1.5">
            {resource.fileSize && (
              <span className="text-[10px] text-zinc-600 font-mono">{resource.fileSize}</span>
            )}
            <span className="text-[10px] text-zinc-600 font-mono flex items-center gap-1">
              <Download size={9} /> {resource.downloads?.toLocaleString() || 0}
            </span>
            {resource.tags?.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] text-zinc-600 font-mono">#{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2 shrink-0 flex-wrap">
        {resource.fileUrl && (
          <a
            href={resource.fileUrl} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
            title="Open file"
          >
            <ExternalLink size={13} className="text-zinc-400" />
          </a>
        )}
        <button
          onClick={() => onToggleFeatured(resource)}
          className={`p-2 rounded-lg transition-colors ${resource.featured ? "bg-yellow-500/10 hover:bg-yellow-500/20" : "bg-zinc-800 hover:bg-zinc-700"}`}
          title={resource.featured ? "Unfeature" : "Feature"}
        >
          {resource.featured ? <Star size={13} className="text-yellow-400" /> : <StarOff size={13} className="text-zinc-500" />}
        </button>
        <button
          onClick={() => onToggleStatus(resource)}
          className={`p-2 rounded-lg transition-colors ${resource.status === "published" ? "bg-emerald-500/10 hover:bg-emerald-500/20" : "bg-zinc-800 hover:bg-zinc-700"}`}
          title={resource.status === "published" ? "Unpublish" : "Publish"}
        >
          {resource.status === "published" ? <Eye size={13} className="text-emerald-400" /> : <EyeOff size={13} className="text-zinc-500" />}
        </button>
        <button
          onClick={() => onEdit(resource)}
          className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-white px-3.5 py-2 rounded-lg font-bold text-xs tracking-wide transition-colors"
        >
          <Pencil size={12} /> Edit
        </button>
        <button
          onClick={() => onDelete(resource.id)}
          className="flex items-center gap-1.5 bg-red-950/40 hover:bg-red-900/60 text-red-500 border border-red-900/50 px-3.5 py-2 rounded-lg font-bold text-xs tracking-wide transition-colors"
        >
          <Trash2 size={12} /> Delete
        </button>
      </div>
    </div>
  );
}
