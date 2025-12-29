import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { AnimatedText, LetterReveal } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const HeroSection = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="gradient-orb gradient-orb-blue w-[600px] h-[600px] -top-40 -right-40 animate-float" />
      <div className="gradient-orb gradient-orb-purple w-[500px] h-[500px] bottom-0 -left-40 animate-float" style={{ animationDelay: "2s" }} />
      <div className="gradient-orb gradient-orb-orange w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: "4s" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />

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
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Dubai's Premier 360° Digital Agency
          </span>
        </motion.div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-[0.9] tracking-tight mb-8">
          <LetterReveal text="Elevate Your" className="block" />
          <span className="block gradient-text mt-2">
            <LetterReveal text="Brand" delay={0.3} />
          </span>
          <LetterReveal text="in the Digital World" className="block mt-2" delay={0.5} />
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton href="https://calendly.com">
            <span className="neon-button text-lg px-10 py-5 text-primary-foreground">
              Book Your Free Consultation
            </span>
          </MagneticButton>
          
          <MagneticButton href="#services">
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border/50 text-foreground hover:bg-card/50 transition-colors font-medium">
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
