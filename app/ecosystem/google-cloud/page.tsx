import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GoogleCloudPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm text-zinc-400 hover:text-rose-500 transition-colors mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Google Cloud Ecosystem</h1>
        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
          Data-driven GCP environments, Kubernetes optimization, and advanced machine learning integrations. Detailed case studies coming soon.
        </p>
        <div className="h-px w-full bg-zinc-800/50 mb-12"></div>
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to learn more?</h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Get in touch with our experts to discuss how we can leverage Google Cloud for your enterprise.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
