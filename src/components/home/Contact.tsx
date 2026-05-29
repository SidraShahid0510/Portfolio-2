import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/SidraShahid0510",
    icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:sidrashahid0510@gmail.com",
    icon: HiOutlineMail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sidra-shahid-0765302b2",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sidrashahid0510",
    icon: FaInstagram,
  },
];

export default function Contact() {
  return (
    <section id="connect" className="py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-primary" />
          <p className="text-xs font-bold uppercase tracking-[0.45em] text-secondary">
            Available For Work
          </p>
          <span className="h-px w-12 bg-primary" />
        </div>

        <h2 className="mb-8 md:mb-14 text-center text-4xl font-bold tracking-wide md:text-5xl">
          Get In <span className="text-secondary">Touch</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <Icon size={22} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
