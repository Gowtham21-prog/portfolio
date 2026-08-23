import Stack from "../components/Stack";
import SectionHead from "../components/SectionHead";

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <SectionHead
        eyebrow="// what I work with"
        title="Skills & Tools"
        sub="The technologies I reach for when turning ideas into working software."
      />
      <Stack />
    </section>
  );
}
