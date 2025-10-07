import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  Clock,
  Shield,
  Zap,
  Target,
  Award,
  Database,
  Cloud,
  Settings,
  Search,
  Mail,
  Share2
} from 'lucide-react';

const ServiceScreen = () => {
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      id: 1,
      icon: <Code className="w-12 h-12" />,
      title: "Website Development",
      description: "Custom websites built with cutting-edge technologies",
      longDescription: "We create responsive, fast, and secure websites using modern frameworks like React, Next.js, and Vue.js. Our development process ensures scalability and optimal performance.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Security First"],
      technologies: ["React", "Next.js", "Node.js", "MongoDB"],
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50",
      price: "Starting at $2,999"
    },
    {
      id: 2,
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      longDescription: "Build powerful mobile apps for iOS and Android using React Native, Flutter, or native development. We focus on user experience and performance optimization.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
      price: "Starting at $4,999"
    },
    {
      id: 3,
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface designs",
      longDescription: "Create stunning user interfaces and experiences that engage users and drive conversions. Our design process focuses on usability and aesthetic appeal.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
      color: "from-green-600 to-teal-600",
      bgColor: "bg-green-50",
      price: "Starting at $1,999"
    },
    {
      id: 4,
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies",
      longDescription: "Boost your online presence with our data-driven marketing strategies. We help you reach your target audience and maximize ROI through various digital channels.",
      features: ["SEO Optimization", "Social Media", "PPC Campaigns", "Analytics"],
      technologies: ["Google Analytics", "Facebook Ads", "Google Ads", "SEMrush"],
      color: "from-red-600 to-orange-600",
      bgColor: "bg-red-50",
      price: "Starting at $1,499/month"
    }
  ];

  const additionalServices = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Optimized database architecture and management"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions for digital assets"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "API Development",
      description: "RESTful and GraphQL API development and integration"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap",
      icon: <Search className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Create wireframes and interactive prototypes for validation",
      icon: <Palette className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Development",
      description: "Build your solution using best practices and modern technologies",
      icon: <Code className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing and deployment to production environment",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award-Winning Team",
      description: "Our team has won multiple industry awards for excellence"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Delivery",
      description: "We pride ourselves on delivering projects on schedule"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance services"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Focus on achieving measurable business outcomes"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      <Header />
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full text-sm font-medium text-blue-600 mb-6 border border-blue-200">
              <Star className="w-4 h-4" />
              Premium Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Our Services
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Transform your business with our comprehensive digital solutions. From web development to digital marketing, we have got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Cards */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-500 ${
                    activeService === index 
                      ? `${service.bgColor} border-blue-300 shadow-xl scale-105` 
                      : 'bg-white/80 backdrop-blur-sm border-gray-200 hover:border-blue-200 hover:shadow-lg'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center gap-2 text-blue-600 font-medium">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Details */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${services[activeService].color} text-white mb-6 inline-block`}>
                  {services[activeService].icon}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {services[activeService].title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {services[activeService].longDescription}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {services[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    {services[activeService].price}
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{step.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Yoranza?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us discuss how we can help transform your business with our services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = "mailto:jaiminraval100@gmail.com"}
              className="group px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              View Portfolio
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default ServiceScreen;