"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// ============================================================================
// DATA ARCHITECTURE
// ============================================================================

const PROJECTS_DATA = [
  {
    id: "01",
    title: "FLOWFORGE",
    subtitle: "VISUAL WORKFLOW ORCHESTRATION PLATFORM",
    description: "A graph-based workflow orchestration platform for designing, executing, simulating, and optimizing business workflows through a visual node-based interface.",
    impact: "Architected a highly scalable workflow engine processing complex directed acyclic graphs (DAGs). Demonstrated advanced state management and full-stack system design.",
    technologies: ["Java", "Spring Boot", "React", "React Flow", "PostgreSQL", "Redis", "Kafka", "Docker", "Gemini API"],
    githubUrl: "https://github.com/Harshitha9407/FlowForge",
    layout: "tier-1",
  },
  {
    id: "02",
    title: "BEHAVIOURAL HEALTH COMPANION",
    subtitle: "FULL-STACK WELLNESS APP",
    description: "A full-stack mobile application designed to support behavioral wellness through structured interactions, data tracking, and personalized user experiences.",
    impact: "Built a production-ready mobile architecture prioritizing responsive UI/UX and secure data handling. Showcases strong capability in end-to-end mobile product development.",
    technologies: ["Java", "Spring Boot", "Flutter", "MySQL", "Python"],
    githubUrl: "https://github.com/Harshitha9407/Behavioural-Health-Companion",
    layout: "tier-1",
  },
  {
    id: "03",
    title: "FOCUSTUBE",
    subtitle: "PRODUCTIVITY & VIDEO LEARNING",
    description: "A productivity application designed to enhance focused video learning by blocking distractions and incorporating focus mode features.",
    impact: "Engineered a custom Chrome extension and web platform to solve a real user productivity problem. Highlights frontend ingenuity and browser API expertise.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chrome API"],
    githubUrl: "https://github.com/Harshitha9407/FocusTube",
    layout: "tier-2",
  },
  {
    id: "04",
    title: "REALTIME CHAT",
    subtitle: "LIVE WEBSOCKET MESSAGING",
    description: "A real-time chat application built for instant messaging with live presence indicators and structured communication flows.",
    impact: "Implemented low-latency bi-directional communication protocols handling concurrent connections. Proves proficiency in real-time distributed systems.",
    technologies: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
    githubUrl: "https://github.com/Harshitha9407/RealTime-ChatApp",
    layout: "tier-2",
  },
  {
    id: "05",
    title: "SMARTQ",
    subtitle: "DIGITAL QUEUE MANAGEMENT",
    description: "A digital queue management system designed to streamline booking, tracking, and managing real-time queues for improved customer experience.",
    impact: "Designed a real-time state synchronization system for live physical operations. Shows strong product-thinking and state architecture.",
    technologies: ["React", "Firebase", "Node.js", "Express", "Tailwind CSS"],
    githubUrl: "https://github.com/Harshitha9407/SmartQ",
    layout: "tier-3",
  },
  {
    id: "06",
    title: "INTELLIMAIL",
    subtitle: "AI-POWERED INBOX ORGANIZATION",
    description: "An intelligent email productivity tool that leverages AI to organize, summarize, and prioritize inboxes for improved workflow efficiency.",
    impact: "Integrated LLM capabilities into a functional productivity tool, demonstrating the ability to ship AI-augmented products rather than just prototypes.",
    technologies: ["Next.js", "React", "Node.js", "OpenAI API", "PostgreSQL"],
    githubUrl: "https://github.com/Harshitha9407/IntelliMail",
    layout: "tier-2",
  },
  {
    id: "07",
    title: "CODE EDITOR",
    subtitle: "WEB-BASED DEVELOPER WORKSPACE",
    description: "A web-based developer workspace featuring real-time code editing, file structure navigation, and live execution environments.",
    impact: "Constructed a complex in-browser IDE utilizing Monaco and Docker sandboxing. Validates deep understanding of developer tooling and containerization.",
    technologies: ["React", "Monaco", "Node.js", "Docker", "WebSockets"],
    githubUrl: "https://github.com/Harshitha9407/CodeEditor",
    layout: "tier-3",
  }
];

// ============================================================================
// CLEAN VISUALIZATION COMPONENTS
// ============================================================================

