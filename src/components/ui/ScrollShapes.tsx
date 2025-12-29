import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const ScrollShapes = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: isMounted ? ref : undefined,
    offset: ["start end", "end start"],
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.8]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.5, 1.3]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Red Circle */}
      <motion.div
        className="bg-shape bg-shape-red w-32 h-32 md:w-48 md:h-48 top-[10%] right-[10%] opacity-80"
        style={{ rotate: rotate1, scale: scale1, y: y1 }}
      />
      
      {/* Orange Square */}
      <motion.div
        className="bg-shape bg-shape-orange w-24 h-24 md:w-36 md:h-36 bottom-[20%] left-[5%] opacity-80 rounded-lg"
        style={{ rotate: rotate2, scale: scale2, y: y2 }}
      />

      {/* Yellow Circle */}
      <motion.div
        className="bg-shape bg-shape-yellow w-20 h-20 md:w-28 md:h-28 top-[40%] left-[15%] opacity-60"
        style={{ rotate: rotate1, scale: scale2 }}
      />

      {/* Blue Square */}
      <motion.div
        className="bg-shape bg-shape-blue w-16 h-16 md:w-24 md:h-24 bottom-[30%] right-[20%] opacity-70 rounded-lg"
        style={{ rotate: rotate2, scale: scale1, y: y1 }}
      />
    </div>
  );
};