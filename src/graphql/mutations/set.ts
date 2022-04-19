import { AuthenticationError } from 'apollo-server-express';
import crud from '../../database/crud';

export const setMutations = {
  createSet: async (_: any, { set }: any, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');
    return await crud.set.createSet(set);
  },
};
