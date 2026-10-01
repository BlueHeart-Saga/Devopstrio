"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";
import {
  ArrowRight,
  LineChart,
  ListChecks,
  Package,
  ShieldCheck,
  Store,
  TrendingUp,
  Zap,
} from "lucide-react";

/* =========================================================================
   ASSETS — exact filenames. Every raster is an @3x export, so it is drawn at
   natural size / 3 (measured against the reference: all match 0.3333 scale).
   ========================================================================= */
const BASE = "/webp/assets/Home-page/prestivo";
type Asset = { p: string; w: number; h: number };
const a = (p: string, w: number, h: number): Asset => ({ p: `${BASE}/${p}`, w, h });

const A = {
  logoMark: a("logo/image 1.png", 72, 63),
  logoWord: a("logo/PRESTIVO.png", 112, 19),
  hero: a("hero/prestivo hero.webp", 2866, 2548),
  heroDash: a("hero/PRODUCT ILLUSTRATION UNDER HERO.webp", 3162, 2604),
  onePlatform: a("one-platform-complete-control/ONE PLATFORM. COMPLETE CONTROL..webp", 1347, 1263),
  faster: [
    a("get-online-faster/01 - CREATE.webp", 845, 936),
    a("get-online-faster/02 - CUSTOMIZE.webp", 845, 936),
    a("get-online-faster/03 - ADD PRODUCTS.webp", 845, 936),
    a("get-online-faster/04 - GO LIVE.webp", 845, 936),
  ],
  central: a("centralized-store-management/CENTRALIZED STORE MANAGEMENT.webp", 2094, 1509),
  smart: a("smart-product-discovery/SMART PRODUCT DISCOVERY.webp", 1850, 1257),
  stock: a("end-to-end-business-management/1. Stock.webp", 541, 468),
  order: a("end-to-end-business-management/2. Order.webp", 450, 519),
  warehouse: a("end-to-end-business-management/3. Warehouse.webp", 513, 519),
  delivery: a("end-to-end-business-management/4. Delivery.webp", 561, 519),
  customer: a("end-to-end-business-management/5. Customer.webp", 507, 519),
  phones: [
    a("built-for-better-buying/01 BROWSING.webp", 1202, 1529),
    a("built-for-better-buying/02 INSTANT CHECKOUT.webp", 1083, 1461),
    a("built-for-better-buying/03 LIVE TRACKING.webp", 1266, 1565),
  ],
  biz: [
    a("flexible-for-different-business-types/Retail Businesses.webp", 1071, 669),
    a("flexible-for-different-business-types/Startups & Scaleups.webp", 1071, 669),
    a("flexible-for-different-business-types/Local Brick-&-Mortar.webp", 1071, 669),
    a("flexible-for-different-business-types/Solo Entrepreneurs.webp", 1071, 669),
    a("flexible-for-different-business-types/B2B Wholesalers.webp", 1071, 669),
    a("flexible-for-different-business-types/Global Sellers.webp", 1071, 669),
  ],
  ic: {
    box: a("icons/Icon.png", 21, 23), //            lavender cube
    network: a("icons/Icon (1).png", 23, 21), //    green network
    list: a("icons/Icon (2).png", 23, 21), //       lavender checklist
    sliders: a("icons/Icon (3).png", 21, 21), //    green sliders
    search: a("icons/Vector (1).png", 23, 23), //   green search
    trend: a("icons/Vector (2).png", 21, 14), //    green trend arrow
    cube2: a("icons/Vector.png", 22, 25), //        lavender cube
    tag: a("icons/svg1848.png", 28, 27), //         lavender tag
  },
};

/* =========================================================================
   TOKENS
   ========================================================================= */
const INTER: CSSProperties = { fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" };
const BLUE = "#3E74FF"; // buttons + eyebrow
const ICON_LAV = "#C0C1FF";
const ICON_GREEN = "#4EDEA3";
const ICON_SKY = "#8DBBFF";
const SOFT = "text-white/80"; // section intro paragraphs (reference is slightly greyed)
const lift = "transition-transform duration-300 ease-out hover:-translate-y-2";

/** Natural-aspect image at natural/3 px (or an explicit width). Never cropped. */
function Pic({
  asset,
  w,
  alt = "",
  className = "",
  style,
  priority,
}: {
  asset: Asset;
  w?: number;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
}) {
  const W = w ?? asset.w / 3;
  return (
    <Image
      src={encodeURI(asset.p)}
      alt={alt}
      width={Math.round(W)}
      height={Math.round((W * asset.h) / asset.w)}
      quality={90}
      unoptimized
      priority={priority}
      draggable={false}
      className={`select-none ${className}`}
      style={{ width: W, height: "auto", maxWidth: "100%", ...style }}
    />
  );
}

function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10 ${className}`}>{children}</div>
  );
}

/** Section = relative 1440-design canvas on xl (fixed height), plain flow below xl. */
function Sec({
  h,
  children,
  className = "",
}: {
  h: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative py-14 xl:py-0 xl:h-[var(--h)] ${className}`}
      style={{ ["--h" as string]: `${h}px` } as CSSProperties}
    >
      {children}
    </section>
  );
}

