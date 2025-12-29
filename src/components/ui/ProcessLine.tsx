import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProcessLineProps {
  className?: string;
}

export const ProcessLine = ({ className = "" }: ProcessLineProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

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