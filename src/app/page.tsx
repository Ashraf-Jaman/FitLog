import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import LibrarySection from "@/components/library/LibrarySection";
import { getExercises } from "@/lib/api";

export default async function Home() {
  const exercises = await getExercises();
  return (
    <>
      <Navbar />
      <Hero />
      <main className="min-h-screen bg-[#080a0f] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <LibrarySection exercises={exercises} />
        </div>
      </main>
    </>
  );
}
