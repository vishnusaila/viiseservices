import React from "react";
import { Users, Award, Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; // Assuming Card component is available

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Staggered entrance for each stat
    },
  },
};

const stats = [
  { number: "100+", label: "Projects Delivered", icon: <Award className="h-7 w-7" /> },
  { number: "98%", label: "Client Satisfaction", icon: <Star className="h-7 w-7" /> },
  { number: "50+", label: "Expert Consultants", icon: <Users className="h-7 w-7" /> },
  { number: "30+", label: "Countries Served", icon: <TrendingUp className="h-7 w-7" /> },
];

const StatsSection = () => {
  const ACCENT_COLOR = 'text-[#11d4d4]';
  const ACCENT_PULSE = 'bg-[#11d4d4]/30 dark:bg-[#11d4d4]/40';

  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group"
              variants={fadeIn}
              custom={index}
            >
              <Card 
                className="p-6 md:p-8 text-center h-full transition-all duration-300 transform group-hover:shadow-xl group-hover:scale-[1.03] group-hover:border-[#11d4d4] dark:group-hover:shadow-[#11d4d4]/10"
              >
                <CardContent className="p-0">
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    {/* Animated pulsing background */}
                    <div className={`absolute inset-0 rounded-full ${ACCENT_PULSE} opacity-40 animate-pulse`}></div>
                    <div className={`relative flex items-center justify-center w-full h-full ${ACCENT_COLOR} rounded-full bg-[#11d4d4]/10 dark:bg-[#11d4d4]/20`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-base font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;