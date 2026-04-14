"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import type { ReactNode } from "react";

interface ContactLink {
  label: string;
  href: string;
  icon: ReactNode;
}

const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/WojciechGalant1",
    icon: <SiGithub className="w-5 h-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/wgalant",
    icon: <FaLinkedinIn className="w-5 h-5" />,
  },
  {
    label: "Email",
    href: "mailto:r61372722@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-muted mb-12 max-w-md mx-auto">
          I&apos;m open to full-stack developer roles, freelance projects, and
          interesting collaboration opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-surface border border-border text-foreground hover:border-accent/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <span className="text-accent">{link.icon}</span>
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
