import ExperienceCard from "./_components/experience-card";
import DailySummary from "./_components/daily-summary";
import DailyMissionsList from "./_components/daily-missions-list";
import SystemStatus from "./_components/system-status";
import ProfileHeader from "@/components/layout/profile-header";

export default async function Home() {
  return (
    <div className="flex bg-system-grid flex-col gap-6 p-4 w-full min-h-screen overflow-hidden">
      <ProfileHeader />

      <ExperienceCard />

      <div className="w-full bg-(--bg-secondary) border border-(--color-border) rounded-2xl p-5 flex flex-col gap-8 backdrop-blur-sm">
        <DailySummary />

        <DailyMissionsList />
      </div>

      <SystemStatus />
    </div>
  );
}
