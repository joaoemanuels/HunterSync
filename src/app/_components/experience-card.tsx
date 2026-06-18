"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import rank from "../../assets/image/rank.png";

interface ExperienceCardProps {
  character?: {
    level: number;
    current_xp: number;
    next_level_xp: number;
    title: string;
    next_title: string;
  };
}

export default function ExperienceCard({ character }: ExperienceCardProps) {
  const level = character?.level ?? 27;
  const currentXp = character?.current_xp ?? 15680;
  const nextLevelXp = character?.next_level_xp ?? 20000;
  const title = character?.title || "Aprendiz Disciplinado";
  const nextTitle = character?.next_title || "Construtor de Futuro";

  const [animatedWidth, setAnimatedWidth] = useState(0);

  const targetPercentage = Math.min((currentXp / nextLevelXp) * 100, 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(targetPercentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [targetPercentage]);

  return (
    <div className="w-full bg-(--bg-secondary) border border-(--color-border) rounded-2xl p-5 flex flex-col backdrop-blur-sm">
      <div className="flex items-center gap-5">
        <div className="relative w-16 h-16 flex items-center justify-center drop-shadow-[0_0_10px_rgba(147,51,234,0.3)]">
          <Image
            src={rank}
            alt="Emblema de Nível RPG"
            width={56}
            height={56}
            className="object-contain w-full h-full"
            priority
          />
        </div>

        <div className="flex-1 grid gap-y-2">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-(--color-text-secondary)">
              Nível
            </span>
            <span className="text-3xl font-black tracking-tight text-(--color-text-primary) font-mono">
              {level}
            </span>
          </div>

          <div className="flex flex-col pl-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-(--color-text-secondary)">
              Próximo Título
            </span>
            <span className="text-xs font-bold text-(--color-text-primary) mt-1 truncate">
              {nextTitle}
            </span>
          </div>

          <div className="col-span-2 text-xs font-semibold text-(--color-text-secondary) mt-1">
            {title}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex justify-end w-full">
          <span className="text-xs font-bold text-(--color-text-secondary) font-mono">
            {Math.round(targetPercentage)}%
          </span>
        </div>

        <div className="w-full bg-background rounded-full h-2.5 p-0.5 border border-(--color-border)">
          <div
            className="bg-linear-to-r from-purple-600 via-purple-500 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(147,51,234,0.5)]"
            style={{ width: `${animatedWidth}%` }}
          />
        </div>

        <div className="flex justify-center w-full mt-1">
          <span className="text-[11px] font-bold tracking-wide text-(--color-text-secondary) font-mono">
            {currentXp.toLocaleString("pt-BR")} /{" "}
            {nextLevelXp.toLocaleString("pt-BR")} XP
          </span>
        </div>
      </div>
    </div>
  );
}
