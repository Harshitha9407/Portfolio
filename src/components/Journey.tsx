"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ED_DATA = [
  {
    year: "2020 — 2021",
    label: "FOUNDATION",
    institution: "Siddarth Model High School",
    degree: "Secondary Education",
    scoreType: "GPA",
    score: "10"
  },
  {
    year: "2021 — 2023",
    label: "INTERMEDIATE",
    institution: "Siddarth Adarsha Junior College, Medak",
    degree: "Intermediate — MPC",
    scoreType: "ACADEMIC SCORE",
    score: "98.7%"
  },
  {
    year: "2023 — 2027",
    label: "ENGINEERING",
    institution: "Malla Reddy University, Hyderabad",
    degree: "B.Tech in Computer Science and Engineering",
    scoreType: "CGPA",
    score: "9.48"
  }
];

// Reusable SVG for the morphing background hologram
const HolographicBackground = ({ activeIndex }: { activeIndex: number }) => {
  // We use Framer Motion to seamlessly morph paths/radii based on the active state
  // to ensure the same visual system transforms rather than being replaced.
  const coreRadius = activeIndex === 2 ? 180 : activeIndex === 1 ? 120 : 80;
  const outerRotation = activeIndex === 2 ? 45 : activeIndex === 1 ? 90 : 0;
  
  return (
    <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20 overflow-hidden mix-blend-screen z-0">
      <svg viewBox="0 0 800 800" className="w-full h-full">
        <defs>
          <radialGradient id="holoGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7567B5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0A0F18" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Glow */}
        <circle cx="400" cy="400" r="400" fill="url(#holoGlow)" />

        <motion.g 
          animate={{ rotate: 360 }} 
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          style={{ originX: "50%", originY: "50%" }}
        >
          {/* Subtle Outer Rings */}
          <circle cx="400" cy="400" r="320" fill="none" stroke="#7567B5" strokeWidth="0.5" strokeDasharray="1 10" />
          <circle cx="400" cy="400" r="260" fill="none" stroke="#7567B5" strokeWidth="1" strokeDasharray="100 300" opacity="0.5" />
          
          {/* Morphing Core Structure */}
          <motion.circle 
            cx="400" cy="400"
            animate={{ r: coreRadius }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            fill="none" stroke="#C8A45D" strokeWidth="1" strokeDasharray="4 8" opacity="0.6"
          />
          
          {/* Morphing Geometric Grid */}
          <motion.g animate={{ rotate: outerRotation }} transition={{ type: "spring", stiffness: 40, damping: 20 }} style={{ originX: "50%", originY: "50%" }}>
             <rect x="150" y="150" width="500" height="500" fill="none" stroke="#7567B5" strokeWidth="0.5" opacity="0.3" transform="rotate(45 400 400)" />
             <rect x="200" y="200" width="400" height="400" fill="none" stroke="#ECE6DA" strokeWidth="0.2" opacity="0.2" />
          </motion.g>
        </motion.g>

        {/* Static Subtle Labels */}
        <text x="680" y="400" fill="#A99CC8" fontSize="8" fontFamily="monospace" letterSpacing="4" opacity="0.6" style={{ writingMode: "vertical-rl" }}>[ENGINEERING]</text>
        <text x="120" y="200" fill="#A99CC8" fontSize="8" fontFamily="monospace" letterSpacing="4" opacity="0.6">[SYSTEMS]</text>
        <text x="400" y="700" fill="#A99CC8" fontSize="8" fontFamily="monospace" letterSpacing="4" opacity="0.6" textAnchor="middle">[COMPUTATION]</text>
        
        {/* Animated Connection Lines */}
        <motion.line 
          x1="400" y1="400" 
          animate={{ x2: activeIndex === 2 ? 680 : 400, y2: activeIndex === 2 ? 400 : 700 }}
          transition={{ type: "spring", stiffness: 50 }}
          stroke="#C8A45D" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" 
        />
      </svg>
    </div>
  );
};

