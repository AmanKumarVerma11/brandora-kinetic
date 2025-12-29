import { motion } from "framer-motion";
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube,
  MapPin,
  Phone,
  Mail 
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Performance Marketing",
  "Social Media",
  "SEO",
  "Web Development",
  "App Development",
  "Branding",
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden section-safety-orange">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.a
              href="#hero"
              className="inline-block text-3xl font-display font-bold text-background mb-6"
              whileHover={{ scale: 1.05 }}
            >
              BRANDORA
            </motion.a>
            <p className="text-background/80 mb-6 leading-relaxed">
              Dubai's premier 360° digital marketing agency delivering data-driven 
              strategies and creative excellence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-background/20 flex items-center justify-center text-background hover:bg-background hover:text-accent transition-colors"
                  whileHover={{ y: -4 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-background">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-background">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-background/80 hover:text-background transition-colors font-medium"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-background">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-background flex-shrink-0 mt-0.5" />
                <span className="text-background/80">
                  Business Bay, Bayview Tower, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-background" />
                <a 
                  href="tel:+971525046977" 
                  className="text-background/80 hover:text-background transition-colors font-medium"
                >
                  +971 525046977
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-background" />
                <a 
                  href="mailto:info@brandoracreations.com" 
                  className="text-background/80 hover:text-background transition-colors font-medium"
                >
                  info@brandoracreations.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/80 font-medium">
            © 2025 Brandora Creations. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/80 hover:text-background transition-colors font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-background/80 hover:text-background transition-colors font-medium">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};