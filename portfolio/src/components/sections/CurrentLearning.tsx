"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { type IconType } from "react-icons";
import { SiNextdotjs, SiTypescript, SiDocker, SiRust } from "react-icons/si";
import { FaBrain, FaExternalLinkAlt } from "react-icons/fa";
import { currentLearning } from "@/data/currentLearning";

import SectionHeader from "@/components/layout/SectionHeader";

const iconMap: Record<string, IconType> = {
  SiNextdotjs,
  SiTypescript,
  SiDocker,
  SiRust,
  SiOpenai: FaBrain,
};

export default function CurrentLearning() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="learning" className="section-padding relative z-10" ref={ref}>
      <div className="container-custom">
        <SectionHeader
          label="Continuous Growth"
          title={<>Currently <span className="gradient-highlight">Exploring</span></>}
          subtitle="Staying at the cutting edge. Technologies, paradigms, and architectures I am actively diving into."
          inView={inView}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentLearning.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="card p-6 flex flex-col justify-between border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 group"
              >
                <div>
                  {/* Icon + Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                        style={{ background: `${item.color}20` }}
                      >
                        {Icon && <Icon size={24} color={item.color} />}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-[var(--text)]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[var(--text-3)] font-mono">
                          Target: {item.eta}
                        </p>
                      </div>
                    </div>
                    <span
                      className="text-sm font-bold font-mono"
                      style={{ color: item.color }}
                    >
                      {item.progress}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-[var(--bg-muted)] h-2 rounded-full overflow-hidden mb-4 border border-[var(--border)]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.progress}%` } : {}}
                      transition={{
                        duration: 1.2,
                        delay: 0.2 + i * 0.1,
                      }}
                      className="h-full rounded-full relative overflow-hidden"
                      style={{
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}cc)`,
                      }}
                    />
                  </div>

                  <p className="text-xs leading-relaxed mb-4 text-[var(--text-2)]">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.resource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-80 pt-2 border-t border-[var(--border)] mt-auto"
                  style={{ color: item.color }}
                  aria-label={`Resource for learning ${item.title}`}
                >
                  <FaExternalLinkAlt size={10} /> Learning Resource &rarr;
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