// Node SVG component for progressive complexity
const NodeGeometry = ({ idx, isActive }: { idx: number, isActive: boolean }) => {
  const color = isActive ? "#C8A45D" : "#7567B5";
  const glow = isActive ? "drop-shadow(0px 0px 8px rgba(200, 164, 93, 0.6))" : "none";

  if (idx === 0) {
    // 2020: Foundation - Simple Geometric Seed
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" style={{ filter: glow }} className="transition-all duration-500">
        <polygon points="16,6 26,16 16,26 6,16" fill={isActive ? color : "transparent"} stroke={color} strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill={isActive ? "#0A0F18" : color} />
      </svg>
    );
  }
  
  if (idx === 1) {
    // 2021: Analytical Thinking - Intersecting Structure
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" style={{ filter: glow }} className="transition-all duration-500">
        <rect x="12" y="12" width="16" height="16" fill="transparent" stroke={color} strokeWidth="1" transform="rotate(45 20 20)" />
        <rect x="12" y="12" width="16" height="16" fill={isActive ? color : "transparent"} stroke={color} strokeWidth="1" opacity={isActive ? 0.3 : 1} />
        <circle cx="20" cy="20" r="3" fill={color} />
      </svg>
    );
  }

  // 2023: Engineering - Complex Interconnected System
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" style={{ filter: glow }} className="transition-all duration-500">
      <circle cx="24" cy="24" r="18" fill="none" stroke={color} strokeWidth="0.5" strokeDasharray="2 2" />
      <polygon points="24,8 37.8,16 37.8,32 24,40 10.2,32 10.2,16" fill={isActive ? color : "transparent"} stroke={color} strokeWidth="1" opacity={isActive ? 0.2 : 1} />
      <circle cx="24" cy="24" r="6" fill={color} />
      {isActive && (
        <motion.circle cx="24" cy="24" r="12" fill="none" stroke="#ECE6DA" strokeWidth="0.5" 
          animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }} transition={{ duration: 2, repeat: Infinity }} 
        />
      )}
    </svg>
  );
};

