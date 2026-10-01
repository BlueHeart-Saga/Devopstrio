"use client";

import Link from "next/link";




import Image from "next/image";

import {

  useEffect,

  useRef,

  useState,

  type CSSProperties,

  type ReactNode,

} from "react";

import {

  ArrowRight,

  CalendarCheck,

  DollarSign,

  PlaneTakeoff,

  PlayCircle,

} from "lucide-react";



/* -------------------------------------------------------------------------- */

/*  Tokens                                                                    */

/* -------------------------------------------------------------------------- */



const RED = "#DC2626";

const ROOT = "/webp/assets/Home-page/humanex";

const asset = (dir: string, file: string) => `${ROOT}/${dir}/${file}`;



/** Required container (page width 1440 → content 1216 → cards 1136). */

const CONTAINER = "max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10";

/** Inner 1136 rail that all card rows / split rows sit on in the Figma. */

const RAIL = "mx-auto w-full xl:max-w-[1136px]";

/** ONE gap between heading block and its visual — used by every section. */

const VISUAL_GAP = "mt-14";

/** Space between the visible bottom of a section and the next eyebrow. */

const SECTION_PAD = "pt-[96px] xl:pt-[170px]";



/* -------------------------------------------------------------------------- */

/*  Primitives                                                                */

/* -------------------------------------------------------------------------- */



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

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

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

      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }

    );

    io.observe(el);

    return () => io.disconnect();

  }, []);



  return (

    <div

      ref={ref}

      style={{ transitionDelay: `${delay}ms` }}

      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${

        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"

      } ${className}`}

    >

      {children}

    </div>

  );

}



type Trim = { t?: number; r?: number; b?: number; l?: number };



/**

 * Renders an asset at its natural aspect ratio (no crop, no fixed box).

 * `dw` = width at the 1440 Figma canvas. Transparent glow padding is removed

 * from layout with negative margins (desktop ≥ xl), so the *visible* card lines

 * up with the reference. Below xl it simply scales down to the column.

 */

function Art({

  src,

  w,

  h,

  dw,

  trim = {},

  alt,

  priority = false,

  className = "",

  wrap = "justify-center",

}: {

  src: string;

  w: number;

  h: number;

  dw: number;

  trim?: Trim;

  alt: string;

  priority?: boolean;

  className?: string;

  wrap?: string;

}) {

  const style = {

    "--dw": `${dw}px`,

    "--t": `${trim.t ?? 0}px`,

    "--r": `${trim.r ?? 0}px`,

    "--b": `${trim.b ?? 0}px`,

    "--l": `${trim.l ?? 0}px`,

  } as CSSProperties;



  return (

    <div className={`flex ${wrap}`}>

      <Image

        src={src}

        alt={alt}

        width={w}

        height={h}

        priority={priority}

        quality={90}

        unoptimized

        sizes={`(min-width: 1280px) ${dw}px, 100vw`}

        draggable={false}

        style={style}

        className={`pointer-events-none block h-auto w-full max-w-[var(--dw)] select-none xl:mb-[calc(var(--b)*-1)] xl:ml-[calc(var(--l)*-1)] xl:mr-[calc(var(--r)*-1)] xl:mt-[calc(var(--t)*-1)] xl:w-[var(--dw)] xl:max-w-none xl:shrink-0 ${className}`}

      />

    </div>

  );

}



/** Small raster icon from /icons, rendered at its natural pixel size. */

function Icon({

  file,

  w,

  h,

  size,

  className = "",

}: {

  file: string;

  w: number;

  h: number;

  /** optional display size override (px) for the longest side */

  size?: number;

  className?: string;

}) {

  const k = size ? size / Math.max(w, h) : 1;

  return (

    <Image

      src={asset("icons", file)}

      alt=""

      aria-hidden

      width={Math.round(w * k)}

      height={Math.round(h * k)}

      unoptimized

      className={`shrink-0 ${className}`}

    />

  );

}



/** Eyebrow 14/14 semibold · h1 48/56 bold · body 18/26 regular. */

function Header({

  eyebrow,

  title,

  body,

  center = true,

  titleClass = "",

  bodyClass = "",

}: {

  eyebrow: string;

  title: ReactNode;

  body?: string;

  center?: boolean;

  titleClass?: string;

  bodyClass?: string;

}) {

  const c = center ? "mx-auto text-center" : "";

  return (

    <div>

      <p

        className={`text-[14px] font-semibold uppercase leading-[14px] tracking-[0.55px] ${

          center ? "text-center" : ""

        }`}

        style={{ color: RED }}

      >

        {eyebrow}

      </p>

      <h2

        className={`mt-3 text-[32px] font-bold leading-[40px] tracking-[-1.2px] text-white sm:text-[40px] sm:leading-[48px] xl:text-[48px] xl:leading-[56px] ${c} ${titleClass}`}

      >

        {title}

      </h2>

      {body && (

        <p

          className={`mt-3.5 text-[18px] font-normal leading-[26px] tracking-[0] text-white ${c} ${bodyClass}`}

        >

          {body}

        </p>

      )}

    </div>

  );

}



const LIFT =

  "transition-transform duration-300 ease-out hover:-translate-y-1.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0";



/* -------------------------------------------------------------------------- */

/*  1 · Hero                                                                  */

/* -------------------------------------------------------------------------- */



function Hero() {

  return (

    <section className="relative pt-[132px] xl:pt-[200px]">

      <div className={CONTAINER}>

        <div className="xl:pl-[30px]">

          {/* Logo asset, used as-is (256×85, visible art starts 25px in) */}

          <Reveal>

            <Image

              src={asset("hero", "Group 1577707618.png")}

              alt="Humanex"

              width={256}

              height={85}

              priority

              unoptimized

              className="-ml-[7px] block h-[85px] w-[256px] max-w-none"

            />

          </Reveal>



          <Reveal delay={80}>

            <h1 className="mt-[52px] max-w-[600px] text-[36px] font-bold leading-[44px] tracking-[-1.2px] text-white sm:text-[44px] sm:leading-[52px] xl:text-[48px] xl:leading-[56px]">

              The Complete Workforce Management Platform

            </h1>

            <p

              className="mt-[28px] text-[18px] font-semibold uppercase leading-[26px] tracking-[0.45px]"

              style={{ color: RED }}

            >

              Recruit. Manage. Engage. Grow.

            </p>

            <p className="mt-[25px] max-w-[510px] text-[18px] font-normal leading-[26px] tracking-[0] text-white">

              Humanex brings your entire HR lifecycle together in one

              centralized, intelligent platform —simplifying everyday HR

              operations while empowering your global workforce.

            </p>



            <div className="mt-[47px] flex flex-wrap gap-[29px] xl:ml-[6px]">

              <a
                href="https://humanex.devopstrio.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-[197px] items-center justify-center gap-2 rounded-lg text-[13px] font-semibold leading-[18px] tracking-[0.13px] text-white transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none"
                style={{ backgroundColor: RED }}
              >
                Explore Humanex
                <ArrowRight size={16} strokeWidth={2} color="#FFFFFF" />
              </a>

              <Link
                href="/contact#contact-form"
                className="inline-flex h-12 w-[200px] items-center justify-center gap-2 rounded-lg bg-white text-[13px] font-semibold leading-[18px] tracking-[0.13px] text-[#282723] transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none"
              >
                <PlayCircle size={16} strokeWidth={2} color={RED} />
                Get Started
              </Link>

            </div>

          </Reveal>

        </div>

      </div>



      {/* Hero art: 2588×2513 @ 1/3 → 863×838, box top 61, left = centre − 142.

          Glow padding is left in place (it IS the red halo) and overlaps down. */}

      <div className="pointer-events-none relative z-0 mx-auto mt-10 w-full max-w-[863px] xl:absolute xl:left-1/2 xl:top-[61px] xl:-ml-[142px] xl:mx-0 xl:mt-0 xl:w-[min(863px,calc(50vw+150px))] xl:max-w-none">

        <Image

          src={asset("hero", "HERO HUMANUX.webp")}

          alt="Three HR professionals with live workforce cards"

          width={2588}

          height={2513}

          priority

          quality={90}

          sizes="(min-width: 1280px) 863px, 100vw"

          className="block h-auto w-full select-none"

          draggable={false}

        />

      </div>

    </section>

  );

}



/* -------------------------------------------------------------------------- */

/*  2 · Operational evolution                                                 */

/* -------------------------------------------------------------------------- */



function OperationalEvolution() {

  const side: Trim = { t: 1, r: 2, b: 2, l: 2 };

  return (

    <section id="operational-evolution" className={`relative ${SECTION_PAD}`}>

      <div className={CONTAINER}>

        <Reveal>

          <Header

            eyebrow="OPERATIONAL EVOLUTION"

            title="HR Is Evolving. Your Tools Should Too."

            body="Manual processes, scattered information, disconnected tools, and limited visibility can make everyday HR unnecessarily complex. Humanex brings automation, intelligence, and simplicity together to create a smarter way to manage people and performance."

            bodyClass="max-w-[620px]"

          />

        </Reveal>



        <div

          className={`${VISUAL_GAP} ${RAIL} flex flex-col items-center gap-6 xl:flex-row xl:items-end xl:justify-center`}

        >

          <Reveal>

            <div className={LIFT}>

              <Art

                src={asset("operational-evolution", "LEGACY HR.webp")}

                w={1101}

                h={1308}

                dw={367}

                trim={side}

                alt="Legacy HR: fragmented and friction-heavy"

              />

            </div>

          </Reveal>

          <Reveal delay={100}>

            <div className={LIFT}>

              <Art

                src={asset("operational-evolution", "THE HUMANEX ENGINE.webp")}

                w={1086}

                h={1320}

                dw={362}

                alt="The Humanex engine: one connected HR platform"

              />

            </div>

          </Reveal>

          <Reveal delay={200}>

            <div className={LIFT}>

              <Art

                src={asset("operational-evolution", "HUMANEX STATE.webp")}

                w={1101}

                h={1308}

                dw={367}

                trim={side}

                alt="Humanex state: automated and empowered"

              />

            </div>

          </Reveal>

        </div>

      </div>

    </section>

  );

}



/* -------------------------------------------------------------------------- */

/*  3 · The lifecycle                                                         */

/* -------------------------------------------------------------------------- */



function Lifecycle() {

  return (

    <section id="lifecycle" className={`relative ${SECTION_PAD}`}>

      <div className={CONTAINER}>

        <Reveal>

          <Header

            eyebrow="THE LIFECYCLE"

            title="From Hiring to Growth, Keep Every Stage Connected"

            body="Humanex supports the complete workforce journey across its core pillars: Recruit, Manage, Engage, and Grow—eliminating fragmented transitions."

            titleClass="max-w-[940px]"

            bodyClass="max-w-[860px]"

          />

        </Reveal>

        <Reveal className={VISUAL_GAP} delay={100}>

          <div className={RAIL}>

            <Art

              src={asset("lifecycle", "THE LIFECYCLE.webp")}

              w={3420}

              h={834}

              dw={1140}

              trim={{ t: 1, r: 2, b: 3, l: 2 }}

              alt="Six-stage employee lifecycle: Recruit, Onboard, Manage, Engage, Perform, Grow"

            />

          </div>

        </Reveal>

      </div>

    </section>

  );

}



/* -------------------------------------------------------------------------- */

/*  4 · Unified system                                                        */

/* -------------------------------------------------------------------------- */



const SYSTEM_ITEMS: {

  title: string;

  body: string;

  icon: ReactNode;

}[] = [

  {

    title: "1. Employee Management",

    body: "Centralize employee interview, profiles, roles, departments, and organizational information.",

    icon: <Icon file="Icon (7).png" w={19} h={19} />,

  },

  {

    title: "2. Attendance & Time",

    body: "Track working hours, attendance, and time-related activity.",

    icon: <Icon file="Icon (6).png" w={19} h={19} />,

  },

  {

    title: "3. Leave Management",

    body: "Simplify leave requests, approvals, balances, and holiday planning.",

    icon: <PlaneTakeoff size={19} strokeWidth={1.75} color={RED} />,

  },

  {

    title: "4. Payroll",

    body: "Organize payroll-related information and processes with greater visibility.",

    icon: <Icon file="Icon (1).png" w={18} h={20} />,

  },

  {

    title: "5. Performance",

    body: "Track goals, reviews, achievements, and employee development.",

    icon: <Icon file="Icon (5).png" w={10} h={19} />,

  },

];



/** Ring dots missing from the exported pills. Coordinates are % of the 546×357 art. */

const ORBIT_DOTS = [

  { name: "Directory Sync", left: 7.18, top: 18.38 },

  { name: "Geo Attendance", left: 65.42, top: 8.87 },

  { name: "Tiered Leaves", left: 5.35, top: 80.7 },

];



function UnifiedSystem() {

  return (

    <section className={`relative ${SECTION_PAD}`}>

      <div className={CONTAINER}>

        <Reveal>

          <Header

            eyebrow="UNIFIED SYSTEM"

            title="From Employee Records to Everyday HR Operations"

            body="Bring the essential HR functions your organization relies on into one connected environment."

            titleClass="max-w-[900px]"

            bodyClass="max-w-[820px]"

          />

        </Reveal>



        <div

          className={`${VISUAL_GAP} ${RAIL} flex flex-col gap-12 xl:flex-row xl:items-center xl:justify-between`}

        >

          <Reveal>

            <ul className="space-y-[26px] xl:pl-[26px]">

              {SYSTEM_ITEMS.map((it) => (

                <li key={it.title} className="flex">

                  <span className="mt-[8px] w-[45px] shrink-0">{it.icon}</span>

                  <div className="max-w-[462px]">

                    <h3 className="text-[18px] font-semibold leading-[26px] text-white">

                      {it.title}

                    </h3>

                    <p className="mt-[2px] text-[13px] font-normal leading-[22px] text-white">

                      {it.body}

                    </p>

                  </div>

                </li>

              ))}

            </ul>

          </Reveal>



          <Reveal delay={120} className="xl:mr-[13px]">

            <div className="relative mx-auto w-full max-w-[546px] xl:w-[546px]">

              <Image

                src={asset("unified-system", "UNIFIED SYSTEM.webp")}

                alt="Humanex hub connected to Directory Sync, Geo Attendance, OKRs & Reviews, Tiered Leaves and Direct Deposit"

                width={1637}

                height={1072}

                quality={90}

                sizes="(min-width: 1280px) 546px, 100vw"

                className="pointer-events-none block h-auto w-full select-none"

                draggable={false}

              />

              {ORBIT_DOTS.map((d) => (

                <span

                  key={d.name}

                  aria-hidden

                  className="pointer-events-none absolute aspect-square w-[2.56%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#F4405F]"

                  style={{ left: `${d.left}%`, top: `${d.top}%` }}

                />

              ))}

            </div>

          </Reveal>

        </div>

      </div>

    </section>

  );

}



/* -------------------------------------------------------------------------- */

/*  5 · Unified directory                                                     */

/* -------------------------------------------------------------------------- */



const DIRECTORY_POINTS = [

  "Employee profiles & comprehensive histories",

  "Departments & dynamic designations",

  "Employee lifecycle records & transitions",

  "Encrypted documents & verified credentials",

  "Interactive organizational structure",

];



function UnifiedDirectory() {

  return (

    <section className={`relative ${SECTION_PAD}`}>

      <div className={CONTAINER}>

        <div

          className={`${RAIL} flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between`}

        >

          <Reveal className="relative z-10 xl:-ml-[7px] xl:w-[500px]">

            <Header

              center={false}

              eyebrow="UNIFIED DIRECTORY"

              title="Know Your Workforce. Manage It Better."

              body="Keep employee information organized from a single source of truth."

              bodyClass="max-w-[440px]"

            />

            <ul className="mt-[27px] space-y-3">

              {DIRECTORY_POINTS.map((p) => (

                <li key={p} className="flex items-center gap-[11px]">

                  <Icon file="Icon (4).png" w={15} h={15} />

                  <span className="text-[13.5px] font-normal leading-[22px] text-white">

                    {p}

                  </span>

                </li>

              ))}

            </ul>

          </Reveal>



          <Reveal delay={120} className="xl:-mr-[34px]">

            {/* card = 646×404; halo hangs outside the layout box */}

            <Art

              src={asset("unified-directory", "UNIFIED DIRECTORY.webp")}

              w={2861}

              h={2295}

              dw={954}

              trim={{ l: 190, t: 166, r: 118, b: 195 }}

              alt="Employee profile card for Elena Rostova"

            />

          </Reveal>

        </div>

      </div>

    </section>

  );

}



/* -------------------------------------------------------------------------- */

/*  6 · Time telemetry                                                        */

/* -------------------------------------------------------------------------- */



function TimeTelemetry() {

  return (

    <section className={`relative ${SECTION_PAD}`}>

      <div className={CONTAINER}>

        <Reveal>

          <Header

            eyebrow="TIME TELEMETRY"

            title="Make Every Working Hour Visible"

            body="Simplify attendance and time tracking while giving HR teams a clear view of workforce activity."

            bodyClass="max-w-[830px]"

          />

        </Reveal>

        <Reveal className={VISUAL_GAP} delay={100}>

          <div className={RAIL}>

            <Art

              src={asset("time-telemetry", "TIME TELEMETRY.webp")}

              w={3420}

              h={1254}

              dw={1140}

              trim={{ t: 1, r: 2, b: 3, l: 2 }}

              alt="Attendance dashboard: present rate, late check-ins, unplanned absence, logged hours"

            />

          </div>

        </Reveal>

      </div>

    </section>

  );

}



/* -------------------------------------------------------------------------- */

/*  7 · Frictionless absence                                                  */

/* -------------------------------------------------------------------------- */



function FrictionlessAbsence() {

  const trim: Trim = { t: 1, r: 2, b: 3, l: 2 };

  const steps = [

    { file: "Step 1_ Employee.webp", alt: "Stage 01 Employee: request, track, get updates" },

    { file: "Step 2_ Manager.webp", alt: "Stage 02 Manager: review, approve, manage team availability" },

    { file: "Step 3_ HR.webp", alt: "Stage 03 HR Operations: monitor, configure, report" },

  ];

  return (

    <section className={`relative ${SECTION_PAD}`}>

      <div className={CONTAINER}>

        <Reveal>

          <Header

            eyebrow="FRICTIONLESS ABSENCE"

            title="Leave Requests Without the Back-and-Forth"

            body="Make requesting, reviewing, and approving leave simple for everyone."

            bodyClass="max-w-[560px]"

          />

        </Reveal>

        <div

          className={`${VISUAL_GAP} ${RAIL} flex flex-col items-center gap-6 xl:flex-row xl:items-start xl:justify-center`}

        >

          {steps.map((s, i) => (

            <Reveal key={s.file} delay={i * 100}>

              <div className={LIFT}>

                <Art

                  src={asset("frictionless-absence", s.file)}

                  w={1098}

                  h={948}

                  dw={366}

                  trim={trim}

                  alt={s.alt}

                />

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}



/* -------------------------------------------------------------------------- */

/*  8 · Zero-friction compensation                                            */

/* -------------------------------------------------------------------------- */



const PAY_FEATURES: {

  title: string;

  body: string;

  icon: ReactNode;

}[] = [

  {

    title: "Tax Handling",

    body: "Multi-state and international tax rules updated automatically.",

    icon: <Icon file="Icon (3).png" w={20} h={20} />,

  },

  {

    title: "Salary Automation",

    body: "One-click recurring disbursement with zero manual adjustments.",

    icon: <Icon file="Icon.png" w={16} h={22} />,

  },

  {

    title: "Global Compliance",

    body: "Strict statutory compliance for remote and on-site staff.",

    icon: <Icon file="Icon (2).png" w={16} h={20} />,

  },

  {

    title: "Digital Payslips",

    body: "Self-service itemized generation and instant push alerts.",

    icon: <Icon file="Icon (1).png" w={18} h={20} />,

  },

];



function ZeroFrictionCompensation() {

  return (

    <section className={`relative ${SECTION_PAD}`}>

      <div className={CONTAINER}>

        <div

          className={`${RAIL} flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between`}

        >

          <Reveal className="relative z-10 xl:w-[560px]">

            <Header

              center={false}

              eyebrow="ZERO-FRICTION COMPENSATION"

              title="Payroll Without the Manual Complexity"

              body="Automate key payroll processes while keeping salary information organized, verified, and accessible across global legal entities."

              titleClass="xl:max-w-[470px]"

              bodyClass="xl:max-w-[460px]"

            />

            <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-[51px] sm:grid-cols-2 xl:grid-cols-[260px_260px] xl:pl-[16px]">

              {PAY_FEATURES.map((f) => (

                <div key={f.title}>

                  <div className="flex h-[22px] items-start">{f.icon}</div>

                  <h3 className="mt-[5px] text-[18px] font-semibold leading-6 text-white">

                    {f.title}

                  </h3>

                  <p className="mt-[2px] text-[12.56px] font-normal leading-[22px] text-white">

                    {f.body}

                  </p>

                </div>

              ))}

            </div>

          </Reveal>



          <Reveal delay={120} className="xl:mr-[17px]">

            {/* card = 544×486 */}

            <Art

              src={asset(

                "zero-friction-compensation",

                "ZERO-FRICTION COMPENSATION.webp"

              )}

              w={2550}

              h={2661}

              dw={850}

              trim={{ l: 171, t: 202, r: 135, b: 199 }}

              alt="Monthly earnings statement showing net disbursement of $8,309.50"

            />

          </Reveal>

        </div>

      </div>

    </section>

  );

}



/* -------------------------------------------------------------------------- */

/*  9 · Autonomous staff access                                               */

/* -------------------------------------------------------------------------- */



const STAFF_FEATURES: {

  title: string;

  body: string;

  icon: ReactNode;

}[] = [

  {

    title: "Apply & Track Leave",

    body: "Submit time-off requests with real-time balance calculations and manager approvals.",

    icon: <CalendarCheck size={28} strokeWidth={1.5} color={RED} />,

  },

  {

    title: "Access Historical Payslips",

    body: "Instant download of tax summaries, withholding forms, and monthly pay stubs.",

    icon: <DollarSign size={28} strokeWidth={1.5} color={RED} />,

  },

  {

    title: "Update Personal Details",

    body: "Update banking info, emergency contacts, and residential addresses with audit trails.",

    icon: <Icon file="Icon (7).png" w={19} h={19} size={28} />,

  },

];



function AutonomousStaffAccess() {

  return (

    <section className={`relative ${SECTION_PAD}`}>

      <div className={CONTAINER}>

        <div

          className={`${RAIL} flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between`}

        >

          <Reveal className="xl:ml-[11px]">

            <Art

              src={asset(

                "autonomous-staff-access",

                "AUTONOMOUS STAFF ACCESS (1).webp"

              )}

              w={2152}

              h={2070}

              dw={717}

              trim={{ l: 116, t: 17, r: 121, b: 100 }}

              alt="Employee using the Humanex self-service app"

            />

          </Reveal>



          <Reveal

            delay={120}

            className="relative z-10 xl:mr-[44px] xl:w-[520px]"

          >

            <Header

              center={false}

              eyebrow="AUTONOMOUS STAFF ACCESS"

              title="Put Everyday HR in Employees' Hands"

              body="Give employees direct access to essential HR activities while dramatically reducing routine administrative inquiries for your people operations staff."

            />

            <ul className="mt-7 space-y-6 xl:pl-[26px]">

              {STAFF_FEATURES.map((f) => (

                <li key={f.title} className="flex">

                  <span className="mt-[7px] w-[46px] shrink-0">{f.icon}</span>

                  <div>

                    <h3 className="text-[18px] font-semibold leading-[26px] text-white">

                      {f.title}

                    </h3>

                    <p className="mt-[2px] max-w-[360px] text-[13.5px] font-normal leading-[22px] text-white">

                      {f.body}

                    </p>

                  </div>

                </li>

              ))}

            </ul>

          </Reveal>

        </div>

      </div>

    </section>

  );

}



/* -------------------------------------------------------------------------- */

/*  10 · People intelligence                                                  */

/* -------------------------------------------------------------------------- */



function PeopleIntelligence() {

  return (

    <section className={`relative ${SECTION_PAD}`}>

      <div className={CONTAINER}>

        <Reveal className="relative z-10">

          <Header

            eyebrow="PEOPLE INTELLIGENCE"

            title="From HR Data to Clear Decisions"

            body="Humanex transforms raw operational data into actionable executive insights through real-time telemetry, retention metrics, and predictive reporting."

            bodyClass="max-w-[820px]"

          />

        </Reveal>

        <Reveal className={VISUAL_GAP} delay={100}>

          {/* asset is 1440 wide; cards start 152px in, glow overhangs top/bottom */}

          <Art

            src={asset("people-intelligence", "PEOPLE INTELLIGENCE (1).webp")}

            w={4320}

            h={2973}

            dw={1440}

            trim={{ t: 267, r: 152, b: 279, l: 152 }}

            alt="Workforce KPIs, headcount growth chart and leave distribution"

          />

        </Reveal>

      </div>

    </section>

  );

}



/* -------------------------------------------------------------------------- */

/*  11 · Universal access                                                     */

/* -------------------------------------------------------------------------- */



function UniversalAccess() {

  const trim: Trim = { t: 1, r: 2, b: 3, l: 2 };

  const cards = [

    { file: "Admin Command Center.webp", w: 1101, alt: "Admin Command Center for large monitors" },

    { file: "Manager Approvals Portal.webp", w: 1100, alt: "Manager Approvals Portal for portables" },

    { file: "Native Employee App.webp", w: 1100, alt: "Native Employee App for iOS and Android" },

  ];

  return (

    <section className={`relative ${SECTION_PAD}`}>

      <div className={CONTAINER}>

        <Reveal>

          <Header

            eyebrow="UNIVERSAL ACCESS"

            title="Your HR Workspace, Wherever Work Happens"

            body="Humanex is engineered for instant availability across web browsers, tablets, and phones, keeping operations perfectly synchronized across the global workforce."

            bodyClass="max-w-[840px]"

          />

        </Reveal>

        <div

          className={`${VISUAL_GAP} ${RAIL} flex flex-col items-center gap-6 xl:flex-row xl:items-start xl:justify-center`}

        >

          {cards.map((c, i) => (

            <Reveal key={c.file} delay={i * 100}>

              <div className={LIFT}>

                <Art

                  src={asset("universal-access", c.file)}

                  w={c.w}

                  h={984}

                  dw={367}

                  trim={trim}

                  alt={c.alt}

                />

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}



/* -------------------------------------------------------------------------- */

/*  12 · Verified outcomes                                                    */

/* -------------------------------------------------------------------------- */



function VerifiedOutcomes() {

  return (

    <section className={`relative ${SECTION_PAD}`}>

      <div className={CONTAINER}>

        <Reveal>

          <Header

            eyebrow="VERIFIED OUTCOMES"

            title="Designed to Reduce Work and Increase Visibility"

            body="LESS MANUAL WORK • FASTER PROCESSES • BETTER VISIBILITY • MORE TIME FOR PEOPLE"

            bodyClass="max-w-[740px]"

          />

        </Reveal>

        <Reveal className={VISUAL_GAP} delay={100}>

          <div className={RAIL}>

            <Art

              src={asset("verified-outcomes", "VERIFIED OUTCOMES.webp")}

              w={3420}

              h={675}

              dw={1140}

              trim={{ t: 32, r: 2, b: 3, l: 2 }}

              alt="60% faster hiring, 50% faster reporting, 40% HR work reduction, 30% productivity increase"

            />

          </div>

        </Reveal>

      </div>

    </section>

  );

}



/* -------------------------------------------------------------------------- */

/*  13 · CTA (compact: copy left, button right)                               */

/* -------------------------------------------------------------------------- */



function Cta() {

  return (

    <section className={`relative pb-[96px] xl:pb-[120px] ${SECTION_PAD}`}>

      <div className={CONTAINER}>

        <Reveal>

          <div

            className={`flex flex-col gap-6 rounded-2xl px-6 py-9 sm:px-10 xl:flex-row xl:items-center xl:justify-between xl:px-[51px] ${LIFT}`}

            style={{ backgroundColor: "#BA0035" }}

          >

            <div className="xl:max-w-[780px]">

              <h2 className="text-[32px] font-bold leading-[40px] tracking-[-1.2px] text-white sm:text-[40px] sm:leading-[48px] xl:text-[48px] xl:leading-[56px]">

                Make HR Simpler. Make Work Better.

              </h2>

              <p className="mt-3 max-w-[740px] text-[18px] font-normal leading-[26px] tracking-[0] text-white">

                Bring your people, processes, and HR operations together with

                Humanex. Start Building a Smarter HR Experience.

              </p>

            </div>

            <Link
              href="/contact#contact-form"
              className="inline-flex h-[62px] w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-white text-[21.7px] font-medium leading-[24.8px] tracking-[0.22px] text-black transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none xl:w-[296px]"
            >
              Get Started Today
              <ArrowRight size={24} strokeWidth={2} color="#BA0035" />
            </Link>

          </div>

        </Reveal>

      </div>

    </section>

  );

}



/* -------------------------------------------------------------------------- */

/*  Page                                                                      */

/* -------------------------------------------------------------------------- */



export default function HumanexPage() {

  return (

    <main className="relative overflow-x-clip bg-black font-['Inter',ui-sans-serif,system-ui,sans-serif] text-white antialiased">

      <Hero />

      <OperationalEvolution />

      <Lifecycle />

      <UnifiedSystem />

      <UnifiedDirectory />

      <TimeTelemetry />

      <FrictionlessAbsence />

      <ZeroFrictionCompensation />

      <AutonomousStaffAccess />

      <PeopleIntelligence />

      <UniversalAccess />

      <VerifiedOutcomes />

      <Cta />

    </main>

  );

}
