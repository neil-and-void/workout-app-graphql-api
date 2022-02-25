import { AuthenticationError } from 'apollo-server-express';
import crud from '../../database/crud';

interface UserArgs {
  id: number;
}

export const userQueries = {
  user: async (_: any, { id }: UserArgs, context: any) => {
    if (!context.user) throw new AuthenticationError('Unauthenticated');
    return await crud.user.getUser(id);
  },
};
