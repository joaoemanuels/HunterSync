"use client";

import { Save, LogOut } from "lucide-react";

export default function AvatarActions() {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs uppercase tracking-widest py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(124,58,237,0.2)] transition-all duration-200 active:scale-[0.98]">
        <Save className="w-4 h-4" />
        Salvar Alterações
      </button>

      <button className="w-full bg-transparent hover:bg-red-950/20 text-red-500 font-mono font-bold text-xs uppercase tracking-widest py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-150">
        <LogOut className="w-4 h-4" />
        Desconectar Sincronização
      </button>
    </div>
  );
}
