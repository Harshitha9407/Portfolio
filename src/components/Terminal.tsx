"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ text: string, type: 'in' | 'out' }[]>([
    { text: "HG_OS Terminal v2.0", type: 'out' },
    { text: "Type 'help' to view available commands.", type: 'out' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { text: `> ${input}`, type: 'in' as const }];

    switch (cmd) {
      case "help":
        newHistory.push({ text: "AVAILABLE COMMANDS:", type: 'out' });
        newHistory.push({ text: "  projects   - Initialize project overview", type: 'out' });
        newHistory.push({ text: "  skills     - Access system capabilities", type: 'out' });
        newHistory.push({ text: "  experience - Load mission logs", type: 'out' });
        newHistory.push({ text: "  contact    - Establish connection", type: 'out' });
        newHistory.push({ text: "  clear      - Clear terminal", type: 'out' });
        break;
      case "projects":
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        newHistory.push({ text: "Navigating to ENGINEERED SYSTEMS...", type: 'out' });
        break;
      case "skills":
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        newHistory.push({ text: "Accessing CORE SYSTEMS...", type: 'out' });
        break;
      case "experience":
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        newHistory.push({ text: "Loading MISSION LOGS...", type: 'out' });
        break;
      case "contact":
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        newHistory.push({ text: "Opening SECURE TRANSMISSION...", type: 'out' });
        break;
      case "clear":
        setHistory([{ text: "Terminal cleared.", type: 'out' }]);
        setInput("");
        return;
      default:
        newHistory.push({ text: `Command not found: ${cmd}. Type 'help' for options.`, type: 'out' });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <>
      {/* Terminal Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-12 rounded-full bg-[#16172A]/80 backdrop-blur-md border border-[#7567B5]/40 flex items-center justify-center group hover:border-[#C8A45D]/60 hover:shadow-[0_0_20px_rgba(200,164,93,0.2)] transition-all px-4 md:px-5 gap-3"
      >
        <span className="font-mono text-[#C8A45D] text-lg font-bold group-hover:text-white transition-colors">{'>_'}</span>
        <span className="font-mono text-[9px] md:text-[10px] text-[#A99CC8] tracking-[0.2em] uppercase group-hover:text-[#ECE6DA] transition-colors">TERMINAL</span>
      </button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-96 z-50 bg-[#0A0F18]/95 backdrop-blur-2xl border border-[#7567B5]/40 rounded-lg flex flex-col shadow-[0_0_40px_rgba(117,103,181,0.2)] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#7567B5]/10 px-4 py-3 border-b border-[#7567B5]/30 flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#A99CC8] tracking-widest">ENGINEERING_TERMINAL</span>
              <button onClick={() => setIsOpen(false)} className="text-[#A99CC8] hover:text-white text-xs transition-colors">✕</button>
            </div>
            
            {/* Output */}
            <div ref={scrollRef} className="flex-grow p-4 font-mono text-[11px] overflow-y-auto flex flex-col gap-2 scroll-smooth hide-scrollbar">
              {history.map((line, i) => (
                <div key={i} className={`${line.type === 'in' ? 'text-[#ECE6DA]' : 'text-[#C8A45D]'}`}>
                  {line.text}
                </div>
              ))}
            </div>
            
            {/* Input */}
            <form onSubmit={handleCommand} className="p-4 border-t border-[#7567B5]/30 flex items-center gap-3 bg-[#16172A]/50">
              <span className="text-[#7567B5] font-mono text-[12px]">{'>'}</span>
              <input 
                ref={inputRef}
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow bg-transparent outline-none font-mono text-[11px] text-[#ECE6DA] placeholder-[#A99CC8]/30"
                placeholder="Enter command..."
                spellCheck={false}
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



