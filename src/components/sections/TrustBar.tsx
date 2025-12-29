import { motion } from "framer-motion";
import { Star, Building, Users, Briefcase } from "lucide-react";

const trustItems = [
  { icon: Building, text: "Trusted by 100+ businesses across UAE" },
  { icon: Star, text: "5M+ AED generated for clients" },
  { icon: Users, text: "500K+ leads delivered" },
  { icon: Briefcase, text: "4.9/5 Client Satisfaction" },
];

export const TrustBar = () => {
  return (
    <section className="relative py-8 overflow-hidden border-y border-border/20">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-card/50 to-background" />
      
      <div className="marquee">
        <div className="marquee-content">
          {[...trustItems, ...trustItems].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 px-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {item.text}
              </span>
              <span className="text-primary/40 ml-4">•</span>
            </motion.div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {[...trustItems, ...trustItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8"
            >
              <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {item.text}
              </span>
              <span className="text-primary/40 ml-4">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
