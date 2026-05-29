import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import background from "../../assets/background.png";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sidra-shahid-0765302b2",
    icon: FaLinkedinIn,
  },
  {
    name: "Email",
    href: "mailto:sidrashahid0510@gmail.com",
    icon: HiOutlineMail,
  },
  {
    name: "GitHub",
    href: "https://github.com/SidraShahid0510",
    icon: FaGithub,
  },
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.55em] leading-5 text-primary">
          Frontend Development Student
        </p>

        <h1 className="group cursor-default text-6xl font-bold uppercase leading-none tracking-[0.05em] md:text-7xl lg:text-9xl">
          <span className="text-primary">Sidra </span>
          <span className="text-secondary transition-colors duration-300 group-hover:!text-[#1f2937]">
            Shahid
          </span>
        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-base leading-7 text-primary md:text-lg">
          Building modern, responsive and user-friendly web experiences with
          clean design, accessible code and thoughtful details.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="primary-btn w-[220px]">
            View Projects
          </a>

          <a href="#connect" className="primary-btn w-[220px]">
            Contact Me
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.name}
                className="social-icon"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
