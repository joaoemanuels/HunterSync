interface GeneralStatsProps {
  stats?: {
    habits_count?: number;
    missions_count?: number;
    total_xp_earned?: number;
    active_days?: number;
  };
}

export default function GeneralStats({ stats }: GeneralStatsProps) {
  const habitsCount = stats?.habits_count?.toLocaleString("pt-BR") || "248";
  const missionsCount = stats?.missions_count?.toLocaleString("pt-BR") || "512";
  const totalXpEarned =
    stats?.total_xp_earned?.toLocaleString("pt-BR") || "215.680";
  const activeDays = stats?.active_days?.toLocaleString("pt-BR") || "87";

  const rows = [
    { label: "Hábitos concluídos", value: habitsCount },
    { label: "Missões concluídas", value: missionsCount },
    { label: "XP total ganho", value: totalXpEarned },
    { label: "Dias ativos", value: activeDays },
  ];

  return (
    <div className="w-full flex flex-col gap-3">
      <h3 className="text-sm font-bold text-zinc-300 tracking-wide">
        Estatísticas gerais
      </h3>

      <div className="w-full bg-zinc-900/30 border border-zinc-800/50 rounded-xl px-4 flex flex-col divide-y divide-zinc-800/40 text-white">
        {rows.map((row, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-between py-3.5 select-none transition-colors duration-150 hover:bg-zinc-900/10"
          >
            <span className="text-sm font-medium text-zinc-400 tracking-wide">
              {row.label}
            </span>

            <span className="text-sm font-bold text-zinc-100 font-mono tracking-wide">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
