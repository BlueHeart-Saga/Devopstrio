"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Play } from 'lucide-react';

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
  rawItem?: any;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
  onCardClick?: (item: ChromaItem, index: number) => void;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = '',
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out',
  onCardClick
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo: ChromaItem[] = [
    {
      image: '/assets/herocard/homepage.png',
      title: 'DevOps Transformation Journey',
      subtitle: 'Keynote Demo Video &bull; 12:45',
      handle: 'HD Video',
      location: 'Enterprise',
      borderColor: '#f43f5e',
      gradient: 'linear-gradient(145deg, #f43f5e, #09090b)',
    },
    {
      image: '/assets/herocard/servicespage.png',
      title: 'Cloud Security & Compliance',
      subtitle: 'Architecture Deep-Dive &bull; 18:20',
      handle: 'Product Walkthrough',
      location: 'Cloud Native',
      borderColor: '#e11d48',
      gradient: 'linear-gradient(210deg, #e11d48, #09090b)',
    },
    {
      image: '/assets/herocard/industriespage.png',
      title: 'AI Data Innovation Platform',
      subtitle: 'Executive Briefing &bull; 09:15',
      handle: 'Live Stream',
      location: 'AI & Data',
      borderColor: '#be123c',
      gradient: 'linear-gradient(165deg, #be123c, #09090b)',
    },
    {
      image: '/assets/data_overview_hero.png',
      title: 'SafeSign Enterprise Automation',
      subtitle: 'Solution Showcase &bull; 14:00',
      handle: 'SaaS Platform',
      location: 'Security',
      borderColor: '#f43f5e',
      gradient: 'linear-gradient(195deg, #f43f5e, #09090b)',
    }
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
    setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleClick = (item: ChromaItem, index: number) => {
    if (onCardClick) {
      onCardClick(item, index);
    } else if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = e => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full flex flex-wrap justify-center items-stretch gap-5 ${className}`}
      style={
        {
          '--r': `${radius}px`,
          '--x': '50%',
          '--y': '50%'
        } as React.CSSProperties
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleClick(c, i)}
          className="group relative flex flex-col w-full sm:w-[320px] rounded-[24px] overflow-hidden border border-rose-500/30 hover:border-rose-500 transition-all duration-300 cursor-pointer shadow-xl hover:scale-[1.02]"
          style={
            {
              '--card-border': c.borderColor || '#f43f5e',
              background: c.gradient || 'linear-gradient(145deg, #f43f5e, #09090b)',
              '--spotlight-color': 'rgba(255,255,255,0.25)'
            } as React.CSSProperties
          }
        >
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
            }}
          />
          <div className="relative z-10 flex-1 p-2.5 box-border">
            <div className="relative w-full h-[180px] rounded-[16px] overflow-hidden">
              <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </div>
          <footer className="relative z-10 p-4 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
            <h3 className="m-0 text-[1.05rem] font-bold tracking-tight text-white group-hover:text-rose-400 transition-colors">{c.title}</h3>
            {c.handle && <span className="text-[0.75rem] font-mono font-bold uppercase tracking-wider text-rose-400 px-2 py-0.5 rounded-full bg-black/60 border border-rose-500/30 text-right h-fit">{c.handle}</span>}
            <p className="m-0 text-[0.85rem] text-zinc-300 col-span-2 mt-1 line-clamp-2">{c.subtitle}</p>
            {c.location && <span className="text-[0.8rem] font-medium text-zinc-400 col-span-2 text-right mt-1">{c.location}</span>}
          </footer>
        </article>
      ))}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)'
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
          opacity: 1
        }}
      />
    </div>
  );
};

export default ChromaGrid;
