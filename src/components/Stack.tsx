import { motion } from "framer-motion";
import { STACK } from "../data";
import SectionHead from "./SectionHead";
import SectionGlow from "./SectionGlow";
import TiltCard from "./TiltCard";

export default function Stack() {
  return (
    <section id="stack" className="snap-section relative px-6 py-32 md:px-10">
      <SectionGlow accent="violet" side="left" />
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="// stack"
          title="What I build with"
          sub="Tools I reach for daily, grouped by where they sit in the stack."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STACK.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard
                data-cursor-label={cat.label.toLowerCase()}
                className="glass group h-full rounded-2xl p-6 transition-shadow duration-300 hover:border-teal/30 hover:shadow-glow"
              >
                <p className="mb-4 font-mono text-xs uppercase tracking-wider text-white/35 transition-colors group-hover:text-teal/70">
                  {cat.label}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-white/75"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal transition-transform duration-300 group-hover:scale-150" />
                      {item}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
