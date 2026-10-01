"use client";

import Link from "next/link";


import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";

/* =========================================================================
   TOKENS  (from the typography tables + colours sampled from the reference)
   ========================================================================= */
const GREEN = "#2F7E33"; // eyebrow + buttons + CTA card
const CONTAINER = "max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10";
const SEC = "py-[72px]"; // vertical rhythm between sections
const HEAD_GAP = "mt-14"; // identical heading -> visual gap in every section
const lift = "transition-transform duration-300 ease-out hover:-translate-y-1.5";

const H1 =
  "text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px] font-bold tracking-[-1.2px] text-white";
const BODY = "text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] font-normal text-white";
const EYEBROW = "text-[14px] leading-[14px] font-semibold uppercase tracking-[0.55px]";

/* =========================================================================
   ASSETS  – every file lives in /public/webp/assets/Home-page/caresuite/<section>/
   w/h = natural export size (3x). Rendered at w/3 = Figma size.
   t/b = empty (transparent glow) padding to trim, in Figma px (natural/3).
   ========================================================================= */
const BASE = "/webp/assets/Home-page/caresuite";

type Asset = { src: string; w: number; h: number; t?: number; b?: number };
const a = (dir: string, file: string, w: number, h: number, t = 0, b = 0): Asset => ({
  src: `${BASE}/${dir}/${file}`,
  w,
  h,
  t,
  b,
});

const A = {
  logo: a("hero", "Container (CareSuite - Healthcare Connected).png", 718, 255),
  hero: a("hero", "HERO CARESUITE.webp", 2772, 2163),
  challenge: a("healthcare-challenge", "THE HEALTHCARE CHALLENGE.webp", 3582, 1920, 1, 9),
  arch: a("architectural-overview", "ARCHITECTURAL OVERVIEW.webp", 2743, 2339, 160, 211),
  appointment: a("appointment-management", "APPOINTMENT MANAGEMENT.webp", 3567, 1203, 1, 9),
  mobile: a(
    "patient-wellness-hub",
    "Mobile-Phone-Showcase-Floating-Snippets.webp",
    2471,
    2458,
    146,
    157,
  ),
  tele: a("telemedicine-excellence", "TELEMEDICINE EXCELLENCE.webp", 3192, 1626, 0, 40),
  clinician: a("clinician-efficiency", "CLINICIAN EFFICIENCY.webp", 3582, 1368, 1, 9),
  emr: a("unified-emr", "UNIFIED EMR.webp", 3582, 1326, 1, 9),
  reception: a("role-based-collaboration", "reception.webp", 2760, 918, 2, 22),
  nurse: a("role-based-collaboration", "nurse.webp", 2760, 918, 2, 22),
  lab: a("role-based-collaboration", "lab.webp", 2760, 918, 2, 22),
  pharmacy: a("role-based-collaboration", "pharmacy.webp", 2760, 918, 2, 22),
  diagnostic: a("diagnostic-dispensing", "DIAGNOSTIC-AND-DISPENSING.webp", 3582, 1464, 1, 9),
  data: a("data-protection", "DATA PROTECTION.webp", 1490, 1456, 74, 16),
};

// 1x icons, rendered at natural size, all #FFFFFF
const ICON = {
  patients: a("architectural-overview", "Icon.png", 12, 12),
  care: a("architectural-overview", "Icon (1).png", 12, 15),
  operations: a("architectural-overview", "Icon (2).png", 14, 14),
  insights: a("architectural-overview", "Icon (3).png", 17, 13),
  labReports: a("patient-wellness-hub", "Icon (4).png", 14, 17),
  appointments: a("patient-wellness-hub", "Icon (5).png", 16, 17),
  prescriptions: a("patient-wellness-hub", "Icon (6).png", 17, 19),
  records: a("patient-wellness-hub", "Icon (7).png", 14, 17),
  encrypted: a("data-protection", "Icon (8).png", 16, 21),
  audit: a("data-protection", "Icon (9).png", 20, 16),
  rbac: a("data-protection", "Icon (10).png", 18, 20),
  compliance: a("data-protection", "Icon (11).png", 16, 20),
};

/* =========================================================================
   PRIMITIVES
   ========================================================================= */

/** Scroll-reveal wrapper. */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Natural-aspect image, never cropped / framed.
 * Wrapper is capped at the Figma width (natural/3); transparent padding is trimmed with
 * negative margins expressed in % of the image width, so the trim scales with the image.
 */
