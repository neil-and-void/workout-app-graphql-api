import { AuthenticationError } from 'apollo-server-express';

import crud from '../../database/crud';

export const workoutQueries = {
  workout: async (_: any, args: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');

    const workouts = await crud.workout.getWorkouts({
      user_id: context.user.id,
      id: args.filter?.id,
      active: args.filter?.active,
    });

    return workouts;
  },
};
