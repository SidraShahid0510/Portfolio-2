import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Projects", "Skills", "Connect"];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          to="/"
          className="logo-link font-['Clash_Display'] text-2xl font-semibold uppercase tracking-[0.05em]"
        >
          <span className="text-primary">Sidra </span>
          <span className="logo-last-name text-secondary">Shahid</span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <HashLink
              smooth
              key={link}
              to={`/#${link.toLowerCase()}`}
              className="relative text-sm font-medium uppercase tracking-[0.18em] text-[#1f2937] transition-colors duration-300 hover:text-[#1855a5] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#1855a5] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </HashLink>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-primary lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <nav
        className={`absolute left-0 top-full w-full overflow-hidden bg-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6 py-8 text-center">
          {navLinks.map((link) => (
            <HashLink
              smooth
              key={link}
              to={`/#${link.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium uppercase tracking-[0.18em] text-[#1f2937] transition-colors duration-300 hover:text-[#1855a5]"
            >
              {link}
            </HashLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