/** Absolute placement in 1440-design coordinates (x from canvas-left, y from section top). */
function At({
  x,
  y,
  children,
  className = "",
  style,
}: {
  x: number;
  y: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`mt-10 xl:mt-0 flex justify-center xl:block xl:absolute xl:left-[var(--l)] xl:top-[var(--t)] ${className}`}
      style={
        {
          ["--l" as string]: `calc(50% + ${x - 720}px)`,
          ["--t" as string]: `${y}px`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

/** Soft blue radial glow */
function Glow({
  x,
  y,
  w,
  h,
  color = "rgba(24,64,180,0.38)",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className="hidden xl:block absolute pointer-events-none"
      style={{
        left: `calc(50% + ${x - 720}px)`,
        top: y,
        width: w,
        height: h,
        transform: "translate(-50%,-50%)",
        background: `radial-gradient(closest-side, ${color}, transparent 100%)`,
        filter: "blur(20px)",
      }}
    />
  );
}

/** Scroll-reveal wrapper: fade + slide up once in view */
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
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- typography blocks (from the typography tables) ---------- */
const Eyebrow = ({ children, center }: { children: ReactNode; center?: boolean }) => (
  <p
    className={`uppercase text-[14px] leading-[14px] font-semibold tracking-[0.55px] ${center ? "text-center" : ""}`}
    style={{ ...INTER, color: BLUE }}
  >
    {children}
  </p>
);

function Head({
  eyebrow,
  title,
  body,
  center,
  titleW,
  bodyW,
  eyebrowGap = 16,
  bodyGap = 16,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  center?: boolean;
  titleW?: number;
  bodyW?: number;
  eyebrowGap?: number;
  bodyGap?: number;
}) {
  const c = center ? "text-center mx-auto" : "";
  return (
    <div className={center ? "text-center" : ""}>
      <Eyebrow center={center}>{eyebrow}</Eyebrow>
      <h2
        className={`text-[34px] leading-[42px] xl:text-[48px] xl:leading-[56px] font-bold tracking-[-1.2px] text-white ${c}`}
        style={{ ...INTER, marginTop: eyebrowGap, maxWidth: titleW }}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`text-[18px] leading-[26px] font-normal ${SOFT} ${c}`}
          style={{ ...INTER, marginTop: bodyGap, maxWidth: bodyW }}
        >
          {body}
        </p>
      )}
    </div>
  );
}

