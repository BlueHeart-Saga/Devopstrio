"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Briefcase,
  Factory,
  Rocket,
  Cpu,
  BookOpen,
  FileText,
  Presentation,
  Video,
  Download,
  Handshake,
  Newspaper,
  Layers,
  Sparkles,
  Eye,
  CheckCircle2,
  X,
  Share2,
  Send,
} from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

// Section Components
import { MarketingHero } from "@/sections/marketing/MarketingHero";
import { ResourceSearchFilter } from "@/sections/marketing/ResourceSearchFilter";
import { MarketingCategories } from "@/sections/marketing/MarketingCategories";
import { FeaturedResourcesSection } from "@/sections/marketing/FeaturedResourcesSection";
import { CompanyDocumentsSection } from "@/sections/marketing/CompanyDocumentsSection";
import { ServiceBrochuresSection } from "@/sections/marketing/ServiceBrochuresSection";
import { IndustryBrochuresSection } from "@/sections/marketing/IndustryBrochuresSection";
import { PlatformProductsSection } from "@/sections/marketing/PlatformProductsSection";
import { TechnologyResourcesSection } from "@/sections/marketing/TechnologyResourcesSection";
import { CaseStudiesSection } from "@/sections/marketing/CaseStudiesSection";
import { WhitepapersSection } from "@/sections/marketing/WhitepapersSection";
import { PresentationsSection } from "@/sections/marketing/PresentationsSection";
import { VideosSection } from "@/sections/marketing/VideosSection";
import { DownloadsLibrarySection } from "@/sections/marketing/DownloadsLibrarySection";
import { LatestTimelineSection } from "@/sections/marketing/LatestTimelineSection";
import { MarketingCTA } from "@/sections/marketing/MarketingCTA";

// Navigation section list for sticky SectionNavbar
const marketingSections = [
  { id: "categories-sec", label: "Categories" },
  { id: "featured-resources", label: "Featured" },
  { id: "company-documents", label: "Company Decks" },
  { id: "service-brochures", label: "Services" },
  { id: "industry-brochures", label: "Industries" },
  { id: "platform-products", label: "Platforms" },
  { id: "technology-resources", label: "Technology" },
  { id: "case-studies", label: "Case Studies" },
  { id: "whitepapers", label: "Whitepapers" },
  { id: "presentations", label: "Presentations" },
  { id: "videos-webinars", label: "Videos" },
  { id: "downloads-library", label: "Downloads Library" },
  { id: "latest-timeline", label: "Releases" },
];

interface ResourceItem {
  id: string;
  title: string;
  type: "PDF" | "PPT" | "Word" | "Video" | "Brochure" | "Whitepaper" | "Case Study" | "Datasheet";
  category: string;
  size: string;
  updated: string;
  description: string;
  downloads: number;
  badge?: string;
  image?: string;
  link?: string;
}

