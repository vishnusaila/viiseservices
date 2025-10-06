import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com'; 
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Heart,
  Globe,
  Award,
  Search,
  Filter,
  Briefcase,
  GraduationCap,
  Star,
  Upload
} from 'lucide-react';
// Assuming this import path is correct for your local environment
import careersImage from '@/assets/careers-hero.jpg'; 


const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Ref for scrolling to the application form
  const applicationFormRef = useRef(null);
  
  // State for General Application Form
  const applicationForm = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const jobCategories = ['All', 'Engineering', 'Design', 'Consulting', 'Sales', 'Operations'];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, mentorship programs, and career advancement.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Work Flexibility',
      description: 'Remote work options, flexible hours, and work-life balance initiatives.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Recognition & Rewards',
      description: 'Performance bonuses, equity participation, and achievement recognition programs.'
    }
  ];

  // Define accent colors
  const ACCENT_COLOR = "text-[#11d4d4]";
  const ACCENT_BG = "bg-[#11d4d4]";
  const ACCENT_HOVER_BG = "hover:bg-[#0bbaba]"; 

  const openPositions = [
    {
      id: 1,
      title: 'Senior Full Stack Engineer',
      category: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our engineering team to build scalable cloud-native applications using modern technologies.',
      requirements: [
        'Strong experience with React, Node.js, and cloud platforms',
        'Expertise in microservices architecture and API design',
        'Experience with containerization and DevOps practices',
        'Strong problem-solving and communication skills'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'UI/UX Design Lead',
      category: 'Design',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead design initiatives for enterprise products, creating exceptional user experiences.',
      requirements: [
        'Proven experience in enterprise UX/UI design',
        'Proficiency in Figma, Sketch, and prototyping tools',
        'Strong understanding of design systems and accessibility',
        'Experience leading design teams and cross-functional collaboration'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Technology Consultant',
      category: 'Consulting',
      location: 'Chicago, IL / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help enterprise clients navigate digital transformation and technology strategy.',
      requirements: [
        'Experience in technology consulting or enterprise solutions',
        'Strong analytical and problem-solving skills',
        'Excellent client communication and presentation abilities',
        'Understanding of cloud platforms and digital transformation'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      category: 'Engineering',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain CI/CD pipelines and cloud infrastructure for our products.',
      requirements: [
        'Strong experience with AWS/Azure and Infrastructure as Code',
        'Expertise in Docker, Kubernetes, and container orchestration',
        'Experience with CI/CD tools like Jenkins, GitLab CI, or GitHub Actions',
        'Knowledge of monitoring and logging tools'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'Sales Development Representative',
      category: 'Sales',
      location: 'Boston, MA / Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Drive new business growth by identifying and qualifying potential enterprise clients.',
      requirements: [
        'Experience in B2B sales, preferably in technology sector',
        'Strong communication and relationship-building skills',
        'Understanding of enterprise software and consulting services',
        'Goal-oriented mindset with proven track record of meeting targets'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'Data Scientist',
      category: 'Engineering',
      location: 'Seattle, WA / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop machine learning models and analytics solutions for our clients.',
      requirements: [
        'Strong background in data science and machine learning',
        'Proficiency in Python, R, and SQL',
        'Experience with ML frameworks like TensorFlow or PyTorch',
        'Strong statistical analysis and data visualization skills'
      ],
      featured: false
    }
  ];

  const filteredJobs = openPositions.filter(job => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const companyStats = [
    { number: '150+', label: 'Team Members', icon: <Users className="h-6 w-6" /> },
    { number: '4.8/5', label: 'Glassdoor Rating', icon: <Star className="h-6 w-6" /> },
    { number: '25+', label: 'Countries', icon: <Globe className="h-6 w-6" /> },
    { number: '95%', label: 'Employee Satisfaction', icon: <Award className="h-6 w-6" /> }
  ];

  // --- Scroll Function ---
  const scrollToApplication = () => {
    if (applicationFormRef.current) {
      applicationFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  const sendGeneralApplication = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    // --- YOUR EMAILJS CREDENTIALS ---
    const SERVICE_ID = 'service_821de98'; 
    const TEMPLATE_ID = 'template_ynpe1xp'; 
    const USER_ID = 'N4PFTNQbKcFBGKYbo'; 
    // --------------------------------

    // NOTE: EmailJS only sends text fields. File upload is handled separately (e.g., via a link in the message).
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, applicationForm.current, USER_ID)
      .then((result) => {
          console.log('Application Success:', result.text);
          setStatusMessage('Application submitted successfully! We will review it shortly.');
          applicationForm.current.reset();
      }, (error) => {
          console.error('Application Error:', error.text);
          setStatusMessage('Failed to submit application. Please ensure all fields are filled.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };


  return (
    <div className="min-h-screen pt-20 bg-background text-foreground">
      {/* Hero Section */}
      <section className="hero-section py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <motion.div variants={fadeIn}>
                <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-black dark:text-white">
                  Build Your <span className={ACCENT_COLOR}>Future</span> With Us
                </h1>
                <p className="text-xl text-black dark:text-white leading-relaxed">
                  Join a team of innovators, problem-solvers, and technology experts who are 
                  shaping the future of digital transformation across industries.
                </p>
              </motion.div>
              
              <motion.div className="grid grid-cols-2 gap-6" variants={fadeIn}>
                <div className="text-center p-4 rounded-xl shadow-lg border-t-4 border-[#11d4d4]/50 dark:bg-card">
                  <div className={`text-3xl font-bold mb-2 ${ACCENT_COLOR}`}>15+</div>
                  <div className="text-sm text-black dark:text-white">Open Positions</div>
                </div>
                <div className="text-center p-4 rounded-xl shadow-lg border-t-4 border-[#11d4d4]/50 dark:bg-card">
                  <div className={`text-3xl font-bold mb-2 ${ACCENT_COLOR}`}>4.8★</div>
                  <div className="text-sm text-black dark:text-white">Employee Rating</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={careersImage} // Placeholder path
                alt="VIISESOLUTIONS career opportunities and workplace"
                className="rounded-2xl shadow-hover w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#11d4d4] rounded-full opacity-20 animate-pulse-subtle"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-muted/30 dark:bg-gray-800 text-black dark:text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {companyStats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                variants={fadeIn}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 dark:bg-gray-700 rounded-full mb-4 shadow-lg">
                  <div className={ACCENT_COLOR}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="culture" className="py-20 lg:py-32 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6 text-black dark:text-white">
              Why Choose <span className={ACCENT_COLOR}>VIISESOLUTIONS</span>
            </h2>
            <p className="text-xl text-black dark:text-white max-w-3xl mx-auto">
              We're committed to creating an environment where our team members can thrive, 
              grow, and make meaningful impact.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                variants={fadeIn}
              >
                <Card className="text-center p-6 h-full shadow-lg border-t-4 border-[#11d4d4]/50 dark:bg-card hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${ACCENT_BG} rounded-full mb-6 text-white`}>
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">{benefit.title}</h3>
                  <p className="leading-relaxed text-sm text-black dark:text-white">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6 text-black dark:text-white">
              Open <span className={ACCENT_COLOR}>Positions</span>
            </h2>
            <p className="text-xl text-black dark:text-white max-w-2xl mx-auto">
              Discover exciting opportunities to join our growing team and make an impact.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div 
            className="mb-12" 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black dark:text-white" />
                <Input
                  placeholder="Search positions..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {jobCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? `${ACCENT_BG} text-white ${ACCENT_HOVER_BG} hover:text-black`
                        : `border-[#11d4d4] ${ACCENT_COLOR} dark:text-white hover:bg-[#11d4d4] hover:text-black`
                    }
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card 
                  className={`shadow-md transition-all duration-300 hover:border-[#11d4d4] dark:bg-card ${
                    job.featured ? 'ring-2 ring-[#11d4d4]/40' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl text-black dark:text-white">{job.title}</CardTitle>
                          {job.featured && (
                            <span className="bg-[#11d4d4] text-white px-2 py-1 text-xs font-medium rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-black dark:text-white">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-[#11d4d4]" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-[#11d4d4]" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <GraduationCap className="h-4 w-4 text-[#11d4d4]" />
                            {job.experience}
                          </div>
                          <span className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded-full text-xs">
                            {job.category}
                          </span>
                        </div>
                      </div>
                      {/* --- APPLY NOW BUTTON WITH SCROLL FEATURE --- */}
                      <Button
                        className={`${ACCENT_BG} text-white ${ACCENT_HOVER_BG} hover:text-black transition-colors duration-300`}
                        size="sm"
                        onClick={scrollToApplication}
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      {/* ------------------------------------------- */}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 leading-relaxed text-black dark:text-white">
                      {job.description}
                    </p>
                    <div>
                      <h4 className="font-medium mb-2 text-black dark:text-white">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-black dark:text-white">
                            <div className="w-1.5 h-1.5 bg-[#11d4d4] rounded-full mt-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className={`text-sm ${ACCENT_COLOR} font-medium`}>
                            +{job.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-12 shadow-lg rounded-lg border dark:bg-card">
                <Briefcase className="h-16 w-16 text-black dark:text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">No positions found</h3>
                <p className="text-black dark:text-white">
                  Try adjusting your search criteria or check back later for new opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Section - Added ref for scrolling */}
      <section ref={applicationFormRef} className="py-20 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6 text-black dark:text-white">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-black dark:text-white">
                We're always looking for exceptional talent. Submit your information 
                and we'll keep you in mind for future opportunities.
              </p>
            </motion.div>

            <Card className="shadow-2xl dark:bg-card border-t-4 border-[#11d4d4]">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-black dark:text-white">General Application</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={applicationForm} onSubmit={sendGeneralApplication} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black dark:text-white">First Name *</label>
                      <Input name="user_first_name" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black dark:text-white">Last Name *</label>
                      <Input name="user_last_name" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black dark:text-white">Email Address *</label>
                      <Input name="user_email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black dark:text-white">Phone Number</label>
                      <Input name="phone_number" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-black dark:text-white">Areas of Interest *</label>
                    <Input name="areas_of_interest" placeholder="e.g., Software Engineering, Data Science, Consulting" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-black dark:text-white">Tell us about yourself *</label>
                    <Textarea 
                      name="user_message"
                      placeholder="Share your background, experience, and what excites you about joining VIISESOLUTIONS..."
                      rows={4}
                      required
                    />
                  </div>

                  {/* --- FILE INPUT FIX: Changed from disabled button to functional input --- */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black dark:text-white">Resume/CV *</label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-3 text-left hover:border-[#11d4d4] transition-colors">
                      <Input 
                        name="resume_file" // Name attribute for file input (will send file name/path, not file content via EmailJS)
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        required 
                        className="p-1 file:bg-[#11d4d4] file:text-white file:font-medium file:border-0 file:rounded-md file:mr-4 file:py-2 file:px-4 hover:file:bg-[#0bbaba] cursor-pointer"
                      />
                      <p className="text-sm text-black dark:text-white mt-2">
                        Note: For full resume processing, please include a link in the message above, as this form primarily transmits text data.
                      </p>
                    </div>
                  </div>
                  {/* ---------------------------------------------------------------------- */}

                  <Button
                    className={`w-full ${ACCENT_BG} text-white ${ACCENT_HOVER_BG} hover:text-black transition-colors duration-300`}
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  {statusMessage && (
                      <p className={`text-center text-sm font-medium pt-2 ${statusMessage.includes('successfully') ? ACCENT_COLOR : 'text-red-500'}`}>
                        {statusMessage}
                      </p>
                    )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              <span className="text-black dark:text-white">Ready to Shape</span>
              <span className={` ${ACCENT_COLOR}`}> the Future?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join VIISESOLUTIONS and be part of a team that's transforming how businesses 
              leverage technology to achieve extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className={`text-white ${ACCENT_BG} ${ACCENT_HOVER_BG} hover:text-black transition-colors duration-300`}
                size="lg"
                asChild
              >
                <Link to="/contact">
                  <Search className="mr-2 h-5 w-5" />
                  Let's Schedule
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Careers;