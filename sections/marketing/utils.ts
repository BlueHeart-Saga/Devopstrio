import { MarketingResourceItem, PDF_EXT, VIDEO_EXT } from "./config";

export const PPT_EXT = ["ppt", "pptx", "pps", "ppsx", "key"];
export const DOC_EXT = ["doc", "docx", "rtf", "txt"];

export const getExt = (url?: string) =>
  (url || "").split("?")[0].split("#")[0].split(".").pop()?.toLowerCase() || "";

export const isVideo = (i: MarketingResourceItem) =>
  i.type === "Video" || VIDEO_EXT.includes(getExt(i.fileUrl)) || VIDEO_EXT.includes(getExt(i.fileName));

export const isPpt = (i: MarketingResourceItem) =>
  i.type === "PPT" || PPT_EXT.includes(getExt(i.fileUrl)) || PPT_EXT.includes(getExt(i.fileName));

export const isDoc = (i: MarketingResourceItem) =>
  i.type === "Word" || DOC_EXT.includes(getExt(i.fileUrl)) || DOC_EXT.includes(getExt(i.fileName));

export const isPdf = (i: MarketingResourceItem) =>
  !isVideo(i);

export const canPreview = (_i: MarketingResourceItem) => true;

export function normalize(raw: any): MarketingResourceItem {
  return {
    id: String(raw.id || raw._id),
    title: raw.title || "Untitled",
    category: raw.category,
    type: raw.type || "PDF",
    description: raw.description,
    fileUrl: raw.fileUrl || undefined,
    thumbnailUrl: raw.thumbnailUrl || undefined,
    fileSize: raw.fileSize || undefined,
    fileName: raw.fileName,
    tags: Array.isArray(raw.tags) ? raw.tags : [],
    badge: raw.badge || (raw.featured ? "Featured" : undefined),
    downloads: raw.downloads || 0,
    updated_at: raw.updated_at,
    created_at: raw.created_at || raw.createdAt,
  };
}

export const fmtDate = (d?: string) => {
  if (!d) return "";
  const t = new Date(d);
  return isNaN(+t) ? "" : t.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

// Upload time: created date, else the timestamp embedded in MongoDB ObjectId, else updated date.
export const uploadedAt = (i: MarketingResourceItem): number => {
  const c = i.created_at ? +new Date(i.created_at) : NaN;
  if (!isNaN(c)) return c;
  if (/^[0-9a-f]{24}$/i.test(i.id)) {
    try {
      return parseInt(i.id.slice(0, 8), 16) * 1000;
    } catch {
      // fallback
    }
  }
  const u = i.updated_at ? +new Date(i.updated_at) : NaN;
  return isNaN(u) ? 0 : u;
};

export const newestFirst = (a: MarketingResourceItem, b: MarketingResourceItem) => uploadedAt(b) - uploadedAt(a);
export const oldestFirst = (a: MarketingResourceItem, b: MarketingResourceItem) => uploadedAt(a) - uploadedAt(b);
