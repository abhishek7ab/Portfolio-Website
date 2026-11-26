"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillCategories, Skill } from "@/data/skills";
import SectionHeader from "@/components/layout/SectionHeader";
import { 
  FaCode, 
  FaGlobe, 
  FaServer, 
  FaBrain, 
  FaTools, 
  FaPython, 
  FaNetworkWired 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiJavascript, 
  SiCplusplus, 
  SiC, 
  SiPostgresql, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFramer, 
  SiHtml5, 
  SiNodedotjs, 
  SiExpress, 
  SiMysql, 
  SiPytorch, 
  SiScikitlearn, 
  SiPandas, 
  SiOpencv, 
  SiGit, 
  SiDocker, 
  SiLinux, 
  SiVercel
} from "react-icons/si";
import { VscCode as SiVscode } from "react-icons/vsc";

// Map string icon names to React Components
const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  FaCode,
  FaGlobe,
  FaServer,
  FaBrain,
  FaTools,
  FaPython,
  FaNetworkWired,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiOpencv,
  SiGit,
  SiDocker,
  SiLinux,
  SiVercel,
  SiVscode,
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const renderIcon = (iconName: string, color?: string, className: string = "text-base") => {
    const IconComponent = iconMap[iconName] || FaCode;
    return <IconComponent className={className} style={{ color }} />;
  };

  const filteredCategories = activeCategory === "all"
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeCategory);

  const totalSkillsCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="section-padding relative z-10" ref={ref}>
      <div className="container-custom">
        <SectionHeader
          label="Technical Proficiency"
          title={<>Core Stack & <span className="gradient-highlight">Technologies</span></>}
          subtitle="A focused overview of the tools, frameworks, and languages I build with daily."
          inView={inView}
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
              activeCategory === "all"
                ? "bg-[var(--accent)] text-white shadow-[0_0_15px_rgba(var(--accent-rgb),0.25)]"
                : "bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-2)] hover:text-[var(--text)] hover:border-[var(--accent)]/40"
            }`}
          >
            All Stack ({totalSkillsCount})
          </button>
          
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? "bg-[var(--accent)] text-white shadow-[0_0_15px_rgba(var(--accent-rgb),0.25)]"
                  : "bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-2)] hover:text-[var(--text)] hover:border-[var(--accent)]/40"
              }`}
            >
              {renderIcon(cat.icon, undefined, "text-xs")}
              <span>{cat.label.split("&")[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="card p-5 sm:p-6 flex flex-col justify-between border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all group bg-[var(--bg-card)] rounded-2xl"
            >
              {/* Category Header */}
              <div className="mb-4 pb-3 border-b border-[var(--border)] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[var(--bg-muted)] border border-[var(--border)] group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/5 transition-colors">
                    {renderIcon(category.icon, "var(--accent)", "text-base")}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {category.label}
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[var(--text-2)] bg-[var(--bg-muted)] px-2 py-0.5 rounded-full border border-[var(--border)]">
                  {category.skills.length}
                </span>
              </div>

              {/* Clean Chips Flex Wrap */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill: Skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--bg-muted)] border border-[var(--border)] hover:border-[var(--accent)]/40 hover:bg-[var(--bg-card)] transition-all cursor-default group/chip"
                  >
                    <span className="shrink-0 flex items-center justify-center text-sm transition-transform group-hover/chip:scale-110">
                      {renderIcon(skill.icon, skill.color, "text-sm sm:text-base")}
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium text-[var(--text)] group-hover/chip:text-[var(--text-1)] transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
