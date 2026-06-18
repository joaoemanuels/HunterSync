import { Flame } from "lucide-react";

interface QuickStatsGridProps {
  stats?: {
    total_xp: number;
    streak_days: number;
  };
}

export default function QuickStatsGrid({ stats }: QuickStatsGridProps) {
  const totalXp = stats?.total_xp?.toLocaleString("pt-BR") || "215.680";
  const streakDays = stats?.streak_days ?? 15;

  return (
    <div className="w-full grid grid-cols-2 gap-3  text-white">
      <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800/50 rounded-xl p-3.5">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-950/40 border border-purple-500/10 shadow-[0_0_10px_rgba(147,51,234,0.05)] shrink-0">
          <span className="text-purple-400 font-black text-sm tracking-tighter font-mono">
            XP
          </span>
        </div>

        <div className="flex flex-col min-w-0">
          <span className="text-xs font-semibold text-zinc-500 tracking-wide">
            XP Total
          </span>
          <span className="text-base font-black text-zinc-100 font-mono tracking-wide mt-0.5 truncate">
            {totalXp}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800/50 rounded-xl p-3.5">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-950/30 border border-amber-500/5 shadow-[0_0_10px_rgba(245,158,11,0.05)] shrink-0">
          <Flame className="w-5 h-5 text-amber-500 fill-amber-500/80" />
        </div>

        <div className="flex flex-col min-w-0">
          <span className="text-xs font-semibold text-zinc-500 tracking-wide">
            Sequência
          </span>
          <span className="text-base font-black text-zinc-100 tracking-wide mt-0.5 truncate">
            {streakDays} dias
          </span>
        </div>
      </div>
    </div>
  );
}
