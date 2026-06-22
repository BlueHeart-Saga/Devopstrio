"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, MessageSquare, Mic, Send, Image as ImageIcon, Search, Home, User, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"home" | "chat">("home");

  // Chat state
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, view]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

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
            className="fixed bottom-2 right-2 z-[100] hover:scale-110 transition-transform hover:-translate-y-1"
          >
            <img 
              src="/assets/bot/icon.png" 
              alt="Chat Bot" 
              className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]" 
            />
          </motion.button>
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
            className="fixed bottom-6 right-6 z-[100] w-[350px] sm:w-[400px] h-[600px] max-h-[85vh] bg-[#1a1b1e] rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden border border-zinc-800"
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
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-0.5">Hello, <span className="text-emerald-400">Guest</span></h3>
                      <p className="text-sm text-zinc-400">How can I assist you right now?</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <button 
                        onClick={() => setView("chat")}
                        className="col-span-1 aspect-square rounded-[2rem] bg-emerald-400 p-6 flex flex-col justify-between items-start text-black transition-transform hover:scale-[1.02]"
                      >
                        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                          <Mic size={20} />
                        </div>
                        <span className="text-2xl font-black leading-tight text-left">Talk<br/>with<br/>Echo</span>
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
                        <h4 className="text-sm font-bold text-white">Recent Search</h4>
                        <button className="text-[10px] text-emerald-400 border-b border-emerald-400/30 pb-0.5 font-medium hover:text-emerald-300 transition-colors">View All</button>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800 transition-colors cursor-pointer group">
                          <div className="w-9 h-9 rounded-full bg-emerald-400/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400/20 transition-colors">
                            <Mic size={14} />
                          </div>
                          <p className="text-xs text-zinc-300 font-medium truncate flex-1">Recommendation for enterprise...</p>
                        </div>
                        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800 transition-colors cursor-pointer group">
                          <div className="w-9 h-9 rounded-full bg-[#d4f2a3]/10 flex items-center justify-center text-[#d4f2a3] group-hover:bg-[#d4f2a3]/20 transition-colors">
                            <MessageSquare size={14} />
                          </div>
                          <p className="text-xs text-zinc-300 font-medium truncate flex-1">How should I architect my AWS...</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. Actual Chat View */}
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
                  className="bg-[#121315] border-t border-zinc-800/60 p-4 flex justify-between items-center px-8 relative z-20"
                >
                  <button className="text-emerald-400 flex flex-col items-center gap-1 group">
                    <Home size={22} className="group-hover:-translate-y-0.5 transition-transform" />
                    <span className="text-[10px] font-bold">Home</span>
                  </button>
                  <button className="text-zinc-500 hover:text-white transition-colors flex flex-col items-center gap-1 group">
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
                  <button className="text-zinc-500 hover:text-white transition-colors flex flex-col items-center gap-1 group">
                    <User size={22} className="group-hover:-translate-y-0.5 transition-transform" />
                    <span className="text-[10px] font-bold">Profile</span>
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
