"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function Cursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Use MotionValues for optimal performance and correct spring tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springing for the cursor
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      // Update motion values directly (avoids React state re-renders for every pixel)
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      
      // Check if hovering over clickable elements
      const isClickable = window.getComputedStyle(target).cursor === "pointer" || 
                          target.tagName.toLowerCase() === 'a' || 
                          target.tagName.toLowerCase() === 'button' ||
                          target.closest('a') || 
                          target.closest('button');
      
      setIsPointer(!!isClickable);

      // Check for specific data-cursor attributes for text
      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || "");
      } else {
        setCursorText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference hidden md:flex"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%"
      }}
    >
      <motion.div
        animate={{
          width: cursorText ? 64 : isPointer ? 32 : 12,
          height: cursorText ? 64 : isPointer ? 32 : 12,
          backgroundColor: cursorText ? "rgba(255,255,255,1)" : "rgba(255,255,255,1)",
          opacity: cursorText ? 1 : isPointer ? 0.5 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-full flex items-center justify-center text-black font-mono text-[9px] font-bold tracking-widest text-center uppercase"
      >
        {cursorText && (
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}



