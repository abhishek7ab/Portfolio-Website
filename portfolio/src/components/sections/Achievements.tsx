"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { achievements } from "@/data/achievements";
import SectionHeader from "@/components/layout/SectionHeader";
import {
  FaTrophy, FaCode, FaGithub, FaStar, FaMicrophone, FaFire, FaMedal,
  FaHeart, FaCloud, FaServer, FaBrain, FaTasks,
} from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties, className?: string }>> = {
  FaTrophy, FaCode, FaGithub, FaStar, FaMicrophone, FaFire, FaMedal,
  FaHeart, FaCloud, FaServer, FaBrain, FaTasks,
};

import { fadeUp } from "@/lib/animations";

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="achievements" className="section-padding section-bg relative z-10" ref={ref}>
      <div className="container-custom">
        <SectionHeader
          label="Achievements"
          title={<>Highlights & <span className="gradient-highlight">Wins</span></>}
          subtitle="Highlights from hackathons, open source contributions, and academics."
          inView={inView}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || FaMedal;
            return (
              <motion.div
                key={item.id}
                variants={fadeUp(0.1 + i * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.05 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group flex flex-col p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors card text-left card-body cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-[var(--bg-muted)] flex items-center justify-center mb-6 group-hover:bg-[var(--accent)] transition-colors">
                  <Icon size={28} className="text-[var(--text-2)] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-[var(--text-2)] text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
                
                <div className="mt-6 pt-4 border-t border-[var(--border)] flex justify-between items-center text-xs font-mono">
                  <span className="text-[var(--text-3)]">{item.category}</span>
                  <span className="text-[var(--accent)] font-bold">{item.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
