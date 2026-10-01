"use client";

import Link from "next/link";


import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CalendarCheck,
  CalendarDays,
  CircleUserRound,
  Gavel,
  MessageSquare,
  Scale,
  Search,
} from "lucide-react";

/* ============================ TOKENS ============================ */
const EYEBROW = "#DD9C5E";
const BTN = "#A27236";
const ICON = "#E9C176";
const CTA_BG = "#6C4F3E";
const BASE = "/webp/assets/Home-page/justivon";

const HEAD_GAP = "mt-16"; // identical 64px heading -> visual gap in every section (matches reference)
const WRAP = "max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10";

/* ============================ ASSETS ============================ */
// pad = transparent padding [left, top, right, bottom] in source px (measured from alpha)
type Asset = { src: string; w: number; h: number; alt: string; pad?: [number, number, number, number] };
const A: Record<string, Asset> = {
  logo: { src: `${BASE}/hero/logo.webp`, w: 181, h: 45, alt: "Justivon" },
  hero: { src: `${BASE}/hero/hero (2).webp`, w: 2591, h: 2754, alt: "Solicitors with service tags", pad: [370, 320, 313, 484] },
  badge: { src: `${BASE}/hero/Social Proof Pill Badge-hero.webp`, w: 1163, h: 270, alt: "Trusted by 500+ clients", pad: [42, 18, 44, 66] },
  what: { src: `${BASE}/what-is-justivon/WHAT IS JUSTIVON_.webp`, w: 917, h: 846, alt: "Justivon building" },
  find: { src: `${BASE}/find-your-legal-expert/FIND YOUR LEGAL EXPERT.webp`, w: 3633, h: 2154, alt: "Search and solicitor cards", pad: [60, 0, 60, 5] },
  book: { src: `${BASE}/book-a-consultation/BOOK A CONSULTATION.webp`, w: 3660, h: 2184, alt: "Consultation booking", pad: [60, 48, 0, 93] },
  work: { src: `${BASE}/everything-in-one-legal-workspace/THE FOUR CORNERSTONES.webp`, w: 2754, h: 2754, alt: "Legal workspace widgets", pad: [480, 320, 405, 527] },
  both: { src: `${BASE}/built-for-both-sides/BUILT FOR BOTH SIDES.webp`, w: 3360, h: 1728, alt: "Client and legal professional" },
};
const pillar = (n: number, name: string): Asset => ({
  src: `${BASE}/the-four-cornerstones/Pillar ${n}_ ${name}.webp`,
  w: 996, h: 1251, alt: name, pad: [49, 48, 49, 50],
});
const PILLARS = [
  pillar(1, "Verified Professionals"),
  pillar(2, "Secure Booking"),
  pillar(3, "Private Consultations"),
  pillar(4, "Transparent Fees"),
];

/** Natural aspect ratio at design width; transparent padding trimmed with negative margins. Never cropped. */
function Pic({ a, w, trim = true, priority, className = "" }: { a: Asset; w: number; trim?: boolean; priority?: boolean; className?: string }) {
  const s = w / a.w;
  const [l, t, r, b] = trim && a.pad ? a.pad : [0, 0, 0, 0];
  return (
    <Image
      src={a.src}
      alt={a.alt}
      width={Math.round(w)}
      height={Math.round(a.h * s)}
      quality={90}
      unoptimized
      priority={priority}
      draggable={false}
      className={`block h-auto max-w-none select-none ${className}`}
      style={{ width: w, height: "auto", margin: `${-t * s}px ${-r * s}px ${-b * s}px ${-l * s}px` }}
    />
  );
}

/* ============================ HELPERS ============================ */
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[14px] leading-[14px] font-semibold tracking-[0.55px] uppercase" style={{ color: EYEBROW }}>
      {children}
    </p>
  );
}
const H1 = "text-[32px] sm:text-[48px] leading-[40px] sm:leading-[56px] font-bold tracking-[-1.2px] text-white";
const BODY = "text-[18px] leading-[26px] font-normal text-white/80";

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: ReactNode; body?: string }) {
  return (
    <div className="text-center flex flex-col items-center gap-4">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={H1}>{title}</h2>
      {body && <p className={`${BODY} max-w-[760px]`}>{body}</p>}
    </div>
  );
}
const lift = "transition-transform duration-300 ease-out hover:-translate-y-2";

const BTN_CLS = "inline-flex items-center gap-3 rounded-lg px-8 h-[50px] text-[13px] leading-[18px] font-semibold tracking-[0.13px]";