/** Icon + title + body rows (icons alternate lavender / green per the reference) */
type Feat = { icon: Asset; t: string; b: string };
function FeatureList({ items, iconCol }: { items: Feat[]; iconCol: number }) {
  return (
    <div className="grid gap-6 xl:gap-[52px]">
      {items.map((f, i) => (
        <Reveal key={f.t} delay={i * 80}>
          <div className="flex items-start xl:h-[48px]">
            <div
              className="shrink-0 flex justify-start items-center h-[26px]"
              style={{ width: iconCol }}
            >
              <Pic asset={f.icon} w={f.icon.w} />
            </div>
            <div>
              <h3 className="text-[18px] leading-[26px] font-semibold text-white" style={INTER}>
                {f.t}
              </h3>
              <p className="text-[14px] leading-[22px] font-normal text-white" style={INTER}>
                {f.b}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* =========================================================================
   ONE-SCROLL-PER-STEP hook for the two pinned sections
   Wheel / touch / keys: while the section is aligned to the top of the
   viewport, each gesture advances exactly ONE step (with a cooldown that
   swallows trackpad inertia). After the last (or before the first) step the
   page scrolls normally, so it never traps the user. Works forwards and back.
   ========================================================================= */
function useStepper(ref: RefObject<HTMLElement | null>, count: number) {
  const [step, setStep] = useState(0);
  const [active, setActive] = useState(false);
  const S = useRef({ step: 0, lock: 0, ty: 0, fired: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const st = S.current;
    const enabled = () => window.innerWidth >= 768;
    setActive(enabled());
    const onResize = () => setActive(enabled());
    window.addEventListener("resize", onResize);

    const set = (n: number) => {
      st.step = n;
      setStep(n);
    };
    const align = () =>
      window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top, behavior: "smooth" });

    /** returns true when the gesture was consumed (caller must preventDefault) */
    const gesture = (dir: number): boolean => {
      if (!enabled() || !dir) return false;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (Math.abs(r.top) >= vh * 0.5) return false; // section not in control
      const now = performance.now();
      if (now < st.lock) return true; // swallow inertia / smooth-scroll wheel noise
      const aligned = Math.abs(r.top) < 6;
      if (!aligned) {
        if (dir > 0 && r.top > 0) {
          set(0);
          align();
          st.lock = now + 900;
          return true;
        }
        if (dir < 0 && r.top < 0) {
          set(count - 1);
          align();
          st.lock = now + 900;
          return true;
        }
        return false; // leaving the section
      }
      if (dir > 0 && st.step < count - 1) {
        set(st.step + 1);
        st.lock = now + 850;
        return true;
      }
      if (dir < 0 && st.step > 0) {
        set(st.step - 1);
        st.lock = now + 850;
        return true;
      }
      return false; // at an end -> let the page scroll on
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 2) return;
      if (gesture(Math.sign(e.deltaY))) e.preventDefault();
    };
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && /INPUT|TEXTAREA|SELECT/.test(t.tagName)) return;
      const down = ["ArrowDown", "PageDown", " "].includes(e.key);
      const up = ["ArrowUp", "PageUp"].includes(e.key);
      if ((down || up) && gesture(down ? 1 : -1)) e.preventDefault();
    };
    const onTS = (e: TouchEvent) => {
      st.ty = e.touches[0].clientY;
      st.fired = false;
    };
    const onTM = (e: TouchEvent) => {
      const dy = st.ty - e.touches[0].clientY;
      if (Math.abs(dy) < 28) return;
      if (st.fired) {
        const r = el.getBoundingClientRect();
        if (Math.abs(r.top) < window.innerHeight * 0.5 && performance.now() < st.lock) e.preventDefault();
        return;
      }
      if (gesture(Math.sign(dy))) {
        st.fired = true;
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTS, { passive: true });
    window.addEventListener("touchmove", onTM, { passive: false });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTS);
      window.removeEventListener("touchmove", onTM);
    };
  }, [ref, count]);

  return { step, active };
}

/* =========================================================================
   1. HERO  (page y 0 → 1618)
   ========================================================================= */
function Hero() {
  return (
    <Sec h={1618} className="overflow-hidden">
      {/* hero.webp carries its own navy glow; it is drawn at 956.7px, x485 y0 */}
      <At x={485} y={0} className="pointer-events-none">
        <Reveal>
          <Pic asset={A.hero} priority alt="Store owner with laptop" />
        </Reveal>
      </At>

      <At x={134} y={118} className="z-10 !justify-start px-6 xl:px-0">
        <Reveal>
          <div className="max-w-[560px] xl:max-w-[520px]">
            <div className="flex items-center" style={{ height: 60 }}>
              <Pic asset={A.logoMark} w={72} alt="" style={{ marginLeft: 13 }} />
              <Pic asset={A.logoWord} w={112} alt="Prestivo" style={{ marginLeft: -12, marginTop: 4 }} />
            </div>
            <h1
              className="mt-[62px] text-[40px] leading-[48px] xl:text-[53px] xl:leading-[64px] font-bold tracking-[-1.4px] text-white"
              style={INTER}
            >
              Take Your Store Online and Reach More Customers
            </h1>
            <p
              className="mt-3 max-w-[410px] text-[16px] leading-[26px] tracking-[-0.16px] font-normal text-white"
              style={{ ...INTER, marginLeft: 2 }}
            >
              Turn your local store or business into a powerful online store with Prestivo. Launch quickly,
              manage your products and orders easily, and grow your business from one platform.
            </p>
            <div className="mt-[71px] flex gap-[10px]">
              <Link
                href="/contact"
                className="inline-flex h-[48px] w-[188px] items-center justify-center gap-1 rounded-[4px] text-[13px] leading-[18px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ ...INTER, background: BLUE }}
              >
                Start Your Store <ArrowRight size={13} />
              </Link>
              <a
                href="https://prestivo.devopstrio.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[48px] w-[174px] items-center justify-center rounded-[4px] bg-white text-[13px] leading-[18px] font-semibold text-black transition-transform hover:-translate-y-0.5"
                style={INTER}
              >
                Explore Prestivo
              </a>
            </div>
          </div>
        </Reveal>
      </At>

      <At x={193} y={750}>
        <Reveal delay={120}>
          <Pic asset={A.heroDash} priority alt="Storefront product listing" />
        </Reveal>
      </At>
    </Sec>
  );
}

/* =========================================================================
   2. ONE PLATFORM. COMPLETE CONTROL.  (top 1618)
   ========================================================================= */
