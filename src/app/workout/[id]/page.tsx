import Image from "next/image";
import Link from "next/link";
import { getExercises } from "@/lib/api";

interface WorkoutPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutPage({
  params,
}: WorkoutPageProps) {
  const { id } = await params;

  const exercises = await getExercises();

  const exercise = exercises.find(
    (item) => String(item.id) === id
  );

  if (!exercise) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0d11] px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">
            Workout Not Found
          </h1>

          <Link
            href="/"
            className="mt-5 inline-block rounded-lg bg-lime-400 px-6 py-3 text-sm font-bold text-black"
          >
            Back to Library
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0d11] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Back */}
        <Link
          href="/"
          className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-white"
        >
          ← Back to Library
        </Link>

        {/* Main Layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr]">

          {/* ================= LEFT ================= */}
          <div className="w-full">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl border border-white/10 bg-[#12151b]">
              <Image
                src={exercise.image}
                alt={exercise.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex w-full flex-col">

            {/* Title */}
            <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl">
              {exercise.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              {exercise.description}
            </p>

            {/* Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {exercise.muscleGroups.slice(0, 2).map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-lime-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= INFO ================= */}
            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#15181e]">

              {/* Equipment */}
              <div className="flex min-h-12 items-center justify-between border-b border-white/5 px-4 py-3 sm:px-5">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Equipment
                </span>

                <span className="text-sm text-gray-300">
                  {exercise.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex min-h-12 items-center justify-between border-b border-white/5 px-4 py-3 sm:px-5">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Difficulty
                </span>

                <span className="text-sm text-gray-300">
                  {exercise.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex min-h-12 items-center justify-between border-b border-white/5 px-4 py-3 sm:px-5">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Sets
                </span>

                <span className="text-sm text-gray-300">
                  {exercise.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex min-h-12 items-center justify-between border-b border-white/5 px-4 py-3 sm:px-5">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Reps
                </span>

                <span className="text-sm text-gray-300">
                  {exercise.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex min-h-12 items-center justify-between border-b border-white/5 px-4 py-3 sm:px-5">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Duration
                </span>

                <span className="text-sm text-gray-300">
                  {exercise.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex min-h-12 items-center justify-between border-b border-white/5 px-4 py-3 sm:px-5">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Calories
                </span>

                <span className="text-sm text-gray-300">
                  {exercise.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex min-h-12 items-center justify-between px-4 py-3 sm:px-5">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  Rating
                </span>

                <span className="text-sm text-gray-300">
                  ⭐ {exercise.rating}
                </span>
              </div>
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-7">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                Instructions
              </h2>

              <div className="mt-3 space-y-2.5">
                {exercise.instructions.map(
                  (instruction, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 shrink-0 text-xs font-semibold text-gray-500">
                        {index + 1}.
                      </span>

                      <p className="text-sm leading-5 text-gray-400 sm:text-[15px]">
                        {instruction}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-7 flex flex-wrap items-center gap-3">

              <button
                type="button"
                className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
              >
                ⊞ &nbsp; Add to today&apos;s plan
              </button>

              <button
                type="button"
                className="rounded-lg border border-white/15 bg-[#11141a] px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-white/30 hover:text-white"
              >
                ♡ &nbsp; Save for later
              </button>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}