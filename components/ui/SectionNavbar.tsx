"use client";

import React, { useEffect, useState, useRef } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "industries", label: "Industries" },
  { id: "innovation", label: "Innovation" },
  { id: "impact", label: "Impact" },
  { id: "why-Devopstrio", label: "Why Devopstrio" },
  { id: "partnerships", label: "Partnerships" },
  { id: "networks", label: "Networks" },
  { id: "insights", label: "Insights" },
  { id: "careers", label: "Careers" }
];

const defaultSections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "industries", label: "Industries" },
  { id: "innovation", label: "Innovation" },
  { id: "impact", label: "Impact" },
  { id: "why-Devopstrio", label: "Why Devopstrio" },
  { id: "partnerships", label: "Partnerships" },
  { id: "networks", label: "Networks" },
  { id: "insights", label: "Insights" },
  { id: "careers", label: "Careers" }
];

export function SectionNavbar({ sections = defaultSections }: { sections?: { id: string; label: string }[] }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [isSticky, setIsSticky] = useState(false);
  const [isMainNavbarVisible, setIsMainNavbarVisible] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleVisibilityChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ isVisible: boolean }>;
      setIsMainNavbarVisible(customEvent.detail.isVisible);
    };
    window.addEventListener("main-nav-visibility", handleVisibilityChange);
    return () => window.removeEventListener("main-nav-visibility", handleVisibilityChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const rect = navRef.current.getBoundingClientRect();

      const activeStickyTop = isMainNavbarVisible ? 88 : 20;
      setIsSticky(rect.top <= activeStickyTop + 5);

      // Track active section based on scroll position
      let currentActive = "";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const elRect = el.getBoundingClientRect();
          // Find the section that currently occupies the viewport
          if (elRect.top <= 200 && elRect.bottom >= 150) {
            currentActive = section.id;
            break;
          }
        }
      }
      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, isMainNavbarVisible]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const elementPosition = el.getBoundingClientRect().top;
      const targetScrollY = elementPosition + window.scrollY;
      const isScrollingDown = targetScrollY > window.scrollY;

      // If we scroll down, the main navbar hides, so the offset is 79px.
      // If we scroll up, the main navbar becomes visible, so the offset is 149px.
      const headerOffset = isScrollingDown ? 79 : 149;
      const offsetPosition = targetScrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <div id="section-navbar-parent" className="h-0" />
      <div
        ref={navRef}
        className="sticky z-40 w-full transition-all duration-300 pointer-events-none"
        style={{ top: isMainNavbarVisible ? "88px" : "20px" }}
      >
        <div className="max-w-site mx-auto px-4 md:px-12 lg:px-16">
          <nav
            aria-label="Section navigation"
            className={`pointer-events-auto w-full transition-all duration-350 ${isSticky
              ? "bg-[#000000]/70 border border-zinc-900/80 backdrop-blur-md rounded-full px-6 py-2 shadow-2xl scale-[0.98]"
              : "border-b border-zinc-900 bg-transparent py-4 px-2"
              } flex items-center justify-start md:justify-center overflow-x-auto scrollbar-none gap-6 md:gap-8`}
          >
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleLinkClick(e, section.id)}
                  className={`relative py-1 text-sm md:text-[15px] font-semibold tracking-wide uppercase transition-colors whitespace-nowrap flex-shrink-0 ${isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                    }`}
                >
                  {section.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-rose-600 rounded-full animate-slideIn" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
