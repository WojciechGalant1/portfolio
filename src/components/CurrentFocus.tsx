"use client";

import { motion } from "framer-motion";

const focusItems = [
  {
    text: "Building full-stack apps with React + NestJS",
    active: true,
  },
  {
    text: "Improving backend architecture and system design",
    active: true,
  },
  {
    text: "Learning Docker and deployment pipelines",
    active: false,
  },
  {
    text: "Exploring AI-powered application integration (LLMs)",
    active: false,
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

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function CurrentFocus() {
  return (
    <section id="focus" className="py-24 px-6">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What I&apos;m Working On Now
        </h2>
        <p className="text-muted text-center mb-12 max-w-lg mx-auto">
          Always learning, always building
        </p>

        <motion.div
          className="space-y-4"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {focusItems.map((item) => (
            <motion.div
              key={item.text}
              variants={itemVariants}
              className="flex items-center gap-4 bg-surface border border-border rounded-xl px-6 py-4 hover:border-accent/30 transition-all duration-300"
            >
              <span className="relative flex h-3 w-3 shrink-0">
                {item.active && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                )}
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 ${
                    item.active ? "bg-accent" : "bg-muted/40"
                  }`}
                />
              </span>
              <span className={item.active ? "text-foreground" : "text-muted"}>
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
