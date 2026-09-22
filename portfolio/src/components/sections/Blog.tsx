"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCalendar, FaClock, FaArrowRight, FaPenNib } from "react-icons/fa";
import { blogPosts } from "@/data/blog";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Blog() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="blog" className="section-padding relative z-10" ref={ref}>
      <div className="container-custom">
        <SectionHeader
          label="Technical Insights"
          title={<>Engineering <span className="gradient-highlight">Articles & Thoughts</span></>}
          subtitle="In-depth technical write-ups on machine learning forensics, backend systems, and frontend performance."
          inView={inView}
        />

        {/* Coming soon banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="card p-5 flex items-center gap-4 mb-10 max-w-2xl mx-auto border border-[var(--border)] bg-[var(--bg-card)] backdrop-blur-md rounded-2xl"
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0">
            <FaPenNib size={18} />
          </div>
          <div>
            <p className="font-semibold text-sm text-[var(--text)]">
              Upcoming Articles & Case Studies
            </p>
            <p className="text-xs text-[var(--text-2)] mt-0.5">
              Currently drafting deep dives on multimodal synthetic media detection, PostgreSQL index tuning, and full-stack architecture.
            </p>
          </div>
        </motion.div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
              className="card overflow-hidden group relative flex flex-col justify-between border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300"
            >
              {/* Coming Soon overlay pill */}
              <div className="relative h-44 overflow-hidden bg-[var(--bg-muted)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-mono text-purple-300">
                  Coming Soon
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-bold mb-2 text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--text-2)] mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-[var(--text-3)] pt-3 border-t border-[var(--border)] mt-auto font-mono">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar size={10} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock size={10} /> {post.readTime}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[var(--accent)] font-sans font-medium">
                    Read <FaArrowRight size={10} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
