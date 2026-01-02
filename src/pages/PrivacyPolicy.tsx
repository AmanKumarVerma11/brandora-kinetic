import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Shield, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-dark-charcoal relative overflow-hidden">
        <div className="noise-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-foreground/80">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto prose prose-lg"
          >
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <p className="text-lg text-foreground/80 mb-8">
                At Brandora Creations, we value your privacy. We collect and process personal data only to deliver our services, improve user experience, and communicate with you regarding your inquiries or projects.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Information We Collect
              </h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Name",
                  "Email",
                  "Phone number",
                  "Business information",
                  "Website usage data"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                How We Use Your Data
              </h2>
              <p className="text-foreground/80 mb-8">
                We do not sell or share your data with third parties, except for trusted service providers assisting in delivering our services. Your information is used solely to provide you with the best possible service and experience.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Your Rights
              </h2>
              <p className="text-foreground/80 mb-8">
                You can request deletion or modification of your data anytime by contacting us.
              </p>

              <div className="bg-accent/10 rounded-xl p-6 flex items-center gap-4">
                <Mail className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Contact us at</p>
                  <a 
                    href="mailto:privacy@brandoracreations.com" 
                    className="text-accent font-medium hover:underline"
                  >
                    privacy@brandoracreations.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
