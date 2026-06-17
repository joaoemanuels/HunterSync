"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, SquareCheck, Sword, Map, User } from "lucide-react";

export default function BottomNavbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    {
      label: "Hábitos",
      href: "/habits",
      icon: <SquareCheck className="w-5 h-5" />,
    },
    { label: "Skills", href: "/skills", icon: <Sword className="w-5 h-5" /> },
    { label: "Jornada", href: "/journey", icon: <Map className="w-5 h-5" /> },
    { label: "Perfil", href: "/profile", icon: <User className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 w-full border-t border-zinc-900/60 bg-zinc-950/80 backdrop-blur-md px-2">
      <div className="flex h-full w-full max-w-md mx-auto items-center justify-around">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full select-none group transition-all duration-200"
            >
              <div
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                    : "text-zinc-500 group-hover:text-zinc-300"
                }`}
              >
                {item.icon}
              </div>

              <span
                className={`text-[10px] font-bold tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-purple-500"
                    : "text-zinc-500 group-hover:text-zinc-300"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
