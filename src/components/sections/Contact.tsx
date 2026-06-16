"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Send, CheckCircle, Mail } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { SOCIAL_LINKS, CONTACT_SUBJECTS } from "@/lib/data";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  github: <SiGithub size={20} />,
  linkedin: <FaLinkedinIn size={20} />,
  mail: <Mail size={20} />,
  instagram: <SiInstagram size={20} />,
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-accent text-sm tracking-wider mb-3 block">
            06 — Contact
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Let&apos;s Build{" "}
            <span className="text-gradient">Something Together</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Left — Intent Text */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8">
              Interested in software development, information retrieval, AI
              applications, or collaborative research? I&apos;m open to
              full-time roles, freelance projects, and research collaborations.
            </p>

            <div className="space-y-6">
              <h3 className="font-syne font-semibold text-lg text-text-primary">
                Find me online
              </h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    {SOCIAL_ICONS[social.icon]}
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative code block */}
            <div className="mt-10 glass-card p-5 font-mono text-sm">
              <div className="text-text-muted">
                <span className="text-accent">const</span>{" "}
                <span className="text-purple-400">developer</span> ={" "}
                {"{"}
              </div>
              <div className="pl-4 text-text-muted">
                <span className="text-emerald-400">status</span>:{" "}
                <span className="text-amber-400">&quot;Available&quot;</span>,
              </div>
              <div className="pl-4 text-text-muted">
                <span className="text-emerald-400">interests</span>: [
                <span className="text-amber-400">&quot;IR&quot;</span>,{" "}
                <span className="text-amber-400">&quot;AI&quot;</span>,{" "}
                <span className="text-amber-400">&quot;Web&quot;</span>],
              </div>
              <div className="pl-4 text-text-muted">
                <span className="text-emerald-400">coffee</span>:{" "}
                <span className="text-accent">true</span>,
              </div>
              <div className="text-text-muted">{"}"}</div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-text-muted mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-secondary border border-border rounded-xl text-text-primary placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-text-muted mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-secondary border border-border rounded-xl text-text-primary placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-text-muted mb-2"
                >
                  Subject
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-secondary border border-border rounded-xl text-text-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  {CONTACT_SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-bg-secondary border border-border rounded-xl text-text-primary placeholder-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Success Toast */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 flex items-center gap-2 p-4 bg-success/10 border border-success/20 rounded-xl text-success text-sm"
              >
                <CheckCircle size={16} />
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
