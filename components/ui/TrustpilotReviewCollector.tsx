"use client";

import React, { useEffect, useRef } from "react";

interface TrustpilotReviewCollectorProps {
  className?: string;
  theme?: "dark" | "light";
}

export function TrustpilotReviewCollector({
  className = "",
  theme = "dark",
}: TrustpilotReviewCollectorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Re-initialize widget when component mounts or route changes
    if (typeof window !== "undefined" && (window as any).Trustpilot && ref.current) {
      try {
        (window as any).Trustpilot.loadFromElement(ref.current, true);
      } catch (err) {
        console.warn("Trustpilot load error:", err);
      }
    }
  }, []);

  return (
    <div className={`w-full flex justify-center items-center ${className}`}>
      {/* TrustBox widget - Review Collector */}
      <div
        ref={ref}
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="6a01a53d773488ea3a99d201"
        data-style-height="52px"
        data-style-width="100%"
        data-theme={theme}
      >
        <a
          href="https://www.trustpilot.com/review/devopstrio.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-zinc-400 hover:text-white transition-colors"
        >
          Review Devopstrio on Trustpilot
        </a>
      </div>
      {/* End TrustBox widget */}
    </div>
  );
}
