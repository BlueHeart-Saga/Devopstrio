"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  BookOpen, Download,
  FileText, Loader2, RotateCcw, X,
  ZoomIn, ZoomOut, Share2, Check,
} from "lucide-react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { CurvedPageTurn } from "./CurvedPageTurn";

export interface BrochureFlipBookProps {
  pdfUrl: string;
  pdfTitle?: string;
  pdfBrand?: string;
  pdfEdition?: string;
  onClose?: () => void;
  /** Optional original file URL when the preview PDF was converted from DOCX/PPTX. */
  originalFileUrl?: string;
}

type ViewMode = "flipbook" | "pdf";
type Direction = "next" | "prev";
type Asset = { canvas: HTMLCanvasElement; width: number; height: number; resolution: number };
type Dimensions = { width: number; height: number };
const TURN_MS = 900;
// Bound total canvas memory, while allowing crisp high-DPI output
const MAX_CACHED_PAGES = 50;
const MAX_RENDER_EDGE = 4096;
const MAX_CACHE_BYTES = 512 * 1024 * 1024;
function renderPixelBudget() {
  if (typeof window === "undefined") return 8_000_000;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  return window.innerWidth < 768 || memory <= 2 ? 6_000_000 : memory >= 8 ? 16_000_000 : 12_000_000;
}

/** Reuses a prerendered canvas without encoding its pixels to JPEG/data URL. */
function PageFace({ asset, label, onClick }: {
  asset?: Asset;
  label: string;
  onClick?: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const element = canvasRef.current;
    if (!element || !asset) return;
    element.width = asset.canvas.width;
    element.height = asset.canvas.height;
    const ctx = element.getContext("2d", { alpha: false });
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(asset.canvas, 0, 0);
    }
  }, [asset]);

  return (
    <div
      aria-label={label}
      onClick={onClick}
      className={`relative h-full w-full overflow-hidden bg-white ${onClick ? "cursor-pointer" : ""}`}
    >
      <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" style={{ imageRendering: "auto", transform: "translateZ(0)", backfaceVisibility: "hidden" }} />
      {!asset && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 text-zinc-500">
          <Loader2 className="h-5 w-5 animate-spin" />
        </div>
      )}
    </div>
  );
}

