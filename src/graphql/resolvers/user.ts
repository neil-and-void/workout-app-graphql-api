import { AuthenticationError } from 'apollo-server-express';
import crud from '../../database/crud';

export const userResolvers = {
  workouts: async (_: any, __: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');
    return await crud.workout.getWorkouts(context.user.id);
  },
  workoutTemplates: async (_: any, __: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');
    return await crud.template.getWorkoutTemplates({ userId: context.user.id });
  },
};
