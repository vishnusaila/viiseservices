import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Users, 
  Target, 
  Award,
  Globe,
  TrendingUp,
  Heart,
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react';
import aboutTeamImage from '@/assets/about-team.jpg';
import missionBg from "@/assets/hero-main.jpg";
import ctaBackground from "@/assets/hero-main.jpg";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.'
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: 'Reliability',
      description: 'Consistent delivery of high-quality solutions with unwavering commitment to excellence.'
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: 'Customer-Centric',
      description: 'Your success is our success. We prioritize understanding and exceeding client expectations.'
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: 'Agility',
      description: 'Rapid adaptation to changing requirements with flexible, scalable solutions.'
    }
  ];

  const achievements = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'VIISESOLUTIONS established with a vision to transform businesses through technology.'
    },
    {
      year: '2019',
      title: 'First Major Partnership',
      description: 'Secured strategic partnership with Fortune 500 manufacturing company.'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Extended services to Europe and Asia-Pacific markets.'
    },
    {
      year: '2021',
      title: 'AI & ML Center of Excellence',
      description: 'Launched specialized AI and Machine Learning practice.'
    },
    {
      year: '2022',
      title: 'Cloud Innovation Award',
      description: 'Recognized as "Cloud Innovation Partner of the Year" by leading cloud provider.'
    },
    {
      year: '2023',
      title: '500+ Projects Milestone',
      description: 'Successfully delivered 500+ projects across diverse industries.'
    },
    {
      year: '2024',
      title: 'Sustainability Initiative',
      description: 'Launched green technology consulting and carbon-neutral operations.'
    }
  ];

  const leadership = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      bio: '15+ years in technology leadership, former VP at Microsoft Azure.',
      expertise: ['Strategic Planning', 'Cloud Architecture', 'Team Leadership']
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      bio: 'AI/ML expert with 12+ years at Google and Tesla, PhD in Computer Science.',
      expertise: ['Machine Learning', 'System Architecture', 'Innovation']
    },
    {
      name: 'Emily Rodriguez',
      position: 'Chief Operating Officer',
      bio: 'Operations excellence expert, former McKinsey consultant with MBA from Wharton.',
      expertise: ['Process Optimization', 'Business Strategy', 'Client Relations']
    },
    {
      name: 'David Kim',
      position: 'VP of Engineering',
      bio: 'Full-stack engineering leader, former principal engineer at Amazon Web Services.',
      expertise: ['Software Architecture', 'DevOps', 'Quality Engineering']
    }
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
                  <span className="block text-black dark:text-white">Empowering</span>
                  <span className="block text-[#11d4d4]">Digital Excellence</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed dark:text-white">
                  Founded on the principles of innovation, reliability, and customer-centric excellence, 
                  VIISESOLUTIONS has been at the forefront of digital transformation since 2018.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 corporate-card">
                  <div className="text-3xl font-bold text-accent mb-2 dark:text-[#11d4d4]">6+</div>
                  <div className="text-sm text-muted-foreground dark:text-white">Years Experience</div>
                </div>
                <div className="text-center p-4 corporate-card">
                  <div className="text-3xl font-bold text-accent mb-2 dark:text-[#11d4d4]">50+</div>
                  <div className="text-sm text-muted-foreground dark:text-white">Countries</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#11d4d4] text-black dark:text-white hover:text-black hover:dark:text-black hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] transition-colors duration-300" size="lg" asChild>
                    <Link to="/contact">
                      Partner With Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
              </div>
              
             


              
            </div>

            <div className="relative animate-fade-in-right">
              <img 
                src={aboutTeamImage}
                alt="VIISESOLUTIONS team collaboration"
                className="rounded-2xl shadow-hover w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#11d4d4] rounded-full opacity-20 animate-pulse-subtle"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#11d4d4] hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] rounded-full mb-6 transition-colors duration-300">
                <Target className="h-8 w-8 text-white dark:text-white" />
              </div>
              <h2 className="font-heading font-bold text-3xl mb-6 dark:text-[#11d4d4]">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 dark:text-white">
                To empower businesses worldwide with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital era.
              </p>
              <p className="text-muted-foreground leading-relaxed dark:text-white">
                We believe in the transformative power of technology when combined with strategic thinking, 
                human creativity, and unwavering commitment to excellence.
              </p>
            </div>

            <div className="animate-fade-in-right">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#11d4d4] hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] rounded-full mb-6 transition-colors duration-300">
                <Globe className="h-8 w-8 text-white dark:text-white" />
              </div>
              <h2 className="font-heading font-bold text-3xl mb-6 dark:text-[#11d4d4]">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 dark:text-white">
                To be the global leader in technology consulting, recognized for delivering 
                exceptional value through innovation, expertise, and customer-centric solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed dark:text-white">
                We envision a future where every business, regardless of size or industry, 
                can harness the full potential of technology to achieve sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            Our <span className="text-[#11d4d4]">Core Values</span>
          </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed dark:text-white">
              These fundamental principles guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center corporate-card p-8 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#11d4d4] hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] rounded-full mb-6 text-white dark:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-xl mb-4 dark:text-[#11d4d4]">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed dark:text-white">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      {/* ... Keep your timeline as it is ... */}
       <section className="py-20 bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            Our <span className="text-[#11d4d4]">Journey</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto dark:text-white">
              From startup to industry leader - discover the milestones that shaped our success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-accent/30"></div>
              
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.year}
                  className={`relative flex items-center mb-12 animate-fade-in-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="corporate-card p-6">
                      <div className="text-2xl font-bold text-accent mb-2 dark:text-[#11d4d4]">{achievement.year}</div>
                      <h3 className="font-semibold text-lg mb-3 dark:text-[#11d4d4]">{achievement.title}</h3>
                      <p className="text-muted-foreground dark:text-white">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      
      {/* Leadership Team */}
      {/* ... Keep your leadership section as it is ... */}

      {/* CTA Section */}
      <section className="relative py-20 text-primary-foreground overflow-hidden">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBackground})`, opacity: 0.1 }}
        ></div>

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>

        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            <span className="text-black dark:text-white">Join Our </span>
            <span className="text-[#11d4d4] dark:text-[#11d4d4]">Mission</span>
          </h2>

            <p className="text-xl mb-8 leading-relaxed text-black dark:text-white">
              Whether you're looking to transform your business or join our team of experts, 
              we're here to help you achieve extraordinary results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary Button */}
              <Button
                className="bg-[#11d4d4] text-white dark:text-white hover:text-black hover:dark:text-black hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] transition-colors duration-300"
                size="lg"
                asChild
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              {/* Secondary Button */}
              <Button
                className="bg-[#11d4d4] text-white dark:text-white hover:text-black hover:dark:text-black hover:bg-[#0fbebe] dark:bg-[#11d4d4] dark:hover:bg-[#0fbebe] transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
                size="lg"
                asChild
              >
                <Link to="/careers">View Careers</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating / Moving effect */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#11d4d4] rounded-full opacity-20 animate-floating"></div>
      </section>

    </div>
  );
};

export default About;
