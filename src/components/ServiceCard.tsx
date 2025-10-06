import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number; // added index for side-to-side effect
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  icon,
  className,
  delay = 0,
  index = 0
}) => {
  const slideX = index < 3 ? -200 : 200;

  return (
    <motion.div
      initial={{ opacity: 0, x: slideX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay / 1000, duration: 0.6, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      {/* Icon */}
      <div className="mb-6">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center 
                     bg-[#11d4d4] dark:bg-[#11d4d4] hover:bg-[#0fbebe] dark:hover:bg-[#0fbebe]
                     text-white dark:text-white transition-colors duration-300 transform hover:scale-110"
        >
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-black dark:text-white 
                       hover:text-[#11d4d4] dark:hover:text-[#11d4d4] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
              <span className="text-sm text-muted-foreground dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
        {/* Learn More Button */}
        <Link
          to="/services"
          className="inline-flex items-center justify-center bg-[#11d4d4] dark:bg-[#11d4d4] text-white dark:text-white 
                     hover:bg-[#0fbebe] dark:hover:bg-[#0fbebe] hover:text-black dark:hover:text-black 
                     font-medium px-4 py-2 rounded-lg transition-colors duration-300"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>

        
      </div>
    </motion.div>
  );
};

export default ServiceCard;
