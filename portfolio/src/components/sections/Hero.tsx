"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";
import { personal } from "@/data/personal";
import OptimizedImage from "@/components/ui/OptimizedImage";

const socialLinks = [
  { href: personal.social.instagram, icon: FaInstagram, label: "Instagram" },
  { href: personal.social.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://dribbble.com", icon: FaDribbble, label: "Dribbble" },
  { href: "https://behance.net", icon: FaBehance, label: "Behance" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 text-left"
          >
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-[#888888] text-lg">Hi I am</p>
              <h1 className="text-[#CCCCCC] text-4xl md:text-5xl font-medium">
                {personal.name}
              </h1>
            </div>

            {/* Main Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FF6B00] leading-tight">
              UI/UX designer
            </h2>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#2a2a2a] text-[#999999] hover:text-[#FF6B00] hover:bg-[#333333] transition-all duration-200"
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-10 py-3.5 rounded-lg bg-[#FF6B00] text-white font-semibold hover:bg-[#FF8533] transition-all duration-200"
              >
                Hire Me
              </a>

              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-3.5 rounded-lg border-2 border-[#3a3a3a] text-white font-semibold hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all duration-200"
              >
                Download CV
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#2a2a2a]">
              <div>
                <h3 className="text-4xl font-bold text-[#FF6B00]">5+</h3>
                <p className="text-sm text-[#888888] mt-1">Experiences</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#FF6B00]">20+</h3>
                <p className="text-sm text-[#888888] mt-1">Project done</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#FF6B00]">80+</h3>
                <p className="text-sm text-[#888888] mt-1">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-3xl overflow-hidden border-4 border-[#2a2a2a]">
                <div className="aspect-[3/4] bg-[#1a1a1a]">
                  <OptimizedImage
                    src={personal.profileImage}
                    alt={personal.name}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
