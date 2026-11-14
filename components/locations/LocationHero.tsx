"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import Image from "next/image";
import RippleGrid from "@/components/ui/RippleGrid";

export interface LocationHeroProps {
  badge?: string;
  title?: string | React.ReactNode;
  serviceName?: string;
  locationName?: string;
  countryCode?: "uk" | "india" | "us" | string;
  bgImage?: string;
  locationHighlightClass?: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  officeStatus?: string;
  verifiedAddress?: string;
  stats?: { value: string; label: string }[];
}

/**
 * Authoritative location-aware hero background image resolver.
 * Maps exact city hubs and regional tech corridors to real, optimized WebP imagery.
 * Falls back to high-resolution national and global cloud architecture cityscapes.
 */
export function getLocationHeroImage(
  locationName = "",
  countryCode = "",
  customImage = ""
): string {
  if (customImage) return customImage;

  const loc = (locationName || "").toLowerCase();
  const country = (countryCode || "").toLowerCase();

  // 1. Exact city-specific imagery
  if (loc.includes("london")) {
    return "/webp/assets/locations/london.webp";
  }
  if (loc.includes("bengaluru") || loc.includes("bangalore")) {
    return "/webp/assets/locations/Bengaluru.webp";
  }
  if (loc.includes("chennai")) {
    return "/webp/assets/locations/chennai.webp";
  }
  if (
    loc.includes("tennessee") ||
    loc.includes("nashville") ||
    loc.includes("mt. juliet") ||
    loc.includes("memphis")
  ) {
    return "/webp/assets/locations/Tennessee.webp";
  }
  if (loc.includes("thoothukudi") || loc.includes("tuticorin")) {
    return "/webp/assets/locations/Thoothukudi.webp";
  }

  // 2. UK regional technology centers
  if (
    loc.includes("manchester") ||
    loc.includes("birmingham") ||
    loc.includes("edinburgh") ||
    loc.includes("cambridge") ||
    loc.includes("glasgow") ||
    loc.includes("leeds") ||
    loc.includes("bristol") ||
    loc.includes("belfast") ||
    loc.includes("cardiff") ||
    loc.includes("oxford") ||
    loc.includes("newcastle") ||
    loc.includes("liverpool") ||
    loc.includes("sheffield") ||
    loc.includes("nottingham")
  ) {
    return "/assets/About-page/building/webp/ukbuilding.webp";
  }

  // 3. US regional technology centers
  if (
    loc.includes("austin") ||
    loc.includes("san francisco") ||
    loc.includes("dallas") ||
    loc.includes("new york") ||
    loc.includes("chicago") ||
    loc.includes("seattle") ||
    loc.includes("atlanta") ||
    loc.includes("california") ||
    loc.includes("texas") ||
    loc.includes("florida") ||
    loc.includes("miami") ||
    loc.includes("boston") ||
    loc.includes("denver")
  ) {
    return "/assets/About-page/building/webp/usa2.webp";
  }

  // 4. India regional technology centers
  if (
    loc.includes("hyderabad") ||
    loc.includes("mumbai") ||
    loc.includes("pune") ||
    loc.includes("delhi") ||
    loc.includes("noida") ||
    loc.includes("gurugram") ||
    loc.includes("gurgaon") ||
    loc.includes("karnataka") ||
    loc.includes("tamil nadu") ||
    loc.includes("telangana") ||
    loc.includes("maharashtra") ||
    loc.includes("coimbatore") ||
    loc.includes("kochi")
  ) {
    return "/webp/assets/About-page/building/india.webp";
  }

  // 5. Country-level fallbacks
  if (
    country === "uk" ||
    loc.includes("united kingdom") ||
    loc.includes("england") ||
    loc.includes("scotland") ||
    loc.includes("wales") ||
    loc.includes("northern ireland")
  ) {
    return "/webp/assets/locations/UK.webp";
  }

  if (country === "india" || loc.includes("india")) {
    return "/webp/assets/About-page/building/india.webp";
  }

  if (
    country === "us" ||
    country === "usa" ||
    loc.includes("united states") ||
    loc.includes("america")
  ) {
    return "/webp/assets/About-page/building/USA.webp";
  }

  // 6. Global technology architecture cityscape fallback
  return "/webp/uploads/1782716597179-business-office-sky-cityscape-tourism.webp";
}

interface SafeRippleGridProps {
  onFail?: () => void;
}

interface SafeRippleGridState {
  hasError: boolean;
  webGlSupported: boolean;
}

/**
 * Resilient Error-Boundary and WebGL2-guarded wrapper around RippleGrid.
 * Ensures the hero section NEVER fails or renders blank if WebGL2 context
 * is exhausted, blocked, or slow to initialize.
 */
class SafeRippleGrid extends Component<SafeRippleGridProps, SafeRippleGridState> {
  state: SafeRippleGridState = {
    hasError: false,
    webGlSupported: true
  };

