import React from "react";

function HexagonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  );
}

export default function SystemStatus() {
  const stats = [
    {
      name: "AGILIDADE",
      level: 34,
      color: "text-sky-400",
      barColor: "bg-sky-400",
      progress: 75,
    },
    {
      name: "FORÇA",
      level: 21,
      color: "text-emerald-400",
      barColor: "bg-emerald-400",
      progress: 45,
    },
    {
      name: "INTELIGÊNCIA",
      level: 41,
      color: "text-purple-400",
      barColor: "bg-purple-400",
      progress: 85,
    },
    {
      name: "VITALIDADE",
      level: 15,
      color: "text-rose-400",
      barColor: "bg-rose-400",
      progress: 30,
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-(--bg-secondary) border border-zinc-900 rounded-3xl p-8 flex flex-col items-center gap-8 shadow-2xl backdrop-blur-sm">
      <div className="relative w-56 h-56 rounded-full border border-zinc-800 flex flex-col items-center justify-center bg-zinc-950/10">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0d0d12] p-1">
          <HexagonIcon className="w-6 h-6 text-sky-500 drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]" />
        </div>

        <div className="absolute bottom-5 left-2 bg-[#0d0d12] p-1">
          <HexagonIcon className="w-6 h-6 text-emerald-600 drop-shadow-[0_0_6px_rgba(5,150,105,0.4)]" />
        </div>

        <div className="absolute bottom-5 right-2 bg-[#0d0d12] p-1">
          <HexagonIcon className="w-6 h-6 text-purple-600 drop-shadow-[0_0_6px_rgba(147,51,234,0.4)]" />
        </div>

        <h1 className="text-4xl font-extrabold text-purple-200 tracking-wider font-mono drop-shadow-[0_0_15px_rgba(233,213,252,0.2)]">
          S-RANK
        </h1>
        <p className="text-[10px] font-mono font-bold tracking-[0.25em] text-zinc-500 uppercase mt-1">
          Coding Power
        </p>
      </div>

      <h2 className="text-2xl font-bold text-zinc-100 tracking-tight -mt-2">
        Status do Sistema
      </h2>

      <div className="w-full grid grid-cols-2 gap-x-6 gap-y-5">
        {stats.map((stat) => (
          <div key={stat.name} className="flex flex-col gap-2 min-w-0">
            <div className="flex items-baseline justify-between text-xs font-mono font-bold tracking-wide">
              <span className="text-zinc-400 text-[11px] truncate mr-1">
                {stat.name}
              </span>
              <span className={`shrink-0 text-[11px] ${stat.color}`}>
                LV. {stat.level}
              </span>
            </div>

            <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-950">
              <div
                className={`h-full rounded-full transition-all duration-500 ${stat.barColor}`}
                style={{ width: `${stat.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
