export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-6 text-center">
        <h3 className="font-['Clash_Display'] text-2xl font-semibold uppercase tracking-[0.05em]">
          <span className="text-primary">Sidra </span>

          <span className="text-secondary">Shahid</span>
        </h3>

        <p className="text-base font-semibold tracking-[0.08em] text-primary/60">
          Frontend Development Student • Norway
        </p>

        <p className="text-xs  tracking-[0.2em] text-primary/50">
          © 2026 Sidra Shahid Portfolio — Built With React & Tailwind
        </p>
      </div>
    </footer>
  );
}
