"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { TimelineView } from "./timeline-view";
import { StatsView } from "./stats-view";
import { CalendarView } from "./calendar-view";

type TabType = "Timeline" | "Estatísticas" | "Calendário";
const FILTERS: TabType[] = ["Timeline", "Estatísticas", "Calendário"];

export function JourneySection() {
  const [activeTab, setActiveTab] = useState<TabType>("Timeline");

  const renderContent = () => {
    switch (activeTab) {
      case "Timeline":
        return <TimelineView />;
      case "Estatísticas":
        return <StatsView />;
      case "Calendário":
        return <CalendarView />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-6 p-4 pb-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Jornada
        </h2>
        <button className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors">
          <Calendar className="w-5 h-5" />
        </button>
      </div>

      <div className="flex bg-zinc-950/60 p-1 rounded-xl border border-zinc-900 gap-1">
        {FILTERS.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                isActive
                  ? "bg-purple-950/40 text-purple-400 border border-purple-500/20 shadow-inner"
                  : "text-zinc-400 hover:text-zinc-200 border border-transparent"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="mt-2">{renderContent()}</div>
    </div>
  );
}
