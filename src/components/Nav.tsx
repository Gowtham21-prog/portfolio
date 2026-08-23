import { useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Search,
  Menu,
  X,
  FileDown,
  Terminal,
  Layers,
  FolderGit2,
  Briefcase,
  Award,
} from "lucide-react";
import { NAV_ITEMS, CONTACT } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";

const ICONS: Record<string, typeof Terminal> = {
  Terminal,
  Layers,
  FolderGit2,
  Briefcase,
  Award,
  Mail,
};

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Nav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  function scrollTo(id: string) {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleResumeClick(e: MouseEvent<HTMLAnchorElement>) {
    try {
      const res = await fetch(CONTACT.resume, { method: "HEAD" });
      if (!res.ok) {
        e.preventDefault();
        window.alert(
          "Resume isn't uploaded yet — add resume.pdf to the /public folder to enable this."
        );
      }
    } catch {
      e.preventDefault();
      window.alert(
        "Resume isn't uploaded yet — add resume.pdf to the /public folder to enable this."
      );
    }
  }

  return (
    <>
      {/* Desktop sidebar */}
      <motion.header
        initial={{ x: -24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-y-0 left-0 z-40 hidden w-[220px] flex-col gap-8 border-r border-white/10 bg-bg/60 px-6 py-8 backdrop-blur-xl md:flex"
      >
        {/* animated edge accent that tracks the active section */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-px overflow-hidden">
          <motion.div
            className="absolute left-0 w-full bg-gradient-to-b from-teal via-violet to-transparent"
            animate={{
              top: `${(SECTION_IDS.indexOf(active) / SECTION_IDS.length) * 100}%`,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 28 }}
            style={{ height: `${100 / SECTION_IDS.length}%` }}
          />
        </div>

        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          whileHover={{ scale: 1.04 }}
          className="group relative flex items-center gap-2 font-display text-xl font-bold"
        >
          <span className="relative">
            GM
            <span className="text-teal">.</span>
            <motion.span
              className="absolute -inset-2 -z-10 rounded-full bg-teal/20 blur-lg opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </span>
        </motion.a>

        <nav className="relative flex flex-col gap-1">
          {NAV_ITEMS.map((item, i) => {
            const Icon = ICONS[item.icon];
            const isActive = active === item.id;
            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
                aria-current={isActive ? "true" : undefined}
                data-cursor-label={item.label.toLowerCase()}
                className={`relative flex items-center gap-2.5 rounded-lg px-3 py-2 font-mono text-sm transition-colors ${
                  isActive
                    ? "text-teal"
                    : "text-white/50 hover:bg-white/5 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-lg bg-teal/10"
                  />
                )}
                {Icon && (
                  <Icon
                    size={14}
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  />
                )}
                {item.label.toLowerCase()}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="ml-auto h-1.5 w-1.5 rounded-full bg-teal shadow-glow"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href={CONTACT.resume}
          onClick={handleResumeClick}
          download
          data-cursor-label="download"
          className="flex items-center gap-2 rounded-lg border border-teal/30 bg-teal/5 px-3 py-2 font-mono text-xs text-teal transition-colors hover:bg-teal/10"
        >
          <FileDown size={14} />
          Resume
        </motion.a>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.62 }}
          whileHover={{ scale: 1.02 }}
          onClick={onOpenPalette}
          data-cursor-label="search"
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-white/40 transition-colors hover:border-teal/40 hover:text-white/70"
        >
          <Search size={14} />
          <span>Jump to…</span>
          <kbd className="ml-auto rounded border border-white/10 bg-white/10 px-1.5 text-[11px]">
            /
          </kbd>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="flex gap-4 text-white/40"
        >
          {[
            { href: CONTACT.github, icon: Github, label: "GitHub", cursor: "github" },
            { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn", cursor: "linkedin" },
            { href: `mailto:${CONTACT.email}`, icon: Mail, label: "Email", cursor: "email me" },
          ].map(({ href, icon: Icon, label, cursor }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              data-cursor-label={cursor}
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="transition-colors hover:text-teal"
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.header>

      {/* Mobile topbar (always-visible nav) */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-[64px] items-center gap-3 border-b border-white/10 bg-bg/80 px-3 backdrop-blur-xl md:hidden">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="font-display text-lg font-bold"
        >
          GM<span className="text-teal">.</span>
        </a>

        <nav className="flex flex-1 items-center gap-2 overflow-x-auto px-2">
          {NAV_ITEMS.slice(0, 3).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.id);
              }}
              className={`whitespace-nowrap rounded-md px-3 py-1 font-mono text-sm transition-colors ${
                active === item.id ? "bg-teal/10 text-teal" : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPalette}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5"
            aria-label="Search"
          >
            <Search size={16} />
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="glass fixed inset-x-4 top-[74px] z-40 flex flex-col gap-1 rounded-xl p-3 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.id);
              }}
              className={`rounded-lg px-3 py-2 font-mono text-sm transition-colors ${
                active === item.id ? "bg-teal/10 text-teal" : "text-white/70 hover:bg-white/5 hover:text-teal"
              }`}
            >
              ~/{item.label.toLowerCase()}
            </a>
          ))}
          <a
            href={CONTACT.resume}
            onClick={handleResumeClick}
            download
            className="mt-1 flex items-center gap-2 rounded-lg border border-teal/30 bg-teal/5 px-3 py-2 font-mono text-sm text-teal"
          >
            <FileDown size={14} />
            Download résumé
          </a>
        </div>
      )}
    </>
  );
}
