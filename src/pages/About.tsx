import Certifications from "../components/Certifications";
import SectionHead from "../components/SectionHead";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <SectionHead
        eyebrow="// who I am"
        title="About Me"
        sub="A closer look at what drives me and how I like to build."
      />
      <p className="max-w-2xl text-white/70 leading-relaxed">
        I'm a third-year Computer Science student at IFET College of
        Engineering with a simple philosophy: understand the problem deeply,
        then build something that solves it well. I work across the full
        stack — React on the front end, Spring Boot powering the logic,
        MySQL keeping the data honest — and I care as much about clean,
        maintainable code as I do about a polished user experience.
      </p>
      <Certifications />
    </section>
  );
}
