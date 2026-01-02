import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FadeInView, ScaleInView } from "@/components/ui/ParallaxWrapper";
import { StaggeredText } from "@/components/ui/StaggeredText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { 
  ArrowRight,
  Check,
  Users,
  Smartphone,
  Zap,
  Target,
  Heart,
  Globe,
  Monitor,
  Layers,
  Code,
  Palette,
  MousePointer,
  Gauge,
  Search,
  Shield,
  Database,
  ShoppingCart,
  Settings,
  FileText,
  Sparkles
} from "lucide-react";

const designApproach = [
  {
    icon: Users,
    title: "User-Centered Design",
    description: "We start by understanding your users—their needs, behaviors, pain points, and goals. Every design decision is rooted in real user insights."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Thinking",
    description: "With 70%+ of web traffic coming from mobile devices, we design for small screens first, then scale up—ensuring flawless experiences everywhere."
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description: "Beautiful design means nothing if it loads slowly. We optimize every asset for blazing-fast performance without visual compromise."
  },
  {
    icon: Target,
    title: "Conversion Focused",
    description: "Every element is strategically placed to guide users toward taking action—whether that's making a purchase, booking a call, or signing up."
  },
  {
    icon: Heart,
    title: "Accessibility Matters",
    description: "We build inclusive experiences that work for everyone, following WCAG guidelines and best practices."
  }
];

const whatWeDesign = [
  {
    category: "Websites",
    icon: Globe,
    items: [
      "Corporate and business websites",
      "E-commerce stores",
      "Portfolio and agency sites",
      "Landing pages and microsites",
      "Membership and subscription sites",
      "Real estate platforms",
      "Healthcare portals",
      "Educational platforms"
    ]
  },
  {
    category: "Mobile Applications",
    icon: Smartphone,
    items: [
      "Consumer apps (iOS/Android)",
      "Business productivity apps",
      "E-commerce apps",
      "Social platforms",
      "On-demand service apps",
      "Healthcare and fitness apps",
      "Real estate apps"
    ]
  },
  {
    category: "Web Applications",
    icon: Monitor,
    items: [
      "SaaS platforms",
      "Internal business tools",
      "CRM and management systems",
      "Dashboards and analytics platforms",
      "Booking and scheduling systems"
    ]
  }
];

const designProcess = [
  {
    step: 1,
    title: "Research & Discovery",
    items: [
      "Stakeholder interviews",
      "User research and personas",
      "Competitive analysis",
      "Technical requirements gathering",
      "Content audit",
      "Goal definition"
    ]
  },
  {
    step: 2,
    title: "Information Architecture",
    items: [
      "Sitemap creation",
      "User flow mapping",
      "Content strategy",
      "Navigation structure",
      "Wireframing"
    ]
  },
  {
    step: 3,
    title: "Visual Design",
    items: [
      "Mood boards and style exploration",
      "High-fidelity mockups",
      "Design system creation",
      "Interactive prototypes",
      "Responsive design variants",
      "Micro-interaction design"
    ]
  },
  {
    step: 4,
    title: "Development Handoff",
    items: [
      "Design specifications",
      "Asset preparation",
      "Developer collaboration",
      "Quality assurance",
      "Responsive testing"
    ]
  },
  {
    step: 5,
    title: "Launch & Iteration",
    items: [
      "User testing",
      "Analytics implementation",
      "Performance monitoring",
      "Continuous optimization",
      "A/B testing"
    ]
  }
];

