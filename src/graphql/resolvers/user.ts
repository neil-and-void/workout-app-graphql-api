import * as crud from '../../database/crud/user';

export const getUser = (id: number) => {
  return crud.getUser(id);
};
