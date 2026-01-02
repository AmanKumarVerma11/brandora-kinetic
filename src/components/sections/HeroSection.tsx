import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { StaggeredText } from "@/components/ui/StaggeredText";

export const HeroSection = () => {
  // Use viewport-based scroll tracking (no ref needed)
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.3], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24"
    >
      {/* Light gray geometric grid overlay */}
      <div className="grid-overlay" />
      
      {/* Subtle noise texture */}
      <div className="noise-overlay" />

      {/* Decorative color blocks */}
      <div className="absolute top-32 right-10 w-32 h-32 bg-shape-yellow rounded-3xl rotate-12 opacity-60" />
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-shape-red rounded-full opacity-50" />
      <div className="absolute top-1/3 left-20 w-16 h-16 bg-shape-blue rounded-2xl -rotate-6 opacity-40" />
      <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-shape-orange rounded-full opacity-50" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 container mx-auto px-6 text-center"
      >

        {/* Main headline with staggered character animation */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-[0.9] tracking-tight mb-8 text-foreground">
          <span className="block">
            <StaggeredText text="Elevate Your" />
          </span>
          <span className="block mt-2">
            <StaggeredText 
              text="Brand" 
              delay={0.3} 
              highlightWords={["Brand"]}
              highlightColor="hsl(var(--safety-orange))"
            />
          </span>
          <span className="block mt-2">
            <StaggeredText 
              text="in the Digital World" 
              delay={0.5}
              highlightWords={["Digital", "World"]}
              highlightColor="hsl(var(--electric-blue))"
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
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors font-medium">
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