"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCertificate, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaAward, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import SectionHeader from "@/components/layout/SectionHeader";
import { fadeUp } from "@/lib/animations";
import TiltCard from "@/components/ui/TiltCard";
import { certificates, Certificate } from "@/data/certificates";

export default function Certificates() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="section-padding section-bg relative z-10" ref={ref}>
      <div className="container-custom">
        <SectionHeader
          label="Certifications"
          title={<>My <span className="gradient-highlight">Certificates</span></>}
          subtitle="Continuous learning and professional certifications in software engineering, AI, and cloud technologies."
          inView={inView}
        />

        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <TiltCard key={cert.id} tiltDegree={5}>
              <motion.div
                variants={fadeUp(0.1 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.05 }}
                onClick={() => setSelectedCert(cert)}
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 card hover:border-[var(--accent)] transition-all cursor-pointer text-left relative"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)] transition-all duration-300">
                    <FaCertificate size={24} className="text-[var(--accent)] group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold mb-1 group-hover:text-[var(--accent)] transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-3)] font-medium flex items-center gap-2">
                      <FaBuilding className="text-[var(--accent)]" /> {cert.issuer}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 sm:gap-6 pl-16 sm:pl-0 shrink-0">
                  <span className="text-xs font-mono text-[var(--text-3)] bg-[var(--bg-muted)] px-3 py-1 rounded-full whitespace-nowrap">
                    {cert.date}
                  </span>
                  <span className="text-xs font-semibold text-[var(--accent)] hidden sm:inline group-hover:underline">
                    View Details &rarr;
                  </span>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Certificate Detail Popup Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-left"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[var(--bg-muted)] text-[var(--text-2)] hover:text-[var(--text)] transition-colors"
              >
                <FaTimes size={16} />
              </button>

              <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-5">
                <FaAward size={28} />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                Official Certification
              </span>

              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text)] mt-1 mb-2">
                {selectedCert.name}
              </h2>

              <div className="flex flex-wrap gap-4 text-xs text-[var(--text-2)] mb-4 font-medium">
                <div className="flex items-center gap-1.5">
                  <FaBuilding className="text-[var(--accent)]" /> {selectedCert.issuer}
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-[var(--accent)]" /> {selectedCert.date}
                </div>
              </div>

              {selectedCert.credentialId && (
                <div className="p-3 bg-[var(--bg-muted)] rounded-xl border border-[var(--border)] mb-5">
                  <p className="text-xs text-[var(--text-3)] font-mono">
                    Credential ID: <span className="font-semibold text-[var(--text)]">{selectedCert.credentialId}</span>
                  </p>
                </div>
              )}

              {selectedCert.description && (
                <p className="text-sm text-[var(--text-2)] leading-relaxed mb-5">
                  {selectedCert.description}
                </p>
              )}

              {selectedCert.skills && selectedCert.skills.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase text-[var(--text-3)] tracking-wider mb-2 flex items-center gap-1.5">
                    <FaCheckCircle className="text-[var(--accent)]" /> Skills & Competencies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-0.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {(selectedCert.link || selectedCert.verifyUrl) && (
                <div className="pt-5 border-t border-[var(--border)]">
                  <a
                    href={selectedCert.link || selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[var(--accent)] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[rgba(var(--accent-rgb),0.25)]"
                  >
                    <FaExternalLinkAlt size={14} /> Open Official Certificate Document
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

