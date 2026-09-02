"use client";
import { motion } from "framer-motion";

export function OtherProjects() {
  return (
    <section className="relative w-full bg-indigo py-32 px-8 md:px-24 border-t border-white/5 tech-grid">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* COMMUNE */}
        <div id="commune" className="flex flex-col md:flex-row items-center gap-16 pt-16">
          <div className="w-full md:w-1/2 order-2 md:order-1 glass-panel holo-border h-[400px] rounded-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden group">

            <div className="absolute inset-0 bg-mineral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Abstract Network/Collaboration Visualization */}
            <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
              <svg className="absolute w-full h-full text-mineral/40" viewBox="0 0 200 200">
                {/* Central Workspace Node */}
                <motion.circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" strokeWidth="1" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} />
                <motion.circle cx="100" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
                
                {/* User/Device Nodes */}
                <circle cx="40" cy="60" r="12" fill="none" stroke="var(--color-violet)" strokeWidth="1" />
                <circle cx="160" cy="60" r="12" fill="none" stroke="var(--color-gold)" strokeWidth="1" />
                <circle cx="100" cy="160" r="12" fill="none" stroke="var(--color-ivory)" opacity="0.5" strokeWidth="1" />
                
                {/* Communication Paths */}
                <motion.path d="M48,68 L80,88" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" animate={{ strokeDashoffset: [20, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                <motion.path d="M152,68 L120,88" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" animate={{ strokeDashoffset: [20, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                <motion.path d="M100,148 L100,125" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" animate={{ strokeDashoffset: [20, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                
                {/* Data packets */}
                <motion.circle r="2" fill="var(--color-violet)" animate={{ cx: [48, 80], cy: [68, 88], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <motion.circle r="2" fill="var(--color-gold)" animate={{ cx: [152, 120], cy: [68, 88], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
              </svg>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="flex flex-col gap-1 font-mono text-[9px] text-mineral bg-black/40 px-3 py-2 rounded holo-border backdrop-blur-md">
                <span className="text-ivory/60">ACTIVE_CONNECTIONS</span>
                <span className="text-mineral text-glow">SECURE_SYNC_OK</span>
              </div>
              <div className="flex flex-col gap-1 font-mono text-[9px] text-right">
                <span className="text-ivory/50">MESSAGING / MEETINGS</span>
                <span className="text-violet">WORKSPACE_UI</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 space-y-6">
            <h4 className="text-xs font-mono text-mineral tracking-[0.2em] flex items-center gap-4 uppercase">
              <span className="w-8 h-px bg-mineral" /> PROJECT 002
            </h4>
            <h3 className="text-4xl md:text-5xl font-heading text-ivory">COMMUNE</h3>
            <div className="space-y-4 text-ivory/70 leading-relaxed font-sans text-sm md:text-base">
              <p>
                An internal collaboration and workspace platform. Due to confidentiality, the exact architecture remains private, but the core challenge was designing a fluid, real-time user experience.
              </p>
              <p>
                My focus was on <strong>UI/UX prototyping</strong> and <strong>Flutter mobile development</strong>. I translated complex design requirements into interactive application workflows, integrated REST APIs, and managed asynchronous data states for messaging and meetings features.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 font-mono text-[10px] text-ivory/60 pt-4">
              <span className="glass-panel px-3 py-1.5 rounded-full">FLUTTER</span>
              <span className="glass-panel px-3 py-1.5 rounded-full">REST APIs</span>
              <span className="glass-panel px-3 py-1.5 rounded-full">UI/UX DESIGN</span>
              <span className="glass-panel px-3 py-1.5 rounded-full">PROTOTYPING</span>
            </div>
          </div>
        </div>

        {/* BEHAVIORAL HEALTH COMPANION */}
        <div id="health" className="flex flex-col md:flex-row items-center gap-16 pt-16">
          <div className="w-full md:w-1/2 space-y-6">
            <h4 className="text-xs font-mono text-copper tracking-[0.2em] flex items-center gap-4 uppercase">
              <span className="w-8 h-px bg-copper" /> PROJECT 003
            </h4>
            <h3 className="text-4xl md:text-5xl font-heading text-ivory">BEHAVIORAL HEALTH COMPANION</h3>
            
            <div className="inline-block border border-gold/30 bg-gold/10 px-3 py-1 rounded font-mono text-[10px] text-gold mb-2">
              TEAM PROJECT
            </div>

            <div className="space-y-4 text-ivory/70 leading-relaxed font-sans text-sm md:text-base">
              <p>
                A collaborative wellness platform integrating mood, stress, and sleep tracking into a single unified mobile experience powered by a recommendation engine.
              </p>
              <p>
                As part of the engineering team, I focused specifically on the <strong>Flutter mobile application</strong> and the crucial <strong>integration between the mobile frontend and backend services</strong> (Spring Boot & MySQL), ensuring seamless data retrieval and presentation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 font-mono text-[10px] text-ivory/60 pt-4">
              <span className="glass-panel px-3 py-1.5 rounded-full">FLUTTER MOBILE</span>
              <span className="glass-panel px-3 py-1.5 rounded-full">JAVA / SPRING BOOT</span>
              <span className="glass-panel px-3 py-1.5 rounded-full">MYSQL</span>
              <span className="glass-panel px-3 py-1.5 rounded-full">API INTEGRATION</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 glass-panel holo-border border-copper/30 h-[400px] rounded-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-copper/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* System Data Flow Visualization */}
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 pointer-events-none">
              
              <div className="flex justify-between w-full max-w-[200px] relative z-10 font-mono text-[10px] text-ivory/60">
                <span className="text-copper">MOBILE UI</span>
                <span className="text-mineral">BACKEND API</span>
                <span className="text-violet">DATABASE</span>
              </div>

              <div className="w-full max-w-[250px] h-[100px] relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 250 100">
                  {/* Nodes */}
                  <motion.rect x="10" y="40" width="20" height="20" rx="4" fill="var(--color-copper)" opacity="0.8" />
                  <motion.circle cx="125" cy="50" r="12" fill="none" stroke="var(--color-mineral)" strokeWidth="2" />
                  <motion.rect x="220" y="35" width="20" height="30" rx="2" fill="none" stroke="var(--color-violet)" strokeWidth="2" />

                  {/* Flow Lines */}
                  <motion.path 
                    d="M 30,50 C 70,50 80,50 113,50" 
                    fill="none" stroke="var(--color-copper)" strokeWidth="1" strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [20, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path 
                    d="M 137,50 C 180,50 190,50 220,50" 
                    fill="none" stroke="var(--color-mineral)" strokeWidth="1" strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [20, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Data Waves */}
                  <motion.path 
                    d="M 10,80 Q 70,70 125,80 T 240,80" 
                    fill="none" stroke="var(--color-violet)" strokeWidth="1" opacity="0.4"
                    animate={{ d: ["M 10,80 Q 70,70 125,80 T 240,80", "M 10,80 Q 70,90 125,80 T 240,80"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M 10,90 Q 70,80 125,90 T 240,90" 
                    fill="none" stroke="var(--color-copper)" strokeWidth="1" opacity="0.2"
                    animate={{ d: ["M 10,90 Q 70,80 125,90 T 240,90", "M 10,90 Q 70,100 125,90 T 240,90"] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                  />
                </svg>
              </div>

            </div>
            
            <div className="absolute top-6 left-6 font-mono text-[9px] text-copper bg-black/40 px-3 py-2 rounded holo-border backdrop-blur-md">
              HEALTH.DATA.PIPELINE / ACTIVE
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}



