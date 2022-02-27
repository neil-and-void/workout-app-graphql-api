import { prisma } from './prismaClient';

/**
 * READ sets of an exercise
 *
 * @param exerciseId
 * @returns Sets for given exercise id
 */
export const getSets = async (exerciseId: number) => {
  return await prisma.sets.findMany({
    where: {
      exercise_id: exerciseId,
    },
  });
};
