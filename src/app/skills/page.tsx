import AttributesList from "./_components/AttributesList";
import EvolutionAnalysis from "./_components/EvolutionAnalysis";
import SkillsRadarChart from "./_components/skills-radar-chart";

export default async function SkillsPage() {
  const mockSkills = {
    level_general: 27,
    body: 38,
    mind: 42,
    discipline: 30,
    career: 25,
    social: 45,
    finances: 35,
  };

  return (
    <main className="w-full bg-hud-scanline bg-black text-white p-4 pb-24 flex flex-col gap-6 ">
      <SkillsRadarChart skills={mockSkills} />
      <AttributesList />
      <EvolutionAnalysis />
    </main>
  );
}
