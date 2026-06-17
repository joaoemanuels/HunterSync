import Image from "next/image";
import { Flame, Coins, Bell } from "lucide-react";

interface ProfileHeaderProps {
  character?: {
    username: string;
    avatar_url: string;
    title?: string;
    fire_tokens: number;
    coin_tokens: number;
  };
}

export default function ProfileHeader({ character }: ProfileHeaderProps) {
  const username = character?.username || "Caçador";
  const fireTokens = character?.fire_tokens?.toLocaleString("pt-BR") || "1.250";
  const coinTokens = character?.coin_tokens?.toLocaleString("pt-BR") || "8.450";

  return (
    <section className="flex w-full items-center justify-between p-3 text-white">
      <div className="flex items-center gap-3">
        <div className="relative w-14 h-14 rounded-full p-0.5 bg-linear-to-tr from-purple-600 to-indigo-400 flex items-center justify-center">
          <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950 relative">
            <Image
              src={
                character?.avatar_url ||
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
              }
              alt="Avatar do Caçador"
              width={56}
              height={56}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-purple-400 rounded-full border border-black shadow-[0_0_8px_#c084fc]" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-sm font-bold tracking-tight text-zinc-100">
            Bom dia, {username}!
          </h1>
          <p className="text-xs text-zinc-500 font-medium">
            Foque hoje, colha amanhã.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <div className="flex flex-col justify-center bg-zinc-900/50 border border-zinc-800/80 rounded-xl px-3 py-1.5 min-w-22.5 h-12">
          <div className="flex items-center justify-between gap-2 h-5">
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
            <span className="text-xs font-bold font-mono tracking-wide text-zinc-300">
              {fireTokens}
            </span>
          </div>

          <div className="h-px bg-zinc-800/60 my-0.5 w-full" />

          <div className="flex items-center justify-between h-5">
            <Coins className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-xs font-bold font-mono tracking-wide text-zinc-300">
              {coinTokens}
            </span>
          </div>
        </div>

        <button className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:bg-zinc-800 transition-colors group">
          <Bell className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />

          <span className="absolute top-2 right-2 flex items-center justify-center min-w-3.5 h-3.5 px-0.5 bg-purple-600 text-[9px] font-black rounded-full border border-zinc-950 text-white">
            1
          </span>
        </button>
      </div>
    </section>
  );
}
