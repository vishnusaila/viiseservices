import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaBackground from "@/assets/hero-main.jpg"; // <-- Add your background image file

const CTASection = () => {
  return (
    <section className="relative py-20 transition-colors duration-500 overflow-hidden">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBackground})`, opacity: 0.1 }}
      ></div>

      {/* Optional Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 text-center">
        
        <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            Ready to <span className="text-[#11d4d4]">Transform Your Business?</span>
          </h2>
        <p className="text-xl mb-8 leading-relaxed text-black dark:text-white">
          Partner with VIISESOLUTIONS for innovative technology solutions that drive growth, 
          efficiency, and competitive advantage in today's digital landscape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary Button */}
          <Button
            className="bg-[#11d4d4] text-white dark:text-white hover:text-black hover:dark:text-black hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] transition-colors duration-300"
            size="lg"
            asChild
          >
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          {/* Secondary Button */}
          <Button
            className="bg-[#11d4d4] text-white dark:text-white hover:text-black hover:dark:text-black hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
            size="lg"
            asChild
          >
            <Link to="/about">Learn About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
