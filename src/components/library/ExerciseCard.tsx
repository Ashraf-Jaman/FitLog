import Image from "next/image";
import Link from "next/link";
import { Exercise } from "@/types/exercise";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({
  exercise,
}: ExerciseCardProps) {
  return (
    <Link
      href={`/workout/${exercise.id}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-xl border border-white/10 bg-[#12151b] transition-all duration-300 hover:-translate-y-1 hover:border-white/20">

        {/* Image */}
        <div className="relative aspect-2/1 overflow-hidden">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="px-4 py-3.5">

          {/* Muscle Groups */}
          <div className="mb-2.5 flex items-center gap-2">
            {exercise.muscleGroups.slice(0, 2).map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Exercise Name */}
          <h2 className="text-[13px] font-bold uppercase tracking-wide text-white sm:text-sm">
            {exercise.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-[10px] text-gray-500 sm:text-[11px]">
            {exercise.equipment}
          </p>

          {/* Divider */}
          <div className="my-3 border-t border-white/10" />

          {/* Stats */}
          <div className="flex items-center gap-4 text-[10px] text-gray-400 sm:text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="text-gray-500">◷</span>
              <span>{exercise.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-gray-500">♨</span>
              <span>{exercise.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-gray-500">★</span>
              <span>{exercise.rating}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}