function OnePlatform() {
  return (
    <Sec h={640}>
      <Glow x={937} y={310} w={760} h={620} color="rgba(20,58,170,0.30)" />
      <At x={160} y={159} className="!justify-start px-6 xl:px-0">
        <Reveal>
          <div className="w-full max-w-[440px]">
            <Head
              eyebrow="One Platform. Complete Control."
              eyebrowGap={22}
              bodyGap={32}
              titleW={400}
              bodyW={425}
              title="Run Your Store From One Dashboard."
              body="Prestivo brings the essential tools for running an online store together in one centralized platform, making it easier to manage products, inventory, orders, customers, and deliveries."
            />
          </div>
        </Reveal>
      </At>
      <At x={712} y={98}>
        <Reveal delay={120}>
          <div className={lift}>
            <Pic asset={A.onePlatform} alt="Dashboard tools" />
          </div>
        </Reveal>
      </At>
    </Sec>
  );
}

/* =========================================================================
   3. GET ONLINE FASTER  (top 2258)
   ========================================================================= */
const FASTER_X = [121, 417, 719, 1022];
function GetOnlineFaster() {
  return (
    <Sec h={650}>
      <Wrap className="xl:pt-[33px]">
        <Reveal>
          <Head
            center
            eyebrow="Get Online Faster"
            title="Go From Idea to Selling Faster."
            bodyW={810}
            body="Start with a ready-to-use e-commerce platform and launch your online store without complex development."
          />
        </Reveal>
      </Wrap>
      <div className="xl:contents grid grid-cols-2 gap-4 px-6 mt-10 xl:mt-0 xl:px-0 justify-items-center">
        {A.faster.map((img, i) => (
          <At key={i} x={FASTER_X[i]} y={280}>
            <Reveal delay={i * 100}>
              <div className={lift}>
                <Pic asset={img} alt={`Step ${i + 1}`} />
              </div>
            </Reveal>
          </At>
        ))}
      </div>
    </Sec>
  );
}

/* =========================================================================
   4. CENTRALIZED STORE MANAGEMENT  (top 2908)
   ========================================================================= */
function Centralized() {
  const items: Feat[] = [
    { icon: A.ic.box, t: "Product Management", b: "Add, organize, and update products whenever needed." },
    { icon: A.ic.network, t: "Category Management", b: "Keep your product catalog structured and easy to manage." },
    { icon: A.ic.list, t: "Order Management", b: "Monitor and manage orders throughout the process." },
    { icon: A.ic.sliders, t: "Store Administration", b: "Manage key store settings and business operations centrally." },
  ];
  return (
    <Sec h={867}>
      <Glow x={960} y={520} w={860} h={560} color="rgba(20,58,170,0.16)" />
      <Wrap className="xl:pt-[33px]">
        <Reveal>
          <Head
            center
            eyebrow="Centralized Store Management"
            titleW={620}
            bodyW={840}
            title="Run Your Store From One Dashboard."
            body="Prestivo gives you centralized control over the essential operations of your online business, helping you manage your store from a single place."
          />
        </Reveal>
      </Wrap>
      <At x={108} y={347} className="!justify-start px-6 xl:px-0">
        <FeatureList items={items} iconCol={40} />
      </At>
      <At x={628} y={299}>
        <Reveal delay={120}>
          <div className={lift}>
            <Pic asset={A.central} alt="Store dashboard" />
          </div>
        </Reveal>
      </At>
    </Sec>
  );
}

/* =========================================================================
   5. SMART PRODUCT DISCOVERY  (top 3775) — image left, features right
   ========================================================================= */
function SmartDiscovery() {
  const items: Feat[] = [
    { icon: A.ic.cube2, t: "Product Search", b: "Find products and listings using flexible search options." },
    { icon: A.ic.search, t: "Seller Discovery", b: "Explore suppliers, locations, and seller information." },
    { icon: A.ic.tag, t: "Price Comparison", b: "Review asking prices and compare available listings." },
    { icon: A.ic.trend, t: "Market Trends", b: "Understand buying activity and emerging product trends." },
  ];
  return (
    <Sec h={868}>
      <Glow x={430} y={510} w={820} h={560} color="rgba(20,58,170,0.16)" />
      <Wrap className="xl:pt-[33px]">
        <Reveal>
          <Head
            center
            eyebrow="Smart Product Discovery"
            titleW={620}
            bodyW={600}
            title="Find Products.Compare. Connect."
            body="Prestivo's Search Hub helps you discover products, compare available listings, and explore marketplace opportunities from one convenient workspace."
          />
        </Reveal>
      </Wrap>
      <At x={120} y={298}>
        <Reveal delay={120}>
          <div className={lift}>
            <Pic asset={A.smart} alt="Search hub" />
          </div>
        </Reveal>
      </At>
      <At x={816} y={332} className="!justify-start px-6 xl:px-0">
        <FeatureList items={items} iconCol={36} />
      </At>
    </Sec>
  );
}

