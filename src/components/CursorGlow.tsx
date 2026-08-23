import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

type Trail = { id: number; x: number; y: number };

export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  // core dot — fast, tight follow
  const dotX = useSpring(x, { damping: 30, stiffness: 900, mass: 0.25 });
  const dotY = useSpring(y, { damping: 30, stiffness: 900, mass: 0.25 });

  // outer ring — looser follow, gives the "orbit" lag effect
  const ringX = useSpring(x, { damping: 18, stiffness: 180, mass: 0.6 });
  const ringY = useSpring(y, { damping: 18, stiffness: 180, mass: 0.6 });

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [trail, setTrail] = useState<Trail[]>([]);
  const trailIdRef = useRef(0);
  const lastEmitRef = useRef(0);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mql.matches);
    const handler = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mql.addEventListener?.("change", handler);
    return () => mql.removeEventListener?.("change", handler);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);

      // emit a comet-trail particle every ~35ms
      const now = performance.now();
      if (now - lastEmitRef.current > 35) {
        lastEmitRef.current = now;
        const id = trailIdRef.current++;
        setTrail((prev) => [...prev.slice(-9), { id, x: e.clientX, y: e.clientY }]);
      }
    }
    function onOver(e: PointerEvent) {
      const target = e.target as Element | null;
      const el = target?.closest?.(
        "a, button, input, textarea, label, [role=button], [data-cursor-focus]"
      ) as HTMLElement | null;
      if (el) {
        setActive(true);
        setLabel(el.getAttribute("data-cursor-label"));
      }
    }
    function onOut(e: PointerEvent) {
      const target = e.target as Element | null;
      const el = target?.closest?.(
        "a, button, input, textarea, label, [role=button], [data-cursor-focus]"
      );
      if (el) {
        setActive(false);
        setLabel(null);
      }
    }
    function onLeaveWindow() {
      setVisible(false);
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("pointerover", onOver);
    window.addEventListener("pointerout", onOut);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, [x, y, enabled, visible]);

  // drop stale trail particles
  useEffect(() => {
    if (trail.length === 0) return;
    const t = setTimeout(() => setTrail((prev) => prev.slice(1)), 260);
    return () => clearTimeout(t);
  }, [trail]);

  if (!enabled) return null;

  return (
    <>
      {/* comet trail particles */}
      {trail.map((p, i) => (
        <motion.span
          key={p.id}
          className="pointer-events-none fixed left-0 top-0 z-[9997] rounded-full"
          style={{
            x: p.x,
            y: p.y,
            translateX: "-50%",
            translateY: "-50%",
            background: active
              ? "radial-gradient(circle, rgba(79,227,193,0.9) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(139,124,255,0.8) 0%, transparent 70%)",
          }}
          initial={{ opacity: 0.55, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span
            className="block rounded-full"
            style={{
              width: 7 - i * 0.3,
              height: 7 - i * 0.3,
            }}
          />
        </motion.span>
      ))}

      {/* big soft aura behind everything */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9996] rounded-full blur-[36px]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: active ? 220 : 130,
          height: active ? 220 : 130,
          opacity: visible ? (active ? 0.65 : 0.4) : 0,
          background: active
            ? "radial-gradient(circle, rgba(79,227,193,0.65) 0%, rgba(139,124,255,0.35) 45%, transparent 75%)"
            : "radial-gradient(circle, rgba(79,227,193,0.45) 0%, rgba(139,124,255,0.15) 50%, transparent 75%)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
      />

      {/* orbiting ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border-2"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: active ? 64 : 38,
          height: active ? 64 : 38,
          opacity: visible ? 1 : 0,
          rotate: active ? 180 : 0,
          borderColor: active ? "#4FE3C1" : "rgba(255,255,255,0.65)",
          boxShadow: active
            ? "0 0 24px 4px rgba(79,227,193,0.55), inset 0 0 12px rgba(79,227,193,0.3)"
            : "0 0 14px 1px rgba(255,255,255,0.25)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        {/* orbiting dash marker */}
        <motion.span
          className="absolute h-1.5 w-1.5 rounded-full bg-amber"
          style={{ top: -3, left: "50%", marginLeft: -3 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* solid core dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: active ? 10 : 8,
          height: active ? 10 : 8,
          opacity: visible ? 1 : 0,
          backgroundColor: active ? "#4FE3C1" : "#ffffff",
          boxShadow: active
            ? "0 0 10px 3px rgba(79,227,193,0.9)"
            : "0 0 8px 2px rgba(255,255,255,0.6)",
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      />

      {/* contextual label */}
      <AnimatePresence>
        {active && label && (
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999]"
            style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10, scale: 0.85 }}
              animate={{ opacity: 1, y: 42, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.85 }}
              transition={{ type: "spring", stiffness: 400, damping: 26 }}
              className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-teal/40 bg-bg/95 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-teal shadow-glow backdrop-blur-sm"
            >
              {label}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
