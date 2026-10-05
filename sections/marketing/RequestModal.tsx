"use client";

import React, { useState } from "react";
import { CheckCircle2, X, AlertTriangle } from "lucide-react";
import { useModal } from "./hooks";

export type SendState = "idle" | "sending" | "done" | "error";

export function RequestModal({ onClose, onDone }: { onClose: () => void; onDone: () => void }) {
  useModal(true, onClose);
  const [state, setState] = useState<SendState>("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", resourceNeeded: "Custom Enterprise Pitch Deck", comments: "", website: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<any>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return; // honeypot
    setState("sending");
    try {
      const res = await fetch("/api/marketing-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("done");
      setTimeout(onDone, 1800);
    } catch {
      setState("error");
    }
  };

  const field = "w-full rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder-neutral-500 transition-colors focus:border-rose-500 focus:outline-none";
  const label = "mb-1 block text-xs font-semibold text-neutral-300";

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="req-title"
      className="mkt-fade fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div className="relative max-h-[94vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-neutral-800 bg-[#0b0b0b] p-6 shadow-2xl md:p-8">
        <button onClick={onClose} aria-label="Close request form (Esc)"
          className="absolute right-4 top-4 rounded-full bg-neutral-900 p-2 text-neutral-400 transition hover:bg-rose-600 hover:text-white cursor-pointer">
          <X className="h-5 w-5" />
        </button>
        <h3 id="req-title" className="mb-2 text-2xl font-semibold tracking-tight text-white">Request custom collateral</h3>
        <p className="mb-6 text-sm leading-relaxed text-neutral-400">
          Tell us what you need: co-branded decks, benchmark sheets or NDA-protected case studies.
        </p>

        {state === "done" ? (
          <div role="status" className="space-y-3 py-12 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
            <h4 className="text-lg font-semibold text-white">Request received</h4>
            <p className="mx-auto max-w-xs text-sm text-neutral-400">We will email your documents shortly.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label htmlFor="rq-name" className={label}>Full name *</label>
              <input id="rq-name" required value={form.name} onChange={set("name")} placeholder="Sarah Jenkins" className={field} />
            </div>
            <div>
              <label htmlFor="rq-email" className={label}>Work email *</label>
              <input id="rq-email" type="email" required value={form.email} onChange={set("email")} placeholder="sarah@company.com" className={field} />
            </div>
            <div>
              <label htmlFor="rq-company" className={label}>Company</label>
              <input id="rq-company" value={form.company} onChange={set("company")} placeholder="Global Systems Corp" className={field} />
            </div>
            <div>
              <label htmlFor="rq-type" className={label}>Resource requested</label>
              <select id="rq-type" value={form.resourceNeeded} onChange={set("resourceNeeded")} className={field}>
                {["Custom Enterprise Pitch Deck", "Co-Branded Executive Brief", "NDA Architecture Case Study", "Security & Compliance Audit Sheet", "SaaS Product API Specification"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="rq-comments" className={label}>Additional requirements</label>
              <textarea id="rq-comments" rows={3} value={form.comments} onChange={set("comments")} placeholder="Target region, industry focus or metrics needed" className={`${field} resize-none`} />
            </div>
            {/* honeypot: hidden from people, bots fill it */}
            <input tabIndex={-1} autoComplete="off" aria-hidden value={form.website} onChange={set("website")} className="absolute -left-[9999px] h-0 w-0 opacity-0" name="website" />

            {state === "error" && (
              <p role="alert" className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                <AlertTriangle className="h-4 w-4 shrink-0" /> We could not send your request. Check your connection and try again.
              </p>
            )}
            <button type="submit" disabled={state === "sending"}
              className="mt-2 w-full rounded-xl bg-rose-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose-900/40 transition hover:bg-rose-500 disabled:opacity-60 cursor-pointer">
              {state === "sending" ? "Sending..." : "Send request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
