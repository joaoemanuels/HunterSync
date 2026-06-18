import GeneralStats from "./_components/general-stats";
import ProfileOverview from "./_components/profile-overview";
import QuickStatsGrid from "./_components/quick-stats-grid";
import TopSkillsList from "./_components/top-skills-list";

export default function Profile() {
  return (
    <section className="p-4 flex bg-hud-scanline flex-col gap-7 pb-20">
      <ProfileOverview />
      <QuickStatsGrid />
      <TopSkillsList />
      <GeneralStats />
    </section>
  );
}
