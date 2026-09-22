"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personal } from "@/data/personal";
import { useState, useEffect } from "react";
import MagneticButton from "@/components/ui/MagneticButton";

const roles = ["Full-Stack Engineer", "AI & ML Developer", "Next.js & TypeScript Developer", "Software Engineering Problem Solver"];

const getArticle = (role: string) => (/^[AEIOUaeiou]/.test(role) ? "An " : "A ");

const socialLinks = [
  { href: personal.social.github, icon: FaGithub, label: "GitHub", external: true },
  { href: personal.social.linkedin, icon: FaLinkedin, label: "LinkedIn", external: true },
  { href: personal.social.leetcode, icon: SiLeetcode, label: "LeetCode", external: true },
  { href: `mailto:${personal.contact.email}`, icon: FaEnvelope, label: "Email", external: false },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          // Reached full role string -> pause before deleting
          timeoutId = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
          return;
        }
      } else {
        // Deleting backward
        if (text.length > 0) {
          setText(currentRole.slice(0, text.length - 1));
        } else {
          // Finished deleting -> pause briefly, switch role, switch back to typing
          timeoutId = setTimeout(() => {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }, 400);
          return;
        }
      }
    };

    const typingSpeed = isDeleting ? 40 : 80;
    timeoutId = setTimeout(handleTyping, typingSpeed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-[calc(100dvh-72px)] flex flex-col justify-center pt-20 pb-10 sm:pt-24 sm:pb-12 relative z-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">

          {/* Main Hero Card */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.6 }}
            className="card hero-card lg:col-span-8 lg:row-span-2 flex flex-col justify-between relative overflow-hidden text-left"
          >
            <motion.div
              animate={{ y: [0, -16, 0], x: [0, 20, 0], rotate: [0, 8, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"
              aria-hidden="true"
            />
            <motion.div
              animate={{ y: [0, 18, 0], x: [0, -12, 0], rotate: [0, -8, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-48 sm:w-60 h-48 sm:h-60 bg-fuchsia-500/12 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-4 sm:space-y-5">
              <div className="hero-badge">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Available for internships, freelance work, and collaborations</span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h1 className="hero-name">
                  Hi, I&apos;m{" "}
                  <span className="gradient-text">{personal.preferredName}</span>
                </h1>

                <p className="hero-role">
                  <span className="text-[var(--text-3)] font-normal">{getArticle(roles[roleIndex])}</span>
                  {text}
                  <span className="typewriter-cursor" aria-hidden="true" />
                </p>
              </div>

              <p className="hero-bio">
                I build responsive web platforms, reliable backend systems, and practical AI-driven solutions with a strong focus on performance, clarity, and impact.
              </p>
            </div>

            <div className="hero-actions relative z-10 flex flex-wrap gap-3">
              <MagneticButton>
                <motion.a 
                  href="#contact" 
                  className="btn-primary hero-btn flex items-center gap-2"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let&apos;s Connect <FaArrowRight size={14} />
                </motion.a>
              </MagneticButton>

              <MagneticButton>
                <motion.a
                  href={personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary hero-btn"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                </motion.a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Location + Connect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:contents gap-4 sm:gap-5">
            {/* Location Card */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.5 }}
              className="card hero-side-card lg:col-span-4 flex flex-col justify-center text-left relative overflow-hidden group"
            >
              <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                  <FaMapMarkerAlt size={20} className="text-indigo-400" />
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-mono text-[var(--accent)] uppercase tracking-wider mb-0.5">Based in</p>
                  <h3 className="font-bold text-base sm:text-lg leading-tight">Pune, India</h3>
                  <p className="text-[var(--text-3)] text-xs font-mono mt-0.5">{time || "..."}</p>
                </div>
              </div>
            </motion.div>

            {/* Social Connect Card */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.5 }}
              className="card hero-side-card lg:col-span-4 flex flex-col justify-center text-left relative"
            >
              <p className="relative z-10 text-[10px] sm:text-xs font-semibold text-[var(--accent)] uppercase tracking-wider font-mono mb-3">
                Connect
              </p>
              <div className="relative z-10 grid grid-cols-2 gap-2 sm:gap-3">
                {socialLinks.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={item.label}
                    whileHover={{ scale: 1.05, y: -3, boxShadow: "0 12px 30px -12px rgba(99,102,241,0.28)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 240, damping: 20 }}
                    className="flex items-center justify-center gap-2 p-3 rounded-xl border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)]/50 hover:bg-[var(--bg-muted)] cursor-pointer"
                  >
                    <item.icon size={18} className="text-[var(--text-2)] shrink-0" />
                    <span className="text-xs font-medium text-[var(--text-2)]">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="mt-6 sm:mt-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] backdrop-blur-xl py-4">
          <div className="marquee-track">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-8 sm:gap-10 px-4">
                {["Python", "Java", "C++", "JavaScript", "React", "Next.js", "MySQL", "Git", "AWS", "Azure", "TensorFlow", "Linux", "HTML", "CSS", "VS Code"].map((tech) => (
                  <span
                    key={`${setIdx}-${tech}`}
                    className="text-xs sm:text-sm font-mono text-[var(--text-3)] whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex justify-center">
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-[var(--text-2)] hover:text-[var(--accent)] transition-colors group cursor-pointer"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll to About section"
          >
            <span className="opacity-80 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
            <FaChevronDown size={13} className="text-[var(--accent)]" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
