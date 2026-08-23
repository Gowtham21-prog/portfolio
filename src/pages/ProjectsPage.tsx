import Projects from "../components/Projects";
import SectionHead from "../components/SectionHead";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <SectionHead
        eyebrow="// selected work"
        title="Projects"
        sub="A few things I've built end to end, from database to interface."
      />
      <Projects />
    </section>
  );
}
