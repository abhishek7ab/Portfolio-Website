"use client";

import { motion } from "framer-motion";

export function SkeletonLoader({ count = 1 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-12 rounded-lg glass-card"
        />
      ))}
    </div>
  );
}

export function CardSkeletonLoader() {
  return (
    <div className="glass-card overflow-hidden">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="h-48 bg-gradient-to-r from-violet-500/10 to-cyan-500/10"
      />
      <div className="p-4 space-y-3">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-4 rounded bg-gradient-to-r from-violet-500/10 to-cyan-500/10"
        />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-3 rounded bg-gradient-to-r from-violet-500/10 to-cyan-500/10 w-4/5"
        />
      </div>
    </div>
  );
}
