"use client";

import { Flame, CheckCircle2, TrendingUp, Calendar } from "lucide-react";

const WEEKLY_DATA = [
  { day: "Seg", percentage: 40, active: false },
  { day: "Ter", percentage: 70, active: false },
  { day: "Qua", percentage: 100, active: true },
  { day: "Qui", percentage: 0, active: false },
  { day: "Sex", percentage: 0, active: false },
  { day: "Sáb", percentage: 0, active: false },
  { day: "Dom", percentage: 0, active: false },
];

export function StatsView() {
  const statsSummary = [
    {
      title: "Maior Sequência",
      value: "15 dias",
      icon: Flame,
      color: "text-orange-400 bg-orange-950/30 border-orange-500/20",
    },
    {
      title: "Concluídos (Mês)",
      value: "42 vezes",
      icon: CheckCircle2,
      color: "text-green-400 bg-green-950/30 border-green-500/20",
    },
    {
      title: "Taxa de Sucesso",
      value: "78%",
      icon: TrendingUp,
      color: "text-violet-400 bg-violet-950/30 border-violet-500/20",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-3">
        {statsSummary.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-3 flex flex-col gap-2 backdrop-blur-sm"
            >
              <div
                className={`w-8 h-8 rounded-lg border flex items-center justify-center ${item.color}`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-500 text-[10px] font-medium tracking-wide uppercase">
                  {item.title}
                </span>
                <span className="text-white font-bold text-sm mt-0.5">
                  {item.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-zinc-900/20 border border-zinc-800/50 rounded-2xl p-5 backdrop-blur-sm flex flex-col gap-6">
        <div className="flex flex-col">
          <h3 className="text-white font-semibold text-base tracking-wide">
            Frequência Semanal
          </h3>
          <p className="text-zinc-500 text-xs">
            Porcentagem de tarefas cumpridas por dia
          </p>
        </div>

        <div className="flex items-end justify-between h-32 px-2 pt-4 border-b border-zinc-800/60">
          {WEEKLY_DATA.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 flex-1 group cursor-pointer"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-zinc-800 text-zinc-300 text-[10px] px-1.5 py-0.5 rounded-md absolute -translate-y-8 font-medium">
                {item.percentage}%
              </span>

              <div className="w-6 bg-zinc-800/50 rounded-t-md h-full flex items-end">
                <div
                  style={{ height: `${item.percentage}%` }}
                  className={`w-full rounded-t-md transition-all duration-500 ${
                    item.active
                      ? "bg-linear-to-t from-violet-600 to-violet-400 shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                      : item.percentage > 0
                        ? "bg-zinc-700 group-hover:bg-zinc-600"
                        : "bg-transparent"
                  }`}
                />
              </div>

              <span
                className={`text-[11px] font-medium mb-2 ${item.active ? "text-violet-400 font-semibold" : "text-zinc-500"}`}
              >
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-zinc-900/20 border border-zinc-800/50 rounded-2xl p-4 backdrop-blur-sm flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-violet-950/40 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
          <Calendar className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <h4 className="text-white text-sm font-semibold">
            Melhor dia da semana
          </h4>
          <p className="text-zinc-400 text-xs mt-0.5">
            Nas{" "}
            <span className="text-violet-400 font-medium">Quartas-feiras</span>{" "}
            você costuma bater 100% dos seus hábitos cadastrados.
          </p>
        </div>
      </div>
    </div>
  );
}
