"use client";

import { useState, useEffect } from "react";
import {
  X,
  PenTool,
  Zap,
  Coins,
  PlusCircle,
  Dumbbell,
  Brain,
  Target,
  Wallet,
} from "lucide-react";

interface HabitsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES = [
  {
    id: "corpo",
    label: "Corpo",
    icon: <Dumbbell className="w-3 h-3" />,
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-950/20",
  },
  {
    id: "mente",
    label: "Mente",
    icon: <Brain className="w-3 h-3" />,
    color: "text-purple-400 border-purple-500/20 bg-purple-950/20",
  },
  {
    id: "foco",
    label: "Foco",
    icon: <Target className="w-3 h-3" />,
    color: "text-amber-500 border-amber-500/20 bg-amber-950/20",
  },
  {
    id: "financas",
    label: "Finanças",
    icon: <Wallet className="w-3 h-3" />,
    color: "text-sky-400 border-sky-500/20 bg-sky-950/20",
  },
];

const RANKS = ["E", "D", "C", "B", "A", "S"];

export default function HabitsModal({ isOpen, onClose }: HabitsModalProps) {
  const [missionName, setMissionName] = useState("");
  const [activeCategory, setActiveCategory] = useState("corpo");
  const [xpReward, setXpReward] = useState(450);
  const [goldReward, setGoldReward] = useState(1200);
  const [selectedRank, setSelectedRank] = useState("B");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end justify-center overscroll-none pb-10">
      <div className="w-full max-w-md bg-[#09090b] border-t border-zinc-900 rounded-t-4xl p-6 pb-safe flex flex-col gap-5 animate-in slide-in-from-bottom duration-200 max-h-[86vh] h-fit overflow-y-auto">
        <div className="w-12 h-1 bg-zinc-800 rounded-full mx-auto -mt-2 mb-1 shrink-0" />

        <div className="text-center flex flex-col gap-1 my-1 shrink-0">
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-300 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-2xl font-mono font-black tracking-[0.25em] text-purple-400 uppercase">
            Nova Missão
          </span>
          <p className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase max-w-70 mx-auto leading-relaxed">
            Defina seus objetivos, suba de nível
          </p>
        </div>

        <div className="flex flex-col gap-2 shrink-0">
          <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
            Nome da Missão
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Ex: Derrotar a Procrastinação"
              value={missionName}
              onChange={(e) => setMissionName(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 rounded-xl pl-4 pr-10 py-3 text-sm font-mono text-zinc-300 placeholder-zinc-700 focus:outline-none focus:border-purple-500/50 transition-all"
            />
            <PenTool className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700" />
          </div>
        </div>

        <div className="flex flex-col gap-2 shrink-0">
          <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
            Categoria
          </label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-mono font-bold uppercase tracking-wide cursor-pointer transition-all ${
                    isActive
                      ? "bg-purple-600 text-white border-purple-500 shadow-[0_0_10px_rgba(124,58,237,0.3)]"
                      : `${cat.color} filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0`
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full bg-zinc-950/40 border border-zinc-900/60 rounded-2xl p-4 flex flex-col gap-2 shrink-0">
          <div className="flex items-center justify-between text-xs font-mono font-bold tracking-wider text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-purple-400 fill-purple-400/20" />
              <span>RECOMPENSA XP</span>
            </div>
            <span className="text-zinc-200">{xpReward}</span>
          </div>
          <input
            type="range"
            min="50"
            max="1000"
            step="50"
            value={xpReward}
            onChange={(e) => setXpReward(Number(e.target.value))}
            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
        </div>

        <div className="w-full bg-zinc-950/40 border border-zinc-900/60 rounded-2xl p-4 flex flex-col gap-2 shrink-0">
          <div className="flex items-center justify-between text-xs font-mono font-bold tracking-wider text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Coins className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
              <span>RECOMPENSA GOLD</span>
            </div>
            <span className="text-amber-500">
              {goldReward >= 1000
                ? `${(goldReward / 1000).toFixed(1)}k`
                : goldReward}
            </span>
          </div>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={goldReward}
            onChange={(e) => setGoldReward(Number(e.target.value))}
            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>

        <div className="flex flex-col gap-2 shrink-0">
          <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
            Dificuldade (Rank)
          </label>
          <div className="w-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-1 flex items-center justify-between gap-1">
            {RANKS.map((rank) => {
              const isSelected = rank === selectedRank;
              return (
                <button
                  key={rank}
                  type="button"
                  onClick={() => setSelectedRank(rank)}
                  className={`flex-1 py-2.5 text-xs font-mono font-bold rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(124,58,237,0.4)]"
                      : rank === "S"
                        ? "text-rose-500 hover:text-rose-400"
                        : "text-zinc-600 hover:text-zinc-400"
                  }`}
                >
                  {rank}
                </button>
              );
            })}
          </div>
        </div>

        <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs uppercase tracking-widest py-4 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(124,58,237,0.3)] transition-all duration-200 mt-2 active:scale-[0.99] shrink-0 cursor-pointer mb-10">
          <PlusCircle className="w-4 h-4" />
          Criar Missão
        </button>
      </div>
    </div>
  );
}