  static getDerivedStateFromError(): Partial<SafeRippleGridState> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("RippleGrid WebGL notice:", error.message);
    }
    this.setState({ hasError: true });
    this.props.onFail?.();
  }

  componentDidMount() {
    try {
      if (typeof window === "undefined") return;
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl2");
      if (!gl) {
        this.setState({ webGlSupported: false });
        this.props.onFail?.();
      }
    } catch {
      this.setState({ webGlSupported: false });
      this.props.onFail?.();
    }
  }

  render(): ReactNode {
    if (this.state.hasError || !this.state.webGlSupported) {
      return null;
    }

    return (
      <RippleGrid
        color="#f43f5e"
        cellSize={46}
        lineWidth={1}
        glow={0.7}
        rippleStrength={1.2}
        rippleSpeed={0.9}
        rippleSize={1.1}
        fade={0.65}
        opacity={0.75}
        autoRipple="center"
        rippleInterval={2.8}
        mouseInteraction={true}
        clickRipple={true}
        lightMode={false}
      />
    );
  }
}

export function LocationHero({
  title,
  serviceName,
  locationName,
  countryCode,
  bgImage,
  locationHighlightClass = "text-rose-500"
}: LocationHeroProps) {
  const [animationFailed, setAnimationFailed] = React.useState(false);
  const [imageFailed, setImageFailed] = React.useState(false);

  // Determine authoritative, static, server-rendered H1 content
  const renderHeading = () => {
    if (title) {
      return title;
    }

    if (serviceName && locationName) {
      return (
        <>
          {serviceName} Near Me in <span className={locationHighlightClass}>{locationName}</span>
        </>
      );
    }

    if (locationName) {
      return (
        <>
          Cloud Services Near Me in <span className={locationHighlightClass}>{locationName}</span>
        </>
      );
    }

    return "Managed Cloud Services Worldwide";
  };

  // Determine the contextual cityscape or architecture background image
  const resolvedHeroImage = getLocationHeroImage(locationName, countryCode, bgImage);

  return (
    <section className="relative w-full min-h-[36vh] sm:min-h-[42vh] md:min-h-[46vh] lg:min-h-[50vh] flex flex-col items-center justify-center pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 bg-black text-white overflow-hidden font-sans">
      {/* =========================================================================
          LAYER 1: LOCATION-AWARE ARCHITECTURAL CITYSCAPE BACKDROP
          Zero-delay visual backdrop with deep dark vignette masks and luminosity blend.
          If image fails to load, gracefully falls back to pure black background.
          ========================================================================= */}
      {!imageFailed && (
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src={resolvedHeroImage}
            alt={locationName ? `${locationName} technology cityscape` : "Devopstrio global cloud infrastructure"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20 mix-blend-luminosity brightness-75 contrast-125 transition-opacity duration-700"
            onError={() => setImageFailed(true)}
          />
          {/* Multi-stop radial and vertical dark vignettes blending smoothly into #000000 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.7)_55%,_#000000_100%)] pointer-events-none" />
        </div>
      )}

      {/* =========================================================================
          LAYER 2: PURE CSS/SVG CYBER PERSPECTIVE MATRIX GRID
          100% SSR zero-JS instantaneous render on turn 0.
          ========================================================================= */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-35 mix-blend-screen"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(244, 63, 94, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(244, 63, 94, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px"
        }}
      />
      {/* Horizon perspective radial mask */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,_transparent_25%,_#000000_100%)]" />

      {/* =========================================================================
          LAYER 3: AMBIENT NEBULA GLOWS
          Dual-spectrum glow (crimson core + indigo/cyan horizon aura).
          Rendered only when hero animation is operating normally.
          ========================================================================= */}
      {!animationFailed && (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] sm:w-[720px] h-[300px] bg-rose-600/[0.13] rounded-full blur-[140px] pointer-events-none z-[2]" />
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[200px] bg-indigo-600/[0.07] rounded-full blur-[160px] pointer-events-none z-[2]" />
        </>
      )}

      {/* =========================================================================
          LAYER 4: RESILIENT INTERACTIVE RIPPLEGRID CANVAS (PROGRESSIVE ENHANCEMENT)
          Interactive water-ripple response on pointer events with safe WebGL handling.
          If canvas or WebGL fails, cleanly unmounts and triggers solid black fallback.
          ========================================================================= */}
      {!animationFailed && (
        <div className="absolute inset-0 z-[3] pointer-events-auto opacity-75">
          <SafeRippleGrid onFail={() => setAnimationFailed(true)} />
        </div>
      )}

      {/* =========================================================================
          FAILSAFE FALLBACK: SOLID BLACK BACKGROUND
          Enforces pure #000000 black background if animation encounters any failure.
          ========================================================================= */}
      {animationFailed && (
        <div className="absolute inset-0 z-[2] bg-black pointer-events-none" />
      )}

      {/* =========================================================================
          HERO CONTENT: AUTHORITATIVE SINGLE-SERVICE H1 TITLE ONLY
          Clean, distraction-free hero section with pure visual focus on the title.
          ========================================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center my-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.18] text-center drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]">
          {renderHeading()}
        </h1>
      </div>

      {/* Edge gradient blend to ensure seamless flow into page content */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none z-[4]" />
    </section>
  );
}

export default LocationHero;
