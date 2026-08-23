import { motion } from "framer-motion";
import { EXPERIENCE } from "../data";
import SectionHead from "./SectionHead";
import SectionGlow from "./SectionGlow";

export default function Experience() {
  return (
    <section id="experience" className="snap-section relative px-6 py-32 md:px-10">
      <SectionGlow accent="amber" side="left" />
      <div className="mx-auto max-w-4xl">
        <SectionHead
          eyebrow="// experience"
          title="Where I've worked & competed"
          sub="Chronological — most recent first."
        />
        <div className="relative pl-10">
          {/* animated timeline spine */}
          <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-teal via-violet to-transparent"
            style={{ height: "100%" }}
          />

          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative pb-14 last:pb-0"
            >
              <span className="absolute -left-[45px] top-1.5 flex h-3.5 w-3.5 items-center justify-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-teal/50 opacity-0 group-hover:opacity-100" />
                <span className="relative h-3.5 w-3.5 rounded-full border-2 border-teal bg-bg shadow-glow transition-transform duration-300 group-hover:scale-125" />
              </span>
              <p className="mb-1.5 font-mono text-xs text-white/35">{e.date}</p>
              <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-teal">
                {e.title}
              </h3>
              <p className="mt-1 text-teal">{e.org}</p>
              <p className="mt-2.5 max-w-xl text-sm text-white/55">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
