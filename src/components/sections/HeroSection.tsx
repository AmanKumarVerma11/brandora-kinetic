import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { StaggeredText } from "@/components/ui/StaggeredText";
import { ScrollShapes } from "@/components/ui/ScrollShapes";

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Noise texture */}
      <div className="noise-overlay" />
      
      {/* Animated grid overlay */}
      <div className="grid-overlay" />

      {/* Scroll-triggered background shapes */}
      <ScrollShapes />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card"
        >
          <Sparkles className="w-4 h-4 text-warning" />
          <span className="text-sm font-medium text-foreground">
            Dubai's Premier 360° Digital Agency
          </span>
        </motion.div>

        {/* Main headline with staggered character animation */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-[0.9] tracking-tight mb-8">
          <span className="block">
            <StaggeredText text="Elevate Your" />
          </span>
          <span className="block mt-2">
            <StaggeredText 
              text="Brand" 
              delay={0.3} 
              highlightWords={["Brand"]}
              highlightColor="hsl(var(--bright-yellow))"
            />
          </span>
          <span className="block mt-2">
            <StaggeredText 
              text="in the Digital World" 
              delay={0.5}
              highlightWords={["Digital"]}
              highlightColor="hsl(var(--safety-orange))"
            />
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Data-driven strategies, creative excellence, and measurable growth. 
          From startups to enterprises, we transform businesses into market leaders.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA - Vivid Red */}
          <MagneticButton href="https://calendly.com">
            <span className="cta-button text-lg">
              Book Your Free Consultation
            </span>
          </MagneticButton>
          
          <MagneticButton href="#services">
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-border text-foreground hover:border-warning hover:text-warning transition-colors font-medium">
              Explore Services
              <ArrowDown className="w-4 h-4" />
            </span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="scroll-indicator" />
      </motion.div>
    </section>
  );
};