"use client";

import React, { useState, useMemo, useEffect, useCallback, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  acceleratorOfferings,
  AcceleratorOffering
} from "@/data/accelerators/accelerators-registry";
import { Reveal } from "@/components/ui/Reveal";
import { Search, X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 12;

function CatalogueContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read initial filter values from URL query string
  const initialSearch = searchParams.get("q") || "";
  const initialDomain = searchParams.get("domain") || "All";
  const initialType = searchParams.get("type") || "All";
  const initialPage = parseInt(searchParams.get("page") || "1", 10);

  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [selectedDomain, setSelectedDomain] = useState<string>(initialDomain);
  const [selectedType, setSelectedType] = useState<string>(initialType);
  const [currentPage, setCurrentPage] = useState<number>(
    isNaN(initialPage) || initialPage < 1 ? 1 : initialPage
  );

  // Sync state from URL if user navigates back/forward
  useEffect(() => {
    const q = searchParams.get("q") || "";
    const domain = searchParams.get("domain") || "All";
    const type = searchParams.get("type") || "All";
    const page = parseInt(searchParams.get("page") || "1", 10);

    setSearchQuery(q);
    setSelectedDomain(domain);
    setSelectedType(type);
    setCurrentPage(isNaN(page) || page < 1 ? 1 : page);
  }, [searchParams]);

  // Update URL query parameters cleanly
  const updateUrl = useCallback(
    (q: string, domain: string, type: string, page: number) => {
      const params = new URLSearchParams();
      if (q.trim()) params.set("q", q.trim());
      if (domain !== "All") params.set("domain", domain);
      if (type !== "All") params.set("type", type);
      if (page > 1) params.set("page", page.toString());

      const queryString = params.toString();
      const newUrl = queryString
        ? `/ecosystem/accelerators-frameworks?${queryString}#catalogue`
        : `/ecosystem/accelerators-frameworks#catalogue`;

      router.replace(newUrl, { scroll: false });
    },
    [router]
  );

  // Filter only published offerings (zero draft data in client bundle rendering)
  const publishedOfferings = useMemo(() => {
    return acceleratorOfferings.filter((o) => o.publicationStatus === "published");
  }, []);

  // Unique domains among published offerings
  const availableDomains = useMemo(() => {
    const dSet = new Set<string>();
    publishedOfferings.forEach((o) => dSet.add(o.domainClean));
    return ["All", ...Array.from(dSet).sort()];
  }, [publishedOfferings]);

  // Unique engagement types among published offerings
  const availableTypes = useMemo(() => {
    const tSet = new Set<string>();
    publishedOfferings.forEach((o) => tSet.add(o.engagementType));
    return ["All", ...Array.from(tSet).sort()];
  }, [publishedOfferings]);

  // Dynamic matching counts for domains (matching search & current type)
  const domainFacetCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    const normSearch = searchQuery.trim().toLowerCase();

    availableDomains.forEach((dom) => {
      counts[dom] = publishedOfferings.filter((o) => {
        const matchesDom = dom === "All" || o.domainClean === dom;
        const matchesType = selectedType === "All" || o.engagementType === selectedType;
        const matchesSearch =
          !normSearch ||
          o.title.toLowerCase().includes(normSearch) ||
          o.heroDescription.toLowerCase().includes(normSearch) ||
          o.code.includes(normSearch) ||
          o.domainClean.toLowerCase().includes(normSearch) ||
          o.engagementType.toLowerCase().includes(normSearch);
        return matchesDom && matchesType && matchesSearch;
      }).length;
    });

    return counts;
  }, [publishedOfferings, searchQuery, selectedType, availableDomains]);

  // Dynamic matching counts for engagement types (matching search & current domain)
  const typeFacetCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    const normSearch = searchQuery.trim().toLowerCase();

    availableTypes.forEach((typ) => {
      counts[typ] = publishedOfferings.filter((o) => {
        const matchesType = typ === "All" || o.engagementType === typ;
        const matchesDom = selectedDomain === "All" || o.domainClean === selectedDomain;
        const matchesSearch =
          !normSearch ||
          o.title.toLowerCase().includes(normSearch) ||
          o.heroDescription.toLowerCase().includes(normSearch) ||
          o.code.includes(normSearch) ||
          o.domainClean.toLowerCase().includes(normSearch) ||
          o.engagementType.toLowerCase().includes(normSearch);
        return matchesType && matchesDom && matchesSearch;
      }).length;
    });

    return counts;
  }, [publishedOfferings, searchQuery, selectedDomain, availableTypes]);

  // Combined AND filtering
  const filteredOfferings = useMemo(() => {
    const normSearch = searchQuery.trim().toLowerCase();

    return publishedOfferings.filter((o) => {
      const matchesDomain = selectedDomain === "All" || o.domainClean === selectedDomain;
      const matchesType = selectedType === "All" || o.engagementType === selectedType;
      const matchesSearch =
        !normSearch ||
        o.title.toLowerCase().includes(normSearch) ||
        o.heroDescription.toLowerCase().includes(normSearch) ||
        o.code.includes(normSearch) ||
        o.domainClean.toLowerCase().includes(normSearch) ||
        o.engagementType.toLowerCase().includes(normSearch);

      return matchesDomain && matchesType && matchesSearch;
    });
  }, [publishedOfferings, selectedDomain, selectedType, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredOfferings.length / PAGE_SIZE) || 1;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  const paginatedOfferings = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filteredOfferings.slice(start, start + PAGE_SIZE);
  }, [filteredOfferings, safePage]);

  // Handler functions
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
    updateUrl(val, selectedDomain, selectedType, 1);
  };

  const handleDomainChange = (dom: string) => {
    setSelectedDomain(dom);
    setCurrentPage(1);
    updateUrl(searchQuery, dom, selectedType, 1);
  };

  const handleTypeChange = (typ: string) => {
    setSelectedType(typ);
    setCurrentPage(1);
    updateUrl(searchQuery, selectedDomain, typ, 1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    updateUrl(searchQuery, selectedDomain, selectedType, newPage);
    const catEl = document.getElementById("catalogue");
    if (catEl) {
      catEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedDomain("All");
    setSelectedType("All");
    setCurrentPage(1);
    updateUrl("", "All", "All", 1);
  };

  const startIndex = (safePage - 1) * PAGE_SIZE + 1;
  const endIndex = Math.min(safePage * PAGE_SIZE, filteredOfferings.length);

  return (
    <section
      id="catalogue"
      className="w-full py-20 lg:py-24 bg-[#030303] text-white border-b border-zinc-900/80 relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase text-rose-500 mb-3 block">
              ENTERPRISE IP & ACCELERATORS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans leading-tight mb-4">
              Explore Enterprise <span className="text-rose-500">AI Accelerators</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Browse our validated portfolio of enterprise landing zones, generative AI architectures, and agentic governance patterns. Explore technical specifications, boundary definitions, and delivery methodologies.
            </p>
          </div>
        </Reveal>

        {/* Directory Layout: Sidebar Navigation on Large Desktop, Adaptive on Tablet/Mobile */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          
          {/* Category Navigation Sidebar */}
          <aside className="w-full lg:w-64 xl:w-72 shrink-0 lg:sticky lg:top-[105px] lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto lg:pr-1">
            <div className="space-y-6">
              
              {/* Strategic Domain Filter */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Strategic Domains
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {publishedOfferings.length} total
                  </span>
                </div>

                {/* Desktop vertical list */}
                <nav aria-label="Domain filter" className="hidden lg:flex flex-col space-y-1">
                  {availableDomains.map((domain) => {
                    const isActive = selectedDomain === domain;
                    const count = domainFacetCounts[domain] || 0;

                    return (
                      <button
                        key={domain}
                        type="button"
                        onClick={() => handleDomainChange(domain)}
                        className={`w-full text-left px-3.5 py-2 rounded-md text-xs sm:text-sm transition-colors duration-150 flex items-center justify-between group cursor-pointer ${
                          isActive
                            ? "bg-zinc-900/90 text-white font-semibold border-l-2 border-rose-500"
                            : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40"
                        }`}
                      >
                        <span className="truncate pr-2">
                          {domain === "All" ? "All Domains" : domain}
                        </span>
                        <span
                          className={`font-mono text-xs px-2 py-0.5 rounded transition-colors ${
                            isActive
                              ? "bg-rose-500/20 text-rose-400"
                              : "bg-zinc-900 text-zinc-500 group-hover:text-zinc-400"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </nav>

                {/* Tablet & Mobile horizontal/wrapping selector */}
                <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                  {availableDomains.map((domain) => {
                    const isActive = selectedDomain === domain;
                    const count = domainFacetCounts[domain] || 0;

                    return (
                      <button
                        key={domain}
                        type="button"
                        onClick={() => handleDomainChange(domain)}
                        className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors duration-150 flex items-center gap-1.5 cursor-pointer shrink-0 border ${
                          isActive
                            ? "bg-zinc-900 border-zinc-700 text-white font-semibold"
                            : "bg-zinc-950/60 border-zinc-900 text-zinc-400 hover:text-white"
                        }`}
                      >
                        <span>{domain === "All" ? "All Domains" : domain}</span>
                        <span className="font-mono text-[10px] text-zinc-500">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Engagement Type Filter */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Engagement Type
                  </span>
                </div>

                <div className="flex flex-wrap lg:flex-col gap-1.5 lg:gap-1">
                  {availableTypes.map((type) => {
                    const isActive = selectedType === type;
                    const count = typeFacetCounts[type] || 0;

                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleTypeChange(type)}
                        className={`px-3 py-1.5 lg:py-2 rounded-md text-xs sm:text-sm transition-colors duration-150 flex items-center justify-between cursor-pointer border lg:border-none ${
                          isActive
                            ? "bg-zinc-900 text-white font-semibold border-zinc-700 lg:border-l-2 lg:border-rose-500"
                            : "bg-zinc-950/60 lg:bg-transparent border-zinc-900 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40"
                        }`}
                      >
                        <span className="truncate pr-2">
                          {type === "All" ? "All Types" : type}
                        </span>
                        <span
                          className={`font-mono text-xs px-2 py-0.5 rounded transition-colors ${
                            isActive
                              ? "bg-rose-500/20 text-rose-400"
                              : "bg-zinc-900 text-zinc-500"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </aside>

          {/* Main Results Column */}
          <main className="flex-1 min-w-0 w-full">
            {/* Functional Toolbar: Search Bar & Results Count */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-800/80">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search offerings by title, domain, code, or keyword..."
                  className="w-full bg-[#09090b] border border-zinc-800 focus:border-zinc-700 rounded-md pl-10 pr-9 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => handleSearchChange("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded text-zinc-400 hover:text-white transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="text-xs text-zinc-400 font-medium whitespace-nowrap self-end sm:self-center">
                {filteredOfferings.length > 0 ? (
                  <>
                    Showing <span className="text-white font-semibold">{startIndex}–{endIndex}</span> of{" "}
                    <span className="text-white font-semibold">{filteredOfferings.length}</span>
                    {filteredOfferings.length !== publishedOfferings.length && (
                      <span className="text-zinc-500"> ({publishedOfferings.length} total)</span>
                    )}
                  </>
                ) : (
                  <span>0 offerings matched</span>
                )}
              </div>
            </div>

            {/* Empty State */}
            {filteredOfferings.length === 0 ? (
              <div className="py-16 px-6 text-center rounded-lg bg-[#09090b] border border-zinc-800/80">
                <p className="text-zinc-300 text-sm font-medium mb-1">
                  No offerings match your search criteria.
                </p>
                <p className="text-zinc-500 text-xs mb-4">
                  Try adjusting your search query, or clear your domain and engagement type filters.
                </p>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                {/* Flat Enterprise Offering Panels Grid: 2 columns on desktop */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                  {paginatedOfferings.map((offering) => (
                    <Link
                      key={offering.code}
                      href={`/ecosystem/accelerators-frameworks/${offering.slug}`}
                      className="group bg-[#09090b] hover:bg-[#0e0e11] border border-zinc-800/80 hover:border-zinc-700/90 rounded-lg p-6 flex flex-col justify-between transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-500"
                    >
                      {/* A. Identity */}
                      <div>
                        <div className="flex items-center justify-between gap-3 text-xs text-zinc-500 font-mono uppercase tracking-wider mb-3">
                          <span className="text-zinc-400 font-semibold">Offering {offering.code}</span>
                          <span className="text-zinc-400">{offering.engagementType}</span>
                        </div>

                        {/* B. Content */}
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-400 transition-colors duration-150 mb-2 leading-snug">
                          {offering.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          {offering.heroDescription}
                        </p>
                      </div>

                      {/* C. Engagement & Navigation */}
                      <div className="pt-4 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                        <span className="text-zinc-500 truncate max-w-[200px]">{offering.domainClean}</span>
                        <span className="inline-flex items-center gap-1.5 text-zinc-300 group-hover:text-rose-400 font-medium transition-colors duration-150">
                          <span>Explore offering</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Numbered Pagination Control (12 offerings per page) */}
                {totalPages > 1 && (
                  <nav aria-label="Catalogue pagination" className="mt-12 flex items-center justify-center gap-1.5">
                    <button
                      type="button"
                      disabled={safePage === 1}
                      onClick={() => handlePageChange(safePage - 1)}
                      className="p-2 rounded-md border border-zinc-800 bg-[#09090b] text-zinc-400 hover:text-white hover:bg-zinc-900 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                      const isCurrent = p === safePage;
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => handlePageChange(p)}
                          aria-current={isCurrent ? "page" : undefined}
                          className={`w-9 h-9 rounded-md text-xs font-mono font-medium transition-colors ${
                            isCurrent
                              ? "bg-rose-500 text-white font-bold"
                              : "border border-zinc-800 bg-[#09090b] text-zinc-400 hover:text-white hover:bg-zinc-900"
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}

                    <button
                      type="button"
                      disabled={safePage === totalPages}
                      onClick={() => handlePageChange(safePage + 1)}
                      className="p-2 rounded-md border border-zinc-800 bg-[#09090b] text-zinc-400 hover:text-white hover:bg-zinc-900 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                      aria-label="Next page"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </nav>
                )}
              </>
            )}
          </main>

        </div>

      </div>
    </section>
  );
}

export function EnterpriseAcceleratorsCatalogue() {
  return (
    <Suspense fallback={<div className="min-h-[400px] w-full bg-[#030303]" />}>
      <CatalogueContent />
    </Suspense>
  );
}
