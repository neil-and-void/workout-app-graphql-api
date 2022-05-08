import { prisma } from './prismaClient';

interface ExerciseSet {
  exerciseId: number;
  weight: number;
  reps: number;
}

/**
 *
 * @param set new exercise
 * @returns Promise
 */
export const createSet = async (set: ExerciseSet) => {
  const { exerciseId, weight, reps } = set;
  return await prisma.sets.create({
    data: {
      exercise_id: exerciseId,
      weight: weight,
      reps: reps,
    },
  });
};

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

/**
 * DELETE set by id
 *
 * @param exerciseId id of set to delete
 * @returns Promise<set that got deleted>
 */
export const deleteSet = async (exerciseId: number) => {
  return await prisma.sets.delete({
    where: {
      id: exerciseId,
    },
  });
};
