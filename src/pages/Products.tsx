import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
// Assuming these are placeholders for actual file imports
import video1 from "@/assets/company-video.mp4"; 
import background from "@/assets/thumb.jpg"; 

import {
  ArrowRight,
  UserCheck,
  Bot,
  Eye,
  Zap,
  CheckCircle,
  Globe,
  Compass,
  LayoutGrid,
  Lightbulb,
} from 'lucide-react';

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// --- Product Data Extraction (Retizen is the singular product, these are its modules/features) ---
const retizenProducts = [
  {
    icon: UserCheck,
    title: 'Retizen App: Citizen Reporting',
    shortDescription: "The direct link to improving your community. Effortlessly capture, submit, and track civic issues with pictures and videos.",
    fullDescription: "The Retizen App is designed as your direct link to improving your community. It's built for simplicity and impact, ensuring every voice can be heard and every issue addressed efficiently. Key features include Simple & Intuitive Reporting, Accurate Location & Tracking via GPS, and Inclusive Design crafted for all literacy levels.",
    link: '#retizen-app',
  },
  {
    icon: Bot,
    title: 'AI Data Engine: Intelligent Processing',
    shortDescription: "A sophisticated AI backend that transforms raw citizen reports into actionable, categorized, and prioritized intelligence.",
    fullDescription: "At the core of our solution is a sophisticated AI-powered data engine. This engine is the brain that transforms raw citizen reports into actionable intelligence, ensuring efficiency and accuracy at every step. It performs Real-time Review, Smart Categorization, Auto-Priority Assignment, Continuous AI Training, and Fraud Detection.",
    link: '#ai-engine',
  },
  {
    icon: LayoutGrid,
    title: 'Management Dashboards: Governance Insights',
    shortDescription: "Intuitive, multi-level dashboards providing government officials with a real-time, comprehensive overview of civic issues.",
    fullDescription: "Our intuitive management dashboards provide government officials with a comprehensive, real-time overview of civic issues. This tool empowers them with the insights needed to make informed decisions and act swiftly. Features include Filterable Insights, Multi-Departmental Evaluation, Tiered Access, and AI-Driven Commands/Suggested Escalations.",
    link: '#dashboards',
  },
];

// --- Vision & Mission Data Extraction ---
const visionContent = {
  title: 'Our Vision: Community & Technology Collaboration',
  icon: Lightbulb,
  description: "We envision a future where technology and communities collaborate for better living. Our goal is to build a future where technology enhances urban and rural living, fostering a more engaged and efficient society. Our vision centres on three key pillars: citizen empowerment, AI-driven governance, and comprehensive social issue monitoring.",
};

const missionContent = {
  title: 'Our Innovative Approach: Empowerment & Efficiency',
  icon: Compass,
  description: "Transforming Civic Governance with AI & Citizen Engagement. Our innovative approach empowers citizens, enables governments, and enhances social responsibility. We aim to cultivate a deep-rooted culture of civic participation, transforming citizens from passive observers to active stakeholders in their communities.",
};


// --- Component Implementation ---

