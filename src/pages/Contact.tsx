import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com'; 
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Search,
  Send,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ACCENT_COLOR = "text-[#11d4d4]";
const ACCENT_BG = "bg-[#11d4d4]";
const ACCENT_HOVER_BG = "hover:bg-[#0bbaba]"; 

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    // --- YOUR EMAILJS CREDENTIALS ---
    const SERVICE_ID = 'service_821de98'; 
    const TEMPLATE_ID = 'template_whpfjsi'; 
    const USER_ID = 'N4PFTNQbKcFBGKYbo'; 
    // --------------------------------

    // Using emailjs.sendForm from emailjs-com
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
          console.log('EmailJS Success:', result.text);
          setStatusMessage('Message sent successfully! We will be in touch soon.');
          form.current.reset();
      }, (error) => {
          console.error('EmailJS Error:', error.text);
          setStatusMessage('Failed to send message. Please try again or contact us by phone.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen pt-20 bg-background text-foreground">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-black dark:text-white">
              Let&apos;s Start Your <span className={ACCENT_COLOR}>Digital Journey</span>
            </h1>
            <p className="text-xl leading-relaxed text-black dark:text-white">
              Ready to transform your business? Contact our experts for a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <Card className="shadow-2xl dark:bg-card border-t-4 border-[#11d4d4]">
                <CardHeader>
                  <CardTitle className="text-2xl text-black dark:text-white">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent>
                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Form inputs with required 'name' attributes for EmailJS */}
                      <Input name="user_first_name" placeholder="First Name *" required />
                      <Input name="user_last_name" placeholder="Last Name *" required />
                    </div>
                    <Input name="user_email" type="email" placeholder="Email Address *" required />
                    <Input name="company_name" placeholder="Company Name" />
                    <Input name="phone_number" placeholder="Phone Number" />
                    <Textarea 
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                    />
                    <Button 
                      className={`w-full text-white ${ACCENT_BG} ${ACCENT_HOVER_BG} hover:text-black transition-colors duration-300`} 
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    {statusMessage && (
                      <p className={`text-center text-sm font-medium pt-2 ${statusMessage.includes('successfully') ? ACCENT_COLOR : 'text-red-500'}`}>
                        {statusMessage}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <div>
                <h2 className="font-heading font-bold text-3xl mb-6 text-black dark:text-white">
                  Connect With <span className={ACCENT_COLOR}>Our Experts</span>
                </h2>
                <p className="text-lg leading-relaxed text-black dark:text-white">
                  Our team is ready to help you navigate your digital transformation journey.
                </p>
              </div>

              <div className="space-y-6">
                {/* Contact Info Blocks */}
                <div className="flex items-start space-x-4 p-4 rounded-xl shadow-md border-l-4 border-[#11d4d4]/50 dark:bg-card">
                  <div className={`w-12 h-12 ${ACCENT_BG} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-black dark:text-white">Email Us</h3>
                    <p className="text-black dark:text-white">hello@viisesolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl shadow-md border-l-4 border-[#11d4d4]/50 dark:bg-card">
                  <div className={`w-12 h-12 ${ACCENT_BG} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-black dark:text-white">Call Us</h3>
                    <p className="text-black dark:text-white">+1 (800) VIISE-01</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl shadow-md border-l-4 border-[#11d4d4]/50 dark:bg-card">
                  <div className={`w-12 h-12 ${ACCENT_BG} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-black dark:text-white">Visit Us</h3>
                    <p className="text-black dark:text-white">
                      21172 Walkley Hill Pl<br />
                      Ashburn VA 20148,USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl shadow-md border-l-4 border-[#11d4d4]/50 dark:bg-card">
                  <div className={`w-12 h-12 ${ACCENT_BG} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-black dark:text-white">Business Hours</h3>
                    <p className="text-black dark:text-white">
                      Mon - Fri: 9:00 AM - 6:00 PM PST<br />
                      24/7 Emergency Support
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-muted/30 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-foreground">
              <span className={` ${ACCENT_COLOR}`}> Ready to</span>
              <span className="text-black dark:text-white"> Transform </span>
              <span className={` ${ACCENT_COLOR}`}> Your Business?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Schedule a consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className={`text-white ${ACCENT_BG} ${ACCENT_HOVER_BG} hover:text-black transition-colors duration-300`}
                size="lg"
                asChild
              >
                <Link to="/contact">
                  <Search className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;