import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BOOT_LINES = [
  "booting portfolio.sys ...",
  "loading modules: react, framer-motion, tailwind ...",
  "mounting sections: hero, stack, projects, experience ...",
  "status: ready",
];

export default function BootScreen() {
  const [visible, setVisible] = useState(false);
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem("boot-seen") === "1";
    } catch {
      // ignore
    }
    if (alreadySeen) return;

    setVisible(true);
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setLineIdx(i + 1), 260 + i * 260));
    });

    timers.push(
      setTimeout(() => {
        setVisible(false);
        try {
          sessionStorage.setItem("boot-seen", "1");
        } catch {
          // ignore
        }
      }, 260 + BOOT_LINES.length * 260 + 450)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-bg"
        >
          <div className="w-full max-w-md px-6 font-mono text-sm text-teal">
            {BOOT_LINES.slice(0, lineIdx).map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={i === BOOT_LINES.length - 1 ? "text-white" : "text-white/70"}
              >
                <span className="text-white/25">$</span> {line}
              </motion.p>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              className="mt-1 inline-block h-4 w-2 bg-teal align-middle"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
