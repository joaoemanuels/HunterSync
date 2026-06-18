"use client";

import { Shield, KeyRound } from "lucide-react";

export default function AvatarSecurity() {
  return (
    <div className="bg-[#09090b]/60 border border-zinc-900 rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b border-zinc-900 pb-3">
        <Shield className="w-4 h-4 text-emerald-400" />
        <h2 className="text-sm font-bold text-zinc-200 uppercase tracking-wider font-mono">
          Segurança da Conta
        </h2>
      </div>

      <button className="w-full bg-zinc-950 hover:bg-zinc-900/60 text-zinc-300 font-mono text-xs uppercase tracking-wider py-3 px-4 border border-zinc-900 rounded-xl flex items-center justify-between transition-all">
        <div className="flex items-center gap-2">
          <KeyRound className="w-4 h-4 text-zinc-500" />
          <span>Alterar Senha do Sistema</span>
        </div>
        <span className="text-zinc-600">→</span>
      </button>
    </div>
  );
}
