import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  MessageSquare, 
  Mail, 
  Phone, 
  CheckCircle,
  Target,
  Zap,
  Eye,
  Award,
  ArrowRight,
  Globe,
  Sparkles,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';

// Aceternity UI Components
const BackgroundBeams = ({ isDark }: { isDark: boolean }) => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Main gradient orbs */}
    <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br ${isDark ? 'from-blue-600/30 to-purple-600/30' : 'from-blue-300/20 to-purple-300/20'} blur-3xl animate-pulse`}></div>
    <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br ${isDark ? 'from-purple-600/30 to-pink-600/30' : 'from-purple-300/20 to-pink-300/20'} blur-3xl animate-pulse delay-1000`}></div>
    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br ${isDark ? 'from-cyan-600/20 to-blue-600/20' : 'from-cyan-300/15 to-blue-300/15'} blur-3xl animate-pulse delay-500`}></div>
    
    {/* Floating particles */}
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-2 h-2 bg-gradient-to-r ${isDark ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} rounded-full animate-bounce opacity-60`}
        style={{
          left: `${10 + (i * 6)}%`,
          top: `${20 + (i * 4)}%`,
          animationDelay: `${i * 0.3}s`,
          animationDuration: `${3 + (i % 3)}s`
        }}
      />
    ))}
    
    {/* Geometric shapes */}
    <div className={`absolute top-20 left-20 w-20 h-20 border ${isDark ? 'border-blue-400/30' : 'border-blue-600/40'} rotate-45 animate-spin`} style={{ animationDuration: '20s' }}></div>
    <div className={`absolute bottom-40 right-32 w-16 h-16 border ${isDark ? 'border-purple-400/30' : 'border-purple-600/40'} rounded-full animate-ping`} style={{ animationDelay: '2s' }}></div>
    <div className={`absolute top-1/3 right-20 w-12 h-12 bg-gradient-to-r ${isDark ? 'from-cyan-400/20 to-blue-400/20' : 'from-cyan-600/30 to-blue-600/30'} rotate-12 animate-pulse`}></div>
    
    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="grid grid-cols-12 h-full">
        {[...Array(48)].map((_, i) => (
          <div key={i} className={`border-r border-b ${isDark ? 'border-white/10' : 'border-gray-700/10'}`}></div>
        ))}
      </div>
    </div>
  </div>
);

const FloatingNavbar = ({ isDark, setIsDark }: { isDark: boolean; setIsDark: (isDark: boolean) => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? (isDark ? 'bg-black/20 backdrop-blur-lg border-b border-white/10' : 'bg-white/20 backdrop-blur-lg border-b border-gray-200/20') 
          : 'bg-transparent'
      }`}>
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digihub
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className={`${isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors font-medium`}>Services</a>
              <a href="#stats" className={`${isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors font-medium`}>Statistics</a>
              <a href="#testimonials" className={`${isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors font-medium`}>Testimonials</a>
              <a href="#contact" className={`${isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors font-medium`}>Contact</a>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 text-white' 
                    : 'bg-gray-200/50 hover:bg-gray-300/50 text-gray-700'
                }`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-medium">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Dark Mode Toggle for Mobile */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 text-white' 
                    : 'bg-gray-200/50 hover:bg-gray-300/50 text-gray-700'
                }`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDark 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-gray-700 hover:bg-gray-200/50'
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          <div className={`absolute top-20 left-4 right-4 ${
            isDark ? 'bg-black/90' : 'bg-white/90'
          } backdrop-blur-lg rounded-2xl border ${
            isDark ? 'border-white/10' : 'border-gray-200/20'
          } shadow-xl`}>
            <div className="p-6 space-y-4">
              <a 
                href="#services" 
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-gray-700 hover:bg-gray-100/70'
                } font-medium`}
              >
                Services
              </a>
              <a 
                href="#stats" 
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-gray-700 hover:bg-gray-100/70'
                } font-medium`}
              >
                Statistics
              </a>
              <a 
                href="#testimonials" 
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-gray-700 hover:bg-gray-100/70'
                } font-medium`}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-gray-700 hover:bg-gray-100/70'
                } font-medium`}
              >
                Contact
              </a>
              <div className="pt-4">
                <button 
                  onClick={closeMobileMenu}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-medium"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(words.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, words]);

  return <span className={className}>{displayedText}</span>;
};

const GradientCard = ({ children, className = "", hover = true, isDark }: { children: React.ReactNode; className?: string; hover?: boolean; isDark: boolean }) => (
  <div className={`
    relative overflow-hidden rounded-2xl ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-white/10' 
        : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200/20'
    }
    backdrop-blur-sm 
    ${hover ? (isDark ? 'hover:border-white/20 hover:bg-slate-800/60 hover:shadow-2xl hover:shadow-purple-500/10' : 'hover:border-gray-300/30 hover:bg-white/90 hover:shadow-2xl hover:shadow-blue-500/10') : ''}
    transition-all duration-500 ${className}
  `}>
    <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-blue-600/5 to-purple-600/5' : 'from-blue-600/5 to-purple-600/5'}`}></div>
    <div className="relative z-10">{children}</div>
  </div>
);

const AnimatedCounter = ({ end, duration = 2000 }: { end: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | undefined;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * parseInt(end.replace(/\D/g, '')));
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{end.replace(/\d/g, '')}</span>;
};

const MovingBorder = ({ children, className = "", isDark }: { children: React.ReactNode; className?: string; isDark: boolean }) => (
  <div className={`relative overflow-hidden rounded-2xl ${isDark ? 'bg-gradient-to-r from-slate-900 to-slate-800' : 'bg-gradient-to-r from-gray-100 to-white'} p-[2px] ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 animate-pulse"></div>
    <div className={`relative ${isDark ? 'bg-slate-900' : 'bg-white'} rounded-2xl`}>{children}</div>
  </div>
);

const SparklesCore = ({ className, isDark }: { className?: string; isDark: boolean }) => (
  <div className={`absolute inset-0 ${className}`}>
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-1 h-1 ${isDark ? 'bg-white' : 'bg-gray-800'} rounded-full animate-ping`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }}
      />
    ))}
  </div>
);

const DigiPullWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '70K+', label: 'Organic feedbacks delivered', icon: MessageSquare },
    { number: '5K+', label: 'Clients', icon: Users },
    { number: '100+', label: 'Products Tested', icon: Target },
    { number: '200+', label: 'Categories', icon: BarChart3 }
  ];

  const reputationStats = [
    { percentage: '91%', description: 'Of Consumers Regularly Or Occasionally Read Online Ratings' },
    { percentage: '84%', description: 'Of People Trust Online Ratings And They Take Them As Their Personal Recommendation' },
    { percentage: '87%', description: 'Of People Say That Product Needs Rating of 4-5 Stars Before They Will Use Them' },
    { percentage: '74%', description: 'Of People Felt That A Positive Rating Made Them Trust The Local Business More' },
    { percentage: '59%', description: 'Of Consumers Compares Every Product On The Basis Of Ratings Before They Make Any Decision' },
    { percentage: '19%', description: 'On Average, Increase In Single Star Tends To 19% Increase In Sales Growth' }
  ];

  const services = [
    {
      title: 'Online Reputation Management',
      description: 'Enhancing and maintaining a healthy brand reputation on online marketplace.',
      icon: Shield,
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Web Scraping',
      description: 'Crafting tailored bots for your data needs, including Brand Monitoring solutions.',
      icon: Eye,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Business Automation',
      description: 'Auto-assign tasks, send WhatsApp messages, and much more.',
      icon: Zap,
      gradient: 'from-yellow-600 to-orange-600'
    },
    {
      title: 'Email Marketing',
      description: 'Engage your audience seamlessly and affordably in real-time interactions.',
      icon: Mail,
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Micro Influencer Marketing',
      description: 'Unlock the Power of Micro-Influencers: Amplify Your Reach with Our Magic Touch!',
      icon: Users,
      gradient: 'from-red-600 to-rose-600'
    },
    {
      title: 'Affiliate Marketing',
      description: 'Empower Your Business: Partner with Us for Profitable Affiliate Marketing Solutions!',
      icon: TrendingUp,
      gradient: 'from-indigo-600 to-blue-600'
    }
  ];

  const testimonials = [
    {
      name: 'Yeshwant Bafna',
      role: 'Founder @Bulfyss',
      content: 'In short, Aman can be described in these few words - Trustworthy, Ethical, Committed, Prompt, Perfectionist, Technical, Humble and empathetic. It has been an extraordinary 2 years working with him.',
      rating: 5
    },
    {
      name: 'Anju Mittal',
      role: 'VP - Business Development @WOOP',
      content: 'Working with Aman who is a freelancer at WOOP on multiple projects was indeed remarkably good. I was particularly impressed by his ability to handle targets efficiently.',
      rating: 5
    },
    {
      name: 'Naman Bhatnagar',
      role: 'Driving Growth @Squareboat',
      content: 'Be it meeting targets on time or helping the brand\'s image gain momentum, Aman is my go to person. Highly recommend for Online Reputation Management.',
      rating: 5
    }
  ];

  const mutedTextColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardTextColor = isDark ? 'text-white' : 'text-gray-900';

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} relative overflow-hidden`}>
      <BackgroundBeams isDark={isDark} />
      <FloatingNavbar isDark={isDark} setIsDark={setIsDark} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <SparklesCore className="z-0" isDark={isDark} />
        
        {/* Additional animated elements for hero */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating icons */}
          <div className="absolute top-1/4 left-10 animate-float">
            <Shield className={`w-8 h-8 ${isDark ? 'text-blue-400/50' : 'text-blue-600/50'}`} />
          </div>
          <div className="absolute top-1/3 right-16 animate-float-delayed">
            <Zap className={`w-6 h-6 ${isDark ? 'text-purple-400/50' : 'text-purple-600/50'}`} />
          </div>
          <div className="absolute bottom-1/4 left-1/4 animate-float-slow">
            <Star className={`w-5 h-5 ${isDark ? 'text-pink-400/50' : 'text-pink-600/50'}`} />
          </div>
          <div className="absolute top-1/2 right-1/4 animate-float">
            <TrendingUp className={`w-7 h-7 ${isDark ? 'text-cyan-400/50' : 'text-cyan-600/50'}`} />
          </div>
          
          {/* Moving gradients */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className={`absolute top-20 left-20 w-40 h-40 bg-gradient-to-r ${isDark ? 'from-blue-500/10' : 'from-blue-500/20'} to-transparent rounded-full animate-drift`}></div>
            <div className={`absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r ${isDark ? 'from-purple-500/10' : 'from-purple-500/20'} to-transparent rounded-full animate-drift-reverse`}></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <MovingBorder className="inline-block mb-6" isDark={isDark}>
              <div className="px-4 py-2 text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Premier Provider of Online Reputation Management
              </div>
            </MovingBorder>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <TextGenerateEffect 
                words="Connecting Brands"
                className={`bg-gradient-to-r ${isDark ? 'from-white via-blue-100 to-purple-100' : 'from-gray-900 via-blue-900 to-purple-900'} bg-clip-text text-transparent`}
              />
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                with Right Audience
              </span>
            </h1>
            
            <p className={`text-xl ${mutedTextColor} mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up`} style={{ animationDelay: '0.5s' }}>
              We are a technology-driven premier provider of Online Reputation Management services in India.
              Focus on services where technology, innovation, and capital unlock long-term value.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <MovingBorder isDark={isDark}>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2 group">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </MovingBorder>
              
              <button className={`px-8 py-4 border ${isDark ? 'border-white/20 text-white hover:bg-white/5 hover:border-white/40' : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400'} font-semibold rounded-2xl transition-all duration-300`}>
                View Services
              </button>
            </div>
          </div>
        </div>
        
        {/* Custom CSS animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(-3deg); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(2deg); }
          }
          @keyframes drift {
            0% { transform: translateX(0px) translateY(0px); }
            50% { transform: translateX(30px) translateY(-20px); }
            100% { transform: translateX(0px) translateY(0px); }
          }
          @keyframes drift-reverse {
            0% { transform: translateX(0px) translateY(0px); }
            50% { transform: translateX(-30px) translateY(20px); }
            100% { transform: translateX(0px) translateY(0px); }
          }
          @keyframes gradient-x {
            0%, 100% { background-size: 200% 200%; background-position: left center; }
            50% { background-size: 200% 200%; background-position: right center; }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
          .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
          .animate-drift { animation: drift 15s ease-in-out infinite; }
          .animate-drift-reverse { animation: drift-reverse 20s ease-in-out infinite; }
          .animate-gradient-x { animation: gradient-x 5s ease infinite; }
          .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        `}</style>
      </section>

      {/* Brand Reputation Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Build Your Brand Reputation
                  </span>
                  <br />
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                    At The Speed Of Light
                  </span>
                </h2>
                
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  <div className="pl-8">
                    <p className="text-lg font-semibold mb-4 text-blue-400">
                      As Per Our Data Analysis,
                    </p>
                    <p className={`text-lg ${mutedTextColor} leading-relaxed mb-6`}>
                      We Found That How Top Brands Built Their Reputation And Increased Their Sells 
                      Reaching At Topmost Level With Exponential Growth.
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {[
                    'Increase customer trust and credibility',
                    'Boost online visibility and search rankings', 
                    'Drive more qualified leads and conversions',
                    'Build long-term brand loyalty',
                    'Dominate your market competition'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className={`${mutedTextColor} group-hover:${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <MovingBorder isDark={isDark} className="inline-block">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2 group">
                    <span>Get Quote</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </MovingBorder>
              </div>
            </div>

            {/* Right Image with Animation */}
            <div className="relative">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
              </div>

              {/* Main Image Container */}
              <div className="relative z-10 group">
                <MovingBorder isDark={isDark} className="overflow-hidden">
                  <div className="relative p-8 h-96 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm">
                    {/* Animated Chart/Graph */}
                    <div className="h-full flex items-end justify-center space-x-2">
                      {[65, 45, 85, 75, 95, 55, 80, 90].map((height, index) => (
                        <div key={index} className="relative group">
                          <div 
                            className={`bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg transition-all duration-1000 delay-${index * 200} group-hover:from-purple-500 group-hover:to-pink-500`}
                            style={{ 
                              width: '24px', 
                              height: `${height}%`,
                              animationDelay: `${index * 0.2}s`
                            }}
                          />
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                            {height}%
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center animate-bounce">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce delay-300">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-bounce delay-700">
                      <Award className="w-4 h-4 text-white" />
                    </div>

                    {/* Animated Lines */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse"></div>
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-pulse delay-500"></div>
                      <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400/50 to-transparent animate-pulse delay-1000"></div>
                    </div>

                    {/* Growth Arrow */}
                    <div className="absolute bottom-8 right-8 transform rotate-45">
                      <div className="w-16 h-16 border-4 border-green-400 border-dashed rounded-full animate-spin-slow flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-green-400 -rotate-45" />
                      </div>
                    </div>
                  </div>
                </MovingBorder>

                {/* Floating Numbers */}
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-bounce">
                  +127%
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-bounce delay-500">
                  ROI ↗
                </div>
                <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full font-bold text-xs animate-bounce delay-1000">
                  5⭐
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-16 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-700"></div>
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-1000"></div>
        </div>

        {/* Additional Custom Animations */}
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        `}</style>
      </section>

      {/* Statistics Section */}
      

      {/* Services Section */}
      <section id="services" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${isDark ? 'from-white to-gray-300' : 'from-gray-900 to-gray-700'} bg-clip-text text-transparent`}>
              Our Services
            </h2>
            <p className={`${mutedTextColor} max-w-2xl mx-auto text-lg`}>
              Designed for business teams like yours. We focus on services where technology, innovation, and capital can unlock long-term value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GradientCard key={index} className="p-8 group cursor-pointer" isDark={isDark}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-full w-full text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${cardTextColor} mb-4`}>{service.title}</h3>
                <p className={`${mutedTextColor} leading-relaxed`}>{service.description}</p>
                <div className="mt-6 flex items-center text-blue-400 font-semibold group-hover:text-purple-400 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-5xl font-bold mb-8 bg-gradient-to-r ${isDark ? 'from-white to-gray-300' : 'from-gray-900 to-gray-700'} bg-clip-text text-transparent`}>
                Why Invest In Our Services?
              </h2>
              <p className={`${mutedTextColor} mb-8 text-lg leading-relaxed`}>
                With an impressive track record in boosting client revenues, our services stand out as a prime choice for brand enhancement.
              </p>
              <div className="space-y-6">
                {['Accelerate Your e-Commerce Store Sales', 'Increase your customer satisfaction', 'Improve your search rankings', 'Maximize your brand awareness', 'Beat your competition'].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className={`${mutedTextColor} text-lg`}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <MovingBorder className="h-full" isDark={isDark}>
              <div className="p-8 h-full">
                <div className="mb-6">
                  <Sparkles className="h-12 w-12 text-purple-400 mb-4" />
                  <h2 className={`text-3xl font-bold ${cardTextColor} mb-4`}>Accelerate Your e-Commerce Store Sales</h2>
                </div>
                <p className={`${mutedTextColor} leading-relaxed`}>
                  Brand Build Up Management enhances your sales on every e-Commerce platform. The influence of positive response 
                  increases sales of your product by considering buyer's behavior and e-Commerce platform algorithms.
                </p>
              </div>
            </MovingBorder>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${isDark ? 'from-white to-gray-300' : 'from-gray-900 to-gray-700'} bg-clip-text text-transparent`}>
              What Our Clients Say
            </h2>
            <p className={`${mutedTextColor} text-lg`}>See testimonials from our satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <GradientCard key={index} className="p-8" isDark={isDark}>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`${mutedTextColor} mb-6 italic text-lg leading-relaxed`}>"{testimonial.content}"</p>
                <div className={`border-t ${isDark ? 'border-white/10' : 'border-gray-200'} pt-6`}>
                  <div className={`font-bold ${cardTextColor} text-lg`}>{testimonial.name}</div>
                  <div className={mutedTextColor}>{testimonial.role}</div>
                </div>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-6 max-w-4xl mx-auto">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
    Why Invest In Our Brand Build Up Management Services?
  </h2>
  <p className="text-center text-gray-600 mb-10">
    With an impressive track record in boosting client revenues, our services
    stand out as a prime choice for brand enhancement. Our commitment to
    delivering tangible, positive outcomes resonates with customers, making us a
    trusted partner in driving impactful results.
  </p>

  <div className="space-y-4">
    {/* Item 1 */}
    <details className="border rounded-xl shadow-sm p-5 bg-[#0F172A]">
      <summary className="font-semibold cursor-pointer text-white text-lg">
        Accelerate Your e-Commerce Store Sales
      </summary>
      <p className="mt-3 text-gray-300 text-sm">
        Our proven strategies help optimize conversion funnels, reduce cart
        abandonment, and increase repeat purchases, ensuring steady revenue
        growth.
      </p>
    </details>

    {/* Item 2 */}
    <details className="border rounded-xl shadow-sm p-5 bg-[#0F172A]">
      <summary className="font-semibold cursor-pointer text-white text-lg">
        Increase Your Customer Satisfaction
      </summary>
      <p className="mt-3 text-gray-300 text-sm">
        We implement customer-centric solutions such as personalized
        experiences, faster support, and loyalty programs to keep your customers
        happy.
      </p>
    </details>

    {/* Item 3 */}
    <details className="border rounded-xl shadow-sm p-5 bg-[#0F172A]">
      <summary className="font-semibold cursor-pointer text-white text-lg">
        Improve Your Search Rankings
      </summary>
      <p className="mt-3 text-gray-300 text-sm">
        Our SEO-first approach ensures your brand ranks higher on search
        engines, driving organic traffic and long-term visibility.
      </p>
    </details>

    {/* Item 4 */}
    <details className="border rounded-xl shadow-sm p-5 bg-[#0F172A]">
      <summary className="font-semibold cursor-pointer text-white text-lg">
        Maximize Your Brand Awareness
      </summary>
      <p className="mt-3 text-gray-300 text-sm">
        Through targeted campaigns and consistent messaging, we amplify your
        brand presence across multiple channels.
      </p>
    </details>

    {/* Item 5 */}
    <details className="border rounded-xl shadow-sm p-5 bg-[#0F172A]">
      <summary className="font-semibold cursor-pointer text-white text-lg">
        Beat Your Competition
      </summary>
      <p className="mt-3 text-gray-300 text-sm">
        We conduct competitor analysis, identify gaps, and design strategies
        that put your business ahead in the market.
      </p>
    </details>
  </div>
  
</section>
<section id="stats" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${isDark ? 'from-white to-gray-300' : 'from-gray-900 to-gray-700'} bg-clip-text text-transparent`}>
              Transformation by Numbers
            </h2>
            <p className={`${mutedTextColor} max-w-2xl mx-auto text-lg`}>
              Numbers don't lie. Our tech-driven approach ensures your online reputation stays pristine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                <div className={`relative ${isDark ? 'bg-white/95' : 'bg-white/95'} backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl border ${isDark ? 'border-white/20' : 'border-gray-200/50'} group-hover:bg-white group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500`}>
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <AnimatedCounter end={stat.number} />
                  </div>
                  <div className="text-slate-700 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Reputation Statistics */}
         
        </div>
      </section>
     

      {/* Footer */}
      <footer className={`py-16 px-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200'} relative`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Digihub
              </div>
              <p className={`${mutedTextColor} leading-relaxed`}>
                Technology-driven premier provider of Online Reputation Management services based in Indore. 
                Focus on nurturing positive brand images and strategic reputation building.
              </p>
            </div>
            <div>
              <h3 className={`${cardTextColor} font-bold mb-6`}>Services</h3>
              <ul className={`space-y-3 ${mutedTextColor}`}>
                <li className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors cursor-pointer`}>Online Reputation Management</li>
                <li className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors cursor-pointer`}>Web Scraping</li>
                <li className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors cursor-pointer`}>Business Automation</li>
                <li className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors cursor-pointer`}>Email Marketing</li>
              </ul>
            </div>
            <div>
              <h3 className={`${cardTextColor} font-bold mb-6`}>Resources</h3>
              <ul className={`space-y-3 ${mutedTextColor}`}>
                <li className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors cursor-pointer`}>Blog</li>
                <li className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors cursor-pointer`}>Analytics</li>
                <li className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors cursor-pointer`}>URL Shortener</li>
                <li className={`${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors cursor-pointer`}>Community</li>
              </ul>
            </div>
            <div>
              <h3 className={`${cardTextColor} font-bold mb-6`}>Stay Updated</h3>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className={`w-full p-3 ${isDark ? 'bg-white/5 border-white/20 text-white placeholder-gray-400' : 'bg-gray-100/50 border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg focus:outline-none focus:border-purple-500 transition-colors`}
                />
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
            <GradientCard className="p-6" isDark={isDark}>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    {/* Email */}
    <div className="flex items-start space-x-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        <Mail className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className={`${cardTextColor} font-semibold text-sm`}>Email</div>
        <div className={`${mutedTextColor} text-sm`}>admin@Digihub.in</div>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-start space-x-3 border-t sm:border-t-0 sm:border-l sm:pl-6 border-gray-300/30">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
        <Phone className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className={`${cardTextColor} font-semibold text-sm`}>Phone & WhatsApp</div>
        <div className={`${mutedTextColor} text-sm`}>+918445728401</div>
      </div>
    </div>

    {/* Address */}
    <div className="flex items-start space-x-3 border-t sm:border-t-0 sm:border-l sm:pl-6 border-gray-300/30">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center">
        <Globe className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className={`${cardTextColor} font-semibold text-sm`}>Registered Address</div>
        <p className={`${mutedTextColor} text-sm`}>
          19B Teachers Colony Agra, Uttar Pradesh, India 282002
        </p>
        <p className={`${isDark ? 'text-gray-500' : 'text-gray-400'} text-xs mt-1`}>
          Legal Name: Binod Kumar
        </p>
      </div>
    </div>
  </div>
</GradientCard>

          <div className={`border-t ${isDark ? 'border-white/10' : 'border-gray-200'} pt-8 text-center`}>
            <p className={mutedTextColor}>
              © 2016-2025 DIGIPULL™ is a registered trademark. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigiPullWebsite;