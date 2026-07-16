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
  children?: React.ReactNode;
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
  children,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen flex flex-col justify-between pt-24 pb-12 md:pt-28 md:pb-16 border-b border-zinc-900/60">
      
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
          {/* Gradients to blend it nicely into the dark page theme */}
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
          {/* Gradients to blend it nicely into the dark page theme */}
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
          {/* Gradients to blend it nicely into the dark page theme */}
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
          {/* Gradients to blend it nicely into the dark page theme */}
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
          {/* Gradients to blend it nicely into the dark page theme */}
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
          {/* Gradients to blend it nicely into the dark page theme */}
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
          {/* Gradients to blend it nicely into the dark page theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.85)_80%)] pointer-events-none" />
        </div>
      )}

      {/* Ambient Glows */}
      {!colorBends && !floatingLines && !prism && !lightfall && !particles && !gradientBlinds && !dither && (
        <>
          <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-rose-500/[0.04] rounded-full blur-[110px] pointer-events-none z-[1]" />
          <div className="absolute bottom-0 right-1/4 w-[550px] h-[550px] bg-violet-500/[0.02] rounded-full blur-[130px] pointer-events-none z-[1]" />
        </>
      )}

      {/* Background Image */}
      {bgImage && !colorBends && !floatingLines && !prism && !lightfall && !particles && !gradientBlinds && !dither && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt={typeof title === "string" ? title : badge || "Hero Background"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-100 select-none pointer-events-none transition-transform duration-1000 scale-[1.02]"
          />
          {/* Subtle dark radial overlay to ensure text readability without obscuring the background image */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.15)_60%,transparent_100%)] pointer-events-none" />
          {/* Bottom shadow fade to blend with the black page background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 w-full px-12 xl:px-8 flex-grow flex flex-col justify-between">
        {/* Breadcrumb Navigation - Pinned to the top of the content container */}
        <nav className="flex items-center justify-start gap-2.5 text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-zinc-400 mb-6 overflow-x-auto whitespace-nowrap py-1">
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
                {!isLast && <ChevronRight size={9} className="text-zinc-700 flex-shrink-0" />}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Headline block - Centered my-auto */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center my-auto py-8">
          {badge && (
            <Reveal>
              <div className="flex items-center justify-center mb-6">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-rose-500">
                  {badge}
                </span>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6 text-white text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-zinc-400 text-xs md:text-sm lg:text-base leading-relaxed font-semibold max-w-3xl text-center mx-auto opacity-90">
              {subtitle}
            </p>
          </Reveal>

          {children && (
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {children}
              </div>
            </Reveal>
          )}
        </div>

      </div>
    </section>
  );
}
