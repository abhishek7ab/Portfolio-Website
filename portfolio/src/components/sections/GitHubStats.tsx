"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personal } from '@/data/personal';
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import SectionHeader from "@/components/layout/SectionHeader";
import Counter from "@/components/ui/Counter";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => ({ default: mod.GitHubCalendar })),
  {
    ssr: false,
    loading: () => <div className="h-[150px] w-full animate-pulse bg-[var(--bg-muted)] rounded-xl" />,
  }
);

export default function GitHubStats() {
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const stats = [
    { label: "Repositories", target: 25, suffix: "+", icon: FaCodeBranch, color: "from-blue-400 to-blue-600" },
    { label: "Stars", target: 50, suffix: "+", icon: FaStar, color: "from-yellow-400 to-yellow-600" },
    { label: "Contributions", target: 500, suffix: "+", icon: FaGithub, color: "from-green-400 to-green-600" },
    { label: "Followers", target: 30, suffix: "+", icon: FaUsers, color: "from-purple-400 to-purple-600" },
  ];

  const leetcodeBreakdown = [
    { level: "Easy", target: 80, suffix: "+", color: "bg-emerald-500", text: "text-emerald-400" },
    { level: "Medium", target: 65, suffix: "+", color: "bg-amber-500", text: "text-amber-400" },
    { level: "Hard", target: 15, suffix: "+", color: "bg-rose-500", text: "text-rose-400" },
  ];

  return (
    <section id="github" className="section-padding relative z-10" ref={ref}>
      <div className="container-custom">
        <SectionHeader
          label="Open Source & Problem Solving"
          title={<>Coding <span className="gradient-highlight">Activity & Stats</span></>}
          subtitle="My open source contributions on GitHub and algorithmic problem solving on LeetCode."
          inView={inView}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="card p-6 flex flex-col items-center justify-center text-center group">
              <stat.icon className="text-3xl mb-3 text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors" />
              <h4 className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                <Counter to={stat.target} suffix={stat.suffix} />
              </h4>
              <p className="text-[var(--text-2)] text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* GitHub Activity Graph */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={itemVariants}
            className="lg:col-span-2 card p-7 w-full overflow-hidden flex flex-col items-center justify-between"
          >
            <div className="flex items-center justify-between w-full mb-6">
              <a 
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[var(--accent)] transition-colors text-[var(--text)]"
              >
                <FaGithub className="text-2xl text-[var(--accent)]" />
                <span className="font-semibold text-lg">@{personal.githubUsername}</span>
              </a>
              <span className="text-xs font-mono text-[var(--text-3)] bg-[var(--bg-muted)] px-3 py-1 rounded-full">
                GitHub Activity
              </span>
            </div>
            
            <div className="w-full overflow-x-auto pb-2 flex justify-center">
              {mounted ? (
                <GitHubCalendar 
                  username={personal.githubUsername}
                  colorScheme="dark"
                  blockSize={14}
                  blockMargin={5}
                  fontSize={14}
                />
              ) : (
                <div className="h-32 w-full flex items-center justify-center text-[var(--text-3)] text-sm">
                  Loading contribution graph...
                </div>
              )}
            </div>
          </motion.div>

          {/* LeetCode Stats Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={itemVariants}
            className="card p-7 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <SiLeetcode className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text)] text-base">LeetCode Profile</h3>
                  <p className="text-xs text-[var(--text-3)]">Problem Solving</p>
                </div>
              </div>
              <a
                href={personal.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[var(--text-3)] hover:text-amber-500 transition-colors"
                title="View LeetCode Profile"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            </div>

            <div className="text-center py-4 my-auto bg-[var(--bg-muted)] rounded-2xl border border-[var(--border)]">
              <h4 className="text-4xl font-extrabold text-[var(--text)] mb-1">
                <Counter to={160} suffix="+" />
              </h4>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                Problems Solved
              </p>
            </div>

            <div className="space-y-3 mt-6">
              {leetcodeBreakdown.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                    <span className="text-[var(--text-2)] font-medium">{item.level}</span>
                  </div>
                  <span className={`font-mono font-bold ${item.text}`}>
                    <Counter to={item.target} suffix={item.suffix} />
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

