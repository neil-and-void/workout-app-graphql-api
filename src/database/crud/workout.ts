import { prisma } from './prismaClient';

interface WorkoutFilter {
  user_id: number;
  id?: number;
}

/**
 * @param filter to search workouts by
 * @returns workouts
 */
export const getWorkouts = async (filter: WorkoutFilter) => {
  return await prisma.workouts.findMany({
    where: {
      ...filter,
    },
  });
};
