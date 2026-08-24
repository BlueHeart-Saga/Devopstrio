"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import dynamic from "next/dynamic";

const ColorBends = dynamic(() => import("@/components/ui/ColorBends"), { ssr: false });
const FloatingLines = dynamic(() => import("@/components/ui/FloatingLines"), { ssr: false });
const Prism = dynamic(() => import("@/components/ui/Prism"), { ssr: false });
const Lightfall = dynamic(() => import("@/components/ui/Lightfall"), { ssr: false });
const Particles = dynamic(() => import("@/components/ui/Particles"), { ssr: false });
const GradientBlinds = dynamic(() => import("@/components/ui/GradientBlinds"), { ssr: false });
const Dither = dynamic(() => import("@/components/ui/Dither"), { ssr: false });
const ShapeGrid = dynamic(() => import("@/components/ui/ShapeGrid"), { ssr: false });
const MagicRings = dynamic(() => import("@/components/ui/MagicRings"), { ssr: false });
const Hyperspeed = dynamic(() => import("@/components/ui/Hyperspeed"), { ssr: false });
const DotField = dynamic(() => import("@/components/ui/DotField"), { ssr: false });
const DotGrid = dynamic(() => import("@/components/ui/DotGrid"), { ssr: false });
const Iridescence = dynamic(() => import("@/components/ui/Iridescence"), { ssr: false });

export interface HeroProps {
  badge?: string;
  title: string | React.ReactNode;
  subtitle: string;
  stats?: { value: string; label: string }[];
  breadcrumbs: { label: string; href?: string }[];
  bgImage?: string;
  colorBends?: boolean;
  colorBendsColors?: string[];
  floatingLines?: boolean;
  floatingLinesColors?: string[];
  floatingLinesStartColor?: string;
  floatingLinesMidColor?: string;
  floatingLinesEndColor?: string;
  prism?: boolean;
  prismAnimationType?: "rotate" | "hover" | "3drotate";
  prismHueShift?: number;
  lightfall?: boolean;
  lightfallColors?: string[];
  lightfallBgColor?: string;
  particles?: boolean;
  particleColors?: string[];
  particleCount?: number;
  particleSpread?: number;
  particleSpeed?: number;
  particleBaseSize?: number;
  gradientBlinds?: boolean;
  gradientBlindsColors?: string[];
  gradientBlindsAngle?: number;
  gradientBlindsCount?: number;
  dither?: boolean;
  ditherWaveColor?: [number, number, number];
  ditherColorNum?: number;
  ditherPixelSize?: number;
  shapeGrid?: boolean;
  shapeGridSpeed?: number;
  shapeGridSquareSize?: number;
  shapeGridDirection?: "diagonal" | "up" | "right" | "down" | "left";
  shapeGridBorderColor?: string;
  shapeGridHoverFillColor?: string;
  shapeGridShape?: "square" | "hexagon" | "circle" | "triangle";
  shapeGridHoverTrailAmount?: number;
  magicRings?: boolean;
  magicRingsColor?: string;
  magicRingsColorTwo?: string;
  magicRingsRingCount?: number;
  magicRingsSpeed?: number;
  magicRingsAttenuation?: number;
  magicRingsLineThickness?: number;
  magicRingsBaseRadius?: number;
  magicRingsRadiusStep?: number;
  magicRingsScaleRate?: number;
  magicRingsOpacity?: number;
  magicRingsBlur?: number;
  magicRingsNoiseAmount?: number;
  magicRingsRotation?: number;
  magicRingsRingGap?: number;
  magicRingsFadeIn?: number;
  magicRingsFadeOut?: number;
  magicRingsFollowMouse?: boolean;
  magicRingsMouseInfluence?: number;
  magicRingsHoverScale?: number;
  magicRingsParallax?: number;
  magicRingsClickBurst?: boolean;
  hyperspeed?: boolean;
  hyperspeedOptions?: any;
  dotField?: boolean;
  dotFieldProps?: any;
  dotGrid?: boolean;
  dotGridProps?: any;
  iridescence?: boolean;
  iridescenceColor?: [number, number, number];
  iridescenceSpeed?: number;
  iridescenceAmplitude?: number;
  iridescenceMouseReact?: boolean;
  children?: React.ReactNode;
}

