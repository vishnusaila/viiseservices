import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-main.jpg";
import backgroundImage from "@/assets/hero-main.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10"></div>

      {/* Background Image with 10% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
        >
          <h1 className="font-heading font-bold text-5xl lg:text-5xl leading-tight">
            <span className="block text-black dark:text-white">Dream Bold,</span>
            <span className="block text-[#11d4d4]">We Build It</span>
          </h1>
          <p className="text-xl text-muted-foreground dark:text-white/80 mt-6 leading-relaxed">
            Transforming ideas into cutting-edge digital solutions. We combine innovation, expertise, 
            and passion to deliver technology that empowers your business and drives real results.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-[#11d4d4] text-black dark:text-white hover:text-black hover:dark:text-black hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] transition-colors duration-300"
              size="lg"
              asChild
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#11d4d4] text-[#11d4d4] dark:text-white hover:bg-[#11d4d4] hover:text-black dark:hover:bg-[#0fbebe]"
              asChild
            >
              <Link to="/services">Discover Our Services</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={heroImage}
            alt="Digital transformation and technology consulting"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;









