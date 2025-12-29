import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInView } from "@/components/ui/ParallaxWrapper";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al Mansouri",
    role: "CEO, Skyline Properties Dubai",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&facepad=2",
    quote: "Brandora transformed our digital presence completely. Within 3 months, we were generating more leads than we could handle. Their team is professional, responsive, and delivers real results.",
    rating: 5,
  },
  {
    name: "Sara Khan",
    role: "Founder, Luxe Fashion Store",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&facepad=2",
    quote: "Finally, an agency that understands both creativity and performance. Our social media engagement increased 5X and our online sales tripled. Couldn't be happier!",
    rating: 5,
  },
  {
    name: "Mohammed Hassan",
    role: "Director, MedCare Clinics",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&auto=format&fit=crop&facepad=2",
    quote: "The SEO results exceeded our expectations. We went from page 5 to ranking #1 for our key terms. The patient inquiries have increased dramatically since working with Brandora.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="gradient-orb gradient-orb-blue w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInView>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Testimonials
            </span>
          </FadeInView>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            <AnimatedText text="What Our Clients" />
            <span className="block gradient-text">
              <AnimatedText text="Say About Us" delay={0.2} />
            </span>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <div className="relative">
              {/* Quote icon */}
              <div className="absolute -top-8 left-0 opacity-20">
                <Quote className="w-24 h-24 text-primary" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="testimonial-card text-center py-12 px-8"
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-medium leading-relaxed mb-10 text-foreground">
                    "{testimonials[current].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div className="text-left">
                      <p className="font-display font-bold text-lg">
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-card transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === current 
                          ? "w-8 bg-primary" 
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-card transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};
