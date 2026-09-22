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
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Activity', href: '#github' },
    { label: 'Articles', href: '#blog' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
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
        <a href="#" className="text-2xl font-bold tracking-tight text-[var(--text)] hover:opacity-80 transition-opacity">
          {personal.name.split(' ')[0]}<span className="text-[var(--accent)]">.</span>
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
          
          {personal.resume && (
            <motion.a 
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 font-medium text-sm hover:bg-[var(--accent)] hover:text-white transition-all shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)] hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.4)]"
            >
              Resume
            </motion.a>
          )}
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
              
              {personal.resume && (
                <a 
                  href={personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-center py-3 rounded-lg bg-[var(--accent)] text-white font-medium shadow-md"
                >
                  View Resume
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
