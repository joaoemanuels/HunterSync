"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

export default function AvatarHud() {
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);

  return (
    <div className="bg-[#09090b]/60 border border-zinc-900 rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b border-zinc-900 pb-3">
        <Bell className="w-4 h-4 text-sky-400" />
        <h2 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono">
          Interface e HUD
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-zinc-200">
              Alertas Diários
            </span>
            <span className="text-[11px] text-zinc-500">
              Lembretes para não perder o combo de hábitos
            </span>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${
              notifications ? "bg-purple-600" : "bg-zinc-800"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
                notifications ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-zinc-200">
              Efeitos de Áudio
            </span>
            <span className="text-[11px] text-zinc-500">
              Sons de feedback ao subir de nível e concluir quests
            </span>
          </div>
          <button
            onClick={() => setSoundEffects(!soundEffects)}
            className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${
              soundEffects ? "bg-purple-600" : "bg-zinc-800"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
                soundEffects ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
