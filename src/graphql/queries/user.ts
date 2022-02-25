import crud from '../../database/crud';

interface UserArgs {
  id: number;
}

export const userQueries = {
  user: async (_: any, { id }: UserArgs) => {
    return await crud.user.getUser(id);
  },
};
