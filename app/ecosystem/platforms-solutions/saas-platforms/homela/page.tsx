"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { ArrowRight, Building2, KeyRound, UserSearch } from "lucide-react";

/* =========================================================================
   ASSET PATHS  (place files in /public at exactly these paths)
   ========================================================================= */
const BASE = "/webp/assets/Home-page/homela";

const ASSETS = {
  logo: `${BASE}/hero/logo.webp`,
  hero: `${BASE}/hero/Hero.webp`,
  smarter: `${BASE}/a-smarter-way-to-find-your-home/A SMARTER WAY TO FIND YOUR HOME.webp`,
  journey: [
    `${BASE}/your-property-journey/Stage 1_ Search.webp`,
    `${BASE}/your-property-journey/Stage 2_ Connect.webp`,
    `${BASE}/your-property-journey/Stage 3_ View.webp`,
    `${BASE}/your-property-journey/Stage 4_ Move In.webp`,
  ],
  infoCards: `${BASE}/everything-you-need-to-know/info-cards.webp`,
  everything: `${BASE}/everything-you-need-to-know/EVERYTHING YOU NEED TO KNOW.webp`,
  interestLeft: `${BASE}/express-interest/Left Column_ Source Property Card (72 Fitzjohns Avenue).webp`,
  interestConnector: `${BASE}/express-interest/connector.webp`,
  interestRight: `${BASE}/express-interest/Right Column_ Interactive Confirmation & Tracking Card Modal_margin.webp`,
  findFits: `${BASE}/find-what-fits-you/FIND WHAT FITS YOU.webp`,
  seeker: `${BASE}/built-for-every-role/Property Seeker.webp`,
  seekerCard: `${BASE}/built-for-every-role/Property Seeker-card.webp`,
  agent: `${BASE}/built-for-every-role/Property Agents.webp`,
  agentCard: `${BASE}/built-for-every-role/Property Agents card.webp`,
  owner: `${BASE}/built-for-every-role/Property owner.webp`,
  ownerCard: `${BASE}/built-for-every-role/Property Owners card.webp`,
  advantage: `${BASE}/the-homela-advantage/THE HOMELA ADVANTAGE.webp`,
};

/* =========================================================================
   SHARED HELPERS
   ========================================================================= */

/** Scroll-reveal wrapper (fade + slide up once in view) */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * GlowImage — renders an asset at its natural aspect ratio (no crop, no frame,
 * so the baked-in glow is never cut) at the Figma width, then trims the
 * empty transparent glow-padding with negative margins so every section has
 * the same visual rhythm.
 *   maxW  = Figma width (px). On small screens it shrinks to viewport - 48px.
 *   trim  = [top, bottom] as a fraction of the image width to pull in.
 *   bleed = true → may be wider than the padded container (centred on page).
 */
function GlowImage({
  src,
  alt,
  natW,
  natH,
  maxW,
  trim = [0, 0],
  bleed = true,
  priority = false,
  lift = false,
  className = "",
}: {
  src: string;
  alt: string;
  natW: number;
  natH: number;
  maxW: number;
  trim?: [number, number];
  bleed?: boolean;
  priority?: boolean;
  /** same hover-lift as the Property Journey cards */
  lift?: boolean;
  className?: string;
}) {
  const w = bleed ? `min(calc(100vw - 3rem), ${maxW}px)` : `min(100%, ${maxW}px)`;
  const style = {
    "--w": w,
    width: "var(--w)",
    marginTop: `calc(var(--w) * -${trim[0]})`,
    marginBottom: `calc(var(--w) * -${trim[1]})`,
  } as CSSProperties;

  return (
    <div
      style={style}
      className={`${lift ? "" : "pointer-events-none"} ${
        bleed ? "relative left-1/2 -translate-x-1/2" : "mx-auto"
      } ${className}`}
    >
      <div className={lift ? "transition-transform duration-500 hover:-translate-y-2" : ""}>
      <Image
        src={src}
        alt={alt}
        width={natW}
        height={natH}
        priority={priority}
        quality={90}
        sizes={`(min-width: 1280px) ${maxW}px, 100vw`}
        className="block h-auto w-full"
      />
      </div>
    </div>
  );
}

