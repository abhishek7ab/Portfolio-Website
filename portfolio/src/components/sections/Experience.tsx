"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaAward,
  FaLaptopCode,
} from "react-icons/fa";
import SectionHeader from "@/components/layout/SectionHeader";
import { fadeUp } from "@/lib/animations";
import TiltCard from "@/components/ui/TiltCard";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="experience"
      className="section-padding section-bg relative z-10 overflow-hidden"
      ref={ref}
    >
      <div className="container-custom">
        <SectionHeader
          label="Career History"
          title={
            <>
              Work <span className="gradient-highlight">Experience</span>
            </>
          }
          subtitle="Real-world software development internship and certified industrial training experiences."
          inView={inView}
        />

        {/* Experience Timeline / Cards */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line for desktop */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500/40 via-purple-500/40 to-transparent" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeUp(0.1 + index * 0.15)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.05 }}
                className="relative flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Timeline node icon */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--bg-muted)] border border-[var(--border)] text-[var(--accent)] shrink-0 z-10 shadow-lg group-hover:scale-110 transition-transform">
                  {exp.type === "Internship" ? (
                    <FaLaptopCode size={24} className="text-indigo-400" />
                  ) : (
                    <FaBriefcase size={22} className="text-purple-400" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="w-full flex-1">
                  <TiltCard tiltDegree={4}>
                    <div className="card p-6 sm:p-8 text-left border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300 relative overflow-hidden group">
                      {/* Top subtle glow banner */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1 opacity-80"
                        style={{
                          background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                        }}
                      />

                      {/* Header Info */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            {exp.badge && (
                              <span
                                className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                                style={{
                                  backgroundColor: `${exp.color}15`,
                                  color: exp.color,
                                  border: `1px solid ${exp.color}35`,
                                }}
                              >
                                {exp.badge}
                              </span>
                            )}
                            <span className="text-xs font-mono text-[var(--text-3)] bg-[var(--bg-muted)] px-2.5 py-0.5 rounded-full">
                              {exp.type}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                            {exp.role}
                          </h3>

                          <p className="text-base font-semibold text-indigo-400 flex items-center gap-2 mt-1">
                            <FaBuilding size={14} />
                            {exp.company}
                          </p>
                        </div>

                        {/* Meta: Period & Location */}
                        <div className="flex flex-col sm:items-end gap-1.5 text-xs text-[var(--text-3)]">
                          <span className="flex items-center gap-1.5 font-mono text-[var(--text-2)] bg-[var(--bg-muted)] px-3 py-1 rounded-lg">
                            <FaCalendarAlt className="text-[var(--accent)]" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FaMapMarkerAlt />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Credential ID badge */}
                      {exp.credentialId && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[var(--bg-muted)] border border-[var(--border)] text-xs font-mono text-[var(--text-3)] mb-4">
                          <FaAward className="text-[var(--accent)]" />
                          <span>
                            ID / Reg:{" "}
                            <strong className="text-[var(--text-2)]">
                              {exp.credentialId}
                            </strong>
                          </span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-sm text-[var(--text-2)] leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase text-[var(--text-3)] tracking-wider mb-3">
                          Key Contributions & Achievements
                        </h4>
                        <ul className="space-y-2 text-sm text-[var(--text-2)]">
                          {exp.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5">
                              <FaCheckCircle
                                size={14}
                                className="text-[var(--accent)] shrink-0 mt-1"
                              />
                              <span className="leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[var(--border)]">
                        <span className="text-xs font-bold text-[var(--text-3)] uppercase tracking-wider mr-1">
                          Skills:
                        </span>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-muted)] text-[var(--text-2)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Certificate Attachment Button */}
                      {exp.certificateUrl && (
                        <div className="mt-5 pt-4 border-t border-[var(--border)] flex justify-end">
                          <a
                            href={exp.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--accent)] text-white hover:opacity-90 transition-opacity shadow-md"
                          >
                            <FaExternalLinkAlt size={12} />
                            View Internship Certificate
                          </a>
                        </div>
                      )}
                    </div>
                  </TiltCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
