"use client";
import { motion } from "framer-motion";

const COLOR_MAP: Record<string, { text: string, border: string, nodeBorder: string, lineBg: string, bgGlow: string }> = {
  cyan: {
    text: "text-cyan-400",
    border: "border-cyan-500/30",
    nodeBorder: "group-hover:border-cyan-400",
    lineBg: "from-cyan-500/50",
    bgGlow: "bg-cyan-500/10"
  },
  purple: {
    text: "text-purple-400",
    border: "border-purple-500/30",
    nodeBorder: "group-hover:border-purple-400",
    lineBg: "from-purple-500/50",
    bgGlow: "bg-purple-500/10"
  }
};

const EXPERIENCES = [
  {
    id: "01",
    company: "ENCRYPTA IN.",
    role: "R&D INTERN — SOFTWARE DEVELOPMENT",
    date: "JUN 2026 — PRESENT",
    color: "cyan",
    paragraphs: [
      "Contributing to the development of Commune, an internal collaboration platform, by building responsive Flutter interfaces, reusable components, and interactive application workflows.",
      "Integrating REST APIs with Flutter, handling asynchronous operations, API responses, navigation, loading states, and user interactions across application features.",
      "Translating Figma designs and functional requirements into responsive interfaces, collaborating with backend and design teams and iterating based on evolving product requirements."
    ],
    tags: ["FLUTTER", "REST APIs", "FIGMA", "UI/UX", "FRONTEND"],
    highlights: ["FLUTTER DEVELOPMENT", "API INTEGRATION", "PRODUCT UI IMPLEMENTATION"]
  },
  {
    id: "02",
    company: "B XPRESS DIGITAL",
    role: "FREELANCE — MOBILE APPLICATION DEVELOPER",
    date: "MAR 2026 — PRESENT",
    color: "purple",
    paragraphs: [
      "Developed the complete Flutter mobile application for a multi-role enterprise platform supporting 7 business roles across the end-to-end order lifecycle.",
      "Owned end-to-end mobile development including API integration, state management, navigation, role-based access, data handling, debugging, and production issue resolution.",
      "Translated business requirements and existing web workflows into responsive, production-ready mobile experiences, building reusable components and maintaining feature parity across Flutter, Spring Boot, and web."
    ],
    tags: ["FLUTTER", "DART", "JAVA", "SPRING BOOT", "REST APIs"],
    highlights: ["7 BUSINESS ROLES", "END-TO-END ORDER LIFECYCLE", "MOBILE"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="relative w-full bg-[#0A0F18] pt-32 pb-40 border-t border-white/5 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <h2 className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase mb-6">THE FIELD</h2>
          <p className="text-4xl md:text-6xl lg:text-7xl font-heading text-white tracking-tighter uppercase font-bold mb-8 leading-[1.1]">
            REAL WORK.<br/>REAL SYSTEMS.
          </p>
          <p className="font-sans text-sm md:text-base text-white/60 font-light leading-relaxed max-w-2xl">
            Experience building and integrating software across mobile, frontend, backend APIs and production workflows.
          </p>
        </motion.div>

        {/* Editorial Timeline */}
        <div className="relative w-full">
          
          {/* Continuous Vertical Timeline Track */}
          <div className="absolute left-[4px] md:left-[180px] top-0 bottom-0 w-px bg-white/5">
            <motion.div 
              className="w-full h-full bg-gradient-to-b from-cyan-500/40 via-purple-500/40 to-transparent origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </div>

          <div className="flex flex-col space-y-24 md:space-y-32">
            {EXPERIENCES.map((exp, index) => {
              const styles = COLOR_MAP[exp.color];

              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row w-full group">
                  
                  {/* Timeline Node */}
                  <div className={`absolute left-[4px] md:left-[180px] top-[64px] md:top-[8px] w-2.5 h-2.5 rounded-full bg-[#0A0F18] border-2 border-white/20 transition-all duration-500 group-hover:bg-white ${styles.nodeBorder} group-hover:shadow-[0_0_15px_currentColor] -translate-x-[4.5px] z-10`} />
                  
                  {/* Left Column: Number & Date */}
                  <div className="w-full md:w-[180px] pl-10 md:pl-0 md:pr-10 flex-shrink-0 md:text-right flex flex-col pt-1.5 mb-8 md:mb-0">
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}
                      className="font-mono text-2xl md:text-3xl text-white/20 text-white/40 transition-colors duration-500 hidden md:block"
                    >
                      {exp.id}
                    </motion.span>
                    <motion.div 
                      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true, margin: "-100px" }}
                      className="mt-0 md:mt-4 flex flex-col items-start md:items-end gap-2"
                    >
                      <span className="font-mono text-[10px] md:text-[11px] text-white/50 tracking-[0.2em] uppercase">
                        {exp.date}
                      </span>
                      {exp.date.includes("PRESENT") && (
                        <span className={`px-2 py-0.5 rounded text-[8px] font-mono tracking-widest bg-white/[0.03] border ${styles.border} ${styles.text}`}>
                          CURRENT
                        </span>
                      )}
                    </motion.div>
                  </div>

                  {/* Right Column: Content */}
                  <div className="flex-1 pl-10 md:pl-10 lg:pl-16 group-hover:translate-x-1 transition-transform duration-500 ease-out">
                    
                    {/* Header */}
                    <div className="mb-8">
                      <motion.h3 
                        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true, margin: "-100px" }}
                        className="font-heading text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-3 group-hover:text-white transition-colors duration-500"
                      >
                        {exp.company}
                      </motion.h3>
                      <motion.h4 
                        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true, margin: "-100px" }}
                        className={`font-mono text-[11px] md:text-xs tracking-[0.2em] uppercase ${styles.text}`}
                      >
                        {exp.role}
                      </motion.h4>
                    </div>

                    {/* Bullet Points */}
                    <motion.ul 
                      initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true, margin: "-100px" }}
                      className="space-y-4 mb-10 max-w-3xl list-none"
                    >
                      {exp.paragraphs.map((p, i) => (
                        <li key={i} className="font-sans text-sm md:text-[15px] text-white/70 leading-relaxed font-light flex items-start">
                          <span className={`mr-4 mt-2 w-1.5 h-1.5 rounded-full ${styles.bgGlow} flex-shrink-0 flex items-center justify-center`}><span className="w-1 h-1 bg-white/50 rounded-full"/></span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </motion.ul>

                    {/* Capability Row (What I worked on) */}
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true, margin: "-100px" }}
                      className="mb-10 p-6 md:p-8 bg-white/[0.015] border border-white/[0.05] rounded-xl backdrop-blur-md"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-1.5 h-1.5 rounded-full ${styles.bgGlow} flex items-center justify-center p-1`}>
                          <div className={`w-1.5 h-1.5 rounded-full bg-white opacity-80`} />
                        </div>
                        <h5 className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">What I worked on</h5>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {exp.highlights.map((h, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-[10px] md:text-[11px] text-white/90 font-mono tracking-widest uppercase">{h}</span>
                            <div className={`mt-3 w-full h-[2px] bg-gradient-to-r ${styles.lineBg} to-transparent`} />
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {exp.tags.map((tag, i) => (
                        <motion.span 
                          key={tag}
                          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.7 + (i * 0.05) }} viewport={{ once: true, margin: "-100px" }}
                          className="font-mono text-[9px] text-white/60 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-sm uppercase tracking-[0.15em] transition-all duration-500 border-white/20 text-white/90 hover:bg-white/[0.04]"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}



