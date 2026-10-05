import { Building2, Briefcase, Factory, Rocket, Cpu, BookOpen, FileText, Presentation, Video, Download, Sparkles, type LucideIcon } from "lucide-react";

export interface MarketingResourceItem {
  id: string;
  title: string;
  category: string;
  type: string;
  description?: string;
  fileUrl?: string;
  thumbnailUrl?: string;
  fileSize?: string;
  fileName?: string;
  tags?: string[];
  badge?: string;
  downloads?: number;
  updated_at?: string;
  created_at?: string;
}

export interface SectionConfig {
  id: string;
  category: string;
  navLabel: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  exploreLink?: string;
  exploreLabel?: string;
  layout?: "default" | "downloads" | "latest";
  derived?: boolean; // built from all items, never from admin category
}

// Single source of truth: navbar, grouping and rendering all derive from this.
export const SECTIONS: SectionConfig[] = [
  { id: "company-documents", category: "Company Documents", navLabel: "Company Decks", title: "Company documents & decks", subtitle: "Corporate profile, pitch presentations, capability statements and brand guidelines.", icon: Building2, exploreLink: "/marketing/company", exploreLabel: "Explore corporate" },
  { id: "service-brochures", category: "Service Brochures", navLabel: "Services", title: "Service practice brochures", subtitle: "Capability brochures across AI consulting, cloud modernization, DevOps and platform engineering.", icon: Briefcase, exploreLink: "/marketing/services", exploreLabel: "Explore services" },
  { id: "industry-brochures", category: "Industry Solutions", navLabel: "Industries", title: "Industry solution papers", subtitle: "Domain architectures for banking, healthcare, retail and logistics.", icon: Factory, exploreLink: "/marketing/industries", exploreLabel: "Explore industries" },
  { id: "platform-products", category: "Platform Datasheets", navLabel: "Platforms", title: "SaaS platform datasheets", subtitle: "Datasheets, API specifications and architecture overviews for our proprietary platforms.", icon: Rocket, exploreLink: "/marketing/platforms", exploreLabel: "Explore platforms" },
  { id: "technology-resources", category: "Technology Blueprints", navLabel: "Technology", title: "Technology blueprints & stack specs", subtitle: "Reference blueprints for multi-agent AI, zero-trust landing zones and Kafka pipelines.", icon: Cpu, exploreLink: "/marketing/technology", exploreLabel: "Explore technology" },
  { id: "case-studies", category: "Case Studies", navLabel: "Case Studies", title: "Enterprise case studies", subtitle: "Transformation stories and measurable ROI from global deployments.", icon: BookOpen, exploreLink: "/marketing/case-studies", exploreLabel: "Explore case studies" },
  { id: "whitepapers", category: "Whitepapers", navLabel: "Whitepapers", title: "Whitepapers & thought leadership", subtitle: "Engineering research, security benchmarks and modernization playbooks.", icon: FileText, exploreLink: "/marketing/whitepapers", exploreLabel: "Explore whitepapers" },
  { id: "presentations", category: "Presentations", navLabel: "Presentations", title: "Presentations & slide decks", subtitle: "Keynote decks, webinar slides and architecture workshops.", icon: Presentation },
  { id: "videos-webinars", category: "Videos", navLabel: "Videos", title: "Videos & technical webinars", subtitle: "Engineering demos, architecture walkthroughs and leadership keynotes.", icon: Video },
  { id: "downloads-library", category: "Downloads Library", navLabel: "Downloads Library", title: "Downloads library", subtitle: "The six most recent uploads, ready to download.", icon: Download, derived: true, layout: "downloads", exploreLink: "/marketing/downloads", exploreLabel: "View all downloads" },
  { id: "latest-timeline", category: "Latest Releases", navLabel: "Releases", title: "Latest releases", subtitle: "Fresh from the team. Tap the arrow to jump to where it lives.", icon: Sparkles, derived: true, layout: "latest", exploreLink: "/marketing/latest", exploreLabel: "View all releases" },
];

export const INITIAL_LIMIT = 6;
export const PDF_EXT = ["pdf"];
export const VIDEO_EXT = ["mp4", "mov", "webm", "m4v", "mkv"];
export const POPULAR = ["AI Services", "Cloud Migration", "Case Studies", "Whitepapers", "Banking"];

export const TYPE_STYLES: Record<string, string> = {
  PDF: "bg-red-500/10 text-red-300 border-red-500/30",
  PPT: "bg-orange-500/10 text-orange-300 border-orange-500/30",
  Word: "bg-blue-500/10 text-blue-300 border-blue-500/30",
  Video: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  Brochure: "bg-teal-500/10 text-teal-300 border-teal-500/30",
  Whitepaper: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
  "Case Study": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  Datasheet: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  Blueprint: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
};
