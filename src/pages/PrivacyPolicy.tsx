import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Placeholder URL for the Hero background image (Ensure this matches your actual path/variable if locally imported)
import heroBackgroundImage from "@/assets/privacy.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ACCENT_COLOR = 'text-[#11d4d4]';
const ACCENT_BG = 'bg-[#11d4d4]';
const ACCENT_HOVER_BG = 'hover:bg-[#0bbaba]';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 bg-background text-foreground">
      
      {/* Hero Section - UPDATED WITH BACKGROUND IMAGE AND 80% OPACITY OVERLAY */}
      <section className="relative py-20 lg:py-24 bg-muted/20 dark:bg-gray-900/50 overflow-hidden">
        
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackgroundImage})` }}
        >
          {/* Opacity Overlay (80% opaque = 0.8 opacity) */}
          <div className="absolute inset-0 bg-background/80 dark:bg-gray-900/80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <Shield className={`h-12 w-12 mx-auto mb-4 ${ACCENT_COLOR}`} />
            <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-3 text-black dark:text-white">
              <span className={ACCENT_COLOR}>Privacy</span> Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last Updated: October 7, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="p-8 md:p-12 shadow-2xl dark:bg-card border-t-4 border-[#11d4d4]">
            <motion.div 
              className="max-w-4xl mx-auto space-y-8"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              
              <h2 className={`text-3xl font-bold mb-4 ${ACCENT_COLOR}`}>1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                VIISESOLUTIONS respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you. <strong className="font-semibold">You must replace this placeholder text with your actual, legally reviewed privacy content.</strong>
              </p>

              <h2 className={`text-3xl font-bold mb-4 pt-4 ${ACCENT_COLOR}`}>2. Data We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-muted-foreground">
                <li><strong className="text-foreground">Identity Data:</strong> Name, username or similar identifier.</li>
                <li><strong className="text-foreground">Contact Data:</strong> Billing address, email address, and telephone numbers.</li>
                <li><strong className="text-foreground">Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              </ul>

              <h2 className={`text-3xl font-bold mb-4 pt-4 ${ACCENT_COLOR}`}>3. How We Use Your Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use your personal data to: process and manage your requests for services; manage our relationship with you; enable you to participate in promotions; and improve our website, products/services, marketing, customer relationships and experiences.
              </p>

              <h2 className={`text-3xl font-bold mb-4 pt-4 ${ACCENT_COLOR}`}>4. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. By continuing to browse the site, you are agreeing to our use of cookies.
              </p>

              <div className="pt-8 text-center">
                <p className={`text-xl font-semibold ${ACCENT_COLOR} mb-4`}>
                  Have questions about this policy?
                </p>
                <Link to="/contact">
                  <Button className={`${ACCENT_BG} text-white ${ACCENT_HOVER_BG}`} size="lg">
                    Contact Our Legal Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

            </motion.div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;