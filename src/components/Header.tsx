'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const screensObj = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  SERVICES: '/services',
};

const screens = [
  { label: 'Home', path: screensObj.HOME },
  { label: 'About', path: screensObj.ABOUT },
  { label: 'Contact', path: screensObj.CONTACT },
  { label: 'Services', path: screensObj.SERVICES },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      {/* <div className="hidden lg:block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available 24/7
            </span>
            <span>+1 (555) 123-4567</span>
            <span>info@yoranza.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs opacity-80">Follow us:</span>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-xs">in</span>
              </div>
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-xs">tw</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-blue-100' 
            : 'bg-white/90 backdrop-blur-sm shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <Image
                  src="/assets/images/logo.png"
                  alt="Yoranza Logo"
                  width={180}
                  height={50}
                  className="relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {screens.map(({ label, path }) => (
                <Link
                  key={path}
                  href={path}
                  className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    pathname === path 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  <span className="relative z-10">{label}</span>
                  {pathname === path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg"></div>
                  )}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-3/4"></div>
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden sm:block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 bg-white/95 backdrop-blur-lg border-t border-blue-100">
            <nav className="flex flex-col gap-2">
              {screens.map(({ label, path }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                    pathname === path 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
}