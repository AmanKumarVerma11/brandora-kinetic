import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/services" },
  { name: "Web & App Design", href: "/web-app-design" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
];

const serviceLinks = [
  { name: "Performance Marketing", href: "/services#performance-marketing" },
  { name: "Social Media", href: "/services#social-media" },
  { name: "SEO", href: "/services#seo" },
  { name: "Web Development", href: "/services#web-development" },
  { name: "App Development", href: "/services#app-development" },
  { name: "Branding", href: "/services#branding" },
  { name: "Real Estate Marketing", href: "/services#real-estate" },
  { name: "E-commerce Solutions", href: "/services#ecommerce" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden bg-black text-white">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/"
                className="inline-block text-3xl font-display font-bold text-foreground mb-6"
              >
                BRANDORA
              </Link>
            </motion.div>
            <p className="text-foreground/80 mb-2 leading-relaxed font-medium">
              Brandora Creations
            </p>
            <p className="text-foreground/60 mb-6 leading-relaxed text-sm">
              Digital Marketing & Creative Agency in Dubai
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground hover:text-accent transition-colors"
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
            <h4 className="font-display font-bold text-lg mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-foreground">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">
                  Business Bay, Bayview Tower, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-foreground" />
                <a 
                  href="tel:+971525046977" 
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                >
                  +971 525046977
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-foreground" />
                <a 
                  href="mailto:info@brandoracreations.com" 
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                >
                  info@brandoracreations.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/80 font-medium">
            © 2025 Brandora Creations. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};