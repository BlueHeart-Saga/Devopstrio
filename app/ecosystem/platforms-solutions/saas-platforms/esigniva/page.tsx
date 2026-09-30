"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, CirclePlay } from "lucide-react";

/* ───────────────────────── constants ───────────────────────── */
const BASE = "/webp/assets/Home-page/esigniva";
const C = "max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10"; // content container
const FRAME = "relative max-w-[1440px] mx-auto"; // 1440 design frame (images anchor here)
const EYEBROW = "text-[14px] leading-[14px] font-semibold tracking-[0.55px] uppercase text-[#2DD4BF]";
const H1 = "text-[34px] leading-[42px] sm:text-[42px] sm:leading-[50px] xl:text-[48px] xl:leading-[56px] font-bold tracking-[-1.2px] text-white";
const BODY = "text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-white";
const SEC = "pt-24"; // same vertical rhythm between every section
const HEAD_GAP = "mb-14"; // same gap between heading block and visual in every section

/* ───────────────────────── Reveal (scroll animation) ───────────────────────── */
function Reveal({
  children, delay = 0, className = "", style,
}: { children: ReactNode; delay?: number; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      onTransitionEnd={() => on && setDone(true)}
      style={{ ...style, transitionDelay: done ? "0ms" : `${delay}s` }}
      className={`transition-[opacity,transform] ease-out motion-reduce:transition-none ${done ? "duration-300" : "duration-700"} ${
        on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ───────────────────────── Shot: natural-aspect image, transparent padding trimmed by negative margins (never cropped) ───────────────────────── */
type Img = { src: string; w: number; h: number; trim: [number, number, number, number]; scale: number; alt: string };
const img = (sec: string, file: string, w: number, h: number, trim: Img["trim"], scale: number, alt: string): Img => ({
  src: `${BASE}/${sec}/${file}`, w, h, trim, scale, alt,
});

function Shot({
  d, frame, fixed, maxH, lift, priority, delay = 0.05, className = "",
}: { d: Img; frame?: boolean; fixed?: boolean; maxH?: string; lift?: boolean; priority?: boolean; delay?: number; className?: string }) {
  const [l, t, r, b] = d.trim;
  const tw = d.w - l - r;
  const th = d.h - t - b;
  const px = Math.round(tw * d.scale);
  const byH = maxH ? `calc((${maxH}) * ${(tw / th).toFixed(4)})` : "";
  const vars = {
    "--wf": fixed ? `${px}px` : `min(100%, ${px}px${byH ? `, ${byH}` : ""})`,
    "--wp": byH ? `min(${(px / 14.4).toFixed(2)}%, ${byH})` : `${(px / 14.4).toFixed(2)}%`,
  } as CSSProperties;
  return (
    <Reveal
      delay={delay}
      style={vars}
      className={`flow-root w-[var(--wf)] ${frame ? "xl:w-[var(--wp)]" : ""} ${lift ? "hover:-translate-y-1.5" : ""} ${className}`}
    >
      <Image
        src={d.src}
        alt={d.alt}
        width={d.w}
        height={d.h}
        priority={priority}
        draggable={false}
        sizes={`(min-width:1280px) ${px}px, 100vw`}
        className="block h-auto max-w-none select-none"
        style={{
          width: `${(d.w / tw) * 100}%`,
          marginLeft: `${(-l / tw) * 100}%`,
          marginTop: `${(-t / tw) * 100}%`,
          marginRight: `${(-r / tw) * 100}%`,
          marginBottom: `${(-b / tw) * 100}%`,
        }}
      />
    </Reveal>
  );
}

/* ───────────────────────── icons (exact filenames from esigniva icons.zip) ───────────────────────── */
const ic = (f: string, w: number, h: number) => ({ src: `${BASE}/icons/${f}.png`, w, h });
const ICON = {
  logo: ic("image 1496", 73, 73),
  xCircle: ic("Background (1)", 28, 28),
  checkCircle: ic("Background", 28, 28),
  minus: ic("Icon (1)", 19, 19),
  gavel: ic("Icon (2)", 18, 19),
  tamper: ic("Icon (3)", 19, 16),
  shield: ic("Icon (4)", 15, 18),
  lock: ic("Icon (5)", 14, 18),
  finger: ic("Icon (6)", 14, 15),
  grid: ic("Icon (7)", 15, 15),
  soc: ic("Icon (8)", 17, 16),
  checkLine: ic("Icon", 15, 15),
  checkFill: ic("Vector", 15, 15),
};
function Ico({ i, className = "", size }: { i: (typeof ICON)[keyof typeof ICON]; className?: string; size?: number }) {
  return (
    <Image
      src={i.src} alt="" aria-hidden width={i.w} height={i.h}
      className={`shrink-0 max-w-none ${className}`}
      style={size ? { width: size, height: "auto" } : undefined}
    />
  );
}

/* ───────────────────────── images ───────────────────────── */
const HERO = img("hero", "hero (1).webp", 3203, 2453, [410, 68, 89, 288], 0.334, "eSigniva signing a document on a tablet");
const WHAT = img("what-is-esigniva", "WHAT IS ESIGNIVA_.webp", 3065, 2685, [407, 278, 0, 277], 0.335, "eSigniva document editor with signature fields");
const HOW = [
  img("how-esigniva-works", "Build & Smart Upload.webp", 3323, 2964, [340, 278, 0, 277], 0.334, "AI field detection on an uploaded agreement"),
  img("how-esigniva-works", "Choose Recipients & Smart Order.webp", 3014, 3018, [0, 283, 333, 282], 0.335, "Set signing order dialog"),
  img("how-esigniva-works", "Send, Track & Manage.webp", 2939, 3114, [321, 283, 0, 283], 0.335, "Recipient details and tracking"),
];
const SMART = img("smart-builder-studio", "SMART BUILDER STUDIO.webp", 3603, 2714, [0, 9, 19, 75], 0.3335, "Smart builder studio with standard fields and inspector");
const SIGN = img("signing-workflow", "SIGNING WORKFLOW.webp", 3798, 1740, [74, 96, 74, 128], 0.288, "Document owner, reviewer, signer and observer roles");
const DYN = img("dynamic-device-responsive-engine", "DYNAMIC DEVICE RESPONSIVE ENGINE (2).webp", 3800, 2198, [86, 227, 387, 225], 0.334, "Agreement on laptop, tablet and phone");
const TELE = img("real-time-telemetry", "REAL-TIME TELEMETRY (1) (1).webp", 2523, 2577, [248, 278, 0, 249], 0.334, "Document list with live activity timeline");
const DOC = img("document-management", "DOCUMENT MANAGEMENT.webp", 3574, 1572, [6, 3, 13, 7], 0.334, "Recent agreements repository");
const SEC_IMG = img("security-document-trust", "SECURITY & DOCUMENT TRUST (3).webp", 2938, 3571, [291, 354, 292, 353], 0.264, "Verified partnership agreement with security badges");
const CARDS = [
  "CARD 1_ HR & Recruitment.webp",
  "CARD 2_ Legal & Compliance.webp",
  "CARD 3_ Sales Teams.webp",
  "CARD 4_ Finance & Operations.webp",
  "CARD 5_ Real Estate (1).webp",
  "CARD 6_ Service Businesses & Agencies (1).webp",
].map((f) => img("built-for-modern-businesses", f, 996, 1121, [5, 2, 5, 6], 0.3335, f.replace(/^CARD \d_ /, "").replace(/ \(1\)/, "").replace(".webp", "")));

/* ───────────────────────── shared heading block ───────────────────────── */
function Head({
  eyebrow, title, body, children, left, bodyW = "max-w-[640px]", titleW = "max-w-[1100px]", gap = HEAD_GAP,
}: { eyebrow: string; title: ReactNode; body: string; children?: ReactNode; left?: boolean; bodyW?: string; titleW?: string; gap?: string }) {
  const a = left ? "" : "mx-auto text-center";
  return (
    <div className={gap}>
      <Reveal><p className={`${EYEBROW} ${a}`}>{eyebrow}</p></Reveal>
      <Reveal delay={0.06}><h2 className={`${H1} mt-5 ${titleW} ${a}`}>{title}</h2></Reveal>
      <Reveal delay={0.12}><p className={`${BODY} mt-5 ${bodyW} ${a}`}>{body}</p></Reveal>
      {children}
    </div>
  );
}

/* ═════════════════════════ 1. HERO ═════════════════════════ */
const Hero = () => (
  <section className="relative overflow-x-clip pb-20 xl:pb-0 xl:min-h-[790px]">
    <div className={FRAME}>
      <div className={`${C} pt-[120px] xl:pt-[169px]`}>
        <div className="xl:pl-5">
          <Reveal delay={0}>
            <div className="flex items-center gap-3.5">
              <Image src={ICON.logo.src} alt="Esigniva logo" width={73} height={73} priority className="h-[44px] w-[44px]" />
              <span className="text-[28px] leading-[32px] font-semibold text-white">Esigniva</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-11 text-[40px] leading-[48px] sm:text-[56px] sm:leading-[65px] font-bold tracking-[-1.4px] text-white">
              Sign Documents.<br />Simplify Business.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className={`${BODY} mt-10 max-w-[452px]`}>
              eSigniva brings electronic signatures and document workflows together in one simple experience. Send documents, collect signatures,
              manage signing activities, and keep your agreements moving digitally.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-[26px] flex flex-wrap gap-4">
              <Link href="/contact" className="group inline-flex h-[43px] items-center gap-2 rounded-lg bg-[#26756E] px-[26px] text-[13px] leading-[18px] font-semibold tracking-[0.13px] text-white shadow-[0_8px_28px_rgba(45,212,191,0.25)] transition hover:-translate-y-0.5 hover:bg-[#2C877F]">
                Get Started <ArrowRight className="h-[14px] w-[14px] transition group-hover:translate-x-0.5" />
              </Link>
              <a href="https://safesign.devopstrio.co.uk/" target="_blank" rel="noopener noreferrer" className="inline-flex h-[43px] items-center gap-2 rounded-lg border border-white px-[22px] text-[13px] leading-[18px] font-semibold tracking-[0.13px] text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                <CirclePlay className="h-[14px] w-[14px]" /> Explore How It Works
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <Shot d={HERO} frame priority delay={0} className="mt-10 xl:mt-0 xl:absolute xl:right-[2.1%] xl:top-[23px] pointer-events-none" />

    </div>
  </section>
);

/* ═════════════════════════ 2. WHAT IS ESIGNIVA ═════════════════════════ */
const WHAT_LIST = ["Frictionless Workflow Automation", "Hardware-Backed Security", "Developer-First API & Integrations", "Legally Binding & Court-Admissible"];
const What = () => (
  <section className="relative overflow-x-clip pt-16 xl:pt-[37px] xl:min-h-[620px]">
    <div className={FRAME}>
      <div className={C}>
        <div className="xl:pl-5">
          <Reveal><p className={EYEBROW}>What is eSigniva?</p></Reveal>
          <Reveal delay={0.06}><h2 className={`${H1} mt-5 max-w-[600px]`}>A Smarter Way to Manage Digital Signatures</h2></Reveal>
          <Reveal delay={0.12}>
            <p className={`${BODY} mt-8 max-w-[470px]`}>
              eSigniva helps businesses move away from manual document signing by bringing document preparation, electronic signatures, and signing
              workflows into one streamlined platform.
            </p>
          </Reveal>
          <ul className="mt-9 space-y-0.5">
            {WHAT_LIST.map((t, i) => (
              <Reveal key={t} delay={0.18 + i * 0.05}>
                <li className="flex items-center gap-2.5 text-[14px] leading-[22px] text-white"><Ico i={ICON.checkFill} size={15} />{t}</li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
      <Shot d={WHAT} frame className="mt-10 xl:mt-0 xl:absolute xl:right-0 xl:top-[-88px] pointer-events-none" />
    </div>
  </section>
);

/* ═════════════════════════ 3. HOW ESIGNIVA WORKS (sticky · one step at a time) ═════════════════════════ */
const STEPS = [
  { n: "01", title: "Build & Smart Upload", desc: "Upload any PDF/DOCX or construct dynamic agreement templates. Our AI engine auto-detects signatures and form fields in milliseconds.", side: "left" as const, imgCls: "xl:justify-end" },
  { n: "02", title: "Choose Recipients & Smart Order", desc: "Configure multi-party signing flows with sequential or parallel approvals, identity challenges, and custom sign-order rules.", side: "right" as const, imgCls: "xl:justify-start" },
  { n: "03", title: "Send, Track & Manage", desc: "Deliver documents to the right recipients, track their activity in real time, and send timely reminders until every signature is complete.", side: "left" as const, imgCls: "xl:justify-end" },
];
const GLOW = { boxShadow: "0 0 0 6px rgba(45,212,191,.22), 0 0 32px rgba(45,212,191,.7)" };

function StepText({ s, desk }: { s: (typeof STEPS)[number]; desk?: boolean }) {
  const mirror = s.side === "right";
  const circle = (
    <div style={GLOW} className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white text-[22px] font-semibold text-[#26756E]">{s.n}</div>
  );
  const text = (
    <>
      <h3 className="text-[20px] leading-[28px] xl:text-[22px] font-semibold text-white">{s.title}</h3>
      <p className="mt-3 max-w-[396px] text-[14px] leading-[22px] text-white">{s.desc}</p>
    </>
  );
  if (!desk) return <div className="flex items-start gap-5">{circle}<div className="pt-3">{text}</div></div>;
  return (
    <div className={`relative w-[500px] ${mirror ? "pr-[104px]" : "pl-[104px]"} pt-[112px]`}>
      <div className={`absolute top-0 ${mirror ? "right-0" : "left-0"}`}>{circle}</div>
      {text}
    </div>
  );
}

function How() {
  const track = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = track.current;
        if (!el) return;
        const total = el.offsetHeight - window.innerHeight;
        setP(Math.min(0.999, Math.max(0, -el.getBoundingClientRect().top / total)));
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  const active = Math.min(2, Math.floor(p * 3));
  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + ((i + 0.5) / 3) * total, behavior: "smooth" });
  };

  return (
    <section className={SEC}>
      <div className={C}>
        <Head
          eyebrow="How eSigniva works" title="From Document to Signed in Simple Steps"
          body="eSigniva simplifies the entire signing journey—from preparing your document to managing the completed agreement."
          bodyW="max-w-[560px]" gap="mb-14 xl:mb-6"
        />
      </div>

      {/* desktop: sticky pane, one step at a time */}
      <div ref={track} className="relative hidden h-[340vh] xl:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          {STEPS.map((s, i) => {
            const a = i === active;
            return (
              <div
                key={s.n}
                aria-hidden={!a}
                className={`absolute inset-0 flex items-center pt-20 transition-all duration-700 ease-out ${
                  a ? "translate-y-0 opacity-100" : `pointer-events-none opacity-0 ${i < active ? "-translate-y-8" : "translate-y-8"}`
                }`}
              >
                <div className={`pointer-events-none absolute inset-x-0 bottom-0 top-20 mx-auto flex max-w-[1440px] items-center ${s.imgCls}`}>
                  <Shot d={HOW[i]} frame maxH="100vh - 240px" delay={0} className={i === 2 ? "xl:mr-[7%]" : ""} />
                </div>
                <div className={`${C} flex w-full ${s.side === "right" ? "justify-end" : "justify-start"}`}>
                  <StepText s={s} desk />
                </div>
              </div>
            );
          })}
          <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-3">
            {STEPS.map((s, i) => (
              <button key={s.n} onClick={() => go(i)} aria-label={`Go to step ${s.n}`} className="h-1.5 w-14 overflow-hidden rounded-full bg-white/15">
                <span className="block h-full rounded-full bg-[#2DD4BF]" style={{ width: `${Math.min(1, Math.max(0, p * 3 - i)) * 100}%` }} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* mobile / tablet: stacked */}
      <div className={`${C} space-y-16 xl:hidden`}>
        {STEPS.map((s, i) => (
          <div key={s.n}>
            <Reveal><StepText s={s} /></Reveal>
            <Shot d={HOW[i]} className="mx-auto mt-8" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═════════════════════════ 4. SMART BUILDER STUDIO ═════════════════════════ */
const PILLS = [
  { i: ICON.soc, t: "SOC2 Type II Compliant" },
  { i: ICON.grid, t: "Sub-Pixel Vector Snapping" },
  { i: ICON.finger, t: "SHA-256 Coordinate Seal" },
];
const Smart = () => (
  <section className={SEC}>
    <div className={C}>
      <Head eyebrow="Smart Builder Studio" title="Make Every Document Ready to Sign"
        body="Prepare documents with the information and fields your recipients need. Intuitive drag-and-drop field orchestration with automated cryptographic compliance rules.">
        <Reveal delay={0.18}>
          <div className="mx-auto mt-7 flex w-fit max-w-full flex-wrap items-center justify-center gap-x-10 gap-y-3 rounded-[28px] bg-[#0E0E0E] px-8 py-3.5 sm:rounded-full">
            {PILLS.map((x) => (
              <span key={x.t} className="inline-flex items-center gap-3 text-[15px] leading-[22px] text-white"><Ico i={x.i} />{x.t}</span>
            ))}
          </div>
        </Reveal>
      </Head>
    </div>
    <Shot d={SMART} className="mx-auto" />
  </section>
);

/* ═════════════════════════ 5. SIGNING WORKFLOW ═════════════════════════ */
const Signing = () => (
  <section className={SEC}>
    <div className={C}>
      <Head eyebrow="Signing Workflow" title={<>Everyone Has a Role.<br className="hidden sm:block" /> Every Signature Has a Place.</>}
        body="From creating and sending to reviewing and signing, eSigniva brings everyone together in a secure and simple way — because great workflows work for everyone."
        bodyW="max-w-[700px]" />
    </div>
    <div className={C}><Shot d={SIGN} lift className="mx-auto" /></div>
  </section>
);

/* ═════════════════════════ 6. DYNAMIC DEVICE RESPONSIVE ENGINE ═════════════════════════ */
const Dynamic = () => (
  <section className={`${SEC} overflow-x-clip`}>
    <div className={C}>
      <Head eyebrow="Dynamic Device Responsive Engine" title={<>SIGN FROM ANYWHERE.<br className="hidden sm:block" /> Your Documents. Your Devices.</>}
        body="Give users the flexibility to review and sign documents wherever business happens. Author on desktop, verify on tablet, execute securely on mobile."
        bodyW="max-w-[660px]" />
    </div>
    <Shot d={DYN} lift className="mx-auto" />
  </section>
);

/* ═════════════════════════ 7. REAL-TIME TELEMETRY ═════════════════════════ */
const Telemetry = () => (
  <section className={`${SEC} relative overflow-x-clip`}>
    <div className={`${FRAME} xl:flex xl:min-h-[685px] xl:items-center`}>
      <div className={`${C} xl:w-full`}>
        <div className="xl:pl-5">
          <Reveal><p className={EYEBROW}>Real-Time Telemetry</p></Reveal>
          <Reveal delay={0.06}><h2 className={`${H1} mt-5 max-w-[440px]`}>Always Know Where Your Document Stands.</h2></Reveal>
          <Reveal delay={0.12}>
            <p className={`${BODY} mt-8 max-w-[420px]`}>
              Remove the uncertainty around pending signatures. Track document progress throughout the signing journey so you know what has been
              completed and what still needs attention.
            </p>
          </Reveal>
        </div>
      </div>
      <Shot d={TELE} frame className="mt-10 xl:mt-0 xl:absolute xl:right-0 xl:bottom-0 pointer-events-none" />
    </div>
  </section>
);

/* ═════════════════════════ 8. DOCUMENT MANAGEMENT ═════════════════════════ */
const Docs = () => (
  <section className={SEC}>
    <div className={C}>
      <Head eyebrow="Document Management" title="Keep Every Document Organized & Accessible" titleW="max-w-[700px]"
        body="Store, organize, track, and manage documents from one secure place — from the moment they are uploaded to the final signed copy."
        bodyW="max-w-[640px]" />
    </div>
    <div className={C}><Shot d={DOC} lift className="mx-auto" /></div>
  </section>
);

/* ═════════════════════════ 9. SECURITY & DOCUMENT TRUST ═════════════════════════ */
const TRUST = [
  { i: ICON.lock, t: "End-to-End Encryption", d: "Data encrypted at rest and in transit via TLS 1.3 cryptographic pipelines." },
  { i: ICON.shield, t: "Verified Identities", d: "Verify authentic signers using passkeys, government ID scans, and live SMS OTPs." },
  { i: ICON.tamper, t: "Tamper-Proof Records", d: "Immutable forensic audit trail. Instantly invalidates if a single pixel shifts." },
  { i: ICON.gavel, t: "Compliance Ready", d: "Meets global statutory requirements for court-admissible legal enforceability." },
];
const Security = () => (
  <section className={`${SEC} relative overflow-x-clip`}>
    <div className={`${FRAME} xl:flex xl:min-h-[756px] xl:items-center`}>
      <div className={`${C} xl:w-full`}>
        <div className="xl:pl-5">
          <Reveal><p className={EYEBROW}>Security &amp; Document Trust</p></Reveal>
          <Reveal delay={0.06}><h2 className={`${H1} mt-5 max-w-[560px]`}>Your Documents. Safe, Secure &amp; Trusted.</h2></Reveal>
          <Reveal delay={0.12}>
            <p className={`${BODY} mt-5 max-w-[440px]`}>
              We use advanced security measures and industry standards to protect your documents, identities, and signatures — so you can sign
              with total sovereign confidence.
            </p>
          </Reveal>
          <div className="mt-9 grid max-w-[600px] gap-x-8 gap-y-9 sm:grid-cols-2">
            {TRUST.map((x, i) => (
              <Reveal key={x.t} delay={0.16 + i * 0.06}>
                <div className="flex items-center gap-2.5">
                  <span className="flex w-[19px] shrink-0 justify-center"><Ico i={x.i} /></span>
                  <h3 className="text-[18px] leading-[26px] font-semibold text-white">{x.t}</h3>
                </div>
                <p className="mt-1 max-w-[240px] pl-[29px] text-[14px] leading-[22px] text-white/90">{x.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <Shot d={SEC_IMG} frame className="mt-10 xl:mt-0 xl:absolute xl:right-[4.4%] xl:top-0 pointer-events-none" />
    </div>
  </section>
);

/* ═════════════════════════ 10. BUILT FOR MODERN BUSINESSES (inside layout · continuous smooth roll · arrows) ═════════════════════════ */
function Built() {
  const track = useRef<HTMLDivElement>(null);
  const hover = useRef(false);
  const visible = useRef(true);
  const pending = useRef(0); // px still to travel after an arrow click (eased out)
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = track.current;
    if (!t) return;
    const io = new IntersectionObserver(([e]) => (visible.current = e.isIntersecting), { threshold: 0 });
    if (wrap.current) io.observe(wrap.current);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const SPEED = 38; // px / second, constant → no stop-start
    let x = 0, last = performance.now(), raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(48, now - last) / 1000;
      last = now;
      const setW = t.scrollWidth / 2;
      if (visible.current && setW > 0) {
        if (!hover.current && !reduce) x += SPEED * dt;
        if (pending.current !== 0) {
          const k = pending.current * Math.min(1, dt * 7);
          x += k;
          pending.current -= k;
          if (Math.abs(pending.current) < 0.3) pending.current = 0;
        }
        x = ((x % setW) + setW) % setW;
        t.style.transform = `translate3d(${-x}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, []);

  const step = () => {
    const first = track.current?.children[0] as HTMLElement | undefined;
    return first ? first.getBoundingClientRect().width : 330;
  };
  const nudge = (d: 1 | -1) => { pending.current += d * step(); };
  const list = [...CARDS, ...CARDS]; // duplicated set → seamless infinite loop

  return (
    <section className={SEC}>
      <div className={C}>
        <Head eyebrow="Built for Modern Businesses" title="One Signing Platform. Many Business Needs."
          body="eSigniva supports digital signing workflows across teams and industries where agreements must be reviewed, signed, and audited with velocity."
          bodyW="max-w-[640px]" />
        <div
          ref={wrap}
          onMouseEnter={() => (hover.current = true)}
          onMouseLeave={() => (hover.current = false)}
          onTouchStart={() => (hover.current = true)}
          onTouchEnd={() => (hover.current = false)}
          className="-mx-2 overflow-hidden px-2 py-3 [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]"
        >
          <div ref={track} className="flex w-max will-change-transform">
            {list.map((c, n) => (
              <Shot key={`${c.src}-${n}`} d={c} fixed lift delay={0} className="mr-2 flex-none" />
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => nudge(-1)} aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-[#2DD4BF] hover:bg-white/10">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => nudge(1)} aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-[#2DD4BF] hover:bg-white/10">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════════ 11. WHY ESIGNIVA ═════════════════════════ */
const BEFORE = [
  "Printing, scanning, and mailing physical paper stacks.",
  "Important attachments lost in messy, untracked email threads.",
  "Awkward manual follow-ups and unverified signer reminders.",
  "Zero visibility into whether a contract was even viewed.",
  "Fragile, missing, or non-compliant paper audit records.",
];
const AFTER = [
  "100% digital, paperless execution on desktop, tablet, and mobile.",
  "Centralized encrypted repository with structured search and tags.",
  "Automated email and SMS reminders.",
  "Real-time live telemetry",
  "Court-admissible cryptographic Certificate of Completion",
];
const Why = () => (
  <section className={SEC}>
    <div className={C}>
      <Head eyebrow="Why eSigniva?" title="Less Chasing. Less Paperwork. More Progress." titleW="max-w-[900px]"
        body="Bring your entire signing workflow into one streamlined digital experience designed for modern velocity." bodyW="max-w-[640px]" />
      <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1fr)_630px] xl:gap-14">
        <div className="xl:pl-5 xl:pt-8">
          <Reveal>
            <h3 className="flex items-center gap-3 text-[24px] leading-[28px] font-medium tracking-[-0.16px] text-white">
              <Ico i={ICON.xCircle} />Traditional Process (Before)
            </h3>
          </Reveal>
          <ul className="mt-6 space-y-3">
            {BEFORE.map((t, n) => (
              <Reveal key={t} delay={0.05 + n * 0.05}>
                <li className="flex items-start gap-3 text-[16px] leading-[26px] sm:text-[18px] text-white"><Ico i={ICON.minus} className="mt-[3.5px]" />{t}</li>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={0.1} className="rounded-xl bg-white p-7 sm:p-8 xl:-mr-11">
          <h3 className="flex items-center gap-3 text-[24px] leading-[28px] font-medium tracking-[-0.16px] text-[#0B0B0B]">
            <Ico i={ICON.checkCircle} />With eSigniva (After)
          </h3>
          <ul className="mt-6 space-y-3">
            {AFTER.map((t) => (
              <li key={t} className="flex items-start gap-3 text-[16px] leading-[26px] sm:text-[18px] text-[#0B0B0B]"><Ico i={ICON.checkLine} className="mt-[5.5px]" />{t}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ═════════════════════════ 12. CTA ═════════════════════════ */
const Cta = () => (
  <section className={`${SEC} pb-24 xl:pb-32`}>
    <div className={C}>
      <Reveal className="flex flex-col gap-8 rounded-2xl bg-[#158A8C] px-7 py-12 sm:px-10 xl:flex-row xl:items-center xl:justify-between xl:px-12 xl:py-[70px]">
        <div>
          <h2 className="text-[32px] leading-[40px] xl:text-[48px] xl:leading-[56px] font-bold tracking-[-1.2px] text-white">Ready to Move Beyond Paper?</h2>
          <p className="mt-3 max-w-[640px] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-white">
            Create, send, sign, and manage documents with a simpler, faster, and more reliable digital signing experience.
          </p>
        </div>
        <Link href="/contact" className="group inline-flex h-[61px] shrink-0 items-center justify-center gap-2.5 self-start rounded-[10px] bg-[#F8FAFC] px-[30px] text-[21.7px] leading-[24.8px] font-medium tracking-[0.22px] text-black transition hover:-translate-y-0.5 hover:bg-white xl:self-auto">
          Get Started Today <ArrowRight className="h-6 w-6 transition group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </div>
  </section>
);

/* ═════════════════════════ page ═════════════════════════ */
export default function Page() {
  return (
    <main className="overflow-x-clip bg-black text-white">
      <Hero />
      <What />
      <How />
      <Smart />
      <Signing />
      <Dynamic />
      <Telemetry />
      <Docs />
      <Security />
      <Built />
      <Why />
      <Cta />
    </main>
  );
}
