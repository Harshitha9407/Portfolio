"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["HOME", "ABOUT", "EXPERIENCE", "PROJECTS", "SKILLS", "EDUCATION", "CONTACT"];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 flex justify-center transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}
    >
      {/* Desktop Menu */}
      <div className="hidden md:flex hud-panel rounded-full px-2 py-2 items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => {
              document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 font-mono text-[9px] text-white/50 hover:text-white tracking-widest uppercase rounded-full hover:bg-white/5 transition-colors"
          >
            {link}
          </button>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex flex-col items-end w-full px-6">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="group flex flex-col gap-1.5 items-end justify-center w-12 h-12 bg-black/70 backdrop-blur-md border border-white/10 rounded-full shadow-lg z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mx-auto">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <div className="flex flex-col gap-1.5 pr-3.5">
              <div className="w-5 h-[2px] bg-white rounded-full"></div>
              <div className="w-3 h-[2px] bg-white rounded-full transition-all duration-300 group-hover:w-5 self-end"></div>
            </div>
          )}
        </button>
        
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col mt-4 p-4 w-full bg-black/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl items-center"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-4 font-mono text-xs text-white/70 hover:text-white tracking-widest uppercase border-b border-white/5 last:border-0"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}


