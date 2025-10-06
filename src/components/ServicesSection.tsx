import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight, Target, Zap, Cloud, Shield, Smartphone, BarChart3 } from "lucide-react";

const services = [
  {
    title: 'Strategic Business Consulting',
    description: 'Transform your business strategy with expert guidance on digital transformation, process optimization, and growth acceleration.',
    features: ['Digital transformation roadmaps','Business process optimization','Growth strategy development','Market analysis & insights'],
    icon: <Target className="h-6 w-6" />
  },
  {
    title: 'Product Design & Development',
    description: 'End-to-end product development from concept to launch with cutting-edge technologies and user-centric design.',
    features: ['Full-stack development','MVP & prototype creation','Scalable architecture design','Performance optimization'],
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    title: 'UI/UX Design Excellence',
    description: 'Create exceptional user experiences with modern design principles, usability testing, and conversion optimization.',
    features: ['User research & personas','Wireframing & prototyping','Visual design systems','Usability testing'],
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: 'Data Analytics & Engineering',
    description: 'Unlock business insights with advanced analytics, machine learning, and intelligent data processing solutions.',
    features: ['Big data processing','Predictive analytics','Real-time dashboards','ML model deployment'],
    icon: <BarChart3 className="h-6 w-6" />
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Modernize your infrastructure with cloud-native solutions, DevOps practices, and scalable architectures.',
    features: ['Cloud migration strategies','DevOps automation','Container orchestration','Security & compliance'],
    icon: <Cloud className="h-6 w-6" />
  },
  {
    title: 'Quality Engineering',
    description: 'Ensure product excellence with comprehensive testing strategies, automation, and continuous quality assurance.',
    features: ['Test automation frameworks','Performance testing','Security testing','CI/CD integration'],
    icon: <Shield className="h-6 w-6" />
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-subtle group">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            Our <span className="text-[#11d4d4]">Expertise</span>
          </h2>
          <p className="text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive sustainable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
             <ServiceCard key={service.title} {...service} delay={index * 200} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            className="bg-[#11d4d4] text-white dark:text-white hover:text-black hover:dark:text-black hover:bg-[#0fbebe] dark:hover:bg-[#0fbebe] transition-colors duration-300"
            size="lg" 
            asChild
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
