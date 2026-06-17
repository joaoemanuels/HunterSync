import SkillsRadarChart from "./_components/skills-radar-chart";

export default async function SkillsPage() {
  const mockSkills = {
    level_general: 27,
    body: 18,
    mind: 22,
    discipline: 20,
    career: 24,
    social: 14,
    finances: 16,
  };

  const currentSkills = mockSkills;

  return (
    <main className="w-full min-h-screen bg-black text-white p-4 pb-24 flex flex-col gap-6 max-w-md mx-auto">
      <div className="flex items-center gap-2 pt-4">
        <h1 className="text-2xl font-black tracking-tight text-zinc-100">
          Skills
        </h1>
        <span className="w-4 h-4 rounded-full border border-zinc-500 flex items-center justify-center text-[10px] text-zinc-400 font-bold cursor-help select-none">
          i
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center py-6">
        <SkillsRadarChart skills={currentSkills} />
      </div>
    </main>
  );
}
