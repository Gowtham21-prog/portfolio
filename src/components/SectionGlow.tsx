type Accent = "teal" | "violet" | "amber" | "mixed";

const ACCENT_COLORS: Record<Accent, string> = {
  teal: "rgba(79,227,193,0.16)",
  violet: "rgba(139,124,255,0.16)",
  amber: "rgba(243,167,63,0.13)",
  mixed: "rgba(79,227,193,0.14)",
};

export default function SectionGlow({
  accent = "teal",
  side = "right",
}: {
  accent?: Accent;
  side?: "left" | "right";
}) {
  const color = ACCENT_COLORS[accent];
  const posClass = side === "right" ? "-right-40 md:right-0" : "-left-40 md:left-0";

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className={`absolute top-1/4 ${posClass} h-[480px] w-[480px] rounded-full blur-[130px]`}
        style={{ background: color }}
      />
      {accent === "mixed" && (
        <div
          className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full blur-[120px]"
          style={{ background: "rgba(139,124,255,0.1)" }}
        />
      )}
    </div>
  );
}
