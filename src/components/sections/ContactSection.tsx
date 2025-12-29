import { useState } from "react";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/ui/ParallaxWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Send,
  CheckCircle,
  Loader2
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Dubai Office",
    value: "Business Bay, Bayview Tower, Dubai, UAE",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 525046977",
    href: "tel:+971525046977",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@brandoracreations.com",
    href: "mailto:info@brandoracreations.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.brandoracreations.com",
    href: "https://www.brandoracreations.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 9:00 AM – 7:00 PM",
  },
];

const services = [
  "Performance Marketing",
  "Social Media Management",
  "SEO & Local SEO",
  "Website Development",
  "Mobile App Development",
  "Branding & Design",
  "Real Estate Marketing",
  "E-commerce Solutions",
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Our team will get back to you within 24 hours.",
    });

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="gradient-orb gradient-orb-purple w-[500px] h-[500px] bottom-0 right-0 opacity-20" />
      <div className="gradient-orb gradient-orb-blue w-[400px] h-[400px] top-0 left-0 opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInView>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Get In Touch
            </span>
          </FadeInView>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            <AnimatedText text="Let's Connect &" />
            <span className="block gradient-text">
              <AnimatedText text="Grow Your Business" delay={0.2} />
            </span>
          </h2>

          <FadeInView delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Our team is ready to understand your goals and help you scale faster 
              with the right digital strategy.
            </p>
          </FadeInView>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <FadeInView direction="left">
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="font-display font-bold text-2xl mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <motion.div
                      key={item.label}
                      className="flex items-start gap-4"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-2xl mb-4">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Schedule a free strategy session with our team and discover how 
                    we can help accelerate your growth.
                  </p>
                  <MagneticButton href="https://calendly.com">
                    <span className="neon-button text-primary-foreground">
                      Book Free Strategy Call
                    </span>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Contact form */}
          <FadeInView direction="right">
            <div className="glass-card p-8">
              <h3 className="font-display font-bold text-2xl mb-6">Send Us a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-primary mb-4" />
                  <h4 className="text-xl font-display font-bold mb-2">Thank You!</h4>
                  <p className="text-muted-foreground">
                    Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interested In</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neon-button text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};
