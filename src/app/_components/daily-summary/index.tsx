import { CheckCircle2, Star, Flame, Target } from "lucide-react";

interface DailySummaryProps {
  character?: {
    habits_completed_today?: number;
    xp_earned_today?: number;
    streak_days?: number;
    daily_meta_percentage?: number;
  };
}

interface SummaryCardProps {
  value: string | number;
  label: string;
  icon: React.ReactNode;
  iconColor: string;
  glowColor: string;
}

export default function DailySummary({ character }: DailySummaryProps) {
  const habitsCompleted = character?.habits_completed_today ?? 4;
  const xpGained = character?.xp_earned_today ?? 120;
  const streakDays = character?.streak_days ?? 15;
  const metaPercentage = character?.daily_meta_percentage ?? 85;

  const stats: SummaryCardProps[] = [
    {
      value: habitsCompleted,
      label: "Hábitos concluídos",
      icon: <CheckCircle2 className="w-5 h-5" />,
      iconColor: "text-purple-500",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(147,51,234,0.15)]",
    },
    {
      value: xpGained,
      label: "XP ganhos",
      icon: <Star className="w-5 h-5 fill-amber-500 text-amber-500" />,
      iconColor: "text-amber-500",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]",
    },
    {
      value: streakDays,
      label: "Sequência de dias",
      icon: <Flame className="w-5 h-5 fill-orange-500 text-orange-500" />,
      iconColor: "text-orange-500",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]",
    },
    {
      value: `${metaPercentage}%`,
      label: "Meta diária",
      icon: <Target className="w-5 h-5" />,
      iconColor: "text-emerald-500",
      glowColor: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]",
    },
  ];

  return (
    <div>
      <h1>RESUMO DO DIA</h1>
      <div className="w-full grid grid-cols-4 gap-2.5">
        {stats.map((stat, index) => (
          <SummaryCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
}

function SummaryCard({
  value,
  label,
  icon,
  iconColor,
  glowColor,
}: SummaryCardProps) {
  return (
    <div
      className={`group flex flex-col items-center justify-between bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-3 aspect-3/4 text-center transition-all duration-300 hover:border-zinc-700/80 ${glowColor}`}
    >
      <div
        className={`flex items-center justify-center p-1.5 rounded-lg ${iconColor} bg-white/5`}
      >
        {icon}
      </div>

      <div className="flex flex-col items-center gap-0.5 my-auto">
        <span className="text-xl font-black tracking-tight text-white font-mono">
          {value}
        </span>

        <span className="text-[10px] font-medium leading-tight text-zinc-500 tracking-wide px-0.5">
          {label}
        </span>
      </div>
    </div>
  );
}
