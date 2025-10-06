import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

// Original testimonial data
const originalTestimonials = [
  { quote: "VIISESOLUTIONS transformed our digital infrastructure...", author: "Sarah Chen", position: "CTO, TechFlow Industries", company: "Fortune 500 Manufacturing" },
  { quote: "The strategic consulting and product development services exceeded our expectations...", author: "Marcus Rodriguez", position: "VP of Engineering, DataStream", company: "Fintech Startup" },
  { quote: "Their UI/UX design expertise helped us achieve a 40% increase in user engagement...", author: "Emily Thompson", position: "Product Manager, InnovateCorp", company: "Enterprise Software" }
];

// Duplicate data for a seamless marquee loop
const testimonials = [...originalTestimonials, ...originalTestimonials];

// --- Marquee Component for Horizontal Scroll ---
const TestimonialMarquee = ({ children }) => {
  const marqueeVariants = {
    animate: {
      x: ['0%', '-50%'], // Move 50% since content is duplicated once
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40, // Slower speed for comfortable reading
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex space-x-6 lg:space-x-8 min-w-max pb-4" // min-w-max ensures content doesn't wrap
        variants={marqueeVariants}
        animate="animate"
      >
        {children}
      </motion.div>
    </div>
  );
};

const TestimonialsSection = () => {
  const ACCENT_COLOR = 'text-[#11d4d4]';
  const ACCENT_BORDER_HOVER = 'hover:border-[#11d4d4]';

  return (
    <section className="py-20 lg:py-32 bg-muted/20 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6 text-foreground">
            What Our <span className={ACCENT_COLOR}>Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by industry leaders worldwide for delivering exceptional results.
          </p>
        </motion.div>

        {/* Marquee Wrapper */}
        <div className="overflow-hidden">
          <TestimonialMarquee>
            {testimonials.map((t, i) => (
              // Individual Testimonial Card
              <div
                key={i} // Use index as key since testimonial data is duplicated
                className="w-[300px] sm:w-[350px] flex-shrink-0"
              >
                <div 
                  className={`p-6 sm:p-8 rounded-xl bg-card shadow-lg border-2 border-transparent transition-all duration-300 ${ACCENT_BORDER_HOVER} dark:shadow-xl dark:shadow-black/20 h-full flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className={`h-5 w-5 ${ACCENT_COLOR} fill-current`} />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 italic leading-relaxed">"{t.quote}"</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{t.author}</div>
                    <div className="text-sm text-muted-foreground">{t.position}</div>
                    <div className={`text-sm ${ACCENT_COLOR} font-medium`}>{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </TestimonialMarquee>
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;