const FlowForgeVisual = () => {
  return (
    <div className="relative w-full h-[350px] lg:h-[500px] bg-[#0A0F18] overflow-hidden rounded-xl border border-white/10 group-hover/project:border-[#C8A45D]/50 transition-all duration-700 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
      
      {/* Deep Space Grid Canvas */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />
      
      {/* Panning Canvas Wrapper */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        animate={{ backgroundPosition: ["0px 0px", "-30px -30px"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0F18_80%)] z-10" />
      </motion.div>

      {/* SVG Connection Lines (Bezier Curves) */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.1))" }}>
         {/* Base Lines */}
         <path d="M 80 150 C 140 150, 140 150, 200 150" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />
         <path d="M 200 150 C 260 150, 260 80, 320 80" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />
         <path d="M 200 150 C 260 150, 260 220, 320 220" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />
         <path d="M 320 80 C 380 80, 380 150, 440 150" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />
         
         {/* Animated Active Route (Top) */}
         <motion.path 
           d="M 80 150 C 140 150, 140 150, 200 150 C 260 150, 260 80, 320 80 C 380 80, 380 150, 440 150" 
           fill="none" 
           stroke="#C8A45D" 
           strokeWidth="2"
           strokeDasharray="6 6"
           animate={{ strokeDashoffset: [24, 0] }}
           transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
         />

         {/* Glowing Data Packets traveling the path */}
         <motion.circle r="3" fill="#ffffff" filter="drop-shadow(0 0 8px #ffffff)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 80 150 C 140 150, 140 150, 200 150 C 260 150, 260 80, 320 80 C 380 80, 380 150, 440 150" />
         </motion.circle>
         <motion.circle r="4" fill="#C8A45D" filter="drop-shadow(0 0 10px #C8A45D)">
            <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M 80 150 C 140 150, 140 150, 200 150 C 260 150, 260 80, 320 80 C 380 80, 380 150, 440 150" />
         </motion.circle>
      </svg>

      {/* HTML Nodes (Highly Styled) */}
      <div className="absolute inset-0 z-20">
         {/* Node 1: Webhook Trigger */}
         <motion.div className="absolute top-[130px] left-[20px] bg-[#111B27]/90 backdrop-blur-md border border-[#22C55E]/30 rounded-lg p-2.5 flex items-center gap-3 shadow-lg hover:border-[#22C55E] hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all cursor-crosshair">
            <div className="w-8 h-8 rounded bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center">
               <div className="w-3 h-3 bg-[#22C55E] rounded-sm animate-pulse" />
            </div>
            <div>
               <div className="text-[10px] font-mono text-white font-bold tracking-widest">WEBHOOK</div>
               <div className="text-[8px] font-mono text-gray-500">api/v1/trigger</div>
            </div>
         </motion.div>

         {/* Node 2: Data Validation */}
         <motion.div className="absolute top-[130px] left-[160px] bg-[#111B27]/90 backdrop-blur-md border border-[#EAB308]/30 rounded-lg p-2.5 flex items-center gap-3 shadow-lg hover:border-[#EAB308] hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] transition-all cursor-crosshair">
            <div className="w-8 h-8 rounded bg-[#EAB308]/10 border border-[#EAB308]/30 flex items-center justify-center">
               <svg className="w-4 h-4 text-[#EAB308]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <div>
               <div className="text-[10px] font-mono text-white font-bold tracking-widest">VALIDATE</div>
               <div className="text-[8px] font-mono text-gray-500">JSON Schema</div>
            </div>
            {/* Port indicators */}
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#111B27] border border-[#EAB308] rounded-full" />
            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#111B27] border border-gray-600 rounded-full" />
         </motion.div>

         {/* Node 3: AI Processing (Top Route) */}
         <motion.div className="absolute top-[60px] left-[300px] bg-[#111B27]/90 backdrop-blur-md border border-[#C8A45D]/50 rounded-lg p-2.5 flex items-center gap-3 shadow-lg hover:border-[#C8A45D] hover:shadow-[0_0_15px_rgba(200,164,93,0.3)] transition-all cursor-crosshair z-30 group/node">
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-[#111B27] animate-pulse" />
            <div className="w-8 h-8 rounded bg-[#C8A45D]/10 border border-[#C8A45D]/30 flex items-center justify-center">
               <svg className="w-4 h-4 text-[#C8A45D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div>
               <div className="text-[10px] font-mono text-white font-bold tracking-widest">GEMINI LLM</div>
               <div className="text-[8px] font-mono text-[#C8A45D]">Processing...</div>
            </div>
            {/* Hover Tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/node:opacity-100 transition-opacity bg-black border border-[#C8A45D]/40 text-[#C8A45D] text-[9px] font-mono px-3 py-1 rounded whitespace-nowrap pointer-events-none">
              Latency: 42ms | Tokens: 128
            </div>
         </motion.div>

         {/* Node 4: Manual Fallback (Bottom Route) */}
         <motion.div className="absolute top-[200px] left-[300px] bg-[#111B27]/90 backdrop-blur-md border border-gray-700 rounded-lg p-2.5 flex items-center gap-3 shadow-lg opacity-60 hover:opacity-100 transition-all cursor-crosshair">
            <div className="w-8 h-8 rounded bg-gray-800 border border-gray-600 flex items-center justify-center">
               <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <div>
               <div className="text-[10px] font-mono text-gray-300 font-bold tracking-widest">HUMAN REVIEW</div>
               <div className="text-[8px] font-mono text-gray-500">Condition: False</div>
            </div>
         </motion.div>

         {/* Node 5: Postgres Save */}
         <motion.div className="absolute top-[130px] left-[440px] bg-[#111B27]/90 backdrop-blur-md border border-[#3B82F6]/30 rounded-lg p-2.5 flex items-center gap-3 shadow-lg hover:border-[#3B82F6] transition-all cursor-crosshair">
            <div className="w-8 h-8 rounded bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center">
               <svg className="w-4 h-4 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
            </div>
            <div>
               <div className="text-[10px] font-mono text-white font-bold tracking-widest">DB SYNC</div>
               <div className="text-[8px] font-mono text-gray-500">PostgreSQL</div>
            </div>
         </motion.div>
      </div>

      {/* UI Overlay: Execution Logs HUD */}
      <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg p-3 z-30 w-48 shadow-2xl">
         <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/5">
            <span className="text-[9px] font-mono text-gray-400">ENGINE STATUS</span>
            <span className="flex items-center gap-1 text-[9px] font-mono text-green-400"><div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" /> ONLINE</span>
         </div>
         <div className="space-y-1.5 font-mono text-[8px] text-gray-300">
            <div className="flex justify-between"><span>DAGs Active:</span><span className="text-white">1,204</span></div>
            <div className="flex justify-between"><span>Event QPS:</span><span className="text-white">450/s</span></div>
            <div className="flex justify-between"><span>P99 Latency:</span><span className="text-[#C8A45D]">12ms</span></div>
         </div>
      </div>
      
      {/* UI Overlay: Toolbar */}
      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg p-1.5 z-30 flex gap-1">
         <div className="w-6 h-6 rounded flex items-center justify-center hover:bg-white/10 text-white/50 cursor-pointer"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg></div>
         <div className="w-6 h-6 rounded flex items-center justify-center hover:bg-white/10 text-white/50 cursor-pointer"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"></path></svg></div>
         <div className="w-px h-6 bg-white/10 mx-1" />
         <div className="w-6 h-6 rounded flex items-center justify-center hover:bg-white/10 text-white/50 cursor-pointer"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
      </div>
    </div>
  );
};

const HealthVisual = () => (
  <div className="relative w-full h-full min-h-[220px] sm:min-h-[300px] lg:min-h-[450px] bg-[#0A0F18] overflow-hidden rounded-xl border border-white/10 group-hover/project:border-[#06b6d4] transition-all duration-700 shadow-2xl flex items-center justify-center gap-4 md:gap-8 p-4 sm:p-6">
      <div className="relative w-[110px] sm:w-[140px] md:w-[180px] h-[220px] sm:h-[280px] md:h-[360px] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl border-[2px] md:border-[4px] border-[#161B22] group-hover/project:-translate-y-4 group-hover/project:rotate-[-2deg] transition-all duration-700">
         <Image src="/images/mobile_1.png" alt="App Screen 1" fill className="object-cover" />
      </div>
      <div className="relative w-[110px] sm:w-[140px] md:w-[180px] h-[220px] sm:h-[280px] md:h-[360px] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl border-[2px] md:border-[4px] border-[#161B22] mt-8 md:mt-12 group-hover/project:translate-y-4 group-hover/project:rotate-[2deg] transition-all duration-700">
         <Image src="/images/mobile_2.png" alt="App Screen 2" fill className="object-cover" />
      </div>
  </div>
);

const FocusTubeVisual = () => (
  <div className="w-full h-[400px] lg:h-[500px] bg-[#0F0F0F] rounded-xl border border-white/10 flex flex-col overflow-hidden relative group-hover/project:border-red-500 transition-all duration-700 shadow-lg text-white font-sans">
    
    {/* YouTube Top Navbar */}
    <div className="h-12 border-b border-[#272727] flex items-center justify-between px-4 bg-[#0F0F0F] z-20 shrink-0">
      <div className="flex items-center gap-4">
         <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
         <div className="flex items-center gap-1">
           <div className="w-6 h-4 bg-red-600 rounded flex items-center justify-center">
             <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-white border-b-[3px] border-b-transparent ml-0.5" />
           </div>
           <span className="font-bold text-sm tracking-tighter">YouTube</span>
         </div>
      </div>
      
      {/* Search Bar */}
      <div className="hidden sm:flex items-center w-1/3 max-w-md h-8 bg-[#121212] border border-[#303030] rounded-full overflow-hidden">
        <input type="text" placeholder="Search" className="flex-1 bg-transparent border-none outline-none text-xs px-4 text-gray-300 placeholder-gray-500" disabled />
        <div className="w-12 h-full bg-[#222222] border-l border-[#303030] flex items-center justify-center cursor-not-allowed">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-1 bg-[#272727] px-2 py-1 rounded-full cursor-not-allowed hover:bg-[#3F3F3F]">
           <span className="text-xl leading-none">+</span>
           <span className="text-xs font-bold px-1">Create</span>
        </div>
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">HG</div>
      </div>
    </div>

    {/* Main Body */}
    <div className="flex-1 flex overflow-hidden relative">
      
      {/* Video Column */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 overflow-hidden">
        
        {/* Video Player */}
        <div className="w-full aspect-video max-h-[60%] bg-[#000] relative rounded-xl border border-white/10 overflow-hidden flex flex-col">
           {/* Fake Video Content: VS Code window */}
           <div className="flex-1 bg-[#1E1E1E] flex flex-col relative m-0">
             
             {/* VS Code Tabs */}
             <div className="h-6 bg-[#252526] flex items-center px-2 border-b border-[#1E1E1E]">
               <div className="flex items-center gap-2 bg-[#1E1E1E] px-3 py-1 border-t border-[#007ACC] h-full text-[9px] text-white font-mono">
                 <span className="text-blue-400">⚛</span> Contact.jsx
               </div>
             </div>
             
             {/* VS Code Editor */}
             <div className="flex-1 p-3 sm:p-4 font-mono text-[9px] sm:text-xs text-gray-300 leading-relaxed overflow-hidden">
               <div className="flex"><span className="text-gray-600 mr-4">1</span><span className="text-pink-400">import</span> <span className="text-blue-300">React</span> <span className="text-pink-400">from</span> <span className="text-orange-300">'react'</span></div>
               <div className="flex"><span className="text-gray-600 mr-4">2</span></div>
               <div className="flex"><span className="text-gray-600 mr-4">3</span><span className="text-blue-400">const</span> <span className="text-yellow-200">Contact</span> <span className="text-blue-400">=</span> () <span className="text-blue-400">=&gt;</span> {'{'}</div>
               <div className="flex"><span className="text-gray-600 mr-4">4</span>&nbsp;&nbsp;<span className="text-pink-400">return</span> (</div>
               <div className="flex"><span className="text-gray-600 mr-4">5</span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-300">div</span>&gt;<span className="bg-blue-500/30 text-white px-1">Contact</span>&lt;/<span className="text-blue-300">div</span>&gt;</div>
               <div className="flex"><span className="text-gray-600 mr-4">6</span>&nbsp;&nbsp;)</div>
               <div className="flex"><span className="text-gray-600 mr-4">7</span>{'}'}</div>
               <div className="flex"><span className="text-gray-600 mr-4">8</span></div>
               <div className="flex"><span className="text-gray-600 mr-4">9</span><span className="text-pink-400">export default</span> <span className="text-yellow-200 bg-gray-700/50 px-1">Contact</span></div>
             </div>

             {/* Facecam Picture-in-Picture */}
             <div className="absolute bottom-4 right-4 w-20 h-14 sm:w-28 sm:h-20 bg-gray-800 rounded-lg border-2 border-white/20 overflow-hidden shadow-lg z-10 flex items-end justify-center pb-1">
               <div className="w-8 h-8 rounded-full bg-orange-200 relative">
                 {/* Simple avatar representation */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-300 rounded-full" />
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-3 bg-orange-300 rounded-t-full" />
               </div>
             </div>
             
             {/* Progress bar */}
             <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <motion.div className="h-full bg-red-600" initial={{ width: "30%" }} animate={{ width: "100%" }} transition={{ duration: 30, ease: "linear" }} />
             </div>
           </div>
        </div>

        {/* Video Info Area */}
        <div className="mt-4 shrink-0">
          <h3 className="font-bold text-[13px] sm:text-base leading-tight mb-2 truncate">ReactJS Full Course | ReactJS - Learn Everything | Sheryians Coding School</h3>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
            
            {/* Channel Info */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                <span className="text-xs font-bold">SC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold">Sheryians Coding School <span className="text-gray-400 text-[10px] ml-1">✔</span></span>
                <span className="text-[10px] text-gray-400">458K subscribers</span>
              </div>
              <button className="ml-2 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors">Subscribe</button>
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
              <div className="flex items-center bg-[#272727] rounded-full">
                <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-[#3F3F3F] rounded-l-full transition-colors border-r border-[#3F3F3F]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                  <span className="text-xs font-bold">15K</span>
                </button>
                <button className="px-3 py-1.5 hover:bg-[#3F3F3F] rounded-r-full transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path></svg>
                </button>
              </div>
              <button className="flex items-center gap-1.5 bg-[#272727] hover:bg-[#3F3F3F] px-3 py-1.5 rounded-full transition-colors whitespace-nowrap">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.632l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                <span className="text-xs font-bold">Share</span>
              </button>
              <button className="flex items-center gap-1.5 bg-[#272727] hover:bg-[#3F3F3F] px-3 py-1.5 rounded-full transition-colors whitespace-nowrap">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                <span className="text-xs font-bold">Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Extension Overlay: FocusTube Floating Panel */}
      <motion.div 
        className="absolute top-6 right-6 w-56 bg-white text-black p-3 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-gray-200 z-50 flex flex-col hidden sm:flex"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-bold text-xs">Focus Mode Active</span>
        </div>
        
        <p className="text-[10px] text-gray-600 mb-3 leading-tight border-b border-gray-200 pb-2">
          Recommendations hidden - Stay on track
        </p>
        
        <div className="grid grid-cols-2 gap-y-1 gap-x-2 text-[9px] font-mono">
          <span className="text-gray-500">Focus:</span>
          <span className="text-right font-bold">30 mins</span>
          
          <span className="text-gray-500">Time:</span>
          <span className="text-right font-bold">2 hrs</span>
          
          <span className="text-gray-500">Network:</span>
          <span className="text-right font-bold text-green-600">0</span>
          
          <span className="text-gray-500">Blocked:</span>
          <span className="text-right font-bold text-red-600">12</span>
          
          <span className="text-gray-500">Distractions:</span>
          <span className="text-right font-bold text-orange-500">15</span>
        </div>
        
        <div className="mt-3 w-full h-8 bg-red-50 text-red-600 border border-red-100 rounded flex items-center justify-center text-[10px] font-bold cursor-pointer hover:bg-red-100 transition-colors">
          Exit Focus Mode
        </div>
      </motion.div>
      
    </div>
  </div>
);

const ChatVisual = () => (
  <div className="w-full h-[400px] lg:h-[500px] bg-white rounded-xl border border-gray-200 flex overflow-hidden relative group-hover/project:border-blue-500 transition-all duration-700 shadow-md font-sans text-gray-800">
    
    {/* Left Sidebar - Channels & Users */}
    <div className="w-[180px] sm:w-[240px] bg-[#f8f9fa] border-r border-gray-200 flex flex-col h-full shrink-0">
      {/* App Header */}
      <div className="h-14 border-b border-gray-200 flex items-center px-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs">RC</div>
          <span className="font-bold text-sm text-gray-800">RealTime Chat</span>
        </div>
      </div>
      
      {/* Channels */}
      <div className="p-3">
        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 px-1">Channels</div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-2 py-1.5 rounded cursor-pointer">
            <span className="text-blue-500 text-lg leading-none">#</span>
            <span className="text-xs font-medium">public-chat</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 px-2 py-1.5 rounded cursor-pointer transition-colors">
            <span className="text-gray-400 text-lg leading-none">#</span>
            <span className="text-xs font-medium">announcements</span>
          </div>
        </div>
      </div>
      
      {/* Active Users */}
      <div className="p-3 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between px-1 mb-2">
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Online Users</div>
          <div className="text-[9px] bg-green-100 text-green-700 px-1.5 rounded-full font-bold">3</div>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Harshitha G.", role: "Admin", status: "online", bg: "bg-purple-100 text-purple-700" },
            { name: "Alex Kumar", role: "Developer", status: "online", bg: "bg-blue-100 text-blue-700" },
            { name: "Sarah J.", role: "Designer", status: "away", bg: "bg-orange-100 text-orange-700" }
          ].map((user, i) => (
            <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="relative">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${user.bg}`}>
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[#f8f9fa] ${user.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-gray-800 truncate">{user.name}</div>
                <div className="text-[9px] text-gray-500 truncate">{user.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* User Profile Area */}
      <div className="p-3 border-t border-gray-200 shrink-0 flex items-center gap-2 bg-white">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-xs">HG</div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-bold text-gray-800 truncate">Harshitha9407</div>
          <div className="text-[9px] text-green-600 font-medium">Online</div>
        </div>
      </div>
    </div>

    {/* Main Chat Area */}
    <div className="flex-1 flex flex-col bg-white relative">
      
      {/* Top Navbar */}
      <div className="h-14 border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 shrink-0 bg-white shadow-sm z-10">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-xl leading-none">#</span>
          <span className="font-bold text-gray-800">public-chat</span>
        </div>
        
        {/* Connection Status Mockup */}
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 px-2 py-1 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] font-mono font-medium text-green-700">Connected to /ws (STOMP)</span>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-6 bg-[#fafafa]">
        
        {/* System Message (User Join) */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-full h-px bg-gray-200 flex-1" />
          <span className="text-[10px] text-gray-500 font-medium">Alex Kumar joined the channel via /app/chat.addUser</span>
          <div className="w-full h-px bg-gray-200 flex-1" />
        </div>
        
        {/* Message Received */}
        <div className="flex gap-3 max-w-[85%]">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-1">AK</div>
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-bold text-gray-800">Alex Kumar</span>
              <span className="text-[10px] text-gray-500">10:42 AM</span>
            </div>
            <div className="bg-white border border-gray-200 text-gray-700 text-sm p-3 rounded-lg rounded-tl-none shadow-sm leading-relaxed">
              Hey everyone! Just testing the new WebSocket connection. The latency is practically zero now! 🚀
            </div>
          </div>
        </div>
        
        {/* Message Sent */}
        <div className="flex gap-3 max-w-[85%] self-end flex-row-reverse">
          <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-bold text-xs shrink-0 mt-1">HG</div>
          <div className="flex flex-col gap-1 items-end">
            <div className="flex items-baseline gap-2 flex-row-reverse">
              <span className="text-sm font-bold text-gray-800">You</span>
              <span className="text-[10px] text-gray-500">10:43 AM</span>
            </div>
            <div className="bg-blue-600 text-white text-sm p-3 rounded-lg rounded-tr-none shadow-sm leading-relaxed text-right">
              That's fantastic! The Spring Boot STOMP broker is handling the bi-directional messaging perfectly. Let's try broadcasting to /topic/public.
            </div>
          </div>
        </div>
        
        {/* Live Typing Indicator */}
        <div className="flex gap-3 max-w-[85%]">
          <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs shrink-0">SJ</div>
          <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg rounded-tl-none shadow-sm flex items-center gap-1.5 h-10">
            <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
            <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
            <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
          </div>
        </div>
        
      </div>
      
      {/* Chat Input Field */}
      <div className="p-4 bg-white border-t border-gray-200 shrink-0">
        <div className="w-full bg-gray-50 border border-gray-300 rounded-lg flex items-center p-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          </button>
          <input type="text" placeholder="Message #public-chat..." className="flex-1 bg-transparent border-none outline-none text-sm px-2 text-gray-700" disabled />
          <button className="w-8 h-8 rounded bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors">
            <svg className="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
        </div>
        <div className="text-[9px] text-gray-400 text-center mt-2 font-mono">
          Sending message to endpoint: <span className="text-blue-500">/app/chat.sendMessage</span>
        </div>
      </div>
      
    </div>
  </div>
);

const IntelliMailVisual = () => (
  <div className="w-full h-[400px] lg:h-[500px] bg-[#f5f5f5] rounded-xl border border-gray-300 flex flex-col overflow-hidden relative group-hover/project:border-blue-500 transition-all duration-700 shadow-md font-sans text-gray-800">
    
    {/* MUI App Bar */}
    <div className="h-16 bg-[#1976d2] shadow-md flex items-center justify-between px-6 z-20 shrink-0 text-white">
      <div className="flex items-center gap-3">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        <span className="text-xl font-medium tracking-wide">IntelliMail</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full hidden sm:block">Powered by Gemini 2.5-flash</span>
        <div className="w-8 h-8 rounded-full bg-white text-[#1976d2] flex items-center justify-center font-bold text-sm shadow">H</div>
      </div>
    </div>

    {/* Main Application Body */}
    <div className="flex-1 flex justify-center p-4 sm:p-8 overflow-hidden bg-[#f0f2f5] relative">
      
      {/* Container / Card */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col overflow-hidden h-full">
        
        <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col gap-4 overflow-y-auto">
          
          <h2 className="text-lg font-medium text-gray-800">AI Email Reply Generator</h2>
          
          {/* Input Section */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Original Email Content</label>
            <div className="w-full rounded border border-gray-300 p-3 bg-gray-50 text-sm text-gray-700 focus-within:border-[#1976d2] focus-within:ring-1 focus-within:ring-[#1976d2] transition-all">
              <p className="opacity-80">Hi Team,<br/><br/>Just checking in on the status of the Q3 marketing report. Do we have an ETA on when it will be ready for review?<br/><br/>Best,<br/>Sarah</p>
            </div>
          </div>
          
          {/* Controls Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end mt-2">
            <div className="flex flex-col gap-2 w-full sm:w-1/2">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Tone</label>
              <div className="w-full h-10 border border-gray-300 rounded flex items-center justify-between px-3 cursor-pointer hover:bg-gray-50">
                <span className="text-sm text-gray-700">Professional</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
            
            <button className="w-full sm:w-auto h-10 px-6 bg-[#1976d2] hover:bg-[#1565c0] text-white rounded shadow-sm text-sm font-medium tracking-wide transition-colors uppercase flex items-center justify-center gap-2">
              <span>Generate Reply</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </button>
          </div>

          <hr className="my-2 border-gray-100" />
          
          {/* Output Section */}
          <div className="flex flex-col gap-2 relative flex-1 min-h-[120px]">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-green-600 uppercase tracking-wider flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Generated Response
              </label>
              <button className="text-xs text-[#1976d2] font-medium flex items-center gap-1 hover:underline">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                COPY TO CLIPBOARD
              </button>
            </div>
            <div className="flex-1 w-full rounded border-2 border-green-100 p-4 bg-green-50/30 text-sm text-gray-800 relative group">
              <p>Hi Sarah,<br/><br/>Thank you for following up. The Q3 marketing report is currently undergoing final review. We are on track to have it ready for your review by the end of the day tomorrow.<br/><br/>I will send it over as soon as it is finalized. Please let me know if you need anything else in the meantime.<br/><br/>Best regards,</p>
              
              {/* Typewriter Effect Overlay */}
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ left: "0%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 4, ease: "linear", delay: 1 }}
              />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Snackbar Mockup */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#323232] text-white px-4 py-2.5 rounded shadow-lg flex items-center gap-3 text-sm"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: [50, 0, 0, 50], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 5, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 2 }}
      >
        <span>Reply generated successfully</span>
      </motion.div>
      
    </div>
  </div>
);

const SmartQVisual = () => (
  <div className="w-full h-[400px] lg:h-[500px] bg-[#0A0F18] rounded-xl border border-white/10 flex overflow-hidden relative group-hover/project:border-green-500 transition-all duration-700 shadow-[0_0_40px_rgba(0,0,0,0.5)] items-center justify-center gap-10 p-10">
    
    {/* Data Sync Particles */}
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div 
         className="absolute top-1/2 left-[30%] right-[30%] h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" 
      />
      <motion.div 
         className="absolute top-1/2 left-[30%] w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_#4ADE80]"
         animate={{ x: [0, 200] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
         className="absolute top-1/2 left-[30%] w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_#4ADE80]"
         animate={{ x: [0, 200] }} transition={{ duration: 1, repeat: Infinity, delay: 0.5, ease: "linear" }}
      />
    </div>

    {/* Admin Display (Left) */}
    <div className="w-[45%] h-[70%] bg-[#111B27] border border-white/10 rounded-2xl flex flex-col items-center justify-center relative shadow-2xl z-10 group-hover/project:border-green-500/30 transition-colors hidden sm:flex">
       <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-[9px] text-gray-400">ADMIN DISPLAY</span>
       </div>
       
       <div className="font-mono text-[12px] text-green-500 tracking-widest uppercase mb-4">Now Serving</div>
       
       <motion.div 
         className="font-heading text-6xl lg:text-7xl font-bold text-white tracking-tighter"
         animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 1] }}
       >
         A-42
       </motion.div>
       
       <div className="mt-8 flex gap-2">
         <div className="w-10 h-1 bg-green-500 rounded" />
         <div className="w-4 h-1 bg-white/20 rounded" />
         <div className="w-4 h-1 bg-white/20 rounded" />
       </div>
    </div>

    {/* User Mobile Ticket (Right) */}
    <div className="w-[80%] sm:w-[30%] max-w-[200px] h-[85%] bg-black border-4 border-gray-800 rounded-[2rem] p-4 flex flex-col relative shadow-[0_0_30px_rgba(0,0,0,0.8)] z-10">
       <div className="w-16 h-4 bg-gray-800 mx-auto rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2" />
       
       <div className="flex-1 mt-6 bg-[#161B22] rounded-xl border border-white/5 p-4 flex flex-col items-center justify-center text-center">
         <svg className="w-8 h-8 text-green-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
         
         <div className="font-sans text-[10px] text-gray-400 mb-1">Your Ticket</div>
         <div className="font-heading text-3xl font-bold text-white mb-4">A-45</div>
         
         <div className="w-full h-px bg-white/10 mb-4" />
         
         <div className="font-mono text-[9px] text-gray-500 mb-1">ESTIMATED WAIT</div>
         <div className="font-mono text-[14px] text-green-400 font-bold mb-4">~12 MINS</div>
         
         <div className="w-full bg-green-500/10 border border-green-500/30 text-green-400 text-[9px] py-2 rounded uppercase tracking-widest animate-pulse">
           Live Sync Active
         </div>
       </div>
    </div>
  </div>
);

const EditorVisual = () => (
  <div className="w-full h-[400px] lg:h-[500px] bg-[#0A0F18] rounded-xl border border-white/10 flex flex-col overflow-hidden relative group-hover/project:border-[#C8A45D] transition-all duration-700 shadow-[0_0_40px_rgba(0,0,0,0.5)] font-mono">
    
    {/* Title Bar */}
    <div className="h-10 bg-[#010409] border-b border-white/10 flex items-center justify-between px-4 z-20">
       <div className="flex gap-2 items-center">
         <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_#ef4444]" />
         <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_#eab308]" />
         <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_#22c55e]" />
       </div>
       <div className="text-[10px] text-gray-400 flex-1 text-center">Cloud Workspace - Code Editor</div>
       <div className="flex gap-3 text-gray-500 text-[10px] hidden sm:flex">
          <span className="hover:text-white cursor-pointer transition-colors">Live Share</span>
          <span className="hover:text-white cursor-pointer transition-colors">Port: 3000</span>
       </div>
    </div>

    <div className="flex flex-1 overflow-hidden">
       {/* Sidebar / Explorer */}
       <div className="w-[140px] lg:w-[200px] bg-[#010409] border-r border-white/10 hidden sm:flex flex-col z-10 shadow-[5px_0_15px_rgba(0,0,0,0.5)]">
          <div className="text-[9px] text-gray-500 uppercase tracking-widest p-3 border-b border-white/5 font-bold">Explorer</div>
          <div className="p-2 space-y-1">
             <div className="flex items-center gap-2 text-[11px] text-gray-300 p-1 hover:bg-white/5 rounded cursor-pointer transition-colors">
                <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                <span>src</span>
             </div>
             <div className="flex items-center gap-2 text-[11px] text-[#C8A45D] bg-white/5 p-1 rounded cursor-pointer ml-4">
                <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <span>main.ts</span>
             </div>
             <div className="flex items-center gap-2 text-[11px] text-gray-400 p-1 hover:bg-white/5 rounded cursor-pointer ml-4 transition-colors">
                <svg className="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <span>engine.ts</span>
             </div>
             <div className="flex items-center gap-2 text-[11px] text-gray-300 p-1 hover:bg-white/5 rounded cursor-pointer mt-2 transition-colors">
                <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/></svg>
                <span>Dockerfile</span>
             </div>
             <div className="flex items-center gap-2 text-[11px] text-gray-300 p-1 hover:bg-white/5 rounded cursor-pointer transition-colors">
                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/></svg>
                <span>package.json</span>
             </div>
          </div>
       </div>

       {/* Editor Core */}
       <div className="flex-1 flex flex-col bg-[#0D1117] relative">
          {/* Editor Tabs */}
          <div className="flex bg-[#010409]">
             <div className="px-4 py-2 bg-[#0D1117] text-[#C8A45D] text-[11px] border-t-2 border-[#C8A45D] border-r border-white/5 flex items-center gap-2">
                <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                main.ts
             </div>
             <div className="px-4 py-2 text-gray-500 text-[11px] border-r border-white/5 hover:bg-[#0D1117]/50 flex items-center gap-2 cursor-pointer transition-colors">
                <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/></svg>
                Dockerfile
             </div>
          </div>

          {/* Code Area */}
          <div className="flex-1 flex overflow-hidden relative">
             <div className="w-10 bg-[#0D1117] border-r border-white/5 flex flex-col items-end py-4 pr-2 gap-1 text-[11px] text-gray-600 select-none hidden sm:flex">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
             </div>
             <div className="flex-1 p-4 text-[12px] sm:text-[14px] leading-relaxed relative overflow-hidden">
                <motion.div 
                   className="absolute left-4 top-4 text-gray-300"
                   initial={{ opacity: 0.8 }}
                >
                   <p><span className="text-pink-500">import</span> {'{'} Engine {'}'} <span className="text-pink-500">from</span> <span className="text-green-400">'./engine'</span>;</p>
                   <p><span className="text-pink-500">import</span> {'{'} DockerSandbox {'}'} <span className="text-pink-500">from</span> <span className="text-green-400">'@cloud/sandbox'</span>;</p>
                   <br/>
                   <p><span className="text-blue-400">async function</span> <span className="text-yellow-200">initializeWorkspace</span>() {'{'}</p>
                   <p>&nbsp;&nbsp;<span className="text-pink-500">const</span> system = <span className="text-pink-500">new</span> <span className="text-yellow-200">Engine</span>();</p>
                   <p>&nbsp;&nbsp;<span className="text-pink-500">const</span> container = <span className="text-pink-500">await</span> <span className="text-yellow-200">DockerSandbox</span>.<span className="text-blue-300">create</span>({'{'}</p>
                   <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-200">image</span>: <span className="text-green-400">'node:18-alpine'</span>,</p>
                   <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-200">memory</span>: <span className="text-orange-400">512</span>,</p>
                   <p>&nbsp;&nbsp;{'}'});</p>
                   
                   {/* Typing effect */}
                   <div className="flex items-center">
                     <span>&nbsp;&nbsp;</span>
                     <motion.span 
                        initial={{ display: "none" }}
                        animate={{ display: "inline" }}
                        transition={{ delay: 2 }}
                     >
                        <span className="text-pink-500">await</span> system.<span className="text-blue-300">attach</span>(container);
                     </motion.span>
                     <motion.div className="w-1.5 h-[14px] sm:h-[16px] bg-[#C8A45D] ml-0.5 animate-pulse shadow-[0_0_8px_#C8A45D]" />
                   </div>
                   
                   <p>{'}'}</p>
                </motion.div>
             </div>
             
             {/* Minimap (Visual Only) */}
             <div className="w-[60px] border-l border-white/5 hidden lg:block opacity-40 relative p-1.5 overflow-hidden group-hover/project:opacity-60 transition-opacity duration-700">
                <div className="w-3/4 h-1 bg-pink-500/40 mb-1 rounded" />
                <div className="w-5/6 h-1 bg-pink-500/40 mb-3 rounded" />
                <div className="w-1/2 h-1 bg-blue-400/40 mb-1 rounded" />
                <div className="w-2/3 h-1 bg-pink-500/40 ml-2 mb-1 rounded" />
                <div className="w-3/4 h-1 bg-pink-500/40 ml-2 mb-1 rounded" />
                <div className="w-1/2 h-1 bg-blue-200/40 ml-4 mb-1 rounded" />
                <div className="w-1/3 h-1 bg-blue-200/40 ml-4 mb-1 rounded" />
                <div className="absolute top-1 left-0 w-full h-[30px] bg-white/5 border border-white/10 rounded" />
             </div>
          </div>

          {/* Integrated Terminal */}
          <div className="h-[130px] lg:h-[160px] bg-[#0A0F18] border-t border-white/10 flex flex-col z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
             <div className="flex gap-6 px-4 py-2 border-b border-white/5 text-[9px] uppercase tracking-widest text-gray-500 bg-[#010409]">
                <span className="hover:text-white cursor-pointer transition-colors hidden sm:block">Problems</span>
                <span className="hover:text-white cursor-pointer transition-colors hidden sm:block">Output</span>
                <span className="text-white border-b-2 border-white pb-2 cursor-pointer">Terminal</span>
             </div>
             <div className="p-3 font-mono text-[10px] sm:text-[11px] text-gray-300 overflow-hidden relative leading-relaxed">
                <p className="text-blue-400 font-bold">~/workspace $ <span className="text-white">docker build -t dev-env .</span></p>
                <motion.div 
                   initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                >
                  <p className="text-gray-400">Sending build context to Docker daemon  2.048kB</p>
                  <p className="text-gray-400">Step 1/4 : FROM node:18-alpine</p>
                  <p className="text-green-400"> ---&gt; 7a6t5y4u3i2o</p>
                </motion.div>
                <motion.div 
                   initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }}
                >
                  <p className="text-gray-400">Step 2/4 : WORKDIR /app</p>
                  <p className="text-green-400"> ---&gt; Running in 8b7v6c5x4z3</p>
                </motion.div>
                <motion.div className="w-2 h-3 bg-gray-400 mt-1 animate-pulse" />
             </div>
          </div>
       </div>
    </div>
  </div>
);


// ============================================================================
// MAIN SECTION
// ============================================================================

export function Projects() {
  const renderVisual = (id: string) => {
    switch (id) {
      case "01": return <FlowForgeVisual />;
      case "02": return <HealthVisual />;
      case "03": return <FocusTubeVisual />;
      case "04": return <ChatVisual />;
      case "05": return <SmartQVisual />;
      case "06": return <IntelliMailVisual />;
      case "07": return <EditorVisual />;
      default: return null;
    }
  };

  return (
    <section id="projects" className="relative w-full bg-[#0A0F18] pt-24 pb-40 border-t border-white/5">
      
      {/* Clean, Aligned Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="flex flex-col gap-4 max-w-3xl">
           <h2 className="text-[12px] font-mono text-[#7567B5] tracking-[0.4em] uppercase">02 / SELECTED WORKS</h2>
           <h3 className="text-5xl md:text-6xl lg:text-7xl font-heading text-[#ECE6DA] tracking-tighter uppercase font-extrabold">
             PROJECTS
           </h3>
           <p className="text-base md:text-lg text-[#ECE6DA] font-medium leading-relaxed mt-4">
             "Things I've built to understand, solve and ship real problems."
           </p>
           <p className="font-mono text-[11px] md:text-[12px] text-[#A99CC8] tracking-widest uppercase mt-2">
             From workflow orchestration to mobile products and developer tools.
           </p>
        </div>
      </div>

      {/* Structured Project List */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-24 lg:gap-32">
         
         {PROJECTS_DATA.map((project, index) => {
           const isTier1 = project.layout === "tier-1";
           
           return (
             <motion.div 
               key={project.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className={`group/project relative flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
             >
                {/* Project Info Block */}
                <div className="flex flex-col lg:w-[45%] w-full z-10">
                   
                   <div className="flex items-center gap-4 mb-5">
                      <span className="font-mono text-2xl text-[#7567B5]">{project.id}</span>
                      <div className="h-px w-16 bg-white/20" />
                   </div>
                   
                   <h4 className="font-heading text-4xl md:text-5xl text-[#ECE6DA] font-bold tracking-tight mb-3">
                     {project.title}
                   </h4>
                   <h5 className="font-mono text-[11px] md:text-[12px] text-[#C8A45D] tracking-widest uppercase mb-8">
                     {project.subtitle}
                   </h5>
                   
                   {/* Clean Recruiter Impact Statement */}
                   <div className="mb-6 pl-5 border-l-4 border-[#C8A45D] bg-[#161B22]/50 p-4 rounded-r-lg">
                      <p className="text-base md:text-lg text-white font-bold leading-relaxed shadow-sm">
                        {project.impact}
                      </p>
                   </div>
                   
                   <p className="text-sm md:text-base text-[#A99CC8] leading-relaxed mb-10 font-light block opacity-90">
                     {project.description}
                   </p>

                   {/* Technology Tokens */}
                   <div className="flex flex-wrap gap-3 mb-10">
                      {project.technologies.map(tech => (
                        <span key={tech} className="font-mono text-[11px] px-4 py-2 bg-[#161B22] border border-white/10 rounded-md text-[#ECE6DA]">
                          {tech}
                        </span>
                      ))}
                   </div>

                   {/* Action Buttons */}
                   <div className="mt-auto">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#7567B5]/10 border border-[#7567B5]/50 rounded-lg font-mono text-[12px] text-[#ECE6DA] hover:bg-[#7567B5]/20 hover:border-[#7567B5] transition-all duration-300"
                      >
                        VIEW GITHUB REPOSITORY ↗
                      </a>
                   </div>
                </div>

                {/* Visual Artifact */}
                <div className={`lg:w-[55%] w-full overflow-hidden relative rounded-xl ${
                  (project.id === "02" || project.id === "05")
                    ? "h-auto lg:min-h-[500px]"
                    : "h-[220px] sm:h-[300px] md:h-[400px] lg:min-h-[500px] lg:h-auto"
                }`}>
                   <div className={`top-0 left-0 lg:w-full origin-top-left transition-transform duration-300 ${
                     (project.id === "02" || project.id === "05") 
                       ? "relative w-full h-full scale-100" 
                       : "absolute lg:relative w-[900px] scale-[0.38] sm:scale-[0.55] md:scale-[0.8] lg:scale-100"
                   }`}>
                     {renderVisual(project.id)}
                   </div>
                </div>

             </motion.div>
           );
         })}
      </div>
      
    </section>
  );
}
