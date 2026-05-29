import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  slug: string;

  description: string;
  image: string;
};

export default function ProjectCard({
  title,
  slug,

  description,
  image,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden bg-white shadow-[0_4px_18px_rgba(0,0,0,0.06)]">
      <img
        src={image}
        alt={title}
        className="aspect-[16/10] w-full object-cover"
        loading="lazy"
      />

      <div className="relative min-h-44 overflow-hidden p-7">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-secondary uppercase tracking-[0.08em]">
            {title}
          </h3>

          <p className="text-base leading-6 text-primary">{description}</p>
        </div>

        <div className="absolute inset-0 flex translate-y-full items-center justify-center bg-[#1f2937]/85 transition-transform duration-500 ease-out group-hover:translate-y-0">
          <Link
            to={`/projects/${slug}`}
            className="overlay-btn"
            aria-label={`Read more about ${title}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}
