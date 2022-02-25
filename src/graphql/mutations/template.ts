import { AuthenticationError } from 'apollo-server-express';
import crud from '../../database/crud';

export const templateMutations = {
  createWorkoutTemplate: async (_: any, args: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');

    const { workoutTemplateData } = args;
    const newWorkoutTemplate = await crud.template.createWorkoutTemplate({
      ...workoutTemplateData,
      userId: context.user.id,
    });

    return {
      id: newWorkoutTemplate.id,
      name: newWorkoutTemplate.name,
      userId: newWorkoutTemplate.user_id,
    };
  },
};
