"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personal } from '@/data/personal';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaSpinner, FaCheckCircle, FaCopy, FaCheck } from 'react-icons/fa';
import SectionHeader from "@/components/layout/SectionHeader";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(100, "Subject must be less than 100 characters").optional().or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters"),
  honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.contact.email);
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Honeypot check - if filled, it's a bot
    if (data.honeypot) {
      toast.error("Spam detected. Please try again.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setIsSuccess(true);
        toast.success("Message sent successfully!");
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        toast.error(result.error || "Failed to send message via server.");
        const mailtoUrl = `mailto:${personal.contact.email}?subject=${encodeURIComponent(data.subject || `Portfolio Message from ${data.name}`)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`;
        toast(
          (t) => (
            <div className="flex flex-col gap-2 pt-1">
              <span className="text-xs font-medium text-[var(--text)]">Send directly from your email client:</span>
              <a
                href={mailtoUrl}
                onClick={() => toast.dismiss(t.id)}
                className="px-3 py-1.5 bg-[var(--accent)] text-white text-xs font-semibold rounded-lg text-center hover:opacity-90 transition-opacity shadow"
              >
                Open in Email App &rarr;
              </a>
            </div>
          ),
          { duration: 9000 }
        );
      }
    } catch (error) {
      toast.error("Network error. Opening your email client...");
      const mailtoUrl = `mailto:${personal.contact.email}?subject=${encodeURIComponent(data.subject || `Portfolio Message from ${data.name}`)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`;
      window.location.href = mailtoUrl;
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contactMethods = [
    { icon: FaEnvelope, label: "Email", value: personal.contact.email, href: `mailto:${personal.contact.email}`, canCopy: true },
    { icon: FaPhone, label: "Phone", value: personal.contact.phone, href: `tel:${personal.contact.phone}`, canCopy: false },
    { icon: FaMapMarkerAlt, label: "Location", value: personal.contact.location, href: null, canCopy: false },
  ];

  return (
    <section id="contact" className="section-padding relative z-10" ref={ref}>
      <div className="container-custom">
        <SectionHeader
          label="Contact"
          title={<>Let&apos;s <span className="gradient-highlight">Connect</span></>}
          subtitle="I'm currently open to internships, collaborations, and project ideas."
          inView={inView}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={containerVariants}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactMethods.map((method, index) => {
              const Content = (
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--bg-muted)] flex items-center justify-center text-xl text-[var(--accent)] flex-shrink-0 group-hover:scale-110 transition-transform">
                      <method.icon />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--text-3)] font-medium mb-1">{method.label}</p>
                      <p className="text-[var(--text)] font-semibold break-all text-sm sm:text-base">{method.value}</p>
                    </div>
                  </div>

                  {method.canCopy && (
                    <button
                      onClick={handleCopyEmail}
                      className="p-2.5 rounded-xl bg-[var(--bg-muted)] hover:bg-[var(--accent)] hover:text-white text-[var(--text-3)] transition-all duration-200 flex items-center gap-1.5 text-xs font-medium ml-2"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <FaCheck className="text-emerald-400 text-sm" /> : <FaCopy className="text-sm" />}
                      <span className="hidden sm:inline">{copiedEmail ? "Copied" : "Copy"}</span>
                    </button>
                  )}
                </div>
              );
              
              const className = "card p-5 flex items-center gap-4 hover:border-[var(--accent)] transition-all group";
              
              if (method.href) {
                return (
                  <motion.a key={index} variants={itemVariants} href={method.href} className={className}>
                    {Content}
                  </motion.a>
                );
              }
              
              return (
                <motion.div key={index} variants={itemVariants} className={className}>
                  {Content}
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={itemVariants}
            className="lg:col-span-3 card p-7 flex flex-col justify-center h-full relative overflow-hidden text-left card-body"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-2">Send me a message</h3>
              <p className="text-[var(--text-2)] mb-6 max-w-md leading-relaxed text-sm">
                Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-6">
                {/* Honeypot field - hidden from humans, visible to bots */}
                <input
                  type="text"
                  {...register("honeypot")}
                  className="absolute left-[-9999px]"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register("name")}
                      className={`w-full bg-[var(--bg-muted)] border ${errors.name ? 'border-red-500' : 'border-[var(--border)]'} rounded-xl px-4 py-3 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message as string}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      {...register("email")}
                      className={`w-full bg-[var(--bg-muted)] border ${errors.email ? 'border-red-500' : 'border-[var(--border)]'} rounded-xl px-4 py-3 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message as string}</p>}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject (optional)"
                    {...register("subject")}
                    className={`w-full bg-[var(--bg-muted)] border ${errors.subject ? 'border-red-500' : 'border-[var(--border)]'} rounded-xl px-4 py-3 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1 ml-1">{errors.subject.message as string}</p>}
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    {...register("message")}
                    className={`w-full bg-[var(--bg-muted)] border ${errors.message ? 'border-red-500' : 'border-[var(--border)]'} rounded-xl px-4 py-3 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message.message as string}</p>}
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSuccess ? { scale: 0.95 } : {}}
                  className={`w-full sm:w-auto self-start flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-medium transition-all shadow-lg ${
                    isSuccess ? 'bg-emerald-500 text-white shadow-emerald-500/25' : 
                    isSubmitting ? 'bg-[var(--bg-muted)] text-[var(--text-3)] cursor-not-allowed border border-[var(--border)]' : 
                    'bg-[var(--accent)] text-white hover:opacity-90 shadow-[rgba(var(--accent-rgb),0.25)]'
                  }`}
                >
                  {isSubmitting ? (
                    <FaSpinner className="text-sm animate-spin" />
                  ) : isSuccess ? (
                    <FaCheckCircle className="text-sm" />
                  ) : (
                    <FaPaperPlane className="text-sm" />
                  )}
                  <span>
                    {isSubmitting ? "Sending..." : isSuccess ? "Sent Successfully!" : "Send Message"}
                  </span>
                </motion.button>
              </form>

              <div className="pt-6 border-t border-[var(--border)] flex flex-wrap gap-4 items-center">
                <span className="text-xs text-[var(--text-3)] font-medium uppercase tracking-wider">Or connect on</span>
                <div className="flex gap-3">
                  <motion.a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-500 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <FaLinkedin className="text-lg" />
                  </motion.a>
                  <motion.a
                    href={personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl bg-[var(--text)]/5 text-[var(--text)] flex items-center justify-center hover:bg-[var(--text)] hover:text-[var(--bg)] transition-colors"
                  >
                    <FaGithub className="text-lg" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
