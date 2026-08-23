import Experience from "../components/Experience";
import SectionHead from "../components/SectionHead";

export default function ExperiencePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <SectionHead
        eyebrow="// where I've been"
        title="Experience"
        sub="Real-world work that's shaped how I build and collaborate."
      />
      <Experience />
    </section>
  );
}
