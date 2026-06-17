import Link from "next/link";
import ProfileHeader from "./_components/profile-header";
import ExperienceCard from "./_components/experience-card";
import DailySummary from "./_components/daily-summary";
import DailyMissionsList from "./_components/daily-missions-list";

export default async function Home() {
  return (
    <div className="flex bg-linear-grid flex-col gap-6 p-4 pb-24 w-full min-h-screen overflow-hidden">
      <ProfileHeader />

      <ExperienceCard />

      <div className="w-full bg-(--bg-secondary) border border-(--color-border) rounded-2xl p-5 flex flex-col gap-8 backdrop-blur-sm">
        <DailySummary />

        <DailyMissionsList />
      </div>
    </div>
  );
}
