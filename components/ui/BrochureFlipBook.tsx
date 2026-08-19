"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import { 
  ChevronLeft, 
  ChevronRight, 
  Loader2, 
  Download, 
  Maximize2, 
  Minimize2, 
  X, 
  AlertCircle, 
  ExternalLink,
  ZoomIn,
  ZoomOut,
  ChevronUp
} from "lucide-react";

// ForwardRef page wrapper for react-pageflip (Clean white, zero mid darkness)
const FlipPage = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string; isCover?: boolean }>(
  ({ children, className = "" }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`page relative bg-white overflow-hidden select-none ${className}`}
      >
        {children}
      </div>
    );
  }
);
FlipPage.displayName = "FlipPage";

type BrochureFlipBookProps = {
  pdfUrl: string;
  pdfTitle?: string;
  pdfEdition?: string;
  pdfBrand?: string;
  onClose?: () => void;
};

// Safe browser loader for local PDF.js engine (immune to tracking prevention and CORS)
function loadLocalPdfJsEngine(): Promise<any> {
  if (typeof window === "undefined") return Promise.resolve(null);
  if ((window as any).pdfjsLib) return Promise.resolve((window as any).pdfjsLib);

  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src*="pdf.min.js"]');
    if (existing) {
      const timer = setInterval(() => {
        if ((window as any).pdfjsLib) {
          clearInterval(timer);
          const pdfjs = (window as any).pdfjsLib;
          pdfjs.GlobalWorkerOptions.workerSrc = "/vendor/pdfjs/pdf.worker.min.js";
          resolve(pdfjs);
        }
      }, 50);
      return;
    }

    const script = document.createElement("script");
    script.src = "/vendor/pdfjs/pdf.min.js";
    script.async = true;
    script.onload = () => {
      const pdfjs = (window as any).pdfjsLib;
      if (pdfjs) {
        pdfjs.GlobalWorkerOptions.workerSrc = "/vendor/pdfjs/pdf.worker.min.js";
        resolve(pdfjs);
      } else {
        reject(new Error("PDF.js failed to initialize"));
      }
    };
    script.onerror = () => {
      // Fallback to CDN if local file is missing
      const cdnScript = document.createElement("script");
      cdnScript.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
      cdnScript.onload = () => {
        const pdfjs = (window as any).pdfjsLib;
        if (pdfjs) {
          pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
          resolve(pdfjs);
        } else {
          reject(new Error("PDF.js CDN fallback failed"));
        }
      };
      cdnScript.onerror = () => reject(new Error("Failed to load PDF.js engine"));
      document.head.appendChild(cdnScript);
    };
    document.head.appendChild(script);
  });
}

