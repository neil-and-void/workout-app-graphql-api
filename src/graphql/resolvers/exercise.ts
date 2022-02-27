import { AuthenticationError } from 'apollo-server-express';
import crud from '../../database/crud';

export const exerciseResolvers = {
  exerciseTemplate: async (parent: any, _: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');
    return await crud.template.getExerciseTemplate(parent.exercise_template_id);
  },
  sets: async (parent: any, _: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');
    return await crud.set.getSets(parent.id);
  },
};
