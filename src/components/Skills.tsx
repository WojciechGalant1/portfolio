"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  SiPhp,
  SiLaravel,
  SiSpringboot,
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Globe } from "lucide-react";

interface Skill {
  name: string;
  icon: ReactNode;
}

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Backend",
    skills: [
      { name: "PHP", icon: <SiPhp /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "REST APIs", icon: <Globe className="w-3.5 h-3.5" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Vue", icon: <SiVuedotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Git", icon: <SiGit /> },
    ],
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

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Tech Stack
        </h2>
        <p className="text-muted text-center mb-16 max-w-xl mx-auto">
          Technologies I use to turn ideas into production-ready applications
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={badgeVariants}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-surface border border-border text-foreground hover:border-accent/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-default"
                  >
                    <span className="text-accent text-base">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
