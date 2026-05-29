import { Link, useParams } from "react-router-dom";
import { Copy, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import SEO from "../components/ui/SEO";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <section className="px-6 py-32 text-center">
        <h1 className="mb-6 text-4xl font-bold">Project not found</h1>

        <Link to="/" className="primary-btn">
          Back Home
        </Link>
      </section>
    );
  }

  const copyProjectLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
  };

  return (
    <>
      <SEO
        title={`${project.title} | Sidra Shahid Portfolio`}
        description={`Read more about ${project.title}, including project overview, live site link, GitHub README and improvements.`}
      />
      <section className="px-6 py-32">
        <article className="mx-auto max-w-7xl md:px-6">
          <div className="mb-6 flex justify-center ">
            <h1 className="text-2xl font-bold  tracking-[0.08em] md:text-4xl text-secondary ">
              {project.title}
            </h1>
          </div>

          <figure className="mb-10">
            <div className="overflow-hidden ">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[16/9] w-full object-cover shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              />
            </div>

            <figcaption className="mt-4 text-sm text-primary/60 flex justify-center tracking-[0.05em]">
              {project.imageCaption}
            </figcaption>
          </figure>

          <div className="mx-auto mb-16 mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
            <button
              onClick={copyProjectLink}
              className="primary-btn flex w-full max-w-none items-center justify-center gap-2"
            >
              Copy Link
              <Copy size={16} />
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn flex w-full max-w-none items-center justify-center gap-2"
            >
              Live Site
              <ExternalLink size={16} />
            </a>

            <a
              href={project.readmeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn flex w-full max-w-none items-center justify-center gap-2"
            >
              GitHub README
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-semibold  tracking-[0.08em] flex justify-center text-secondary">
              Project Overview
            </h2>

            <p className=" whitespace-pre-line text-base leading-7 text-primary  ">
              {project.content}
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
