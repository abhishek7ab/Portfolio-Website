"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaDribbble,
  FaBehance,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personal } from "@/data/personal";
import MagneticButton from "@/components/ui/MagneticButton";
import OptimizedImage from "@/components/ui/OptimizedImage";

const socialLinks = [
  { href: personal.social.instagram, icon: FaInstagram, label: "Instagram" },
  { href: personal.social.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: personal.social.github, icon: FaDribbble, label: "Dribbble" },
  { href: personal.social.leetcode, icon: FaBehance, label: "Behance" },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative z-10">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <div className="space-y-3">
              <p className="text-[var(--text-2)] text-base">Hi I am</p>
              <h1 className="text-[var(--text-2)] text-3xl font-semibold">
                {personal.name}
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--accent)] leading-tight">
                {personal.role.split('&')[0].trim()}
              </h2>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[var(--border)] text-[var(--text-2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all"
                >
                  <item.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <MagneticButton>
                <motion.a
                  href="#contact"
                  className="px-8 py-3.5 rounded-lg bg-[var(--accent)] text-white font-semibold text-base hover:shadow-lg hover:shadow-[var(--accent)]/40 transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Hire Me
                </motion.a>
              </MagneticButton>

              <MagneticButton>
                <motion.a
                  href={personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-lg border-2 border-[var(--border)] text-[var(--text)] font-semibold text-base hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Download CV
                </motion.a>
              </MagneticButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border)] mt-8">
              <div>
                <h3 className="text-3xl font-bold text-[var(--accent)]">5+</h3>
                <p className="text-sm text-[var(--text-2)] mt-1">Experiences</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[var(--accent)]">20+</h3>
                <p className="text-sm text-[var(--text-2)] mt-1">Project done</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[var(--accent)]">80+</h3>
                <p className="text-sm text-[var(--text-2)] mt-1">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[3/4]">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent rounded-3xl blur-3xl"></div>

              {/* Image container with border */}
              <div className="relative w-full h-full rounded-3xl border-4 border-[var(--border)] overflow-hidden bg-[var(--bg-card)]">
                <OptimizedImage
                  src={personal.profileImage}
                  alt={personal.name}
                  width={500}
                  height={667}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
