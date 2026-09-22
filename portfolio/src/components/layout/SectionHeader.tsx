"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  inView?: boolean;
  delay?: number;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  inView = true,
  delay = 0,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`section-header ${className}`}
    >
      <span className="section-label">
        {label}
      </span>
      <h2 className="section-title">
        {title}
      </h2>
      <div
        className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500"
      />
      {subtitle && (
        <p className="section-sub">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
