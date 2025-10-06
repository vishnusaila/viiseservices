import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const services = [
    'Strategic Business Consulting',
    'Technology Consulting',
    'Product Design & Development',
    'Quality Engineering',
    'UI/UX Design',
    'Data Analytics & Engineering',
    'Talent Solutions',
    'Managed Services'
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

 

  const linkClass = 'text-gray-700 dark:text-gray-300 hover:text-[#11d4d4] dark:hover:text-[#11d4d4] focus:text-[#11d4d4] active:text-[#11d4d4] transition-colors duration-200 text-sm';

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 animate-fade-in-left">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#11d4d4] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="font-heading font-bold text-2xl">
                VIISE<span className="text-[#11d4d4]">SOLUTIONS</span>
              </span>
            </Link>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Leading technology consulting firm delivering innovation, reliability, 
              and customer-centric excellence in digital transformation and product engineering.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                <Linkedin className="h-5 w-5 text-[#11d4d4]" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                <Twitter className="h-5 w-5 text-[#11d4d4]" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                <Github className="h-5 w-5 text-[#11d4d4]" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up stagger-1">
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service}>
                  <Link to="/services" className={linkClass}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in-up stagger-2">
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className={linkClass}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-right">
            <h3 className="font-semibold text-lg mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#11d4d4] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    21172 Walkley Hill Pl<br />
                    Ashburn <br />
                    VA 20148, USA
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#11d4d4] flex-shrink-0" />
                <a href="tel:+1-800-VIISE-01" className={linkClass}>
                  +1 (800) VIISE-01
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#11d4d4] flex-shrink-0" />
                <a href="mailto:hello@viisesolutions.com" className={linkClass}>
                  hello@viisesolutions.com
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © 2025 VIISESOLUTIONS. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className={linkClass}>
                  Privacy Policy
                </Link>
                <Link to="/terms" className={linkClass}>
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Built with excellence for digital transformation
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
