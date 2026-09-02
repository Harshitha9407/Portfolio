"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const RESEARCH_POINTS = [
  {
    num: "01",
    title: "Post-Quantum Cryptography",
    desc: "Studying post-quantum cryptographic approaches and NIST-standardized algorithms for secure key establishment."
  },
  {
    num: "02",
    title: "Hybrid Encryption",
    desc: "Designing a hybrid communication approach combining post-quantum key exchange with AES-based data encryption."
  },
  {
    num: "03",
    title: "Implementation",
    desc: "Exploring implementation using Open Quantum Safe (liboqs) and integrating the cryptographic components into a secure communication workflow."
  },
  {
    num: "04",
    title: "Benchmarking",
    desc: "Planning experiments to compare computational cost, latency, key/ciphertext sizes, and communication overhead under simulated network conditions."
  }
];

const TAGS = [
  "POST-QUANTUM CRYPTOGRAPHY",
  "HYBRID ENCRYPTION",
  "AES",
  "LIBOQS",
  "SECURE COMMUNICATION",
  "CRYPTOGRAPHIC BENCHMARKING"
];

export function Research() {
  return (
    <section id="research" className="relative w-full bg-[#0A0F18] pt-32 pb-40 border-t border-white/5 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] rounded-full"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20">
        
        {/* Left Column (Content) */}
        <div className="w-full lg:w-[45%] flex flex-col">
          
          {/* Label & Status */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4 mb-6"
          >
            <h2 className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase">RESEARCH / 2026</h2>
          </motion.div>

          {/* Main Heading */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true, margin: "-100px" }}>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tighter uppercase font-bold leading-[1.1] mb-6">
              SECURING COMMUNICATION<br/>FOR THE QUANTUM ERA.
            </h3>
            
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[10px] md:text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-sm tracking-widest uppercase font-bold">
                HYBRID CRYPTOGRAPHY
              </span>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-mono text-[10px] md:text-xs text-white/70 tracking-widest uppercase font-bold">
                  ONGOING
                </span>
              </div>
            </div>

            <p className="font-sans text-sm md:text-base text-white/60 font-light leading-relaxed max-w-lg mb-12">
              Exploring a hybrid cryptographic architecture that combines post-quantum cryptography with classical encryption to study secure communication against future quantum threats.
            </p>
          </motion.div>

          {/* Project Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true, margin: "-100px" }}
            className="mb-12 p-6 bg-white/[0.02] border border-white/5 rounded-xl border-l-2 border-l-cyan-500/50"
          >
            <div className="font-mono text-[9px] text-white/40 tracking-[0.2em] uppercase mb-2">AUG 2026 — PRESENT</div>
            <div className="font-heading text-lg md:text-xl font-bold text-white mb-2 leading-tight">
              HYBRID QUANTUM-CLASSICAL<br/>CRYPTOGRAPHY FOR SECURE COMMUNICATION
            </div>
            <div className="font-mono text-[10px] text-purple-400 tracking-[0.1em] uppercase">
              UNDERGRADUATE RESEARCH · FINAL YEAR PROJECT
            </div>
          </motion.div>

          {/* Current Research Points */}
          <div className="flex flex-col space-y-8 mb-12">
            <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold border-b border-white/5 pb-2">
              CURRENT RESEARCH
            </motion.h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {RESEARCH_POINTS.map((pt, i) => (
                <motion.div 
                  key={pt.num}
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }} viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] text-cyan-500/50 group-hover:text-cyan-400 transition-colors">{pt.num}</span>
                    <h5 className="font-mono text-[11px] text-white/90 uppercase tracking-wider">{pt.title}</h5>
                  </div>
                  <p className="text-[13px] text-white/50 leading-relaxed font-light">
                    {pt.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technology Tags */}
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-2"
          >
            {TAGS.map(tag => (
              <span key={tag} className="font-mono text-[9px] text-white/50 bg-[#0A0F18] border border-white/10 px-3 py-1.5 rounded-sm uppercase tracking-[0.15em] text-white/80 transition-colors">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column (Visual) */}
        <div className="w-full lg:w-[55%] flex items-center justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-[650px] relative aspect-square md:aspect-[4/3] rounded-[16px] overflow-hidden border border-white/10 group cursor-default shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute inset-0 bg-[#0A0F18] z-0" />
            
            <Image 
              src="/assets/research/hybrid-cryptography-architecture.jpg" 
              alt="Hybrid quantum-classical cryptography secure communication architecture"
              fill
              className="object-cover object-center opacity-90 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100 group-hover:brightness-110 z-10"
              sizes="(max-width: 768px) 100vw, 55vw"
            />

            {/* Subtle Overlay Glows */}
            <div className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-700 opacity-50 group-hover:opacity-100">
              <div className="absolute top-0 left-0 w-full h-full shadow-[inset_0_0_100px_rgba(10,15,24,0.9)]" />
              <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-500/20 rounded-full blur-[60px]" />
              <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-purple-500/20 rounded-full blur-[60px]" />
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-amber-500/10 rounded-full blur-[50px]" />
            </div>

            {/* Glowing Border on Hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-[16px] z-30 transition-colors duration-700 pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}



