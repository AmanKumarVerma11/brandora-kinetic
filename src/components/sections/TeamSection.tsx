import { motion } from "framer-motion";
import { FadeInView, ScaleInView } from "@/components/ui/ParallaxWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Linkedin, Instagram, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Amr Mohamed Fayez Radi",
    role: "Founder & Creative Director",
    description: "Visionary strategist leading brand identity, social media direction, and digital growth. Expert in delivering clean, modern, and effective brand experiences.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&facepad=2",
    gradient: "from-primary to-secondary",
  },
  {
    name: "Nandani Ramchandani",
    role: "Design & Content Lead",
    description: "Specializes in creative design, brand visuals, and content development. Ensures every creative piece speaks the brand's language.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&facepad=2",
    gradient: "from-secondary to-accent",
  },
  {
    name: "Vipul Mahawar",
    role: "Tech & Development Lead",
    description: "Handles websites, landing pages, user experience, and technical execution. Brings ideas to life with clean code and performance-driven builds.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&facepad=2",
    gradient: "from-accent to-primary",
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="gradient-orb gradient-orb-purple w-[500px] h-[500px] bottom-0 left-1/2 -translate-x-1/2 opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeInView>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Team
            </span>
          </FadeInView>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            <AnimatedText text="The Minds Behind" />
            <span className="block gradient-text-blue">
              <AnimatedText text="Brandora Creations" delay={0.3} />
            </span>
          </h2>

          <FadeInView delay={0.2}>
            <p className="text-lg text-muted-foreground">
              A small, dedicated team that works like a powerhouse — skilled, reliable, 
              and focused entirely on your brand's success.
            </p>
          </FadeInView>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <ScaleInView key={member.name} delay={index * 0.1}>
              <motion.div
                className="team-card group h-full"
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-3xl">
                  <div className={`absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10`} />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="team-overlay z-20">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                    <div className="flex gap-3 mt-4">
                      <motion.a
                        href="#"
                        className="w-9 h-9 rounded-full bg-card/80 flex items-center justify-center hover:bg-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href="#"
                        className="w-9 h-9 rounded-full bg-card/80 flex items-center justify-center hover:bg-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Instagram className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href="#"
                        className="w-9 h-9 rounded-full bg-card/80 flex items-center justify-center hover:bg-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Mail className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <div className={`w-12 h-1 mx-auto mb-4 rounded-full bg-gradient-to-r ${member.gradient}`} />
                  <h3 className="text-xl font-display font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            </ScaleInView>
          ))}
        </div>
      </div>
    </section>
  );
};
