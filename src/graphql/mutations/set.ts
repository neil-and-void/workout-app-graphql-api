import { AuthenticationError } from 'apollo-server-express';
import crud from '../../database/crud';

export const setMutations = {
  createSet: async (_: any, args: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');
    const { set } = args;
    return await crud.set.createSet(set);
  },
};
