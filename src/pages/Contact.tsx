import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FadeInView, ScaleInView } from "@/components/ui/ParallaxWrapper";
import { StaggeredText } from "@/components/ui/StaggeredText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

const services = [
  "Performance Marketing",
  "Social Media Management",
  "SEO & Local SEO",
  "Website Development",
  "Mobile App Development",
  "Branding & Design",
  "Real Estate Marketing",
  "E-commerce Growth",
  "Web & App Design",
  "Other"
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Dubai Office",
    value: "Business Bay, Bayview Tower, Dubai, UAE",
    href: "https://www.google.com/maps/dir//Bay+view+tower+-+Office+%23+801+-+Business+Bay+-+Dubai/@25.1878832,55.277734,15z"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 525046977",
    href: "tel:+971525046977"
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@brandoracreations.com",
    href: "mailto:info@brandoracreations.com"
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.brandoracreations.com",
    href: "https://www.brandoracreations.com"
  }
];

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM – 7:00 PM" },
  { day: "Saturday - Sunday", hours: "Closed" }
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message sent successfully!",
      description: "Our team will get back to you within 24 hours.",
    });

    // Reset form after delay
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="noise-overlay" />
        <div className="grid-overlay" />
        
        {/* Background shapes */}
        <div className="bg-shape bg-shape-blue w-[500px] h-[500px] -top-40 -right-40 blur-3xl" />
        <div className="bg-shape bg-shape-orange w-96 h-96 bottom-0 left-0 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                Get In Touch
              </span>
            </FadeInView>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-foreground">
              <StaggeredText text="Let's Connect & Grow" />
              <span className="block mt-2 highlight-orange">
                <StaggeredText text="Your Business" delay={0.3} />
              </span>
            </h1>

            <FadeInView delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Our team is ready to understand your goals and help you scale faster with the right digital strategy.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="noise-overlay" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <FadeInView>
                <h2 className="text-3xl font-display font-bold mb-8 text-foreground">
                  Contact Information
                </h2>
              </FadeInView>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <FadeInView key={item.label} delay={index * 0.1}>
                    <motion.a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-2xl bg-background border-2 border-border hover:border-primary/30 transition-all group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  </FadeInView>
                ))}
              </div>

              {/* Business Hours */}
              <FadeInView delay={0.4}>
                <div className="p-6 rounded-2xl bg-background border-2 border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-2">
                    {businessHours.map((item) => (
                      <div key={item.day} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="font-medium text-foreground">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>

              {/* Map */}
              <FadeInView delay={0.5}>
                <div className="mt-8 rounded-2xl overflow-hidden border-2 border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178507847474!2d55.26754431544385!3d25.18147658389556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5e0a6a546d7c463%3A0x64cf41267e89488!2sBay%20View%20Tower!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Brandora Creations Office Location"
                  />
                </div>
              </FadeInView>
            </div>

            {/* Contact Form */}
            <div>
              <FadeInView>
                <h2 className="text-3xl font-display font-bold mb-8 text-foreground">
                  Send Us a Message
                </h2>
              </FadeInView>

              <FadeInView delay={0.1}>
                <div className="glass-card p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground">
                        Our team will get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            maxLength={100}
                            className="bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            maxLength={255}
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+971 50 123 4567"
                            value={formData.phone}
                            onChange={handleInputChange}
                            maxLength={20}
                            className="bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={handleInputChange}
                            maxLength={100}
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select value={formData.service} onValueChange={handleServiceChange}>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border z-50">
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project and goals..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          maxLength={1000}
                          rows={5}
                          className="bg-background resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full cta-button h-14 text-base font-bold"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="noise-overlay opacity-5" />
        
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-accent blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScaleInView>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Start Your Project?
              </h2>
            </ScaleInView>
            
            <FadeInView delay={0.2}>
              <p className="text-lg text-background/70 mb-10">
                From startups to large enterprises, we help you unlock growth with digital solutions that actually work.
              </p>
            </FadeInView>

            <FadeInView delay={0.3}>
              <MagneticButton href="https://calendly.com/nandaniramchandani3/30min">
                <span className="cta-button inline-flex items-center gap-2">
                  Schedule a Strategy Session <ArrowRight className="w-5 h-5" />
                </span>
              </MagneticButton>
            </FadeInView>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