function Hero() {
  return (
    <section className="relative pt-[120px] pb-[60px]">
      <div className={`${WRAP} grid lg:grid-cols-[540px_1fr] items-center gap-6`}>
        <Reveal className="lg:pl-[27px]">
          <div className="mb-10">
            <Pic a={A.logo} w={181} priority />
          </div>
          <h1 className={`${H1} !text-[48px] !leading-[56px]`}>
            Find the Right <br /> Solicitor for Your <br />
            <span style={{ color: BTN }}>Legal Needs</span>
          </h1>
          <p className={`${BODY} mt-6 max-w-[470px] !text-white/90`}>
            Connect with verified solicitors across immigration, family, criminal, property, corporate, employment and more.
          </p>
          <div className="mt-8 flex flex-wrap gap-5">
            <Link href="/contact#contact-form" className={`${lift} ${BTN_CLS} text-white`} style={{ background: BTN }}>
              Get Started <ArrowRight size={16} />
            </Link>
            <a href="https://justivon.devopstrio.co.uk/" target="_blank" rel="noopener noreferrer" className={`${lift} ${BTN_CLS} bg-white text-[#2B2723]`}>
              Explore Justivon
            </a>
          </div>
          <div className="mt-8 ml-2"><Pic a={A.badge} w={389} /></div>
        </Reveal>
        {/* no overflow clipping here: the glow must fade out naturally instead of ending in a visible box */}
        <Reveal delay={150} className="flex justify-center lg:justify-end">
          <Pic a={A.hero} w={890} priority />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ 2. WHAT IS JUSTIVON (sticky, scroll-driven) ============================ */
const STEPS = [
  { n: "01", t: "Find", d: "Search by legal service, location, and your specific legal matter.", Icon: Search, x: 106, y: 0 },
  { n: "02", t: "Compare", d: "Review solicitor profiles, experience, services, and client reviews.", Icon: Scale, x: 299, y: 135 },
  { n: "03", t: "Book", d: "Choose a suitable solicitor and book your consultation through Justivon.", Icon: CalendarCheck, x: 505, y: 0 },
  { n: "04", t: "Connect", d: "Connect with your solicitor and discuss your legal matter securely.", Icon: CircleUserRound, x: 750, y: 133 },
];

function WhatIs() {
  const outer = useRef<HTMLElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0); // -1 = static (small screens)
  const [h, setH] = useState<number | undefined>(undefined);

  useEffect(() => {
    const update = () => {
      const o = outer.current, i = inner.current;
      if (!o || !i) return;
      if (window.innerWidth < 1024) { setH(undefined); setActive(-1); return; }
      setH(i.offsetHeight + window.innerHeight * 3.2); // 4 steps, ~80vh of scroll each
      const travel = o.offsetHeight - i.offsetHeight;
      const p = Math.min(1, Math.max(0, -o.getBoundingClientRect().top / travel));
      setActive(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length))); // same logic forwards + backwards
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  return (
    <section id="what" ref={outer} style={{ height: h }} className="relative">
      <div ref={inner} className="lg:sticky lg:top-0 pt-[110px] lg:pt-[140px] pb-10">
        <div className={WRAP}>
          <SectionHead
            eyebrow="What is Justivon?"
            title="Your Digital Gateway to Legal Support"
            body="Justivon connects people with legal professionals through a simple digital experience built around discovery, communication, appointments, and legal journey management."
          />
          <div className={`${HEAD_GAP} relative grid grid-cols-2 gap-y-12 lg:block lg:h-[375px]`}>
            {STEPS.map(({ n, t, d, Icon, x, y }, i) => {
              const st = active < 0 ? "idle" : i === active ? "on" : i < active ? "done" : "off";
              const on = st === "on";
              const lit = st === "on" || st === "done";
              return (
                <div
                  key={t}
                  style={{ ["--x" as string]: `${x}px`, ["--y"]: `${y}px` } as CSSProperties}
                  className="flex flex-col items-center text-center lg:absolute lg:w-[200px] lg:-translate-x-1/2 lg:[left:var(--x)] lg:[top:var(--y)]"
                >
                  <div className={`flex flex-col items-center transition-all duration-700 ease-out ${on ? "-translate-y-1.5" : ""} ${st === "off" ? "opacity-50" : "opacity-100"}`}>
                    <div
                      className="relative w-12 h-12 rounded-full border grid place-items-center transition-all duration-700"
                      style={{
                        borderColor: on ? ICON : lit ? "rgba(233,193,118,.65)" : "rgba(233,193,118,.32)",
                        background: on ? "rgba(233,193,118,.14)" : "rgba(233,193,118,.03)",
                        boxShadow: on ? "0 0 34px 10px rgba(233,193,118,.42), inset 0 0 14px rgba(233,193,118,.3)" : "none",
                        transform: on ? "scale(1.14)" : "scale(1)",
                      }}
                    >
                      {on && <span className="absolute inset-0 rounded-full border animate-ping opacity-30" style={{ borderColor: ICON }} />}
                      <Icon size={20} color={ICON} />
                    </div>
                    <p className={`mt-3 text-[14px] leading-[14px] tracking-[0.55px] transition-colors duration-500 ${on ? "text-white" : "text-white/60"}`}>{n}</p>
                    <h3 className="mt-1 text-[22px] leading-7 font-semibold text-white">{t}</h3>
                    <p className={`mt-1 max-w-[150px] text-[12px] leading-4 transition-colors duration-500 ${on ? "text-white/90" : "text-white/60"}`}>{d}</p>
                  </div>
                  {/* dotted connector + glowing node */}
                  <div className="relative mt-4 hidden lg:block w-px h-10 border-l border-dotted" style={{ borderColor: "rgba(233,193,118,.35)" }}>
                    <span
                      className="absolute left-[-1px] top-0 w-px transition-[height] duration-700 ease-out"
                      style={{ height: lit ? "100%" : 0, background: ICON }}
                    />
                  </div>
                  <span
                    className={`hidden lg:block w-3 h-3 rounded-full transition-all duration-700 ${on ? "animate-pulse scale-125" : ""}`}
                    style={{
                      background: "#FFE2A3",
                      opacity: st === "off" ? 0.35 : 1,
                      boxShadow: on ? "0 0 22px 8px rgba(255,214,140,.85)" : "0 0 12px 3px rgba(255,214,140,.4)",
                    }}
                  />
                </div>
              );
            })}
            <div className="col-span-2 flex justify-center lg:absolute lg:right-0 lg:bottom-[22px] lg:block">
              <Pic a={A.what} w={312} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ 3. FIND YOUR LEGAL EXPERT ============================ */
function FindExpert() {
  return (
    <section id="find" className="pt-[105px] pb-[75px]">
      <div className={WRAP}>
        <Reveal>
          <SectionHead
            eyebrow="Find your legal expert"
            title="Search. Compare. Choose With Clarity."
            body="Discover legal professionals based on expertise, location, pricing, ratings, reviews, and experience."
          />
        </Reveal>
        <Reveal delay={120} className={`${HEAD_GAP} flex justify-center`}>
          <Pic a={A.find} w={1211} />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ 4. BOOK A CONSULTATION ============================ */
function Book() {
  return (
    <section className="py-[75px]">
      <div className={WRAP}>
        <Reveal>
          <SectionHead
            eyebrow="Book a consultation"
            title="From Search to Consultation in Minutes"
            body="Once users find the right professional, make the next step obvious. Experience frictionless booking, verified bar credentials, and protected real time calendars."
          />
        </Reveal>
        <Reveal delay={120} className={`${HEAD_GAP} flex justify-center`}>
          <Pic a={A.book} w={1220} />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ 5. EXPLORE LEGAL SERVICES (layout-aligned carousel) ============================ */
const SERVICES = [
  { t: "Immigration & Nationality Law", img: `${BASE}/explore-legal-services/Immigration-and-Nationality-Law.webp` },
  { t: "Family Law", img: `${BASE}/explore-legal-services/Family Law.webp` },
  { t: "Criminal Law", img: `${BASE}/explore-legal-services/Criminal Law.webp` },
  { t: "Property Law", img: `${BASE}/explore-legal-services/Property Law.webp` },
  { t: "Corporate Law", img: `${BASE}/explore-legal-services/Corporate Law.webp` },
  { t: "Employment Law", img: `${BASE}/explore-legal-services/Employment Law.webp` },
];

function Explore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollBy = (dir: number) => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("article")?.clientWidth || 380;
    el.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="pt-[75px] pb-[75px]">
      <div className={WRAP}>
        <Reveal>
          <SectionHead
            eyebrow="Explore legal services"
            title="Legal Support for Your Needs"
            body="Explore Justivon's key legal practice areas and connect with the right solicitor for your specific legal matter."
          />
        </Reveal>

        {/* Carousel Container restricted strictly to page layout */}
        <Reveal delay={120} className={`${HEAD_GAP} relative`}>
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-2 -mx-2 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {SERVICES.map((s, i) => (
              <article
                key={s.t}
                className={`${lift} flex-none w-[280px] sm:w-[360px] lg:w-[380px] rounded-2xl overflow-hidden`}
              >
                <Image
                  src={s.img}
                  alt={s.t}
                  width={1244}
                  height={1089}
                  unoptimized
                  className="w-full h-auto object-cover select-none rounded-2xl"
                  draggable={false}
                />
              </article>
            ))}
          </div>

          {/* Navigation controls */}
          <div className="mt-8 flex justify-center sm:justify-start gap-3">
            <button
              aria-label="Previous services"
              onClick={() => scrollBy(-1)}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border grid place-items-center transition-all ${
                canScrollLeft
                  ? "border-white/70 text-white hover:bg-white/10"
                  : "border-white/20 text-white/30 cursor-not-allowed"
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              aria-label="Next services"
              onClick={() => scrollBy(1)}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border grid place-items-center transition-all ${
                canScrollRight
                  ? "border-white/70 text-white hover:bg-white/10"
                  : "border-white/20 text-white/30 cursor-not-allowed"
              }`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ 6. THE FOUR CORNERSTONES ============================ */
function Cornerstones() {
  const VIS = 288; // visible card width (4 cards + 3x21px gaps = 1216)
  const w = (VIS * 996) / (996 - 98);
  return (
    <section className="pt-24 pb-[75px]">
      <div className={WRAP}>
        <Reveal>
          <SectionHead
            eyebrow="The four cornerstones"
            title="Architecture of Client Assurance"
            body="Engineered to dismantle traditional legal ambiguity through continuous cryptographic and regulatory enforcement."
          />
        </Reveal>
        <div className={`${HEAD_GAP} grid sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-x-[21px] gap-y-6`}>
          {PILLARS.map((p, i) => (
            <Reveal key={p.alt} delay={i * 90}>
              <div className={lift}><Pic a={p} w={w} /></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ 7. EVERYTHING IN ONE LEGAL WORKSPACE ============================ */
const FEATS = [
  { t: "Case Management", Icon: Briefcase },
  { t: "Hearing Tracking", Icon: Gavel },
  { t: "Appointment Scheduling", Icon: CalendarDays },
  { t: "Client Lawyer Communication", Icon: MessageSquare },
];
function Workspace() {
  return (
    <section className="py-[75px]">
      <div className={`${WRAP} grid lg:grid-cols-[520px_1fr] items-center gap-10`}>
        <Reveal>
          <Eyebrow>Everything in one legal workspace</Eyebrow>
          <h2 className={`${H1} mt-4`}>
            From First <br /><span style={{ color: EYEBROW }}>Consultation</span> <br />to Case Tracking
          </h2>
          <p className={`${BODY} mt-5`}>
            Organize and manage your legal journey through connected digital workflows. Eliminate fragmented emails, unsecured attachments, and missed court milestones.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
            {FEATS.map(({ t, Icon }) => (
              <div key={t} className={`${lift} flex items-center gap-3`}>
                <span className="w-10 h-10 rounded-lg grid place-items-center bg-white/5"><Icon size={20} color={ICON} /></span>
                <span className="text-[14px] leading-[22px] text-white">{t}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150} className="flex justify-center lg:justify-end">
          <Pic a={A.work} w={918} />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ 8. BUILT FOR BOTH SIDES ============================ */
function BothSides() {
  return (
    <section className="py-[75px]">
      <div className={WRAP}>
        <Reveal><SectionHead eyebrow="Built for both sides" title="One Platform. Two Connected Experiences." /></Reveal>
        <Reveal delay={120} className={`${HEAD_GAP} flex justify-center`}>
          <Pic a={A.both} w={1120} />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ 9. CTA ============================ */
function CTA() {
  return (
    <section className="pt-[60px] pb-[100px]">
      <div className={WRAP}>
        <Reveal>
          <div
            className="rounded-2xl px-8 sm:px-12 py-10 flex flex-col md:flex-row md:items-center justify-between gap-8"
            style={{ backgroundColor: CTA_BG }}
          >
            <div className="max-w-[640px]">
              <h2 className={H1}>Start Your Legal Journey With Justivon</h2>
              <p className={`${BODY} mt-3`}>
                Find the right professional, make informed connections, and keep your legal journey organized in one place.
              </p>
            </div>
            <Link href="/contact#contact-form" className={`${lift} shrink-0 inline-flex items-center gap-2 rounded-lg px-6 h-12 text-[13px] leading-[18px] font-semibold tracking-[0.13px] text-white`} style={{ background: BTN }}>
              Get Started Today <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ PAGE ============================ */
export default function Page() {
  return (
    <main className="bg-black text-white font-[Inter,ui-sans-serif,system-ui,sans-serif] overflow-x-clip">
      <Hero />
      <WhatIs />
      <FindExpert />
      <Book />
      <Explore />
      <Cornerstones />
      <Workspace />
      <BothSides />
      <CTA />
    </main>
  );
}
