import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { fetchRepoData } from "@/lib/github";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
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
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        <Link href="/projects" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
          Projects
          
          </Link>
        </h2>
        <p className="text-muted text-center mb-16 max-w-xl mx-auto">
          
          Real-world applications solving real problems
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

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
