import { motion } from "framer-motion";
import { FadeInView, ScaleInView } from "@/components/ui/ParallaxWrapper";
import { CounterAnimation } from "@/components/ui/CounterAnimation";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { TrendingUp, Users, FolderCheck, Star } from "lucide-react";

const stats = [
  { value: 200, suffix: "%", label: "Average ROI Increase", icon: TrendingUp },
  { value: 95, suffix: "%", label: "Client Retention Rate", icon: Users },
  { value: 150, suffix: "+", label: "Projects Delivered", icon: FolderCheck },
  { value: 4.9, suffix: "/5", label: "Client Satisfaction", icon: Star, isDecimal: true },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="gradient-orb gradient-orb-purple w-[400px] h-[400px] top-0 right-0 opacity-20" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                About Brandora
              </span>
            </FadeInView>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8">
              <AnimatedText text="Your Growth Partner in the" />
              <span className="block gradient-text-blue">
                <AnimatedText text="Digital Age" delay={0.3} />
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

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <ScaleInView key={stat.label} delay={index * 0.1}>
                <motion.div 
                  className="stats-card group cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative z-10">
                    <stat.icon className="w-8 h-8 text-primary mb-4" />
                    <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                      {stat.isDecimal ? (
                        <span>{stat.value}{stat.suffix}</span>
                      ) : (
                        <CounterAnimation value={stat.value} suffix={stat.suffix} />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
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
