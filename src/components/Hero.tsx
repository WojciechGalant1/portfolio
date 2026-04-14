"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const taglines = [
  "I build real-world systems — inventory, management, SaaS apps",
  "I turn business problems into full-stack web solutions",
  "React + Laravel + NestJS — from database to deploy",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const full = taglines[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < full.length) {
      timeout = setTimeout(
        () => setDisplayed(full.slice(0, displayed.length + 1)),
        35
      );
    } else if (!isDeleting && displayed.length === full.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(full.slice(0, displayed.length - 1)),
        20
      );
    } else {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/20 to-accent-secondary/20 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 max-w-3xl text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-accent font-mono text-sm tracking-wider uppercase mb-4"
        >
          Full-Stack Developer
        </motion.p>
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Wojciech Galant
        </motion.h1>

        <motion.div
          variants={item}
          className="h-16 sm:h-12 flex items-center justify-center mb-6"
        >
          <p className="text-lg sm:text-xl text-muted font-mono">
            {displayed}
            <span
              className="inline-block w-[2px] h-5 bg-accent ml-0.5 align-middle"
              style={{ animation: "typing-cursor 0.8s step-end infinite" }}
            />
          </p>
        </motion.div>

        <motion.p
          variants={item}
          className="text-muted text-sm sm:text-base mb-10"
        >
          MSc in Computer Science &middot; Software Development &amp; Web
          Services
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-background font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            See My Work
            <ChevronDown className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/WojciechGalant1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-white/5 transition-colors"
          >
            <SiGithub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/wgalant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-white/5 transition-colors"
          >
            <FaLinkedinIn className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
