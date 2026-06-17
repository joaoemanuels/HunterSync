"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock de dias concluídos para teste (formato: YYYY-MM-DD)
// Baseado no ano atual de 2026
const COMPLETED_DATES = [
  "2026-06-01",
  "2026-06-02",
  "2026-06-05",
  "2026-06-08",
  "2026-06-09",
  "2026-06-10",
  "2026-06-12",
  "2026-06-15",
  "2026-06-16",
  "2026-06-17",
];

const WEEK_DAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("pt-BR", { month: "long" });

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const blankSpaces = Array(firstDayOfMonth).fill(null);
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const totalSlots = [...blankSpaces, ...monthDays];

  // Navegação de meses
  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div className="w-full bg-zinc-900/20 border border-zinc-800/50 rounded-2xl p-5 backdrop-blur-sm flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold text-base capitalize tracking-wide">
          {monthName} <span className="text-zinc-500 font-normal">{year}</span>
        </h3>
        <div className="flex gap-1">
          <button
            onClick={handlePrevMonth}
            className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-y-2 text-center">
        {WEEK_DAYS.map((day) => (
          <span
            key={day}
            className="text-zinc-500 text-xs font-semibold uppercase tracking-wider"
          >
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {totalSlots.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} />;
          }

          const formattedDay = String(day).padStart(2, "0");
          const formattedMonth = String(month + 1).padStart(2, "0");
          const dateString = `${year}-${formattedMonth}-${formattedDay}`;

          const isCompleted = COMPLETED_DATES.includes(dateString);
          const isToday =
            new Date().toDateString() ===
            new Date(year, month, day).toDateString();

          return (
            <div
              key={day}
              className={`relative aspect-square flex items-center justify-center text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer
                ${
                  isCompleted
                    ? "bg-violet-600/20 text-violet-400 border border-violet-500/30 shadow-[0_0_10px_rgba(124,58,237,0.1)]"
                    : "text-zinc-400 hover:bg-zinc-800/40 hover:text-white"
                }
                ${isToday && !isCompleted ? "border border-zinc-700 bg-zinc-900/50 text-white" : ""}
              `}
            >
              {day}

              {isToday && isCompleted && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-violet-400" />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-end gap-4 border-t border-zinc-900 pt-3 mt-1 text-xs text-zinc-500">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-zinc-900" />
          <span>Não concluído</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-violet-600/20 border border-violet-500/30" />
          <span>Hábitos Concluídos</span>
        </div>
      </div>
    </div>
  );
}