// Precision Instrument visualizer for grades
const PrecisionInstrument = ({ type, value, label }: { type: number, value: string, label: string }) => {
  return (
    <div className="relative mt-8 pt-8 border-t border-[#7567B5]/20 flex items-center gap-8 min-h-[100px]">
      
      {/* 2023 CGPA: Circular Calibration */}
      {type === 2 && (
        <>
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle cx="40" cy="40" r="36" fill="none" stroke="#7567B5" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
              <motion.circle 
                cx="40" cy="40" r="36" fill="none" stroke="#C8A45D" strokeWidth="2" 
                strokeDasharray="226" 
                initial={{ strokeDashoffset: 226 }}
                animate={{ strokeDashoffset: 226 - (226 * 0.948) }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            <span className="font-heading text-2xl text-[#ECE6DA] font-bold">{value}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs text-[#C8A45D] tracking-widest uppercase mb-1">{label}</span>
            <span className="font-mono text-[9px] text-[#A99CC8] tracking-widest opacity-60">PRECISION METRIC</span>
          </div>
        </>
      )}

      {/* 2021 Percentage: Horizontal Tick Scale */}
      {type === 1 && (
        <div className="flex flex-col w-full max-w-[300px]">
          <div className="flex justify-between items-end mb-2">
            <span className="font-heading text-4xl text-[#ECE6DA] font-bold leading-none">{value}</span>
            <span className="font-mono text-xs text-[#7567B5] tracking-widest uppercase mb-1">{label}</span>
          </div>
          <div className="relative w-full h-4 flex items-end pb-1 border-b border-[#7567B5]/30">
            {/* Tick marks */}
            <div className="absolute inset-0 flex justify-between items-end opacity-40">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className={`w-px bg-[#7567B5] ${i % 5 === 0 ? 'h-3' : 'h-1.5'}`} />
              ))}
            </div>
            {/* Active Indicator */}
            <motion.div 
              className="absolute bottom-0 w-[2px] h-4 bg-[#C8A45D] shadow-[0_0_8px_#C8A45D]"
              initial={{ left: "0%" }}
              animate={{ left: "98.7%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      {/* 2020 GPA: Angular Bracket Indicator */}
      {type === 0 && (
        <div className="flex items-center gap-6">
          <div className="relative flex items-center justify-center border-l-2 border-r-2 border-[#C8A45D] px-4 py-2 bg-[#C8A45D]/5">
            <div className="absolute -top-1 -left-[2px] w-2 h-[2px] bg-[#C8A45D]" />
            <div className="absolute -bottom-1 -left-[2px] w-2 h-[2px] bg-[#C8A45D]" />
            <div className="absolute -top-1 -right-[2px] w-2 h-[2px] bg-[#C8A45D]" />
            <div className="absolute -bottom-1 -right-[2px] w-2 h-[2px] bg-[#C8A45D]" />
            <span className="font-heading text-5xl text-[#ECE6DA] font-bold tracking-tighter">{value}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs text-[#C8A45D] tracking-widest uppercase mb-1">{label}</span>
            <span className="font-mono text-[9px] text-[#A99CC8] tracking-widest opacity-60">FOUNDATIONAL METRIC</span>
          </div>
        </div>
      )}
    </div>
  );
};


export function Journey() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [activeIndex, setActiveIndex] = useState(2); // Default to B.Tech (idx 2)

  return (
    <section id="education" ref={containerRef} className="relative w-full bg-[#0A0F18] pt-24 pb-32 lg:pt-32 lg:pb-40 border-t border-[#7567B5]/10 overflow-hidden selection:bg-[#7567B5]/30 selection:text-[#ECE6DA]">
      
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row min-h-[700px] gap-12 lg:gap-0">
        
        {/* ========================================= */}
        {/* LEFT COLUMN: EDITORIAL ANCHOR (35%)       */}
        {/* ========================================= */}
        <div className="w-full lg:w-[35%] flex flex-col justify-between py-10 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] font-mono text-[#7567B5] tracking-[0.4em] uppercase mb-6">04 / EDUCATION</h2>
            <h3 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold uppercase tracking-tighter text-[#ECE6DA] mb-12 leading-[0.9]">
              EDUCATION.
            </h3>
            
            <div className="pl-5 border-l border-[#7567B5]/30 relative">
              <div className="absolute top-0 -left-[2px] w-[3px] h-8 bg-[#C8A45D]" />
              <p className="font-sans text-lg lg:text-xl text-[#ECE6DA] font-light leading-relaxed mb-6 max-w-sm">
                "THE FOUNDATION BEHIND HOW I THINK, BUILD AND SOLVE."
              </p>
              <div className="space-y-1">
                <p className="font-mono text-[10px] md:text-xs text-[#A99CC8] tracking-widest uppercase">
                  Every stage added another layer.
                </p>
                <p className="font-mono text-[9px] md:text-[10px] text-[#7567B5] tracking-widest uppercase">
                  From foundational learning to engineering systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Left Abstract Structure */}
          <motion.div 
            className="hidden lg:flex mt-auto mb-10 w-full max-w-[200px] h-[150px] opacity-40 relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.4 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <svg viewBox="0 0 200 150" className="w-full h-full">
              {/* Isometric grid/nodes representing structured learning */}
              <motion.g 
                animate={{ y: [0, -5, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Base platform */}
                <path d="M100 120 L30 85 L100 50 L170 85 Z" fill="none" stroke="#7567B5" strokeWidth="1" strokeDasharray="2 4" />
                <path d="M100 135 L30 100 L100 65 L170 100 Z" fill="none" stroke="#7567B5" strokeWidth="0.5" opacity="0.5" />
                
                {/* Vertical pillars */}
                <path d="M100 120 L100 50" fill="none" stroke="#C8A45D" strokeWidth="1" opacity="0.8" />
                <path d="M65 102.5 L65 32.5" fill="none" stroke="#7567B5" strokeWidth="0.5" opacity="0.6" />
                <path d="M135 102.5 L135 32.5" fill="none" stroke="#7567B5" strokeWidth="0.5" opacity="0.6" />
                
                {/* Top nodes */}
                <circle cx="100" cy="50" r="3" fill="#C8A45D" />
                <circle cx="65" cy="32.5" r="2" fill="#7567B5" />
                <circle cx="135" cy="32.5" r="2" fill="#7567B5" />
                <circle cx="30" cy="85" r="2" fill="#7567B5" />
                <circle cx="170" cy="85" r="2" fill="#7567B5" />
                
                {/* Connecting matrix */}
                <path d="M65 32.5 L100 50 L135 32.5" fill="none" stroke="#ECE6DA" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.3" />
                <path d="M30 85 L65 32.5" fill="none" stroke="#ECE6DA" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.3" />
                <path d="M170 85 L135 32.5" fill="none" stroke="#ECE6DA" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.3" />
              </motion.g>
              
              {/* Floating particles */}
              <motion.circle cx="80" cy="60" r="1" fill="#C8A45D" animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0 }} />
              <motion.circle cx="120" cy="70" r="1" fill="#C8A45D" animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} />
              <motion.circle cx="100" cy="90" r="1.5" fill="#7567B5" animate={{ y: [0, -15, 0], opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} />
            </svg>
          </motion.div>
        </div>


        {/* ========================================= */}
        {/* CENTER COLUMN: KNOWLEDGE PATH (15%)       */}
        {/* ========================================= */}
        <div className="w-full lg:w-[15%] flex lg:flex-col justify-between items-center relative py-0 lg:py-16 z-30">
          
          {/* Mobile Horizontal Track / Desktop Vertical Track */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] lg:h-auto lg:w-[1px] lg:top-16 lg:bottom-16 lg:left-1/2 -translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2 bg-[#7567B5]/20">
            <motion.div 
              className="h-full w-full bg-gradient-to-r lg:bg-gradient-to-b from-[#7567B5] via-[#C8A45D] to-[#7567B5] origin-left lg:origin-top"
              initial={{ scaleX: 0, scaleY: 0 }}
              animate={isInView ? { scaleX: 1, scaleY: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

          {/* The 3 Educational Nodes (Reversed for Desktop vertical visually, 2023 at bottom, wait, typically top is newest. Let's make top newest.) */}
          {/* Index mapping: 2 (Top, 2023), 1 (Middle, 2021), 0 (Bottom, 2020) */}
          {[2, 1, 0].map((idx, renderOrder) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + (renderOrder * 0.2) }}
              className="relative group cursor-pointer p-4 lg:p-0"
              onMouseEnter={() => setActiveIndex(idx)}
            >
              <NodeGeometry idx={idx} isActive={activeIndex === idx} />
              
              {/* Desktop Node Label (Appears on Hover or Active) */}
              <div className={`hidden lg:block absolute left-full ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 ${activeIndex === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
                <span className="block font-mono text-[10px] text-[#A99CC8] tracking-[0.2em]">{ED_DATA[idx].year}</span>
                <span className="block font-mono text-xs text-[#C8A45D] tracking-widest mt-0.5">{ED_DATA[idx].label}</span>
              </div>
            </motion.div>
          ))}
        </div>


        {/* ========================================= */}
        {/* RIGHT COLUMN: INFORMATION DISPLAY (50%)   */}
        {/* ========================================= */}
        <div className="w-full lg:w-[50%] relative flex flex-col justify-center py-16 lg:py-0 pl-0 lg:pl-12 z-20">
          
          <HolographicBackground activeIndex={2} />

          <div className="relative z-10 w-full max-w-xl flex flex-col gap-16 lg:gap-20">
            {[2, 1, 0].map((idx, renderOrder) => {
              const data = ED_DATA[idx];
              return (
                <motion.div 
                  key={idx}
                  className="relative flex flex-col justify-center group cursor-default p-6 -m-6 rounded-2xl transition-colors duration-500 hover:bg-[#7567B5]/5"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + (renderOrder * 0.2) }}
                >
                  <div className="mb-2">
                    <span className="inline-block font-mono text-[10px] px-2 py-1 bg-[#7567B5]/10 text-[#A99CC8] border border-[#7567B5]/20 tracking-widest uppercase mb-4 transition-colors duration-500 group-hover:border-[#C8A45D]/40 group-hover:text-[#C8A45D]">
                      {data.year}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-4xl font-heading font-bold text-[#ECE6DA] leading-tight mb-3 tracking-tight transition-colors duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(200,164,93,0.3)]">
                    {data.institution}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-[#A99CC8] font-light font-sans tracking-wide mb-2 flex items-center gap-3 transition-colors duration-500 group-hover:text-[#ECE6DA]">
                    <span className="w-4 h-px bg-[#C8A45D]/50 transition-all duration-500 group-hover:w-8 group-hover:bg-[#C8A45D]" />
                    {data.degree}
                  </p>

                  <PrecisionInstrument type={idx} value={data.score} label={data.scoreType} />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
