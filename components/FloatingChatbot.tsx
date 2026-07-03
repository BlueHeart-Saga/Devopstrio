"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, MessageSquare, Mic, Send, Image as ImageIcon, Search, Home, User, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"home" | "chat" | "voice" | "search" | "lens">("home");

  // Chat state
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Recent Searches State
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Tooltip/Intro State
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipStep, setTooltipStep] = useState(0);

  useEffect(() => {
    // 15 seconds delay before showing the first bubble
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTooltipStep(1);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showTooltip) {
      if (tooltipStep === 1) {
        const t2 = setTimeout(() => setTooltipStep(2), 1000);
        return () => clearTimeout(t2);
      } else if (tooltipStep === 2) {
        const t3 = setTimeout(() => setTooltipStep(3), 1500);
        return () => clearTimeout(t3);
      } else if (tooltipStep === 3) {
        // Automatically hide the entire tooltip stack 8 seconds after the last bubble appears
        const t4 = setTimeout(() => {
          setShowTooltip(false);
        }, 8000);
        return () => clearTimeout(t4);
      }
    }
  }, [showTooltip, tooltipStep]);

  // Hide tooltip when chatbot is opened
  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
    }
  }, [isOpen]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("echoRecentSearches");
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      } else {
        setRecentSearches(["Optimize AWS infrastructure best practices", "Modern DevOps & Platform Engineering solutions"]);
      }
    } catch(e) {}
  }, []);

  const saveSearch = (query: string) => {
    try {
      setRecentSearches(prev => {
        const next = [query, ...prev.filter(q => q !== query)].slice(0, 4);
        localStorage.setItem("echoRecentSearches", JSON.stringify(next));
        return next;
      });
    } catch(e) {}
  };

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, view]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    saveSearch(input.trim());
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    const currentInput = input;
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: `I am Echo! I received your message: "${currentInput}". Our enterprise AI modules will be fully activated soon!` },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 left-4 z-[100] hover:scale-110 transition-transform hover:-translate-y-1 group"
          >
            <div className="absolute left-[70%] top-1/2 -translate-y-1/2 px-4 py-2.5 bg-white text-zinc-950 text-xs sm:text-sm font-semibold rounded-2xl rounded-bl-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-zinc-100/50 -translate-x-2 group-hover:translate-x-0 z-0">
              How can we assist you?
            </div>
            <img 
              src="/assets/bot/icon.png" 
              alt="Chat Bot" 
              className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] relative z-10" 
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Speech Bubble Tooltips */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <div className="fixed bottom-28 left-8 z-[101] flex flex-col gap-2 max-w-[280px] items-start select-none">
            {/* Dismiss Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="self-end p-1.5 rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-white transition-colors hover:scale-105 active:scale-95 shadow-lg"
            >
              <X size={10} />
            </button>
            
            {/* Clickable Speech Bubble Stack */}
            <div 
              onClick={() => setIsOpen(true)}
              className="flex flex-col gap-2 items-start cursor-pointer hover:opacity-95 transition-opacity"
            >
              {tooltipStep >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white text-zinc-950 px-4 py-2.5 rounded-2xl rounded-bl-sm text-xs sm:text-sm font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-zinc-100/50"
                >
                  Hi! Welcome to Devopstrio.
                </motion.div>
              )}
              
              {tooltipStep >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white text-zinc-950 px-4 py-2.5 rounded-2xl rounded-bl-sm text-xs sm:text-sm font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-zinc-100/50"
                >
                  I'm Echo, your cloud & DevOps guide.
                </motion.div>
              )}
              
              {tooltipStep >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white text-zinc-950 px-4 py-2.5 rounded-2xl rounded-bl-sm text-xs sm:text-sm font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-zinc-100/50"
                >
                  How can we help accelerate your team today?
                </motion.div>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 left-6 z-[100] w-[350px] sm:w-[400px] h-[600px] max-h-[85vh] bg-[#1a1b1e] rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden border border-zinc-800"
          >
            {/* Header / Top Nav */}
            <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
              {view !== "home" && (
                <button
                  onClick={() => setView("home")}
                  className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                >
                  <Home size={14} />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Dynamic Views */}
            <div className="flex-1 relative overflow-y-auto overflow-x-hidden">
              
              <AnimatePresence mode="wait">
                {/* Home Dashboard View */}
                {view === "home" && (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute inset-0 flex flex-col bg-[#1a1b1e] p-6 pt-16"
                  >
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <button 
                        onClick={() => setView("voice")}
                        className="col-span-1 aspect-square rounded-[2rem] bg-emerald-400 p-6 flex flex-col justify-between items-start text-black transition-transform hover:scale-[1.02] shadow-[0_10px_20px_rgba(52,211,153,0.2)] relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
                        <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center relative z-10 group-hover:bg-black/20 transition-colors">
                          <Mic size={24} />
                        </div>
                        <span className="text-2xl font-black leading-tight text-left relative z-10">Talk<br/>with<br/>Echo</span>
                      </button>

                      <div className="col-span-1 flex flex-col gap-4">
                        <button 
                          onClick={() => setView("chat")}
                          className="flex-1 rounded-[1.5rem] bg-[#dcfce7] p-5 flex flex-col justify-between items-start text-black transition-transform hover:scale-[1.02]"
                        >
                          <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center mb-3">
                            <Send size={16} className="-ml-0.5" />
                          </div>
                          <span className="text-[15px] font-bold">Chat With Echo</span>
                        </button>
                        <button 
                          onClick={() => setView("lens")}
                          className="flex-1 rounded-[1.5rem] bg-[#f3e8ff] p-5 flex flex-col justify-between items-start text-black transition-transform hover:scale-[1.02]"
                        >
                          <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center mb-3">
                            <ImageIcon size={16} />
                          </div>
                          <span className="text-[15px] font-bold">Search By Image</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-end mb-4">
                        <h4 className="text-sm font-bold text-white">Top Search</h4>
                        <button className="text-[10px] text-emerald-400 border-b border-emerald-400/30 pb-0.5 font-medium hover:text-emerald-300 transition-colors">Clear</button>
                      </div>
                      <div className="flex flex-col gap-3">
                        {recentSearches.length > 0 ? (
                          recentSearches.map((search, idx) => (
                            <div 
                              key={idx} 
                              onClick={() => { setInput(search); setView("chat"); }}
                              className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800 transition-colors cursor-pointer group"
                            >
                              <div className="w-9 h-9 rounded-full bg-emerald-400/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400/20 transition-colors shrink-0">
                                <MessageSquare size={14} />
                              </div>
                              <p className="text-xs text-zinc-300 font-medium truncate flex-1">{search}</p>
                              <ArrowUpRight size={14} className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-6 text-sm text-zinc-500 font-medium bg-zinc-800/20 rounded-2xl border border-zinc-800/50">No recent searches</div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Global Search View */}
                {view === "search" && (
                  <motion.div
                    key="search"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-0 flex flex-col bg-[#1a1b1e] z-30"
                  >
                    <div className="p-4 pt-6 border-b border-zinc-800/60 bg-[#1a1b1e]/90 backdrop-blur-md flex items-center gap-3">
                      <button onClick={() => setView("home")} className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors shrink-0">
                        <X size={16} />
                      </button>
                      <form className="flex-1 relative" onSubmit={(e) => { e.preventDefault(); }}>
                        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                        <input 
                          type="text" 
                          autoFocus
                          placeholder="Search anything..." 
                          className="w-full bg-zinc-900 border border-zinc-700 rounded-full py-2.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-emerald-500 shadow-inner"
                        />
                      </form>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-zinc-500 p-6">
                      <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4 border border-zinc-700/50">
                        <Search size={24} className="text-zinc-400" />
                      </div>
                      <h4 className="text-white font-bold mb-1">Universal Search</h4>
                      <p className="text-xs text-center">Find jobs, services, or insights across Devopstrio.</p>
                    </div>
                  </motion.div>
                )}

                {/* Google Lens / Image Search View */}
                {view === "lens" && (
                  <motion.div
                    key="lens"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 flex flex-col bg-[#1a1b1e] z-30"
                  >
                    <div className="p-4 pt-6 flex justify-between items-center z-10">
                      <h4 className="text-white font-bold text-lg tracking-tight px-2">Image Search</h4>
                      <button onClick={() => setView("home")} className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white">
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center p-6 -mt-10">
                      {/* Viewfinder UI */}
                      <div className="w-full max-w-[240px] aspect-square rounded-[2.5rem] border-2 border-dashed border-zinc-600 bg-zinc-900/50 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer hover:border-emerald-500/50 transition-colors">
                        <motion.div 
                          animate={{ top: ["0%", "100%", "0%"] }} 
                          transition={{ repeat: Infinity, duration: 3, ease: "linear" }} 
                          className="absolute left-0 w-full h-[2px] bg-emerald-400 shadow-[0_0_20px_#34d399]" 
                        />
                        <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform shadow-lg">
                          <ImageIcon size={24} />
                        </div>
                        <span className="text-white font-bold text-base mb-1">Upload Image</span>
                        <span className="text-[11px] text-zinc-400 font-medium">Tap or drag an image</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Voice Assistant View */}
                {view === "voice" && (
                  <motion.div
                    key="voice"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a1b1e] z-30"
                  >
                    <div className="flex-1 flex flex-col items-center justify-center w-full relative">
                      {/* Pulse Animations */}
                      <div className="absolute w-40 h-40 bg-emerald-500/20 rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />
                      <div className="absolute w-56 h-56 bg-emerald-500/10 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                      
                      {/* Big Mic Button */}
                      <div 
                        className="relative w-28 h-28 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(52,211,153,0.4)] cursor-pointer hover:scale-105 transition-transform z-10" 
                        onClick={() => setView("home")}
                      >
                        <Mic size={48} className="text-[#0a0a0a]" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mt-12 mb-2 tracking-tight">Listening...</h3>
                      <p className="text-sm text-zinc-400 font-medium">Speak into your microphone</p>
                    </div>
                    
                    <button 
                      onClick={() => setView("home")}
                      className="mb-8 w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors border border-zinc-800 hover:border-zinc-700"
                    >
                      <X size={20} />
                    </button>
                  </motion.div>
                )}

                {/* Actual Chat View */}
                {view === "chat" && (
                  <motion.div
                    key="chat"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="absolute inset-0 flex flex-col bg-[#1a1b1e]"
                  >
                    {/* Header */}
                    <div className="p-4 pt-6 border-b border-zinc-800/60 bg-[#1a1b1e]/90 backdrop-blur-md flex items-center gap-3 sticky top-0 z-10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-200 p-0.5 flex-shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                        <div className="w-full h-full rounded-full bg-[#1a1b1e] flex items-center justify-center overflow-hidden">
                          <img src="/assets/bot/icon.png" alt="Echo" className="w-6 h-6 object-contain" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Echo Assistant</h4>
                        <p className="text-[10px] text-emerald-400 flex items-center gap-1.5 font-medium mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_5px_#34d399]" /> Online
                        </p>
                      </div>
                    </div>

                    {/* Chat History */}
                    <div className="flex-1 overflow-y-auto p-5 space-y-5">
                      {/* Intro Message */}
                      <div className="flex gap-3 max-w-[85%]">
                         <div className="w-8 h-8 rounded-full bg-zinc-800 flex-shrink-0 flex items-center justify-center border border-zinc-700 mt-1">
                            <img src="/assets/bot/icon.png" alt="Echo" className="w-5 h-5 object-contain" />
                         </div>
                         <div className="bg-zinc-800 border border-zinc-700/50 rounded-2xl rounded-tl-sm p-4 text-sm text-zinc-300 leading-relaxed shadow-sm">
                           Hi! I'm Echo, Devopstrio's AI assistant. How can I help you accelerate your digital transformation today?
                         </div>
                      </div>

                      {messages.map((msg, idx) => (
                        <div key={idx} className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}>
                          {msg.role === "bot" && (
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex-shrink-0 flex items-center justify-center border border-zinc-700 mt-1">
                              <img src="/assets/bot/icon.png" alt="Echo" className="w-5 h-5 object-contain" />
                            </div>
                          )}
                          <div className={`p-4 text-sm rounded-2xl leading-relaxed shadow-sm ${
                            msg.role === "user" 
                              ? "bg-gradient-to-tr from-emerald-500 to-emerald-400 text-black font-medium rounded-tr-sm" 
                              : "bg-zinc-800 border border-zinc-700/50 text-zinc-300 rounded-tl-sm"
                          }`}>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 bg-[#1a1b1e] border-t border-zinc-800/60 relative z-10">
                      <form onSubmit={handleSend} className="relative flex items-center">
                        <input
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Type your message..."
                          className="w-full bg-zinc-900 border border-zinc-700 rounded-full pl-5 pr-14 py-3.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-zinc-500 shadow-inner"
                        />
                        <button
                          type="submit"
                          disabled={!input.trim()}
                          className="absolute right-2 w-10 h-10 rounded-full bg-emerald-400 text-black flex items-center justify-center disabled:opacity-50 disabled:bg-zinc-700 disabled:text-zinc-500 transition-colors shadow-md hover:scale-105 active:scale-95"
                        >
                          <Send size={16} className="-ml-0.5" />
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Nav Bar (Only in Home View) */}
            <AnimatePresence>
              {view === "home" && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  className="bg-[#121315] border-t border-zinc-800/60 p-4 flex justify-center gap-12 items-center px-8 relative z-20"
                >
                  <button className="text-emerald-400 flex flex-col items-center gap-1 group">
                    <Home size={22} className="group-hover:-translate-y-0.5 transition-transform" />
                    <span className="text-[10px] font-bold">Home</span>
                  </button>
                  <button 
                    onClick={() => setView("search")}
                    className="text-zinc-500 hover:text-white transition-colors flex flex-col items-center gap-1 group"
                  >
                    <Search size={22} className="group-hover:-translate-y-0.5 transition-transform" />
                    <span className="text-[10px] font-bold">Search</span>
                  </button>
                  <button 
                    onClick={() => setView("chat")}
                    className="text-zinc-500 hover:text-white transition-colors flex flex-col items-center gap-1 group"
                  >
                    <MessageSquare size={22} className="group-hover:-translate-y-0.5 transition-transform" />
                    <span className="text-[10px] font-bold">Chat</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
