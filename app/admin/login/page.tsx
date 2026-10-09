"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheck, Lock, User, KeyRound, AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin/jobs";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!username.trim() || !password || !otp.trim()) {
      setErrorMessage("Please enter your username, password, and 6-digit authenticator code.");
      return;
    }

    if (!/^\d{6}$/.test(otp.trim())) {
      setErrorMessage("Authenticator code must be exactly 6 digits.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        username: username.trim(),
        password,
        otp: otp.trim(),
        redirect: false,
      });

      if (res?.error) {
        setErrorMessage("Invalid credentials or authenticator code. Please try again.");
        setIsLoading(false);
      } else if (res?.ok) {
        router.push(callbackUrl);
        router.refresh();
      } else {
        setErrorMessage("An unexpected authentication error occurred.");
        setIsLoading(false);
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "Authentication failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-rose-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-rose-950/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-rose-400 transition-colors">
              DEVOPSTRIO<span className="text-rose-500">.</span>
            </span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-rose-400 font-mono font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            SECURE ADMIN CONSOLE
          </div>
          <h1 className="text-2xl font-bold text-zinc-100 tracking-tight">
            Administrator Sign In
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Role-Based Access Control & Multi-Factor Protected
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80">
          {errorMessage && (
            <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. superadmin, hr.admin, marketing.admin"
                  className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/80 transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/80 transition-colors"
                />
              </div>
            </div>

            {/* 6-Digit MFA / TOTP Code */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Authenticator Code (MFA)</span>
                <span className="text-[11px] text-zinc-500 lowercase">6-digit code</span>
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  placeholder="123456"
                  className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm font-mono tracking-widest text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/80 transition-colors"
                />
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">
                Open Google Authenticator, Microsoft Authenticator, or 1Password.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-medium py-3 rounded-xl transition-all duration-200 shadow-lg shadow-rose-900/30 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Admin</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 pt-5 border-t border-zinc-800/80 text-center">
            <div className="inline-flex items-center gap-1.5 text-zinc-400 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Session encrypted with Argon2id & AES-256</span>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Return to Devopstrio Public Site
          </Link>
        </div>
      </div>
    </div>
  );
}
