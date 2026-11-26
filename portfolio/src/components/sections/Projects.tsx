"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaFolderOpen, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaLayerGroup } from "react-icons/fa";
import { projects, Project } from "@/data/projects";
import SectionHeader from "@/components/layout/SectionHeader";
import { fadeUp } from "@/lib/animations";
import TiltCard from "@/components/ui/TiltCard";

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "Full Stack", "AI & ML", "Web App", "Social Impact"];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category.includes(selectedCategory);
  });

  return (
    <section id="projects" className="section-padding relative z-10" ref={ref}>
      <div className="container-custom">
        <SectionHeader
          label="Projects"
          title={<>Featured <span className="gradient-highlight">Work</span></>}
          subtitle="A collection of web applications and AI systems I've built to solve real-world problems."
          inView={inView}
        />

        {/* Category Filter Tabs */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-white bg-[var(--accent)] shadow-lg shadow-[rgba(var(--accent-rgb),0.3)] scale-105"
                    : "text-[var(--text-2)] bg-[var(--bg-muted)] hover:bg-[var(--border)] hover:text-[var(--text)]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <TiltCard key={project.id} className="h-full">
                <motion.article
                  layout
                  variants={fadeUp(0.1 + i * 0.1)}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setActiveProject(project)}
                  className="card flex flex-col h-full overflow-hidden group p-5 sm:p-6 text-left card-body cursor-pointer hover:border-[var(--accent)] transition-all duration-300 relative"
                >
                  {/* Card Header */}
                  {project.image ? (
                    <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 bg-[var(--bg-muted)] border border-[var(--border)] group-hover:border-[var(--accent)]/50 transition-all duration-300">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md flex items-center justify-center text-[var(--accent)] border border-white/10 shadow-md">
                        <FaFolderOpen size={15} />
                      </div>
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[11px] font-mono text-white/90 shadow-md">
                        {project.timeline}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center border border-[var(--accent)]/20 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300 shadow-sm">
                        <FaFolderOpen size={20} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-mono text-[var(--text-3)] bg-[var(--bg-muted)] px-2.5 py-1 rounded-md border border-[var(--border)]">
                          {project.timeline}
                        </span>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 text-[var(--text-3)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg-muted)]"
                          title="View GitHub Repository"
                        >
                          <FaGithub size={18} />
                        </a>
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 text-[var(--text-3)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg-muted)]"
                            title="Live Preview"
                          >
                            <FaExternalLinkAlt size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Category info */}
                  <div className="mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--accent)]">
                      {project.category.join(" • ")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[var(--text-2)] text-sm leading-relaxed flex-grow mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-xs font-medium text-[var(--accent)] mb-4">
                    <span className="hover:underline">View details & highlights &rarr;</span>
                    {project.liveDemo && (
                      <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Preview
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[var(--border)]">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </TiltCard>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 p-2.5 rounded-full bg-[var(--bg-muted)] text-[var(--text-2)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-colors z-20"
              >
                <FaTimes size={18} />
              </button>

              {/* Modal Image Banner */}
              {activeProject.image && (
                <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 border border-[var(--border)]">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {activeProject.liveDemo && (
                    <div className="absolute top-3 left-3 bg-emerald-500/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      <span>Live Deployment</span>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {activeProject.category.join(" • ")}
                </span>
                <span className="text-xs text-[var(--text-3)]">• {activeProject.timeline}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[var(--text)]">
                {activeProject.title}
              </h2>
              <p className="text-sm font-medium text-[var(--accent)] mb-4">
                {activeProject.subtitle}
              </p>

              <p className="text-[var(--text-2)] leading-relaxed mb-6 text-sm sm:text-base">
                {activeProject.longDescription || activeProject.description}
              </p>

              {activeProject.highlights && activeProject.highlights.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[var(--text)] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FaCheckCircle className="text-[var(--accent)]" /> Architecture Highlights & Key Features
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--text-2)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeProject.impact && activeProject.impact.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[var(--text)] uppercase tracking-wider mb-3">System & Impact Metrics</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {activeProject.impact.map((item, idx) => (
                      <div key={idx} className="p-4 bg-[var(--bg-muted)] rounded-xl border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors">
                        <p className="text-[11px] text-[var(--text-3)] font-medium mb-1 uppercase tracking-wider">{item.metric}</p>
                        <p className="text-base sm:text-lg font-bold text-[var(--accent)] mb-1">{item.value}</p>
                        {item.description && <p className="text-xs text-[var(--text-2)] leading-tight">{item.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-sm font-bold text-[var(--text)] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FaLayerGroup className="text-[var(--accent)]" /> Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-6 border-t border-[var(--border)]">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--text)] text-[var(--bg)] font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <FaGithub size={18} /> View Source Code
                </a>

                {activeProject.liveDemo && (
                  <a
                    href={activeProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[rgba(var(--accent-rgb),0.25)]"
                  >
                    <FaExternalLinkAlt size={14} /> Open Live Application
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

