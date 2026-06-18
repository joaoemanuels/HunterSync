"use client";

import { useState } from "react";
import { User } from "lucide-react";

export default function AvatarData() {
  const [username, setUsername] = useState("Hunter_Vitor");
  const [title, setTitle] = useState("Aprendiz Disciplinado");

  return (
    <div className="bg-[#09090b]/60 border border-zinc-900 rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b border-zinc-900 pb-3">
        <User className="w-4 h-4 text-purple-400" />
        <h2 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono">
          Dados do Avatar
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">
            Codinome (Username)
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-2.5 text-sm font-mono text-zinc-200 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">
            Título de Exibição
          </label>
          <select
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-2.5 text-sm font-mono text-zinc-300 focus:outline-none focus:border-purple-500/50 transition-all appearance-none cursor-pointer"
          >
            <option value="Aprendiz Disciplinado">Aprendiz Disciplinado</option>
          </select>
        </div>
      </div>
    </div>
  );
}
