import { prisma } from './prismaClient';

interface WorkoutTemplateFilter {
  id?: number;
  userId?: number;
}

interface ExerciseTemplateFilter {
  id?: number;
  userId: number;
  workoutTemplateId?: number;
}

export const createWorkoutTemplate = async (workoutTemplate: any) => {
  const { exerciseTemplates } = workoutTemplate;
  return await prisma.workout_templates.create({
    data: {
      name: workoutTemplate.name,
      user_id: workoutTemplate.userId,
      exercise_templates: { create: [...exerciseTemplates] },
    },
  });
};

/**
 * @param filter parameters to filter query by
 * @returns WorkoutTemplates
 */
export const getWorkoutTemplates = async (filter: WorkoutTemplateFilter) => {
  return await prisma.workout_templates.findMany({
    where: {
      AND: {
        id: filter.id,
        user_id: filter.userId,
      },
    },
  });
};

/**
 * @param filter parameters to filter query by
 * @returns WorkoutTemplates
 */
export const getWorkoutTemplate = async (id: number) => {
  return await prisma.workout_templates.findUnique({
    where: {
      id: id,
    },
  });
};

/**
 * @param filter parameters to filter query by
 * @returns ExerciseTemplates
 */
export const getExerciseTemplates = async (filter: ExerciseTemplateFilter) => {
  const exerciseTemplates = await prisma.workout_templates.findMany({
    select: {
      exercise_templates: {
        select: {
          id: true,
          name: true,
          sets: true,
          workout_template_id: true,
          reps: true,
        },
      },
    },
    where: {
      AND: {
        user_id: filter.userId,
        exercise_templates: {
          every: {
            workout_template_id: filter.workoutTemplateId,
          },
        },
      },
    },
  });

  // formatting, bring exercise templates to top level in array
  return exerciseTemplates[0].exercise_templates.map(
    (exerciseTemplate) => exerciseTemplate
  );
};
