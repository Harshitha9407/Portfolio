"use client";

import { motion } from "framer-motion";
import { FlowForgeHeroGraph } from "./FlowForgeHeroGraph";
import Image from "next/image";

export function FlowForgeSection() {
  return (
    <section id="flowforge" className="relative w-full bg-indigo py-32 px-8 md:px-24 border-t border-white/5 tech-grid">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. COMPACT HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="flex items-center gap-4 text-xs font-mono text-gold tracking-[0.2em] mb-4 uppercase">
              <span className="w-8 h-px bg-gold" /> PROJECT 001
            </h2>
            <h3 className="text-5xl md:text-7xl font-heading text-ivory mb-4">FLOWFORGE</h3>
            <p className="text-xl text-mineral max-w-2xl font-emphasis">
              Design, simulate, and automate complex organizational workflows with a visual orchestration engine.
            </p>
          </div>
          <a href="#" className="glass-panel px-6 py-3 rounded-full text-xs font-mono text-gold hover:bg-gold/10 transition-colors border-gold/30 flex items-center gap-2">
            EXPLORE SYSTEM <span className="text-lg leading-none">↗</span>
          </a>
        </div>

        {/* 2. THE HERO GRAPH (Interactive Highlight) */}
        <div className="w-full h-[500px] mb-12 rounded-2xl overflow-hidden glass-panel holo-border relative">
          <FlowForgeHeroGraph />
          <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded text-[10px] font-mono text-mineral bg-indigo/80">
            INTERACTIVE GRAPH: DRAG & EXPLORE
          </div>
        </div>

        {/* 3. PROBLEM -> SOLUTION (Concise) */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="glass-panel p-8 rounded-2xl border-copper/20">
            <h4 className="text-copper font-mono text-xs tracking-widest mb-4">THE PROBLEM</h4>
            <p className="text-ivory/70 text-sm leading-relaxed">
              Approval processes often rely on hardcoded logic, repeated follow-ups, and rigid organizational structures, making them difficult to scale or modify without developer intervention.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-2xl border-violet/20 bg-violet/5">
            <h4 className="text-violet font-mono text-xs tracking-widest mb-4">THE SOLUTION</h4>
            <p className="text-ivory/90 text-sm leading-relaxed">
              A graph-based execution engine that visualizes workflow paths, resolves approvers dynamically via organizational hierarchy, and simulates execution before deployment.
            </p>
          </div>
        </div>

        {/* 4. THREE CORE CAPABILITIES GRID */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {/* Builder */}
          <div className="glass-panel p-6 rounded-xl flex flex-col gap-4">
            <div className="h-40 relative rounded-lg overflow-hidden border border-white/10">
              <Image src="/images/flowforge_builder.png" alt="Builder" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h5 className="font-heading text-lg text-ivory mb-2">Visual Builder</h5>
              <p className="text-xs text-ivory/60">Drag-and-drop workflow design supporting conditional splits, parallel approvals, and sync merges.</p>
            </div>
          </div>
          {/* Simulation */}
          <div className="glass-panel p-6 rounded-xl flex flex-col gap-4">
            <div className="h-40 relative rounded-lg overflow-hidden border border-white/10">
              <Image src="/images/flowforge_simulation.png" alt="Simulation" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h5 className="font-heading text-lg text-ivory mb-2">Safe Simulation</h5>
              <p className="text-xs text-ivory/60">Test and validate routing logic and dynamic approver resolution in a sandboxed environment.</p>
            </div>
          </div>
          {/* AI Architect */}
          <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo/50 to-violet/20 z-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-40 relative rounded-lg overflow-hidden border border-white/10 z-10">
              <Image src="/images/flowforge_ai.png" alt="AI Builder" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="z-10">
              <h5 className="font-heading text-lg text-gold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> AI Architect
              </h5>
              <p className="text-xs text-ivory/60">Generate complete, validated workflow graphs directly from natural language prompts using Gemini.</p>
            </div>
          </div>
        </div>

        {/* 6. TECH STACK TAGS */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-[10px] font-mono text-mineral mr-4">SYSTEM STACK:</span>
          {['Java', 'Spring Boot', 'React Flow', 'PostgreSQL', 'Kafka', 'Gemini AI'].map((tag) => (
            <span key={tag} className="px-4 py-1.5 glass-panel rounded-full text-xs font-mono text-ivory/80 border-white/10 hover:border-mineral/50 transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}



