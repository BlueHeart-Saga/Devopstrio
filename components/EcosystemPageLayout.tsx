import { ArrowLeft, CheckCircle2, ChevronRight, PhoneCall } from "lucide-react";
import Link from "next/link";

interface DetailSection {
  title: string;
  description: string;
  items?: string[];
}

interface StatItem {
  value: string;
  label: string;
}

interface EcosystemPageLayoutProps {
  title: string;
  subtitle: string;
  category: string;
  categoryUrl?: string;
  icon?: string;
  badge?: string;
  details: DetailSection[];
  stats?: StatItem[];
  ctaText?: string;
}

export function EcosystemPageLayout({
  title,
  subtitle,
  category,
  categoryUrl,
  icon,
  badge,
  details,
  stats,
  ctaText = "Collaborate with our Ecosystem Team"
}: EcosystemPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Decorative background grid and ambient glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/" className="hover:text-rose-500 transition-colors">HOME</Link>
          <ChevronRight size={10} />
          <Link href="/ecosystem" className="hover:text-rose-500 transition-colors">ECOSYSTEM</Link>
          <ChevronRight size={10} />
          {categoryUrl ? (
            <>
              <Link href={categoryUrl} className="hover:text-rose-500 transition-colors uppercase">{category}</Link>
              <ChevronRight size={10} />
            </>
          ) : (
            <span className="uppercase text-zinc-400">{category}</span>
          )}
          <span className="text-rose-500 uppercase font-bold">{title}</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            {badge && (
              <span className="text-[10px] font-mono tracking-widest text-rose-500 bg-rose-500/10 px-3 py-1 rounded border border-rose-500/20 uppercase font-bold">
                {badge}
              </span>
            )}
            {icon && <span className="text-2xl">{icon}</span>}
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-xl p-5 hover:border-zinc-800 transition-all duration-300">
                <span className="block text-3xl font-black text-white bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </span>
                <span className="block text-xs font-mono tracking-wider text-zinc-500 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Detail Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {details.map((section, idx) => (
            <div key={idx} className="bg-zinc-950/20 border border-zinc-900/60 rounded-2xl p-6 md:p-8 hover:border-zinc-800/80 transition-all duration-300 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-rose-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-zinc-900 pb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                {section.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-medium">
                {section.description}
              </p>
              {section.items && section.items.length > 0 && (
                <ul className="flex flex-col gap-2.5">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 size={14} className="text-rose-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-850 p-8 md:p-12 bg-zinc-950/80 text-center">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-600/[0.03] blur-[80px] rounded-full pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Need a custom tailored solution?</h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            Connect with our cloud architects and solutions engineering specialists to discuss strategic integrations for your digital initiatives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 rounded-full font-bold hover:shadow-[0_0_25px_rgba(225,29,72,0.45)] transition-all text-sm">
              <PhoneCall size={16} />
              {ctaText}
            </Link>
            <Link href="/ecosystem" className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-zinc-900 border border-zinc-800 rounded-full font-bold hover:bg-zinc-850 hover:border-zinc-700 transition-all text-xs uppercase tracking-wider text-zinc-300">
              <ArrowLeft size={14} /> Back to Ecosystem
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
