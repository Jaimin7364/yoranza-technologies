import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  ExternalLink,
  Star,
  Users,
  TrendingUp,
  Code,
  Lightbulb
} from 'lucide-react';
import internsJsonData from '../data/interns.json';
import { InternsData, Intern, InternshipStat } from '../types/interns';
import { getIcon } from '../utils/icons';

// Import the JSON data with proper typing
const { internsData, internshipStats }: InternsData = internsJsonData;

export default function InternsScreen() {
  const [selectedIntern, setSelectedIntern] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 border border-white/20">
              <GraduationCap className="w-4 h-4" />
              Our Amazing Interns
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our Talented
              <span className="block text-yellow-300">Intern Alumni</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the incredible journey of our interns who have contributed to groundbreaking projects and grown their careers with Yoranza Technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {internshipStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.iconName)}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interns Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Intern Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each intern brings unique talents and perspectives, contributing to innovative projects while gaining valuable industry experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {internsData.map((intern, index) => (
              <div
                key={intern.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden border border-gray-200"
                onClick={() => setSelectedIntern(selectedIntern === intern.id ? null : intern.id)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                }}
              >
                <div className="p-6">
                  {/* Profile Image */}
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {intern.name.charAt(0)}
                  </div>
                  
                  {/* Basic Info */}
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{intern.name}</h3>
                  <p className="text-blue-600 font-medium text-center mb-3">{intern.role}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>{intern.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>{intern.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-blue-500" />
                      <span className="text-xs">{intern.university}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {intern.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {intern.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{intern.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(intern.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Expand/Collapse indicator */}
                  <div className="text-center">
                    <span className="text-xs text-blue-600 font-medium">
                      {selectedIntern === intern.id ? 'Click to collapse' : 'Click to learn more'}
                    </span>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedIntern === intern.id && (
                  <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                    <div className="pt-6 space-y-4">
                      {/* Projects */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          Key Projects
                        </h4>
                        {intern.projects.map((project, projectIndex) => (
                          <div key={projectIndex} className="bg-white p-3 rounded-lg mb-2">
                            <h5 className="font-medium text-gray-900 text-sm">{project.title}</h5>
                            <p className="text-xs text-gray-600 mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {intern.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-xs text-gray-600 flex items-start gap-2">
                              <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testimonial */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" />
                          Testimonial
                        </h4>
                        <p className="text-xs text-gray-600 italic bg-white p-3 rounded-lg">
                          &quot;{intern.testimonial}&quot;
                        </p>
                      </div>

                      {/* Links */}
                      <div className="flex gap-2">
                        {intern.linkedIn && (
                          <a
                            href={intern.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            LinkedIn
                          </a>
                        )}
                        {intern.github && (
                          <a
                            href={intern.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            GitHub
                          </a>
                        )}
                        {intern.portfolio && (
                          <a
                            href={intern.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Portfolio
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Internship Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our internship program and work on real-world projects with experienced mentors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              Apply for Internship
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}