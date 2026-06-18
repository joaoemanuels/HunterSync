"use client";

interface RadarChartProps {
  skills?: {
    level_general: number;
    body: number;
    mind: number;
    career: number;
    finances: number;
    social: number;
    discipline: number;
  };
}

export default function SkillsRadarChart({ skills }: RadarChartProps) {
  const {
    level_general = 27,
    body = 0,
    mind = 0,
    career = 0,
    finances = 0,
    social = 0,
    discipline = 0,
  } = skills ?? {};

  const center = 50;
  const maxRadius = 38;
  const MAX_LEVEL = 50;

  const getCoordinates = (level: number, angleDegrees: number) => {
    const radius = (Math.min(level, MAX_LEVEL) / MAX_LEVEL) * maxRadius;
    const angleRadians = (angleDegrees - 90) * (Math.PI / 180);

    const x = center + radius * Math.cos(angleRadians);
    const y = center + radius * Math.sin(angleRadians);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  };

  const pointsData = [
    getCoordinates(body, 0),
    getCoordinates(mind, 60),
    getCoordinates(career, 120),
    getCoordinates(finances, 180),
    getCoordinates(social, 240),
    getCoordinates(discipline, 300),
  ].join(" ");

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center p-6 bg-zinc-950/20 rounded-3xl border border-zinc-900/50">
      <div className="text-center flex flex-col gap-1 mb-4">
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-zinc-500 uppercase">
          Matriz de Habilidades
        </span>
        <h2 className="text-3xl font-black text-purple-300 tracking-wider font-mono drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]">
          SHADOW LEVEL
        </h2>
      </div>

      <div className="relative w-85 h-85 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="absolute w-full h-full fill-none select-none"
        >
          {[1.0, 0.75, 0.5, 0.25].map((scale, i) => {
            const r = maxRadius * scale;
            const points = [0, 60, 120, 180, 240, 300]
              .map((deg) => {
                const rad = (deg - 90) * (Math.PI / 180);
                return `${center + r * Math.cos(rad)},${center + r * Math.sin(rad)}`;
              })
              .join(" ");
            return (
              <polygon
                key={i}
                points={points}
                className="stroke-zinc-800/50 stroke-[0.4]"
              />
            );
          })}

          {[0, 60, 120, 180, 240, 300].map((deg, i) => {
            const rad = (deg - 90) * (Math.PI / 180);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={center + maxRadius * Math.cos(rad)}
                y2={center + maxRadius * Math.sin(rad)}
                className="stroke-zinc-800/30 stroke-[0.4]"
              />
            );
          })}

          <polygon
            points={pointsData}
            className="fill-purple-600/25 stroke-purple-400 stroke-[1.2] drop-shadow-[0_0_6px_rgba(168,85,247,0.4)] transition-all duration-500 ease-out"
          />
        </svg>

        <div className="absolute z-10 bg-[#09090b] border border-zinc-800 rounded-full w-24 h-24 flex flex-col items-center justify-center text-center shadow-[0_0_25px_rgba(0,0,0,0.9),inset_0_0_10px_rgba(168,85,247,0.15)]">
          <span className="text-[9px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
            Nível Geral
          </span>
          <span className="text-3xl font-extrabold text-white font-mono leading-none mt-1">
            {level_general}
          </span>
        </div>

        <div className="absolute top-2 text-[11px] font-mono font-bold tracking-widest text-emerald-500 uppercase">
          Corpo
        </div>

        <div className="absolute top-[22%] right-2 text-[11px] font-mono font-bold tracking-widest text-purple-400 uppercase">
          Mente
        </div>

        <div className="absolute bottom-[22%] right-2 text-[11px] font-mono font-bold tracking-widest text-sky-400 uppercase">
          Carreira
        </div>

        <div className="absolute bottom-2 text-[11px] font-mono font-bold tracking-widest text-amber-500 uppercase">
          Finanças
        </div>

        <div className="absolute bottom-[22%] left-2 text-[11px] font-mono font-bold tracking-widest text-sky-400 uppercase">
          Social
        </div>

        <div className="absolute top-[22%] left-2 text-[11px] font-mono font-bold tracking-widest text-rose-400 uppercase">
          Disciplina
        </div>
      </div>
    </div>
  );
}
