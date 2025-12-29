import { motion } from "framer-motion";
import { FadeInView, ScaleInView } from "@/components/ui/ParallaxWrapper";
import { SpringCounter } from "@/components/ui/SpringCounter";
import { StaggeredText } from "@/components/ui/StaggeredText";
import { TrendingUp, Users, FolderCheck, Star, DollarSign } from "lucide-react";

const stats = [
  { value: 200, suffix: "%", label: "Average ROI Increase", icon: TrendingUp },
  { value: 5, suffix: "M+ AED", label: "Revenue Generated", icon: DollarSign },
  { value: 150, suffix: "+", label: "Projects Delivered", icon: FolderCheck },
  { value: 95, suffix: "%", label: "Client Retention", icon: Users },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background shapes */}
      <div className="bg-shape bg-shape-blue w-64 h-64 -top-20 -right-20 opacity-30 blur-3xl" />
      <div className="bg-shape bg-shape-orange w-48 h-48 bottom-20 -left-20 opacity-20 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6 border border-primary/30">
                About Brandora
              </span>
            </FadeInView>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8">
              <StaggeredText text="Your Growth Partner in the" />
              <span className="block gradient-text-blue mt-2">
                <StaggeredText text="Digital Age" delay={0.3} />
              </span>
            </h2>

            <FadeInView delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Brandora Creations, we don't just market—we engineer growth. As a full-service 
                digital marketing agency based in Dubai, we combine strategic thinking, creative 
                innovation, and cutting-edge technology to help businesses scale faster and smarter.
              </p>
            </FadeInView>

            <FadeInView delay={0.3}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need to dominate social media, rank #1 on Google, or build a website 
                that converts—we've got you covered.
              </p>
            </FadeInView>
          </div>

          {/* Stats grid with spring counters */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <ScaleInView key={stat.label} delay={index * 0.1}>
                <motion.div 
                  className="stats-card group cursor-pointer yellow-glow-border"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative z-10">
                    <stat.icon className="w-8 h-8 text-warning mb-4" />
                    <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                      <SpringCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              </ScaleInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};