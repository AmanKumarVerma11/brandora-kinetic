import { motion } from "framer-motion";
import { FadeInView } from "@/components/ui/ParallaxWrapper";
import { TiltCard } from "@/components/ui/TiltCard";
import { StaggeredText } from "@/components/ui/StaggeredText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { 
  Megaphone, 
  Share2, 
  Search, 
  Code, 
  Palette, 
  Building2, 
  ShoppingCart,
  Smartphone,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Performance Marketing",
    description: "Drive qualified traffic and maximize ROI with expertly managed Google Ads, Meta Ads, and TikTok campaigns.",
    price: "From AED 3,500/month",
    shadowClass: "card-pop-red",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Build an engaged community with scroll-stopping content, strategic planning, and data-backed growth tactics.",
    shadowClass: "card-pop-blue",
    price: "From AED 2,800/month",
  },
  {
    icon: Search,
    title: "SEO & Local SEO",
    description: "Dominate search results and attract high-intent customers actively looking for your products or services.",
    price: "From AED 3,200/month",
    shadowClass: "card-pop-orange",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Launch lightning-fast, conversion-optimized websites that deliver exceptional user experiences.",
    price: "From AED 8,000",
    shadowClass: "card-pop-yellow",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Build powerful, intuitive mobile applications that users love and drive real business value.",
    price: "From AED 25,000",
    shadowClass: "card-pop-blue",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Create a memorable brand identity with professional logos, brand guidelines, and stunning visual assets.",
    price: "From AED 2,500",
    shadowClass: "card-pop-red",
  },
  {
    icon: Building2,
    title: "Real Estate Marketing",
    description: "Specialized lead generation and sales strategies for property developers and agencies across UAE.",
    price: "From AED 4,500/month",
    shadowClass: "card-pop-orange",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "End-to-end e-commerce solutions from store development to marketing to optimization.",
    price: "From AED 6,000/month",
    shadowClass: "card-pop-yellow",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="relative py-16 md:py-20 overflow-hidden bg-muted">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeInView>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-6">
              Our Services
            </span>
          </FadeInView>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-foreground">
            <StaggeredText text="Everything Your Brand Needs to" />
            <span className="block mt-2 highlight-orange">
              <StaggeredText text="Thrive Online" delay={0.3} />
            </span>
          </h2>

          <FadeInView delay={0.2}>
            <p className="text-lg text-muted-foreground">
              From strategy to execution, from design to development—comprehensive digital solutions that drive real growth.
            </p>
          </FadeInView>
        </div>

        {/* Services grid with 3D tilt cards and colored pop shadows */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeInView key={service.title} delay={index * 0.05}>
              <TiltCard className="h-full">
                <motion.div
                  className={`service-card h-full transition-all duration-300 ${service.shadowClass}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-background" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mt-auto pt-4 border-t border-border">
                    <span className="text-sm font-bold text-primary">
                      {service.price}
                    </span>
                  </div>
                </motion.div>
              </TiltCard>
            </FadeInView>
          ))}
        </div>

        {/* CTA */}
        <FadeInView delay={0.4}>
          <div className="text-center mt-16">
            <MagneticButton href="#contact">
              <span className="inline-flex items-center gap-2 cta-button">
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </span>
            </MagneticButton>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};