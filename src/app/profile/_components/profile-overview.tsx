"use client";

import Image from "next/image";
import Link from "next/link";
import { Settings } from "lucide-react";
import Badge from "@/components/ui/badge";

interface ProfileOverviewProps {
  character?: {
    username: string;
    avatar_url: string;
    title: string;
    level: number;
  };
}

export default function ProfileOverview({ character }: ProfileOverviewProps) {
  const username = character?.username || "Caçador";
  const title = character?.title || "Aprendiz Disciplinado";
  const level = character?.level ?? 27;

  return (
    <section className="w-full flex flex-col items-center pt-2 pb-4 relative text-white">
      <div className="w-full flex justify-end px-3">
        <Link
          href="/profile/settings"
          className="text-zinc-400 hover:text-zinc-200 transition-colors p-1"
        >
          <Settings className="w-6 h-6 stroke-[1.75]" />
        </Link>
      </div>

      <div className="relative mt-1 flex flex-col items-center">
        <div className="relative w-27 h-27 rounded-full p-0.5 border-3 border-purple-500/80 shadow-[0_0_20px_rgba(147,51,234,0.3)] flex items-center justify-center">
          <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950 relative">
            <Image
              src={
                character?.avatar_url ||
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
              }
              alt={`Avatar de ${username}`}
              width={108}
              height={108}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <span className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full border border-black shadow-[0_0_8px_#c084fc]" />
          <span className="absolute bottom-1 right-2 w-3 h-3 bg-purple-400 rounded-full border-3 border-purple-600 shadow-[0_0_8px_#c084fc]" />
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center text-center">
        <h2 className="text-xl font-bold tracking-wide text-zinc-100">
          {username}
        </h2>

        <p className="text-sm text-zinc-400 mt-1 tracking-wide">{title}</p>

        <Badge level={level} />
      </div>
    </section>
  );
}
