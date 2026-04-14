import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { fetchRepoData } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Wojciech Galant",
  description:
    "Full-stack projects built with React, Laravel, NestJS, Spring Boot, and more. Real-world applications solving real problems.",
  openGraph: {
    title: "Projects | Wojciech Galant",
    description:
      "Full-stack projects built with React, Laravel, NestJS, Spring Boot, and more.",
  },
};

export default async function ProjectsPage() {
  const repoDataMap = new Map<
    string,
    Awaited<ReturnType<typeof fetchRepoData>>
  >();

  await Promise.all(
    projects.map(async (p) => {
      const data = await fetchRepoData(p.repo);
      repoDataMap.set(p.repo, data);
    })
  );

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-muted mb-16 max-w-xl">
            Real-world applications solving real problems.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                ghData={repoDataMap.get(project.repo) ?? null}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
