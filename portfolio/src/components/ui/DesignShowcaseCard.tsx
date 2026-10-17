"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";
import { FaCode, FaBrain, FaServer, FaCheckCircle } from "react-icons/fa";

// ---------- small helpers ----------

function CodeLine({
  indent = 0,
  keyword,
  value,
  comment,
  color = "#e0e0e0",
}: {
  indent?: number;
  keyword?: string;
  value?: string;
  comment?: string;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-1 text-[11px] font-mono leading-5">
      {indent > 0 && <span style={{ width: indent * 12 }} />}
      {keyword && <span style={{ color: "#FF8533" }}>{keyword}</span>}
      {value && <span style={{ color }}>&nbsp;{value}</span>}
      {comment && <span style={{ color: "#4d5769" }}>&nbsp;// {comment}</span>}
    </div>
  );
}

const techStack = [
  { icon: SiPython, label: "Python", color: "#f7c948" },
  { icon: SiReact, label: "React", color: "#38bdf8" },
  { icon: SiNextdotjs, label: "Next.js", color: "#e0e0e0" },
  { icon: SiTypescript, label: "TypeScript", color: "#60a5fa" },
  { icon: SiNodedotjs, label: "Node.js", color: "#6ee7b7" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#818cf8" },
];

const metrics = [
  { icon: FaCode, label: "Projects", value: "4+", color: "#FF6B00" },
  { icon: FaBrain, label: "AI/ML", value: "3+", color: "#a78bfa" },
  { icon: FaServer, label: "APIs Built", value: "10+", color: "#34d399" },
];

// ---------- main component ----------

export default function DesignShowcaseCard() {
  return (
    <div className="relative w-full max-w-[520px]">
      {/* Ambient glow */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-[#FF6B00]/20 via-[#FF8533]/10 to-transparent rounded-[3rem] blur-3xl -z-10" />

      {/* ── OUTER shell ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        className="rounded-2xl overflow-hidden"
        style={{
          background: "#0e0e12",
          border: "1px solid #27272f",
          boxShadow: "0 32px 80px -16px rgba(0,0,0,0.8), 0 0 0 1px #1e1e28",
        }}
      >
        {/* ── Top bar (editor chrome) ── */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b"
          style={{ borderColor: "#1e1e26", background: "#0a0a0e" }}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <span className="w-3 h-3 rounded-full bg-[#10B981]" />
          </div>

          {/* Tab */}
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono"
            style={{ background: "#14141c", color: "#888" }}
          >
            <span style={{ color: "#FF6B00" }}>◆</span>
            abhishek_badave.tsx
          </div>

          {/* Live badge */}
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-mono text-emerald-400 tracking-wider">LIVE</span>
          </div>
        </div>

        {/* ── Code panel ── */}
        <div className="px-5 pt-4 pb-3" style={{ background: "#0e0e12" }}>
          {/* Line numbers strip (decorative) */}
          <div className="flex gap-4">
            <div
              className="flex flex-col items-end gap-[4px] pt-0.5 select-none"
              style={{ color: "#2d2d3a", fontSize: 10, fontFamily: "monospace", lineHeight: "20px" }}
            >
              {[1,2,3,4,5,6,7,8,9,10].map((n) => <span key={n}>{n}</span>)}
            </div>
            <div className="flex flex-col gap-0">
              <CodeLine keyword="const" value="developer = {" color="#e0e0e0" />
              <CodeLine indent={1} keyword="name:" value='"Abhishek Badave",' color="#a5f3a5" />
              <CodeLine indent={1} keyword="role:" value='"Full-Stack + AI/ML",' color="#a5f3a5" />
              <CodeLine indent={1} keyword="stack:" value="[React, Python, Node]," color="#93c5fd" />
              <CodeLine indent={1} keyword="passion:" value='"Building things",' color="#a5f3a5" />
              <CodeLine indent={1} keyword="available:" value="true," color="#34d399" comment="hire me!" />
              <CodeLine keyword="}" value=";" />
              <div className="h-1" />
              <CodeLine keyword="export" value="default developer" color="#e0e0e0" />
              <div className="h-1" />
              <div className="flex items-center gap-1 text-[11px] font-mono" style={{ color: "#4d5769" }}>
                <span style={{ color: "#FF6B00" }}>▶</span>
                <span>&nbsp;Run successfully · 0 errors</span>
                <FaCheckCircle size={10} style={{ color: "#34d399", marginLeft: 4 }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: "#1a1a22" }} />

        {/* ── Metrics strip ── */}
        <div
          className="grid grid-cols-3 divide-x divide-[#1a1a22]"
          style={{ background: "#0b0b0f" }}
        >
          {metrics.map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="flex flex-col items-center py-3 gap-0.5">
              <Icon size={13} style={{ color }} />
              <p className="text-base font-extrabold mt-1" style={{ color }}>{value}</p>
              <p className="text-[10px] font-mono" style={{ color: "#555" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: "#1a1a22" }} />

        {/* ── Tech stack ── */}
        <div className="px-5 py-4" style={{ background: "#0e0e12" }}>
          <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: "#3d3d4d" }}>
            Tech Stack
          </p>
          <div className="grid grid-cols-3 gap-2">
            {techStack.map(({ icon: Icon, label, color }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05, borderColor: color }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-default transition-colors duration-200"
                style={{
                  background: "#14141c",
                  border: "1px solid #22222c",
                }}
              >
                <Icon size={14} style={{ color }} />
                <span className="text-[11px] font-medium" style={{ color: "#aaa" }}>{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Floating badge — top right ── */}
      <motion.div
        animate={{ y: [-4, 5, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-5 -right-4 z-20 hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl"
        style={{
          background: "#14141c",
          border: "1px solid #2a2a38",
          boxShadow: "0 8px 30px -8px rgba(0,0,0,0.7)",
        }}
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: "rgba(255,107,0,0.15)" }}
        >
          <FaBrain size={12} style={{ color: "#FF6B00" }} />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white leading-tight">AI / ML</p>
          <p className="text-[9px] font-mono" style={{ color: "#555" }}>Deepfake Detection</p>
        </div>
      </motion.div>

      {/* ── Floating badge — bottom left ── */}
      <motion.div
        animate={{ y: [4, -5, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-5 -left-4 z-20 hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl"
        style={{
          background: "#14141c",
          border: "1px solid #2a2a38",
          boxShadow: "0 8px 30px -8px rgba(0,0,0,0.7)",
        }}
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: "rgba(52,211,153,0.12)" }}
        >
          <FaCheckCircle size={12} style={{ color: "#34d399" }} />
        </div>
        <div>
          <p className="text-[11px] font-bold text-white leading-tight">Open to Work</p>
          <p className="text-[9px] font-mono" style={{ color: "#555" }}>Available · 2027</p>
        </div>
      </motion.div>
    </div>
  );
}
