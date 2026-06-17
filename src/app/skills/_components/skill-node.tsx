interface SkillNodeProps {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: "emerald" | "blue" | "purple" | "amber" | "pink" | "orange";
}

export default function SkillNode({
  name,
  level,
  icon,
  color,
}: SkillNodeProps) {
  const colorMap = {
    emerald: {
      bg: "bg-emerald-950/40",
      border: "border-emerald-500/40",
      text: "text-emerald-400",
      glow: "shadow-[0_0_12px_rgba(16,185,129,0.2)]",
    },
    blue: {
      bg: "bg-blue-950/40",
      border: "border-blue-500/40",
      text: "text-blue-400",
      glow: "shadow-[0_0_12px_rgba(59,130,246,0.2)]",
    },
    purple: {
      bg: "bg-purple-950/40",
      border: "border-purple-500/40",
      text: "text-purple-400",
      glow: "shadow-[0_0_12px_rgba(147,51,234,0.2)]",
    },
    amber: {
      bg: "bg-amber-950/40",
      border: "border-amber-500/40",
      text: "text-amber-400",
      glow: "shadow-[0_0_12px_rgba(245,158,11,0.2)]",
    },
    pink: {
      bg: "bg-rose-950/40",
      border: "border-rose-500/40",
      text: "text-rose-400",
      glow: "shadow-[0_0_12px_rgba(244,63,94,0.2)]",
    },
    orange: {
      bg: "bg-orange-950/40",
      border: "border-orange-500/40",
      text: "text-orange-400",
      glow: "shadow-[0_0_12px_rgba(249,115,22,0.2)]",
    },
  };

  const currentConfig = colorMap[color];

  return (
    <div className="flex flex-col items-center gap-1.5 select-none w-24">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${currentConfig.bg} ${currentConfig.border} ${currentConfig.text} ${currentConfig.glow} transition-transform duration-300 hover:scale-110`}
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <div className="transform scale-95">{icon}</div>
      </div>

      <div className="flex flex-col items-center text-center">
        <span className="text-[11px] font-bold text-zinc-400 tracking-wide">
          {name}
        </span>
        <span className="text-[10px] font-medium text-zinc-500 mt-0.5 font-mono">
          Nível {level}
        </span>
      </div>
    </div>
  );
}
