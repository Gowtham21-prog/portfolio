import { motion } from "framer-motion";

export default function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="mb-14 max-w-xl"
    >
      <p className="mb-3 font-mono text-sm text-teal">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="mt-4 block h-[2px] w-16 origin-left rounded-full bg-gradient-to-r from-teal via-violet to-amber"
      />
      <p className="mt-4 text-white/55">{sub}</p>
    </motion.div>
  );
}
