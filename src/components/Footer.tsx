"use client";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Types
type BuildState = "idle" | "initializing" | "idea" | "build" | "ship" | "ready";
type ContactType = "none" | "email" | "linkedin" | "github";

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  
  const [buildState, setBuildState] = useState<BuildState>("idle");
  const [hoveredContact, setHoveredContact] = useState<ContactType>("none");
  
  // Advanced Spring-based Mouse Tracking for physical, heavy parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
    smoothX.set(x);
    smoothY.set(y);
  };

  const handleMouseLeave = () => {
    smoothX.set(0);
    smoothY.set(0);
  };

  const handleBuildClick = () => {
    if (buildState !== "idle") return;
    setBuildState("initializing");
    setTimeout(() => setBuildState("idea"), 800);
    setTimeout(() => setBuildState("build"), 1600);
    setTimeout(() => setBuildState("ship"), 2400);
    setTimeout(() => setBuildState("ready"), 3200);
  };

  // Spaced perfectly in the exact geometric midpoints between the 7 tech stack nodes
  const contacts = [
    { id: "email", label: "EMAIL", status: "ESTABLISH CONNECTION", link: "mailto:harshitha9407@gmail.com", angle: 231, r: 380 },
    { id: "linkedin", label: "LINKEDIN", status: "PROFESSIONAL NETWORK", link: "https://www.linkedin.com/in/harshitha-gummadi/", angle: 334, r: 380 },
    { id: "github", label: "GITHUB", status: "ENGINEERING WORK", link: "https://github.com/Harshitha9407", angle: 77, r: 380 }
  ];

  const techNodes = ["JAVA", "SPRING BOOT", "REACT", "FLUTTER", "POSTGRESQL", "KAFKA", "DOCKER"];
  
  const getCoords = (angleDeg: number, radius: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: 400 + radius * Math.cos(rad), y: 400 + radius * Math.sin(rad) };
  };

  return (
    <footer 
      id="contact" 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-[#0A0F18] pt-24 pb-24 lg:pt-32 lg:pb-32 overflow-hidden border-t border-[#7567B5]/10 selection:bg-[#7567B5]/30 selection:text-[#ECE6DA]"
    >
      {/* Dynamic Lighting reactive to mouse */}
      <motion.div 
        className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(117,103,181,0.08)_0%,rgba(10,15,24,0)_60%)] pointer-events-none rounded-full"
        style={{ 
          x: useTransform(smoothX, [-0.5, 0.5], [-200, 200]),
          y: useTransform(smoothY, [-0.5, 0.5], [-200, 200]),
          left: '50%', top: '50%',
          translateX: '-50%', translateY: '-50%'
        }}
      />
      <div className="absolute top-1/2 right-[15%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(200,164,93,0.03)_0%,rgba(10,15,24,0)_50%)] pointer-events-none -translate-y-1/2" />

      {/* Lab Blueprint Grid */}
      <div 
        className="absolute inset-0 right-0 left-auto w-full lg:w-[60%] opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(117,103,181,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(117,103,181,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to right, transparent, black 40%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%, black 80%, transparent)'
        }}
      />

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-8 min-h-screen lg:min-h-[800px]">
        
        {/* ========================================= */}
        {/* LEFT COLUMN: EDITORIAL & IDENTITY */}
        {/* ========================================= */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center z-20 pt-12 lg:pt-0">
          
          <h2 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.5rem] font-heading font-extrabold uppercase tracking-tighter leading-[0.85] mb-8 lg:mb-12">
            <span className="text-[#ECE6DA] block">LET'S BUILD</span>
            <span className="text-[#A99CC8] block">SOMETHING</span>
            <span className="text-[#ECE6DA] block">WORTH</span>
            <span className="text-[#C8A45D] block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#C8A45D] to-[#E3C385] drop-shadow-[0_0_15px_rgba(200,164,93,0.2)]">
              SHIPPING.
            </span>
          </h2>

          <div className="mb-8 lg:mb-12 space-y-4">
            <div className="flex items-center gap-3 font-mono text-[9px] md:text-[10px] text-[#A99CC8] tracking-widest uppercase bg-[#7567B5]/5 border border-[#7567B5]/20 w-max px-4 py-2 rounded-full backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] shadow-[0_0_8px_#C8A45D] animate-pulse" />
              SYSTEM STATUS: ONLINE
            </div>
            <div className="font-mono text-[9px] md:text-[11px] text-[#ECE6DA] tracking-[0.2em] uppercase pl-2 flex flex-wrap gap-x-3 gap-y-2 opacity-80">
              <span>SOFTWARE</span>
              <span className="text-[#7567B5]">•</span>
              <span>MOBILE</span>
              <span className="text-[#7567B5]">•</span>
              <span>FULL STACK</span>
            </div>
          </div>

          <p className="font-sans text-base md:text-lg lg:text-xl text-[#A99CC8] max-w-md mb-8 lg:mb-12 font-light leading-relaxed border-l border-[#7567B5]/30 pl-4 md:pl-6">
            I like building things that are useful, thoughtful and worth shipping.
          </p>

          <div className="h-[120px] relative">
            {buildState === "idle" && (
              <button 
                onClick={handleBuildClick}
                className="group flex items-center gap-6 font-mono text-xs md:text-sm text-[#ECE6DA] tracking-[0.2em] uppercase border border-[#7567B5]/40 px-6 py-4 md:px-8 md:py-5 hover:bg-[#7567B5]/10 hover:border-[#7567B5] transition-all duration-300 bg-[#16172A]/40 backdrop-blur-md relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7567B5]/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">BUILD WITH ME</span>
                <span className="relative z-10 text-lg md:text-xl leading-none group-hover:translate-x-2 transition-transform duration-300 text-[#C8A45D]">→</span>
              </button>
            )}

            {buildState !== "idle" && (
              <div className="font-mono text-xs md:text-sm tracking-widest uppercase space-y-3 bg-[#16172A]/60 border border-[#7567B5]/30 p-4 md:p-6 backdrop-blur-xl w-max min-w-[280px] md:min-w-[320px] shadow-[0_0_30px_rgba(117,103,181,0.1)] relative overflow-hidden">
                <div className="absolute inset-0 w-full h-[2px] bg-[#C8A45D]/50 shadow-[0_0_10px_#C8A45D] opacity-50 animate-[scan_2s_ease-in-out_infinite]" />

                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-[#A99CC8] mb-4 md:mb-6 text-[10px] md:text-xs flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#A99CC8] rounded-full animate-ping" />
                  INITIALIZING CONNECTION...
                </motion.div>
                
                {['idea', 'build', 'ship', 'ready'].includes(buildState) && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-[#ECE6DA] flex justify-between items-center pb-2">
                    <a href="mailto:harshitha9407@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><span className="text-[#7567B5]">[01]</span> GMAIL</a> 
                    <span className="text-[#C8A45D]">✓</span>
                  </motion.div>
                )}
                
                {['build', 'ship', 'ready'].includes(buildState) && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-[#ECE6DA] flex justify-between items-center pb-2">
                    <a href="https://github.com/Harshitha9407" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><span className="text-[#7567B5]">[02]</span> GITHUB</a> 
                    <span className="text-[#C8A45D]">✓</span>
                  </motion.div>
                )}
                
                {['ship', 'ready'].includes(buildState) && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-[#ECE6DA] flex justify-between items-center pb-2">
                    <a href="https://linkedin.com/in/harshithagummadi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><span className="text-[#7567B5]">[03]</span> LINKEDIN</a> 
                    <span className="text-[#C8A45D]">✓</span>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>


        {/* ========================================= */}
        {/* RIGHT COLUMN: RESPONSIVE HIGH-FIDELITY HUD */}
        {/* ========================================= */}
        <div className="w-full lg:w-[55%] relative flex justify-center items-center z-10 py-12 lg:py-0">
          
          {/* ASPECT-RATIO LOCKED CONTAINER FOR PERFECT RESPONSIVENESS */}
          <motion.div 
            className="relative w-full max-w-[800px] aspect-square flex items-center justify-center"
            style={{
              rotateX: useTransform(smoothY, [-0.5, 0.5], [5, -5]),
              rotateY: useTransform(smoothX, [-0.5, 0.5], [-5, 5]),
              transformStyle: "preserve-3d",
            }}
          >
            {/* SVG GEOMETRY LAYER */}
            <svg viewBox="0 0 800 800" className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: "translateZ(0px)" }}>
              
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                
                <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                <radialGradient id="energyBeam" cx="400" cy="400" r="400" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#C8A45D" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#7567B5" stopOpacity="0"/>
                </radialGradient>

                {/* Grid Pattern for Inner Ring */}
                <pattern id="radarGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#7567B5" strokeWidth="0.5" opacity="0.1"/>
                </pattern>
              </defs>

              {/* Radar Background */}
              <circle cx="400" cy="400" r="340" fill="url(#radarGrid)" opacity="0.5" />

              {/* Outer Framework */}
              <motion.g style={{ originX: "50%", originY: "50%" }} className="animate-[spin_120s_linear_infinite]">
                <circle cx="400" cy="400" r="340" fill="none" stroke="#7567B5" strokeWidth="1" strokeDasharray="1 6" opacity="0.3" />
                <circle cx="400" cy="400" r="340" fill="none" stroke="#7567B5" strokeWidth="2" strokeDasharray="100 800" opacity="0.6" />
                {/* Calibration Ticks */}
                {Array.from({ length: 36 }).map((_, i) => (
                  <line 
                    key={`tick-${i}`}
                    x1="400" y1="50" x2="400" y2="60"
                    stroke="#A99CC8" strokeWidth="1" opacity="0.5"
                    transform={`rotate(${i * 10} 400 400)`}
                  />
                ))}
              </motion.g>

              {/* Tech Orbit Ring */}
              <motion.g style={{ originX: "50%", originY: "50%" }} className="animate-[spin_120s_linear_infinite_reverse]">
                <circle cx="400" cy="400" r="280" fill="none" stroke="#7567B5" strokeWidth="0.5" opacity="0.3" />
                {techNodes.map((tech, i) => {
                  const angle = (i * (360 / techNodes.length));
                  const coords = getCoords(angle, 280);
                  return (
                    <g key={tech}>
                      <circle cx={coords.x} cy={coords.y} r="3" fill="#A99CC8" />
                      <line x1={400} y1={400} x2={coords.x} y2={coords.y} stroke="#7567B5" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.2" />
                    </g>
                  );
                })}
              </motion.g>

              {/* Inner Complex Geometry */}
              <motion.g style={{ originX: "50%", originY: "50%" }} className="animate-[spin_60s_linear_infinite]">
                <polygon points="400,240 538,320 538,480 400,560 262,480 262,320" fill="none" stroke="#7567B5" strokeWidth="1" opacity="0.4" />
                <circle cx="400" cy="400" r="160" fill="none" stroke="#C8A45D" strokeWidth="1" strokeDasharray="4 12" opacity="0.5" />
                {/* Orbiting Energy Nodes */}
                <motion.circle cx="560" cy="400" r="4" fill="#C8A45D" filter="url(#glow)" />
                <motion.circle cx="240" cy="400" r="2" fill="#ECE6DA" filter="url(#glow)" />
              </motion.g>

              {/* Core Shield */}
              <motion.g 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ originX: "50%", originY: "50%" }}
              >
                <polygon points="400,320 469.3,360 469.3,440 400,480 330.7,440 330.7,360" fill="#16172A" stroke="#C8A45D" strokeWidth="1.5" filter="url(#glow)" opacity="0.9" />
                <polygon points="400,335 456.3,367.5 456.3,432.5 400,465 343.7,432.5 343.7,367.5" fill="none" stroke="#ECE6DA" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.6" />
              </motion.g>
              
              {/* Laser Connections to Contacts (Active on Hover) */}
              {contacts.map((c) => {
                const coords = getCoords(c.angle, c.r);
                return (
                  <motion.line 
                    key={`beam-${c.id}`}
                    x1="400" y1="400" 
                    x2={coords.x} y2={coords.y}
                    stroke="url(#energyBeam)" 
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: hoveredContact === c.id ? 1 : 0,
                      opacity: hoveredContact === c.id ? 1 : 0
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                );
              })}
            </svg>

            {/* DOM LAYER: Perfectly mapped using percentages to scale with the aspect-ratio container */}
            <div className="absolute inset-0 pointer-events-none" style={{ transform: "translateZ(30px)" }}>
              
              {/* Center Pipeline HUD (Inside the Hexagon) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none z-10 w-[15%]">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C8A45D]/50 to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C8A45D]/50 to-transparent" />
                
                {['IDEA', 'DESIGN', 'BUILD', 'INTEGRATE', 'SHIP'].map((step, i) => (
                  <motion.div 
                    key={step}
                    className={`font-mono text-[0.6rem] md:text-[0.7rem] tracking-[0.3em] uppercase w-full text-center py-[2%] transition-colors duration-300 ${
                      step === "SHIP" ? "text-[#C8A45D] font-bold" : "text-[#A99CC8]"
                    }`}
                    initial={{ opacity: 0, y: 5 }} 
                    animate={isInView ? { opacity: 1, y: 0 } : {}} 
                    transition={{ delay: 1.0 + (i * 0.15) }}
                  >
                    {step}
                  </motion.div>
                ))}
              </div>

              {/* Orbiting Tech Stack Labels */}
              {/* Needs to rotate with the SVG ring for perfect alignment */}
              <motion.div 
                className="absolute inset-0 pointer-events-none animate-[spin_120s_linear_infinite_reverse]" 
                style={{ originX: "50%", originY: "50%" }}
              >
                {techNodes.map((tech, i) => {
                  const angle = (i * (360 / techNodes.length));
                  const coords = getCoords(angle, 280);
                  const left = `${(coords.x / 800) * 100}%`;
                  const top = `${(coords.y / 800) * 100}%`;

                  return (
                    <motion.div 
                      key={tech}
                      className="absolute z-10"
                      style={{ 
                        left, top,
                        transform: 'translate(-50%, -50%)'
                      }}
                      initial={{ opacity: 0, scale: 0 }} 
                      animate={isInView ? { opacity: 1, scale: 1 } : {}} 
                      transition={{ delay: 2.0 + (i * 0.1) }}
                    >
                      {/* Counter-rotate the label so the text stays upright */}
                      <div className="relative animate-[spin_120s_linear_infinite]">
                        <div className="font-mono text-[0.55rem] md:text-[0.6rem] text-[#A99CC8] tracking-widest border border-[#7567B5]/30 px-2 py-1 bg-[#16172A]/90 backdrop-blur-md whitespace-nowrap shadow-[0_0_15px_rgba(117,103,181,0.2)]">
                          {tech}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
              
              {/* Sophisticated Contact Interface Nodes */}
              {contacts.map((c, i) => {
                const coords = getCoords(c.angle, c.r);
                const left = `${(coords.x / 800) * 100}%`;
                const top = `${(coords.y / 800) * 100}%`;

                return (
                  <motion.div
                    key={`contact-${c.id}`}
                    className="absolute pointer-events-auto z-30"
                    style={{ 
                      left, top,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 2.5 + (i * 0.2), duration: 0.5 }}
                    onMouseEnter={() => setHoveredContact(c.id as ContactType)}
                    onMouseLeave={() => setHoveredContact("none")}
                  >
                    <a href={c.link} className="relative group flex items-center justify-center p-3 md:p-4">
                      
                      {/* Targeting Reticle Design */}
                      <div className="absolute inset-0 border border-transparent group-hover:border-[#C8A45D]/40 transition-colors duration-300 pointer-events-none">
                        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#A99CC8] group-hover:border-[#C8A45D] transition-colors" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#A99CC8] group-hover:border-[#C8A45D] transition-colors" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#A99CC8] group-hover:border-[#C8A45D] transition-colors" />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#A99CC8] group-hover:border-[#C8A45D] transition-colors" />
                      </div>

                      {/* Main Label Box */}
                      <div className="font-mono flex flex-col items-center bg-[#16172A]/90 backdrop-blur-md border border-[#7567B5]/40 p-2 md:p-3 min-w-[120px] md:min-w-[140px] shadow-[0_0_20px_rgba(117,103,181,0.2)] group-hover:shadow-[0_0_30px_rgba(200,164,93,0.3)] group-hover:border-[#C8A45D]/60 transition-all duration-300 transform group-hover:scale-105">
                        <div className="text-[0.6rem] md:text-[0.7rem] text-[#ECE6DA] tracking-[0.2em] uppercase font-bold group-hover:text-[#C8A45D] transition-colors">
                          {c.label}
                        </div>
                        
                        {/* Status Reveal */}
                        <div className="h-0 overflow-hidden group-hover:h-5 transition-all duration-300 ease-out mt-0 group-hover:mt-2">
                          <div className="text-[0.45rem] md:text-[0.5rem] text-[#A99CC8] tracking-widest uppercase flex items-center gap-1.5 md:gap-2">
                            <span className="w-1 h-1 bg-[#C8A45D] rounded-full animate-pulse" />
                            {c.status}
                          </div>
                        </div>
                      </div>

                    </a>
                  </motion.div>
                );
              })}
              
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(100px); opacity: 0; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </footer>
  );
}
