import * as crud from '../../database/crud/user';

export const getUser = (id: number) => {
  console.log(id);
  return crud.getUser(id);
};
