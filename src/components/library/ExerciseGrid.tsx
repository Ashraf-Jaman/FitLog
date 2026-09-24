import { Exercise } from "@/types/exercise";
import ExerciseCard from "./ExerciseCard";

interface ExerciseGridProps {
  exercises: Exercise[];
}

export default function ExerciseGrid({
  exercises,
}: ExerciseGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
        />
      ))}
    </div>
  );
}