const ProductPage = () => {
  const videoSrc = video1; // Using the actual uploaded video's file name
  const videoThumbnail = background; // Placeholder for an actual video thumbnail image (you should replace this)

  // Tailwind classes for the blue/cyan accent color
  const ACCENT_COLOR = 'text-[#11d4d4]';
  const ACCENT_BG = 'bg-[#11d4d4]';
  const ACCENT_HOVER_BG = 'hover:bg-[#0fbebe]';
  const ACCENT_BORDER = 'border-[#11d4d4]';

  return (
    <div className="min-h-screen pt-16 bg-background text-foreground">

      {/* 1. Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-5xl leading-tight mb-4">
              <span className="inline text-black dark:text-white">AI for Smart Governance:</span>
              <span className={`inline ${ACCENT_COLOR}`}> A New Era of Civic Engagement</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed mb-10 text-muted-foreground max-w-3xl mx-auto">
              Retizen transforms civic governance by seamlessly integrating AI and empowering citizens to become active contributors to urban and rural life improvement.
            </p>

            {/* Video Player (16:9 Aspect Ratio) - ADDED POSTER ATTRIBUTE */}
            <div className="mx-auto max-w-5xl mb-10 shadow-2xl rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.01] bg-black/50">
              <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={videoSrc}
                  controls
                  poster={videoThumbnail} // This is the new thumbnail attribute
                  aria-label="Retizen App Demo Video"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <Button
              className={`text-white ${ACCENT_BG} ${ACCENT_HOVER_BG} hover:text-black transition-colors duration-300`}
              size="lg"
              asChild
            >
              <Link to="/get-started">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 1.5. Retizen App Overview Section (NEW) */}
      <section 
        className="relative py-16 sm:py-20 bg-cover bg-center" 
        style={{ backgroundImage: `url('${background}')`, backgroundAttachment: 'fixed' }}
      >
        {/* Low Opacity Overlay for Dark/Light Mode Adaptability */}
        <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/80 backdrop-blur-sm"></div>
        
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            className="max-w-4xl mx-auto p-6 sm:p-8 rounded-xl shadow-2xl bg-white/50 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4 ${ACCENT_COLOR}`}>
              RETIZEN
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-black dark:text-white">
              The Retizen App is designed as your direct link to improve your community. It's built for simplicity and impact, ensuring every voice can be heard and every issue addressed efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      
      {/* 1.6 Our Vision Section */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            className="max-w-3xl mx-auto mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-black dark:text-white">
              Our Vision
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We are building a future where technology enhances urban and rural living, fostering a more engaged and efficient society. 
              Our vision centres on three key pillars: citizen empowerment, AI-driven governance, and comprehensive social issue monitoring.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1 */}
            <motion.div variants={fadeIn}>
              <Card className="p-6 h-full shadow-lg rounded-xl border-t-4 border-[#11d4d4] dark:border-t-4 dark:border-[#11d4d4]">
                <CardHeader className="p-0 mb-4">
                  <div className="w-12 h-12 text-[#11d4d4] rounded-full flex items-center justify-center mb-3">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Empowering Citizens</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground text-base">
                    Foster a culture of civic participation, making every citizen an active contributor to urban and rural lifestyle improvement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeIn}>
              <Card className="p-6 h-full shadow-lg rounded-xl border-t-4 border-[#11d4d4] dark:border-t-4 dark:border-[#11d4d4]">
                <CardHeader className="p-0 mb-4">
                  <div className="w-12 h-12 text-[#11d4d4] rounded-full flex items-center justify-center mb-3">
                    <Bot className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Leveraging AI for e-Governance</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground text-base">
                    Automate processes and reduce manual workloads, ensuring efficient resource allocation and quicker responses.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeIn}>
              <Card className="p-6 h-full shadow-lg rounded-xl border-t-4 border-[#11d4d4] dark:border-t-4 dark:border-[#11d4d4]">
                <CardHeader className="p-0 mb-4">
                  <div className="w-12 h-12 text-[#11d4d4] rounded-full flex items-center justify-center mb-3">
                    <Eye className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Tiered Monitoring for Social Issues</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground text-base">
                    Implement a robust monitoring system, from AI and local wards to central agencies, for effective issue resolution.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Products Section (Retizen Modules) */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
              The Retizen Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground">
              Our complete solution seamlessly connects citizen reports to government action through intelligent, automated processing.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {retizenProducts.map((product, index) => (
              <motion.div
                key={product.title}
                className="group h-full"
                variants={fadeIn}
                custom={index}
              >
                <Card
                  className="h-full flex flex-col p-6 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-[#11d4d4]/20 dark:hover:shadow-[#11d4d4]/10 transform hover:-translate-y-1 border-2 border-transparent hover:border-[#11d4d4]/50"
                >
                  <CardHeader className="p-0 mb-4">
                    <div className={`w-14 h-14 ${ACCENT_BG} rounded-full flex items-center justify-center text-white mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground dark:group-hover:bg-primary dark:group-hover:text-primary-foreground`}>
                      <product.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className={`text-xl font-bold ${ACCENT_COLOR}`}>{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex flex-col flex-grow">
                    <p className="mb-6 leading-relaxed flex-grow text-muted-foreground">
                      {product.shortDescription}
                    </p>
                    <Button
                      variant="outline"
                      className={`w-full ${ACCENT_BORDER} ${ACCENT_COLOR} ${ACCENT_HOVER_BG} hover:text-black transition-transform duration-300`}
                      asChild
                    >
                      <Link to={product.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="py-20 lg:py-28 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
              Driving a Smarter Tomorrow
            </h2>
            <p className="text-lg text-muted-foreground">
              Our core principles guide the development of technology that truly serves society.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Vision Card */}
            <motion.div variants={fadeIn}>
              <Card className="h-full p-6 bg-card shadow-lg dark:shadow-xl dark:shadow-primary/10 border-t-4 border-[#11d4d4]">
                <CardHeader className="p-0 mb-4">
                  <div className={`w-12 h-12 ${ACCENT_COLOR} rounded-full flex items-center justify-center mb-3`}>
                    <visionContent.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">{visionContent.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-base text-muted-foreground">{visionContent.description}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-start space-x-2 text-primary">
                      <CheckCircle className="h-4 w-4 text-[#11d4d4] mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Citizen Empowerment</span>
                    </li>
                    <li className="flex items-start space-x-2 text-primary">
                      <CheckCircle className="h-4 w-4 text-[#11d4d4] mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">AI-Driven Governance</span>
                    </li>
                    <li className="flex items-start space-x-2 text-primary">
                      <CheckCircle className="h-4 w-4 text-[#11d4d4] mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Comprehensive Social Issue Monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mission Card */}
            <motion.div variants={fadeIn} custom={1}>
              <Card className="h-full p-6 bg-card shadow-lg dark:shadow-xl dark:shadow-primary/10 border-t-4 border-[#11d4d4]">
                <CardHeader className="p-0 mb-4">
                  <div className={`w-12 h-12 ${ACCENT_COLOR} rounded-full flex items-center justify-center mb-3`}>
                    <missionContent.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">{missionContent.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-base text-muted-foreground">{missionContent.description}</p>
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-1 text-foreground">Core Benefits:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li><span className={`${ACCENT_COLOR} font-medium`}>For Citizens:</span> Faster issue resolution & greater trust.</li>
                      <li><span className={`${ACCENT_COLOR} font-medium`}>For Government:</span> Data-backed decisions & streamlined operations.</li>
                      <li><span className={`${ACCENT_COLOR} font-medium`}>For Investors:</span> Scalable platform poised for smart city growth.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA / Social Responsibility */}
      <section className="relative py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              <span className="text-black dark:text-white">Ready to Enable</span>
              <span className={` ${ACCENT_COLOR}`}> Civic Harmony?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join the new era of civic engagement and transform your community with AI-powered transparency and efficiency.
            </p>
            <Button
              className={`text-white ${ACCENT_BG} ${ACCENT_HOVER_BG} hover:text-black transition-colors duration-300`}
              size="lg"
              asChild
            >
              <Link to="/contact">
                Schedule a Consultation
                <Globe className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;