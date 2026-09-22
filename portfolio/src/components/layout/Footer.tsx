"use client";

import { personal } from "@/data/personal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-50" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container-custom py-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-50">
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--text-2)" }}>
            © {new Date().getFullYear()}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold">
              {personal.name}
            </span>
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-3)" }}>
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--bg-muted)] text-[var(--text-2)] hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            <FaGithub size={18} />
          </motion.a>
          <motion.a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--bg-muted)] text-[var(--text-2)] hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            <FaLinkedin size={18} />
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/Abhishek2506_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--bg-muted)] text-[var(--text-2)] hover:bg-orange-500 hover:text-white transition-colors"
          >
            <SiLeetcode size={18} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
