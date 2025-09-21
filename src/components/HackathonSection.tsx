import { useState, useEffect } from 'react';
import { 
  Zap, 
  Calendar, 
  Users, 
  Trophy, 
  Code, 
  Rocket, 
  Target, 
  ArrowRight, 
  Clock,
  MapPin,
  Star,
  Gift,
  Lightbulb,
  Award,
  ExternalLink,
  X,
  CheckCircle,
  DollarSign,
  Briefcase,
  Coffee,
  Wifi,
  Camera,
  Gamepad2
} from 'lucide-react';

export default function HackathonSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Set registration deadline date
  const hackathonDate = new Date('2025-10-03T23:59:59');

  useEffect(() => {
    setIsVisible(true);
    
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

    // Initial call
    updateCountdown();
    
    // Set up interval
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Innovation Prize",
      description: "Exciting rewards for winners",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Network & Learn",
      description: "Connect with tech enthusiasts",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Build & Launch",
      description: "Turn ideas into reality",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Expert Mentorship",
      description: "Guidance from industry experts",
      color: "from-pink-500 to-red-500"
    }
  ];

  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Two Rounds",
      description: "PPT submission + 24hr coding"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "₹15,000 Prize",
      description: "Cash rewards for top 3 teams"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Max 4 Members",
      description: "Small teams, big impact"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Online Mode",
      description: "Participate from anywhere"
    }
  ];

  const hackathonInfo = {
    overview: "Yoranza HackFest is an innovation-driven hackathon hosted by Yoranza Technologies (yoranza.tech). The hackathon challenges participants to solve real-world problems in Web, App, and Machine Learning domains. The journey consists of two rounds — Presentation (PPT submission) and a 24-hour Coding/Development round.",
    
    whatToExpect: [
      { icon: <Code className="w-5 h-5" />, text: "Web, App & ML problem statements" },
      { icon: <Users className="w-5 h-5" />, text: "Two-round competition format" },
      { icon: <Trophy className="w-5 h-5" />, text: "Cash prizes for top 3 teams" },
      { icon: <Award className="w-5 h-5" />, text: "Certificates for all participants" },
      { icon: <Target className="w-5 h-5" />, text: "Maximum 4 members per team" },
      { icon: <Rocket className="w-5 h-5" />, text: "24-hour coding marathon" }
    ],

    prizes: [
      { position: "1st Place", amount: "₹7,000", icon: <Trophy className="w-6 h-6 text-yellow-500" /> },
      { position: "2nd Place", amount: "₹5,000", icon: <Award className="w-6 h-6 text-gray-400" /> },
      { position: "3rd Place", amount: "₹3,000", icon: <Award className="w-6 h-6 text-orange-500" /> },
      { position: "Registration Fee", amount: "₹200/team", icon: <DollarSign className="w-6 h-6 text-green-500" /> }
    ],

    schedule: [
      { time: "3rd Oct 2025", event: "Registration Deadline", color: "text-red-400" },
      { time: "5th Oct 2025", event: "Round 1 - PPT Submission (Sunday)", color: "text-blue-400" },
      { time: "8th Oct 2025", event: "Round 1 Results (Wednesday)", color: "text-green-400" },
      { time: "11th Oct 2025", event: "Round 2 - 24hr Coding Round (Saturday)", color: "text-purple-400" },
      { time: "15th Oct 2025", event: "Winner Announcement (Wednesday)", color: "text-yellow-400" },
      { time: "20th Oct 2025", event: "Certificates & Prizes Distribution", color: "text-cyan-400" }
    ],

    guidelines: [
      "Team Size: Maximum 4 members per team",
      "Registration Fee: ₹200 per team (non-refundable)",
      "Open to all students and professionals",
      "Maximum 250 teams allowed",
      "Inter-college & inter-specialization teams allowed",
      "All updates shared via email"
    ],

    roundDetails: {
      round1: {
        title: "Round 1 - PPT Submission",
        details: [
          "Submit PPT with maximum 8 slides",
          "Follow the specified slide format",
          "Top 50 teams advance to Round 2",
          "More than 8 slides = Disqualification"
        ]
      },
      round2: {
        title: "Round 2 - Coding/Development (24 hours)",
        details: [
          "Implement your PPT idea in 24 hours",
          "Submit GitHub repository link",
          "Include README with 4+ screenshots",
          "Top 3 winners will be declared"
        ]
      }
    },

    certificates: [
      "Participation Certificate: All registered participants",
      "Selection Certificate: Teams qualifying for Round 2",
      "Winner Certificate: Top 3 winning teams"
    ],

    contact: [
      "Jaimin Raval: 9328782038",
      "Shubh Patel: 6352765272", 
      "Samarth Patel: 9104986027",
      "Ashok Suthar: 8160986698"
    ]
  };

  return (
    <section id="hackathon-section" className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-bounce" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full text-sm font-medium text-yellow-400 mb-6 border border-yellow-500/30 backdrop-blur-sm">
            <Zap className="w-5 h-5" />
            🚀 Yoranza HackFest 2025 - Registration Ends Oct 3rd
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Registration Countdown
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join the most exciting hackathon hosted by <span className="text-blue-400 font-semibold">Yoranza Technologies</span>. 
            Solve real-world problems in <span className="text-purple-400 font-semibold">Web, App & Machine Learning</span> domains!
            <span className="text-red-400 font-semibold block mt-2">Registration closes October 3rd, 2025!</span>
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div 
                key={unit}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Highlights Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
            Why Join HackFest 2025?
          </h3>
          
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${highlights[currentHighlight].color} flex items-center justify-center text-white transition-all duration-500`}>
                {highlights[currentHighlight].icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">{highlights[currentHighlight].title}</h4>
                <p className="text-gray-300">{highlights[currentHighlight].description}</p>
              </div>
            </div>
            
            <div className="flex justify-center gap-2">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHighlight(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentHighlight ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <Calendar className="w-8 h-8 text-red-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Registration Deadline</h4>
            <p className="text-gray-300">October 3rd, 2025</p>
            <p className="text-sm text-red-400 font-semibold">Don't miss out!</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <Clock className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Event Format</h4>
            <p className="text-gray-300">Online Mode</p>
            <p className="text-sm text-gray-400">Two rounds + 24hr coding</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Theme</h4>
            <p className="text-gray-300">Web, App & ML</p>
            <p className="text-sm text-gray-400">&quot;Build. Innovate. Disrupt.&quot;</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Register Before It's Too Late!
            </h3>
            <p className="text-gray-300 mb-8">
              Join hundreds of developers, designers, and innovators in this epic 48-hour coding marathon! 
              <span className="text-red-400 font-semibold block mt-2">Registration closes October 3rd, 2025</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://unstop.com/o/mbiQ50t?lb=3gJTxqbX"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Trophy className="w-5 h-5" />
                Register Now
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
                className="group px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
              <Star className="w-4 h-4 text-yellow-400" />
              {timeLeft.days > 0 ? `Only ${timeLeft.days} days left to register - Don't wait!` : 'Registration closing soon - Register now!'}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 text-6xl text-blue-500/20 font-mono animate-pulse">&lt;/&gt;</div>
        <div className="absolute top-40 right-32 text-4xl text-purple-500/20 font-mono animate-bounce delay-500">{'{}'}</div>
        <div className="absolute bottom-32 left-32 text-5xl text-cyan-500/20 font-mono animate-pulse delay-1000">[]</div>
        <div className="absolute bottom-20 right-20 text-3xl text-pink-500/20 font-mono animate-bounce delay-1500">()</div>
      </div>

      {/* Information Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-white/20 shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-t-2xl border-b border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    🚀 Yoranza HackFest 2025
                  </h2>
                  <p className="text-blue-200">Innovation-driven hackathon by Yoranza Technologies</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-400" />
                  About the Event
                </h3>
                <p className="text-gray-300 leading-relaxed">{hackathonInfo.overview}</p>
              </div>

              {/* What to Expect */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  What to Expect
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hackathonInfo.whatToExpect.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-blue-400">{item.icon}</div>
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prizes */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  Prize Pool
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {hackathonInfo.prizes.map((prize, index) => (
                    <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-white/20 text-center">
                      <div className="flex justify-center mb-3">{prize.icon}</div>
                      <h4 className="font-semibold text-white mb-1">{prize.position}</h4>
                      <p className="text-2xl font-bold text-green-400">{prize.amount}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Schedule */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-400" />
                  Important Dates
                </h3>
                <div className="space-y-3">
                  {hackathonInfo.schedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                      <div className={`font-mono text-sm min-w-fit ${item.color}`}>{item.time}</div>
                      <div className="text-gray-300">{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guidelines */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Guidelines & Rules
                </h3>
                <div className="space-y-3">
                  {hackathonInfo.guidelines.map((guideline, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{guideline}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Round Details */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  Competition Format
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">{hackathonInfo.roundDetails.round1.title}</h4>
                    <div className="space-y-2">
                      {hackathonInfo.roundDetails.round1.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">{hackathonInfo.roundDetails.round2.title}</h4>
                    <div className="space-y-2">
                      {hackathonInfo.roundDetails.round2.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificates */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  Certificates
                </h3>
                <div className="space-y-3">
                  {hackathonInfo.certificates.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  Contact Coordinators (8:00 PM - 10:00 PM)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {hackathonInfo.contact.map((contact, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <Users className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{contact}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 p-3 bg-white/5 rounded-lg border border-white/10 text-center">
                  <span className="text-gray-300">Email: </span>
                  <a href="mailto:contact@yoranza.tech" className="text-blue-400 hover:text-blue-300">contact@yoranza.tech</a>
                </div>
              </div>

              {/* CTA in Modal */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-3 text-center">Ready to Join?</h3>
                <p className="text-gray-300 text-center mb-4">
                  Don't miss this incredible opportunity to innovate and compete!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="https://unstop.com/o/mbiQ50t?lb=3gJTxqbX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Trophy className="w-4 h-4" />
                    Register Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}