function getServiceIridescenceColor(
  title?: string | React.ReactNode,
  breadcrumbs?: { label: string }[]
): [number, number, number] {
  const str = `${typeof title === "string" ? title : ""} ${breadcrumbs?.map((b) => b.label).join(" ") || ""}`.toLowerCase();

  if (str.includes("ai") || str.includes("genai") || str.includes("llm") || str.includes("qa")) {
    return [0.88, 0.11, 0.28]; // Rose Red
  }
  if (str.includes("cloud") || str.includes("aws") || str.includes("azure")) {
    return [0.01, 0.52, 0.78]; // Sky Blue
  }
  if (str.includes("devops") || str.includes("automation") || str.includes("gitops")) {
    return [0.58, 0.20, 0.92]; // Vibrant Purple
  }
  if (str.includes("cyber") || str.includes("security") || str.includes("zero trust")) {
    return [0.02, 0.59, 0.41]; // Emerald Green
  }
  if (str.includes("data engineering") || str.includes("analytics") || str.includes("snowflake")) {
    return [0.85, 0.47, 0.02]; // Amber Gold
  }
  if (str.includes("digital") || str.includes("transformation")) {
    return [0.15, 0.39, 0.92]; // Royal Blue
  }
  if (str.includes("software") || str.includes("engineering") || str.includes("full-stack")) {
    return [0.02, 0.71, 0.83]; // Electric Cyan
  }
  if (str.includes("managed") || str.includes("it")) {
    return [0.39, 0.40, 0.95]; // Deep Indigo
  }
  if (str.includes("consulting") || str.includes("advisory")) {
    return [0.91, 0.34, 0.05]; // Sunset Orange
  }
  return [0.88, 0.11, 0.28]; // Default Rose
}

