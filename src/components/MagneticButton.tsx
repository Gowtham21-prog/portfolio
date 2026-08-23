import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Variant = "solid" | "outline";

export default function MagneticButton({
  href,
  children,
  variant = "solid",
  className = "",
  cursorLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  cursorLabel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.28);
    y.set(relY * 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    variant === "solid"
      ? "bg-teal text-bg shadow-glow"
      : "border border-white/15 text-white hover:text-teal";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      data-cursor-label={cursorLabel}
      className={`group relative isolate inline-flex items-center overflow-hidden rounded-xl px-6 py-3.5 font-mono text-sm font-semibold transition-colors duration-300 ${base} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {/* shine sweep */}
      <span className="pointer-events-none absolute inset-0 -z-0 -translate-x-full skew-x-[-20deg] bg-white/25 transition-transform duration-700 ease-out group-hover:translate-x-[220%]" />
    </motion.a>
  );
}
