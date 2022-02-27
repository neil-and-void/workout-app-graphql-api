import { AuthenticationError } from 'apollo-server-express';
import crud from '../../database/crud';

export const templateResolvers = {
  exerciseTemplates: async (parent: any, _: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');

    const res = await crud.template.getExerciseTemplates({
      userId: parent.user_id,
      workoutTemplateId: parent.id,
    });

    return res;
  },
};
