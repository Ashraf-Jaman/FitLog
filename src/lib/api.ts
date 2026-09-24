import { Exercise } from "@/types/exercise";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getExercises(): Promise<Exercise[]> {
  const response = await fetch(API_URL, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const data: Exercise[] = await response.json();

  return data;
}