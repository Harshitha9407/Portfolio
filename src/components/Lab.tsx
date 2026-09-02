"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiments = [
  {
    id: "FLOWFORGE",
    tech: "Workflow Orchestration Engine",
    desc: "A visual workflow orchestration platform that resolves dynamic assignments and simulates execution before deployment.",
    type: "workflow",
    href: "#flowforge"
  },
  {
    id: "COMMUNE",
    tech: "Internal Collaboration Platform",
    desc: "Responsive Flutter interfaces and interactive application workflows connected via REST APIs.",
    type: "network",
    href: "#commune"
  },
  {
    id: "HEALTH COMPANION",
    tech: "Personalized Wellness Engine",
    desc: "Integrating mood, stress, and sleep tracking into a single unified mobile experience powered by a recommendation backend.",
    type: "data",
    href: "#health"
  }
];

export function Lab() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="lab" className="relative w-full bg-indigo py-32 px-8 md:px-24 border-t border-white/5 tech-grid">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex items-end justify-between">
          <div>
            <h2 className="flex items-center gap-4 text-xs font-mono text-mineral tracking-[0.2em] mb-4 uppercase">
              <span className="w-8 h-px bg-mineral" /> 01 / The Lab
            </h2>
            <p className="text-4xl md:text-5xl font-heading text-ivory tracking-tight">
              Project Discovery.
            </p>
          </div>
          <div className="hidden md:flex font-mono text-[10px] text-ivory/40 flex-col items-end">
            <span>STATUS: ONLINE</span>
            <span>MODULES: 3 ACTIVE</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiments.map((exp, i) => {
            const isHovered = hoveredId === exp.id;
            return (
              <a 
                href={exp.href}
                key={exp.id}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative h-[450px] glass-panel holo-border flex flex-col justify-between overflow-hidden cursor-crosshair transition-all duration-700 hover:bg-white/5"
              >
                {/* Tech scanline effect on hover */}
                <motion.div 
                  initial={{ top: "-10%" }}
                  animate={{ top: isHovered ? "110%" : "-10%" }}
                  transition={{ duration: 1.5, ease: "linear", repeat: isHovered ? Infinity : 0 }}
                  className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-mineral/10 to-transparent z-0 pointer-events-none"
                />

                {/* Abstract Interactive Visual */}
                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center pt-12">
                  {exp.type === "workflow" && (
                    <svg className="w-full h-full text-violet" viewBox="0 0 100 100">
                      <motion.path d="M50,10 L50,30 L30,50 L50,70 L50,90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" animate={{ strokeDashoffset: isHovered ? [20, 0] : 0 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                      <motion.path d="M50,30 L70,50 L50,70" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" animate={{ strokeDashoffset: isHovered ? [20, 0] : 0 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                      <circle cx="50" cy="10" r="3" fill="currentColor" />
                      <motion.circle cx="30" cy="50" r="4" fill="var(--color-gold)" animate={{ scale: isHovered ? [1, 1.5, 1] : 1 }} transition={{ repeat: Infinity, duration: 1.5 }} />
                      <motion.circle cx="70" cy="50" r="4" fill="currentColor" animate={{ scale: isHovered ? [1, 1.5, 1] : 1 }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.75 }} />
                      <circle cx="50" cy="90" r="3" fill="var(--color-gold)" />
                    </svg>
                  )}
                  {exp.type === "network" && (
                    <svg className="w-full h-full text-mineral" viewBox="0 0 100 100">
                      <motion.circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" animate={{ rotate: isHovered ? 180 : 0 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
                      <circle cx="50" cy="50" r="3" fill="var(--color-gold)" />
                      <motion.circle cx="50" cy="25" r="2" fill="currentColor" animate={{ opacity: isHovered ? [0,1,0] : 1 }} transition={{ duration: 2, repeat: Infinity }} />
                      <motion.circle cx="28" cy="62" r="2" fill="currentColor" animate={{ opacity: isHovered ? [0,1,0] : 1 }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
                      <motion.circle cx="72" cy="62" r="2" fill="currentColor" animate={{ opacity: isHovered ? [0,1,0] : 1 }} transition={{ duration: 2, repeat: Infinity, delay: 1.2 }} />
                      <path d="M50,50 L50,25 M50,50 L28,62 M50,50 L72,62" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    </svg>
                  )}
                  {exp.type === "data" && (
                    <svg className="w-full h-full text-copper" viewBox="0 0 100 100">
                      <motion.path 
                        d="M10,50 Q25,30 40,50 T70,50 T100,50" 
                        fill="none" stroke="currentColor" strokeWidth="1.5"
                        animate={{ d: isHovered ? "M10,50 Q25,70 40,50 T70,50 T100,50" : "M10,50 Q25,30 40,50 T70,50 T100,50" }}
                        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut" }}
                      />
                      <circle cx="40" cy="50" r="4" fill="var(--color-gold)" />
                    </svg>
                  )}
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between pointer-events-none">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-heading tracking-tight">{exp.id}</h3>
                      <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isHovered ? 'bg-gold shadow-[0_0_10px_var(--color-gold)] scale-150' : 'bg-white/20'}`} />
                    </div>
                    <p className="text-[10px] font-mono text-mineral uppercase tracking-widest mb-4">
                      {exp.tech}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-ivory/80 leading-relaxed font-sans mb-6">
                            {exp.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <div className={`text-[10px] font-mono tracking-widest uppercase transition-colors duration-300 ${isHovered ? 'text-gold' : 'text-ivory/30'}`}>
                      EXPLORE SYSTEM →
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-mineral/50" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-mineral/50" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}



