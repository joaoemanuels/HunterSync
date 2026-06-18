"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { HabitCard, HabitProps } from "./habit-card";
import Achievement from "./achievement";

const HABITS_MOCK: HabitProps[] = [
  {
    id: "1",
    title: "Treino",
    description: "Fortaleça seu corpo e sua mente.",
    sequence: 12,
    currentDots: 5,
    iconType: "dumbbell",
    themeColor: "green",
    category: "Diários",
  },
  {
    id: "2",
    title: "Estudos",
    description: "Aprenda algo novo todos os dias.",
    sequence: 15,
    currentDots: 6,
    iconType: "book",
    themeColor: "blue",
    category: "Diários",
  },
  {
    id: "3",
    title: "Leitura",
    description: "Expanda sua mente diariamente.",
    sequence: 8,
    currentDots: 4,
    iconType: "brain",
    themeColor: "purple",
    category: "Diários",
  },
  {
    id: "4",
    title: "Finanças",
    description: "Pequenas escolhas, grandes resultados.",
    sequence: 10,
    currentDots: 5,
    iconType: "dollar",
    themeColor: "yellow",
    category: "Semanais",
  },
  {
    id: "5",
    title: "Saúde Mental",
    description: "Cuide da sua mente sempre.",
    sequence: 7,
    currentDots: 3,
    iconType: "heart",
    themeColor: "red",
    category: "Mensais",
  },
];

const FILTERS = ["Todos", "Diários", "Semanais", "Mensais"];

export function HabitsSection() {
  const [activeFilter, setActiveFilter] = useState("Diários");

  const filteredHabits = HABITS_MOCK.filter((habit) => {
    if (activeFilter === "Todos") return true;
    return habit.category === activeFilter;
  });

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-6 p-4 pb-14">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Hábitos
        </h2>
        <button className="w-10 h-10 rounded-full bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="flex bg-zinc-950/60 p-1 rounded-xl border border-zinc-900 gap-1">
        {FILTERS.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                isActive
                  ? "bg-violet-950/40 text-violet-400 border border-violet-500/20 shadow-inner"
                  : "text-zinc-400 hover:text-zinc-200 border border-transparent"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        {filteredHabits.length > 0 ? (
          <>
            {filteredHabits.map((habit) => (
              <HabitCard key={habit.id} {...habit} />
            ))}
            <Achievement />
          </>
        ) : (
          <p className="text-zinc-500 text-sm text-center py-8 border border-dashed border-zinc-800 rounded-2xl">
            Nenhum hábito cadastrado para este período.
          </p>
        )}
      </div>
    </div>
  );
}
