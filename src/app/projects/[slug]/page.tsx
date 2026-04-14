import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Star, GitFork } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects, getProjectBySlug } from "@/data/projects";
import { fetchRepoData } from "@/lib/github";
import CaseStudy from "@/components/CaseStudy";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Wojciech Galant`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Wojciech Galant`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Wojciech Galant`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const ghData = await fetchRepoData(project.repo);

  return (
    <main className="pt-24 pb-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          All Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
              {project.title}
            </h1>
            {ghData?.language && (
              <span className="text-sm font-mono text-muted px-3 py-1 rounded-lg bg-white/5">
                {ghData.language}
              </span>
            )}
          </div>

          <p className="text-lg text-muted leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`https://github.com/WojciechGalant1/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border border-border text-foreground text-sm font-medium hover:border-accent/40 transition-colors"
            >
              <SiGithub className="w-4 h-4" />
              View Source
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-background text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {ghData && (ghData.stargazers_count > 0 || ghData.forks_count > 0) && (
              <div className="flex items-center gap-3 text-sm text-muted">
                {ghData.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {ghData.stargazers_count}
                  </span>
                )}
                {ghData.forks_count > 0 && (
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {ghData.forks_count}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Problem / Solution / Result */}
        <div className="grid gap-6 mb-12">
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider mb-3">
              The Problem
            </h2>
            <p className="text-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider mb-3">
              The Solution
            </h2>
            <p className="text-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
          <div className="bg-gradient-to-r from-accent/5 to-accent-secondary/5 border border-accent/10 rounded-2xl p-6">
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider mb-3">
              The Result
            </h2>
            <p className="text-foreground leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-sm rounded-lg bg-surface border border-border text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study section for Workwear */}
        {project.isCaseStudy && <CaseStudy />}
      </div>
    </main>
  );
}
