import { AuthenticationError } from 'apollo-server-express';
import crud from '../../database/crud';

export const workoutResolvers = {
  exercises: async (parent: any, _: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');

    return await crud.exercise.getExercises({
      user_id: context.user.id,
      workout_id: parent.id,
    });
  },
};
