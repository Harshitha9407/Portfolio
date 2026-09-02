"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";
    
    const runSequence = async () => {
      await new Promise(r => setTimeout(r, 200)); setStep(1); // Initializing
      await new Promise(r => setTimeout(r, 300)); setStep(2); // Arch
      await new Promise(r => setTimeout(r, 250)); setStep(3); // Backend
      await new Promise(r => setTimeout(r, 250)); setStep(4); // AI
      await new Promise(r => setTimeout(r, 250)); setStep(5); // Interface
      await new Promise(r => setTimeout(r, 400)); setStep(6); // System Ready
      await new Promise(r => setTimeout(r, 400)); 
      setVisible(false);
      document.body.style.overflow = "";
    };
    
    runSequence();
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-base flex flex-col items-center justify-center font-mono text-sm tracking-widest text-cyan"
        >
          <div className="w-[300px] flex flex-col gap-2">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: step >= 1 ? 1 : 0 }}>
              [ INITIALIZING SYSTEM... ]
            </motion.div>
            
            <div className="mt-4 flex flex-col gap-2 text-white/70">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: step >= 2 ? 1 : 0 }} className="flex justify-between">
                <span>ARCHITECTURE</span><span>........ ONLINE</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: step >= 3 ? 1 : 0 }} className="flex justify-between">
                <span>BACKEND</span><span>............. ONLINE</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: step >= 4 ? 1 : 0 }} className="flex justify-between">
                <span>AI PIPELINE</span><span>......... ONLINE</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: step >= 5 ? 1 : 0 }} className="flex justify-between">
                <span>INTERFACE</span><span>........... ONLINE</span>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: step >= 6 ? 1 : 0, y: step >= 6 ? 0 : 10 }} 
              className="mt-6 text-green-400 font-bold"
            >
              &gt; SYSTEM READY
            </motion.div>
          </div>
          
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10" 
               style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}



