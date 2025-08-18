import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Sparkles, ChevronDown } from 'lucide-react';

interface NavigationProps {
  onGetDemo?: () => void;
  onLogin?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onGetDemo, onLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why AI SALES', href: '#why', hasDropdown: true },
    { name: 'How It Works', href: '#how', hasDropdown: false },
    { name: 'Use Cases', href: '#cases', hasDropdown: true },
    { name: 'Resources', href: '#resources', hasDropdown: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      {/* Background Air Cover Elements */}
      {!scrolled && (
        <>
          <div className="absolute top-0 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-xl animate-air-cover"></div>
          <div className="absolute top-0 right-1/3 w-12 h-12 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-xl animate-air-cover-delayed"></div>
        </>
      )}

      {/* Fireflies for transparent nav */}
      {!scrolled && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full animate-firefly${
                i < 2 ? '' : i < 3 ? '-delayed-1' : '-delayed-2'
              }`}
              style={{
                left: `${20 + i * 20}%`,
                top: '20px',
                filter: 'blur(1px)',
                boxShadow: '0 0 6px rgba(251, 191, 36, 0.6)'
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo with Enhanced Animations */}
          <div className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-cyan-500/25 animate-glow">
                <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-white animate-pulse-slow" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl sm:rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-glow-delayed"></div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className={`text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-300 animate-magnetic ${
                scrolled 
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent' 
                  : 'text-white'
              }`}>
                AI SALES
              </span>
              <Sparkles className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 animate-pulse ${
                scrolled ? 'text-cyan-500' : 'text-cyan-400'
              }`} />
            </div>
          </div>

          {/* Desktop Navigation with Enhanced Animations */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative group animate-float-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <a
                  href={link.href}
                  className={`flex items-center space-x-1 font-medium text-sm lg:text-base transition-colors duration-300 ${
                    scrolled 
                      ? 'text-gray-700 hover:text-cyan-600' 
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 group-hover:rotate-180 transition-transform duration-300 animate-bounce-slow" />
                  )}
                </a>
                
                {/* Enhanced animated underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full animate-wave"></div>
              </div>
            ))}
            
            <button 
              onClick={onLogin}
              className={`font-medium text-sm lg:text-base transition-colors duration-300 animate-float-card-delayed ${
                scrolled 
                  ? 'text-gray-700 hover:text-purple-600' 
                  : 'text-gray-300 hover:text-purple-400'
              }`}
            >
              Log in
            </button>
            
            <button 
              onClick={onGetDemo}
              className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl font-semibold text-sm lg:text-base overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-xl shadow-cyan-500/20 animate-energy-pulse"
            >
              <span className="relative z-10 flex items-center space-x-1 lg:space-x-2">
                <span>Get a Demo</span>
                <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 group-hover:rotate-45 transition-transform duration-300 animate-pulse" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button with Animation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors duration-300 animate-magnetic ${
                scrolled 
                  ? 'text-gray-700 hover:bg-cyan-50' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6 animate-pulse" />
              ) : (
                <Menu className="w-6 h-6 animate-pulse" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Enhanced Animations */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-xl rounded-2xl mt-4 border border-cyan-100 shadow-2xl animate-float-card">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-6 py-3 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors duration-300 font-medium animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onLogin}
              className="block px-6 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-300 font-medium animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
              onClick={() => {
                setIsOpen(false);
                onLogin?.();
              }}
            >
              Log in
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 animate-wave"></div>
    </nav>
  );
};

export default Navigation;