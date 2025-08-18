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
  ChevronRight,
  CheckCircle,
  Target,
  Zap,
  Eye,
  Award,
  ArrowRight,
  Globe,
  Sparkles
} from 'lucide-react';

// Aceternity UI Components
const BackgroundBeams = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Main gradient orbs */}
    <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-600/20 to-blue-600/20 blur-3xl animate-pulse delay-500"></div>
    
    {/* Floating particles */}
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce opacity-60"
        style={{
          left: `${10 + (i * 6)}%`,
          top: `${20 + (i * 4)}%`,
          animationDelay: `${i * 0.3}s`,
          animationDuration: `${3 + (i % 3)}s`
        }}
      />
    ))}
    
    {/* Geometric shapes */}
    <div className="absolute top-20 left-20 w-20 h-20 border border-blue-400/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
    <div className="absolute bottom-40 right-32 w-16 h-16 border border-purple-400/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    <div className="absolute top-1/3 right-20 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rotate-12 animate-pulse"></div>
    
    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="grid grid-cols-12 h-full">
        {[...Array(48)].map((_, i) => (
          <div key={i} className="border-r border-b border-white/10"></div>
        ))}
      </div>
    </div>
  </div>
);

const FloatingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/20 backdrop-blur-lg border border-white/10' : 'bg-transparent'
    } rounded-full px-8 py-3`}>
      <div className="flex items-center space-x-8">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Digihub
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
          <a href="#stats" className="text-white/70 hover:text-white transition-colors">Statistics</a>
          <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
          Get Started
        </button>
      </div>
    </nav>
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

const GradientCard = ({ children, className = "", hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) => (
  <div className={`
    relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 
    backdrop-blur-sm border border-white/10
    ${hover ? 'hover:border-white/20 hover:bg-slate-800/60 hover:shadow-2xl hover:shadow-purple-500/10' : ''}
    transition-all duration-500 ${className}
  `}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
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

const MovingBorder = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-[2px] ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 animate-pulse"></div>
    <div className="relative bg-slate-900 rounded-2xl">{children}</div>
  </div>
);

const SparklesCore = ({ className }: { className?: string }) => (
  <div className={`absolute inset-0 ${className}`}>
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundBeams />
      <FloatingNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <SparklesCore className="z-0" />
        
        {/* Additional animated elements for hero */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating icons */}
          <div className="absolute top-1/4 left-10 animate-float">
            <Shield className="w-8 h-8 text-blue-400/50" />
          </div>
          <div className="absolute top-1/3 right-16 animate-float-delayed">
            <Zap className="w-6 h-6 text-purple-400/50" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 animate-float-slow">
            <Star className="w-5 h-5 text-pink-400/50" />
          </div>
          <div className="absolute top-1/2 right-1/4 animate-float">
            <TrendingUp className="w-7 h-7 text-cyan-400/50" />
          </div>
          
          {/* Moving gradients */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full animate-drift"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full animate-drift-reverse"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <MovingBorder className="inline-block mb-6">
              <div className="px-4 py-2 text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Premier Provider of Online Reputation Management
              </div>
            </MovingBorder>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <TextGenerateEffect 
                words="Connecting Brands"
                className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
              />
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                with Right Audience
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              We are a technology-driven premier provider of Online Reputation Management services in India.
              Focus on services where technology, innovation, and capital unlock long-term value.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <MovingBorder>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2 group">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </MovingBorder>
              
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/5 transition-all duration-300 hover:border-white/40">
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

      {/* Statistics Section */}
      <section id="stats" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transformation by Numbers
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Numbers don't lie. Our tech-driven approach ensures your online reputation stays pristine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl border border-white/20 group-hover:bg-white group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500">
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
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Importance Of Reputation Building On eCommerce Platform
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reputationStats.map((stat, index) => (
                <MovingBorder key={index} className="h-full">
                  <div className="p-8 h-full">
                    <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      <AnimatedCounter end={stat.percentage} />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{stat.description}</p>
                  </div>
                </MovingBorder>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Designed for business teams like yours. We focus on services where technology, innovation, and capital can unlock long-term value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GradientCard key={index} className="p-8 group cursor-pointer">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-full w-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
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
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Invest In Our Services?
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                With an impressive track record in boosting client revenues, our services stand out as a prime choice for brand enhancement.
              </p>
              <div className="space-y-6">
                {['Accelerate Your e-Commerce Store Sales', 'Increase your customer satisfaction', 'Improve your search rankings', 'Maximize your brand awareness', 'Beat your competition'].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <MovingBorder className="h-full">
              <div className="p-8 h-full">
                <div className="mb-6">
                  <Sparkles className="h-12 w-12 text-purple-400 mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">Accelerate Your e-Commerce Store Sales</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
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
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 text-lg">See testimonials from our satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <GradientCard key={index} className="p-8">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-6">
                  <div className="font-bold text-white text-lg">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg">Want something creative? Let's get in touch. The coffee is on us!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <MovingBorder>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                <div className="space-y-6">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  <textarea 
                    placeholder="Your message..." 
                    rows={5}
                    className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </MovingBorder>
            
            <div className="space-y-8">
              <GradientCard className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">Email</div>
                  <div className="text-gray-400">admin@Digihub.in</div>
                </div>
              </GradientCard>
              
              <GradientCard className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">Phone & WhatsApp</div>
                  <div className="text-gray-400">+918445728401</div>
                </div>
              </GradientCard>
              
              <GradientCard className="p-6">
                <h3 className="text-white font-bold mb-3 flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Registered Address
                </h3>
                <p className="text-gray-300">
                  19B Teachers Colony Agra, Uttar Pradesh, India 282002
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Legal Name:Binod Kumar
                </p>
              </GradientCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Digihub
              </div>
              <p className="text-gray-400 leading-relaxed">
                Technology-driven premier provider of Online Reputation Management services based in Indore. 
                Focus on nurturing positive brand images and strategic reputation building.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Online Reputation Management</li>
                <li className="hover:text-white transition-colors cursor-pointer">Web Scraping</li>
                <li className="hover:text-white transition-colors cursor-pointer">Business Automation</li>
                <li className="hover:text-white transition-colors cursor-pointer">Email Marketing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Analytics</li>
                <li className="hover:text-white transition-colors cursor-pointer">URL Shortener</li>
                <li className="hover:text-white transition-colors cursor-pointer">Community</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6">Stay Updated</h3>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400">
              © 2016-2025 DIGIPULL™ is a registered trademark. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigiPullWebsite;