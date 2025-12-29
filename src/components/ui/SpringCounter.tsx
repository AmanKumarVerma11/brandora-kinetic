import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface SpringCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const SpringCounter = ({ 
  value, 
  suffix = "", 
  prefix = "", 
  className = "",
}: SpringCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Spring-like easing with overshoot
      const overshoot = 1.1;
      const eased = progress < 1 
        ? 1 - Math.pow(1 - progress, 4) * Math.cos(progress * Math.PI * overshoot)
        : 1;
      
      const current = Math.round(value * Math.min(eased, 1.05));
      setDisplayValue(Math.min(current, value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.span 
      ref={ref} 
      className={`tabular-nums ${className}`}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
};