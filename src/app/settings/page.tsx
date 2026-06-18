"use client";

import AvatarData from "./_components/avatar-data";
import AvatarHud from "./_components/avatar-hud";
import AvatarSecurity from "./_components/avatar-security";
import AvatarActions from "./_components/avatar-actions";

export default function SettingsPage() {
  return (
    <main className="w-full min-h-screen bg-hud-scanline text-white p-4 pb-24 flex flex-col gap-6 max-w-md mx-auto">
      <div className="flex flex-col gap-1 pt-4">
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-zinc-500 uppercase">
          Configurações
        </span>
        <h1 className="text-2xl font-black tracking-tight text-zinc-100">
          Ajustes do Sistema
        </h1>
      </div>

      <AvatarData />

      <AvatarHud />

      <AvatarSecurity />

      <AvatarActions />
    </main>
  );
}
