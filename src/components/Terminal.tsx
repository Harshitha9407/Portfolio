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
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full hud-panel border-cyan/30 flex items-center justify-center group hover:border-cyan hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
      >
        <span className="font-mono text-cyan text-lg group-hover:text-glow-cyan">{'>_'}</span>
      </button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 h-96 z-50 bg-surface/90 backdrop-blur-2xl border border-cyan/20 rounded-lg flex flex-col shadow-[0_0_30px_rgba(0,229,255,0.1)] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-cyan/10 px-4 py-2 border-b border-cyan/20 flex items-center justify-between">
              <span className="font-mono text-[10px] text-cyan tracking-widest">ENGINEERING_TERMINAL</span>
              <button onClick={() => setIsOpen(false)} className="text-cyan/50 hover:text-cyan text-xs">✕</button>
            </div>
            
            {/* Output */}
            <div ref={scrollRef} className="flex-grow p-4 font-mono text-[10px] overflow-y-auto flex flex-col gap-2 scroll-smooth">
              {history.map((line, i) => (
                <div key={i} className={`${line.type === 'in' ? 'text-white' : 'text-cyan/70'}`}>
                  {line.text}
                </div>
              ))}
            </div>
            
            {/* Input */}
            <form onSubmit={handleCommand} className="p-4 border-t border-cyan/20 flex items-center gap-2">
              <span className="text-purple font-mono text-[10px]">{'>'}</span>
              <input 
                ref={inputRef}
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow bg-transparent outline-none font-mono text-[10px] text-white caret-cyan"
                spellCheck={false}
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



