import { motion } from "framer-motion";
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

// Simple connecting line without scroll animation to avoid hydration issues
const ConnectingLine = ({ index }: { index: number }) => {
  if (index >= 3) return null;

  return (
    <div className="hidden lg:block absolute top-1/2 left-full w-full h-1 z-0">
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: `linear-gradient(90deg, ${colorMap[process[index].color]}, ${colorMap[process[index + 1].color]})`,
        }}
      />
    </div>
  );
};

export const WhyChooseSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Why Choose Us */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-6">
                Why Brandora
              </span>
            </FadeInView>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-foreground">
              <StaggeredText text="What Sets Us" />
              <span className="block mt-2 highlight-orange">
                <StaggeredText text="Apart" delay={0.2} />
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <FadeInView key={item.title} delay={index * 0.1}>
                <motion.div
                  className="p-6 rounded-2xl border-2 border-foreground bg-background h-full transition-all duration-300 card-pop-blue"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-6">
                Our Process
              </span>
            </FadeInView>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
              <StaggeredText text="Our Proven 4-Step" />
              <span className="block mt-2 highlight-blue">
                <StaggeredText text="Process" delay={0.2} />
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {process.map((item, index) => (
              <ScaleInView key={item.step} delay={index * 0.1}>
                <div className="relative">
                  <motion.div
                    className="relative p-8 rounded-3xl bg-background border-2 border-foreground h-full overflow-hidden transition-all duration-300 card-pop-orange"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Step number - visible but light */}
                    <div 
                      className="text-8xl font-display font-bold absolute -top-4 -left-2 opacity-10"
                      style={{ color: colorMap[item.color] }}
                    >
                      {item.step}
                    </div>

                    <div className="relative z-10 pt-10">
                      <div 
                        className="w-12 h-1.5 rounded-full mb-6"
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