export function Hero({
  badge,
  title,
  subtitle,
  stats,
  breadcrumbs,
  bgImage,
  colorBends,
  colorBendsColors,
  floatingLines,
  floatingLinesColors,
  floatingLinesStartColor,
  floatingLinesMidColor,
  floatingLinesEndColor,
  prism,
  prismAnimationType,
  prismHueShift,
  lightfall,
  lightfallColors,
  lightfallBgColor,
  particles,
  particleColors,
  particleCount,
  particleSpread,
  particleSpeed,
  particleBaseSize,
  gradientBlinds,
  gradientBlindsColors,
  gradientBlindsAngle,
  gradientBlindsCount,
  dither,
  ditherWaveColor,
  ditherColorNum,
  ditherPixelSize,
  shapeGrid,
  shapeGridSpeed,
  shapeGridSquareSize,
  shapeGridDirection,
  shapeGridBorderColor,
  shapeGridHoverFillColor,
  shapeGridShape,
  shapeGridHoverTrailAmount,
  magicRings,
  magicRingsColor,
  magicRingsColorTwo,
  magicRingsRingCount,
  magicRingsSpeed,
  magicRingsAttenuation,
  magicRingsLineThickness,
  magicRingsBaseRadius,
  magicRingsRadiusStep,
  magicRingsScaleRate,
  magicRingsOpacity,
  magicRingsBlur,
  magicRingsNoiseAmount,
  magicRingsRotation,
  magicRingsRingGap,
  magicRingsFadeIn,
  magicRingsFadeOut,
  magicRingsFollowMouse,
  magicRingsMouseInfluence,
  magicRingsHoverScale,
  magicRingsParallax,
  magicRingsClickBurst,
  hyperspeed,
  hyperspeedOptions,
  dotField,
  dotFieldProps,
  dotGrid,
  dotGridProps,
  iridescence,
  iridescenceColor,
  iridescenceSpeed,
  iridescenceAmplitude,
  iridescenceMouseReact,
  children,
}: HeroProps) {
  const activeIridescenceColor = iridescenceColor || getServiceIridescenceColor(title, breadcrumbs);

  return (
    <section className="relative overflow-hidden bg-black text-white min-h-[480px] lg:min-h-[520px] flex flex-col justify-between pt-24 pb-8 md:pt-24 md:pb-10 border-b border-zinc-900/60">
      
      {/* Background Shader Component */}
      {colorBends && (
        <div className="absolute inset-0 z-0 opacity-55 pointer-events-none">
          <ColorBends
            colors={colorBendsColors || ["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={90}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.15}
            parallax={0.5}
            iterations={1}
            intensity={1.5}
            bandWidth={6}
            transparent
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/80 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.85)_80%)] pointer-events-none" />
        </div>
      )}

      {/* FloatingLines shader background */}
      {floatingLines && (
        <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
          <FloatingLines
            linesGradient={floatingLinesColors}
            gradientStart={floatingLinesStartColor}
            gradientMid={floatingLinesMidColor}
            gradientEnd={floatingLinesEndColor}
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={8}
            lineDistance={8}
            bendRadius={8}
            bendStrength={-2}
            interactive={true}
            parallax={true}
            animationSpeed={1}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.85)_80%)] pointer-events-none" />
        </div>
      )}

      {/* Prism shader background */}
      {prism && (
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Prism
            animationType={prismAnimationType || "rotate"}
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={prismHueShift !== undefined ? prismHueShift : 0}
            colorFrequency={1}
            noise={0.5}
            glow={1}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.85)_80%)] pointer-events-none" />
        </div>
      )}

      {/* Lightfall shader background */}
      {lightfall && (
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Lightfall
            colors={lightfallColors || ["#A6C8FF", "#5227FF", "#FF9FFC"]}
            backgroundColor={lightfallBgColor || "#000000"}
            speed={1}
            streakCount={8}
            streakWidth={1}
            streakLength={1}
            glow={1}
            density={1}
            twinkle={1}
            zoom={2}
            backgroundGlow={1}
            opacity={1}
            mouseInteraction={true}
            mouseStrength={1}
            mouseRadius={0.6}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.85)_80%)] pointer-events-none" />
        </div>
      )}

      {/* Particles background */}
      {particles && (
        <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
          <Particles
            particleColors={particleColors || ["#ffffff"]}
            particleCount={particleCount !== undefined ? particleCount : 200}
            particleSpread={particleSpread !== undefined ? particleSpread : 10}
            speed={particleSpeed !== undefined ? particleSpeed : 0.1}
            particleBaseSize={particleBaseSize !== undefined ? particleBaseSize : 100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.85)_80%)] pointer-events-none" />
        </div>
      )}

      {/* GradientBlinds background */}
      {gradientBlinds && (
        <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
          <GradientBlinds
            gradientColors={gradientBlindsColors || ['#FF9FFC', '#5227FF']}
            angle={gradientBlindsAngle !== undefined ? gradientBlindsAngle : 0}
            noise={0.3}
            blindCount={gradientBlindsCount !== undefined ? gradientBlindsCount : 12}
            blindMinWidth={50}
            spotlightRadius={0.5}
            spotlightSoftness={1}
            spotlightOpacity={1}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="lighten"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.85)_80%)] pointer-events-none" />
        </div>
      )}

      {/* Dither background */}
      {dither && (
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <Dither
            waveColor={ditherWaveColor || [0.5, 0.5, 0.5]}
            colorNum={ditherColorNum !== undefined ? ditherColorNum : 4}
            pixelSize={ditherPixelSize !== undefined ? ditherPixelSize : 2}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.85)_80%)] pointer-events-none" />
        </div>
      )}

      {/* ShapeGrid background */}
      {shapeGrid && (
        <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
          <ShapeGrid
            speed={shapeGridSpeed !== undefined ? shapeGridSpeed : 0.5}
            squareSize={shapeGridSquareSize !== undefined ? shapeGridSquareSize : 40}
            direction={shapeGridDirection || 'right'}
            borderColor={shapeGridBorderColor || '#1f1f1f'}
            hoverFillColor={shapeGridHoverFillColor || '#e11d48'}
            shape={shapeGridShape || 'square'}
            hoverTrailAmount={shapeGridHoverTrailAmount !== undefined ? shapeGridHoverTrailAmount : 5}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />
        </div>
      )}

      {/* MagicRings background */}
      {magicRings && (
        <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
          <MagicRings
            color={magicRingsColor || "#fc42ff"}
            colorTwo={magicRingsColorTwo || "#42fcff"}
            speed={magicRingsSpeed !== undefined ? magicRingsSpeed : 1}
            ringCount={magicRingsRingCount !== undefined ? magicRingsRingCount : 6}
            attenuation={magicRingsAttenuation !== undefined ? magicRingsAttenuation : 10}
            lineThickness={magicRingsLineThickness !== undefined ? magicRingsLineThickness : 2}
            baseRadius={magicRingsBaseRadius !== undefined ? magicRingsBaseRadius : 0.35}
            radiusStep={magicRingsRadiusStep !== undefined ? magicRingsRadiusStep : 0.1}
            scaleRate={magicRingsScaleRate !== undefined ? magicRingsScaleRate : 0.1}
            opacity={magicRingsOpacity !== undefined ? magicRingsOpacity : 1}
            blur={magicRingsBlur !== undefined ? magicRingsBlur : 0}
            noiseAmount={magicRingsNoiseAmount !== undefined ? magicRingsNoiseAmount : 0.1}
            rotation={magicRingsRotation !== undefined ? magicRingsRotation : 0}
            ringGap={magicRingsRingGap !== undefined ? magicRingsRingGap : 1.5}
            fadeIn={magicRingsFadeIn !== undefined ? magicRingsFadeIn : 0.7}
            fadeOut={magicRingsFadeOut !== undefined ? magicRingsFadeOut : 0.5}
            followMouse={magicRingsFollowMouse !== undefined ? magicRingsFollowMouse : false}
            mouseInfluence={magicRingsMouseInfluence !== undefined ? magicRingsMouseInfluence : 0.2}
            hoverScale={magicRingsHoverScale !== undefined ? magicRingsHoverScale : 1.2}
            parallax={magicRingsParallax !== undefined ? magicRingsParallax : 0.05}
            clickBurst={magicRingsClickBurst !== undefined ? magicRingsClickBurst : false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.85)_80%)] pointer-events-none" />
        </div>
      )}

      {/* Hyperspeed background */}
      {hyperspeed && (
        <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
          <Hyperspeed effectOptions={hyperspeedOptions} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.85)_80%)] pointer-events-none" />
        </div>
      )}

      {/* DotField background */}
      {dotField && (
        <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
          <DotField
            dotRadius={dotFieldProps?.dotRadius}
            dotSpacing={dotFieldProps?.dotSpacing}
            cursorRadius={dotFieldProps?.cursorRadius}
            cursorForce={dotFieldProps?.cursorForce}
            bulgeOnly={dotFieldProps?.bulgeOnly}
            bulgeStrength={dotFieldProps?.bulgeStrength}
            glowRadius={dotFieldProps?.glowRadius}
            sparkle={dotFieldProps?.sparkle}
            waveAmplitude={dotFieldProps?.waveAmplitude}
            gradientFrom={dotFieldProps?.gradientFrom}
            gradientTo={dotFieldProps?.gradientTo}
            glowColor={dotFieldProps?.glowColor}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* DotGrid background */}
      {dotGrid && (
        <div className="absolute inset-0 z-0 opacity-90 pointer-events-none">
          <DotGrid
            dotSize={dotGridProps?.dotSize || 8}
            gap={dotGridProps?.gap || 20}
            baseColor={dotGridProps?.baseColor || "#e11d48"}
            activeColor={dotGridProps?.activeColor || "#fb7185"}
            proximity={dotGridProps?.proximity || 140}
            shockRadius={dotGridProps?.shockRadius || 250}
            shockStrength={dotGridProps?.shockStrength || 5}
            resistance={dotGridProps?.resistance || 750}
            returnDuration={dotGridProps?.returnDuration || 1.5}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.75)_85%)] pointer-events-none" />
        </div>
      )}

      {/* Iridescence background (default shader for service pages) */}
      {(iridescence || (!colorBends && !floatingLines && !prism && !lightfall && !particles && !gradientBlinds && !dither && !shapeGrid && !magicRings && !hyperspeed && !dotField && !dotGrid)) && (
        <div className="absolute inset-0 z-0 opacity-85 pointer-events-none overflow-hidden">
          <Iridescence
            color={activeIridescenceColor}
            speed={iridescenceSpeed !== undefined ? iridescenceSpeed : 0.9}
            amplitude={iridescenceAmplitude !== undefined ? iridescenceAmplitude : 0.15}
            mouseReact={iridescenceMouseReact !== undefined ? iridescenceMouseReact : true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.75)_80%)] pointer-events-none" />
        </div>
      )}

      {/* Ambient Glows */}
      {!colorBends && !floatingLines && !prism && !lightfall && !particles && !gradientBlinds && !dither && !shapeGrid && !magicRings && !hyperspeed && !dotField && !dotGrid && !iridescence && (
        <>
          <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-rose-500/[0.06] rounded-full blur-[110px] pointer-events-none z-[1]" />
          <div className="absolute bottom-0 right-1/4 w-[550px] h-[550px] bg-violet-500/[0.04] rounded-full blur-[130px] pointer-events-none z-[1]" />
        </>
      )}

      {/* Background Image (Hidden/Commented to show bright animations) */}
      {/*
      {bgImage && !colorBends && !floatingLines && !prism && !lightfall && !particles && !gradientBlinds && !dither && !shapeGrid && !magicRings && !hyperspeed && !dotField && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={typeof title === "string" ? title : badge || "Hero Background"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-100 select-none pointer-events-none transition-transform duration-1000 scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.15)_60%,transparent_100%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
        </div>
      )}
      */}

      <div className="max-w-7xl mx-auto relative z-10 w-full px-6 md:px-12 xl:px-8 flex-grow flex flex-col justify-between">
        {/* Breadcrumb Navigation - Pinned to the top of the content container */}
        <nav className="flex items-center justify-start gap-2.5 text-xs md:text-sm font-semibold tracking-widest text-zinc-400 mb-3 overflow-x-auto whitespace-nowrap py-1">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors text-zinc-400">
                    {crumb.label.toUpperCase()}
                  </Link>
                ) : (
                  <span className="text-rose-500 font-semibold">{crumb.label.toUpperCase()}</span>
                )}
                {!isLast && <ChevronRight size={12} className="text-zinc-700 flex-shrink-0" />}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Headline block - Centered with tight vertical gaps */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center my-auto py-3 md:py-4">
          <Reveal delay={0.05}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.18] mb-4 text-white text-center font-sans">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-zinc-200 text-base md:text-lg font-medium leading-relaxed max-w-3xl text-center mx-auto">
              {subtitle}
            </p>
          </Reveal>

          {children && (
            <Reveal delay={0.15}>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {children}
              </div>
            </Reveal>
          )}
        </div>

      </div>
    </section>
  );
}
