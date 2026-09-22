"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education } from "@/data/education";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeader from "@/components/layout/SectionHeader";
import { fadeUp } from "@/lib/animations";

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="section-padding section-bg relative z-10" ref={ref}>
      <div className="container-custom">
        <SectionHeader
          label="Education"
          title={<>My <span className="gradient-highlight">Education</span></>}
          subtitle="My academic journey and foundational learning in computer science and engineering."
          inView={inView}
        />

        <div className="flex flex-col gap-4 max-w-4xl">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={fadeUp(0.1 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 card transition-colors hover:border-[var(--accent)] text-left cursor-pointer"
            >
              <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--bg-muted)] flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)] transition-colors">
                  <FaGraduationCap size={22} className="text-[var(--text-2)] group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-[var(--text-3)] font-medium">
                    {edu.field} • {edu.institution}
                  </p>
                </div>
              </div>
              
              <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 pl-16 sm:pl-0 shrink-0">
                <span className="text-sm text-[var(--text-2)] font-mono whitespace-nowrap">
                  {edu.period}
                </span>
                <span className="text-xs text-[var(--accent)] font-bold bg-[var(--accent)]/10 px-2 py-0.5 rounded-full">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
