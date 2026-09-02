"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

// --- Types & Data ---

type TechType = "primary" | "secondary" | "foundation" | "tool";
type RoleType = "SOFTWARE ENGINEERING" | "MOBILE DEVELOPMENT" | "FULL STACK DEVELOPMENT" | null;

interface SkillData {
  id: string;
  name: string;
  type: TechType;
  desc: string;
  usedWith: string[];
  usedIn: string[];
}

interface CategoryData {
  id: string;
  title: string;
  number: string;
  span: string; // Tailwind class for grid
  skills: SkillData[];
}

const ROLES: { id: RoleType; label: string; activeCategories: string[]; activeSkills: string[] }[] = [
  {
    id: "SOFTWARE ENGINEERING",
    label: "SOFTWARE ENGINEERING",
    activeCategories: ["backend", "core"],
    activeSkills: ["java", "springboot", "restapis", "postgresql", "mysql", "kafka", "redis", "docker"]
  },
  {
    id: "MOBILE DEVELOPMENT",
    label: "MOBILE DEVELOPMENT",
    activeCategories: ["mobile", "frontend"],
    activeSkills: ["flutter", "dart", "restapis"]
  },
  {
    id: "FULL STACK DEVELOPMENT",
    label: "FULL STACK DEVELOPMENT",
    activeCategories: ["frontend", "backend", "data"], // Wait, data is inside backend
    activeSkills: ["react", "javascript", "html", "css", "tailwind", "java", "springboot", "restapis", "postgresql", "mysql"]
  }
];

const CATEGORIES: CategoryData[] = [
  {
    id: "backend",
    title: "BACKEND & DATA", // Combined data into backend for structural flow
    number: "01",
    span: "md:col-span-2 lg:col-span-2",
    skills: [
      { id: "java", name: "Java", type: "primary", desc: "PROGRAMMING LANGUAGE", usedWith: [], usedIn: ["FlowForge", "Behavioural Health Companion"] },
      { id: "springboot", name: "Spring Boot", type: "primary", desc: "ENTERPRISE FRAMEWORK", usedWith: [], usedIn: ["FlowForge", "Behavioural Health Companion", "B Xpress Digital"] },
      { id: "restapis", name: "REST APIs", type: "primary", desc: "STATELESS COMMUNICATION", usedWith: [], usedIn: ["Commune", "B Xpress Digital"] },
      { id: "postgresql", name: "PostgreSQL", type: "primary", desc: "RELATIONAL DATABASE", usedWith: [], usedIn: ["FlowForge"] },
      { id: "jwt", name: "JWT Auth", type: "secondary", desc: "IDENTITY VERIFICATION", usedWith: [], usedIn: [] },
      { id: "mysql", name: "MySQL", type: "secondary", desc: "RELATIONAL DATABASE", usedWith: [], usedIn: ["Behavioural Health Companion"] },
      { id: "redis", name: "Redis", type: "secondary", desc: "IN-MEMORY CACHE", usedWith: [], usedIn: ["FlowForge"] },
      { id: "kafka", name: "Kafka", type: "secondary", desc: "EVENT STREAMING", usedWith: [], usedIn: ["FlowForge"] },
    ]
  },
  {
    id: "mobile",
    title: "MOBILE & APIs",
    number: "02",
    span: "md:col-span-1 lg:col-span-1",
    skills: [
      { id: "flutter", name: "Flutter", type: "primary", desc: "CROSS-PLATFORM FRAMEWORK", usedWith: [], usedIn: ["Commune", "B Xpress Digital", "Behavioural Health Companion"] },
      { id: "dart", name: "Dart", type: "secondary", desc: "PROGRAMMING LANGUAGE", usedWith: [], usedIn: ["Commune", "B Xpress Digital", "Behavioural Health Companion"] },
    ]
  },
  {
    id: "frontend",
    title: "FRONTEND",
    number: "03",
    span: "md:col-span-2 lg:col-span-2",
    skills: [
      { id: "react", name: "React.js", type: "primary", desc: "UI LIBRARY", usedWith: [], usedIn: ["FlowForge"] },
      { id: "javascript", name: "JavaScript", type: "secondary", desc: "PROGRAMMING LANGUAGE", usedWith: [], usedIn: ["FlowForge"] },
      { id: "html", name: "HTML", type: "secondary", desc: "MARKUP LANGUAGE", usedWith: [], usedIn: [] },
      { id: "css", name: "CSS", type: "secondary", desc: "STYLING LANGUAGE", usedWith: [], usedIn: [] },
      { id: "tailwind", name: "Tailwind CSS", type: "secondary", desc: "UTILITY-FIRST STYLING", usedWith: [], usedIn: [] },
    ]
  },
  {
    id: "ai",
    title: "AI & INTELLIGENCE",
    number: "04",
    span: "md:col-span-1 lg:col-span-1",
    skills: [
      { id: "gemini", name: "Gemini API", type: "secondary", desc: "LLM INTEGRATION", usedWith: [], usedIn: ["FlowForge"] },
    ]
  },
  {
    id: "core",
    title: "CORE ENGINEERING",
    number: "05",
    span: "md:col-span-2 lg:col-span-2",
    skills: [
      { id: "oop", name: "OOP", type: "foundation", desc: "PARADIGM", usedWith: [], usedIn: [] },
      { id: "dsa", name: "DSA", type: "foundation", desc: "OPTIMIZATION", usedWith: [], usedIn: [] },
      { id: "dbms", name: "DBMS", type: "foundation", desc: "DATA ARCHITECTURE", usedWith: [], usedIn: [] },
      { id: "sql", name: "SQL", type: "foundation", desc: "QUERY LANGUAGE", usedWith: [], usedIn: [] },
      { id: "collections", name: "Collections", type: "foundation", desc: "DATA STRUCTURES", usedWith: [], usedIn: [] },
      { id: "exception", name: "Exception Handling", type: "foundation", desc: "ERROR MANAGEMENT", usedWith: [], usedIn: [] },
    ]
  },
  {
    id: "tools",
    title: "TOOLS & INFRA",
    number: "06",
    span: "md:col-span-1 lg:col-span-1",
    skills: [
      { id: "docker", name: "Docker", type: "tool", desc: "CONTAINERIZATION", usedWith: [], usedIn: ["FlowForge"] },
      { id: "git", name: "Git", type: "tool", desc: "VERSION CONTROL", usedWith: [], usedIn: [] },
      { id: "github", name: "GitHub", type: "tool", desc: "CODE COLLABORATION", usedWith: [], usedIn: [] },
      { id: "postman", name: "Postman", type: "tool", desc: "API TESTING", usedWith: [], usedIn: [] },
      { id: "figma", name: "Figma", type: "tool", desc: "UI/UX DESIGN", usedWith: [], usedIn: [] },
      { id: "reactflow", name: "React Flow", type: "tool", desc: "VISUAL PROGRAMMING", usedWith: ["React.js"], usedIn: ["FlowForge"] },
    ]
  }
];

