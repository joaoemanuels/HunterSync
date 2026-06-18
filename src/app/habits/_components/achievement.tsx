import achievementBg from "../../../assets/image/achievement.png";

export default function Achievement() {
  console.log(achievementBg);
  return (
    <div
      className="flex flex-col gap-2 p-6 rounded-2xl border-2 border-zinc-900"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(9, 9, 11, 1) 0%, rgba(9, 9, 11, 0.6) 50%, rgba(9, 9, 11, 0) 100%), url(${achievementBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-blue-200 font-bold">Conquista de Rank</h2>
      <p className="text-zinc-200">The Path of the Monarch</p>
      <p className="text-zinc-400 text-sm">
        Complete 5 more habits today to unlock the Shadow Blade skill badge.
      </p>
    </div>
  );
}
