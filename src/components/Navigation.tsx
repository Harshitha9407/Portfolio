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
      <div className="md:hidden flex flex-col items-center w-full px-6">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="px-6 py-3 bg-black/70 backdrop-blur-md border border-white/10 rounded-full text-white font-mono text-xs tracking-widest uppercase shadow-lg w-full max-w-[200px]"
        >
          {isOpen ? "CLOSE" : "MENU"}
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


