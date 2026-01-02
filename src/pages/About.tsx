import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { FadeInView, ScaleInView } from "@/components/ui/ParallaxWrapper";
import { StaggeredText } from "@/components/ui/StaggeredText";
import { SpringCounter } from "@/components/ui/SpringCounter";
import { 
  Target, 
  Eye, 
  Rocket, 
  Trophy, 
  Lightbulb, 
  Shield, 
  Zap, 
  Handshake,
  Search,
  Settings,
  BarChart3,
  TrendingUp,
  Star,
  Users,
  DollarSign,
  Award,
  Building2,
  ShoppingCart,
  Heart,
  GraduationCap,
  Briefcase,
  Laptop,
  Store,
  UtensilsCrossed
} from "lucide-react";
import { Link } from "react-router-dom";

const coreValues = [
  {
    icon: Trophy,
    title: "Results-Driven Excellence",
    description: "We're obsessed with performance. Every strategy, every creative decision, every optimization is focused on delivering tangible business outcomes.",
    color: "vivid-red"
  },
  {
    icon: Lightbulb,
    title: "Innovation & Adaptation",
    description: "The digital landscape never stops evolving—neither do we. We stay ahead of trends, test new platforms, and constantly refine our approach.",
    color: "bright-yellow"
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description: "No smoke and mirrors. No inflated metrics. We provide honest insights, clear reporting, and straightforward communication always.",
    color: "electric-blue"
  },
  {
    icon: Zap,
    title: "Speed with Precision",
    description: "We move fast without cutting corners. Agile execution meets meticulous quality control in everything we deliver.",
    color: "safety-orange"
  },
  {
    icon: Handshake,
    title: "Partnership Mentality",
    description: "Your success is our success. We invest in understanding your business as deeply as you do, becoming true partners in your growth journey.",
    color: "vivid-red"
  }
];

const approach = [
  {
    step: "01",
    icon: Search,
    title: "Deep Research & Insights",
    description: "We don't guess—we know. Comprehensive market research, competitor analysis, and audience profiling inform every decision.",
    color: "electric-blue"
  },
  {
    step: "02",
    icon: Settings,
    title: "Custom Strategy Development",
    description: "One-size-fits-all is one-size-fails-all. We craft bespoke strategies aligned with your unique business objectives.",
    color: "safety-orange"
  },
  {
    step: "03",
    icon: Rocket,
    title: "Agile Execution",
    description: "Rapid implementation with continuous testing, learning, and optimization throughout the campaign lifecycle.",
    color: "vivid-red"
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Clear dashboards, regular check-ins, and detailed analytics keep you informed and in control.",
    color: "bright-yellow"
  },
  {
    step: "05",
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We never settle. Constant A/B testing, performance analysis, and strategic refinement ensure sustained growth.",
    color: "electric-blue"
  }
];

const achievements = [
  { icon: Award, value: 100, label: "Top 100 Digital Agencies in Dubai", suffix: "", prefix: "Top " },
  { icon: Star, value: 100, label: "Five-Star Client Reviews", suffix: "+", prefix: "" },
  { icon: DollarSign, value: 5, label: "AED Generated for Clients", suffix: "M+", prefix: "" },
  { icon: Users, value: 500, label: "Qualified Leads Delivered", suffix: "K+", prefix: "" }
];

const team = [
  {
    name: "Amr Mohamed Fayez Radi",
    role: "Founder & Creative Director",
    description: "Visionary strategist leading brand identity, social media direction, and digital growth. Expert in delivering clean, modern, and effective brand experiences that stand out.",
    color: "vivid-red"
  },
  {
    name: "Nandani Ramchandani",
    role: "Design & Content Lead",
    description: "Specializes in creative design, brand visuals, and content development. Ensures every creative piece — from logos to social posts — speaks the brand's language.",
    color: "safety-orange"
  },
  {
    name: "Vipul Mahawar",
    role: "Tech & Development Lead",
    description: "Handles websites, landing pages, user experience, and technical execution. Brings ideas to life with clean code, smooth functionality, and performance-driven builds.",
    color: "electric-blue"
  }
];

const industries = [
  { name: "Real Estate", icon: Building2 },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: Heart },
  { name: "Hospitality", icon: Building2 },
  { name: "Education", icon: GraduationCap },
  { name: "Professional Services", icon: Briefcase },
  { name: "Technology", icon: Laptop },
  { name: "Retail", icon: Store },
  { name: "Food & Beverage", icon: UtensilsCrossed }
];

