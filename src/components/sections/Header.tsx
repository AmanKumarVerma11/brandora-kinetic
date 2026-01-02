import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Web & App Design", href: "/web-app-design" },
  { name: "Case Studies", href: "/#case-studies" },
  { name: "Contact", href: "/#contact" },
];

// High-strength magnetic button for header
const MagneticCTA = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 10, stiffness: 200, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // High-strength magnetic pull (0.5 multiplier)
    const distanceX = (e.clientX - centerX) * 0.5;
    const distanceY = (e.clientY - centerY) * 0.5;
    
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="inline-block"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-3 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={logoImage} 
                alt="Brandora Creations logo" 
                className="h-14 md:h-16 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - with proper spacing */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => {
              const isInternalRoute = link.href.startsWith('/') && !link.href.includes('#');
              
              if (isInternalRoute) {
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.div>
                );
              }
              
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              );
            })}
          </nav>

          <div className="flex items-center gap-6">
            {/* High-strength magnetic CTA */}
            <MagneticCTA href="https://calendly.com">
              <span className="hidden md:block cta-button text-sm font-bold px-6 py-3">
                Book Consultation
              </span>
            </MagneticCTA>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-foreground"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center">
                <img 
                  src={logoImage} 
                  alt="Brandora Creations logo" 
                  className="h-14 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-foreground"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                {navLinks.map((link, index) => {
                  const isInternalRoute = link.href.startsWith('/') && !link.href.includes('#');
                  
                  if (isInternalRoute) {
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-3xl font-display font-bold text-foreground hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  }
                  
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-display font-bold text-foreground hover:text-primary transition-colors"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}
              </nav>

              <MagneticCTA href="https://calendly.com">
                <span className="cta-button text-base font-bold mx-auto block text-center">
                  Book Consultation
                </span>
              </MagneticCTA>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};