import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
        Error 404
      </p>

      <h1 className="mb-6 text-5xl font-bold md:text-7xl">Page Not Found</h1>

      <p className="mb-10 max-w-md text-primary">
        Sorry, the page you are looking for does not exist or may have been
        moved.
      </p>

      <Link to="/" className="primary-btn">
        Back Home
      </Link>
    </section>
  );
}
