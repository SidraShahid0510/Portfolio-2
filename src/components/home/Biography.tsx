export default function Biography() {
  return (
    <section id="about" className="py-14 md:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Heading */}
        <div className="mb-4 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-primary" />

          <p className="text-xs font-bold uppercase tracking-[0.45em] text-secondary">
            Biography
          </p>

          <span className="h-px w-12 bg-primary" />
        </div>

        <h2 className=" mb-8 md:mb-12 text-4xl font-bold tracking-wide md:text-5xl">
          What <span className="text-secondary">I Do</span>
        </h2>

        {/* Text */}
        <p className="mx-auto max-w-4xl text-base leading-7 text-primary">
          I’m a front-end developer who enjoys creating modern, responsive, and
          user-focused web experiences. I love turning ideas into clean and
          interactive interfaces that not only look good but also feel intuitive
          to use. My focus is on building accessible, visually polished, and
          performance-driven websites using modern front-end technologies. I’m
          constantly learning, exploring new tools, and improving my craft
          through hands-on projects and creative problem-solving.
        </p>

        {/* Info */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-16">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-secondary">
              Location
            </p>

            <p className="text-lg font-medium text-primary">Norway</p>
          </div>

          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-secondary">
              Status
            </p>

            <p className="text-lg font-medium text-primary">Open To Work</p>
          </div>
        </div>
      </div>
    </section>
  );
}
