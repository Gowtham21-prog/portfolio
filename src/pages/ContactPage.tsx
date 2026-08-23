import Contact from "../components/Contact";
import SectionHead from "../components/SectionHead";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <SectionHead
        eyebrow="// let's talk"
        title="Get In Touch"
        sub="Have an opportunity or an idea worth building? I'd love to hear it."
      />
      <Contact />
    </section>
  );
}
