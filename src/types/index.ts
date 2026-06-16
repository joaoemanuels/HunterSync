export interface Character {
  id: string; // Relacionado ao auth.uid() do Supabase
  username: string; // Ex: "Caçador"
  avatar_url: string;
  level: number; // Ex: 27
  current_xp: number; // Ex: 15680
  next_level_xp: number; // Ex: 20000
  title: string; // Ex: "Aprendiz Disciplinado"
  next_title: string; // Ex: "Construtor de Futuro"
  streak_days: number; // Sequência atual (Ex: 15)
  fire_tokens: number; // O contador com ícone de fogo (Ex: 1.250)
  coin_tokens: number; // O contador com ícone de moeda (Ex: 8.450)
}

export type HabitFrequency = "daily" | "weekly" | "monthly";

export interface Habit {
  id: string;
  user_id: string;
  title: string; // Ex: "Treino", "Estudos"
  description: string; // Ex: "Fortaleça seu corpo e sua mente."
  frequency: HabitFrequency;
  streak_count: number; // Ex: 12 dias
  category: "body" | "mind" | "finances" | "career" | "social"; // Define a cor/ícone
  history_last_days: boolean[]; // Os pontinhos coloridos (true = feito, false = falhou)
  updated_at: string;
}

export interface DailyMission {
  id: string;
  user_id: string;
  title: string; // Ex: "Estudar TypeScript 1h"
  category: string; // Ex: "Programação"
  focus_tag: string; // Ex: "Foco", "Disciplina", "Energia"
  xp_reward: number; // Ex: 30
  is_completed: boolean;
  completed_at: string | null;
}

export interface CharacterSkills {
  id: string;
  user_id: string;
  body: number; // Corpo (Ex: 18)
  mind: number; // Mente (Ex: 22)
  discipline: number; // Disciplina (Ex: 20)
  career: number; // Carreira (Ex: 24)
  social: number; // Social (Ex: 14)
  finances: number; // Finanças (Ex: 16)
}

export type JourneyEventType =
  | "mission_completed"
  | "level_up"
  | "streak_milestone"
  | "achievement_unlocked"
  | "skill_up";

export interface JourneyEvent {
  id: string;
  user_id: string;
  type: JourneyEventType;
  title: string; // Ex: "Novo nível alcançado" ou "Missão concluída"
  description: string; // Ex: "Você chegou ao nível 27!" ou "Treinar 30 minutos"
  xp_gained?: number; // Ex: 20 (opcional, nem todo evento dá XP)
  created_at: string; // Data e hora para ordenar a timeline
}

export interface Achievement {
  id: string;
  title: string; // Ex: "7 dias seguidos", "100 horas de estudo"
  description: string; // Ex: "Mantenha a chama acesa!"
  icon_name: string; // Para você renderizar dinamicamente o ícone correto
  category: "streak" | "study" | "fitness" | "finance" | "career";
  is_unlocked: boolean;
  unlocked_at: string | null;
}
