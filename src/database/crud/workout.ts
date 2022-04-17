import { Prisma } from '@prisma/client';
import { prisma } from './prismaClient';

interface WorkoutFilter {
  user_id: number;
  id?: number;
}

/**
 * @param newWorkout new workout
 * @returns created workout
 */
export const createWorkout = async (
  workoutTemplateId: number,
  userId: number
) => {
  try {
    const workoutTemplate = await prisma.workout_templates.findFirst({
      where: { id: workoutTemplateId, user_id: userId },
      include: {
        exercise_templates: true,
      },
    });

    const exerciseData = workoutTemplate?.exercise_templates.map(
      (exercise) => ({
        exercise_template_id: exercise.id,
      })
    );

    return await prisma.workouts.create({
      data: {
        active: true, // new workouts always set to current active
        started: new Date(),
        user_id: workoutTemplate!.user_id,
        ended: null,
        workout_template_id: workoutTemplate!.id,
        exercises: {
          create: exerciseData,
        },
      },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2025') {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        );
      }
    }
  }
};

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
