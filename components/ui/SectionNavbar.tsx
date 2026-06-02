"use client";

import React, { useEffect, useState, useRef } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "industries", label: "Industries" },
  { id: "impact", label: "Impact" },
  { id: "why-devopstrio", label: "Why devopstrio" },
  { id: "networks", label: "Global Networks" },
  { id: "careers", label: "Careers" }
];

const defaultSections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "industries", label: "Industries" },
  { id: "impact", label: "Impact" },
  { id: "why-devopstrio", label: "Why devopstrio" },
  { id: "networks", label: "Global Networks" },
  { id: "careers", label: "Careers" }
];

export function SectionNavbar({ sections = defaultSections }: { sections?: { id: string; label: string }[] }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [isSticky, setIsSticky] = useState(false);
  const [isMainNavbarVisible, setIsMainNavbarVisible] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const rect = navRef.current.getBoundingClientRect();
      // If the top of the navbar element reaches the header offset, consider it sticky
      setIsSticky(rect.top <= 76);

      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          setIsMainNavbarVisible(false);
        } else {
          setIsMainNavbarVisible(true);
        }
      } else {
        setIsMainNavbarVisible(true);
      }
      lastScrollY.current = currentScrollY;

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
  }, [sections]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = isMainNavbarVisible ? 135 : 75; // dynamic offset based on whether main header is visible
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div 
      ref={navRef}
      className="sticky z-40 w-full transition-all duration-300 pointer-events-none"
      style={{ top: isMainNavbarVisible ? "74px" : "16px" }}
    >
      <div className="max-w-site mx-auto px-4 md:px-12 lg:px-16">
        <nav 
          aria-label="Section navigation"
          className={`pointer-events-auto w-full transition-all duration-350 ${
            isSticky 
              ? "bg-[#000000]/70 border border-zinc-900/80 backdrop-blur-md rounded-full px-6 py-2 shadow-2xl scale-[0.98]" 
              : "border-b border-zinc-900 bg-transparent py-4 px-2"
          } flex items-center justify-start overflow-x-auto scrollbar-none gap-8`}
        >
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleLinkClick(e, section.id)}
                className={`relative py-1 text-xs font-semibold tracking-wide uppercase transition-colors whitespace-nowrap flex-shrink-0 ${
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
  );
}
