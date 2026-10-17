"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { personal } from "@/data/personal";

const ROLES = [
  "Full-Stack Developer",
  "AI / ML Engineer",
  "Software Developer",
  "Problem Solver",
];

const socialLinks = [
  { href: personal.social.github,    icon: FaGithub,    label: "GitHub"    },
  { href: personal.social.linkedin,  icon: FaLinkedin,  label: "LinkedIn"  },
  { href: personal.social.instagram, icon: FaInstagram, label: "Instagram" },
].filter((l) => l.href);

const stats = [
  { value: "4+",  label: "Projects"    },
  { value: "2+",  label: "Internships" },
  { value: "3+",  label: "Years Coding"},
];

function useTypewriter(words: string[]) {
  const [idx, setIdx]      = useState(0);
  const [text, setText]    = useState("");
  const [deleting, setDel] = useState(false);

  useEffect(() => {
    const word = words[idx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < word.length) {
      t = setTimeout(() => setText(word.slice(0, text.length + 1)), 65);
    } else if (!deleting && text.length === word.length) {
      t = setTimeout(() => setDel(true), 2200);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 38);
    } else {
      setDel(false);
      setIdx((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx, words]);

  return text;
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay } },
});

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      suppressHydrationWarning
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Subtle ambient glow — top left */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full -z-10"
        style={{ background: "radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)" }}
      />
      {/* Subtle ambient glow — bottom right */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full -z-10"
        style={{ background: "radial-gradient(circle, rgba(255,133,51,0.06) 0%, transparent 70%)" }}
      />

      <div className="w-full max-w-3xl mx-auto px-6 md:px-10 text-center flex flex-col items-center gap-7 pt-24 pb-20">

        {/* Availability badge */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-semibold text-emerald-400 tracking-widest uppercase">
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show" className="space-y-1">
          <p className="text-sm font-mono" style={{ color: "var(--text-3)" }}>
            Hi there 👋, I&apos;m
          </p>
          <h1
            className="font-extrabold tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(3rem, 8vw, 5rem)", color: "var(--text)" }}
          >
            {personal.firstName}&nbsp;
            <span
              style={{
                background: "linear-gradient(120deg, #FF6B00 20%, #FF8533 60%, #FFB366 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {personal.lastName}
            </span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-2 h-9"
        >
          <span
            className="text-xl md:text-2xl font-semibold"
            style={{ color: "var(--text-2)" }}
          >
            {role}
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
            className="inline-block w-[3px] h-7 rounded-full"
            style={{ background: "var(--accent)" }}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="show"
          className="text-[15px] leading-relaxed max-w-[540px]"
          style={{ color: "var(--text-3)" }}
        >
          B.Tech CSE student at Vishwakarma University building scalable
          full-stack apps and AI-powered solutions. Software Intern @{" "}
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>Cognifyz Technologies</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm"
            style={{
              background: "linear-gradient(135deg, #FF6B00, #FF8533)",
              boxShadow: "0 8px 28px -6px rgba(255,107,0,0.5)",
            }}
          >
            Hire Me
          </motion.a>

          <motion.a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-colors duration-200"
            style={{
              border: "1.5px solid var(--border-light)",
              color: "var(--text-2)",
            }}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-3"
        >
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200"
              style={{
                border: "1.5px solid var(--border)",
                color: "var(--text-3)",
                background: "var(--bg-card)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#FF6B00";
                el.style.color = "#FF6B00";
                el.style.boxShadow = "0 0 16px -4px rgba(255,107,0,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-3)";
                el.style.boxShadow = "none";
              }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp(0.6)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 gap-4 w-full max-w-sm pt-6 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p
                className="text-3xl font-extrabold"
                style={{
                  background: "linear-gradient(135deg, #FF6B00, #FF8533)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </p>
              <p className="text-xs mt-1 font-medium" style={{ color: "var(--text-3)" }}>
                {label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1.5px solid var(--border)" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full"
            style={{ background: "var(--accent)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