export function BrochureFlipBook({
  pdfUrl,
  pdfTitle = "Document Preview",
  pdfBrand = "Devopstrio",
  pdfEdition = "2026 EDITION",
  onClose,
  originalFileUrl,
}: BrochureFlipBookProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<PDFDocumentProxy | null>(null);
  const cacheRef = useRef(new Map<number, Asset>());
  const pendingRef = useRef(new Map<number, Promise<void>>());
  const metaRef = useRef(new Map<number, Dimensions>());
  const mountedRef = useRef(true);
  const generationRef = useRef(0);
  const turningRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [mode, setMode] = useState<ViewMode>("flipbook");
  const [zoom, setZoom] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  const [size, setSize] = useState({ width: 1, height: 1 });
  const [revision, setRevision] = useState(0);
  const [turn, setTurn] = useState<{ direction: Direction; from: number; to: number } | null>(null);
  const [copied, setCopied] = useState(false);


  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  useEffect(() => {
    let active = true;
    let task: { promise: Promise<PDFDocumentProxy>; destroy: () => Promise<void> } | undefined;
    setLoading(true);
    setError("");
    setPage(1);
    setZoom(1);
    setPdf(null);
    setTotal(0);
    generationRef.current += 1;
    cacheRef.current.clear();
    pendingRef.current.clear();
    metaRef.current.clear();
    setRevision(v => v + 1);

    const open = async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        const workerPath = typeof window !== "undefined"
          ? `${window.location.origin}/workers/pdf.worker.min.mjs`
          : "/workers/pdf.worker.min.mjs";
        pdfjs.GlobalWorkerOptions.workerSrc = workerPath;

        if (!active) return;

        // Resolve document URL: route external/Azure Blob URLs through same-origin secure proxy to prevent CORS blocks
        let targetUrl = pdfUrl;
        const isExternal = /^https?:\/\//i.test(pdfUrl);
        if (isExternal) {
          targetUrl = `/api/pdf-proxy?url=${encodeURIComponent(pdfUrl)}`;
        } else if (pdfUrl.startsWith("/") && typeof window !== "undefined") {
          targetUrl = `${window.location.origin}${pdfUrl}`;
        }

        const pdfVer = pdfjs.version || "4.10.38";
        try {
          task = pdfjs.getDocument({
            url: targetUrl,
            cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfVer}/cmaps/`,
            cMapPacked: true,
            standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfVer}/standard_fonts/`,
          });
          const document = await task.promise;
          if (!active) return;
          pdfRef.current = document;
          setPdf(document);
          setTotal(document.numPages);
          setLoading(false);
          return;
        } catch (firstErr) {
          console.warn("First PDF load attempt failed, trying fallback CDN worker:", firstErr);
          // Fallback to official CDN worker matching pdfjs-dist
          pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfVer}/build/pdf.worker.min.mjs`;
          task = pdfjs.getDocument({
            url: targetUrl,
            cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfVer}/cmaps/`,
            cMapPacked: true,
            standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfVer}/standard_fonts/`,
          });
          const document = await task.promise;
          if (!active) return;
          pdfRef.current = document;
          setPdf(document);
          setTotal(document.numPages);
          setLoading(false);
          return;
        }
      } catch (e: any) {
        if (!active) return;
        console.error("Cannot load document preview", e);
        setError(`Unable to open document: ${e?.message || "Check the preview URL and PDF.js worker."}`);
        setLoading(false);
      }
    };
    void open();
    return () => {
      active = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      turningRef.current = false;
      pdfRef.current = null;
      void task?.destroy().catch(() => undefined);
    };
  }, [pdfUrl, retry]);

  useEffect(() => {
    const element = stageRef.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      setSize({
        width: Math.max(1, Math.floor(entry.contentRect.width)),
        height: Math.max(1, Math.floor(entry.contentRect.height)),
      });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [mode]);

  useEffect(() => {
    const update = () => setFullscreen(document.fullscreenElement === rootRef.current);
    document.addEventListener("fullscreenchange", update);
    return () => document.removeEventListener("fullscreenchange", update);
  }, []);

  // Request native fullscreen automatically when opening
  useEffect(() => {
    const enterFs = async () => {
      try {
        if (typeof document !== "undefined" && !document.fullscreenElement && rootRef.current?.requestFullscreen) {
          await rootRef.current.requestFullscreen();
        }
      } catch {
        // Silently catch if browser user-gesture policy prevents auto-fullscreen
      }
    };
    void enterFs();
    return () => {
      if (typeof document !== "undefined" && document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    };
  }, []);

  const handleClose = useCallback(() => {
    if (typeof document !== "undefined" && document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    onClose?.();
  }, [onClose]);

  const single = size.width < 700;
  // Physical brochure pagination: cover 1, interior 2–3, 4–5, ...,
  // back cover N. For odd-sized documents, the penultimate page is
  // displayed individually so the final page can be a single back cover.
  const spreads = useMemo(() => {
    if (!total) return [] as number[][];
    if (single) return Array.from({ length: total }, (_, i) => [i + 1]);
    const result: number[][] = [[1]];
    let n = 2;
    while (n < total) {
      if (n + 1 < total) {
        result.push([n, n + 1]);
        n += 2;
      } else {
        // Penultimate single page if total is odd, leaving [total] as the back cover
        result.push([n]);
        n += 1;
      }
    }
    if (total > 1) {
      result.push([total]);
    }
    return result;
  }, [single, total]);
  const spreadIndex = Math.max(0, spreads.findIndex(group => group.includes(page)));
  const visible = spreads[spreadIndex] ?? [];
  const nextGroup = spreads[spreadIndex + 1] ?? null;
  const previousGroup = spreads[spreadIndex - 1] ?? null;
  const canPrev = !!previousGroup;
  const canNext = !!nextGroup;
  const spreadForIndex = useCallback((index: number): number[] => spreads[index] ?? [], [spreads]);

  // Request page metadata independently from images, preserving arbitrary page shapes.
  const metadata = useCallback(async (n: number): Promise<Dimensions> => {
    const cached = metaRef.current.get(n);
    if (cached) return cached;
    const document = pdfRef.current;
    if (!document) return { width: 595, height: 842 };
    const p = await document.getPage(n);
    const viewport = p.getViewport({ scale: 1 });
    const result = { width: viewport.width, height: viewport.height };
    metaRef.current.set(n, result);
    if (mountedRef.current) setRevision(x => x + 1);
    return result;
  }, []);

  const dims = (n: number): Dimensions => {
    if (n > total) return metaRef.current.get(Math.max(1, n - 1)) ?? { width: 595, height: 842 };
    return metaRef.current.get(n) ?? { width: 595, height: 842 };
  };

  // Scale pages uniformly to fit the viewport based on document page dimensions.
  // Using reference page 1 (or max dimensions) ensures the stage slot dimensions remain
  // completely stationary and rock-solid during page turns, preventing viewer jerking/shaking.
  const refDims = dims(1);
  const basePageWidth = refDims.width || 595;
  const basePageHeight = refDims.height || 842;
  const fullBookWidth = single ? basePageWidth : basePageWidth * 2;
  const margin = size.width < 768 ? 8 : 20; // Full screen maximized display
  const fitScale = Math.min(
    (size.width - margin * 2) / fullBookWidth,
    (size.height - margin * 2) / basePageHeight
  );
  const scale = Math.max(0.05, fitScale) * zoom;

  const loadPage = useCallback(async (n: number, targetScale: number) => {
    const pdfDoc = pdfRef.current;
    if (!pdfDoc || n < 1 || n > pdfDoc.numPages) return;
    const existing = cacheRef.current.get(n);
    const dpr = typeof window !== "undefined" ? (window.devicePixelRatio || 1) : 1;
    // Ultra-crisp rendering matching upload quality: minimum 2.5x - 3.2x resolution
    const targetResolution = Math.min(
      Math.max(2.5, targetScale * Math.max(dpr, 1.5) * 1.8),
      3.5
    );
    // Avoid repeating work unless new zoom/display size needs materially more detail.
    if (existing && existing.resolution >= targetResolution * 0.9) {
      cacheRef.current.delete(n);
      cacheRef.current.set(n, existing);
      return;
    }
    const pending = pendingRef.current.get(n);
    if (pending) return pending;

    const generation = generationRef.current;
    const task = (async () => {
      const pdfPage = await pdfDoc.getPage(n);
      const raw = pdfPage.getViewport({ scale: 1 });
      metaRef.current.set(n, { width: raw.width, height: raw.height });
      let resolution = targetResolution;
      resolution = Math.min(resolution, MAX_RENDER_EDGE / Math.max(raw.width, raw.height));
      resolution = Math.min(resolution, Math.sqrt(renderPixelBudget() / (raw.width * raw.height)));
      resolution = Math.max(resolution, 1.8);
      const viewport = pdfPage.getViewport({ scale: resolution });
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(viewport.width));
      canvas.height = Math.max(1, Math.round(viewport.height));
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) throw new Error("Unable to create canvas");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      await (pdfPage.render as any)({ canvasContext: ctx, viewport, intent: "display" }).promise;
      if (pdfRef.current !== pdfDoc || generationRef.current !== generation) return;
      cacheRef.current.set(n, { canvas, width: raw.width, height: raw.height, resolution });
      // Account for RGBA canvas storage, not just number of pages.
      const cacheBytes = () => Array.from(cacheRef.current.values()).reduce(
        (sum, item) => sum + item.canvas.width * item.canvas.height * 4, 0
      );
      while (cacheRef.current.size > 1 &&
        (cacheRef.current.size > MAX_CACHED_PAGES || cacheBytes() > MAX_CACHE_BYTES)) {
        const oldest = cacheRef.current.keys().next().value;
        if (oldest === undefined) break;
        cacheRef.current.delete(oldest);
      }
      if (mountedRef.current) setRevision(x => x + 1);
    })();
    pendingRef.current.set(n, task);
    try { await task; } finally { pendingRef.current.delete(n); }
  }, []);

  // First paint only the visible spread, then quietly prepare two neighboring spreads.
  useEffect(() => {
    if (!pdf || mode !== "flipbook" || total < 1) return;
    let cancelled = false;
    const near = Array.from(new Set([
      ...spreadForIndex(spreadIndex),
      ...spreadForIndex(spreadIndex + 1),
      ...spreadForIndex(spreadIndex + 2),
      ...spreadForIndex(spreadIndex - 1),
    ])).filter(n => n >= 1 && n <= total);
    const run = async () => {
      const first = spreadForIndex(spreadIndex).filter(n => n <= total);
      await Promise.all(first.map(n => metadata(n)));
      if (cancelled) return;
      await Promise.all(first.map(n => loadPage(n, scale)));
      if (cancelled) return;
      // Neighboring pages render concurrently (with controlled concurrency) so
      // page turns usually reuse their cached canvas rather than showing spinners.
      const candidates = near.filter(n => !first.includes(n));
      for (let index = 0; index < candidates.length && !cancelled; index += 2) {
        await Promise.all(candidates.slice(index, index + 2).map(async n => {
          await metadata(n);
          if (!cancelled) await loadPage(n, scale);
        }));
      }
    };
    void run().catch(e => console.warn("PDF page prefetch error", e));
    return () => { cancelled = true; };
    // revision reflects cache updates, not a reason to restart prefetch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf, mode, spreadIndex, total, single, Math.round(scale * 10), metadata, loadPage, spreadForIndex]);

  const navigate = useCallback(async (direction: Direction) => {
    if (turningRef.current || !pdfRef.current || total < 1) return;
    const destinationIndex = spreadIndex + (direction === "next" ? 1 : -1);
    const needed = spreadForIndex(destinationIndex);
    if (!needed.length) return;
    turningRef.current = true;
    try {
      await Promise.all(needed.map(n => metadata(n)));
      await Promise.all(needed.map(n => loadPage(n, scale)));
      if (!mountedRef.current) return;
      setTurn({ direction, from: spreadIndex, to: destinationIndex });

    } catch (e) {
      console.warn("Unable to prepare next spread", e);
      turningRef.current = false;
    }
  }, [spreadIndex, total, scale, spreadForIndex, loadPage, metadata]);

  useEffect(() => {
    if (mode !== "flipbook") return;
    const handle = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLElement && /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
      if (event.key === "ArrowRight") { event.preventDefault(); void navigate("next"); }
      if (event.key === "ArrowLeft") { event.preventDefault(); void navigate("prev"); }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [mode, navigate]);

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await rootRef.current?.requestFullscreen();
    } catch (e) { console.warn("Fullscreen not supported", e); }
  };

  const shown = (n: number) => cacheRef.current.get(n);
  const fromSpread = turn ? spreadForIndex(turn.from) : visible;
  const toSpread = turn ? spreadForIndex(turn.to) : visible;
  const isTurnNext = turn?.direction === "next";
  const activePage = turn ? (isTurnNext ? fromSpread[fromSpread.length - 1] : fromSpread[0]) : undefined;
  // The turning sheet reverse face is the destination-facing page.
  const backPage = turn ? (isTurnNext ? toSpread[0] : toSpread[toSpread.length - 1]) : undefined;
  const baseSpread = turn ? toSpread : visible;
  // Keep the stationary page from the source spread visible under the curl.
  const stationarySlots: (number | undefined)[] = !turn ? [] : isTurnNext
    ? [fromSpread.length > 1 ? fromSpread[0] : undefined, toSpread.length > 1 ? toSpread[toSpread.length - 1] : undefined]
    : [toSpread.length > 1 ? toSpread[0] : undefined, fromSpread.length > 1 ? fromSpread[fromSpread.length - 1] : undefined];
  const layoutPages = turn ? Array.from(new Set([...fromSpread, ...toSpread])) : visible;
  const layoutDims = layoutPages.map(dims);
  const layoutHeight = Math.max(1, ...layoutDims.map(p => p.height));
  const slotWidth = basePageWidth * scale;
  const bookSlots = single ? 1 : 2;
  const displayBookWidth = bookSlots * slotWidth;
  const displayBookHeight = basePageHeight * scale;
  const turnWidth = slotWidth;

  const effectiveFileUrl = originalFileUrl || pdfUrl;
  const cleanDocName = `${(pdfTitle || "document").replace(/[^a-zA-Z0-9_-]/g, "_")}.pdf`;

  let blobFileParam = "";
  const blobMatch = effectiveFileUrl.match(/marketingstorein\.blob\.core\.windows\.net\/devopstrio\/uploads\/(.*)/i);
  if (blobMatch) {
    blobFileParam = blobMatch[1];
  }

  const secureDownloadUrl = blobFileParam
    ? `/documents/${encodeURIComponent(cleanDocName)}?file=${encodeURIComponent(blobFileParam)}&download=true`
    : `/api/pdf-proxy?url=${encodeURIComponent(effectiveFileUrl)}&filename=${encodeURIComponent(cleanDocName)}&download=true`;

  const secureShareUrl = typeof window !== "undefined"
    ? `${window.location.origin}${blobFileParam ? `/documents/${encodeURIComponent(cleanDocName)}?file=${encodeURIComponent(blobFileParam)}` : `/api/pdf-proxy?url=${encodeURIComponent(effectiveFileUrl)}&filename=${encodeURIComponent(cleanDocName)}`}`
    : effectiveFileUrl;

  const rawInlinePdfUrl = blobFileParam
    ? `/documents/${encodeURIComponent(cleanDocName)}?file=${encodeURIComponent(blobFileParam)}`
    : effectiveFileUrl.startsWith("http://") || effectiveFileUrl.startsWith("https://")
    ? `/api/pdf-proxy?url=${encodeURIComponent(effectiveFileUrl)}&filename=${encodeURIComponent(cleanDocName)}`
    : effectiveFileUrl;
  const viewerPdfUrl = `${rawInlinePdfUrl.split("#")[0]}#toolbar=1&navpanes=1`;

  return (
    <div ref={rootRef} className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-[#DDDDDD] font-sans text-white">
      <header className="z-30 flex min-h-14 shrink-0 flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-[#090909] px-3 py-2 sm:px-6">
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-sm font-semibold sm:text-base" title={pdfTitle}>{pdfTitle}</h2>
          <p className="hidden truncate text-[11px] text-zinc-500 sm:block">{pdfBrand} · {pdfEdition}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <div className="flex rounded-lg border border-white/10 bg-zinc-900 p-1" aria-label="Document view mode">
            <button type="button" onClick={() => setMode("flipbook")} aria-pressed={mode === "flipbook"} className={`rounded-md px-2.5 py-1.5 text-xs font-medium ${mode === "flipbook" ? "bg-rose-600" : "text-zinc-400 hover:text-white"}`}><BookOpen className="mr-1 inline h-3.5 w-3.5" />Flipbook</button>
            <button type="button" onClick={() => setMode("pdf")} aria-pressed={mode === "pdf"} className={`rounded-md px-2.5 py-1.5 text-xs font-medium ${mode === "pdf" ? "bg-rose-600" : "text-zinc-400 hover:text-white"}`}><FileText className="mr-1 inline h-3.5 w-3.5" />PDF View</button>
          </div>
          {mode === "flipbook" && (
            <div className="hidden items-center rounded-lg border border-white/10 bg-zinc-900 sm:flex">
              <button type="button" aria-label="Zoom out" onClick={() => setZoom(z => Math.max(0.5, z - 0.25))} className="p-2"><ZoomOut size={16} /></button>
              <span className="min-w-12 text-center text-xs">{Math.round(zoom * 100)}%</span>
              <button type="button" aria-label="Zoom in" onClick={() => setZoom(z => Math.min(2, z + 0.25))} className="p-2"><ZoomIn size={16} /></button>
            </div>
          )}
          <button
            type="button"
            onClick={async () => {
              if (navigator.share) {
                try {
                  await navigator.share({ title: pdfTitle, url: secureShareUrl });
                  return;
                } catch {
                  // Fall back to clipboard if user cancelled or unsupported
                }
              }
              if (navigator.clipboard) {
                await navigator.clipboard.writeText(secureShareUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }
            }}
            aria-label="Share document link"
            title={copied ? "Link copied!" : "Share document link"}
            className={`rounded-lg p-2.5 transition-colors ${copied ? "bg-emerald-600 text-white" : "bg-zinc-900 text-zinc-300 hover:text-white"}`}
          >
            {copied ? <Check size={16} /> : <Share2 size={16} />}
          </button>
          <a href={secureDownloadUrl} download={cleanDocName} aria-label="Download original document" title="Download document" className="rounded-lg bg-zinc-900 p-2.5 text-zinc-300 hover:text-white"><Download size={16}/></a>
          {onClose && <button type="button" onClick={handleClose} aria-label="Close document" title="Close" className="rounded-lg bg-rose-600 p-2.5 text-white hover:bg-rose-500"><X size={16}/></button>}
        </div>
      </header>

      <main className="relative min-h-0 flex-1 overflow-hidden">
        {mode === "pdf" ? (
          <div className="relative h-full w-full bg-[#18181b]">
            <object
              data={viewerPdfUrl}
              type="application/pdf"
              className="h-full w-full border-0"
              title={pdfTitle}
            >
              <iframe
                src={viewerPdfUrl}
                className="h-full w-full border-0"
                title={pdfTitle}
              >
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center text-zinc-300">
                  <p className="text-sm">Your browser does not support embedded PDF viewing.</p>
                  <a
                    href={rawInlinePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-500"
                  >
                    Open PDF in New Tab
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        ) : (
          <div ref={stageRef} className="relative h-full w-full overflow-hidden bg-[#DDDDDD]">
            {loading ? (
              <div className="flex h-full items-center justify-center gap-2 text-sm text-zinc-700"><Loader2 className="h-5 w-5 animate-spin"/>Opening document…</div>
            ) : error ? (
              <div role="alert" className="flex h-full flex-col items-center justify-center gap-4"><span>{error}</span><button className="rounded bg-rose-600 px-4 py-2" onClick={() => setRetry(n => n + 1)}><RotateCcw className="mr-2 inline h-4 w-4"/>Retry</button></div>
            ) : pdf ? (
              <div className="flex min-h-full min-w-full items-center justify-center px-2 py-3">
                <div className="relative flex shrink-0 shadow-[0_12px_25px_rgba(0,0,0,.28)]" style={{ width: displayBookWidth, height: displayBookHeight, perspective: "1800px" }}>
                  {/* The cover sits on the right half, the back cover on the left. */}
                  {Array.from({ length: bookSlots }, (_, slot) => {
                    const isCover = baseSpread.length === 1;
                    const side = single ? 0 : isCover ? (baseSpread[0] === 1 ? 1 : 0) : slot;
                    const number = turn && !single ? stationarySlots[slot] : single ? baseSpread[0] : isCover ? (slot === side ? baseSpread[0] : undefined) : baseSpread[slot];
                    return <div key={`slot-${slot}-${number ?? "blank"}`} className="relative h-full shrink-0" style={{ width: slotWidth, background: number ? "white" : "transparent", boxShadow: number ? "0 8px 16px rgba(0,0,0,.12)" : "none" }}>
                      {number && <PageFace asset={shown(number)} label={`Page ${number}`} onClick={() => {
                        if (single) {
                          void navigate(canNext ? "next" : "prev");
                        } else if (isCover) {
                          // Front cover on right slot advances forward; back cover on left slot goes backward
                          if (baseSpread[0] === 1) void navigate("next");
                          else void navigate("prev");
                        } else {
                          // Left half always turns backward; right half always turns forward
                          if (slot === 0) void navigate("prev");
                          else void navigate("next");
                        }
                      }} />}
                    </div>;
                  })}
                  {turn && activePage && backPage && shown(activePage) && shown(backPage) && (
                    <div className="pointer-events-none absolute inset-0 z-20" style={{ left: !single && isTurnNext ? slotWidth : 0, width: slotWidth, height: "100%" }}>
                      <CurvedPageTurn
                        key={`${turn.from}-${turn.to}`}
                        direction={turn.direction}
                        front={shown(activePage)!}
                        back={shown(backPage)!}
                        width={slotWidth}
                        height={displayBookHeight}
                        onFinished={() => {
                          setPage(toSpread[0]);
                          setTurn(null);
                          turningRef.current = false;
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        )}
      </main>

    </div>
  );
}

export default BrochureFlipBook;
