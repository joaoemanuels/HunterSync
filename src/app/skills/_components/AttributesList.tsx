"use client";

import { Dumbbell, Brain, Briefcase, Wallet, Users, Timer } from "lucide-react";

interface AtributesListProps {
  skills?: {
    body: number;
    mind: number;
    career: number;
    finances: number;
    social: number;
    discipline: number;
  };
}

export default function AttributesList({ skills }: AtributesListProps) {
  const {
    body = 32,
    mind = 45,
    career = 21,
    finances = 18,
    social = 29,
    discipline = 38,
  } = skills ?? {};

  const attributeItems = [
    {
      name: "Corpo",
      level: body,
      currentXp: 2450,
      maxXp: 3200,
      icon: <Dumbbell className="w-4 h-4 text-emerald-400" />,
      levelColor: "text-emerald-400",
      barColor: "bg-emerald-500",
    },
    {
      name: "Mente",
      level: mind,
      currentXp: 4100,
      maxXp: 4800,
      icon: <Brain className="w-4 h-4 text-purple-400" />,
      levelColor: "text-purple-400",
      barColor: "bg-purple-500",
    },
    {
      name: "Carreira",
      level: career,
      currentXp: 900,
      maxXp: 2250,
      icon: <Briefcase className="w-4 h-4 text-sky-400" />,
      levelColor: "text-sky-400",
      barColor: "bg-sky-400",
    },
    {
      name: "Finanças",
      level: finances,
      currentXp: 1100,
      maxXp: 2000,
      icon: <Wallet className="w-4 h-4 text-amber-400" />,
      levelColor: "text-amber-400",
      barColor: "bg-amber-500",
    },
    {
      name: "Social",
      level: social,
      currentXp: 2040,
      maxXp: 3000,
      icon: <Users className="w-4 h-4 text-sky-400" />,
      levelColor: "text-sky-400",
      barColor: "bg-sky-400",
    },
    {
      name: "Disciplina",
      level: discipline,
      currentXp: 3680,
      maxXp: 4000,
      icon: <Timer className="w-4 h-4 text-rose-400" />,
      levelColor: "text-rose-400",
      barColor: "bg-rose-500",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-3">
      {attributeItems.map((item) => {
        const xpPercentage = (item.currentXp / item.maxXp) * 100;

        return (
          <div
            key={item.name}
            className="w-full bg-[#09090b]/80 border border-zinc-900 rounded-2xl p-4 flex flex-col gap-2.5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm font-semibold text-zinc-200 tracking-wide">
                  {item.name}
                </span>
              </div>
              <span
                className={`text-sm font-mono font-bold tracking-wider ${item.levelColor}`}
              >
                LVL {item.level}
              </span>
            </div>

            <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-950">
              <div
                className={`h-full rounded-full transition-all duration-500 ease-out ${item.barColor}`}
                style={{ width: `${xpPercentage}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
              <span>Progresso XP</span>
              <span className="tracking-normal text-zinc-400">
                {item.currentXp.toLocaleString("pt-BR")} /{" "}
                {item.maxXp.toLocaleString("pt-BR")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
