import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

const LINES = [
  "const developer = {",
  '  name: "Gowtham M",',
  '  role: "Full Stack Developer",',
  '  stack: ["React", "Spring Boot", "MySQL"],',
  '  status: "open to internships",',
  "};",
  "",
  "> Ready.",
];

function highlight(line: string) {
  return line
    .replace(/"(.*?)"/g, "<span class='text-teal'>\"$1\"</span>")
    .replace(/\bconst\b/g, "<span class='text-[#7DA6FF]'>const</span>");
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function useTypedTerminal() {
  const [html, setHtml] = useState("");
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const full = LINES.join("\n");
    let i = 0;
    let buffer = "";

    const typic = () => {
      if (i < full.length) {
        buffer += full[i++];
        setHtml(escapeHtml(buffer));
        const delay = full[i - 1] === "\n" ? 40 : 18;
        setTimeout(typic, delay);
      } else {
        setHtml(LINES.map(highlight).join("\n"));
      }
    };

    typic();
  }, []);

  return html;
}

export default function Hero() {
  const terminalHtml = useTypedTerminal();
  const AVATAR = "/gowtham.png";

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="snap-section relative flex min-h-screen items-center overflow-hidden pb-20 pt-28 md:pt-16"
    >
      {/* extra energy behind the hero specifically */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-[160px]" />
        <motion.div
          style={{ y: blobY1 }}
          className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-violet/14 blur-[130px] animate-drift"
        />
        <motion.div
          style={{ y: blobY2, animationDelay: "-8s" }}
          className="absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-amber/10 blur-[130px] animate-drift"
        />
      </div>

      <motion.div
        style={{ opacity: heroOpacity }}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-10"
      >
        <div className="flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative flex flex-col items-center"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-teal/40 blur-3xl animate-float-slow" />
            <div className="relative h-40 w-40 rounded-full bg-gradient-to-br from-teal via-violet to-amber p-[3px] shadow-glow animate-float md:h-52 md:w-52">
              <div className="h-full w-full overflow-hidden rounded-full bg-surface">
                <img
                  src={AVATAR}
                  alt="Gowtham M"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* status ring badge */}
              <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-bg bg-teal shadow-glow md:h-7 md:w-7">
                <span className="h-2.5 w-2.5 rounded-full bg-bg" />
              </span>
            </div>

            <div className="mt-5 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
              >
                Gowtham <span className="text-gradient">M</span>
              </motion.h1>
              <div className="mt-1 text-sm text-white/50">Full Stack Developer</div>
            </div>
          </motion.div>

          <div className="mt-6 max-w-xl text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 font-mono text-sm text-teal"
            >
              // full stack developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-lg text-white/60"
            >
              Pre-final year Computer Science student with five independently
              built full-stack systems — from a Redis-backed real-time
              messaging platform to a Stripe-integrated learning marketplace.
              React on the front, Spring Boot on the back, and a habit of
              shipping things that actually work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <MagneticButton href="#projects" variant="solid" cursorLabel="view">
                View projects
              </MagneticButton>
              <MagneticButton href="#contact" variant="outline" cursorLabel="say hi">
                Get in touch
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="mt-6 flex items-center gap-3 font-mono text-xs text-white/40"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              Open to internships
              <span className="text-white/15">/</span>
              Tamil Nadu, India
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass w-full max-w-md rounded-2xl shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF6159]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C93F]" />
              <span className="ml-2 font-mono text-xs text-white/30">
                gowtham.dev — zsh
              </span>
            </div>
            <pre
              className="min-h-[120px] md:min-h-[200px] whitespace-pre-wrap break-words px-4 py-4 md:px-5 md:py-5 font-mono text-sm md:text-[13px] leading-6 md:leading-7 text-teal bg-[#001217] rounded-b-2xl overflow-auto"
              dangerouslySetInnerHTML={{
                __html:
                  terminalHtml +
                  '<span class="inline-block h-4 w-2 -mb-0.5 bg-teal animate-pulse"></span>',
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#stack"
        data-cursor-label="scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 transition-colors hover:text-teal md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-current p-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        </motion.span>
      </motion.a>
    </section>
  );
}
