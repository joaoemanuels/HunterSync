export default function Badge({ level }: { level: number }) {
  return (
    <div className="mt-3 px-5 py-1 rounded-2xl bg-purple-600/90 shadow-[0_2px_10px_rgba(147,51,234,0.3)] border border-purple-400/20">
      <span className="text-[11px] font-black tracking-widest text-white uppercase font-mono">
        Nível {level}
      </span>
    </div>
  );
}
