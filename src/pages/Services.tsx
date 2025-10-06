import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Target, 
  Settings,
  Smartphone,
  BarChart3,
  Cloud,
  Shield,
  Users,
  Lightbulb,
  Zap,
  TrendingUp,
  CheckCircle,
  Award
} from 'lucide-react';
import servicesImage from '@/assets/services-hero.jpg';
import ctaBackground from "@/assets/hero-main.jpg";
const Services = () => {
  const coreServices = [
    {
      title: 'Strategic Business Consulting',
      description: 'Transform your business strategy with expert guidance on digital transformation, process optimization, and growth acceleration.',
      features: [
        'Digital transformation roadmaps',
        'Business process optimization', 
        'Growth strategy development',
        'Market analysis & competitive intelligence',
        'Change management consulting',
        'ROI optimization strategies'
      ],
      icon: <Target className="h-6 w-6 text-white" />,
    },
    {
      title: 'Technology Consulting',
      description: 'Comprehensive technology advisory services to modernize your infrastructure and optimize IT operations.',
      features: [
        'Technology architecture design',
        'Legacy system modernization',
        'Vendor selection & management',
        'IT governance & compliance',
        'Technology risk assessment',
        'Digital workplace solutions'
      ],
      icon: <Settings className="h-6 w-6 text-white" />,
    },
    {
      title: 'Managed Services',
      description: 'End-to-end managed services to support, maintain, and optimize your technology infrastructure.',
      features: [
        '24/7 infrastructure monitoring',
        'Application maintenance & support',
        'Security operations center (SOC)',
        'Disaster recovery & backup',
        'Performance optimization',
        'Service level agreement (SLA) management'
      ],
      icon: <Shield className="h-6 w-6 text-white" />,
    }
  ];

  const specializedServices = [
    {
      title: 'Product Design & Development',
      description: 'End-to-end product development from ideation to market launch with modern technologies.',
      features: [
        'MVP development & prototyping',
        'Full-stack application development',
        'Mobile app development (iOS/Android)',
        'Progressive web applications',
        'API design & development',
        'Microservices architecture'
      ],
      icon: <Smartphone className="h-6 w-6 text-white" />,
    },
    {
      title: 'Quality Engineering',
      description: 'Comprehensive quality assurance with automated testing and continuous quality practices.',
      features: [
        'Test automation frameworks',
        'Performance & load testing',
        'Security testing & SAST/DAST',
        'CI/CD pipeline integration',
        'Quality metrics & reporting',
        'User acceptance testing (UAT)'
      ],
      icon: <Award className="h-6 w-6 text-white" />,
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance engagement and drive conversion.',
      features: [
        'User research & persona development',
        'Information architecture design',
        'Wireframing & interactive prototyping',
        'Visual design & brand integration',
        'Usability testing & optimization',
        'Design system creation'
      ],
      icon: <Zap className="h-6 w-6 text-white" />,
    },
    {
      title: 'Data Analytics & Engineering',
      description: 'Transform raw data into actionable insights with advanced analytics and machine learning.',
      features: [
        'Data pipeline design & implementation',
        'Business intelligence & reporting',
        'Predictive analytics & ML models',
        'Real-time analytics dashboards',
        'Data governance & quality',
        'Advanced data visualization'
      ],
      icon: <BarChart3 className="h-6 w-6 text-white" />,
    },
    {
      title: 'Talent Solutions',
      description: 'Strategic talent acquisition and team augmentation for technology roles.',
      features: [
        'Technical talent acquisition',
        'Team augmentation services',
        'Skills assessment & evaluation',
        'Remote team management',
        'Training & upskilling programs',
        'Technology leadership coaching'
      ],
      icon: <Users className="h-6 w-6 text-white" />,
    }
  ];

  const industries = [
    { name: 'Financial Services', description: 'Digital banking, fintech solutions, regulatory compliance', icon: <TrendingUp className="h-6 w-6 text-white" /> },
    { name: 'Healthcare & Life Sciences', description: 'Healthcare IT, telemedicine, clinical data management', icon: <Shield className="h-6 w-6 text-white" /> },
    { name: 'Manufacturing', description: 'Industry 4.0, IoT integration, supply chain optimization', icon: <Settings className="h-6 w-6 text-white" /> },
    { name: 'Retail & E-commerce', description: 'Digital commerce, customer experience, inventory management', icon: <Smartphone className="h-6 w-6 text-white" /> },
    { name: 'Technology & Software', description: 'Product development, DevOps, scalable architectures', icon: <Cloud className="h-6 w-6 text-white" /> },
    { name: 'Energy & Utilities', description: 'Smart grid solutions, renewable energy tech, asset management', icon: <Lightbulb className="h-6 w-6 text-white" /> }
  ];

  const processSteps = [
    { step: '01', title: 'Discovery & Analysis', description: 'Comprehensive assessment of your current state, challenges, and objectives.' },
    { step: '02', title: 'Strategy & Planning', description: 'Develop detailed roadmaps and implementation strategies tailored to your needs.' },
    { step: '03', title: 'Design & Development', description: 'Create and build solutions using best practices and cutting-edge technologies.' },
    { step: '04', title: 'Testing & Quality Assurance', description: 'Rigorous testing and quality validation to ensure optimal performance.' },
    { step: '05', title: 'Deployment & Integration', description: 'Seamless deployment and integration with your existing systems.' },
    { step: '06', title: 'Support & Optimization', description: 'Ongoing support, monitoring, and continuous optimization for peak performance.' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-section py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div>
                
                <h1 className="font-heading font-bold text-5xl lg:text-5xl leading-tight">
                  <span className="block text-black dark:text-white">Comprehensive</span>
                  <span className="block text-[#11d4d4]">Technology Services</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed dark:text-white">
                  From strategic consulting to hands-on development, we deliver end-to-end technology solutions that drive business transformation and sustainable growth.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#11d4d4] text-black dark:text-white hover:text-black hover:dark:text-black hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] transition-colors duration-300" size="lg" asChild>
                  <Link to="/contact">
                    Request Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-[#11d4d4] text-[#11d4d4] dark:text-white hover:bg-[#11d4d4] hover:text-black dark:hover:bg-[#0fbebe]" asChild>
                  <Link to="/products">View Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img src={servicesImage} alt="Technology services hero" className="rounded-2xl shadow-hover w-full h-auto animate-floating" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#11d4d4] rounded-full opacity-20 animate-pulse-subtle"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            Core <span className="text-[#11d4d4]">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto dark:text-white">Our foundational consulting and managed services that form the backbone of successful digital transformation initiatives.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div key={service.title} className="corporate-card p-6 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#11d4d4] hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] rounded-full mb-6 text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-xl mb-4 dark:text-[#11d4d4]">{service.title}</h3>
                <p className="text-muted-foreground dark:text-white">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6 ">Specialized <span className="text-accent dark:text-[#11d4d4]">Expertise</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto dark:text-white">Deep technical expertise in specific domains to address your unique challenges and accelerate innovation across your organization.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <div key={service.title} className="corporate-card p-6 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#11d4d4] hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] rounded-full mb-6 text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-xl mb-4 dark:text-[#11d4d4]">{service.title}</h3>
                <p className="text-muted-foreground dark:text-white">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6 ">Our <span className="text-accent dark:text-[#11d4d4]">Process</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto dark:text-white">A proven methodology ensuring successful project delivery from discovery to ongoing optimization.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="corporate-card p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#11d4d4] hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] rounded-full flex items-center justify-center text-white font-bold mr-4 transition-colors duration-300">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg dark:text-[#11d4d4]">{step.title}</h3>
                </div>
                <p className="text-muted-foreground dark:text-white leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
<section className="relative py-20 text-primary-foreground text-center overflow-hidden">
  {/* Background Image with Opacity */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${ctaBackground})`, opacity: 0.1 }}
  ></div>

  {/* Optional Overlay for better contrast */}
  <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>

  <div className="relative container mx-auto px-4 lg:px-8">
    <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
      <span className="text-black dark:text-white">Ready to </span>
      <span className="text-[#11d4d4] dark:text-[#11d4d4]">Get Started?</span>
    </h2>
    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 dark:text-white">
      Let's discuss how our technology services can accelerate digital transformation and business growth.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Primary Button - same style as first CTA */}
      <Button
        className="bg-[#11d4d4] text-white dark:text-white hover:text-black hover:dark:text-black hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] transition-colors duration-300"
        size="lg"
        asChild
      >
        <Link to="/contact">
          Schedule Consultation
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>

      {/* Secondary Button - same style as first CTA */}
      <Button
        variant="outline"
        size="lg"
        className="border-[#11d4d4] text-[#11d4d4] dark:text-white hover:bg-[#11d4d4] hover:text-black dark:hover:bg-[#0fbebe] transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
        asChild
      >
        <Link to="/about">Learn About Us</Link>
      </Button>
    </div>
  </div>

  {/* Floating / Moving effect */}
  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#11d4d4] rounded-full opacity-20 animate-floating"></div>
</section>

      

    </div>
  );
};

export default Services;
