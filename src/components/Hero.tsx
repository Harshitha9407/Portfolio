"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

// Lightweight background particle component
const LivingBackground = () => {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);
  useEffect(() => {
    setMounted(true);
    setParticles(Array.from({ length: 15 }).map(() => ({
      x: `${Math.random() * 100}vw`,
      y1: `${Math.random() * 100}vh`,
      y2: `${Math.random() * 100}vh`,
      opacity: Math.random() * 0.3,
      duration: 15 + Math.random() * 20
    })));
  }, []);

  if (!mounted || particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle Data Nodes */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-cyan/40 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.5)] hidden md:block"
          initial={{ x: p.x, y: p.y1, opacity: p.opacity }}
          animate={{ y: [p.y1, p.y2], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
        />
      ))}

      
      {/* Faint Scanning Grid Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] bg-cyan/10 hidden md:block"
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Occasional Ambient Pulses */}
      <motion.div
        className="absolute top-[20%] left-[30%] w-64 h-64 bg-purple/5 rounded-full blur-[100px]"
        animate={{ opacity: [0, 0.3, 0], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[30%] w-64 h-64 bg-cyan/5 rounded-full blur-[100px]"
        animate={{ opacity: [0, 0.4, 0], scale: [1, 1.5, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMouse({ x, y });
  };

  const firstName = "HARSHITHA".split("");
  const lastName = "GUMMADI".split("");

  const letterVariants: any = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: 1.5 + i * 0.05, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
    })
  };


  return (
    <section 
      ref={ref} 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-base overflow-hidden flex items-center pt-20 pb-12"
    >
      
      {/* Interactive Cinematic Background */}
      <motion.div 
        style={{ 
          y: imageY, 
          opacity, 
          x: isMobile ? 0 : -mouse.x, 
          translateY: isMobile ? 0 : -mouse.y
        }} 
        className="absolute inset-0 z-0 w-[110%] h-[110%] -left-[5%] -top-[5%]"
      >
        <Image 
          src="/assets/hero.jpg" 
          alt="Futuristic Engineering Laboratory"
          fill
          className="object-cover object-right md:object-center opacity-30 md:opacity-40 mix-blend-screen"
          priority
          sizes="100vw"
        />
        
        <div className="absolute inset-0 bg-black/40 md:bg-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-base via-base/80 to-transparent z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-b from-base via-transparent to-transparent z-[2]" />
      </motion.div>

      {/* Living System Animations */}
      <LivingBackground />

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 flex flex-col items-start mt-8 md:mt-0">
        
        {/* Typography & Content */}
        <motion.div 
          style={{ y: textY, scale: textScale, x: isMobile ? 0 : mouse.x * 0.5, translateY: isMobile ? 0 : mouse.y * 0.5 }} 
          className="w-full flex flex-col justify-center origin-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="font-mono text-[9px] md:text-[10px] text-white/50 tracking-[0.4em] uppercase border border-white/10 px-3 py-1.5 bg-white/5 backdrop-blur-sm">
              PORTFOLIO SYSTEM
            </span>
          </motion.div>
          
          <div className="mb-4 w-full">
            <h1 className="text-[13.5vw] md:text-[6.5rem] lg:text-[8.5rem] xl:text-[10.5rem] font-heading font-extrabold tracking-tighter leading-[0.85] text-white uppercase flex flex-col overflow-visible">
              <div className="flex overflow-visible whitespace-nowrap pr-4">
                {firstName.map((char, i) => (
                  <motion.span key={`f-${i}`} custom={i} variants={letterVariants} initial="hidden" animate="visible" className="inline-block relative">
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="flex overflow-visible whitespace-nowrap text-white/90 pr-4 mt-1 md:mt-2">
                {lastName.map((char, i) => (
                  <motion.span key={`l-${i}`} custom={i + firstName.length} variants={letterVariants} initial="hidden" animate="visible" className="inline-block relative">
                    {char}
                  </motion.span>
                ))}
              </div>
            </h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 2.2 }} 
            className="mt-6 md:mt-8"
          >
            <h2 className="font-mono text-[10px] md:text-xs lg:text-sm text-cyan tracking-[0.4em] uppercase font-bold">
              SYSTEMS · BACKEND · AI · PRODUCT
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 2.4 }} 
            className="mt-8 md:mt-12 max-w-xl"
          >
            <p className="text-xl md:text-2xl font-heading text-white leading-snug font-medium mb-6 uppercase tracking-tight">
              I BUILD SYSTEMS THAT TURN<br className="hidden md:block" />
              COMPLEXITY INTO SOMETHING<br className="hidden md:block" />
              PEOPLE CAN USE.
            </p>
            <p className="text-sm md:text-base font-sans text-white/60 leading-relaxed font-light mb-12">
              Computer Science student building backend systems, intelligent workflows, and product experiences across web and mobile.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button data-cursor="VIEW" className="group relative flex items-center gap-3 font-mono text-[10px] text-base text-white tracking-widest uppercase px-8 py-4 border border-white/20 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">VIEW PROJECTS</span>
                <span className="relative z-10 text-lg leading-none group-hover:text-black group-hover:translate-x-1 transition-all duration-300">→</span>
              </button>
            </div>
          </motion.div>



        </motion.div>

      </div>
    </section>
  );
}





