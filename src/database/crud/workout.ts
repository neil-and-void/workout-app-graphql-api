import { prisma } from './prismaClient';

interface WorkoutFilter {
  user_id: number;
  id?: number;
}

interface SetData {
  exerciseId: number;
  weight: number;
  reps: number;
}

interface ExerciseData {
  exerciseTemplateId: number;
  setData: SetData[];
}

interface NewWorkout {
  started: string;
  ended: string;
  active: boolean;
  userId: number;
  workoutTemplateId: number;
  exerciseData: ExerciseData[];
}

/**
 * @param newWorkout new workout
 * @returns created workout
 */
export const createWorkout = async (newWorkout: NewWorkout) => {
  const exerciseData = newWorkout.exerciseData.map((exercise) => {
    // create nested sets data
    const setsData = exercise.setData.map((setData) => ({
      weight: setData.weight,
      reps: setData.reps,
    }));

    return {
      exercise_template_id: exercise.exerciseTemplateId,
      sets: {
        create: setsData,
      },
    };
  });

  return await prisma.workouts.create({
    data: {
      active: newWorkout.active,
      started: newWorkout.started,
      user_id: newWorkout.userId,
      ended: newWorkout.ended,
      workout_template_id: newWorkout.workoutTemplateId,
      exercises: {
        create: exerciseData,
      },
    },
  });
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
