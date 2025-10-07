import { GraduationCap, ArrowRight, Star, Users, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';
import internsJsonData from '../data/interns.json';
import { InternsData, FeaturedIntern, InternshipStat } from '../types/interns';
import { getIcon } from '../utils/icons';

// Import the JSON data with proper typing
const { featuredInterns, internshipHighlights }: InternsData = internsJsonData;

export default function InternsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full text-sm font-medium text-blue-600 mb-6 border border-blue-200">
            <GraduationCap className="w-4 h-4" />
            Our Amazing Interns
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Empowering the Next Generation of
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tech Professionals
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Yoranza, we believe in nurturing talent. Our internship program provides hands-on experience 
            with real-world projects, mentorship from industry experts, and a pathway to successful careers.
          </p>
        </div>

        {/* Internship Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {internshipHighlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {getIcon(highlight.iconName, "w-5 h-5")}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{highlight.number}</div>
              <div className="text-gray-600">{highlight.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Interns */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Featured Intern Success Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInterns.map((intern, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/50"
              >
                {/* Profile Circle */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {intern.name.charAt(0)}
                </div>
                
                {/* Intern Info */}
                <h4 className="text-lg font-bold text-gray-900 text-center mb-2">{intern.name}</h4>
                <p className="text-blue-600 font-medium text-center mb-2">{intern.role}</p>
                <p className="text-sm text-gray-600 text-center mb-4">{intern.duration}</p>
                
                {/* Achievement */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-700 text-center font-medium">
                    🏆 {intern.achievement}
                  </p>
                </div>
                
                {/* Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(intern.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Learn More About Our Interns?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover detailed profiles, projects, and success stories of all our talented interns 
            who have contributed to innovative solutions at Yoranza.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/interns"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              View All Interns
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="group px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Apply for Internship
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}