"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ArrowLeft, Sparkles, Send, CheckCircle2, X,
  Building2, Briefcase, Factory, Rocket, Cpu, BookOpen, FileText, Folder, Download, type LucideIcon
} from "lucide-react";
import { MarketingResourceCard, MarketingResourceItem } from "@/components/marketing/MarketingResourceCard";
import { ViewerModal } from "@/sections/marketing/ViewerModal";

const ICON_MAP: Record<string, LucideIcon> = {
  building: Building2,
  briefcase: Briefcase,
  factory: Factory,
  rocket: Rocket,
  cpu: Cpu,
  book: BookOpen,
  file: FileText,
  folder: Folder,
  download: Download,
  sparkles: Sparkles,
};

interface MarketingCategoryPageClientProps {
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  iconName?: "building" | "briefcase" | "factory" | "rocket" | "cpu" | "book" | "file" | "folder" | "download" | "sparkles";
}

export function MarketingCategoryPageClient({
  category,
  title,
  subtitle,
  badge,
  iconName = "folder",
}: MarketingCategoryPageClientProps) {
  const Icon = ICON_MAP[iconName] || Folder;
  const [resources, setResources] = useState<MarketingResourceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFlipbookItem, setActiveFlipbookItem] = useState<MarketingResourceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const highlightTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [requestFormData, setRequestFormData] = useState({
    name: "",
    email: "",
    company: "",
    resourceNeeded: `Custom ${title}`,
    comments: "",
  });

  useEffect(() => () => {
    if (highlightTimer.current) clearTimeout(highlightTimer.current);
  }, []);

  useEffect(() => {
    const fetchCategoryResources = async () => {
      setLoading(true);
      try {
        const isAll = category === "Downloads Library" || category === "Latest Releases" || category === "all";
        const url = isAll ? "/api/marketing-resources" : `/api/marketing-resources?category=${encodeURIComponent(category)}`;
        const res = await fetch(url);
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data)) {
          const published = data
            .filter((item: any) => item.status === "published" || !item.status)
            .map((item: any) => ({
              id: item.id || item._id,
              title: item.title,
              category: item.category,
              type: item.type || "PDF",
              description: item.description,
              fileUrl: item.fileUrl,
              thumbnailUrl: item.thumbnailUrl || undefined,
              fileSize: item.fileSize || "File",
              fileName: item.fileName,
              tags: item.tags || [],
              badge: item.badge || (item.featured ? "FEATURED" : undefined),
              downloads: item.downloads || 0,
              status: item.status || "published",
              updated_at: item.updated_at,
              created_at: item.created_at || item.createdAt,
            }));

          if (isAll) {
            published.sort((a: any, b: any) => {
              const tb = b.created_at ? +new Date(b.created_at) : (b.updated_at ? +new Date(b.updated_at) : 0);
              const ta = a.created_at ? +new Date(a.created_at) : (a.updated_at ? +new Date(a.updated_at) : 0);
              return tb - ta;
            });
          }

          setResources(published);

          // Check if ?resource=<id> param exists and scroll to it
          const targetResource = new URLSearchParams(window.location.search).get("resource");
          if (targetResource) {
            setTimeout(() => {
              const el = document.getElementById(`resource-card-${targetResource}`);
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                setHighlightedId(targetResource);
                if (highlightTimer.current) clearTimeout(highlightTimer.current);
                highlightTimer.current = setTimeout(() => setHighlightedId(null), 3000);
              }
            }, 180);
          }
        }
      } catch (err) {
        console.error("Failed to load category resources:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryResources();
  }, [category]);

  const handleDownload = (item: MarketingResourceItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!item.fileUrl) return;

    const downloadUrl = item.fileUrl;
    const cleanUrl = downloadUrl.split("?")[0].split("#")[0];
    const urlExt = cleanUrl.split(".").pop()?.toLowerCase();
    const nameExt = item.fileName?.split(".").pop()?.toLowerCase();
    const defaultExt = item.type === "PPT" ? "pptx" : item.type === "Word" ? "docx" : item.type === "Video" ? "mp4" : "pdf";
    const ext = urlExt && urlExt.length <= 5 ? urlExt : (nameExt || defaultExt);

    setToastMessage(`Downloading "${item.title}" (${ext.toUpperCase()})...`);
    setTimeout(() => setToastMessage(null), 3500);

    const safeTitle = item.title.replace(/[^a-zA-Z0-9_-]/g, "_");
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = `${safeTitle}.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePreview = (item: MarketingResourceItem) => {
    setActiveFlipbookItem(item);
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSubmitted(true);
    setTimeout(() => {
      setRequestSubmitted(false);
      setIsRequestModalOpen(false);
      setRequestFormData({
        name: "",
        email: "",
        company: "",
        resourceNeeded: `Custom ${title}`,
        comments: "",
      });
      setToastMessage("Resource request submitted! Our team will follow up shortly.");
      setTimeout(() => setToastMessage(null), 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 selection:bg-rose-500/30">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-rose-600 text-white px-5 py-3 rounded-xl shadow-2xl border border-rose-400/30 flex items-center gap-3 font-medium text-xs sm:text-sm animate-bounce">
          <Sparkles className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Link
          href="/marketing"
          className="inline-flex items-center gap-2 text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Marketing Hub
        </Link>

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase mb-3">
            <Icon className="w-3.5 h-3.5" /> {badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">{title}</h1>
          <p className="text-zinc-400 text-sm mt-3 max-w-2xl leading-relaxed">{subtitle}</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-8 h-8 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : resources.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((item) => (
              <div key={item.id} id={`resource-card-${item.id}`} className="scroll-mt-36">
                <MarketingResourceCard
                  item={item}
                  onPreview={handlePreview}
                  onDownload={handleDownload}
                  isHighlighted={highlightedId === item.id}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 px-8 rounded-2xl bg-zinc-900/40 border border-zinc-850 text-center flex flex-col items-center justify-center max-w-xl mx-auto space-y-4">
            <div className="p-3.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1.5">{title} — Curated on Request</h4>
              <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
                Customized collaterals, benchmark reports, and NDA-protected briefings for this section are prepared on demand by our enterprise communications team.
              </p>
            </div>
            <button
              onClick={() => setIsRequestModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-rose-950/50 cursor-pointer mt-2"
            >
              Request Custom Collateral
            </button>
          </div>
        )}
      </div>

      {/* Unified Viewer Modal (Flipbook for PDF, Presentation Deck for PPT, Video for Video) */}
      {activeFlipbookItem && (
        <ViewerModal
          item={activeFlipbookItem}
          onClose={() => setActiveFlipbookItem(null)}
        />
      )}

      {/* Request Modal */}
      {isRequestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0b0b0b] border border-neutral-800 rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl">
            <button
              onClick={() => setIsRequestModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 hover:bg-rose-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/30 rounded-full text-xs font-bold uppercase mb-4">
              <Send className="w-3.5 h-3.5" /> Direct Request Desk
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
              Request Customized Collateral
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed mb-6">
              Need tailored decks or architecture case studies for {title}? Submit your request below.
            </p>

            {requestSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-pulse" />
                <h4 className="text-lg font-bold text-white">Request Received</h4>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                  Our corporate communications desk will deliver your requested documents via email within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={requestFormData.name}
                    onChange={(e) => setRequestFormData({ ...requestFormData, name: e.target.value })}
                    placeholder="e.g., Sarah Jenkins"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={requestFormData.email}
                    onChange={(e) => setRequestFormData({ ...requestFormData, email: e.target.value })}
                    placeholder="s.jenkins@enterprise.com"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={requestFormData.company}
                    onChange={(e) => setRequestFormData({ ...requestFormData, company: e.target.value })}
                    placeholder="Global Systems Corp"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Additional Requirements</label>
                  <textarea
                    rows={3}
                    value={requestFormData.comments}
                    onChange={(e) => setRequestFormData({ ...requestFormData, comments: e.target.value })}
                    placeholder="Specify target region, industry focus, or specific metrics required..."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-rose-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-rose-900/40 mt-2 cursor-pointer"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
