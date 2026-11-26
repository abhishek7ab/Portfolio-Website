"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  }, [activeSection, navLinks]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled
          ? 'py-4 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        <a
          href="#hero"
          suppressHydrationWarning
          className="text-2xl md:text-3xl font-bold text-[#FF6B00] hover:opacity-80 transition-opacity"
        >
          Abhishek
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? "text-[#FF6B00]"
                  : "text-[#cccccc] hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="px-7 py-2.5 rounded-lg bg-[#FF6B00] text-white font-semibold text-sm hover:bg-[#FF8533] transition-colors"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2 hover:text-[#FF6B00] transition-colors"
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
            className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a] overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#cccccc] hover:text-[#FF6B00] transition-colors px-2 py-1"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-3 rounded-lg bg-[#FF6B00] text-white font-semibold"
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