function Pic({
  asset,
  alt = "",
  w,
  wrap = "",
  className = "",
  priority,
  noMax,
}: {
  asset: Asset;
  alt?: string;
  w?: number;
  wrap?: string;
  className?: string;
  priority?: boolean;
  noMax?: boolean;
}) {
  const W = w ?? asset.w / 3;
  const H = (W * asset.h) / asset.w;
  const base = asset.w / 3;
  const pct = (px?: number) => (px ? `-${((px / base) * 100).toFixed(3)}%` : undefined);
  return (
    <div className={`flow-root w-full ${wrap}`} style={noMax ? undefined : { maxWidth: W }}>
      <Image
        src={asset.src}
        alt={alt}
        width={Math.round(W)}
        height={Math.round(H)}
        quality={90}
        unoptimized
        priority={priority}
        draggable={false}
        className={`block h-auto w-full max-w-none select-none ${className}`}
        style={{ marginTop: pct(asset.t), marginBottom: pct(asset.b) }}
      />
    </div>
  );
}

/** 1x icon at its natural size. */
function Icon({ asset }: { asset: Asset }) {
  return (
    <Image
      src={asset.src}
      alt=""
      width={asset.w}
      height={asset.h}
      unoptimized
      draggable={false}
      className="block select-none"
      style={{ width: asset.w, height: asset.h }}
    />
  );
}

/** Eyebrow + h1 + paragraph, identical in every section. */
function SectionHeader({
  eyebrow,
  title,
  body,
  bodyMax = "max-w-[920px]",
}: {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  bodyMax?: string;
}) {
  return (
    <Reveal className="text-center">
      <p className={EYEBROW} style={{ color: GREEN }}>
        {eyebrow}
      </p>
      <h2 className={`${H1} mt-[18px]`}>{title}</h2>
      <p className={`${BODY} mx-auto mt-5 ${bodyMax}`}>{body}</p>
    </Reveal>
  );
}

const Br = () => <br className="hidden lg:block" />;

/* =========================================================================
   1. HERO
   ========================================================================= */
