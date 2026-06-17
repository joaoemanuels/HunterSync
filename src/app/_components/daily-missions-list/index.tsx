"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface Mission {
  id: string;
  title: string;
  category: string;
  focus_tag: string;
  xp_reward: number;
  is_completed: boolean;
}

interface DailyMissionsListProps {
  initialMissions?: Mission[];
}

export default function DailyMissionsList({
  initialMissions,
}: DailyMissionsListProps) {
  const defaultMissions: Mission[] = [
    {
      id: "1",
      title: "Treinar 30 minutos",
      category: "Corpo",
      focus_tag: "Disciplina",
      xp_reward: 20,
      is_completed: true,
    },
    {
      id: "2",
      title: "Estudar TypeScript 1h",
      category: "Programação",
      focus_tag: "Foco",
      xp_reward: 30,
      is_completed: false,
    },
    {
      id: "3",
      title: "Ler 20 páginas",
      category: "Aprendizado",
      focus_tag: "Mente",
      xp_reward: 20,
      is_completed: false,
    },
    {
      id: "4",
      title: "Economizar R$10",
      category: "Finanças",
      focus_tag: "Consistência",
      xp_reward: 15,
      is_completed: false,
    },
    {
      id: "5",
      title: "Dormir antes das 23h",
      category: "Saúde",
      focus_tag: "Energia",
      xp_reward: 20,
      is_completed: false,
    },
  ];

  const [missions, setMissions] = useState<Mission[]>(
    initialMissions || defaultMissions,
  );

  const handleToggleMission = async (id: string) => {
    setMissions((prev) =>
      prev.map((mission) =>
        mission.id === id
          ? { ...mission, is_completed: !mission.is_completed }
          : mission,
      ),
    );
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <h1>MISSÕES DO DIA</h1>
      <div className="flex flex-col gap-2 w-full">
        {missions.map((mission) => (
          <MissionItem
            key={mission.id}
            mission={mission}
            onToggle={handleToggleMission}
          />
        ))}
      </div>

      <button className="w-full mt-2 bg-linear-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-[0_4px_12px_rgba(147,51,234,0.3)] hover:shadow-[0_4px_16px_rgba(147,51,234,0.45)] active:scale-[0.99] transition-all duration-200 uppercase tracking-wide">
        Ver todas as missões
      </button>
    </div>
  );
}

interface MissionItemProps {
  mission: Mission;
  onToggle: (id: string) => void;
}

function MissionItem({ mission, onToggle }: MissionItemProps) {
  return (
    <div
      onClick={() => onToggle(mission.id)}
      className={`w-full flex items-center justify-between p-4 rounded-xl border cursor-pointer select-none transition-all duration-300 ${
        mission.is_completed
          ? "bg-emerald-950/20 border-(--color-skill-body) shadow-[inset_0_0_12px_rgba(16,185,129,0.05)]"
          : "bg-zinc-900/30 border-(--color-border) hover:border-(--color-text-secondary)"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
            mission.is_completed
              ? "bg-(--color-skill-body) border-(--color-success) text-black"
              : "border-(--color-text-secondary) bg-transparent"
          }`}
        >
          {mission.is_completed && <Check className="w-3.5 h-3.5 stroke-4" />}
        </div>

        <div className="flex flex-col">
          <span
            className={`text-sm font-bold transition-all duration-200 tracking-wide ${
              mission.is_completed
                ? "text-(--color-text-secondary) line-through decoration-(--color-text-secondary)"
                : "text-(--color-text-primary)"
            }`}
          >
            {mission.title}
          </span>
          <span className="text-[11px] text-zinc-500 font-medium mt-0.5">
            {mission.category} • {mission.focus_tag}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-(--color-text-secondary) font-mono tracking-wide">
          +{mission.xp_reward} XP
        </span>

        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            mission.is_completed
              ? "bg-(--color-skill-body) text-black opacity-100 scale-100"
              : "border border-(--color-text-secondary) text-transparent opacity-40 scale-95"
          }`}
        >
          <Check className="w-3.5 h-3.5 stroke-3" />
        </div>
      </div>
    </div>
  );
}
