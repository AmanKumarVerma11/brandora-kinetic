import { motion } from "framer-motion";
import { FadeInView, ScaleInView } from "@/components/ui/ParallaxWrapper";
import { SpringCounter } from "@/components/ui/SpringCounter";
import { StaggeredText } from "@/components/ui/StaggeredText";
import { TrendingUp, Users, FolderCheck, DollarSign } from "lucide-react";

const stats = [
  { value: 200, suffix: "%", label: "Average ROI Increase", icon: TrendingUp, color: "vivid-red" },
  { value: 5, suffix: "M+ AED", label: "Revenue Generated", icon: DollarSign, color: "safety-orange" },
  { value: 150, suffix: "+", label: "Projects Delivered", icon: FolderCheck, color: "electric-blue" },
  { value: 95, suffix: "%", label: "Client Retention", icon: Users, color: "bright-yellow" },
];

const colorMap: Record<string, string> = {
  "electric-blue": "hsl(var(--electric-blue))",
  "vivid-red": "hsl(var(--vivid-red))",
  "safety-orange": "hsl(var(--safety-orange))",
  "bright-yellow": "hsl(var(--bright-yellow))",
};

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 md:py-20 overflow-hidden bg-muted">
      {/* Subtle background accents */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-shape-blue rounded-full opacity-40" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-shape-orange rounded-3xl rotate-12 opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-6">
                About Brandora
              </span>
            </FadeInView>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8 text-foreground">
              <StaggeredText text="Your Growth Partner in the" />
              <span className="block mt-2 highlight-blue">
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
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <ScaleInView key={stat.label} delay={index * 0.1}>
                <motion.div 
                  className="relative p-8 rounded-2xl bg-background border-2 border-foreground transition-all duration-300 card-pop-orange"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative z-10">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: colorMap[stat.color] }}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div 
                      className="text-4xl md:text-5xl font-display font-bold mb-2"
                      style={{ color: colorMap[stat.color] }}
                    >
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