/* =========================================================================
   6. END-TO-END BUSINESS MANAGEMENT — pinned, one scroll = one step
   ========================================================================= */
const PAD = 40; // room for the 5th label above the stage
const STAGE_W = 1440;
const STAGE_H = 560 + PAD;
type Node = { asset: Asset; x: number; y: number; cx: number; ty: number; t: string; s: string };
const NODES: Node[] = [
  { asset: A.stock, x: 27, y: 344, cx: 111, ty: 301, t: "1. Stock", s: "Automated Inventory Check" },
  { asset: A.order, x: 358, y: 282, cx: 433, ty: 242, t: "2. Order", s: "Instant Payment & Sync" },
  { asset: A.warehouse, x: 655, y: 167, cx: 714, ty: 135, t: "3. Warehouse", s: "Automated Pick & Pack" },
  { asset: A.delivery, x: 949, y: 60, cx: 1007, ty: 39, t: "4. Delivery", s: "Express Carrier Hand-off" },
  { asset: A.customer, x: 1215, y: 9, cx: 1298, ty: -19, t: "5. Customer", s: "Delivered & Confirmed" },
];
// x where the lightning stops for each node (icon base centre)
const STOP_X = [117, 433, 742, 1042, 1300];
const CURVE_PTS: [number, number][] = [
  [30, 490], [100, 505], [150, 508], [200, 507], [300, 492], [400, 467], [500, 436], [600, 400],
  [700, 357], [800, 313], [900, 272], [1000, 235], [1100, 207], [1200, 190], [1300, 185], [1400, 195], [1440, 200],
].map(([x, y]) => [x, y + PAD]) as [number, number][];

function smoothPath(p: [number, number][]) {
  let d = `M${p[0][0]},${p[0][1]}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0]},${c1[1]} ${c2[0]},${c2[1]} ${p2[0]},${p2[1]}`;
  }
  return d;
}
const CURVE_D = smoothPath(CURVE_PTS);
const ease = (k: number) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

