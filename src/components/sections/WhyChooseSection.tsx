import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeInView, ScaleInView } from "@/components/ui/ParallaxWrapper";
import { StaggeredText } from "@/components/ui/StaggeredText";
import { Check } from "lucide-react";

const differentiators = [
  {
    title: "Dubai-Focused Expertise",
    description: "Deep understanding of UAE market dynamics, consumer behavior, and cultural nuances.",
  },
  {
    title: "360° Integrated Solutions",
    description: "Everything under one roof—no need to juggle multiple agencies or freelancers.",
  },
  {
    title: "Transparent Performance Tracking",
    description: "Real-time dashboards, detailed reports, and honest communication—always.",
  },
  {
    title: "Agile Execution",
    description: "Fast turnarounds without compromising quality. We move at the speed of business.",
  },
  {
    title: "ROI-First Approach",
    description: "Every dirham spent is tracked, optimized, and tied directly to business outcomes.",
  },
  {
    title: "Award-Winning Creative Team",
    description: "Designers, strategists, and developers who've worked with top regional brands.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business, audience, competitors, and goals to craft a winning roadmap.",
    color: "electric-blue",
  },
  {
    step: "02",
    title: "Creative Execution",
    description: "Our team brings the strategy to life with compelling content, stunning design, and technical excellence.",
    color: "vivid-red",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    description: "We deploy campaigns, monitor performance, and continuously optimize for better results.",
    color: "safety-orange",
  },
  {
    step: "04",
    title: "Scale & Grow",
    description: "Once we find what works, we scale aggressively to maximize your growth potential.",
    color: "bright-yellow",
  },
];

const colorMap: Record<string, string> = {
  "electric-blue": "hsl(var(--electric-blue))",
  "vivid-red": "hsl(var(--vivid-red))",
  "safety-orange": "hsl(var(--safety-orange))",
  "bright-yellow": "hsl(var(--bright-yellow))",
};

// Connecting line component with scroll animation
const ConnectingLine = ({ index }: { index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (index >= 3) return null; // No line after last item

  return (
    <div ref={ref} className="hidden lg:block absolute top-1/2 left-full w-full h-1 z-0">
      <div className="absolute inset-0 bg-border/30 rounded-full" />
      <motion.div
        className="absolute inset-0 rounded-full origin-left"
        style={{
          scaleX,
          background: `linear-gradient(90deg, ${colorMap[process[index].color]}, ${colorMap[process[index + 1].color]})`,
        }}
      />
    </div>
  );
};

export const WhyChooseSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-card">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Why Choose Us */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-bold mb-6 border border-accent/30">
                Why Brandora
              </span>
            </FadeInView>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              <StaggeredText text="What Sets Us" />
              <span className="block gradient-text mt-2">
                <StaggeredText text="Apart" delay={0.2} />
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <FadeInView key={item.title} delay={index * 0.1}>
                <motion.div
                  className="p-6 rounded-2xl border-2 border-border bg-background/50 backdrop-blur-sm h-full yellow-glow-border"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-warning flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-background" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>

        {/* Our Process with connecting lines */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6 border border-primary/30">
                Our Process
              </span>
            </FadeInView>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              <StaggeredText text="Our Proven 4-Step" />
              <span className="block gradient-text-blue mt-2">
                <StaggeredText text="Process" delay={0.2} />
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {process.map((item, index) => (
              <ScaleInView key={item.step} delay={index * 0.1}>
                <div className="relative">
                  <motion.div
                    className="relative p-8 rounded-3xl bg-background border-2 border-border h-full yellow-glow-border overflow-hidden"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Step number with solid color */}
                    <div 
                      className="text-7xl font-display font-bold absolute -top-2 -left-2 opacity-20"
                      style={{ color: colorMap[item.color] }}
                    >
                      {item.step}
                    </div>

                    <div className="relative z-10 pt-8">
                      <div 
                        className="w-12 h-1 rounded-full mb-6"
                        style={{ backgroundColor: colorMap[item.color] }}
                      />
                      <h3 className="font-display font-bold text-xl mb-3 text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Connecting line animation */}
                  <ConnectingLine index={index} />
                </div>
              </ScaleInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};