export function Workbench() {
  const [activeRole, setActiveRole] = useState<RoleType>(null);
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<SkillData | null>(null);

  // Helper to determine module opacity
  const getModuleOpacity = (catId: string) => {
    if (activeRole) {
      const role = ROLES.find(r => r.id === activeRole);
      if (role?.activeCategories.includes(catId)) return "opacity-100";
      return "opacity-40 grayscale-[50%]";
    }
    if (hoveredModule) {
      return hoveredModule === catId ? "opacity-100" : "opacity-60";
    }
    return "opacity-100";
  };

  // Helper to determine skill token style
  const getSkillStyle = (skill: SkillData) => {
    let isActive = false;
    
    if (activeRole) {
      const role = ROLES.find(r => r.id === activeRole);
      if (role?.activeSkills.includes(skill.id)) isActive = true;
    }
    if (hoveredSkill) {
      if (hoveredSkill.id === skill.id || hoveredSkill.usedWith.includes(skill.name)) isActive = true;
    }

    const baseStyle = "px-3 py-1.5 rounded border text-[10px] md:text-xs font-mono transition-all duration-500 flex items-center gap-2 cursor-pointer font-bold tracking-wider ";
    
    let typeStyle = "";
    if (isActive || (!activeRole && !hoveredSkill)) {
      typeStyle = "bg-[#7567B5]/10 border-[#7567B5]/40 text-[#ECE6DA] shadow-[0_0_10px_rgba(117,103,181,0.1)] ";
    } else {
      typeStyle = "bg-transparent border-white/5 text-white/40 scale-95 opacity-70 ";
    }

    // Hover effect on the token itself
    const hoverStyle = "hover:bg-[#C8A45D]/10 hover:border-[#C8A45D]/50 hover:text-[#C8A45D] hover:shadow-[0_0_15px_rgba(200,164,93,0.2)] hover:-translate-y-0.5 hover:scale-100 hover:opacity-100";

    return baseStyle + typeStyle + hoverStyle;
  };

  return (
    <section id="skills" className="relative w-full bg-[#0A0F18] pt-24 pb-40 border-t border-[#7567B5]/10 overflow-hidden">
      
      {/* Background Architectural Blueprint Removed */}

      {/* SVG Connection Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full opacity-20" preserveAspectRatio="none">
           {/* Subtle architectural lines connecting the grid. We use fixed percentages or generic paths since absolute tracking is too complex without DOM refs. */}
           <path d="M 33% 20% L 33% 80%" stroke="#7567B5" strokeWidth="0.5" strokeDasharray="4 8" />
           <path d="M 66% 20% L 66% 80%" stroke="#7567B5" strokeWidth="0.5" strokeDasharray="4 8" />
           
           {/* Active traces */}
           {(hoveredModule || hoveredSkill) && (
             <motion.path 
                d="M 50% 50% L 20% 30% M 50% 50% L 80% 30% M 50% 50% L 20% 70% M 50% 50% L 80% 70%" 
                stroke="#C8A45D" strokeWidth="1" strokeDasharray="2 4"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 0.3, pathLength: 1 }}
                transition={{ duration: 1 }}
             />
           )}
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header & Role Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-[10px] font-mono text-[#7567B5] tracking-[0.4em] uppercase mb-4">THE WORKBENCH</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#ECE6DA] tracking-tighter uppercase font-bold mb-4">
              Engineering Stack
            </h3>
            
            <div className="pl-4 border-l border-[#7567B5]/30">
              <p className="font-sans text-sm md:text-base text-[#A99CC8] font-light leading-relaxed mb-1">
                "I build across the stack — from interfaces to APIs to the systems behind them."
              </p>
              <p className="font-mono text-[9px] md:text-[10px] text-[#C8A45D] tracking-widest uppercase">
                DESIGN → BUILD → INTEGRATE → SHIP
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-2 lg:justify-end"
          >
            {ROLES.map(role => (
              <button
                key={role.id}
                onClick={() => setActiveRole(activeRole === role.id ? null : role.id)}
                className={`px-4 py-2 text-[10px] font-mono tracking-wider border transition-all duration-300 ${
                  activeRole === role.id 
                  ? 'bg-[#C8A45D]/10 border-[#C8A45D]/50 text-[#C8A45D]' 
                  : 'bg-transparent border-[#7567B5]/20 text-[#A99CC8] hover:border-[#7567B5]/50'
                }`}
              >
                {role.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Central Core Indicator Removed */}

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative z-10">
          {CATEGORIES.map((cat, idx) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + (idx * 0.1) }}
              onMouseEnter={() => setHoveredModule(cat.id)}
              onMouseLeave={() => setHoveredModule(null)}
              className={`relative flex flex-col p-6 md:p-8 rounded-xl border border-white/5 bg-[#161B22]/40 backdrop-blur-sm transition-all duration-700 ${cat.span} ${getModuleOpacity(cat.id)}`}
            >
              
              {/* Module Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#7567B5]/20">
                 <div className="font-mono text-[#7567B5] text-[10px] tracking-widest">{cat.number}</div>
                 <h3 className="font-mono text-xs text-[#ECE6DA] tracking-[0.2em] uppercase font-bold">{cat.title}</h3>
                 
                 {/* Internal architectural line */}
                 <div className="flex-1 h-px bg-gradient-to-r from-[#7567B5]/20 to-transparent" />
              </div>
              
              {/* Technology Tokens */}
              <div className="flex flex-wrap gap-2 md:gap-3 relative z-10">
                {cat.skills.map(skill => (
                  <div 
                    key={skill.id}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={getSkillStyle(skill)}
                  >
                    <div className="w-1.5 h-1.5 bg-[#C8A45D] rounded-full shadow-[0_0_5px_#C8A45D]" />
                    {skill.name}
                  </div>
                ))}
              </div>

              {/* Internal Contextual Readout (Reveals on Hover) */}
              <AnimatePresence>
                {(hoveredSkill && cat.skills.some(s => s.id === hoveredSkill.id)) && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden border-t border-[#C8A45D]/20 pt-4"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-lg font-bold text-[#ECE6DA] uppercase">{hoveredSkill.name}</span>
                        <span className="font-mono text-[9px] px-2 py-0.5 bg-[#C8A45D]/10 text-[#C8A45D] border border-[#C8A45D]/20 tracking-wider">
                          {hoveredSkill.desc}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {hoveredSkill.usedIn.length > 0 && (
                          <div>
                            <span className="block font-mono text-[9px] text-[#7567B5] tracking-widest mb-1">USED IN</span>
                            <span className="font-sans text-xs text-[#ECE6DA]">{hoveredSkill.usedIn.join(" · ")}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
