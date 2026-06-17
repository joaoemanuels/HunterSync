import { Dumbbell, BookOpen, Brain, DollarSign, Heart } from "lucide-react";

const iconMap = {
  dumbbell: Dumbbell,
  book: BookOpen,
  brain: Brain,
  dollar: DollarSign,
  heart: Heart,
};

export interface HabitProps {
  id: string;
  title: string;
  description: string;
  sequence: number;
  maxDots?: number;
  currentDots: number;
  iconType: keyof typeof iconMap;
  themeColor: "green" | "blue" | "purple" | "yellow" | "red";
  category: string;
}

const themeStyles = {
  green: {
    bgGlow: "bg-green-500/10 border-green-500/20",
    iconBg:
      "bg-green-950/40 border-green-500/30 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.15)]",
    dotActive: "bg-green-500",
  },
  blue: {
    bgGlow: "bg-blue-500/10 border-blue-500/20",
    iconBg:
      "bg-blue-950/40 border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]",
    dotActive: "bg-blue-500",
  },
  purple: {
    bgGlow: "bg-purple-500/10 border-purple-500/20",
    iconBg:
      "bg-purple-950/40 border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
    dotActive: "bg-purple-500",
  },
  yellow: {
    bgGlow: "bg-yellow-500/10 border-yellow-500/20",
    iconBg:
      "bg-yellow-950/40 border-yellow-500/30 text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.15)]",
    dotActive: "bg-yellow-500",
  },
  red: {
    bgGlow: "bg-red-500/10 border-red-500/20",
    iconBg:
      "bg-red-950/40 border-red-500/30 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.15)]",
    dotActive: "bg-red-500",
  },
};

export function HabitCard({
  title,
  description,
  sequence,
  maxDots = 7,
  currentDots,
  iconType,
  themeColor,
}: HabitProps) {
  const Icon = iconMap[iconType];
  const styles = themeStyles[themeColor];

  return (
    <div
      className={`w-full border rounded-2xl p-4 flex items-center justify-between transition-all duration-300 bg-zinc-900/40 backdrop-blur-sm border-zinc-800/60 hover:${styles.bgGlow}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-14 h-14 rounded-full border flex items-center justify-center ${styles.iconBg}`}
        >
          <Icon className="w-6 h-6" />
        </div>

        <div className="flex flex-col">
          <h3 className="text-white font-semibold text-base tracking-wide">
            {title}
          </h3>
          <p className="text-zinc-400 text-sm max-w-45 sm:max-w-xs leading-snug">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1.5 min-w-20">
        <span className="text-zinc-500 text-xs font-medium">Sequência</span>
        <span className="text-white font-bold text-base">{sequence} dias</span>

        <div className="flex gap-1 mt-0.5">
          {Array.from({ length: maxDots }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index < currentDots ? styles.dotActive : "bg-zinc-800"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
