"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Each icon is placed on a circular orbit by rotating the whole ring and counter-rotating the icon
// so the icon always faces up while it revolves.

const INNER_ORBS = [
  { icon: SiReact,      color: "#38bdf8", label: "React",      deg: 0   },
  { icon: SiPython,     color: "#f7c948", label: "Python",     deg: 90  },
  { icon: SiNextdotjs,  color: "#e0e0e0", label: "Next.js",    deg: 180 },
  { icon: SiNodedotjs,  color: "#6ee7b7", label: "Node.js",    deg: 270 },
];

const OUTER_ORBS = [
  { icon: SiTypescript, color: "#60a5fa", label: "TypeScript", deg: 30  },
  { icon: SiTailwindcss,color: "#22d3ee", label: "Tailwind",   deg: 90  },
  { icon: SiPostgresql, color: "#818cf8", label: "PostgreSQL", deg: 150 },
  { icon: FaJava,       color: "#f97316", label: "Java",       deg: 210 },
  { icon: SiDocker,     color: "#7dd3fc", label: "Docker",     deg: 270 },
];

// Reusable orbit ring: rotates the whole group, counter-rotates each icon
function OrbitRing({
  radius,
  duration,
  orbs,
  reverse = false,
}: {
  radius: number;
  duration: number;
  orbs: typeof INNER_ORBS;
  reverse?: boolean;
}) {
  const size = radius * 2 + 48; // container is diameter + icon width

  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 m-auto"
      style={{ width: size, height: size }}
    >
      {orbs.map(({ icon: Icon, color, label, deg }) => {
        const rad = (deg * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        return (
          <motion.div
            key={label}
            animate={{ rotate: reverse ? 360 : -360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <div
              className="flex items-center justify-center rounded-xl shadow-lg"
              style={{
                width: 40,
                height: 40,
                background: `${color}18`,
                border: `1.5px solid ${color}44`,
                boxShadow: `0 0 14px 2px ${color}30`,
              }}
            >
              <Icon size={18} style={{ color }} />
            </div>
            <span
              className="text-[9px] font-mono font-semibold opacity-70 whitespace-nowrap"
              style={{ color }}
            >
              {label}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function TechOrbitVisual() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 480, height: 480 }}>
      {/* Outer orbit ring dashes */}
      <div
        className="absolute rounded-full"
        style={{
          width: 420,
          height: 420,
          border: "1px dashed rgba(255,107,0,0.12)",
        }}
      />
      {/* Inner orbit ring dashes */}
      <div
        className="absolute rounded-full"
        style={{
          width: 280,
          height: 280,
          border: "1px dashed rgba(255,107,0,0.18)",
        }}
      />

      {/* Outer orbit (5 icons, slow, counter-clockwise) */}
      <OrbitRing radius={210} duration={28} orbs={OUTER_ORBS} reverse />

      {/* Inner orbit (4 icons, faster, clockwise) */}
      <OrbitRing radius={140} duration={18} orbs={INNER_ORBS} />

      {/* ── Centre glow node ── */}
      <div className="absolute inset-0 m-auto flex items-center justify-center"
           style={{ width: 100, height: 100 }}>
        {/* Pulsing glow rings */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full"
          style={{ width: 100, height: 100, background: "radial-gradient(circle, #FF6B00 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.25, 0, 0.25] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute rounded-full"
          style={{ width: 120, height: 120, background: "radial-gradient(circle, #FF8533 0%, transparent 70%)" }}
        />
        {/* Core disc */}
        <div
          className="relative z-10 rounded-full flex flex-col items-center justify-center"
          style={{
            width: 80,
            height: 80,
            background: "linear-gradient(135deg, #FF6B00, #FF4400)",
            boxShadow: "0 0 40px 8px rgba(255,107,0,0.5), 0 0 80px 20px rgba(255,107,0,0.2)",
          }}
        >
          <span className="text-white font-black text-lg leading-none">AB</span>
          <span className="text-white/60 text-[9px] font-mono tracking-widest mt-0.5">DEV</span>
        </div>
      </div>
    </div>
  );
}
