import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightColor?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0,
    },
  },
};

const characterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

export const StaggeredText = ({
  text,
  className = "",
  delay = 0,
  highlightWords = [],
  highlightColor = "hsl(var(--bright-yellow))",
}: StaggeredTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = text.split(" ");

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ perspective: 1000 }}
    >
      {words.map((word, wordIndex) => {
        const isHighlighted = highlightWords.includes(word);
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                className="inline-block"
                variants={characterVariants}
                style={{
                  color: isHighlighted ? highlightColor : undefined,
                  transformStyle: "preserve-3d",
                }}
                custom={delay + wordIndex * 0.05 + charIndex * 0.02}
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.span>
  );
};