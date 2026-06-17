import { Code2, Target, Eye } from "lucide-react";

interface TopSkillsListProps {
  skills?: {
    programming_level?: number;
    focus_level?: number;
    discipline_level?: number;
  };
}

export default function TopSkillsList({ skills }: TopSkillsListProps) {
  const programmingLevel = skills?.programming_level ?? 24;
  const focusLevel = skills?.focus_level ?? 22;
  const disciplineLevel = skills?.discipline_level ?? 20;

  const topSkills = [
    {
      name: "Programação",
      level: programmingLevel,
      icon: <Code2 className="w-4 h-4" />,
      colorClasses:
        "border-purple-600 text-purple-400 bg-purple-950/20 shadow-[0_0_10px_rgba(147,51,234,0.1)]",
    },
    {
      name: "Foco",
      level: focusLevel,
      icon: <Eye className="w-4 h-4" />,
      colorClasses:
        "border-blue-600 text-blue-400 bg-blue-950/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]",
    },
    {
      name: "Disciplina",
      level: disciplineLevel,
      icon: <Target className="w-4 h-4" />,
      colorClasses:
        "border-amber-600 text-amber-500 bg-amber-950/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-3">
      <h3 className="text-sm font-bold text-zinc-300 tracking-wide">
        Skills principais
      </h3>

      <div className="w-full grid grid-cols-3 gap-2 text-white">
        {topSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-2 min-w-0"
          >
            <div
              className={`w-9 h-9 flex items-center justify-center rounded-full border shrink-0 ${skill.colorClasses}`}
            >
              {skill.icon}
            </div>

            <div className="flex flex-col min-w-0 justify-center">
              <span className="text-[11px] font-bold text-zinc-100 tracking-wide truncate leading-tight">
                {skill.name}
              </span>
              <span className="text-[10px] font-semibold text-zinc-500 font-mono mt-0.5 leading-none">
                Nível {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
