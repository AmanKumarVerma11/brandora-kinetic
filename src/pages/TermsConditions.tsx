import { motion } from "framer-motion";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FileText } from "lucide-react";

const TermsConditions = () => {
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
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Legal Agreement</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Terms & Conditions
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
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-foreground/80">
                  By accessing Brandora Creations' website, you agree to our terms of service. All content, designs, and branding materials are owned by Brandora Creations and may not be copied or distributed without consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Project Terms
                </h2>
                <p className="text-foreground/80">
                  Project timelines, pricing, and deliverables will be defined in the service agreement shared with the client before project initiation. Payments must be made according to the billing schedule provided.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Intellectual Property
                </h2>
                <p className="text-foreground/80">
                  All intellectual property rights for deliverables will be transferred to the client upon full payment, unless otherwise specified in the service agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Modifications
                </h2>
                <p className="text-foreground/80">
                  Brandora Creations reserves the right to update, modify, or discontinue services or website content at any time without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-foreground/80">
                  Brandora Creations shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-foreground/60 text-sm">
                  For any questions regarding these terms, please contact us at{" "}
                  <a 
                    href="mailto:info@brandoracreations.com" 
                    className="text-accent hover:underline"
                  >
                    info@brandoracreations.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
