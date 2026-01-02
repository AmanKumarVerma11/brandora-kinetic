import { motion } from "framer-motion";
import { FadeInView } from "@/components/ui/ParallaxWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { CounterAnimation } from "@/components/ui/CounterAnimation";
import { ArrowUpRight, TrendingUp, Users, Target, DollarSign } from "lucide-react";

const caseStudies = [
  {
    title: "Dubai Real Estate Agency",
    category: "Lead Generation",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    stats: [
      { value: 847, label: "Qualified Leads", suffix: "" },
      { value: 62, label: "Cost Reduction", suffix: "%" },
      { value: 4.2, label: "ROAS", suffix: "X", isDecimal: true },
    ],
    description: "Generated 847 qualified leads in just 90 days with a 62% reduction in cost per lead.",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "E-commerce Fashion Brand",
    category: "Revenue Growth",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop",
    stats: [
      { value: 180, label: "Monthly Revenue", suffix: "K AED", prefix: "" },
      { value: 3.8, label: "ROAS", suffix: "X", isDecimal: true },
      { value: 12500, label: "Orders", suffix: "+" },
    ],
    description: "Scaled monthly revenue from AED 45K to AED 180K with 12,500+ orders delivered.",
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    title: "Healthcare Clinic Chain",
    category: "SEO & Traffic",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop",
    stats: [
      { value: 340, label: "Traffic Increase", suffix: "%" },
      { value: 27, label: "Keywords Ranked #1", suffix: "" },
      { value: 150, label: "Monthly Bookings", suffix: "+" },
    ],
    description: "Increased website traffic by 340% and ranked #1 for 27 key search terms.",
    gradient: "from-accent/20 to-primary/20",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-background to-card/20" />
      <div className="gradient-orb gradient-orb-orange w-[400px] h-[400px] top-1/2 right-0 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInView>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Case Studies
            </span>
          </FadeInView>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            <AnimatedText text="Real Results for" />
            <span className="block gradient-text">
              <AnimatedText text="Real Businesses" delay={0.2} />
            </span>
          </h2>
        </div>

        {/* Case studies grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <FadeInView key={study.title} delay={index * 0.1}>
              <motion.div
                className="case-study-card group h-full"
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden rounded-t-3xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} z-10`} />
                  <img
                    src={study.image}
                    alt={study.title}
                    className="case-study-image w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                      {study.category}
                    </span>
                  </div>
                  <motion.div
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-xl font-display font-bold text-primary">
                          {stat.isDecimal ? (
                            <span>{stat.value}{stat.suffix}</span>
                          ) : (
                            <CounterAnimation 
                              value={stat.value} 
                              suffix={stat.suffix} 
                              prefix={stat.prefix || ""}
                            />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};