export default function BrochureFlipBook({
  pdfUrl,
  pdfTitle = "Document",
  onClose
}: BrochureFlipBookProps) {
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadProgress, setLoadProgress] = useState<string>("Initializing document engine...");
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  
  // Dynamic Aspect Ratio
  const [pageRatio, setPageRatio] = useState<number>(0.707);
  const [isLandscapeDoc, setIsLandscapeDoc] = useState<boolean>(false);
  
  const [bookDimensions, setBookDimensions] = useState<{ width: number; height: number }>({ width: 460, height: 650 });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Zoom Controls state (Default 75%)
  const [zoomLevel, setZoomLevel] = useState<number>(0.75);

  // Auto-hide bottom controls state
  const [isDockVisible, setIsDockVisible] = useState<boolean>(true);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const flipBookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-hide activity tracker
  const handleUserActivity = useCallback(() => {
    setIsDockVisible(true);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      setIsDockVisible(false);
    }, 4000);
  }, []);

  useEffect(() => {
    handleUserActivity();
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [handleUserActivity]);

  // Resize listener adapting dynamically to A4 portrait, landscape, or custom size
  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const containerW = containerRef.current.clientWidth;
      const containerH = containerRef.current.clientHeight || window.innerHeight - 140;
      const mobile = containerW < 820;
      setIsMobile(mobile);

      const ratio = pageRatio || 0.707;
      const isLandscape = ratio > 1.15;
      setIsLandscapeDoc(isLandscape);

      if (mobile || isLandscape) {
        // Single page mode (Mobile or Landscape presentations)
        const maxW = Math.min(containerW - 32, isLandscape ? 850 : 480);
        const calcH = Math.round(maxW / ratio);
        const finalH = Math.min(calcH, containerH - 90);
        const finalW = Math.round(finalH * ratio);
        setBookDimensions({ width: finalW, height: finalH });
      } else {
        // Dual Spread Mode (Standard A4 Portrait book spread)
        const availableHeight = containerH - 100;
        const pageWByHeight = Math.round(availableHeight * ratio);
        const maxAllowedPageW = Math.floor((containerW - 60) / 2);
        
        const finalPageW = Math.min(pageWByHeight, maxAllowedPageW, 580);
        const finalPageH = Math.round(finalPageW / ratio);

        setBookDimensions({ width: finalPageW, height: finalPageH });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [pageRatio]);

  // Split and render each real page of the original PDF using PDF.js
  useEffect(() => {
    let isCancelled = false;

    async function renderPdfPages() {
      if (!pdfUrl) {
        setError("No PDF document attached");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      setPages([]);
      setZoomLevel(0.75);
      setLoadProgress("Loading PDF engine...");

      try {
        const pdfjs = await loadLocalPdfJsEngine();
        if (!pdfjs) throw new Error("Could not initialize PDF renderer");

        // Pass external / Azure Blob URLs through server-side proxy to bypass CORS
        const fetchTarget = pdfUrl.startsWith("http") 
          ? `/api/pdf-proxy?url=${encodeURIComponent(pdfUrl)}` 
          : pdfUrl;

        setLoadProgress("Fetching document stream...");
        const loadingTask = pdfjs.getDocument(fetchTarget);
        const pdf = await loadingTask.promise;

        const numPages = pdf.numPages;
        const renderedPages: string[] = [];

        // Detect aspect ratio from page 1
        const firstPage = await pdf.getPage(1);
        const initialViewport = firstPage.getViewport({ scale: 1.0 });
        const detectedRatio = initialViewport.width / initialViewport.height;
        if (!isCancelled) {
          setPageRatio(detectedRatio);
        }

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          if (isCancelled) return;

          setLoadProgress(`Extracting page ${pageNum} of ${numPages}...`);
          const page = await pdf.getPage(pageNum);

          // Render at 2x resolution for ultra-sharp text
          const viewport = page.getViewport({ scale: 2.0 });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          canvas.height = viewport.height;
          canvas.width = viewport.width;

          if (context) {
            await page.render({ canvasContext: context, viewport }).promise;
            renderedPages.push(canvas.toDataURL("image/png"));
          }
        }

        if (!isCancelled) {
          setPages(renderedPages);
          setLoading(false);
        }
      } catch (err: any) {
        console.error("PDF Flipbook render error:", err);
        if (!isCancelled) {
          setError(err.message || "Failed to render PDF document pages");
          setLoading(false);
        }
      }
    }

    renderPdfPages();

    return () => {
      isCancelled = true;
    };
  }, [pdfUrl]);

  const flipNext = () => {
    if (flipBookRef.current) {
      try {
        flipBookRef.current.pageFlip().flipNext();
      } catch (e) {
        console.warn(e);
      }
    }
  };

  const flipPrev = () => {
    if (flipBookRef.current) {
      try {
        flipBookRef.current.pageFlip().flipPrev();
      } catch (e) {
        console.warn(e);
      }
    }
  };

  const handleFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
    handleUserActivity();
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
    handleUserActivity();
  };

  const handleResetZoom = () => {
    setZoomLevel(0.75);
    handleUserActivity();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
    handleUserActivity();
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center gap-4 bg-zinc-950/90 rounded-3xl border border-zinc-800 my-auto">
        <AlertCircle size={38} className="text-rose-500" />
        <div>
          <h4 className="text-lg font-bold text-white font-sans">Unable to Render PDF Brochure</h4>
          <p className="text-xs text-zinc-400 max-w-sm mt-1 font-sans">{error}</p>
        </div>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold font-sans transition-colors flex items-center gap-2 shadow-lg cursor-pointer"
        >
          <Download size={15} /> Open Original PDF Directly
        </a>
      </div>
    );
  }

  // Display page numbers
  const getPageIndicator = () => {
    if (pages.length === 0) return "0 / 0";
    if (isMobile || isLandscapeDoc || currentPage === 0 || currentPage === pages.length - 1) {
      return `${currentPage + 1} / ${pages.length}`;
    }
    const rightPage = Math.min(currentPage + 2, pages.length);
    return `${currentPage + 1} - ${rightPage} / ${pages.length}`;
  };

  return (
    <div 
      ref={containerRef} 
      onMouseMove={handleUserActivity}
      onTouchStart={handleUserActivity}
      onClick={handleUserActivity}
      className="w-full h-full flex flex-col items-center justify-between select-none relative font-sans p-3 sm:p-5 overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      
      {/* ── TOP HEADER (Clean Title Only in Left + Zoom & Utility Controls) ── */}
      <div className="w-full max-w-6xl flex items-center justify-between z-20 pt-1 pb-2">
        {/* Left: Clean Simple Title Only */}
        <div className="flex items-center">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-tight truncate max-w-xs sm:max-w-md md:max-w-xl font-sans">
            {pdfTitle}
          </h2>
        </div>

        {/* Top Right: Zoom & Navigation Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Zoom Controls */}
          <div className="flex items-center bg-zinc-900/90 rounded-xl p-1 border border-zinc-800 shadow-lg">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.5}
              className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              title="Zoom Out (-)"
            >
              <ZoomOut size={15} />
            </button>
            <button
              onClick={handleResetZoom}
              className="px-2 text-[11px] font-bold text-zinc-300 hover:text-rose-400 transition-colors cursor-pointer"
              title="Reset Zoom to 75%"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2.5}
              className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              title="Zoom In (+)"
            >
              <ZoomIn size={15} />
            </button>
          </div>

          {pdfUrl && (
            <a
              href={pdfUrl}
              download={`${pdfTitle.replace(/\s+/g, "_")}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer border border-zinc-800 hidden sm:flex"
              title="Download PDF"
            >
              <Download size={15} />
            </a>
          )}

          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer border border-zinc-800 hidden sm:flex"
              title="Open in New Tab"
            >
              <ExternalLink size={15} />
            </a>
          )}

          <button
            onClick={toggleFullscreen}
            className="hidden sm:flex p-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer border border-zinc-800"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white transition-colors cursor-pointer shadow-lg ml-1"
              title="Close (Esc)"
            >
              <X size={17} />
            </button>
          )}
        </div>
      </div>

      {/* ── MAIN LARGE CENTERED BROCHURE CANVAS (Zero Mid Darkness) ── */}
      <div className="w-full flex-1 flex items-center justify-center relative overflow-auto py-2 my-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        
        {/* Soft Red / Orange Atmospheric Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-[radial-gradient(circle,rgba(225,29,72,0.14),rgba(234,88,12,0.06),transparent_70%)] blur-3xl pointer-events-none z-0" />

        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 bg-black/75 backdrop-blur-md rounded-3xl">
            <Loader2 size={44} className="text-rose-500 animate-spin" />
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-200 font-sans">
              {loadProgress}
            </p>
          </div>
        )}

        {/* ── 3D REACT-PAGEFLIP SPREAD (Zero Mid Darkness & Flat Pure White Pages) ── */}
        {pages.length > 0 && (
          <div 
            className="relative z-10 [perspective:2000px] transition-transform duration-200 ease-out origin-center"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <HTMLFlipBook
              width={bookDimensions.width}
              height={bookDimensions.height}
              size="fixed"
              minWidth={280}
              maxWidth={880}
              minHeight={380}
              maxHeight={950}
              maxShadowOpacity={0}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={handleFlip}
              ref={flipBookRef}
              className="flip-book shadow-[0_20px_60px_rgba(0,0,0,0.7)] mx-auto"
              style={{ margin: "0 auto" }}
              startPage={0}
              drawShadow={false}
              flippingTime={600}
              usePortrait={isMobile || isLandscapeDoc}
              startZIndex={0}
              autoSize={true}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={25}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {pages.map((pageDataUrl, index) => (
                <FlipPage key={`pdf_page_${index + 1}`} isCover={index === 0 || index === pages.length - 1}>
                  <div className="w-full h-full relative flex items-center justify-center bg-white overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pageDataUrl}
                      alt={`${pdfTitle} - Page ${index + 1}`}
                      className="w-full h-full object-contain pointer-events-none select-none"
                      draggable={false}
                    />
                  </div>
                </FlipPage>
              ))}
            </HTMLFlipBook>
          </div>
        )}
      </div>

      {/* ── AUTO-HIDE BOTTOM DOCK CONTROLLER ── */}
      {pages.length > 0 && (
        <div 
          className={`w-full max-w-xl flex items-center justify-between px-6 py-2.5 bg-[#0B0C10]/95 backdrop-blur-xl rounded-2xl shadow-2xl z-30 border border-zinc-800 transition-all duration-300 ${
            isDockVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-6 pointer-events-none"
          }`}
          onMouseEnter={() => setIsDockVisible(true)}
        >
          {/* Left: Previous Page Button */}
          <button
            disabled={currentPage === 0}
            onClick={flipPrev}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-zinc-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed bg-zinc-900 hover:bg-zinc-800 transition-colors cursor-pointer font-sans"
          >
            <ChevronLeft size={16} /> Prev
          </button>

          {/* Center: Live Page Number Display */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-bold text-white font-sans">
            <span className="text-rose-500">Page</span>
            <span>{getPageIndicator()}</span>
          </div>

          {/* Right: Next Page Button */}
          <button
            disabled={currentPage >= pages.length - 1}
            onClick={flipNext}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-zinc-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed bg-zinc-900 hover:bg-zinc-800 transition-colors cursor-pointer font-sans"
          >
            Next <ChevronRight size={16} />
          </button>

          {/* Secondary Action: Download Button */}
          {pdfUrl && (
            <a
              href={pdfUrl}
              download={`${pdfTitle.replace(/\s+/g, "_")}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-rose-400 hover:text-white bg-rose-500/10 hover:bg-rose-600 transition-colors cursor-pointer font-sans"
            >
              <Download size={14} /> Download
            </a>
          )}
        </div>
      )}

      {/* Dock Reveal Trigger Pill (appears when dock is hidden) */}
      {!isDockVisible && pages.length > 0 && (
        <button
          onClick={() => setIsDockVisible(true)}
          className="fixed bottom-3 z-30 px-3 py-1 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-[11px] font-bold text-zinc-400 hover:text-white flex items-center gap-1 shadow-2xl transition-all cursor-pointer animate-in fade-in"
        >
          <ChevronUp size={13} /> Controls
        </button>
      )}

    </div>
  );
}
