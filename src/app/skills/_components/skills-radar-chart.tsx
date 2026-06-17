"use client";

import {
  Dumbbell,
  Brain,
  Target,
  Briefcase,
  DollarSign,
  Users,
} from "lucide-react";
import SkillNode from "./skill-node";

interface RadarChartProps {
  skills: {
    level_general: number;
    body: number;
    mind: number;
    discipline: number;
    career: number;
    social: number;
    finances: number;
  };
}

export default function SkillsRadarChart({ skills }: RadarChartProps) {
  return (
    <div className="relative w-[320px] h-90 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="absolute w-full h-full stroke-purple-900/30 stroke-[0.5] fill-none"
      >
        <polygon
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
          className="stroke-purple-800/40"
        />
        <polygon points="50,18 80,35 80,65 50,82 20,65 20,35" />
        <polygon points="50,32 70,43.5 70,56.5 50,68 30,56.5 30,43.5" />

        <line x1="50" y1="50" x2="50" y2="5" />
        <line x1="50" y1="50" x2="90" y2="27.5" />
        <line x1="50" y1="50" x2="90" y2="72.5" />
        <line x1="50" y1="50" x2="50" y2="95" />
        <line x1="50" y1="50" x2="10" y2="72.5" />
        <line x1="50" y1="50" x2="10" y2="27.5" />
      </svg>

      <div className="absolute z-10 bg-zinc-950/90 border border-purple-500/60 rounded-full w-24 h-24 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(147,51,234,0.4),inset_0_0_15px_rgba(147,51,234,0.2)]">
        <span className="text-[9px] font-black tracking-widest text-purple-400 uppercase">
          Nível Geral
        </span>
        <span className="text-3xl font-black text-white tracking-tighter font-mono mt-0.5 animate-pulse">
          {skills.level_general}
        </span>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
        <SkillNode
          name="Corpo"
          level={skills.body}
          icon={<Dumbbell className="w-4 h-4" />}
          color="emerald"
        />
      </div>

      <div className="absolute top-16 right-0 translate-x-2">
        <SkillNode
          name="Mente"
          level={skills.mind}
          icon={<Brain className="w-4 h-4" />}
          color="blue"
        />
      </div>

      <div className="absolute bottom-16 right-0 translate-x-2">
        <SkillNode
          name="Carreira"
          level={skills.career}
          icon={<Briefcase className="w-4 h-4" />}
          color="purple"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
        <SkillNode
          name="Finanças"
          level={skills.finances}
          icon={<DollarSign className="w-4 h-4" />}
          color="amber"
        />
      </div>

      <div className="absolute bottom-16 left-0 -translate-x-2">
        <SkillNode
          name="Social"
          level={skills.social}
          icon={<Users className="w-4 h-4" />}
          color="pink"
        />
      </div>

      <div className="absolute top-16 left-0 -translate-x-2">
        <SkillNode
          name="Disciplina"
          level={skills.discipline}
          icon={<Target className="w-4 h-4" />}
          color="orange"
        />
      </div>
    </div>
  );
}
