import { AuthenticationError } from 'apollo-server-express';
import crud from '../../database/crud';

export const templateQueries = {
  workoutTemplates: async (_: any, args: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');
    const { filter } = args;

    return await crud.template.getWorkoutTemplates({
      ...filter,
      userId: context.user.id,
    });
  },
  exerciseTemplates: async (_: any, args: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');
    const { filter } = args;

    const res = await crud.template.getExerciseTemplates({
      ...filter,
      userId: context.user.id,
    });

    return res;
  },
};