function Hero() {
  return (
    <section className="relative overflow-x-clip pt-[147px] lg:min-h-[665px]">
      {/* glow image: 924x721 @ top-0, flush to the right edge of the 1440 page */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden w-[1440px] -translate-x-1/2 lg:block">
        <Pic asset={A.hero} alt="Doctors and nurse of the CareSuite care team" priority wrap="ml-auto" />
      </div>

      <div className={CONTAINER}>
        <Reveal className="lg:pl-9">
          <div className="-ml-1.5 w-[180px]">
            <Pic asset={A.logo} alt="CareSuite" w={180} priority />
          </div>

          <h1 className={`${H1} mt-5`}>
            Smarter Healthcare.
            <br />
            Seamless Operations.
          </h1>

          <p className={`${BODY} mt-9 max-w-[520px] lg:whitespace-nowrap`}>
            One Connected Platform for Modern Healthcare. CareSuite
            <Br />
            brings patients, doctors, staff, appointments, medical records,
            <Br />
            pharmacy, laboratory, and hospital operations together in one
            <Br />
            secure healthcare ecosystem.
          </p>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <a
              href="https://caresuite.devopstrio.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-[203px] items-center justify-center rounded-md text-[13px] font-semibold leading-[18px] tracking-[0.13px] text-white transition-transform duration-300 hover:-translate-y-1"
              style={{ backgroundColor: GREEN }}
            >
              Explore CareSuite
            </a>
            <Link
              href="/contact#contact-form"
              className="inline-flex h-12 w-[190px] items-center justify-center gap-2 rounded-md bg-white text-[13px] font-semibold leading-[18px] tracking-[0.13px] text-[#282723] transition-transform duration-300 hover:-translate-y-1"
            >
              <PlayCircle size={16} strokeWidth={2} style={{ color: GREEN }} />
              Get Started
            </Link>
          </div>
        </Reveal>

        {/* < lg : image sits under the copy */}
        <div className="mt-10 lg:hidden">
          <Pic asset={A.hero} alt="Doctors and nurse of the CareSuite care team" wrap="mx-auto" />
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   2. THE HEALTHCARE CHALLENGE
   ========================================================================= */
function Challenge() {
  return (
    <section className={SEC}>
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="The Healthcare Challenge"
          title={
            <>
              Healthcare Shouldn&apos;t Run on
              <Br /> Disconnected Systems
            </>
          }
          body={
            <>
              Hospitals can struggle with fragmented patient information, manual processes, communication gaps, and
              <Br /> limited real-time visibility.
            </>
          }
          bodyMax="max-w-[900px]"
        />
        <Reveal delay={100} className={HEAD_GAP}>
          <div className={lift}>
            <Pic
              asset={A.challenge}
              wrap="mx-auto"
              alt="Fragmented data, manual processes, disconnected teams and limited visibility, bridged by the CareSuite Unified Connection Layer"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   3. ARCHITECTURAL OVERVIEW
   ========================================================================= */
const ARCH_ITEMS = [
  {
    icon: ICON.patients,
    title: "PATIENTS",
    body: "Manage the complete patient journey from self-service intake and wellness records to post-discharge care.",
  },
  {
    icon: ICON.care,
    title: "CARE",
    body: "Support doctors and clinical workflows with frictionless EMR, rapid prescription generators, and digital chart notes.",
  },
  {
    icon: ICON.operations,
    title: "OPERATIONS",
    body: "Coordinate hospital departments, real-time bed allocations, shift rosters, pharmacy fulfillment, and audit logging.",
  },
  {
    icon: ICON.insights,
    title: "INSIGHTS",
    body: "Turn healthcare data into actionable operational visibility, department throughput analytics, and predictive resource allocation.",
  },
];

function Architecture() {
  return (
    <section id="architecture" className={`${SEC} overflow-x-clip`}>
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Architectural Overview"
          title="One Platform. The Entire Care Journey."
          body={
            <>
              CareSuite is a centralized healthcare management platform designed to streamline operations and improve
              <Br /> care delivery.
            </>
          }
          bodyMax="max-w-[900px]"
        />

        <div className={`${HEAD_GAP} grid items-center gap-10 lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-0`}>
          <div className="space-y-7 lg:pl-[43px]">
            {ARCH_ITEMS.map((it, i) => (
              <Reveal key={it.title} delay={i * 90}>
                <div className={lift}>
                  <div className="flex items-center">
                    <span className="flex w-[45px] shrink-0 pl-[9px]">
                      <Icon asset={it.icon} />
                    </span>
                    <h3 className="text-[17px] font-medium uppercase leading-[26px] tracking-[0.3px] text-white">
                      {it.title}
                    </h3>
                  </div>
                  <p className="mt-2 max-w-[460px] text-[14px] leading-[22px] text-white">{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <Pic
              asset={A.arch}
              alt="CareSuite hospital ecosystem connecting patients, doctors, pharmacy and lab"
              noMax
              wrap="mx-auto max-w-[560px] lg:mx-0 lg:w-[914px] lg:max-w-none lg:-ml-[107px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   4. APPOINTMENT MANAGEMENT
   ========================================================================= */
function Appointment() {
  return (
    <section className={SEC}>
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Appointment Management"
          title={
            <>
              Make Every Appointment Easier to
              <Br /> Manage
            </>
          }
          body={
            <>
              CareSuite supports online and walk-in appointments, real-time slot updates, staff-assisted booking, doctor
              <Br /> availability, and appointment confirmations.
            </>
          }
          bodyMax="max-w-[860px]"
        />
        <Reveal delay={100} className={HEAD_GAP}>
          <div className={lift}>
            <Pic
              asset={A.appointment}
              wrap="mx-auto"
              alt="Cardiology department schedule with booking, availability, walk-in queue and reminder cards"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   5. PATIENT WELLNESS HUB
   ========================================================================= */
const PATIENT_ITEMS = [
  {
    icon: ICON.labReports,
    title: "View Lab Reports",
    body: "Instant access to verified digital diagnostics, biochemical charts, and pathology notes.",
  },
  {
    icon: ICON.appointments,
    title: "Track Appointments",
    body: "Real-time status tracking of upcoming consultations, doctor check-ins, and reminders.",
  },
  {
    icon: ICON.prescriptions,
    title: "Manage Prescriptions",
    body: "Refill medication with one tap and receive dosage reminders directly to mobile devices.",
  },
  {
    icon: ICON.records,
    title: "View Health Records",
    body: "Secure, encrypted access to complete historical vitals, immunization, and clinical summaries.",
  },
];

function PatientHub() {
  return (
    <section className={`${SEC} overflow-x-clip`}>
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Patient Wellness Hub"
          title={
            <>
              Give Patients One Place for Their
              <Br /> Healthcare
            </>
          }
          body="Patients can access key healthcare information and stay connected with their care journey."
          bodyMax="max-w-[820px]"
        />

        <div
          className={`${HEAD_GAP} grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-0`}
        >
          <div className="space-y-7 lg:pl-[54px]">
            {PATIENT_ITEMS.map((it, i) => (
              <Reveal key={it.title} delay={i * 90}>
                <div className={lift}>
                  <div className="flex items-center">
                    <span className="flex w-[44px] shrink-0 pl-2">
                      <Icon asset={it.icon} />
                    </span>
                    <h3 className="text-[20px] font-medium leading-[26px] text-white">{it.title}</h3>
                  </div>
                  <p className="mt-2 max-w-[400px] text-[12.56px] leading-[20px] text-white">{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <Pic
              asset={A.mobile}
              alt="CareSuite patient mobile app with refill request and verified lab report"
              noMax
              wrap="mx-auto max-w-[560px] lg:mx-0 lg:w-[824px] lg:max-w-none lg:-ml-[144px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   6. TELEMEDICINE EXCELLENCE
   ========================================================================= */
function Telemedicine() {
  return (
    <section className={SEC}>
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Telemedicine Excellence"
          title="Care Beyond the Hospital"
          body="CareSuite supports remote consultations to reduce unnecessary physical visits and help maintain continuity of care."
          bodyMax="max-w-[920px]"
        />
        <Reveal delay={100} className={HEAD_GAP}>
          <div className={lift}>
            <Pic
              asset={A.tele}
              wrap="mx-auto"
              alt="Encrypted HD telehealth session between Dr. Elena Rostova and patient Marcus Vance"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   7. CLINICIAN EFFICIENCY
   ========================================================================= */
function Clinician() {
  return (
    <section className={SEC}>
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Clinician Efficiency"
          title="Give Doctors More Time for What Matters"
          body="CareSuite helps doctors manage clinical activities while reducing operational complexity."
        />
        <Reveal delay={100} className={HEAD_GAP}>
          <div className={lift}>
            <Pic
              asset={A.clinician}
              wrap="mx-auto"
              alt="Doctor dashboard with today's schedule and active consultation record"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   8. UNIFIED EMR
   ========================================================================= */
function UnifiedEmr() {
  return (
    <section className={SEC}>
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Unified EMR"
          title="Every Patient Story, Securely Connected"
          body="CareSuite maintains centralized Electronic Medical Records for patients."
        />
        <Reveal delay={100} className={HEAD_GAP}>
          <div className={lift}>
            <Pic
              asset={A.emr}
              wrap="mx-auto"
              alt="Patient vitals summary and 2026 chronological medical history"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   9. ROLE-BASED COLLABORATION  (tabs -> own card image)
   ========================================================================= */
const ROLES = [
  { id: "reception", label: "Reception", asset: A.reception, alt: "Reception workflow: front-desk and admissions" },
  { id: "nurse", label: "Nurse", asset: A.nurse, alt: "Nurse workflow: triage and clinical vitals" },
  { id: "lab", label: "Lab", asset: A.lab, alt: "Laboratory workflow: specimen diagnostics" },
  { id: "pharmacy", label: "Pharmacy", asset: A.pharmacy, alt: "Pharmacy workflow: prescription dispense" },
] as const;

function Roles() {
  const [active, setActive] = useState<(typeof ROLES)[number]["id"]>("nurse");

  return (
    <section id="roles" className={SEC}>
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Role-Based Collaboration"
          title="Every Role Has a Connected Workflow"
          body="CareSuite connects different hospital staff around the same patient journey."
        />

        <Reveal delay={100} className={HEAD_GAP}>
          <div role="tablist" aria-label="Hospital roles" className="flex flex-wrap items-center justify-center gap-3">
            {ROLES.map((r) => {
              const on = r.id === active;
              return (
                <button
                  key={r.id}
                  type="button"
                  role="tab"
                  id={`tab-${r.id}`}
                  aria-selected={on}
                  aria-controls={`panel-${r.id}`}
                  onClick={() => setActive(r.id)}
                  className={`h-[38px] rounded-lg px-[26px] text-[13px] font-medium uppercase leading-[18px] tracking-[0.19px] transition-all duration-300 hover:-translate-y-0.5 ${
                    on ? "bg-[#01685F] text-white" : "bg-[#EFF4FF] text-[#0B1B2B]"
                  }`}
                >
                  {r.label}
                </button>
              );
            })}
          </div>

          {/* all four cards share one grid cell -> zero layout shift, instant switch */}
          <div className={`mt-10 grid ${lift}`}>
            {ROLES.map((r) => {
              const on = r.id === active;
              return (
                <div
                  key={r.id}
                  role="tabpanel"
                  id={`panel-${r.id}`}
                  aria-labelledby={`tab-${r.id}`}
                  aria-hidden={!on}
                  className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                    on ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <Pic asset={r.asset} alt={r.alt} wrap="mx-auto" />
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   10. DIAGNOSTIC & DISPENSING
   ========================================================================= */
function Diagnostic() {
  return (
    <section className={SEC}>
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Diagnostic & Dispensing"
          title="Connect Diagnosis to the Next Step in Care"
          body="CareSuite connects pharmacy and laboratory workflows with appointments and prescriptions."
        />
        <Reveal delay={100} className={HEAD_GAP}>
          <div className={lift}>
            <Pic
              asset={A.diagnostic}
              wrap="mx-auto"
              alt="Laboratory specimen stream and pharmacy automated fulfillment workflows"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   11. DATA PROTECTION
   ========================================================================= */
const DATA_ITEMS = [
  {
    icon: ICON.encrypted,
    title: "Encrypted Data (AES-256 & TLS 1.3)",
    body: "Zero-knowledge end-to-end encryption for all patient charts in transit and at rest.",
  },
  {
    icon: ICON.audit,
    title: "Comprehensive Immutable Audit Logs",
    body: "Every record view, amendment, and prescription transaction timestamped irrevocably.",
  },
  {
    icon: ICON.rbac,
    title: "Granular Role-Based Access (RBAC)",
    body: "Nurses, doctors, lab specialists, and front-desk staff only see relevant authorized data.",
  },
  {
    icon: ICON.compliance,
    title: "Compliance-Ready Architecture",
    body: "Engineered to exceed strict HIPAA, GDPR, SOC 2 Type II, and ISO 27001 requirements.",
  },
];

function DataProtection() {
  return (
    <section className={`${SEC} overflow-x-clip`}>
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Data Protection"
          title="Healthcare Data Deserves Strong Protection"
          body="CareSuite's enterprise-grade security approach focused on healthcare data protection."
        />

        <div className={`${HEAD_GAP} grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_497px] lg:gap-0`}>
          <ul className="space-y-6 lg:pl-[110px]">
            {DATA_ITEMS.map((it, i) => (
              <li key={it.title}>
                <Reveal delay={i * 90}>
                  <div className={`${lift} grid max-w-[560px] grid-cols-[32px_minmax(0,1fr)] gap-y-1.5`}>
                    <span className="flex items-center self-center">
                      <Icon asset={it.icon} />
                    </span>
                    <h3 className="text-[18px] font-medium leading-[26px] text-white">{it.title}</h3>
                    <p className="col-start-2 max-w-[480px] text-[13px] leading-[22px] text-white">{it.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={150}>
            <Pic
              asset={A.data}
              alt="Doctor using a tablet with security badges: strict RBAC, end-to-end encryption, zero-trust identity, immutable audit trails"
              wrap="mx-auto max-w-[420px] lg:mx-0 lg:mr-[14px] lg:ml-auto"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   12. CTA  (compact: text left, button right)
   ========================================================================= */
function Cta() {
  return (
    <section className="pb-[120px] pt-0">
      <div className={CONTAINER}>
        <Reveal>
          <div
            className="flex flex-col gap-8 rounded-[20px] p-8 sm:p-12 md:flex-row md:items-center md:justify-between"
            style={{ backgroundColor: GREEN }}
          >
            <div className="max-w-[640px]">
              <h2 className={H1}>
                Ready to Transform Your
                <Br /> Hospital Operations?
              </h2>
              <p className={`${BODY} mt-4`}>
                Bring patients, doctors, staff, departments, and healthcare workflows together
                <Br /> with CareSuite. Smarter Healthcare. Seamless Operations.
              </p>
            </div>

            <Link
              href="/contact#contact-form"
              className="inline-flex h-[61px] w-full shrink-0 items-center justify-center gap-3 rounded-[10px] bg-[#F7F9FB] text-[21.7px] font-medium leading-[24.8px] tracking-[0.22px] text-black transition-transform duration-300 hover:-translate-y-1 md:w-[295px]"
            >
              Get Started Today
              <ArrowRight size={24} strokeWidth={2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   PAGE
   ========================================================================= */
export default function CareSuitePage() {
  return (
    <main
      className="relative w-full overflow-x-clip bg-black text-white"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <Hero />
      <Challenge />
      <Architecture />
      <Appointment />
      <PatientHub />
      <Telemedicine />
      <Clinician />
      <UnifiedEmr />
      <Roles />
      <Diagnostic />
      <DataProtection />
      <Cta />
    </main>
  );
}
