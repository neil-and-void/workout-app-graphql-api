import { AuthenticationError } from 'apollo-server-express';
import crud from '../../database/crud';

export const workoutMutations = {
  workout: async (_: any, { newWorkout }: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');
    return await crud.workout.createWorkout({
      ...newWorkout,
      userId: context.user.id,
    });
  },
};
