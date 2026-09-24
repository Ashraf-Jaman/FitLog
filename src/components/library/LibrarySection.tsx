import { Exercise } from "@/types/exercise";
import ExerciseGrid from "./ExerciseGrid";

interface LibrarySectionProps {
  exercises: Exercise[];
}

export default function LibrarySection({
  exercises,
}: LibrarySectionProps) {
  return (
    <section id="library" className="w-full">
      {/* Section Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-wide text-white sm:text-3xl">
          THE LIBRARY
        </h1>

        <p className="mt-1 text-xs text-gray-500">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <ExerciseGrid exercises={exercises} />
    </section>
  );
}