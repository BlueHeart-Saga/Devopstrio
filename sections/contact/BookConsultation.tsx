"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowUpRight, CalendarDays, Clock3, Video } from "lucide-react";

const DEFAULT_CALENDLY_URL =
  "https://calendly.com/schedule-devopstrio-solutions/30min";

// Official Calendly inline embed script (https://developer.calendly.com)
const CALENDLY_WIDGET_SRC =
  "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export function BookConsultation() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [loadFallback, setLoadFallback] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || DEFAULT_CALENDLY_URL;

  const embedSrc = useMemo(() => {
    try {
      const url = new URL(calendlyUrl);
      if (
        url.protocol !== "https:" ||
        !["calendly.com", "www.calendly.com"].includes(url.hostname)
      ) {
        return null;
      }
      url.searchParams.set("hide_landing_page_details", "1");
      url.searchParams.set("hide_gdpr_banner", "1");
      url.searchParams.set("embed_type", "Inline");
      return url.toString();
    } catch {
      return null;
    }
  }, [calendlyUrl]);

  // Initialise official Calendly inline widget into container
  useEffect(() => {
    const container = containerRef.current;
    if (!embedSrc || !container) return;

    let isMounted = true;

    const initWidget = () => {
      if (!isMounted || !container) return;
      if (window.Calendly) {
        container.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: embedSrc,
          parentElement: container,
        });
        setIsLoading(false);
      }
    };

    if (window.Calendly) {
      initWidget();
    }

    const watchIframe = () => {
      const iframe = container.querySelector("iframe");
      if (iframe && iframe.dataset.watched !== "true") {
        iframe.dataset.watched = "true";
        iframe.addEventListener(
          "load",
          () => {
            if (isMounted) setIsLoading(false);
          },
          { once: true }
        );
      }
      return iframe;
    };

    const observer = new MutationObserver(watchIframe);
    observer.observe(container, { childList: true, subtree: true });

    // Safety fallback: if Calendly doesn't attach iframe within 5s, render fallback iframe
    const timeout = window.setTimeout(() => {
      if (isMounted && !container.querySelector("iframe")) {
        setLoadFallback(true);
        setIsLoading(false);
      }
    }, 5000);

    return () => {
      isMounted = false;
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, [embedSrc, scriptReady]);

  return (
    <section
      id="book-consultation"
      aria-labelledby="consultation-title"
      className="w-full py-16 md:py-24 bg-black text-white relative overflow-hidden font-sans border-t border-zinc-900 scroll-mt-24"
    >
      {/* Script tag for Calendly Widget */}
      <Script
        src={CALENDLY_WIDGET_SRC}
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
        onError={() => {
          setIsLoading(false);
          setLoadError(true);
          setLoadFallback(true);
        }}
      />

      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-rose-600/[0.04] rounded-full blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[350px] bg-zinc-800/[0.08] rounded-full blur-[140px]"
      />

      <div className="max-w-[1360px] mx-auto w-full px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Outer frame wrapping the entire consultation section */}
        <div className="rounded-[28px] border border-zinc-800/90 bg-[#090a0f]/95 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
            
            {/* Left Column: Portrait Rectangle Card with minimal, neat content */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-start">
              
              {/* Badge & Title */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold uppercase tracking-[0.15em] text-rose-400 mb-4">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-rose-500"
                  />
                  Let&apos;s connect
                </div>
                <h2
                  id="consultation-title"
                  className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white leading-tight"
                >
                  Book a 1:1 <br />
                  Demo &amp; Strategy 👉
                </h2>
              </div>

              {/* Portrait Rectangle Card */}
              <div className="rounded-[24px] border border-zinc-800 bg-[#0d0e14] p-6 sm:p-7 flex flex-col shadow-xl">
                {/* Executive Profile: Siddharth Menon */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-rose-500/30 bg-zinc-900 shadow-md shrink-0 relative">
                    <Image
                      src="/webp/assets/About-page/leadership/v2/dev_emp_012.webp"
                      alt="Siddharth Menon"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base sm:text-[17px] font-semibold text-white tracking-tight leading-snug">
                      Siddharth Menon
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-rose-400">
                      Executive Director
                    </span>
                  </div>
                </div>

                {/* Minimal, Professional Quote */}
                <p className="text-sm sm:text-[15px] text-zinc-300 italic leading-relaxed mb-6 font-normal">
                  &ldquo;Looking for a more personalized experience? Book a
                  one-on-one session with our senior architects, answer your
                  questions, and show you how to integrate Devopstrio into your
                  workflow.&rdquo;
                </p>

                {/* Key Meeting Details */}
                <div className="rounded-2xl bg-black/50 border border-zinc-800/80 p-4 space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <Clock3 size={17} className="text-rose-400 shrink-0" />
                    <span>30 minutes session</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <Video size={17} className="text-rose-400 shrink-0" />
                    <span>Online video meeting</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <CalendarDays size={17} className="text-rose-400 shrink-0" />
                    <span>Choose your date &amp; timezone</span>
                  </div>
                </div>

                {/* Team Sign-off */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs sm:text-sm text-zinc-400 font-mono">
                  <span className="font-medium text-zinc-300">Devopstrio Solutions</span>
                  <span className="text-zinc-500">Architecture Team</span>
                </div>
              </div>

              {/* Browse Services Link in normal font size */}
              <p className="mt-6 text-sm sm:text-base text-zinc-300">
                Prefer to browse first?{" "}
                <Link
                  href="/services"
                  className="font-semibold text-rose-400 underline underline-offset-4 decoration-rose-500/70 hover:text-rose-300 transition-colors inline-flex items-center gap-1.5"
                >
                  Explore our services <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </p>
            </div>

            {/* Right Column: Calendly Inline Embed */}
            <div className="lg:col-span-7 xl:col-span-7 w-full min-w-0">
              <div className="w-full rounded-2xl md:rounded-[22px] overflow-hidden bg-white shadow-2xl relative min-h-[700px] border border-zinc-200/40">
                {/* Loading indicator */}
                {isLoading && !loadFallback && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white text-zinc-600 gap-3"
                  >
                    <span className="w-9 h-9 border-3 border-zinc-200 border-t-rose-500 rounded-full animate-spin" />
                    <p className="text-sm font-medium text-zinc-500">
                      Loading appointment calendar…
                    </p>
                  </div>
                )}

                {/* Official Calendly Inline Widget */}
                {embedSrc ? (
                  <div
                    id="calendly-inline-widget-wrapper"
                    ref={containerRef}
                    className="calendly-inline-widget w-full"
                    data-auto-load="false"
                    data-resize="true"
                    style={{ minWidth: "320px", height: "700px" }}
                  >
                    {/* Fallback iframe if script delayed */}
                    {loadFallback && (
                      <iframe
                        src={embedSrc}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Schedule your Devopstrio consultation with Calendly"
                        className="w-full h-[700px] border-0 block"
                        allow="camera; microphone; fullscreen; payment"
                      />
                    )}
                  </div>
                ) : (
                  <div
                    role="alert"
                    className="py-10 text-center text-sm text-zinc-600"
                  >
                    Scheduling isn&apos;t configured correctly. Please contact our
                    team instead.
                  </div>
                )}
              </div>

              {/* Error warning if load fails */}
              {loadError && (
                <p role="alert" className="mt-4 text-sm text-rose-400">
                  The embedded calendar could not load. Open it directly using
                  the link below.
                </p>
              )}

              {/* Calendar link in normal font size */}
              {embedSrc && (
                <p className="mt-4 text-center sm:text-left text-sm sm:text-base text-zinc-300">
                  Calendar not visible?{" "}
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-rose-400 underline underline-offset-4 decoration-rose-500/70 hover:text-rose-300 transition-colors"
                  >
                    Open scheduling in a new tab
                  </a>
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default BookConsultation;
