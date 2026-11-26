"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personal } from "@/data/personal";
import SectionHeader from "@/components/layout/SectionHeader";
import { fadeUp } from "@/lib/animations";
import TiltCard from "@/components/ui/TiltCard";
import { 
  FaGraduationCap, 
  FaCode, 
  FaBrain, 
  FaServer, 
  FaLaptopCode, 
  FaCheckCircle, 
  FaMapMarkerAlt,
  FaArrowRight
} from "react-icons/fa";

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section-padding relative z-10" ref={ref}>
      <div className="container-custom">
        <SectionHeader
          label="About & Expertise"
          title={<>Building <span className="gradient-highlight">Reliable Software</span> & Intelligent Experiences</>}
          subtitle="Focused on scalable applications, clean architecture, and applied AI solutions that deliver real-world value."
          inView={inView}
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          
          {/* Tile 1: Profile & Live Availability Badge (Span 4) */}
          <motion.div
            variants={fadeUp(0, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="md:col-span-5 lg:col-span-4 flex flex-col"
          >
            <TiltCard className="h-full">
              <div className="card p-5 flex flex-col justify-between h-full relative overflow-hidden group border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300">
                {/* Live Status Pill */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-4 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Open to Opportunities
                </div>

                {/* Profile Image Frame */}
                <div className="relative w-full aspect-[4/4.5] rounded-xl overflow-hidden border border-[var(--border)] group-hover:border-[var(--accent)] transition-all duration-500 shadow-2xl mb-4">
                  <Image
                    src={personal.profileImage}
                    alt={personal.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <h3 className="text-lg font-bold text-white leading-snug">{personal.name}</h3>
                    <p className="text-xs text-blue-300 font-mono flex items-center gap-1.5 mt-0.5">
                      <FaMapMarkerAlt className="text-red-400 shrink-0" />
                      {personal.contact.location}
                    </p>
                  </div>
                </div>

                {/* Headline Role */}
                <div className="pt-1">
                  <span className="text-xs uppercase tracking-wider font-mono text-[var(--accent)] font-semibold">Current Status</span>
                  <p className="text-sm font-medium text-[var(--text)] mt-0.5">
                    B.Tech CSE Student & Software Developer
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Tile 2: Executive Engineering Bio (Span 8) */}
          <motion.div
            variants={fadeUp(0.1, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="md:col-span-7 lg:col-span-8 flex flex-col justify-between"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.008, boxShadow: "0 22px 60px -24px rgba(99, 102, 241, 0.3)" }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="card p-6 sm:p-7 flex flex-col justify-between h-full border border-[var(--border)]"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider mb-2">
                  <FaLaptopCode className="text-base" /> Full-Stack & Applied AI Engineering
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--text)] leading-tight">
                  Creating Scalable Products with Modern Engineering Practices
                </h3>
                
                <p className="text-[var(--text-2)] text-sm sm:text-base leading-relaxed mb-4">
                  {personal.about.story}
                </p>
                
                <p className="text-[var(--text-2)] text-sm sm:text-base leading-relaxed">
                  {personal.about.philosophy}
                </p>
              </div>

              {/* Core Engineering Values Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-6 pt-5 border-t border-[var(--border)]">
                {[
                  "Type-Safe TypeScript",
                  "Modern Next.js Stack",
                  "RESTful API Design",
                  "PostgreSQL / MySQL",
                  "Scikit-Learn & PyTorch",
                  "Clean Architecture",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-medium text-[var(--text-2)]">
                    <FaCheckCircle className="text-[var(--accent)] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Tile 3: Academic Credentials (Span 6 on MD, 4 on LG) */}
          <motion.div
            variants={fadeUp(0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="md:col-span-6 lg:col-span-4 flex flex-col"
          >
            <motion.div whileHover={{ y: -6, scale: 1.01 }} transition={{ type: "spring", stiffness: 220, damping: 20 }} className="card p-6 flex flex-col justify-between h-full border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl">
                  <FaGraduationCap />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs font-bold">
                  CGPA 8+ / 10
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--text)] mb-1">B.Tech Computer Engineering</h4>
                <p className="text-xs text-[var(--text-2)] mb-3">Vishwakarma University, Pune</p>
                <p className="text-xs text-[var(--text-2)] leading-relaxed">
                  Focus on Data Structures, Object-Oriented Systems, Database Management, and Machine Learning.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Tile 4: Algorithmic Rigor & LeetCode Stats (Span 6 on MD, 4 on LG) */}
          <motion.div
            variants={fadeUp(0.25, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="md:col-span-6 lg:col-span-4 flex flex-col"
          >
            <motion.div whileHover={{ y: -6, scale: 1.01 }} transition={{ type: "spring", stiffness: 220, damping: 20 }} className="card p-6 flex flex-col justify-between h-full border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-xl">
                  <FaCode />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 font-mono text-xs font-bold">
                  100+ Solved
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--text)] mb-1">Algorithmic Problem Solving</h4>
                <p className="text-xs text-[var(--text-2)] mb-3">LeetCode & HackerRank Platforms</p>
                <p className="text-xs text-[var(--text-2)] leading-relaxed">
                  Practicing Data Structures, Dynamic Programming, Graph Algorithms, and efficient time/space complexity optimization.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Tile 5: AI & Machine Learning Focus (Span 12 on MD, 4 on LG) */}
          <motion.div
            variants={fadeUp(0.3, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="md:col-span-12 lg:col-span-4 flex flex-col"
          >
            <motion.div whileHover={{ y: -6, scale: 1.01 }} transition={{ type: "spring", stiffness: 220, damping: 20 }} className="card p-6 flex flex-col justify-between h-full border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl">
                  <FaBrain />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold">
                  Applied AI
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[var(--text)] mb-1">AI & Machine Learning</h4>
                <p className="text-xs text-[var(--text-2)] mb-3">Predictive Models & Intelligent APIs</p>
                <p className="text-xs text-[var(--text-2)] leading-relaxed">
                  Building automated classification models, data processing pipelines, and integrating ML models into production backends.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
