"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/layout/SectionHeader";
import { fadeUp } from "@/lib/animations";

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="testimonials" className="section-padding relative z-10" ref={ref}>
      <div className="container-custom">
        <SectionHeader
          label="Testimonials"
          title={<>Recognition & <span className="gradient-highlight">Impact</span></>}
          subtitle="What collaborators and mentors have to say about working together."
          inView={inView}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="card p-6 relative group hover:border-[var(--accent)]/50 transition-all duration-300 flex flex-col"
            >
              <div className="absolute top-6 right-6 text-[var(--accent)]/20 group-hover:text-[var(--accent)]/40 transition-colors">
                <FaQuoteLeft size={32} />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-[var(--text-2)] text-sm leading-relaxed flex-grow mb-6 relative z-10">
                {testimonial.content}
              </p>

              <div className="pt-4 border-t border-[var(--border)]">
                <p className="font-semibold text-[var(--text)] text-sm">{testimonial.name}</p>
                <p className="text-xs text-[var(--accent)] font-medium">{testimonial.role}</p>
                <p className="text-xs text-[var(--text-3)]">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--text-2)] text-sm">
            Let's collaborate and build something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
