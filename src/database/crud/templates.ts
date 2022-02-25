import { prisma } from './prismaClient';

interface WorkoutTemplatesFilter {
  id?: number;
  user_id?: number;
}

interface ExerciseTemplateFilter {
  id?: number;
  workout_template_id?: number;
}

export const createWorkoutTemplate = async (workoutTemplate: any) => {
  const { exerciseTemplates } = workoutTemplate;
  return await prisma.workout_templates.create({
    data: {
      name: 'hi',
      user_id: workoutTemplate.userId,
      exercise_templates: { create: [...exerciseTemplates] },
    },
  });
};

/**
 * @param filter parameters to filter query by
 * @returns WorkoutTemplates
 */
export const getWorkoutTemplates = async (filter: WorkoutTemplatesFilter) => {
  return await prisma.workout_templates.findMany({
    where: {
      AND: {
        ...filter,
      },
    },
  });
};

/**
 * @param filter parameters to filter query by
 * @returns ExerciseTemplates
 */
export const getExerciseTemplates = async (filter: ExerciseTemplateFilter) => {
  return await prisma.exercise_templates.findMany({
    where: {
      ...filter,
    },
  });
};
