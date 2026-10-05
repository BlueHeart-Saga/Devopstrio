"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, Sparkles, AlertTriangle, RefreshCw } from "lucide-react";
import { MarketingResourceItem, SECTIONS, INITIAL_LIMIT } from "./config";
import { getExt, normalize, newestFirst, oldestFirst } from "./utils";
import { useDebounced, useToast } from "./hooks";
import { SkeletonGrid } from "./SkeletonGrid";
import { MarketingHero } from "./MarketingHero";
import { CategoryBlock } from "./CategoryBlock";
import { RequestModal } from "./RequestModal";
import { ViewerModal } from "./ViewerModal";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

export default function MarketingPage() {
  const [resources, setResources] = useState<MarketingResourceItem[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<MarketingResourceItem | null>(null);
  const [requestOpen, setRequestOpen] = useState(false);
  const [revealId, setRevealId] = useState<string | null>(null);
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const highlightTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const router = useRouter();
  const toast = useToast();
  const debounced = useDebounced(query, 250);
  const closeRequest = useCallback(() => setRequestOpen(false), []);
  const closeViewer = useCallback(() => setActive(null), []);
  const handlePreview = useCallback((item: MarketingResourceItem) => setActive(item), []);

  useEffect(() => () => {
    if (highlightTimer.current) clearTimeout(highlightTimer.current);
  }, []);

  // fetch with abort + retry
  const load = useCallback((signal?: AbortSignal) => {
    setStatus("loading");
    fetch("/api/marketing-resources", { signal })
      .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("bad payload");
        setResources(data.filter((i: any) => !i.status || i.status === "published").map(normalize));
        setStatus("ready");
      })
      .catch((err) => { if (err?.name !== "AbortError") setStatus("error"); });
  }, []);

  useEffect(() => {
    const ctrl = new AbortController();
    load(ctrl.signal);
    return () => ctrl.abort();
  }, [load]);

  // URL sync: ?q=cloud
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
  }, []);
  useEffect(() => {
    const url = new URL(window.location.href);
    if (debounced.trim()) url.searchParams.set("q", debounced.trim());
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url);
  }, [debounced]);

  const searching = debounced.trim().length > 0;

  // category -> items (derived sections built from all items)
  const grouped = useMemo(() => {
    const q = debounced.trim().toLowerCase();
    const match = (i: MarketingResourceItem) =>
      !q ||
      i.title.toLowerCase().includes(q) ||
      i.description?.toLowerCase().includes(q) ||
      i.category.toLowerCase().includes(q) ||
      i.tags?.some((t) => t.toLowerCase().includes(q));

    // Normal sections: oldest upload first (ascending).
    // Downloads Library & Latest: newest upload first (descending).
    const byCat = new Map<string, MarketingResourceItem[]>();
    [...resources].sort(oldestFirst).filter(match).forEach((i) =>
      byCat.set(i.category, [...(byCat.get(i.category) || []), i])
    );
    const newest = [...resources].sort(newestFirst);

    const map: Record<string, MarketingResourceItem[]> = {};
    SECTIONS.forEach((s) => {
      if (s.id === "downloads-library") map[s.id] = searching ? [] : newest;
      else if (s.id === "latest-timeline") map[s.id] = searching ? [] : newest;
      else map[s.id] = byCat.get(s.category) || [];
    });
    return map;
  }, [resources, debounced, searching]);

  // hide empty sections everywhere (page + navbar)
  const visibleSections = useMemo(() => SECTIONS.filter((s) => grouped[s.id]?.length), [grouped]);
  const navTabs = useMemo(() => visibleSections.map((s) => ({ id: s.id, label: s.navLabel })), [visibleSections]);
  const matchCount = useMemo(
    () => visibleSections.filter((s) => !s.derived).reduce((n, s) => n + grouped[s.id].length, 0),
    [visibleSections, grouped]
  );

  const stats = useMemo(() => ({
    resources: resources.length,
    categories: SECTIONS.filter((s) => !s.derived && resources.some((r) => r.category === s.category)).length,
    formats: new Set(resources.map((r) => r.type)).size,
  }), [resources]);

  const covers = useMemo(
    () => [...resources].filter((r) => r.thumbnailUrl).sort(newestFirst).slice(0, 3),
    [resources]
  );

  const submitSearch = useCallback(() => {
    const first = visibleSections.find((s) => !s.derived);
    if (!query.trim()) return;
    if (first) {
      const el = document.getElementById(first.id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
      toast.show(`${matchCount} result${matchCount === 1 ? "" : "s"} for "${query.trim()}"`);
    } else {
      toast.show(`No results for "${query.trim()}"`);
    }
  }, [visibleSections, matchCount, query, toast]);

  const handleDownload = useCallback((item: MarketingResourceItem) => {
    if (!item.fileUrl) return;
    const ext = getExt(item.fileUrl) || getExt(item.fileName) || "pdf";
    const a = document.createElement("a");
    a.href = item.fileUrl;
    a.download = `${item.title.replace(/[^a-zA-Z0-9_-]/g, "_")}.${ext}`;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.show(`Downloading "${item.title}"`);
  }, [toast]);

  // Latest arrow: first 6 of its section -> scroll to the card on current page. Beyond that -> dedicated category page.
  const handleLocate = useCallback((item: MarketingResourceItem) => {
    const section = SECTIONS.find((s) => s.category === item.category && !s.derived);
    if (!section) return;
    const idx = (grouped[section.id] || []).findIndex((i) => i.id === item.id);
    if (idx >= INITIAL_LIMIT && section.exploreLink) {
      router.push(`${section.exploreLink}?resource=${encodeURIComponent(item.id)}`);
      return;
    }
    setRevealId(item.id);
    setTimeout(() => {
      const el = document.getElementById(`${section.id}-card-${item.id}`);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setHighlightId(item.id);
      if (highlightTimer.current) clearTimeout(highlightTimer.current);
      highlightTimer.current = setTimeout(() => setHighlightId(null), 2800);
    }, 120);
  }, [grouped, router]);

  const profile = useMemo(
    () => resources.find((r) => r.category === "Company Documents" && r.fileUrl),
    [resources]
  );

  return (
    <main className="min-h-screen bg-black text-white selection:bg-rose-500/30">
      <style>{`
        @keyframes mktFade{from{opacity:0}to{opacity:1}}
        @keyframes mktRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        .mkt-fade{animation:mktFade .2s ease-out}
        .mkt-rise{animation:mktRise .6s cubic-bezier(.2,.7,.2,1)}
        @media (prefers-reduced-motion:reduce){.mkt-fade,.mkt-rise{animation:none}}
      `}</style>

      <div aria-live="polite" role="status" className="pointer-events-none fixed bottom-6 right-6 z-[60]">
        {toast.message && (
          <div className="mkt-fade pointer-events-auto flex items-center gap-3 rounded-xl border border-rose-400/30 bg-rose-600 px-5 py-3 text-sm font-medium text-white shadow-2xl">
            <Sparkles className="h-4 w-4" aria-hidden /> {toast.message}
          </div>
        )}
      </div>

      <MarketingHero
        query={query}
        onQuery={setQuery}
        onSubmit={submitSearch}
        onRequest={() => setRequestOpen(true)}
        onProfile={profile ? () => handleDownload(profile) : undefined}
        stats={stats}
        covers={covers}
        loading={status === "loading"}
      />

      {navTabs.length > 0 && <SectionNavbar sections={navTabs} />}

      {status === "loading" && <SkeletonGrid />}

      {status === "error" && (
        <div role="alert" className="mx-auto my-20 flex max-w-md flex-col items-center gap-4 px-4 text-center">
          <AlertTriangle className="h-10 w-10 text-rose-400" />
          <h2 className="text-lg font-semibold">Resources could not be loaded</h2>
          <p className="text-sm text-zinc-400">Check your connection and try again.</p>
          <button onClick={() => load()} className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-rose-500 cursor-pointer">
            <RefreshCw className="h-4 w-4" /> Retry
          </button>
        </div>
      )}

      {status === "ready" && resources.length === 0 && (
        <div className="mx-auto my-20 flex max-w-md flex-col items-center gap-4 px-4 text-center">
          <FileText className="h-10 w-10 text-zinc-600" />
          <h2 className="text-lg font-semibold">New resources are on the way</h2>
          <p className="text-sm text-zinc-400">Nothing is published yet. Need something specific now? Ask our team.</p>
          <button onClick={() => setRequestOpen(true)} className="rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-rose-500 cursor-pointer">
            Request custom deck
          </button>
        </div>
      )}

      {status === "ready" && searching && (
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8" role="status">
          <p className="text-sm text-zinc-400">
            {matchCount > 0 ? (
              <>{matchCount} result{matchCount === 1 ? "" : "s"} for <span className="text-white">"{debounced.trim()}"</span></>
            ) : (
              <>No results for <span className="text-white">"{debounced.trim()}"</span>. </>
            )}{" "}
            <button onClick={() => setQuery("")} className="text-rose-400 underline-offset-2 hover:underline cursor-pointer">Clear search</button>
            {matchCount === 0 && (
              <> or <button onClick={() => setRequestOpen(true)} className="text-rose-400 underline-offset-2 hover:underline cursor-pointer">request this resource</button></>
            )}
          </p>
        </div>
      )}

      {status === "ready" &&
        visibleSections.map((s) => (
          <CategoryBlock
            key={s.id}
            section={s}
            items={grouped[s.id]}
            forceExpand={searching}
            onDownload={handleDownload}
            onPreview={handlePreview}
            onLocate={handleLocate}
            revealId={revealId}
            highlightId={highlightId}
          />
        ))}

      {active && <ViewerModal item={active} onClose={closeViewer} />}

      <RepresentativeCTA
        title="Need a customized presentation or"
        highlightText="solution deck?"
        description="Our marketing and solution architecture teams can create co-branded decks, custom industry blueprints, or tailored ROI models for your enterprise proposals."
        primaryBtnText="REQUEST CUSTOM MATERIALS"
        primaryBtnHref="/contact#contact-form"
        secondaryBtnText="CONTACT SALES TEAM"
        secondaryBtnHref="/contact#contact-form"
      />

      {requestOpen && (
        <RequestModal
          onClose={closeRequest}
          onDone={() => { setRequestOpen(false); toast.show("Request received. Our team will be in touch.", 4000); }}
        />
      )}
    </main>
  );
}

export { MarketingPage as MarketingPageClient };