const designFeatures = [
  {
    icon: Sparkles,
    title: "Stunning Visual Aesthetics",
    description: "Clean, modern designs that reflect your brand personality and appeal to your target audience."
  },
  {
    icon: MousePointer,
    title: "Seamless Interactions",
    description: "Smooth animations, intuitive navigation, and delightful micro-interactions that enhance user experience."
  },
  {
    icon: Layers,
    title: "Responsive Excellence",
    description: "Flawless experiences across all devices—from 320px mobile screens to 4K desktop displays."
  },
  {
    icon: Gauge,
    title: "Fast Loading Speed",
    description: "Optimized images, clean code, and performance best practices ensure instant page loads."
  },
  {
    icon: Search,
    title: "SEO-Friendly Structure",
    description: "Semantic HTML, proper heading hierarchy, and technical optimization for better search visibility."
  },
  {
    icon: Target,
    title: "Conversion Optimization",
    description: "Strategic placement of CTAs, trust signals, social proof, and persuasive copy that drives action."
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    description: "SSL encryption, secure authentication, regular backups, and proactive monitoring."
  }
];

const technologies = [
  {
    category: "Frontend",
    items: ["Next.js & React", "HTML5, CSS3, JavaScript", "Tailwind CSS", "Framer Motion (animations)"]
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL/MySQL", "RESTful APIs", "GraphQL"]
  },
  {
    category: "Mobile",
    items: ["React Native", "Swift (iOS native)", "Kotlin (Android native)", "Flutter"]
  },
  {
    category: "CMS & Platforms",
    items: ["Custom CMS", "WordPress", "Shopify", "Webflow (design-to-web)"]
  }
];

const packages = [
  {
    name: "E-commerce Store",
    price: "From AED 5,000",
    timeline: "2–3 weeks timeline",
    icon: ShoppingCart,
    colorClass: "text-secondary",
    bgClass: "bg-secondary/10",
    features: [
      "Product catalog setup",
      "Shopping cart and checkout",
      "Secure payment gateway integration",
      "Order & inventory management",
      "Customer accounts",
      "SEO foundation",
      "Mobile-optimized design",
      "Email & SMS notifications",
      "Shipping integrations"
    ]
  },
  {
    name: "Custom Web Application",
    price: "Starting from AED 15,000",
    timeline: "4–10 weeks timeline",
    icon: Settings,
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
    featured: true,
    features: [
      "Bespoke functionality",
      "Advanced dashboards & analytics",
      "Custom workflows",
      "API integrations",
      "User management system",
      "Cloud deployment",
      "Scalable architecture",
      "Full documentation"
    ]
  }
];

const WebAppDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="noise-overlay" />
        <div className="grid-overlay" />
        
        {/* Background shapes */}
        <div className="bg-shape bg-shape-blue w-[500px] h-[500px] -top-40 -right-40 blur-3xl" />
        <div className="bg-shape bg-shape-orange w-96 h-96 bottom-0 left-0 blur-3xl" />
        <div className="bg-shape bg-shape-yellow w-72 h-72 top-1/2 right-1/4 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                Web & App Design
              </span>
            </FadeInView>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-foreground">
              <StaggeredText text="Digital Experiences That" />
              <span className="block mt-2 highlight-orange">
                <StaggeredText text="Drive Results" delay={0.3} />
              </span>
            </h1>

            <FadeInView delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                We craft beautiful, high-performing websites and apps that turn visitors into customers and users into advocates.
              </p>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton href="https://calendly.com/nandaniramchandani3/30min">
                  <span className="cta-button inline-flex items-center gap-2">
                    Book Free Consultation <ArrowRight className="w-5 h-5" />
                  </span>
                </MagneticButton>
                <MagneticButton href="#packages">
                  <span className="neon-button inline-flex items-center gap-2">
                    View Packages
                  </span>
                </MagneticButton>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="noise-overlay" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-6">
                Our Philosophy
              </span>
            </FadeInView>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              <StaggeredText text="Beauty Meets Functionality" />
            </h2>

            <FadeInView delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Great design isn't just about aesthetics—it's about creating intuitive experiences that guide users toward desired actions. Every pixel, every interaction, every animation serves a purpose: to make your digital presence more effective.
              </p>
            </FadeInView>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designApproach.map((item, index) => (
              <FadeInView key={item.title} delay={index * 0.1}>
                <motion.div
                  className="glass-card p-8 h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* What We Design Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="noise-overlay" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
                Our Expertise
              </span>
            </FadeInView>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              <StaggeredText text="What We Design" />
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {whatWeDesign.map((category, index) => (
              <FadeInView key={category.category} delay={index * 0.1}>
                <div className="service-card h-full card-pop-blue">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-6 text-foreground">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="noise-overlay" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-warning/20 text-warning-foreground text-sm font-bold mb-6">
                Our Process
              </span>
            </FadeInView>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              <StaggeredText text="Our Design Process" />
            </h2>
          </div>

          <div className="space-y-8">
            {designProcess.map((phase, index) => (
              <FadeInView key={phase.step} delay={index * 0.1}>
                <motion.div
                  className="glass-card p-8"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex items-center gap-4 lg:min-w-[280px]">
                      <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-2xl">
                        {phase.step}
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {phase.title}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {phase.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Design Features Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="noise-overlay" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-6">
                Why Choose Us
              </span>
            </FadeInView>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              <StaggeredText text="Design Features That Set Us Apart" />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {designFeatures.map((feature, index) => (
              <FadeInView key={feature.title} delay={index * 0.05}>
                <motion.div
                  className="p-6 rounded-2xl bg-card border-2 border-border h-full hover:border-primary/30 transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="noise-overlay" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                Tech Stack
              </span>
            </FadeInView>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              <StaggeredText text="Technologies We Use" />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <FadeInView key={tech.category} delay={index * 0.1}>
                <div className="glass-card p-6 h-full">
                  <h3 className="text-lg font-display font-bold mb-4 text-foreground border-b border-border pb-3">
                    {tech.category}
                  </h3>
                  <ul className="space-y-3">
                    {tech.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Code className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-background relative overflow-hidden">
        <div className="noise-overlay" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
                Pricing
              </span>
            </FadeInView>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              <StaggeredText text="Design Packages" />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <FadeInView key={pkg.name} delay={index * 0.1}>
                <motion.div
                  className={`service-card h-full relative ${pkg.featured ? 'ring-2 ring-primary' : ''}`}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {pkg.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      Most Popular
                    </span>
                  )}
                  
                  <div className={`w-14 h-14 rounded-2xl ${pkg.bgClass} flex items-center justify-center mb-6`}>
                    <pkg.icon className={`w-7 h-7 ${pkg.colorClass}`} />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-2 text-foreground">
                    {pkg.name}
                  </h3>
                  
                  <p className={`text-3xl font-bold ${pkg.colorClass} mb-2`}>
                    {pkg.price}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    {pkg.timeline}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className={`w-4 h-4 ${pkg.colorClass} mt-0.5 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <MagneticButton href="https://calendly.com/nandaniramchandani3/30min">
                    <span className={`${pkg.featured ? 'cta-button' : 'neon-button'} w-full inline-flex items-center justify-center gap-2`}>
                      Get Started <ArrowRight className="w-4 h-4" />
                    </span>
                  </MagneticButton>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="noise-overlay opacity-5" />
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-accent blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScaleInView>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Let's Build Something Extraordinary
              </h2>
            </ScaleInView>
            
            <FadeInView delay={0.2}>
              <p className="text-lg text-background/70 mb-10">
                Whether you need a world-class website, a powerful mobile app, or a custom digital platform — we bring your ideas to life.
              </p>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton href="https://calendly.com/nandaniramchandani3/30min">
                  <span className="cta-button inline-flex items-center gap-2">
                    Book a Free Consultation <ArrowRight className="w-5 h-5" />
                  </span>
                </MagneticButton>
                <MagneticButton href="https://calendly.com/nandaniramchandani3/30min">
                  <span className="neon-button inline-flex items-center gap-2">
                    Request a Project Quote
                  </span>
                </MagneticButton>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebAppDesign;
