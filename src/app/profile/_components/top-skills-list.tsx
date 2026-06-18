import { Code2, Target, Dumbbell } from "lucide-react";

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
      icon: <Code2 className="w-5 h-5" />,
      // Classes de cor específicas para o tema roxo
      borderColor: "border-l-purple-500",
      iconTheme: "bg-purple-950/40 text-purple-400",
      barColor: "bg-purple-500",
      textColor: "text-purple-400",
      progress: 65, // Porcentagem da barra
    },
    {
      name: "Foco",
      level: focusLevel,
      icon: <Target className="w-5 h-5" />, // Ícone de mira/foco
      borderColor: "border-l-sky-500",
      iconTheme: "bg-sky-950/40 text-sky-400",
      barColor: "bg-sky-500",
      textColor: "text-sky-400",
      progress: 50,
    },
    {
      name: "Disciplina",
      level: disciplineLevel,
      icon: <Dumbbell className="w-5 h-5" />, // Ícone de peso do print
      borderColor: "border-l-emerald-500",
      iconTheme: "bg-emerald-950/40 text-emerald-400",
      barColor: "bg-emerald-500",
      textColor: "text-emerald-400",
      progress: 55,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-3">
      <h3 className="text-sm font-bold text-zinc-400 tracking-wide">
        Skills principais
      </h3>

      <div className="w-full flex flex-col gap-3">
        {topSkills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center justify-between bg-zinc-900 border border-zinc-600 border-l-4 ${skill.borderColor} rounded-xl p-4`}
          >
            <div className="flex items-center gap-4 flex-1">
              <div
                className={`w-11 h-11 flex items-center justify-center rounded-xl ${skill.iconTheme} shrink-0`}
              >
                {skill.icon}
              </div>

              <div className="flex flex-col gap-1.5 w-full max-w-40">
                <span className="text-sm font-semibold text-zinc-100  tracking-wide leading-none">
                  {skill.name}
                </span>

                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${skill.barColor}`}
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            </div>

            <span
              className={`text-xs font-mono font-bold tracking-wide ${skill.textColor}`}
            >
              Nível {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
