import React from "react";
import Link from "next/link";
import { 
  Box, 
  FileText, 
  Globe, 
  Video,
  PhoneCall,
  Search,
  Menu,
  Download
} from "lucide-react";

export const metadata = {
  title: "Devopstrio Marketing & Resources",
  description: "Explore Devopstrio's enterprise ecosystem, marketing assets, and product brochures.",
};

const navigation = [
  { name: 'Products', href: '/marketing/products', icon: Box },
  { name: 'Industries', href: '/marketing/industries', icon: Globe },
  { name: 'Case Studies', href: '/marketing/case-studies', icon: FileText },
  { name: 'Videos', href: '/marketing/videos', icon: Video },
];

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-rose-500/30">
      
      {/* Public Top Navigation */}
      <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/marketing" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(244,63,94,0.4)] group-hover:shadow-[0_0_30px_rgba(244,63,94,0.6)] transition-all">
                D
              </div>
              <div>
                <span className="block font-bold text-xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Devopstrio
                </span>
                <span className="block text-xs font-medium text-rose-400 tracking-wider uppercase mt-0.5">
                  Resource Center
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 pl-8 border-l border-white/10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <item.icon className="w-4 h-4 opacity-50" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block group">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-rose-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500/50 focus:bg-white/10 transition-all w-64"
              />
            </div>
            
            <Link 
              href="/marketing/contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              Contact Sales
            </Link>

            <button className="md:hidden text-gray-400 hover:text-white p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-5rem)]">
        {children}
      </main>

      {/* Public Footer for Resource Center */}
      <footer className="border-t border-white/10 bg-black py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-6 border border-rose-500/20">
            <Download className="w-6 h-6 text-rose-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Need a complete media kit?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Download our complete corporate overview, including all product brochures, case studies, and brand assets in one package.
          </p>
          <button className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(225,29,72,0.3)]">
            Download Full Kit (ZIP - 45MB)
          </button>
          
          <div className="mt-12 pt-8 border-t border-white/5 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Devopstrio. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="https://devopstrio.co.uk" className="hover:text-white transition-colors">Main Website</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
