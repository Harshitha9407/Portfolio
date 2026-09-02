"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="hud-panel rounded-full px-2 py-2 flex items-center gap-1 md:gap-2 bg-black/50 backdrop-blur-md border border-white/10">
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
    </motion.nav>
  );
}


