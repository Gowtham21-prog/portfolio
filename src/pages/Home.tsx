import Hero from "../components/Hero";
import Stack from "../components/Stack";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stack />
      <Projects />
      <Experience />
      <Certifications />
    </main>
  );
}
