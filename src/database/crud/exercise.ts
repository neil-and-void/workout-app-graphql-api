import { prisma } from './prismaClient';

interface ExerciseFilter {
  id?: number;
  user_id: number;
  workout_id: number;
}

export const getExercises = async (filter: ExerciseFilter) => {
  return await prisma.exercises.findMany({
    where: {
      id: filter.id,
      workout_id: filter.workout_id,
      workouts: {
        user_id: filter.user_id,
      },
    },
  });
};
