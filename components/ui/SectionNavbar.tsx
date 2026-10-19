"use client";

import React, { useEffect, useState, useRef } from "react";

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
  { id: "careers", label: "Careers" },
];

export function SectionNavbar({
  sections = defaultSections,
}: {
  sections?: { id: string; label: string }[];
}) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [isSticky, setIsSticky] = useState(false);
  const [isMainNavbarVisible, setIsMainNavbarVisible] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLElement>(null);

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

      // Check if user is scrolled to the very bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isAtBottom && sections.length > 0) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      // Track active section based on current viewport position
      let currentActive = "";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const elRect = el.getBoundingClientRect();
          // Find the section that occupies the viewport near the top
          if (elRect.top <= 240 && elRect.bottom >= 120) {
            currentActive = section.id;
            break;
          }
        }
      }

      if (currentActive) {
        setActiveSection(currentActive);
      } else if (sections.length > 0) {
        // Fallback: reverse check for the last section scrolled past threshold
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i].id);
          if (el) {
            const elRect = el.getBoundingClientRect();
            if (elRect.top <= 240) {
              setActiveSection(sections[i].id);
              return;
            }
          }
        }
        setActiveSection(sections[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Also connect to Lenis scroll if present on the page
    let unsubLenis: (() => void) | null = null;
    const bindLenis = () => {
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.on === "function") {
        lenis.on("scroll", handleScroll);
        unsubLenis = () => {
          if (typeof lenis.off === "function") lenis.off("scroll", handleScroll);
        };
        return true;
      }
      return false;
    };

    if (!bindLenis()) {
      const interval = setInterval(() => {
        if (bindLenis()) clearInterval(interval);
      }, 250);
      setTimeout(() => clearInterval(interval), 3000);
    }

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (unsubLenis) unsubLenis();
    };
  }, [sections, isMainNavbarVisible]);

  // Smoothly center the active tab into view in horizontally overflowing navbars
  useEffect(() => {
    if (!navContainerRef.current) return;
    const activeLink = navContainerRef.current.querySelector(
      `a[href="#${activeSection}"]`
    ) as HTMLElement;
    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSection]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      setActiveSection(id);
      const lenis = (window as any).__lenis;

      const elementPosition = el.getBoundingClientRect().top;
      const targetScrollY = elementPosition + window.scrollY;
      const isScrollingDown = targetScrollY > window.scrollY;

      const headerOffset = isScrollingDown ? 79 : 149;
      const offsetPosition = targetScrollY - headerOffset;

      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(offsetPosition, { duration: 1.0 });
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
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
            ref={navContainerRef}
            aria-label="Section navigation"
            className={`pointer-events-auto w-full transition-all duration-350 ${
              isSticky
                ? "bg-[#000000]/75 border border-zinc-900/80 backdrop-blur-md rounded-full px-6 py-2 shadow-2xl scale-[0.98]"
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
                  className={`relative py-1 text-xs md:text-sm font-semibold tracking-wide uppercase transition-colors whitespace-nowrap flex-shrink-0 cursor-pointer ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
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
