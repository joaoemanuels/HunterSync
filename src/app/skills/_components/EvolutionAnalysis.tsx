"use client";

import { Sparkles, ArrowRight } from "lucide-react";

export default function EvolutionAnalysis() {
  return (
    <div className="w-full max-w-md mx-auto bg-[#0d0d12]/60 border border-zinc-900 rounded-3xl p-6 flex flex-col gap-4 shadow-xl backdrop-blur-sm">
      <div className="flex items-center gap-2.5">
        <Sparkles className="w-5 h-5 text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]" />
        <h2 className="text-xl font-bold text-zinc-100 tracking-tight">
          Análise de Evolução
        </h2>
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed tracking-wide">
        Você atingiu o pico de{" "}
        <span className="text-purple-400 font-semibold">Disciplina</span> nesta
        semana. Sua próxima evolução requer foco no atributo{" "}
        <span className="text-sky-400 font-semibold">Carreira</span> para
        equilibrar o Nível Geral.
      </p>

      <button className="w-full bg-violet-600 hover:bg-violet-500 text-white font-mono font-bold text-xs uppercase tracking-widest py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(124,58,237,0.25)] transition-all duration-200 active:scale-[0.98]">
        Redefinir Prioridades
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
