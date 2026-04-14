"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/data/projects";
import type { GitHubRepoData } from "@/lib/github";

interface ProjectCardProps {
  project: Project;
  ghData: GitHubRepoData | null;
  index: number;
}

export default function ProjectCard({
  project,
  ghData,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-surface border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] transition-all duration-300 hover:-translate-y-1"
    >
      {project.isCaseStudy && (
        <Link
          href={`/projects/${project.slug}`}
          className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
        >
          Case Study
        </Link>
      )}

      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        {ghData?.language && (
          <span className="text-xs font-mono text-muted px-2 py-0.5 rounded bg-white/5">
            {ghData.language}
          </span>
        )}
      </div>

      <p className="text-foreground text-sm font-medium mb-2">
        {project.result}
      </p>

      <p className="text-muted text-sm mb-4 leading-relaxed">
        <span className="text-accent/80">Problem:</span> {project.problem}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm">
        <a
          href={`https://github.com/WojciechGalant1/${project.repo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
        >
          <SiGithub className="w-4 h-4" />
          Source
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
        >
          Details
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        {ghData && (
          <div className="ml-auto flex items-center gap-3 text-xs text-muted">
            {ghData.stargazers_count > 0 && (
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5" />
                {ghData.stargazers_count}
              </span>
            )}
            {ghData.forks_count > 0 && (
              <span className="flex items-center gap-1">
                <GitFork className="w-3.5 h-3.5" />
                {ghData.forks_count}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
