'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLElement>(null);

  // Track scroll for background & active section
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 666);

    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
    const currentSection = sections.find((section) => {
      const el = document.getElementById(section);
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom >= 100;
    });

    if (currentSection) setActiveSection(currentSection);
  });

  // Close mobile menu on route change or scroll
  useEffect(() => {
    const handleRouteChange = () => setIsMobileMenuOpen(false);
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👤' },
    { name: 'Experience', href: '#experience', icon: '💼' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Contact', href: '#contact', icon: '📧' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    history.pushState(null, '', href);
  };

  return (
    <>
      {/* Desktop & Mobile Header - z-30 so mobile menu can overlay it */}
      <motion.header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${
          isScrolled
            ? 'bg-gradient-to-r from-blue-900/95 via-purple-900/95 to-gray-900/95 backdrop-blur-xl shadow-lg border-b border-white/10'
            : 'bg-transparent'
        } ${isMobileMenuOpen ? 'opacity-50' : 'opacity-100'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.div
              className="flex items-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Orbital Elements - Hidden on very small screens */}
              <motion.div
                className="relative hidden sm:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <motion.div
                  className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
              </motion.div>

              {/* Profile + Name */}
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="flex items-center group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-cyan-400/60 overflow-hidden cursor-pointer"
                  style={{
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: '#06b6d4',
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <img
                    src="/images/profile.webp"
                    alt="Muhammad Abubakar"
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-white/20"
                    whileHover={{ boxShadow: '0 0 30px rgba(34, 211, 238, 0.8)' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.span
                  className="ml-2 sm:ml-3 text-base sm:text-lg font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap"
                  animate={{
                    opacity: isHovered ? 1 : [0, 1],
                    x: isHovered ? 0 : [-15, 0],
                  }}
                  initial={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  M.Abubakar
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`group relative px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-cyan-300'
                      : 'text-white hover:text-cyan-200'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {/* Underline Animation */}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 origin-left scale-x-0"
                    animate={{
                      scaleX: activeSection === item.href.substring(1) ? 1 : 0,
                    }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              
              {/* Download CV Button for Desktop */}
              <motion.a
                href="/cv/Muhammad-Abubakar-CV.pdf"
                download
                className="group relative px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-white hover:text-cyan-200 flex items-center space-x-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg 
                  width="16" 
                  height="16" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                <span>CV</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 origin-left scale-x-0"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="hidden md:flex relative items-center justify-center px-6 py-3 rounded-full font-semibold overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-white">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                animate={{
                  background: [
                    'linear-gradient(to right, #06b6d4, #3b82f6)',
                    'linear-gradient(to right, #3b82f6, #8b5cf6)',
                    'linear-gradient(to right, #8b5cf6, #ec4899)',
                    'linear-gradient(to right, #ec4899, #06b6d4)',
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative p-2 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="block h-0.5 w-6 bg-current rounded-full origin-center"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-current rounded-full my-1.5"
                  animate={{ 
                    opacity: isMobileMenuOpen ? 0 : 1,
                    scaleX: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-current rounded-full origin-center"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Full-Screen Mobile Menu Overlay - Higher z-index (z-50) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-gradient-to-b from-blue-900/98 via-purple-900/98 to-gray-900/98 backdrop-blur-xl z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="fixed inset-0 z-50 md:hidden flex flex-col pt-20 pb-8 px-6 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button in Top Right */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>

              {/* Menu Items Container */}
              <div className="flex flex-col items-center justify-center flex-1 space-y-6 mt-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`group flex items-center space-x-3 text-2xl sm:text-3xl font-semibold transition-all ${
                      activeSection === item.href.substring(1)
                        ? 'text-cyan-300'
                        : 'text-white hover:text-cyan-200'
                    }`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    whileHover={{ scale: 1.1, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.name}</span>
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        className="w-2 h-2 bg-cyan-300 rounded-full"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
                
                {/* Download CV in Mobile Menu */}
                <motion.a
                  href="/cv/Muhammad-Abubakar-CV.pdf"
                  download
                  className="group flex items-center space-x-3 text-2xl sm:text-3xl font-semibold text-white hover:text-cyan-200 transition-all"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  whileHover={{ scale: 1.1, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl">📄</span>
                  <span>Download CV</span>
                </motion.a>
              </div>

              {/* CTA Button at Bottom */}
              <motion.div className="mt-auto pt-8">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                  className="block w-full max-w-xs mx-auto px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.8)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch ✨
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}