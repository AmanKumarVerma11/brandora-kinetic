import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ProcessLineProps {
  className?: string;
}

export const ProcessLine = ({ className = "" }: ProcessLineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay to ensure ref is attached
    const timer = setTimeout(() => {
      if (ref.current) {
        setIsMounted(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Use viewport scroll without target to avoid hydration issues
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={`absolute left-0 right-0 h-1 ${className}`}>
      <div className="absolute inset-0 bg-border/30 rounded-full" />
      <motion.div
        className="absolute inset-0 rounded-full origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, hsl(var(--electric-blue)), hsl(var(--safety-orange)), hsl(var(--vivid-red)))",
        }}
      />
    </div>
  );
};