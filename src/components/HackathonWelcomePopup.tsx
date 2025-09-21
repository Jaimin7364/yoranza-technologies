'use client';

import { useState, useEffect } from 'react';
import { 
  X, 
  Trophy, 
  Calendar, 
  Users, 
  ExternalLink, 
  Zap, 
  Clock,
  Target,
  Star,
  ArrowRight,
  Code
} from 'lucide-react';

export default function HackathonWelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set registration deadline date
  const hackathonDate = new Date('2025-10-03T23:59:59');

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('hackathon-popup-seen');
    
    // TEMPORARY: Clear localStorage to always show popup for testing
    localStorage.removeItem('hackathon-popup-seen');
    
    if (!hasSeenPopup) {
      // Show popup after 2 seconds delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        console.log('Hackathon popup should be visible now');
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      console.log('Hackathon popup was already seen by user');
    }
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = hackathonDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    if (isVisible) {
      updateCountdown();
      const timer = setInterval(updateCountdown, 1000);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const closePopup = () => {
    setIsVisible(false);
    // Remember that user has seen the popup
    localStorage.setItem('hackathon-popup-seen', 'true');
  };

  const handleRegister = () => {
    // Mark as seen and redirect
    localStorage.setItem('hackathon-popup-seen', 'true');
    window.open('https://unstop.com/o/mbiQ50t?lb=3gJTxqbX', '_blank');
    setIsVisible(false);
  };

  const handleLearnMore = () => {
    // Close popup and scroll to hackathon section
    localStorage.setItem('hackathon-popup-seen', 'true');
    setIsVisible(false);
    // Scroll to hackathon section
    setTimeout(() => {
      const hackathonSection = document.getElementById('hackathon-section');
      if (hackathonSection) {
        hackathonSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-lg w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl border border-white/20 shadow-2xl overflow-hidden animate-scale-in">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        </div>

        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="relative p-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full text-sm font-medium text-yellow-400 mb-4 border border-yellow-500/30">
            <Zap className="w-4 h-4" />
            🚀 Yoranza HackFest 2025
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Ready to Innovate?
          </h2>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            Join the most exciting hackathon and solve real-world problems in 
            <span className="text-blue-400 font-semibold"> Web, App & ML </span>
            domains!
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <Trophy className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
              <div className="text-sm font-semibold text-white">₹15,000</div>
              <div className="text-xs text-gray-400">Prize Pool</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <Users className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <div className="text-sm font-semibold text-white">Max 4</div>
              <div className="text-xs text-gray-400">Team Size</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <Clock className="w-5 h-5 text-green-400 mx-auto mb-1" />
              <div className="text-sm font-semibold text-white">Online</div>
              <div className="text-xs text-gray-400">Mode</div>
            </div>
          </div>

          {/* Countdown */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 mb-6">
            <div className="text-sm text-gray-400 mb-2">Registration closes in:</div>
            <div className="grid grid-cols-4 gap-2">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="text-lg font-bold text-white">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-400 uppercase">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Star className="w-4 h-4 text-yellow-400" />
              Two rounds: PPT + 24hr coding
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Target className="w-4 h-4 text-blue-400" />
              Registration fee: ₹200/team
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Code className="w-4 h-4 text-purple-400" />
              Theme: "Build. Innovate. Disrupt."
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleRegister}
              className="group w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              Register Now
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={handleLearnMore}
              className="group w-full px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Urgency Message */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-red-400">
            <Clock className="w-3 h-3" />
            {timeLeft.days > 0 ? `Only ${timeLeft.days} days left!` : 'Registration closing soon!'}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-2 left-2 text-2xl text-blue-500/20 font-mono animate-pulse">&lt;/&gt;</div>
        <div className="absolute bottom-2 right-2 text-xl text-purple-500/20 font-mono animate-bounce">{'{}'}</div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}