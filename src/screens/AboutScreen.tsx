import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Lightbulb, Users, Award, ArrowRight, Heart, Zap, Globe, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutScreen = () => {
  const [activeSection, setActiveSection] = useState('mission');
  type SectionVisibility = {
    hero?: boolean;
    mission?: boolean;
    values?: boolean;
    team?: boolean;
    stats?: boolean;
  };
  const [isVisible, setIsVisible] = useState<SectionVisibility>({});
  const [typedText, setTypedText] = useState('');
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  
  const fullText = "Transforming Ideas into Digital Reality";
  const stats = [
    { number: '50+', label: 'Projects Delivered', icon: Code },
    { number: '50+', label: 'Happy Clients', icon: Heart },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Zap }
  ];

  const team = [
    { name: 'Yogesh Raval', role: 'CEO & Founder', specialty: 'Strategic Vision' },
    { name: 'Jaimin Raval', role: 'CTO', specialty: 'Technical Leadership' },
    { name: 'Ms. Bansi', role: 'Lead Designe & Project Manager', specialty: 'UI/UX Excellence' },
    { name: 'Mr. Chetan', role: 'Marketing Manager', specialty: 'Client Success' }
  ];

  const values = [
    { 
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies to deliver solutions that push boundaries.',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships through exceptional service.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quality Excellence',
      description: 'Every pixel, every line of code, every interaction is crafted with meticulous attention.',
      icon: Award,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Global Impact',
      description: 'Creating digital solutions that make a difference across industries and borders.',
      icon: Globe,
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Stats animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % 4); // 4 stats total
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Intersection observer simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({ hero: true, mission: true, values: true, team: true, stats: true });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
        < Header />
        {/* Hero Section */}
      <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/60 to-pink-100/60 backdrop-blur-sm"></div>
        <div className="relative z-10 px-6 py-20 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-800 via-purple-700 to-pink-700 bg-clip-text text-transparent mb-6">
              YORANZA
            </h1>
            <p className="text-2xl md:text-4xl text-purple-700 font-light tracking-wide">
              Technologies
            </p>
          </div>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-600 mx-auto" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-purple-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-center space-x-8">
            {['mission', 'values', 'team', 'stats'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'text-gray-600 hover:text-purple-700 hover:bg-purple-100'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Mission Section */}
        {activeSection === 'mission' && (
          <div className={`transition-all duration-800 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  At Yoranza Technologies, we believe in the transformative power of digital innovation. 
                  We do not just build applications—we craft experiences that connect, inspire, and drive success.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  Our passionate team combines cutting-edge technology with creative design to bring your 
                  boldest ideas to life. Every project is a journey of collaboration, innovation, and excellence.
                </p>
                <a href="/contact" className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
                  Start Your Journey
                  <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full animate-pulse opacity-40"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full animate-spin slow opacity-60"></div>
                  <div className="absolute inset-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Values Section */}
        {activeSection === 'values' && (
          <div className={`transition-all duration-800 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-16">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105"
                >
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                  <div className="absolute top-4 right-4">
                    <Star className="w-5 h-5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeSection === 'team' && (
          <div className={`transition-all duration-800 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-16">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105 text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {member.specialty}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        {activeSection === 'stats' && (
          <div className={`transition-all duration-800 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-16">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group relative p-8 rounded-2xl text-center transition-all duration-500 ${
                    currentStatIndex === index
                      ? 'bg-gradient-to-br from-purple-100 to-pink-100 scale-105 shadow-xl shadow-purple-500/20 border-2 border-purple-400'
                      : 'bg-white/80 border border-gray-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10'
                  }`}
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {stat.label}
                  </p>
                  {currentStatIndex === index && (
                    <div className="absolute -top-2 -right-2">
                      <div className="w-6 h-6 bg-purple-500 rounded-full animate-ping"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-t border-purple-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Ideas?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Let us build something extraordinary together.
          </p>
          <a href="/contact" className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
            Get Started Today
            <ArrowRight className="inline ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </div>
      
    <Footer />
    </main>
  );
};

export default AboutScreen;