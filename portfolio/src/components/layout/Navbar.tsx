"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '@/data/personal';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#skills' },
    { label: 'About me', href: '#about' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Contact me', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[var(--bg-card)]/80 backdrop-blur-md border-b border-[var(--border)] shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          <span className="text-[var(--accent)]">LOGO</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a 
              key={link.label} 
              href={link.href}
              whileHover={{ y: -2 }}
              className={`text-sm font-medium transition-colors relative group ${activeSection === link.href.substring(1) ? "text-[var(--accent)]" : "text-[var(--text-2)] hover:text-[var(--text)]"}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--accent)] transition-all rounded-full ${activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </motion.a>
          ))}
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-lg bg-[var(--accent)] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all"
          >
            Hire Me
          </motion.a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[var(--text)] p-2 -mr-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--bg-card)] border-b border-[var(--border)] overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[var(--text-2)] hover:text-[var(--accent)] transition-colors px-2 py-1"
                >
                  {link.label}
                </a>
              ))}
              
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-3 rounded-lg bg-[var(--accent)] text-white font-semibold shadow-md"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
