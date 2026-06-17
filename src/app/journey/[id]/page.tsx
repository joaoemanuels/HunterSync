// src/app/habits/[id]/page.tsx

interface JourneyPageProps {
  params: Promise<{ id: string }>;
}

// O Next.js exige obrigatoriamente um 'export default async function' ou 'function' nas páginas
export default async function JourneyDetailPage({ params }: JourneyPageProps) {
  const { id } = await params;

  return (
    <div className="w-full min-h-screen bg-black text-white p-4">
      <h1>Detalhes do Hábito: {id}</h1>
    </div>
  );
}
