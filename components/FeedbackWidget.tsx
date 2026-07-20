"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Mail, Calendar, X, Send, CheckCircle2 } from "lucide-react";

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Tooltip/Pop State
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // 8 seconds delay before showing the questions pop
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-hide tooltip after 10 seconds
  useEffect(() => {
    if (showTooltip) {
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 10000);
      return () => clearTimeout(hideTimer);
    }
  }, [showTooltip]);

  // Hide tooltip when widget is opened
  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
    }
  }, [isOpen]);

  // Schedule Call State
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact') { setIsOpen(true); setActiveTab('contact'); }
      if (window.location.hash === '#feedback') { setIsOpen(true); setActiveTab('feedback'); }
      if (window.location.hash === '#schedule-call') { setIsOpen(true); setActiveTab('schedule'); }
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (['#contact', '#feedback', '#schedule-call'].includes(window.location.hash)) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !scheduleDate || !scheduleTime) return;

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || email.split('@')[0],
          email: email.trim(),
          phone: phone.trim(),
          company: company.trim(),
          selectedServices: ["SCHEDULE_CALL"],
          message: `Requested call on ${scheduleDate} at ${scheduleTime}.${company ? ` Company: ${company}.` : ''} Additional context: ${feedback}`,
          toEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@devopstrioglobal.com',
        })
      });

      if (!response.ok) throw new Error("Feedback API error");

      setSubmitted(true);
      setFeedback("");
      setEmail("");
      setName("");
      setPhone("");
      setCompany("");
      setScheduleDate("");
      setScheduleTime("");

      setTimeout(() => {
        setSubmitted(false);
        handleClose();
      }, 3000);
    } catch (error) {
      console.error("Feedback error:", error);
      alert("Failed to schedule. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setLoading(true);

    const serviceType = activeTab === "contact" ? "QUICK_CONTACT" : "FEEDBACK";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || (email ? email.split('@')[0] : 'Anonymous Contact'),
          email: email.trim() || 'anonymous@devopstrioglobal.com',
          phone: phone.trim(),
          company: company.trim(),
          selectedServices: [serviceType],
          message: feedback.trim(),
          toEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@devopstrioglobal.com',
        })
      });

      if (!response.ok) throw new Error("Feedback API error");

      setSubmitted(true);
      setFeedback("");
      setEmail("");
      setName("");
      setPhone("");
      setCompany("");

      setTimeout(() => {
        setSubmitted(false);
        handleClose();
      }, 3000);
    } catch (error) {
      console.error("Feedback error:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110 active:scale-95 border bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 border-rose-500/20 shadow-[0_10px_20px_rgba(225,29,72,0.25)] group"
          >
            <div className="absolute right-[90%] top-1/2 -translate-y-1/2 mr-2 px-4 py-2.5 bg-white text-zinc-950 text-xs sm:text-sm font-semibold rounded-2xl rounded-br-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-zinc-100/50 translate-x-2 group-hover:translate-x-0">
              How can we assist you?
            </div>
            <MessageSquare size={20} className="relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Feedback Q&A Tooltips */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-[101] flex flex-col gap-2 max-w-[280px] items-end select-none">
            {/* Dismiss Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="p-1.5 rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-white transition-colors hover:scale-105 active:scale-95 shadow-lg self-end"
            >
              <X size={10} />
            </button>
            
            {/* Clickable Question Bubbles */}
            <div className="flex flex-col gap-2 items-end">
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                onClick={() => {
                  setIsOpen(true);
                  setActiveTab("contact");
                }}
                className="bg-white text-zinc-950 hover:bg-rose-50 border border-rose-100/40 px-4 py-2.5 rounded-2xl rounded-br-sm text-xs sm:text-sm font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.15)] cursor-pointer transition-all text-right"
              >
                Need to connect with us?
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
                onClick={() => {
                  setIsOpen(true);
                  setActiveTab("schedule");
                }}
                className="bg-white text-zinc-950 hover:bg-rose-50 border border-rose-100/40 px-4 py-2.5 rounded-2xl rounded-br-sm text-xs sm:text-sm font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.15)] cursor-pointer transition-all text-right"
              >
                Want to schedule a call?
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
                onClick={() => {
                  setIsOpen(true);
                  setActiveTab("feedback");
                }}
                className="bg-white text-zinc-950 hover:bg-rose-50 border border-rose-100/40 px-4 py-2.5 rounded-2xl rounded-br-sm text-xs sm:text-sm font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.15)] cursor-pointer transition-all text-right"
              >
                Share your feedback?
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg h-[600px] max-h-[90vh] bg-zinc-950/40 backdrop-blur-3xl rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.05)] flex flex-col overflow-hidden border border-white/10 ring-1 ring-white/5"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-rose-600 to-rose-900 p-6 flex justify-between items-start relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">How can we help?</h3>
                  <p className="text-sm text-rose-200 font-medium">Get in touch or schedule a call.</p>
                </div>
                <button 
                  onClick={handleClose}
                  className="relative z-10 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-white hover:bg-black/40 backdrop-blur-md transition-colors border border-white/10"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex px-4 pt-4 bg-transparent border-b border-white/10 shrink-0">
                {[
                  { id: "contact", label: "Contact", icon: <Mail size={16} /> },
                  { id: "feedback", label: "Feedback", icon: <MessageSquare size={16} /> },
                  { id: "schedule", label: "Schedule Call", icon: <Calendar size={16} className="text-rose-400" /> }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-rose-500 text-rose-500"
                        : "border-transparent text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-hidden bg-transparent flex flex-col">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Thank You!</h4>
                    <p className="text-zinc-400 text-sm max-w-[250px]">Your message was sent successfully. We will get back to you shortly.</p>
                  </div>
                ) : activeTab === "schedule" ? (
                  <form onSubmit={handleScheduleSubmit} className="flex flex-col gap-4 p-6 h-full overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-zinc-300">Full Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-zinc-300">Work Email *</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="sarah@company.com"
                          className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-zinc-300">Company / Organization</label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Acme Corp"
                          className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-zinc-300">Phone Number</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+44 7000 000000"
                          className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-zinc-300">Preferred Date *</label>
                        <input
                          type="date"
                          value={scheduleDate}
                          onChange={(e) => setScheduleDate(e.target.value)}
                          required
                          className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors cursor-pointer"
                          style={{ colorScheme: 'dark' }}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-zinc-300">Preferred Time *</label>
                        <input
                          type="time"
                          value={scheduleTime}
                          onChange={(e) => setScheduleTime(e.target.value)}
                          required
                          className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors cursor-pointer"
                          style={{ colorScheme: 'dark' }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-300">Meeting Objectives / Notes</label>
                      <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Tell us brief details about your cloud, DevOps, or consulting requirements..."
                        className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 min-h-[75px] resize-none transition-colors"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={loading || !email.trim() || !scheduleDate || !scheduleTime}
                      className="w-full py-3.5 mt-auto bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white text-sm font-bold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(225,29,72,0.3)]"
                    >
                      {loading ? "Scheduling Call..." : "Confirm & Schedule Call"}
                      {!loading && <Send size={16} />}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 h-full overflow-y-auto">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-300">
                        Full Name {activeTab === 'feedback' && '(Optional)'}
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-300">
                        Email Address {activeTab === 'feedback' && '(Optional)'}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={activeTab === "contact"}
                        placeholder="alex@company.com"
                        className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-300">
                        {activeTab === "contact" ? "How can we assist you? *" : "Share your thoughts *"}
                      </label>
                      <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder={activeTab === "contact" ? "Describe your inquiry in detail..." : "Tell us what you think..."}
                        className="w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 min-h-[110px] resize-none transition-colors"
                        required
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={loading || !feedback.trim()}
                      className="w-full py-3.5 mt-auto bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white text-sm font-bold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(225,29,72,0.3)]"
                    >
                      {loading ? "Sending..." : "Send Message"}
                      {!loading && <Send size={16} />}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
