import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaFigma,
  FaSass,
} from "react-icons/fa";

import { SiTypescript, SiTailwindcss, SiJavascript } from "react-icons/si";
import {
  TbBrandAdobeIllustrator,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIndesign,
} from "react-icons/tb";
const techIcons = [
  FaHtml5,
  FaCss3Alt,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  FaReact,
  FaGithub,
  FaFigma,
  FaSass,
  TbBrandAdobeIllustrator,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIndesign,
];
export default function TechStack() {
  const repeatedIcons = [...techIcons, ...techIcons];

  return (
    <section id="skills" className="py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-10 lg:px-6 text-center">
        <div className=" mb-4 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-primary" />
          <p className="text-xs font-bold uppercase tracking-[0.45em] text-secondary">
            Inventory
          </p>
          <span className="h-px w-12 bg-primary" />
        </div>

        <h2 className=" mb-8 md:mb-14 text-4xl font-bold tracking-wide md:text-5xl">
          Tech <span className="text-secondary">Stack</span>
        </h2>

        <div className="overflow-hidden">
          <div className="tech-slider flex w-max items-center gap-8 md:gap-12">
            {repeatedIcons.map((Icon, index) => (
              <div
                key={index}
                className="flex h-16 w-16 items-center justify-center"
              >
                <Icon className="text-4xl text-secondary opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
