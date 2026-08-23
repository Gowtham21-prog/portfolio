type Star = { left: string; top: string; size: number; delay: number; opacity?: number };

const STARS: Star[] = Array.from({ length: 70 }).map(() => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 8,
  opacity: 0.7 + Math.random() * 0.5,
}));

const FIREFLIES = Array.from({ length: 10 }).map(() => ({
  left: `${10 + Math.random() * 80}%`,
  top: `${10 + Math.random() * 80}%`,
  size: 7 + Math.round(Math.random() * 9),
  delay: Math.random() * 6,
}));

export default function Backdrop() {
  const debug = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("bg") === "debug";

  return (
    <div className={`fixed inset-0 z-0 overflow-hidden pointer-events-none ${debug ? "night-debug" : ""}`}>
      {/* subtle aurora / gradient */}
      <div className="absolute inset-0 night-aurora" />

      {/* star field */}
      <div className="absolute inset-0">
        {STARS.map((s, idx) => (
          <span
            key={idx}
            className="star"
            style={{
              left: s.left,
              top: s.top,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* a few floating glowing fireflies */}
      <div className="absolute inset-0">
        {FIREFLIES.map((f, idx) => (
          <span
            key={idx}
            className="firefly"
            style={{
              left: f.left,
              top: f.top,
              width: `${f.size}px`,
              height: `${f.size}px`,
              animationDelay: `${f.delay}s`,
            }}
          />
        ))}
      </div>

      {/* subtle soft blobs remaining for depth */}
      <div className="absolute -top-40 -right-20 h-[620px] w-[620px] rounded-full bg-teal/12 blur-[120px] animate-drift" />
      <div
        className="absolute left-[-160px] top-1/3 h-[520px] w-[520px] rounded-full bg-violet/08 blur-[120px] animate-drift"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-amber/06 blur-[120px] animate-drift"
        style={{ animationDelay: "-12s" }}
      />
    </div>
  );
}
