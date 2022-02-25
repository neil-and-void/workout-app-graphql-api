import { AuthenticationError } from 'apollo-server-express';
import crud from '../../database/crud';

interface WorkoutTemplateFilter {
  id: number;
  userId: number;
}

interface ExerciseTemplateFilter {
  id: number;
  workoutTemplateId: number;
}

export const templateQueries = {
  workoutTemplates: async (_: any, args: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');
    const { filter } = args;

    return await crud.template.getWorkoutTemplates({
      ...filter,
      user_id: context.user.id,
    });
  },
  exerciseTemplates: async (_: any, args: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');
    const { filter } = args;

    return await crud.template.getExerciseTemplates({
      ...filter,
      user_id: context.user.id,
    });
  },
};
