import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Placeholder URL for the Hero background image

import heroBackgroundImage from "@/assets/terms.jpg";
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ACCENT_COLOR = 'text-[#11d4d4]';
const ACCENT_BG = 'bg-[#11d4d4]';
const ACCENT_HOVER_BG = 'hover:bg-[#0bbaba]';

const TermsAndConditions: React.FC = () => {
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
            <Award className={`h-12 w-12 mx-auto mb-4 ${ACCENT_COLOR}`} />
            <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-3 text-black dark:text-white">
              Website <span className={ACCENT_COLOR}>Terms</span> and Conditions
            </h1>
            <p className="text-lg text-muted-foreground">
              Effective Date: September 1, 2025
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
              
              <h2 className={`text-3xl font-bold mb-4 ${ACCENT_COLOR}`}>1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using our website, you agree to be bound by these Terms and Conditions and all terms incorporated by reference. If you do not agree to these terms, you may not use our website. <strong className="font-semibold">It is crucial to replace this placeholder text with your actual, legally approved terms of service.</strong>
              </p>

              <h2 className={`text-3xl font-bold mb-4 pt-4 ${ACCENT_COLOR}`}>2. Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the site are protected under applicable copyrights, trademarks, and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use, or publication by you of any such matters or any part of the site is strictly prohibited.
              </p>

              <h2 className={`text-3xl font-bold mb-4 pt-4 ${ACCENT_COLOR}`}>3. User Obligations</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to use the website for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the website in any way that could damage the website, services, or the general business of VIISESOLUTIONS. You are responsible for maintaining the confidentiality of your account information.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-muted-foreground">
                <li>Do not harass, abuse, or threaten others or violate any person's legal rights.</li>
                <li>Do not publish or disseminate any obscene or defamatory material.</li>
                <li>Do not engage in any fraudulent activity.</li>
              </ul>

              <h2 className={`text-3xl font-bold mb-4 pt-4 ${ACCENT_COLOR}`}>4. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                VIISESOLUTIONS will not be liable for any damages that may occur to you as a result of your use of our website, to the fullest extent permitted by law. This includes direct, indirect, incidental, punitive, and consequential damages.
              </p>

              <div className="pt-8 text-center">
                <p className={`text-xl font-semibold ${ACCENT_COLOR} mb-4`}>
                  Need clarification on our terms?
                </p>
                <Link to="/contact">
                  <Button className={`${ACCENT_BG} text-white ${ACCENT_HOVER_BG}`} size="lg">
                    Contact Us for Support <ArrowRight className="ml-2 h-5 w-5" />
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

export default TermsAndConditions;