import { useEffect, useState } from "react";
import Backdrop from "./components/Backdrop";
import CursorGlow from "./components/CursorGlow";
import Nav from "./components/Nav";
import CommandPalette from "./components/CommandPalette";
import ScrollProgress from "./components/ScrollProgress";
import BootScreen from "./components/BootScreen";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      const typing = tag === "input" || tag === "textarea";
      if (e.key === "/" && !typing) {
        e.preventDefault();
        setPaletteOpen(true);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen(true);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="relative">
      <a
        href="#home"
        className="fixed left-3 top-3 z-[200] -translate-y-24 rounded-lg bg-teal px-4 py-2 font-mono text-sm text-bg transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <Backdrop />
      <CursorGlow />
      <ScrollProgress />
      <BootScreen />
      <Nav onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <main className="relative z-10 md:ml-[220px] pt-[64px] md:pt-0">
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