export function MarketingPageClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [previewItem, setPreviewItem] = useState<ResourceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [requestFormData, setRequestFormData] = useState({
    name: "",
    email: "",
    company: "",
    resourceNeeded: "Custom Enterprise Pitch Deck",
    comments: "",
  });

  const [dbResources, setDbResources] = useState<ResourceItem[]>([]);

  useEffect(() => {
    const fetchBackendResources = async () => {
      try {
        const res = await fetch("/api/marketing-resources");
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data)) {
          const mapped: ResourceItem[] = data
            .filter((item: any) => item.status === "published" || !item.status)
            .map((item: any) => ({
              id: item.id,
              title: item.title,
              type: (item.type || "PDF") as any,
              category: item.category,
              size: item.fileSize || "File",
              updated: item.updated_at
                ? new Date(item.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })
                : "Recent",
              description: item.description,
              downloads: item.downloads || 0,
              badge: item.badge || (item.featured ? "FEATURED" : undefined),
              image: item.thumbnailUrl || undefined,
              link: item.fileUrl || undefined,
            }));
          setDbResources(mapped);
        }
      } catch (err) {
        console.error("Failed to load marketing resources:", err);
      }
    };
    fetchBackendResources();
  }, []);

  const handleDownload = (item: ResourceItem) => {
    setToastMessage(`Downloading "${item.title}"...`);
    setTimeout(() => setToastMessage(null), 3500);

    if (item.link) {
      const a = document.createElement("a");
      a.href = item.link;
      a.download = item.title;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const handleShare = (item: ResourceItem) => {
    if (navigator.share) {
      navigator
        .share({
          title: item.title,
          text: item.description,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setToastMessage("Resource link copied to clipboard!");
      setTimeout(() => setToastMessage(null), 3000);
    }
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
        resourceNeeded: "Custom Enterprise Pitch Deck",
        comments: "",
      });
      setToastMessage("Resource request submitted! Our collateral team will follow up shortly.");
      setTimeout(() => setToastMessage(null), 4000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#030303] text-gray-100 font-sans selection:bg-rose-500/30">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-rose-600 text-white px-5 py-3 rounded-xl shadow-2xl border border-rose-400/30 flex items-center gap-3 animate-bounce font-medium text-sm">
          <Sparkles className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Hero Banner */}
      <MarketingHero onRequestCustomDeck={() => setIsRequestModalOpen(true)} />

      {/* Sticky Secondary Navigation Bar */}
      <SectionNavbar sections={marketingSections} />

      {/* 2. Global Search & Resource Type Filter */}
      <ResourceSearchFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />

      {/* 3. Category Tiles Overview Grid */}
      <section id="categories-sec">
        <MarketingCategories />
      </section>

      {/* 4. Featured Enterprise Assets Showcase */}
      <section id="featured-resources">
        <FeaturedResourcesSection
          onPreview={setPreviewItem}
          onDownload={handleDownload}
          onShare={handleShare}
        />
      </section>

      {/* 5. Company Corporate Presentation Decks */}
      <section id="company-documents">
        <CompanyDocumentsSection
          onPreview={setPreviewItem}
          onDownload={handleDownload}
          onShare={handleShare}
        />
      </section>

      {/* 6. Service Practice Area Solutions Briefs */}
      <section id="service-brochures">
        <ServiceBrochuresSection
          onPreview={setPreviewItem}
          onDownload={handleDownload}
          onShare={handleShare}
        />
      </section>

      {/* 7. Industry Specific Collateral */}
      <section id="industry-brochures">
        <IndustryBrochuresSection
          onPreview={setPreviewItem}
          onDownload={handleDownload}
          onShare={handleShare}
        />
      </section>

      {/* 8. SaaS Products & Platform Datasheets */}
      <section id="platform-products">
        <PlatformProductsSection
          onPreview={setPreviewItem}
          onDownload={handleDownload}
          onShare={handleShare}
        />
      </section>

      {/* 9. Technology Stack Manifests & Arch Specs */}
      <section id="technology-resources">
        <TechnologyResourcesSection
          onPreview={setPreviewItem}
          onDownload={handleDownload}
          onShare={handleShare}
        />
      </section>

      {/* 10. Documented Enterprise Case Studies */}
      <section id="case-studies">
        <CaseStudiesSection
          onPreview={setPreviewItem}
          onDownload={handleDownload}
          onShare={handleShare}
        />
      </section>

      {/* 11. Technical Whitepapers & Research Reports */}
      <section id="whitepapers">
        <WhitepapersSection
          onPreview={setPreviewItem}
          onDownload={handleDownload}
          onShare={handleShare}
        />
      </section>

      {/* 12. Corporate Pitch Presentations & Slide Decks */}
      <section id="presentations">
        <PresentationsSection
          onPreview={setPreviewItem}
          onDownload={handleDownload}
          onShare={handleShare}
        />
      </section>

      {/* 13. Webinars & Video Content */}
      <section id="videos-webinars">
        <VideosSection
          onPreview={setPreviewItem}
          onDownload={handleDownload}
          onShare={handleShare}
        />
      </section>

      {/* 14. Full Downloadable File Repository Matrix */}
      <section id="downloads-library">
        <DownloadsLibrarySection
          searchQuery={searchQuery}
          selectedType={selectedType}
          dbResources={dbResources}
          onPreview={setPreviewItem}
          onDownload={handleDownload}
          onShare={handleShare}
        />
      </section>

      {/* 15. Latest Releases Timeline */}
      <section id="latest-timeline">
        <LatestTimelineSection
          onPreview={setPreviewItem}
          onDownload={handleDownload}
        />
      </section>

      {/* 16. Bottom Enterprise CTA Banner */}
      <MarketingCTA onRequestCustomDeck={() => setIsRequestModalOpen(true)} />

      {/* Resource Quick Preview Modal */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0b0b0b] border border-neutral-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900/80 hover:bg-rose-600 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {previewItem.image ? (
              <div className="relative h-56 w-full bg-neutral-950">
                <Image
                  src={previewItem.image}
                  alt={previewItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-black/30" />
                {previewItem.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-rose-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {previewItem.badge}
                  </span>
                )}
              </div>
            ) : (
              <div className="p-8 pb-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/30 rounded-full text-xs font-bold uppercase mb-4">
                  <FileText className="w-3.5 h-3.5" />
                  {previewItem.type} • {previewItem.category}
                </div>
              </div>
            )}

            <div className="p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {previewItem.title}
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {previewItem.description}
              </p>

              <div className="grid grid-cols-3 gap-3 p-4 bg-neutral-900/60 rounded-2xl border border-neutral-850 text-xs">
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase font-mono">Format</span>
                  <span className="text-neutral-200 font-semibold">{previewItem.type}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase font-mono">File Size</span>
                  <span className="text-neutral-200 font-semibold">{previewItem.size}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase font-mono">Last Updated</span>
                  <span className="text-neutral-200 font-semibold">{previewItem.updated}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    handleDownload(previewItem);
                    setPreviewItem(null);
                  }}
                  className="w-full sm:w-1/2 py-3.5 px-5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-900/30"
                >
                  <Download className="w-4 h-4" /> Download Resource
                </button>
                <button
                  onClick={() => handleShare(previewItem)}
                  className="w-full sm:w-1/2 py-3.5 px-5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Share2 className="w-4 h-4" /> Share Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Request Custom Collateral Modal */}
      {isRequestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0b0b0b] border border-neutral-800 rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl">
            <button
              onClick={() => setIsRequestModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 hover:bg-rose-600 transition-colors"
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
              Need tailored benchmark decks, co-branded pitch sheets, or NDA-protected architecture case studies? Submit your request below.
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
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Resource Type Requested</label>
                  <select
                    value={requestFormData.resourceNeeded}
                    onChange={(e) => setRequestFormData({ ...requestFormData, resourceNeeded: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500 transition-colors"
                  >
                    <option value="Custom Enterprise Pitch Deck">Custom Enterprise Pitch Deck</option>
                    <option value="Co-Branded Executive Brief">Co-Branded Executive Brief</option>
                    <option value="NDA Architecture Case Study">NDA Architecture Case Study</option>
                    <option value="Security & Compliance Audit Sheet">Security & Compliance Audit Sheet</option>
                    <option value="SaaS Product API Specification">SaaS Product API Specification</option>
                  </select>
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
                  className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-rose-900/40 mt-2"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
