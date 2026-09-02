"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const LAYERS = [
  { 
    id: "01", 
    name: "EXPERIENCE", 
    tech: "React · Flutter · Figma", 
    desc: "Interactive client-side applications, user interfaces, and component architectures designed for responsive human-computer interaction.",
    color: "cyan",
    textColor: "text-cyan",
    borderColor: "border-cyan",
    bgColor: "bg-cyan"
  },
  { 
    id: "02", 
    name: "API & SECURITY", 
    tech: "REST APIs · JWT · Authentication", 
    desc: "Secure gateways, stateless routing, payload validation, and access control boundaries defining system perimeters.",
    color: "purple",
    textColor: "text-purple",
    borderColor: "border-purple",
    bgColor: "bg-purple"
  },
  { 
    id: "03", 
    name: "APPLICATION", 
    tech: "Java · Spring Boot · Business Logic", 
    desc: "Core backend services executing business rules, state mutations, and domain-driven design principles.",
    color: "gold",
    textColor: "text-gold",
    borderColor: "border-gold",
    bgColor: "bg-gold"
  },
  { 
    id: "04", 
    name: "DATA & EVENTS", 
    tech: "PostgreSQL · Redis · Kafka", 
    desc: "Persistent relational storage, high-speed memory caching, and asynchronous event streaming for decoupled architectures.",
    color: "cyan",
    textColor: "text-cyan",
    borderColor: "border-cyan",
    bgColor: "bg-cyan"
  },
  { 
    id: "05", 
    name: "INTELLIGENCE", 
    tech: "Gemini AI · AI Agents · Workflow AI", 
    desc: "LLM integrations, autonomous agent loops, and semantic processing layered onto traditional deterministic workflows.",
    color: "purple",
    textColor: "text-purple",
    borderColor: "border-purple",
    bgColor: "bg-purple"
  }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: true });
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <section id="about" ref={ref} className="relative w-full bg-base pt-32 pb-32 overflow-hidden border-t border-white/5">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 flex flex-col items-center justify-center">
        
        {/* ========================================= */}
        {/* CENTERED EDITORIAL & PHILOSOPHY           */}
        {/* ========================================= */}
        <div className="w-full flex flex-col items-center justify-center pt-8 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[12vw] md:text-[6rem] lg:text-[8rem] font-heading font-extrabold text-white uppercase tracking-tighter leading-[0.85] mb-2">
              HOW I THINK
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan via-white to-purple uppercase tracking-tight mb-16">
              SYSTEMS, NOT SYNTAX.
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light mb-20 max-w-4xl mx-auto"
          >
            <p className="text-white font-medium mb-8 text-2xl lg:text-3xl tracking-tight">
              I don't start with the framework. I start with the system.
            </p>
            <p className="mb-8">
              I think in flows, boundaries, data, and failure points — then choose the technology that fits. From Spring Boot services and event-driven workflows to mobile interfaces and AI-assisted products, I care about how every layer connects and what the user ultimately experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="px-8 py-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <p className="font-mono text-[10px] md:text-sm text-white/50 tracking-[0.4em] uppercase">
                “I build by understanding how the pieces connect.”
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}