/** Eyebrow + H1 + body — identical block in every section */
function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: ReactNode;
  body: string;
}) {
  return (
    <Reveal className="relative z-10 mx-auto flex max-w-[860px] flex-col items-center gap-4 text-center">
      {eyebrow && (
        <p className="text-[14px] font-semibold uppercase leading-[14px] tracking-[0.55px] text-[#F4A800]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[32px] font-bold leading-[40px] tracking-[-1.2px] text-white sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px]">
        {title}
      </h2>
      <p className="text-[16px] font-normal leading-[24px] tracking-[0] text-white lg:text-[18px] lg:leading-[26px]">
        {body}
      </p>
    </Reveal>
  );
}

const SECTION = "relative py-12 lg:py-16";
const CONTAINER = "max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10";
/** the gap between a heading block and the visual under it — same everywhere */
const AFTER_HEADING = "mt-10 lg:mt-12";

/* =========================================================================
   1. HERO — img 1176 x 960.64
   ========================================================================= */
const HomelaHero = () => (
  <section className="relative pt-24 pb-12 sm:pt-28 lg:pt-[112px] lg:pb-16">
    {/* GLOW — deep maroon, centred behind logo / heading / paragraph, starts at the navbar and fades before the search bar */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[640px]"
      style={{
        background:
          "linear-gradient(to bottom, rgba(91,29,99,0.28) 0px, rgba(0,0,0,0) 140px)," +
          "radial-gradient(ellipse 48% 62% at 50% 22%, rgba(140,30,50,0.55) 0%, rgba(90,20,40,0.34) 48%, rgba(0,0,0,0) 82%)",
      }}
    />

    <div className={CONTAINER}>
      {/* logo — top-left of the container, exactly as exported */}
      <Reveal className="flex justify-start">
        <Image
          src={ASSETS.logo}
          alt="Homela"
          width={678}
          height={166}
          priority
          unoptimized
          style={{ width: "auto", height: "auto" }}
        />
      </Reveal>

      <Reveal
        delay={80}
        className="mx-auto mt-6 flex max-w-[760px] flex-col items-center gap-5 text-center lg:mt-8"
      >
        <h1 className="text-[36px] font-bold leading-[44px] tracking-[-1.2px] text-white sm:text-[44px] sm:leading-[52px] lg:text-[48px] lg:leading-[56px]">
          Find Your Dream Home.
          <br />
          With Confidence.
        </h1>
        <p className="text-[16px] leading-[24px] text-white lg:text-[18px] lg:leading-[26px]">
          HOMELA helps people discover flats, apartments, and houses across the
          UK through property search, personalized recommendations, location
          insights, and support throughout the home-finding journey.
        </p>
      </Reveal>

      {/* Hero.webp has ~17% transparent padding on top — trimmed so the search bar sits ~90px under the paragraph, like the reference */}
      <Reveal delay={150} className="mt-12 lg:mt-[88px]">
        <GlowImage
          src={ASSETS.hero}
          alt="Homela property search interface"
          natW={3756}
          natH={3002}
          maxW={1176}
          bleed={false}
          trim={[0.17, 0]}
          priority
        />
      </Reveal>
    </div>
  </section>
);

/* =========================================================================
   2. A SMARTER WAY TO FIND YOUR HOME — img 1238.74 x 718.94
   ========================================================================= */
const HomelaSmarterWay = () => (
  <section className={SECTION}>
    <div className={CONTAINER}>
      <SectionHeading
        eyebrow="A smarter way to find your home"
        title="Your Property Search. Made Simpler."
        body="HOMELA brings property discovery, intelligent matching, location insights, and personalized support together to make finding your next home easier and more transparent."
      />
      <Reveal delay={100} className={AFTER_HEADING}>
        <GlowImage
          src={ASSETS.smarter}
          alt="Discover properties, find better matches, understand locations, stay connected"
          natW={3931}
          natH={3746}
          maxW={1238.74}
          trim={[0.23, 0.23]}
        />
      </Reveal>
    </div>
  </section>
);

/* =========================================================================
   3. YOUR PROPERTY JOURNEY — img 1179 x 393.53
   ========================================================================= */
const JOURNEY_ALT = ["Search", "Connect", "View", "Move in"];

const HomelaPropertyJourney = () => (
  <section className={SECTION}>
    <div className={CONTAINER}>
      <SectionHeading
        eyebrow="Your property journey — from search to settlement"
        title="Find It. Connect. Move In."
        body="HOMELA simplifies the property journey by bringing discovery, communication, viewings, and essential next steps into a streamlined experience."
      />
      <div
        className={`mx-auto grid w-full max-w-[1179px] grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-2 ${AFTER_HEADING}`}
      >
        {ASSETS.journey.map((src, i) => (
          <Reveal key={src} delay={i * 100}>
            <div className="transition-transform duration-500 hover:-translate-y-2">
              <Image
                src={src}
                alt={JOURNEY_ALT[i]}
                width={849}
                height={1107}
                quality={90}
                sizes="(min-width: 1024px) 295px, 50vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* =========================================================================
   4. EVERYTHING YOU NEED TO KNOW
      1st: info-cards 1232 x 182   |   2nd: img 1244 x 520
   ========================================================================= */
const HomelaEverything = () => (
  <section className={SECTION}>
    <div className={CONTAINER}>
      <SectionHeading
        eyebrow="Everything you need to know"
        title="Everything You Need to Know About a Property."
        body="HOMELA brings essential property information together in one clear view, helping users understand the home, its location, availability, rental details, and key features before taking the next step."
      />

      {/* 1st — info cards image (natural ratio, export @2x for sharpness) */}
      <Reveal className={AFTER_HEADING}>
        <GlowImage
          src={ASSETS.infoCards}
          lift
          alt="Property overview, location and area, rental information, property features"
          natW={2464}
          natH={364}
          maxW={1180} /* = visible width of the 1244px strip below (its glow padding excluded) */
        />
      </Reveal>

      {/* 2nd — property / map / details strip */}
      <Reveal delay={100} className="mt-10">
        <GlowImage
          src={ASSETS.everything}
          lift
          alt="Property photo, location map, available from, deposit and minimum tenancy"
          natW={3934}
          natH={3149}
          maxW={1244}
          trim={[0.2, 0.19]}
        />
      </Reveal>
    </div>
  </section>
);

/* =========================================================================
   5. EXPRESS INTEREST
      left + right sized so their visible cards are equal; connector centered
      with the same gap on both sides.
   ========================================================================= */
const HomelaExpressInterest = () => (
  <section className={SECTION}>
    <div className={CONTAINER}>
      <SectionHeading
        eyebrow="Express interest — take the next step"
        title={
          <>
            Found a Property You Like?
            <br className="hidden sm:inline" /> Take the Next Step.
          </>
        }
        body="After reviewing the property details, users can express their interest directly from the property listing and begin the property request process."
      />

      <div
        className={`flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-0 ${AFTER_HEADING}`}
      >
        <Reveal className="w-full max-w-[500px] shrink-0">
<div className="transition-transform duration-500 hover:-translate-y-2">
          <Image
            src={ASSETS.interestLeft}
            alt="72 Fitzjohns Avenue property card"
            width={1812}
            height={1578}
            quality={90}
            sizes="(min-width: 1024px) 500px, 100vw"
            className="h-auto w-full"
          />
</div>
        </Reveal>

        <Reveal className="hidden shrink-0 lg:block">
<div className="transition-transform duration-500 hover:-translate-y-2">
          <Image
            src={ASSETS.interestConnector}
            alt="Instant handover"
            width={113}
            height={292}
            quality={90}
            className="h-[292.3px] w-[112.66px] object-contain"
          />
</div>
        </Reveal>

        <Reveal delay={150} className="w-full max-w-[487px] shrink-0">
<div className="transition-transform duration-500 hover:-translate-y-2">
          <Image
            src={ASSETS.interestRight}
            alt="Interest registered confirmation and application progress"
            width={1750}
            height={1743}
            quality={90}
            sizes="(min-width: 1024px) 487px, 100vw"
            className="h-auto w-full"
          />
</div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* =========================================================================
   6. FIND WHAT FITS YOU — img 1280 x 953
   ========================================================================= */
const HomelaFindFitsYou = () => (
  <section id="find-what-fits" className={SECTION}>
    <div className={CONTAINER}>
      <SectionHeading
        eyebrow="Find what fits you"
        title="Search Less. Discover More."
        body="HOMELA makes property discovery easier with search tools that help users narrow down homes based on their needs and preferences."
      />
      <Reveal delay={100} className={AFTER_HEADING}>
        <GlowImage
          src={ASSETS.findFits}
          lift
          alt="Search filters, verified listings and interactive map view"
          natW={4320}
          natH={4136}
          maxW={1280}
          trim={[0.125, 0.15]}
        />
      </Reveal>
    </div>
  </section>
);

/* =========================================================================
   7. BUILT FOR EVERY ROLE — clickable tabs, each with its own text + 2 images
   ========================================================================= */
const ROLES = [
  {
    id: "seeker",
    icon: UserSearch,
    tab: "Property Seeker",
    title: "Property Seeker",
    text: "Discover homes that fit your needs and lifestyle. Search, explore, express interest, and track your journey.",
    person: ASSETS.seeker,
    personSize: [1778, 1777] as const,
    card: ASSETS.seekerCard,
    cardSize: [1051, 498] as const,
    personLeft: false,
    trim: [0.16, 0.08] as [number, number],
  },
  {
    id: "agent",
    icon: Building2,
    tab: "Property Agent",
    title: "Property Agents",
    text: "Manage property interests and review applicants efficiently. Schedule visits, make decisions, and keep bookings moving.",
    person: ASSETS.agent,
    personSize: [1948, 1947] as const,
    card: ASSETS.agentCard,
    cardSize: [1048, 228] as const,
    personLeft: false,
    trim: [0.16, 0.08] as [number, number],
  },
  {
    id: "owner",
    icon: KeyRound,
    tab: "Landlord / Provider",
    title: "Property Owners",
    text: "Showcase your properties and keep listings up to date. Connect with interested seekers and manage property activity.",
    person: ASSETS.owner,
    personSize: [1778, 1777] as const,
    card: ASSETS.ownerCard,
    cardSize: [1041, 492] as const,
    personLeft: true,
    trim: [0.16, 0.1] as [number, number],
  },
];

const HomelaBuiltForEveryRole = () => {
  const [active, setActive] = useState(0);
  const role = ROLES[active];

  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Built for every role — one connected ecosystem"
          title={
            <>
              One Connected Platform.
              <br className="hidden sm:inline" /> Different Users. Different
              Actions.
            </>
          }
          body="HOMELA connects property seekers and property-side users through role-based actions, making it seamless for everyone to manage their part of the UK property journey."
        />

        {/* tabs — white bar with icons, as in the reference */}
        <div className={`flex justify-center ${AFTER_HEADING}`}>
          <div
            role="tablist"
            className="flex w-full max-w-[670px] gap-1 rounded-xl bg-[#EEF2FF] p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          >
            {ROLES.map((r, i) => {
              const Icon = r.icon;
              return (
                <button
                  key={r.id}
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-3 text-[13px] font-semibold transition-all duration-300 sm:text-[14px] ${
                    active === i
                      ? "bg-white text-[#0B1C30] shadow-[0_2px_10px_rgba(0,0,0,0.12)]"
                      : "text-[#45464D] hover:bg-white/60"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{r.tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* panel — fixed min-height so the page never jumps between tabs;
            key re-mounts so the animation replays on every click */}
        <div
          key={role.id}
          role="tabpanel"
          className="mx-auto mt-6 grid max-w-[1180px] animate-[roleIn_0.5s_ease-out_both] grid-cols-1 items-center gap-6 lg:min-h-[520px] lg:grid-cols-2 lg:gap-0"
        >
          {/* text + card */}
          <div
            className={`order-2 mx-auto flex w-full max-w-[400px] flex-col gap-6 ${
              role.personLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-[16px] font-semibold leading-[24px] text-white">
                {role.title}
              </h3>
              <p className="text-[16px] font-normal leading-[24px] text-white lg:text-[18px] lg:leading-[26px]">
                {role.text}
              </p>
            </div>
            <Image
              src={role.card}
              alt={`${role.title} card`}
              width={role.cardSize[0]}
              height={role.cardSize[1]}
              quality={90}
              className="h-auto w-full"
            />
          </div>

          {/* person */}
          <div
            className={`order-1 w-full ${
              role.personLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <GlowImage
              src={role.person}
              alt={role.title}
              natW={role.personSize[0]}
              natH={role.personSize[1]}
              maxW={540}
              bleed={false}
              trim={role.trim}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes roleIn { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
      `}</style>
    </section>
  );
};

/* =========================================================================
   8. THE HOMELA ADVANTAGE — img 1280 x 829.02
   ========================================================================= */
const HomelaAdvantage = () => (
  <section className={SECTION}>
    <div className={CONTAINER}>
      <SectionHeading
        eyebrow="The Homela advantage"
        title="A Better Way to Find Your Next Home."
        body="HOMELA combines property discovery, intelligent recommendations, location insights, and personalized support into one property-finding experience."
      />
      <Reveal delay={100} className={AFTER_HEADING}>
        <GlowImage
          src={ASSETS.advantage}
          alt="Search, Discover, Move — the Homela advantage"
          natW={3408}
          natH={1822}
          maxW={1280}
        />
        {/* Property → Map → Interest → Message → Key */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12px] font-medium text-white/80">
          {["Property", "Map", "Interest", "Message", "Key"].map((t, i, arr) => (
            <span key={t} className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8235B]" />
                {t}
              </span>
              {i < arr.length - 1 && <span className="text-white/40">→</span>}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

/* =========================================================================
   9. CTA
   ========================================================================= */
const HomelaCTA = () => (
  <section className="relative pt-4 pb-16 lg:pb-24">
    <div className={CONTAINER}>
      <Reveal>
        <div className="mx-auto flex min-h-[200px] w-full max-w-[1216px] flex-col items-start justify-center gap-6 rounded-[20px] bg-gradient-to-r from-[#5B1D63] via-[#C8235B] to-[#F08A3C] px-6 py-8 shadow-[0_20px_60px_rgba(200,35,91,0.3)] sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-[560px] space-y-2">
            <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-1.2px] text-white sm:text-[30px] lg:text-[34px] lg:leading-[42px]">
              Your Next Home Could Be One <br className="hidden sm:inline" />
              Search Away.
            </h2>
            <p className="text-[15px] font-normal leading-[24px] text-white/90 lg:text-[16px]">
              Discover properties, explore neighbourhoods, and connect with
              trusted agents across the UK on Homela.
            </p>
          </div>

          <Link
            href="#find-what-fits"
            className="inline-flex h-[50px] w-full shrink-0 items-center justify-center gap-3 rounded-full bg-white px-8 text-[16px] font-medium leading-[24.8px] tracking-[0.22px] text-black shadow-xl transition-all hover:bg-zinc-100 sm:w-auto sm:text-[18px]"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

/* =========================================================================
   MAIN HOMELA PAGE EXPORT
   ========================================================================= */
export default function HomelaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#000000] font-sans text-white selection:bg-[#F4A800]/30 selection:text-white">
      <HomelaHero />
      <HomelaSmarterWay />
      <HomelaPropertyJourney />
      <HomelaEverything />
      <HomelaExpressInterest />
      <HomelaFindFitsYou />
      <HomelaBuiltForEveryRole />
      <HomelaAdvantage />
      <HomelaCTA />
    </main>
  );
}
