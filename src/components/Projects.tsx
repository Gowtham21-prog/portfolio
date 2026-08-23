import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { PROJECTS, type ProjectItem } from "../data";
import SectionHead from "./SectionHead";
import SectionGlow from "./SectionGlow";

type Project = Extract<ProjectItem, { kind: "project" }>;

const ACCENT: Record<Project["accent"], { text: string; bg: string; border: string; glow: string; grad: string; dot: string }> = {
  teal: {
    text: "text-teal",
    bg: "bg-teal/10",
    border: "border-teal/30",
    glow: "shadow-[0_0_60px_-15px_rgba(79,227,193,0.5)]",
    grad: "from-teal/25 via-teal/5 to-transparent",
    dot: "bg-teal",
  },
  violet: {
    text: "text-violet",
    bg: "bg-violet/10",
    border: "border-violet/30",
    glow: "shadow-[0_0_60px_-15px_rgba(139,124,255,0.5)]",
    grad: "from-violet/25 via-violet/5 to-transparent",
    dot: "bg-violet",
  },
  amber: {
    text: "text-amber",
    bg: "bg-amber/10",
    border: "border-amber/30",
    glow: "shadow-[0_0_60px_-15px_rgba(243,167,63,0.5)]",
    grad: "from-amber/25 via-amber/5 to-transparent",
    dot: "bg-amber",
  },
};

function ProjectRail({
  projects,
  active,
  onSelect,
}: {
  projects: Project[];
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
      {projects.map((p, i) => {
        const isActive = i === active;
        const a = ACCENT[p.accent];
        return (
          <button
            key={p.name}
            onClick={() => onSelect(i)}
            data-cursor-label="view"
            className={`group relative flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 md:w-full ${
              isActive
                ? `${a.border} ${a.bg}`
                : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="project-rail-indicator"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className={`absolute inset-y-0 left-0 hidden w-[3px] rounded-full md:block ${a.dot}`}
              />
            )}
            <span className={`h-2 w-2 shrink-0 rounded-full transition-colors ${isActive ? a.dot : "bg-white/20"}`} />
            <div className="min-w-0">
              <div
                className={`whitespace-nowrap font-mono text-sm font-medium transition-colors md:whitespace-normal ${
                  isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                }`}
              >
                {p.name}
              </div>
              <div className="hidden text-xs text-white/35 md:block">{p.tagline}</div>
            </div>
            {p.featured && (
              <Sparkles size={12} className={`ml-auto hidden shrink-0 md:block ${isActive ? a.text : "text-white/20"}`} />
            )}
          </button>
        );
      })}
    </div>
  );
}

function ProjectDetail({ p }: { p: Project }) {
  const a = ACCENT[p.accent];
  return (
    <motion.div
      key={p.name}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`glass relative flex h-full flex-col overflow-hidden rounded-2xl ${a.glow}`}
    >
      {/* header strip */}
      <div className={`relative overflow-hidden border-b border-white/10 bg-gradient-to-br ${a.grad} px-6 py-6 md:px-8 md:py-7`}>
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-white/40">
                <span className={`h-1.5 w-1.5 rounded-full ${p.live ? `${a.dot} animate-pulse` : "bg-white/25"}`} />
                {p.live ? "Deployed" : "In progress"}
              </span>
              {p.featured && (
                <span className={`rounded-full border ${a.border} ${a.bg} px-2.5 py-1 font-mono text-[10px] ${a.text}`}>
                  Featured
                </span>
              )}
            </div>
            <h3 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
              {p.name}
            </h3>
            <p className={`mt-1 font-mono text-sm ${a.text}`}>{p.tagline}</p>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-[15px] leading-relaxed text-white/60">{p.desc}</p>

        <div className="mt-6 grid gap-2.5">
          {p.points.map((pt, idx) => (
            <motion.div
              key={pt}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.08 + idx * 0.06 }}
              className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5"
            >
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
              <span className="text-sm text-white/55">{pt}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tech.map((t, idx) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.15 + idx * 0.04 }}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-white/55 transition-colors hover:border-white/25 hover:text-white/80"
            >
              {t}
            </motion.span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          {p.live ? (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="open live"
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 font-mono text-sm font-medium text-bg transition-transform hover:scale-[1.03] active:scale-95 ${a.dot}`}
            >
              <ArrowUpRight size={16} /> View live demo
            </a>
          ) : (
            <span className="flex items-center gap-2 rounded-xl border border-dashed border-white/15 px-5 py-2.5 font-mono text-sm text-white/35">
              <Clock size={14} /> Live demo coming soon
            </span>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="view code"
              className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 font-mono text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white"
            >
              <Github size={16} /> Source code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projects = PROJECTS.filter((p): p is Project => p.kind === "project");
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section id="projects" className="snap-section relative px-6 py-32 md:px-10">
      <SectionGlow accent="teal" side="right" />
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="// projects"
          title="Selected work"
          sub="Five things I've designed, built, and shipped — pick one to explore."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-[280px_1fr]">
          <ProjectRail projects={projects} active={active} onSelect={setActive} />
          <div className="min-h-[520px]">
            <AnimatePresence mode="wait">
              <ProjectDetail p={current} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
