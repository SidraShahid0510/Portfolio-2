import Biography from "../components/home/Biography";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import ProjectsSection from "../components/home/ProjectsSection";
import TechStack from "../components/home/TechStack";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import SEO from "../components/ui/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Sidra Shahid | Frontend Developer Portfolio"
        description="Portfolio of Sidra Shahid, a frontend development student showcasing selected projects, skills and contact information."
      />
      <Hero />

      <RevealOnScroll>
        <TechStack />
      </RevealOnScroll>

      <RevealOnScroll>
        <ProjectsSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <Biography />
      </RevealOnScroll>

      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
    </>
  );
}