function EndToEnd() {
  const secRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const { step: rawStep, active } = useStepper(secRef, NODES.length);
  const step = active ? rawStep : NODES.length - 1;

  const [total, setTotal] = useState(0);
  const [stops, setStops] = useState<number[]>([]);
  const [cur, setCur] = useState(0);
  const [moving, setMoving] = useState(false);
  const curRef = useRef(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const L = path.getTotalLength();
    setTotal(L);
    setStops(
      STOP_X.map((sx) => {
        let lo = 0, hi = L;
        for (let i = 0; i < 26; i++) {
          const m = (lo + hi) / 2;
          if (path.getPointAtLength(m).x < sx) lo = m; else hi = m;
        }
        return hi;
      })
    );
  }, []);

  useEffect(() => {
    const on = () =>
      setScale(Math.max(0.4, Math.min(1, window.innerWidth / STAGE_W, (window.innerHeight - 400) / STAGE_H)));
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);

  // lightning glides to the active node — same easing forwards and backwards
  useEffect(() => {
    if (!stops.length) return;
    const from = curRef.current, to = stops[step], t0 = performance.now(), dur = 950;
    let raf = 0;
    setMoving(true);
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      const v = from + (to - from) * ease(k);
      curRef.current = v;
      setCur(v);
      if (k < 1) raf = requestAnimationFrame(tick);
      else setMoving(false);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [step, stops]);

  const head = pathRef.current && cur > 0 ? pathRef.current.getPointAtLength(cur) : null;

  return (
    <section ref={secRef} className="relative h-[100svh] overflow-hidden flex flex-col justify-center pt-24 pb-6">
      <Wrap className="w-full">
        <Reveal>
          <Head
            center
            eyebrow="End-to-End Business Management"
            titleW={760}
            bodyW={780}
            title={<>From Stock to Doorstep. Keep <br className="hidden xl:block" />Everything Moving.</>}
            body="Manage inventory, orders, warehouse activities and deliveries through a connected workflow."
          />
        </Reveal>
      </Wrap>

      <div className="mx-auto mt-[56px]" style={{ width: STAGE_W * scale, height: STAGE_H * scale }}>
        <div
          className="relative"
          style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})`, transformOrigin: "top left" }}
        >
          <svg className="absolute inset-0 overflow-visible" width={STAGE_W} height={STAGE_H} viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}>
            <defs>
              <linearGradient id="e2eGrad" x1="0" x2="1">
                <stop offset="0" stopColor="#3E74FF" />
                <stop offset="1" stopColor="#9fe0ff" />
              </linearGradient>
              <filter id="e2eBlurWide" x="-10%" y="-60%" width="120%" height="220%">
                <feGaussianBlur stdDeviation="34" />
              </filter>
              <filter id="e2eBlur" x="-10%" y="-60%" width="120%" height="220%">
                <feGaussianBlur stdDeviation="9" />
              </filter>
            </defs>
            {/* blue haze band under the whole curve (as in the reference) */}
            <path d={CURVE_D} fill="none" stroke="rgba(38,86,220,0.42)" strokeWidth="90" strokeLinecap="round" filter="url(#e2eBlurWide)" />
            <path ref={pathRef} d={CURVE_D} fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="1.4" />
            {total > 0 && (
              <>
                <path d={CURVE_D} fill="none" stroke="url(#e2eGrad)" strokeWidth="10" strokeLinecap="round"
                  strokeDasharray={`${cur} ${total}`} opacity={moving ? 0.9 : 0.55} filter="url(#e2eBlur)" />
                <path d={CURVE_D} fill="none" stroke="url(#e2eGrad)" strokeWidth={moving ? 3.6 : 2.6} strokeLinecap="round"
                  strokeDasharray={`${cur} ${total}`} />
              </>
            )}
            {head && (
              <>
                <circle cx={head.x} cy={head.y} r={moving ? 22 : 14} fill="rgba(120,180,255,0.35)" filter="url(#e2eBlur)" />
                <circle cx={head.x} cy={head.y} r={moving ? 6 : 4} fill="#fff" />
              </>
            )}
          </svg>

          {NODES.map((n, i) => {
            const on = i <= step;
            const now = i === step;
            return (
              <div key={n.t}>
                <div
                  className="absolute text-center transition-opacity duration-700"
                  style={{ left: n.cx - 130, width: 260, top: n.ty + PAD - 12, opacity: on ? 1 : 0.35 }}
                >
                  <p className="text-[16px] leading-[24px] font-bold text-white" style={INTER}>{n.t}</p>
                  <p className="text-[12px] leading-[24px] font-normal text-white" style={INTER}>{n.s}</p>
                </div>
                <div
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    left: n.x,
                    top: n.y + PAD,
                    opacity: on ? 1 : 0.35,
                    transform: now ? "translateY(-6px) scale(1.04)" : "none",
                    filter: now ? "drop-shadow(0 0 26px rgba(70,130,255,0.75))" : "none",
                  }}
                >
                  <Pic asset={n.asset} alt={n.t} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   7. BUILT FOR BETTER BUYING  (top 5565)
   ========================================================================= */
const PHONES = [
  { x: 155, y: 343, lx: 387, ly: 807, rot: -6.5, t: "01 BROWSING" },
  { x: 499, y: 321, lx: 665, ly: 783, rot: 1.5, t: "02 INSTANT CHECKOUT" },
  { x: 801, y: 344, lx: 955, ly: 830, rot: 9, t: "03 LIVE TRACKING" },
];
function BetterBuying() {
  return (
    <Sec h={968}>
      <Glow x={675} y={560} w={1000} h={640} color="rgba(18,58,150,0.42)" />
      <Wrap className="xl:pt-[33px]">
        <Reveal>
          <Head
            center
            eyebrow="Built For Better Buying"
            titleW={760}
            bodyW={760}
            title="Make Buying Simple From Search to Delivery."
            body="Create a smooth customer journey with easy browsing, secure checkout, multiple payment options, notifications and real-time order tracking."
          />
        </Reveal>
      </Wrap>
      <div className="grid gap-10 mt-6 xl:contents justify-items-center">
        {PHONES.map((p, i) => (
          <div key={p.t} className="xl:contents flex flex-col items-center">
            <At x={p.x} y={p.y}>
              <Reveal delay={i * 120}>
                <div className={lift}>
                  <Pic asset={A.phones[i]} alt={p.t} />
                </div>
              </Reveal>
            </At>
            <At x={p.lx} y={p.ly} className="xl:-translate-x-1/2 xl:-translate-y-1/2 !mt-2 xl:!mt-0">
              <p
                className="whitespace-nowrap text-[17px] leading-[24px] font-semibold tracking-[0.6px] text-[#C9CDDD]"
                style={{ ...INTER, transform: `rotate(${p.rot}deg)` }}
              >
                {p.t}
              </p>
            </At>
          </div>
        ))}
      </div>
    </Sec>
  );
}

/* =========================================================================
   8. FLEXIBLE FOR DIFFERENT BUSINESS TYPES  (top 6533)
   ========================================================================= */
const BIZ_XY = [
  [148, 213], [523, 213], [898, 213],
  [148, 458], [523, 458], [898, 458],
];
function Flexible() {
  return (
    <Sec h={760}>
      <Wrap className="xl:pt-[33px]">
        <Reveal>
          <Head
            center
            eyebrow="Flexible For Different Business Types"
            bodyW={740}
            title="One Platform. Many Ways to Sell."
            body="Prestivo is designed for businesses looking to establish, manage and grow their online presence."
          />
        </Reveal>
      </Wrap>
      <div className="grid sm:grid-cols-2 gap-4 px-6 mt-10 xl:contents justify-items-center">
        {A.biz.map((img, i) => (
          <At key={i} x={BIZ_XY[i][0]} y={BIZ_XY[i][1]} className="!mt-0">
            <Reveal delay={(i % 3) * 100}>
              <div className={lift}>
                <Pic asset={img} alt="Business type" />
              </div>
            </Reveal>
          </At>
        ))}
      </div>
    </Sec>
  );
}

/* =========================================================================
   9. DESIGNED FOR BUSINESS GROWTH — pinned, one scroll = one step
   ========================================================================= */
const GROWTH = [
  { word: "SIMPLE.", Icon: Zap, t: "Zero-Code Onboarding", b: "Launch in under 3 minutes with pre-composed modules, automatic DNS routing, and intuitive visual management." },
  { word: "SECURE.", Icon: ShieldCheck, t: "Bank-Grade Foundation", b: "PCI-DSS Level 1 certified architecture, automated TLS certificate rotations, and 256-bit AES database encryption." },
  { word: "SCALABLE.", Icon: TrendingUp, t: "Elastic Edge Infrastructure", b: "Seamlessly absorb flash sales with 50,000+ requests per second support across 310+ worldwide edge locations." },
];
function Growth() {
  const ref = useRef<HTMLElement>(null);
  const { step, active } = useStepper(ref, GROWTH.length);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const on = () => setScale(Math.max(0.55, Math.min(1, (window.innerHeight - 90) / 900)));
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden flex items-center justify-center pt-20">
      {/* centre glow from the reference */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 pointer-events-none"
        style={{
          width: 1000, height: 820, transform: "translate(-50%,-46%)",
          background: "radial-gradient(closest-side, rgba(20,52,130,0.55), rgba(10,26,70,0.25) 55%, transparent 100%)",
          filter: "blur(30px)",
        }}
      />
      <div className="relative w-full origin-center" style={{ transform: `scale(${scale})` }}>
        <Wrap>
          <Reveal>
            <Head
              center
              eyebrow="Designed For Business Growth"
              bodyW={700}
              title="Simple. Secure. Scalable."
              body="Prestivo brings together easy store management, secure transactions and scalable business operations."
            />
          </Reveal>
          <div className="mx-auto mt-[69px] max-w-[1184px]">
            {GROWTH.map((g, i) => {
              const on = !active || i === step;
              return (
                <div
                  key={g.word}
                  className={`grid md:grid-cols-[603px_1fr] items-center md:h-[227px] py-6 md:py-0 ${
                    i < GROWTH.length - 1 ? "border-b border-white/[0.08]" : ""
                  }`}
                >
                  <div
                    className="origin-left font-extrabold text-[56px] leading-[56px] md:text-[96px] md:leading-[96px] tracking-[-4.8px] transition-[color,transform,text-shadow] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] will-change-transform"
                    style={{
                      ...INTER,
                      color: on ? "#FFFFFF" : "#2F3238",
                      transform: on ? "scale(1.06) translateY(-3px)" : "scale(0.97)",
                      textShadow: on ? "0 0 46px rgba(80,130,255,0.55)" : "none",
                    }}
                  >
                    {g.word}
                  </div>
                  <div
                    className="transition-opacity duration-[900ms] ease-out max-w-[420px]"
                    style={{ opacity: on ? 1 : 0.32 }}
                  >
                    <h3 className="flex items-center gap-2 text-[18px] leading-[26px] font-semibold text-white" style={INTER}>
                      <g.Icon size={18} color={ICON_SKY} strokeWidth={2} />
                      {g.t}
                    </h3>
                    <p className="mt-0.5 text-[14px] leading-[22px] font-normal text-white/85" style={INTER}>
                      {g.b}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Wrap>
      </div>
    </section>
  );
}

/* =========================================================================
   10. THE PRESTIVO ADVANTAGE  (top 8487)
   ========================================================================= */
function AdvCard({
  x, y, Icon, t, b, sub, glow, tile,
}: {
  x: number; y: number; Icon: typeof Store; t: string; b: string; sub: string; glow?: boolean; tile: string;
}) {
  return (
    <div
      className={`hidden md:flex absolute items-center gap-3 rounded-[14px] px-3 py-3 pr-4 ${lift}`}
      style={{
        left: x, top: y,
        background: "rgba(40,40,44,0.92)",
        border: `1px solid ${glow ? "rgba(140,180,255,0.35)" : "rgba(255,255,255,0.14)"}`,
        boxShadow: glow ? "0 0 26px rgba(70,130,255,0.30)" : "none",
      }}
    >
      <span className="grid place-items-center w-8 h-8 rounded-[8px]" style={{ background: tile }}>
        <Icon size={16} color={ICON_SKY} />
      </span>
      <span>
        <span className="block text-[16px] leading-[22px] font-semibold text-white" style={INTER}>{t}</span>
        <span className="block text-[14px] leading-[20px] font-normal" style={{ ...INTER, color: sub }}>{b}</span>
      </span>
    </div>
  );
}

function Advantage() {
  const big = "text-[64px] leading-[64px] xl:text-[121px] xl:leading-[121px] font-extrabold tracking-[-6.4px]";
  return (
    <Sec h={887}>
      <Wrap className="xl:pt-[33px]">
        <Reveal>
          <Head
            center
            eyebrow="The Prestivo Advantage"
            title={<>Everything You Need to Build, <br className="hidden sm:block" />Manage &amp; Grow.</>}
          />
        </Reveal>
      </Wrap>
      <At x={128} y={220} className="w-full xl:w-auto px-6 xl:px-0">
        <Reveal>
          <div
            className="relative w-full xl:w-[1184px] min-h-[420px] xl:h-[538px] rounded-[24px] overflow-hidden"
            style={{ background: "#08090B", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center select-none" style={INTER}>
              <div className={big} style={{ color: "#0E0F12" }}>BUILD.</div>
              <div
                className={big}
                style={{
                  background: "linear-gradient(90deg,#39466A,#3C6684)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                MANAGE.
              </div>
              <div className={big} style={{ color: "#0E0F12" }}>GROW.</div>
            </div>
            <AdvCard x={65} y={57} Icon={Store} t="Custom Domain" b="Instant Global CDN Edge" sub="#7CC0FF" glow tile="rgba(255,255,255,0.10)" />
            <AdvCard x={887} y={74} Icon={Package} t="Unlimited SKUs" b="Digital & Physical Assets" sub="#D5D8E3" tile="rgba(80,120,190,0.30)" />
            <AdvCard x={97} y={424} Icon={ListChecks} t="Omnichannel Sync" b="Unified Order Flow" sub="#D5D8E3" tile="rgba(62,116,255,0.28)" />
            <AdvCard x={871} y={416} Icon={LineChart} t="Real-Time Alerts" b="Zero Stockout Risk" sub="#7CC0FF" glow tile="rgba(255,255,255,0.10)" />
          </div>
        </Reveal>
      </At>
    </Sec>
  );
}

/* =========================================================================
   11. CTA  (compact — text left, button right)   1216 × 274
   ========================================================================= */
function Cta() {
  return (
    <section className="pb-[120px] pt-6 xl:pt-0">
      <Wrap>
        <Reveal>
          <div
            className="mx-auto max-w-[1216px] xl:h-[274px] rounded-[14px] px-8 xl:px-[48px] py-10 xl:py-0 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8"
            style={{ background: "#0A0F1E" }}
          >
            <div>
              <h2
                className="text-[34px] leading-[42px] xl:text-[48px] xl:leading-[56px] font-bold tracking-[-1.2px] text-white"
                style={INTER}
              >
                Start Your Online Store Today.
              </h2>
              <p className="mt-3 max-w-[590px] text-[15px] leading-[26px] font-normal text-white" style={{ ...INTER, marginLeft: 4 }}>
                Build your online presence, manage your store operations, and take your business online with Prestivo.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex h-[62px] w-[296px] items-center justify-center gap-2 rounded-[10px] bg-[#F8FAFC] text-[21.7px] leading-[24.8px] font-medium tracking-[0.22px] text-black transition-transform hover:-translate-y-1"
              style={INTER}
            >
              Get Started Today <ArrowRight size={22} />
            </Link>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}

/* =========================================================================
   PAGE
   ========================================================================= */
export default function Page() {
  return (
    <main className="bg-black text-white overflow-x-clip" style={INTER}>
      <Hero />
      <OnePlatform />
      <GetOnlineFaster />
      <Centralized />
      <SmartDiscovery />
      <EndToEnd />
      <BetterBuying />
      <Flexible />
      <Growth />
      <Advantage />
      <Cta />
    </main>
  );
}
