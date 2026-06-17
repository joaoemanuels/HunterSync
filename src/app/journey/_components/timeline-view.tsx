import {
  CheckCircle2,
  BookOpen,
  Trophy,
  Flame,
  Award,
  Target,
} from "lucide-react";

const iconMap = {
  check: CheckCircle2,
  book: BookOpen,
  trophy: Trophy,
  flame: Flame,
  award: Award,
  target: Target,
};

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  xp?: string;
  iconType: keyof typeof iconMap;
  themeColor: "green" | "blue" | "purple" | "orange" | "yellow";
}

const themeStyles = {
  green: {
    icon: "bg-green-950/40 border-green-500/30 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.15)]",
    line: "bg-green-500/30",
  },
  blue: {
    icon: "bg-blue-950/40 border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]",
    line: "bg-blue-500/30",
  },
  purple: {
    icon: "bg-purple-950/40 border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
    line: "bg-purple-500/30",
  },
  orange: {
    icon: "bg-orange-950/40 border-orange-500/30 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.15)]",
    line: "bg-orange-500/30",
  },
  yellow: {
    icon: "bg-yellow-950/40 border-yellow-500/30 text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.15)]",
    line: "bg-yellow-500/30",
  },
};

const TIMELINE_DATA: TimelineItemProps[] = [
  {
    date: "Hoje",
    title: "Missão concluída",
    subtitle: "Treinar 30 minutos",
    xp: "+20 XP",
    iconType: "check",
    themeColor: "green",
  },
  {
    date: "Hoje",
    title: "Missão concluída",
    subtitle: "Estudar TypeScript 1h",
    xp: "+30 XP",
    iconType: "book",
    themeColor: "blue",
  },
  {
    date: "18 Mai",
    title: "Novo nível alcançado",
    subtitle: "Você chegou ao nível 27!",
    iconType: "trophy",
    themeColor: "purple",
  },
  {
    date: "17 Mai",
    title: "Sequência de 15 dias",
    subtitle: "Incrível! Continue assim!",
    iconType: "flame",
    themeColor: "orange",
  },
  {
    date: "15 Mai",
    title: "Conquista desbloqueada",
    subtitle: "Foco Inabalável",
    iconType: "award",
    themeColor: "yellow",
  },
  {
    date: "10 Mai",
    title: "Nova skill desbloqueada",
    subtitle: "Disciplina Nível 20",
    iconType: "target",
    themeColor: "yellow",
  },
];

export function TimelineView() {
  return (
    <div className="relative flex flex-col gap-8 pl-2">
      <div className="absolute left-7.5 top-4 bottom-4 w-0.5 bg-linear-to-b from-green-500/50 via-blue-500/30 to-zinc-800" />

      {TIMELINE_DATA.map((item, index) => {
        const Icon = iconMap[item.iconType];
        const styles = themeStyles[item.themeColor];

        return (
          <div key={index} className="relative flex items-start gap-4 group">
            <div
              className={`w-12 h-12 rounded-full border flex items-center justify-center z-10 shrink-0 transition-transform group-hover:scale-105 ${styles.icon}`}
            >
              <Icon className="w-5 h-5" />
            </div>

            <div className="flex-1 pt-0.5 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-zinc-500 text-xs font-medium mb-0.5">
                  {item.date}
                </span>
                <h4 className="text-white font-semibold text-sm tracking-wide">
                  {item.title}
                </h4>
                <p className="text-zinc-400 text-sm">{item.subtitle}</p>
              </div>

              {item.xp && (
                <span
                  className={`text-sm font-bold ${item.themeColor === "green" ? "text-green-400" : "text-blue-400"}`}
                >
                  {item.xp}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
