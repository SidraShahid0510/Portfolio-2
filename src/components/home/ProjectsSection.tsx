import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-primary" />
          <p className="text-xs font-bold uppercase tracking-[0.45em] text-secondary">
            Portfolio
          </p>
          <span className="h-px w-12 bg-primary" />
        </div>

        <h2 className=" mb-8 md:mb-14 text-center text-4xl font-bold tracking-wide md:text-5xl">
          Featured <span className="text-secondary">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
