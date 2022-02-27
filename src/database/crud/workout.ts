import { prisma } from './prismaClient';

interface WorkoutFilter {
  user_id: number;
  id: number;
}

export const getWorkouts = async (filter: WorkoutFilter) => {
  return await prisma.workouts.findMany({
    where: {
      ...filter,
    },
  });
};