const colorMap: Record<string, string> = {
  "electric-blue": "hsl(var(--electric-blue))",
  "vivid-red": "hsl(var(--vivid-red))",
  "safety-orange": "hsl(var(--safety-orange))",
  "bright-yellow": "hsl(var(--bright-yellow))",
};

const About = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="grid-overlay" />
          <div className="noise-overlay" />
          
          {/* Background shapes */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-shape-blue rounded-full opacity-50 float" />
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-shape-orange rounded-3xl rotate-12 opacity-50" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <FadeInView>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-6">
                  About Brandora
                </span>
              </FadeInView>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-8">
                <StaggeredText text="Building Digital" />
                <span className="block mt-2 highlight-orange">
                  <StaggeredText text="Success Stories" delay={0.2} />
                </span>
                <span className="block mt-2">
                  <StaggeredText text="Since Day One" delay={0.4} />
                </span>
              </h1>

              <FadeInView delay={0.3}>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  We're not just another marketing agency—we're your growth partners, combining strategic brilliance with creative excellence to deliver results that matter.
                </p>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-32 bg-muted relative overflow-hidden">
          <div className="absolute top-10 right-10 w-40 h-40 bg-shape-yellow rounded-full opacity-40" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <FadeInView>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-6">
                    Our Story
                  </span>
                </FadeInView>

                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
                  <StaggeredText text="Who We Are" />
                </h2>

                <FadeInView delay={0.2}>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Brandora Creations was born from a simple belief: businesses deserve marketing partners who genuinely care about their success. Founded in the heart of Dubai, we've grown from a passionate startup to a full-service digital powerhouse serving clients across UAE and beyond.
                  </p>
                </FadeInView>

                <FadeInView delay={0.3}>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our team brings together seasoned marketers, creative visionaries, technical experts, and strategic thinkers—all united by one mission: helping businesses thrive in the digital age.
                  </p>
                </FadeInView>

                <FadeInView delay={0.4}>
                  <p className="text-lg text-foreground font-semibold leading-relaxed">
                    What makes us different? We don't believe in cookie-cutter solutions. Every business is unique, every market has its nuances, and every campaign we create is custom-built to deliver maximum impact for your specific goals.
                  </p>
                </FadeInView>
              </div>

              {/* Vision & Mission Cards */}
              <div className="space-y-8">
                <ScaleInView>
                  <motion.div 
                    className="p-8 rounded-2xl bg-background border-2 border-foreground transition-all duration-300 card-pop-blue"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: colorMap["electric-blue"] }}>
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4" style={{ color: colorMap["electric-blue"] }}>Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the most trusted digital transformation partner for businesses across the Middle East, recognized for turning ambitious goals into measurable achievements.
                    </p>
                  </motion.div>
                </ScaleInView>

                <ScaleInView delay={0.1}>
                  <motion.div 
                    className="p-8 rounded-2xl bg-background border-2 border-foreground transition-all duration-300 card-pop-orange"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: colorMap["safety-orange"] }}>
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4" style={{ color: colorMap["safety-orange"] }}>Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Empowering brands with innovative, data-driven digital solutions that accelerate growth, build lasting customer relationships, and create competitive advantages in increasingly digital markets.
                    </p>
                  </motion.div>
                </ScaleInView>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="grid-overlay" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-shape-red rounded-3xl rotate-45 opacity-40" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeInView>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-6">
                  What We Stand For
                </span>
              </FadeInView>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                <StaggeredText text="Our Core" />
                <span className="block mt-2 highlight-blue">
                  <StaggeredText text="Values" delay={0.2} />
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <ScaleInView key={value.title} delay={index * 0.1}>
                  <motion.div 
                    className={`p-8 rounded-2xl bg-background border-2 border-foreground transition-all duration-300 h-full card-pop-${value.color === "vivid-red" ? "red" : value.color === "electric-blue" ? "blue" : value.color === "safety-orange" ? "orange" : "yellow"}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: colorMap[value.color] }}
                    >
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-4" style={{ color: colorMap[value.color] }}>
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </ScaleInView>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 bg-muted relative overflow-hidden">
          <div className="absolute top-20 left-10 w-48 h-48 bg-shape-blue rounded-full opacity-40" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeInView>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-6">
                  Our Core Team
                </span>
              </FadeInView>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                <StaggeredText text="The Minds Behind" />
                <span className="block mt-2 highlight-orange">
                  <StaggeredText text="Brandora Creations" delay={0.2} />
                </span>
              </h2>

              <FadeInView delay={0.3}>
                <p className="text-lg text-muted-foreground">
                  A small, dedicated team that works like a powerhouse — skilled, reliable, and focused entirely on your brand's success.
                </p>
              </FadeInView>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <ScaleInView key={member.name} delay={index * 0.1}>
                  <motion.div 
                    className={`p-8 rounded-2xl bg-background border-2 border-foreground transition-all duration-300 h-full card-pop-${member.color === "vivid-red" ? "red" : member.color === "safety-orange" ? "orange" : "blue"}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-3xl font-display font-bold text-white"
                      style={{ backgroundColor: colorMap[member.color] }}
                    >
                      {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2" style={{ color: colorMap[member.color] }}>
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-muted-foreground mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {member.description}
                    </p>
                  </motion.div>
                </ScaleInView>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="grid-overlay" />
          <div className="absolute top-10 right-10 w-40 h-40 bg-shape-orange rounded-full opacity-40" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeInView>
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-6">
                  Our Approach
                </span>
              </FadeInView>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                <StaggeredText text="How We Deliver" />
                <span className="block mt-2 highlight-blue">
                  <StaggeredText text="Excellence" delay={0.2} />
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {approach.map((step, index) => (
                <ScaleInView key={step.title} delay={index * 0.1}>
                  <motion.div 
                    className="relative p-8 rounded-2xl bg-background border-2 border-foreground transition-all duration-300 h-full"
                    whileHover={{ scale: 1.02, boxShadow: `8px 8px 0 ${colorMap[step.color]}` }}
                  >
                    {/* Background step number */}
                    <span 
                      className="absolute top-4 right-4 text-7xl font-display font-bold opacity-10"
                      style={{ color: colorMap[step.color] }}
                    >
                      {step.step}
                    </span>
                    
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative z-10"
                      style={{ backgroundColor: colorMap[step.color] }}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-4 relative z-10" style={{ color: colorMap[step.color] }}>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </motion.div>
                </ScaleInView>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-32 bg-foreground text-background relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeInView>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-6">
                  Our Achievements
                </span>
              </FadeInView>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <StaggeredText text="Numbers That" />
                <span className="block mt-2 text-accent">
                  <StaggeredText text="Speak Volumes" delay={0.2} />
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <ScaleInView key={achievement.label} delay={index * 0.1}>
                  <motion.div 
                    className="text-center p-8 rounded-2xl bg-background/10 border border-background/20 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <achievement.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                      <SpringCounter value={achievement.value} prefix={achievement.prefix} suffix={achievement.suffix} />
                    </div>
                    <p className="text-background/80 text-sm">{achievement.label}</p>
                  </motion.div>
                </ScaleInView>
              ))}
            </div>
          </div>
        </section>

        {/* Why Dubai Businesses Trust Us */}
        <section className="py-32 relative overflow-hidden">
          <div className="grid-overlay" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-shape-yellow rounded-3xl rotate-12 opacity-40" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <FadeInView>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-6">
                    Local Expertise, Global Standards
                  </span>
                </FadeInView>

                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
                  <StaggeredText text="Why Dubai Businesses" />
                  <span className="block mt-2 highlight-orange">
                    <StaggeredText text="Trust Us" delay={0.2} />
                  </span>
                </h2>

                <FadeInView delay={0.3}>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Based in Dubai, we understand the unique dynamics of the UAE market—from cultural considerations to consumer behavior patterns to regulatory requirements. We combine this local intelligence with international best practices to deliver world-class marketing that resonates with your audience.
                  </p>
                </FadeInView>
              </div>

              <div>
                <FadeInView delay={0.2}>
                  <h3 className="text-xl font-display font-bold mb-6">Industries We Serve:</h3>
                </FadeInView>
                
                <div className="grid grid-cols-3 gap-4">
                  {industries.map((industry, index) => (
                    <ScaleInView key={industry.name} delay={index * 0.05}>
                      <motion.div 
                        className="p-4 rounded-xl bg-muted border-2 border-border text-center transition-all duration-300"
                        whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                      >
                        <industry.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium text-muted-foreground">{industry.name}</p>
                      </motion.div>
                    </ScaleInView>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 section-safety-orange relative overflow-hidden">
          <div className="noise-overlay" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <FadeInView>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Let's Write Your Success Story
              </h2>
            </FadeInView>

            <FadeInView delay={0.2}>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
                Join 100+ businesses who've transformed their digital presence with Brandora Creations.
              </p>
            </FadeInView>

            <FadeInView delay={0.3}>
              <motion.a
                href="https://calendly.com/nandaniramchandani3/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 rounded-full font-bold text-lg bg-foreground text-background transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Your Free Consultation
              </motion.a>
            </FadeInView>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
