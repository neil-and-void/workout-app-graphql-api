import { prisma } from './prismaClient';

export const getWorkoutTemplates = async (id: number) => {
  prisma.workout_templates.findMany({
    where: {
      id,
    },
  });
};
